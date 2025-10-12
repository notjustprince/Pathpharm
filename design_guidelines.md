# Design Guidelines: Anatomy Learning Platform

## Design Approach

**Hybrid Approach**: Combining educational platform patterns (Khan Academy, Duolingo) with medical professional aesthetics (Clean, trustworthy, organized). This platform requires both utility for learning and visual engagement for retention.

**Core Principle**: Medical credibility meets educational engagement - professional enough for healthcare students, approachable enough for continuous learning.

---

## Color Palette

### Light Mode
- **Primary**: 210 100% 45% (Medical blue - trustworthy, professional)
- **Secondary**: 210 15% 25% (Deep slate for text)
- **Accent**: 150 60% 45% (Teal for success states, quiz correct answers)
- **Error**: 0 70% 55% (Red for incorrect quiz answers)
- **Background**: 0 0% 98% (Soft white)
- **Surface**: 0 0% 100% (Pure white for cards)
- **Border**: 210 20% 90% (Subtle gray)

### Dark Mode
- **Primary**: 210 100% 60% (Brighter medical blue)
- **Secondary**: 210 15% 85% (Light text)
- **Accent**: 150 50% 55% (Softer teal)
- **Error**: 0 60% 60% (Softer red)
- **Background**: 220 15% 12% (Deep navy-gray)
- **Surface**: 220 12% 16% (Elevated dark surface)
- **Border**: 210 15% 25% (Dark borders)

---

## Typography

**Font Stack**:
- **Primary**: 'Inter' (Google Fonts) - Clean, readable, professional for body text and UI
- **Headings**: 'Plus Jakarta Sans' (Google Fonts) - Modern, slightly rounded for friendly authority

**Hierarchy**:
- **Hero/Display**: text-5xl to text-6xl, font-bold
- **Article Titles**: text-3xl to text-4xl, font-semibold
- **Section Headers**: text-2xl, font-semibold
- **Body Text**: text-base (16px), leading-relaxed for readability
- **Captions/Labels**: text-sm, font-medium

---

## Layout System

**Spacing Units**: Consistent use of 4, 6, 8, 12, 16, 24 (p-4, gap-6, mt-8, py-12, mb-16, py-24)

**Container Widths**:
- Articles/Learning Content: max-w-4xl (optimal reading width)
- Dashboard/Browse: max-w-7xl
- Quiz Interface: max-w-3xl (focused experience)

**Grid Systems**:
- Browse Categories: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Article Sidebar: Two-column (70/30 split) for content + related topics
- Dashboard Stats: grid-cols-2 md:grid-cols-4

---

## Component Library

### Navigation
- **Top Nav**: Sticky header with logo left, main navigation center, search + profile right
- **Breadcrumbs**: Below header for article navigation (Body Region > System > Article)
- **Sidebar**: Collapsible topic tree for article browsing with nested categories

### Content Cards
- **Category Cards**: Elevated (shadow-lg), rounded-xl, with icon + title + article count, hover:scale-105 transition
- **Article Preview Cards**: Image thumbnail (anatomical diagram), title, excerpt, "Read More" CTA
- **Quiz Question Cards**: Large, centered, with radio options, submit button, explanation reveal

### Learning Elements
- **Diagram Viewer**: Full-width container with zoom controls, labels toggle, clean frame
- **Clinical Relevance Box**: Bordered left accent (border-l-4), light teal background, icon indicator
- **Progress Indicators**: Linear progress bars for quiz completion, circular progress for topic mastery
- **Quiz Feedback**: Immediate visual feedback - green background for correct, red for incorrect with shake animation

### Forms & Interactions
- **Search Bar**: Prominent in header, instant results dropdown with anatomy term highlighting
- **Quiz Options**: Large touch targets (p-6), clear selected state, disabled state after answer
- **Buttons**: 
  - Primary: bg-primary with white text, px-8 py-3
  - Secondary: outline with primary border
  - Ghost: for navigation items

### Data Display
- **Stats Dashboard**: Card-based metrics (quizzes taken, accuracy rate, topics mastered)
- **Score Display**: Large numerical score with percentage, circular progress ring
- **Performance Chart**: Simple line chart showing progress over time (use Chart.js via CDN)

### Overlays
- **Modal Dialogs**: For quiz results summary, diagram full-screen view
- **Toast Notifications**: Top-right for actions (quiz completed, progress saved)

---

## Animations

**Minimal, Purposeful Motion**:
- Card hover: transform scale(1.02), transition 200ms
- Quiz answer reveal: Slide down explanation with ease-out
- Page transitions: Fade in content, no aggressive animations
- NO auto-playing carousels or distracting effects

---

## Images

### Hero Section (Homepage)
**Large Hero Image**: Full-width anatomical illustration (modern, clean style - not overly clinical)
- Placement: Top of homepage, h-[500px] on desktop
- Content Overlay: Semi-transparent dark gradient with centered headline "Master Human Anatomy" + CTA
- Style: Professional medical illustration with color coding for different systems

### Content Images
- **Article Headers**: Featured anatomical diagram (800x400px aspect ratio)
- **Category Icons**: Simple line icons for each body system (use Heroicons)
- **Quiz Images**: Supporting diagrams when relevant to questions
- **Dashboard**: No images, focus on data visualization

### Image Treatment
- Rounded corners (rounded-lg) for all content images
- Subtle shadow (shadow-md) for elevation
- Lazy loading for performance

---

## Page-Specific Layouts

### Homepage
1. Hero with image + CTA
2. Browse by Region (3-column grid)
3. Browse by System (3-column grid)  
4. Featured Articles (horizontal scroll or 3-column)
5. Quiz CTA section

### Article Page
- Two-column: Main content (70%) + Sidebar (30%)
- Sticky sidebar with related topics + quiz link
- Inline diagrams within content flow
- Clinical boxes as callouts

### Quiz Interface
- Full-screen focus mode
- Question counter top-right
- Large question card centered
- Progress bar at top
- Results modal on completion

### Dashboard
- Stats overview (4-column grid)
- Recent activity timeline
- Performance chart
- Continue learning CTA

---

## Accessibility & Responsiveness

- All text meets WCAG AA contrast ratios (4.5:1 minimum)
- Focus states: 2px ring in primary color with offset
- Mobile: Stack all grids to single column, collapsible sidebar to hamburger menu
- Touch targets: Minimum 44x44px for quiz options and buttons
- Dark mode: Maintained across all pages with consistent surface elevations

---

## Visual Hierarchy Principles

1. **F-Pattern Reading**: Important content (diagrams, key concepts) on left, supporting info on right
2. **Chunking**: Break dense anatomy content into digestible sections with clear headings
3. **Visual Weight**: Use color sparingly - primary blue for CTAs only, neutrals for content
4. **Whitespace**: Generous padding (py-12 to py-16) between major sections for breathing room