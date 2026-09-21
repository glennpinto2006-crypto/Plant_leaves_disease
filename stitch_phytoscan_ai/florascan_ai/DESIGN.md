---
name: FloraScan AI
colors:
  surface: '#eaffed'
  surface-dim: '#cbdfce'
  surface-bright: '#eaffed'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#e4f9e8'
  surface-container: '#dff3e2'
  surface-container-high: '#d9eddc'
  surface-container-highest: '#d3e8d7'
  on-surface: '#0e1f15'
  on-surface-variant: '#40493d'
  inverse-surface: '#233429'
  inverse-on-surface: '#e2f6e5'
  outline: '#707a6c'
  outline-variant: '#bfcaba'
  surface-tint: '#1b6d24'
  primary: '#0d631b'
  on-primary: '#ffffff'
  primary-container: '#2e7d32'
  on-primary-container: '#cbffc2'
  inverse-primary: '#88d982'
  secondary: '#126d27'
  on-secondary: '#ffffff'
  secondary-container: '#9cf49c'
  on-secondary-container: '#19722b'
  tertiary: '#00569f'
  on-tertiary: '#ffffff'
  tertiary-container: '#006eca'
  on-tertiary-container: '#ebf1ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a3f69c'
  primary-fixed-dim: '#88d982'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005312'
  secondary-fixed: '#9ff79f'
  secondary-fixed-dim: '#83da85'
  on-secondary-fixed: '#002105'
  on-secondary-fixed-variant: '#005318'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a5c8ff'
  on-tertiary-fixed: '#001c3a'
  on-tertiary-fixed-variant: '#004786'
  background: '#eaffed'
  on-background: '#0e1f15'
  surface-variant: '#d3e8d7'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: 4.25rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
  diagnostic-mono:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.125rem
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system expresses a fusion of botanical vitality and high-precision clinical diagnostics. Rather than leaning into rustic agricultural tones or heavy enterprise software aesthetics, the identity balances crisp laboratory clarity with an organic, reassuring lightness.

The target audience ranges from agronomists and greenhouse operators to enthusiastic home gardeners requiring immediate, trustworthy leaf analysis. The interface must communicate authority, technological precision, and environmental care.

Visual principles:
- **Clinical Botanics**: High-clarity whitespace, crisp micro-borders, and pristine surfaces evoke medical diagnostic equipment calibrated for living tissue.
- **Calm Precision**: AI intelligence is felt through sharp iconography, restrained cobalt accents, and rapid visual feedback—never overwhelming the natural green taxonomy.
- **Reassurance**: Health indicators, triage badges, and confidence metrics remain friendly and accessible rather than alarmist.

## Colors

The palette establishes an intentional dialogue between botanical greens and diagnostic blues, anchored by soft vegetal tints.

- **Primary (`#2E7D32`)**: Used for core actions, major plant identifiers, brand headers, and critical diagnostic confirm buttons.
- **Secondary (`#66BB6A`)**: Serves as an energetic highlight, active progress states, and healthy vitality indicators.
- **Deep Forest (`#183B1F`)**: High-contrast text titles, navigation anchors, and structural contrast.
- **AI Blue (`#1976D2`) & Light AI Blue (`#E8F2FF`)**: Dedicated to machine perception elements—scanner reticles, neural network confidence scores, automated bounding boxes, and diagnostic tooltips.
- **Surfaces & Backgrounds**: The base canvas is `#F7FBF5`, transitioning to `#EEF7EA` for subtle container offsets and clean `#FFFFFF` for diagnostic inspection cards.
- **Borders & Dividers**: Crisp delineation using `#DDE9DC` avoids shadow-heavy layouts and ensures an airy, clinical feel.
- **Triage & Diagnostics**:
  - Healthy: `#16A34A` on `#DCFCE7`
  - Warning / Stress: `#F59E0B` on `#FEF3C7`
  - Disease / Infection: `#DC2626` on `#FEE2E2`

## Typography

Inter provides pure functional precision across both small numeric diagnostics and sweeping display titles. Its tall x-height and neutral geometry ensure maximum legibility when displaying taxonomic plant names, pathogen categories, and probability percentages.

- **Weight Discipline**: Restrict weights to `400` (Regular) for descriptions and contextual guides, `500` (Medium) for meta-labels and tabular readings, and `600` (Semi-Bold) for structural titles and diagnoses. Avoid overly heavy black weights to preserve clinical lightness.
- **Case Rules**: Botanical classifications and scientific binomials should follow standard nomenclature (italicized in body, sentence case elsewhere). Metric chips and triage labels utilize uppercase styling only when paired with `label-sm`.

