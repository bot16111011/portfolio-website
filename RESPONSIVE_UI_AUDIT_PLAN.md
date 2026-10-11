# React UI Reliability and Responsive Design Plan

## Scope

This plan records the current UI issues, their likely causes, and the implementation approach for a later coding pass. It is based on the current React and SCSS source only; no application behaviour has been changed.

## Confirmed component and interaction issues

### 1. The top-left navigation control can appear to disappear or behave inconsistently

**What is happening**

The navigation control (`Closebutton`) is rendered as part of `Sidebar`, and `Sidebar` is rendered inside `Navbar`. `Navbar` is mounted twice: once in the home section and again in the contact section. Both sidebars render fixed-position buttons at `top: 25px; left: 25px`, creating two overlapping controls with separate `open` state.

The control also shares `z-index: 999` with the custom cursor and the sidebar panel, while the repeated back-to-top control has `z-index: 1000`. This makes the visual stacking and pointer target depend on DOM order and the cursor position rather than an explicit overlay layer.

**Why it happens**

- Each `Sidebar` owns its own `useState(false)`, so opening one does not control the other.
- Both buttons use `position: fixed`, so they occupy the same screen coordinate regardless of their parent section.
- The cursor is also fixed at the same stacking level and does not use `pointer-events: none`.
- The panel, trigger, cursor, and back-to-top button do not have a defined layering system.

**What to do**

- Render one `Navbar`/`Sidebar` at the application level, rather than another inside the Contact section.
- Keep a single sidebar state owner and close it after a navigation link is selected.
- Introduce named z-index layers (base content, sticky content, navigation trigger, navigation panel, modal/overlay) instead of repeated numeric values.
- Give the cursor `pointer-events: none` and place it below interactive overlays, or disable it for coarse pointers.
- Use a semantic menu button with `aria-expanded`, `aria-controls`, an accessible label, keyboard focus styles, and Escape-to-close behaviour.

### 2. Multiple fixed back-to-top controls are mounted

**What is happening**

`Homearrow` is rendered after nearly every section. Every instance is `position: fixed` at the same bottom-right location, so many identical links overlap.

**Why it happens**

The component is treated as section content even though fixed positioning makes it global UI.

**What to do**

- Mount one back-to-top button in `App`.
- Show it only after a sensible scroll threshold.
- Make its tap target at least 44 by 44 CSS pixels and provide an `aria-label`.
- Ensure it is below an open navigation overlay and does not duplicate the active focus target.

### 3. Full-height sections and mandatory scroll snapping hide or clip content

**What is happening**

All `section` elements are forced to `height: 100vh` and the page uses `scroll-snap-type: y mandatory`. Several sections contain content that can exceed one viewport: Experience cards, About skills and text, Contact content, and each portfolio item.

**Why it happens**

Fixed viewport heights do not adapt to varying content size, text wrapping, browser chrome on mobile, or user text zoom. Mandatory scroll snapping can then jump past content or make sections difficult to scroll through.

**What to do**

- Replace content-section `height: 100vh` with `min-height: 100svh`/`100dvh` where a full-screen presentation is desired, and allow natural height for long content.
- Keep scroll snapping only for intentional hero or parallax panels; use `proximity` instead of `mandatory` if it remains useful.
- Test with increased browser text size and the smallest supported phone height.

### 4. Responsive CSS is incomplete and relies on fixed desktop dimensions

**What is happening**

The current styles primarily define one mobile breakpoint (`max-width: 767px`). Tablet-specific layouts are mostly absent. Several elements use fixed dimensions that will overflow or crowd at common laptop, tablet, and mobile widths.

Examples include:

- About title width is fixed at `1366px`; its two columns, icon sizes, and margins have no responsive rules.
- Home uses an `80px` heading, a fixed right image offset, and a two-column composition that has no tablet layout.
- Navbar social links and resume button can exceed narrow widths.
- Experience cards are designed as a horizontal row, with only a narrow-phone column rule.
- Contact uses a `90px` heading and large illustration without a tablet layout.
- Portfolio uses full-viewport nested sections and desktop-sized text/media.

**Why it happens**

Breakpoints are not applied consistently, and the CSS does not use fluid constraints such as `clamp()`, `min()`, `max()`, responsive grids, or container widths.

**What to do**

- Define a small, intentional breakpoint strategy: compact (up to 639px), tablet (640px to 1023px), laptop (1024px to 1439px), and wide desktop (1440px and above).
- Establish shared layout tokens: content max-width, horizontal gutters, header height, spacing scale, type scale, and z-index layers.
- Replace fixed widths with `width: min(...)`, `max-width`, CSS grid, flex wrapping, and `clamp()` typography.
- Design each section mobile-first, then enhance it for wider screens.

