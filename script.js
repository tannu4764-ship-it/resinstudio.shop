/**
 * Shared JavaScript — My Resin Studio
 * Mobile Navigation, FAQ Accordions, Form Validation, and Product Filter Tabs
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          navMenu.classList.remove('is-open');
          navToggle.classList.remove('is-open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('is-open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach((button) => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item');
      if (!faqItem) return;

      const isOpen = faqItem.classList.contains('is-open');

      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach((item) => {
        if (item !== faqItem) {
          item.classList.remove('is-open');
          const btn = item.querySelector('.faq-question');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      faqItem.classList.toggle('is-open', !isOpen);
      button.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });

  // 3. Product Catalog Category Filter Tabs (products.html)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const categoryBlocks = document.querySelectorAll('.catalog-category-block');

  if (filterBtns.length > 0 && categoryBlocks.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filterVal = btn.getAttribute('data-filter');

        // Update active tab button state
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        // Show/hide category blocks
        categoryBlocks.forEach((block) => {
          const blockCategory = block.getAttribute('data-category');
          if (filterVal === 'all' || blockCategory === filterVal) {
            block.style.display = 'block';
          } else {
            block.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. Contact & Custom Order Enquiry Form Validation (contact.html)
  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    const fields = [
      {
        id: 'customer-name',
        errorId: 'error-customer-name',
        validate: (val) => val.trim().length >= 2,
        errorMessage: 'Please enter your full name (at least 2 characters).'
      },
      {
        id: 'mobile-number',
        errorId: 'error-mobile-number',
        validate: (val) => /^\d{10}$/.test(val.trim()),
        errorMessage: 'Please enter a valid 10-digit mobile number (e.g. 9876543210).'
      },
      {
        id: 'product-item',
        errorId: 'error-product-item',
        validate: (val) => val.trim().length >= 2,
        errorMessage: 'Please specify the resin product or custom item you need.'
      },
      {
        id: 'occasion',
        errorId: 'error-occasion',
        validate: (val) => val.trim() !== '',
        errorMessage: 'Please select an occasion or purpose from the list.'
      },
      {
        id: 'custom-message',
        errorId: 'error-custom-message',
        validate: (val) => val.trim().length >= 5,
        errorMessage: 'Please share a few details about your preferred colours, text, or requirements.'
      }
    ];

    fields.forEach((fieldConfig) => {
      const input = document.getElementById(fieldConfig.id);
      const errorSpan = document.getElementById(fieldConfig.errorId);

      if (input && errorSpan) {
        const clearHandler = () => {
          if (input.classList.contains('is-invalid')) {
            if (fieldConfig.validate(input.value)) {
              input.classList.remove('is-invalid');
              errorSpan.textContent = '';
              errorSpan.classList.remove('is-visible');
            }
          }
        };

        input.addEventListener('input', clearHandler);
        input.addEventListener('change', clearHandler);
      }
    });

    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isFormValid = true;
      let firstInvalidInput = null;

      fields.forEach((fieldConfig) => {
        const input = document.getElementById(fieldConfig.id);
        const errorSpan = document.getElementById(fieldConfig.errorId);

        if (input && errorSpan) {
          const isValid = fieldConfig.validate(input.value);
          if (!isValid) {
            isFormValid = false;
            input.classList.add('is-invalid');
            errorSpan.textContent = fieldConfig.errorMessage;
            errorSpan.classList.add('is-visible');
            if (!firstInvalidInput) {
              firstInvalidInput = input;
            }
          } else {
            input.classList.remove('is-invalid');
            errorSpan.textContent = '';
            errorSpan.classList.remove('is-visible');
          }
        }
      });

      if (!isFormValid) {
        if (firstInvalidInput) {
          firstInvalidInput.focus();
        }
        return;
      }

      const nameVal = document.getElementById('customer-name').value.trim();
      const mobileVal = document.getElementById('mobile-number').value.trim();
      const productVal = document.getElementById('product-item').value.trim();
      const occasionVal = document.getElementById('occasion').value.trim();
      const messageVal = document.getElementById('custom-message').value.trim();

      const successBanner = document.getElementById('form-success');
      const successSummary = document.getElementById('success-summary');
      const whatsappContinueBtn = document.getElementById('whatsapp-continue-btn');

      if (successSummary) {
        successSummary.textContent = `Thank you, ${nameVal}! Your enquiry for "${productVal}" (${occasionVal}) has been received. We will contact you at +91 ${mobileVal} shortly to discuss customization details and share pricing.`;
      }

      if (whatsappContinueBtn) {
        const waText = encodeURIComponent(
          `Hi My Resin Studio, I submitted an enquiry!\n\n` +
          `👤 Name: ${nameVal}\n` +
          `📱 Mobile: ${mobileVal}\n` +
          `🎁 Item: ${productVal}\n` +
          `🎉 Occasion: ${occasionVal}\n` +
          `📝 Details: ${messageVal}`
        );
        whatsappContinueBtn.href = `https://wa.me/919XXXXXXXXX?text=${waText}`;
      }

      if (successBanner) {
        successBanner.classList.add('is-visible');
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      enquiryForm.reset();
    });
  }

  // 5. Custom Order Builder Logic (custom-order.html)
  const builderForm = document.getElementById('custom-builder-form');
  if (builderForm) {
    const livePriceDisplay = document.getElementById('live-price-display');
    const summaryItemText = document.getElementById('summary-item-text');
    const summaryThemeText = document.getElementById('summary-theme-text');
    const builderWhatsappBtn = document.getElementById('builder-whatsapp-btn');

    const updateBuilderSummary = () => {
      const selectedItemRadio = builderForm.querySelector('input[name="custom-item"]:checked');
      const selectedItem = selectedItemRadio ? selectedItemRadio.value : 'Alphabet Initial Keychain';
      const basePrice = selectedItemRadio ? selectedItemRadio.getAttribute('data-base-price') : '199';

      const themeSelect = document.getElementById('builder-theme');
      const selectedTheme = themeSelect ? themeSelect.value : 'Blush Rose & Gold Leaf';

      const textInput = document.getElementById('builder-text');
      const customText = textInput && textInput.value.trim() ? textInput.value.trim() : 'None specified';

      const notesInput = document.getElementById('builder-notes');
      const customNotes = notesInput && notesInput.value.trim() ? notesInput.value.trim() : 'Standard dimensions';

      const nameInput = document.getElementById('builder-name');
      const customerName = nameInput && nameInput.value.trim() ? nameInput.value.trim() : 'Customer';

      const localitySelect = document.getElementById('builder-locality');
      const locality = localitySelect ? localitySelect.value : 'Govind Nagar, Kanpur';

      if (livePriceDisplay) {
        livePriceDisplay.textContent = `From ₹${basePrice}`;
      }
      if (summaryItemText) {
        summaryItemText.textContent = selectedItem;
      }
      if (summaryThemeText) {
        summaryThemeText.textContent = selectedTheme;
      }

      if (builderWhatsappBtn) {
        const payload =
          `Hi My Resin Studio, I would like to place a custom order!\n\n` +
          `🎁 Item: ${selectedItem} (From ₹${basePrice})\n` +
          `🎨 Theme: ${selectedTheme}\n` +
          `✍️ Custom Text: ${customText}\n` +
          `📝 Notes: ${customNotes}\n` +
          `👤 Name: ${customerName}\n` +
          `📍 Locality: ${locality}`;

        builderWhatsappBtn.href = `https://wa.me/919XXXXXXXXX?text=${encodeURIComponent(payload)}`;
      }
    };

    builderForm.addEventListener('change', updateBuilderSummary);
    builderForm.addEventListener('input', updateBuilderSummary);
    updateBuilderSummary();
  }
});
