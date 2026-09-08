# Design Brief — My Resin Studio

This design brief establishes the visual foundation, typography scale, spacing system, and component guidelines for the **My Resin Studio** website, tailored for local Kanpur customers and parents seeking warm, trustworthy, and bespoke handcrafted gifts.

---

## 1. Colour Palette

- **Primary (Artisan Rose Pink)**: `#E07A86` — Warm, creative, and inviting primary brand color.
- **Secondary (Maroon-Beige Blend)**: `#9B4A58` (Deep Maroon) & `#C89B84` (Warm Maroon-Beige) — Grounding, mature, and comforting accents.
- **Accent (Champagne Gold Leaf)**: `#D4AF37` — Reflects resin shimmer, metallic foil inclusions, and handcrafted quality.
- **Dark Text (Espresso Charcoal)**: `#2B1E22` — High-contrast, readable dark neutral with warm undertones.
- **Neutral Light (Warm Alabaster / Cream)**: `#FFF9F6` — Clean, soft page background that reduces harsh screen glare.
- **Neutral Surface / Border (Cashmere Beige)**: `#F3E8E2` — Subtle card background and divider border color.

> **Palette Rationale**: This palette blends nurturing rose pink, comforting maroon-beige, and champagne gold to convey heartfelt handmade craftsmanship and trusted, parent-friendly warmth.

---

## 2. Type Scale & Typography

- **Heading / Display Font**: `Algerian` (with web fallbacks: `'Cinzel Decorative'`, `'Cinzel'`, Georgia, serif)
- **Body & Small Text Font**: `Mongolian Baiti` (with Google Font fallbacks: `'Noto Sans Mongolian'`, `'Lora'`, `'Plus Jakarta Sans'`, sans-serif)

### Typography Scale

| Element | Mobile Size | Desktop Size | Line Height | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **H1** | 2.0rem (32px) | 2.625rem (42px) | 1.2 | Bold (700) | Main page titles and hero banners |
| **H2** | 1.5rem (24px) | 1.875rem (30px) | 1.3 | Semi-bold (600) | Major section headings |
| **H3** | 1.25rem (20px) | 1.375rem (22px) | 1.4 | Semi-bold (600) | Card titles, step headings, sub-features |
| **Body** | 0.9375rem (15px)| 1.0rem (16px) | 1.6 | Regular (400) | Paragraphs, product descriptions, steps |
| **Small Text** | 0.8125rem (13px)| 0.875rem (14px) | 1.5 | Regular (400) | Price badges, captions, helper notes, metadata |

---

## 3. Spacing Scale

A standardized 8pt spacing grid ensuring visual balance and mobile touch friendliness:

- `space-2xs`: `4px` (`0.25rem`) — Fine gaps, icon-to-text spacing
- `space-xs`: `8px` (`0.5rem`) — Compact padding, badge insets
- `space-sm`: `12px` (`0.75rem`) — Tight form field gaps, small element margins
- `space-md`: `16px` (`1.0rem`) — Standard container padding, mobile card gutters
- `space-lg`: `24px` (`1.5rem`) — Desktop card padding, section sub-gaps
- `space-xl`: `32px` (`2.0rem`) — Form section separations, grid gutters
- `space-2xl`: `48px` (`3.0rem`) — Major section vertical padding (mobile)
- `space-3xl`: `64px` (`4.0rem`) — Major section vertical padding (desktop)

---

## 4. Component Styles

### Buttons
- **Primary Action (WhatsApp / Custom Order)**: Rounded pill shape (`border-radius: 9999px`), rich rose pink background (`#E07A86`) with white text or WhatsApp green accent, bold text weight, subtle elevation shadow, and a minimum tap height of 48px for effortless thumb tapping on mobile.
- **Secondary / Ghost Button**: Cashmere beige background (`#F3E8E2`) with maroon border (`1.5px solid #9B4A58`), deep text (`#2B1E22`), and smooth color inversion on hover.
- **Micro-Interactions**: Gentle lift (`transform: translateY(-2px)`) and gold focus outline (`2px solid #D4AF37`) for keyboard accessibility.

### Cards
- **Product & Feature Cards**: Clean rectangular containers with soft 14px rounded corners, crisp 1px borders in Cashmere Beige (`#F3E8E2`), and warm white backgrounds (`#FFFFFF`).
- **Shadows**: Soft multi-layered ambient drop shadow (`box-shadow: 0 4px 20px rgba(43, 30, 34, 0.05)`) creating a polished, elevated resin-slab look without visual clutter.
- **Padding**: 16px internal padding on mobile; 24px on desktop.

### Form Fields
- **Inputs & Select Boxes**: 12px rounded borders, warm cream background (`#FFF9F6`), subtle border (`1px solid #C89B84`), and 48px field height for comfortable mobile typing.
- **Active / Focus State**: 2px solid rose/gold highlight ring with zero default browser outline to give a clean, premium feel.
- **Labels & Helper Text**: Crisp dark espresso labels positioned above inputs with clear asterisk markers for required fields and reassuring privacy helper text.

---

## 5. Mobile-First Breakpoints

All CSS layout rules are built mobile-first and expand outward using progressive `min-width` media queries:

- **Mobile Default (Base)**: `< 480px` (Optimized for single-column vertical flow, thumb-reachable CTAs, sticky WhatsApp action bar)
- **Phablet / Mobile Landscape**: `@media (min-width: 480px)` (Two-column compact product grids)
- **Tablet Portrait**: `@media (min-width: 768px)` (Multi-column feature sections, horizontal step indicators, expanded navigation)
- **Desktop / Laptop**: `@media (min-width: 1024px)` (Three-column product catalog, split hero layout, side-by-side order customizer)
- **Wide Desktop**: `@media (min-width: 1280px)` (Max container width capped at 1200px with generous balanced side margins)