### 5. Animation behaviour is tied to desktop interactions and can reduce usability

**What is happening**

- Project videos only play on mouse enter, which is unavailable on touch-only devices.
- The custom cursor is driven by every mouse movement and is not gated by pointer type or reduced-motion preferences.
- Several parallax and entrance animations use large transforms; some components calculate `useInView` but do not use the result.
- The Experience component always animates because it sets `animate="animate"`, so it does not wait for the section to enter view.

**Why it happens**

Interactions assume a desktop pointer and motion is not centrally controlled.

**What to do**

- Use `prefers-reduced-motion` and Framer Motion's reduced-motion support to offer static alternatives.
- Replace hover-only video behaviour with visible play/pause controls or a tap-friendly preview strategy; provide video `poster` images.
- Enable the custom cursor only for `pointer: fine` devices and remove it from the interaction layer.
- Standardize viewport animation triggers and avoid off-screen transforms that can create horizontal overflow.

### 6. Navigation and markup need reliability and accessibility cleanup

**What is happening**

- Several external links use `target="_blank"` without `rel="noopener noreferrer"`.
- Images and videos have missing, empty, or inaccurate alternative text; video uses an unsupported `alt` attribute.
- Home repeats the same `id="heading"` three times.
- Buttons are nested in links in several places, creating ambiguous interactive controls.
- The contact form exposes EmailJS identifiers directly in the client bundle and has minimal submission feedback.

**Why it happens**

The app was assembled section by section without a cross-site semantic and accessibility pass.

**What to do**

- Use unique IDs and semantic heading order.
- Use one interactive element per action; style links as buttons where navigation is intended.
- Add `rel="noopener noreferrer"` to external links.
- Add meaningful `alt` text, captions or transcripts where appropriate, and a `poster` for videos.
- Move EmailJS configuration to Vite environment variables and add loading, success, and recoverable error states.

## Implementation phases

### Phase 1 — Stabilize global controls

1. Consolidate Navbar, Sidebar, and Homearrow into single application-level instances.
2. Create the z-index and overlay rules.
3. Repair menu state, close-on-navigation, Escape handling, focus management, and touch targets.
4. Fix the custom cursor interaction layer.

**Done when:** exactly one menu button and one back-to-top control are present; they remain visible, tappable, and predictable at every viewport size.

### Phase 2 — Establish the responsive foundation

1. Replace global fixed viewport heights with responsive minimum heights and content-safe overflow.
2. Add layout tokens and mobile-first breakpoints.
3. Define fluid typography, gutters, and maximum content widths.
4. Restrict or soften scroll snapping.

**Done when:** no horizontal scrolling or clipped content occurs from 320px-wide phones through wide desktops, including at 200% browser zoom.

### Phase 3 — Rebuild each section responsively

1. Home: stack content and portrait safely; scale title and CTAs; prevent background slider overflow.
2. Experience: use responsive cards/grid; preserve readable copy without cramming it into a viewport.
3. Portfolio: make media, descriptions, and controls touch-friendly; eliminate nested fixed-height constraints.
4. About: replace fixed `1366px` title width and large fixed icons with a responsive skills grid.
5. Contact: use a single-column mobile/tablet layout and resilient form feedback.

**Done when:** each section is usable at compact, tablet, laptop, and desktop widths without special-case clipping.

### Phase 4 — Motion, semantics, and quality assurance

1. Add reduced-motion behaviour and touch equivalents for hover interactions.
2. Complete semantics, keyboard navigation, visible focus states, and alternative text.
3. Move client configuration values to environment variables where appropriate.
4. Run lint/build and manual viewport/device checks.

**Done when:** keyboard-only navigation works, reduced motion is respected, and production build/lint pass.

## Responsive test matrix for the coding pass

| Target | Viewport to test | Key checks |
| --- | --- | --- |
| Compact mobile | 320 x 568, 375 x 667 | Menu, text wrapping, tap targets, long content, no horizontal overflow |
| Large mobile | 390 x 844, 430 x 932 | Fixed controls, portrait layout, scroll behaviour, contact form |
| Tablet portrait | 768 x 1024 | Navigation density, two-column transitions, cards, parallax clipping |
| Tablet landscape | 1024 x 768 | Header/social controls, content height, media layout |
| Laptop | 1280 x 800 | Desktop layout, sticky/progress controls, animation performance |
| Desktop | 1440 x 900 and 1920 x 1080 | Max-width constraints, image composition, content density |

Also test: keyboard-only navigation, a coarse touch pointer, a fine mouse pointer, `prefers-reduced-motion`, 200% text zoom, and a slow network/media load.

## Out of scope for this planning pass

- Visual redesign or content rewriting.
- Replacing the current animation library.
- Adding new backend infrastructure.
- Implementing the changes described above.