## Layout & Spacing

The layout is built on a responsive 12-column grid system (4 columns on mobile, 8 on tablet, 12 on desktop) centered within a maximum width container of 1280px.

- **Whitespace as Clinical Clarity**: Generous outer margins (`3rem` desktop) and ample element gaps prevent cognitive fatigue when evaluating diseased leaves or dense diagnosis reports.
- **Diagnostic Panes**: A standardized 60/40 two-column split is used during active leaf analysis—60% dedicated to image inspection and visual bounding boxes, 40% dedicated to health scores, symptom breakdowns, and recommended actions.
- **Reflow Behavior**: On viewports below 768px, inspection panes stack vertically, prioritizing the visual leaf upload viewfinder first, followed by immediate triage badges and actionable next steps.

## Elevation & Depth

This system avoids dark or blurry drop shadows in favor of ambient leaf-tinted luminance and delicate boundaries:

- **Flat Diagnostic Surfaces**: Base cards sit on `#FFFFFF` enclosed by a 1px continuous border of `#DDE9DC`.
- **Subtle Layered Lift**: When an element demands emphasis (such as the upload dropzone or active modal), apply an ultra-subtle ambient shadow:
  - Ambient: `0 4px 20px -2px rgba(24, 59, 31, 0.04)`
  - Elevated Popover / Flyout: `0 12px 32px -4px rgba(24, 59, 31, 0.08)`
- **AI Scanning Reticle Overlays**: Real-time analysis masks and bounding boxes use semi-translucent fills (`rgba(25, 118, 210, 0.08)`) flanked by a 1.5px stroke of `#1976D2` to isolate tissue anomalies cleanly over organic imagery.

## Shapes

The shape system communicates softness, approachability, and biological curvature:

- **Primary Cards & Panels**: Fixed at `1.25rem` (20px) to balance friendly approachability with structured framing.
- **Interactive Controls (Buttons, Inputs)**: `0.75rem` (12px) to ensure tactile grip without resembling a bubble toy.
- **Status Badges & Pill Metrics**: Fully rounded capsules (`9999px`) for confidence ratings, infection tags, and quick-filter chips.
- **Image Containers**: Leaf viewports inherit the full 20px card radius with `overflow: hidden` to frame visual captures cleanly.

## Components

### Buttons
- **Primary**: Background `#2E7D32`, text `#FFFFFF`, border `none`, padding `0.75rem 1.5rem`, radius `12px`. Hover shifts to `#236328`.
- **AI Action**: Background `#1976D2`, text `#FFFFFF`. Used strictly for "Scan Leaf", "Re-run Model", or "Extract Report". Hover shifts to `#145CA4`.
- **Secondary / Ghost**: Background `transparent`, text `#2E7D32`, border `1px solid #DDE9DC`. Hover: `#EEF7EA`.

### Cards & Diagnostic Panels
- Background `#FFFFFF`, border `1px solid #DDE9DC`, border-radius `20px`, padding `1.5rem`.
- Interactive cards (such as previous scan history) transition border color to `#66BB6A` and elevate with the ambient leaf shadow on hover.

### Diagnostic Triage Chips
- Compact pill indicators with `0.25rem 0.75rem` padding, font `label-sm`:
  - **Healthy**: `#16A34A` text, `#DCFCE7` background, `#BBF7D0` border.
  - **Warning**: `#D97706` text, `#FEF3C7` background, `#FDE68A` border.
  - **Pathogen / Disease**: `#DC2626` text, `#FEE2E2` background, `#FECACA` border.
  - **AI Confidence**: `#1976D2` text, `#E8F2FF` background, `#BFDBFE` border.

### Leaf Upload & Camera Viewfinder
- Border `2px dashed #DDE9DC`, background `#F7FBF5`, border-radius `20px`.
- Drag-active state shifts border to `2px dashed #2E7D32` and background to `#EEF7EA`.
- Incorporates dynamic corner target reticles in AI Blue (`#1976D2`) to guide leaf centering.

### Form Inputs & Selectors
- Background `#FFFFFF`, border `1px solid #DDE9DC`, border-radius `12px`, padding `0.75rem 1rem`, text `#4B5D50`.
- Focus ring: `2px solid #2E7D32` with a `2px` offset in `#F7FBF5`. Placeholder text in `#7B897E`.

### Confidence Meter & Progress Indicators
- Bar height `8px`, track `#EEF7EA`, radius `9999px`.
- Dynamic fill: Healthy gradients (`#66BB6A` to `#2E7D32`) or AI analysis pulse (`#1976D2`).