# Heritage Modern - Quick Visual Reference

## 🎨 Color System (Copy-Paste Ready)

```css
/* Primary Colors */
Navy:      #0B2340  /* Headlines, topbar */
Mid-Blue:  #1769A5  /* CTAs, links */
Blue-Gray: #F4F7FA  /* Backgrounds */
Amber:     #FFB74D  /* Accents */

/* Text Colors */
Dark Slate: #263238  /* Body text */
Light Gray: #707C86  /* Muted text */
White:      #FFFFFF  /* Light backgrounds */
```

## 📐 Typography Scale

```
H1: 48-56px (Merriweather Bold)
H2: 32-36px (Merriweather Bold)
H3: 22-24px (Merriweather Bold)
Body: 16px (Inter Regular)
Small: 14px (Inter Regular)
Micro: 12px (Inter Medium)
```

## 🧩 Section Layout Order

```
1. Trust Strip (Navy bar with client logos)
2. Navbar (White, sticky)
3. Hero (Two-column with mockup)
4. Credibility Strip (4 metrics)
5. Services (3-column grid, 6 cards)
6. Case Studies (1 featured + 3 secondary)
7. Process (5-step timeline)
8. Pricing (3 pricing cards)
9. Testimonials (Carousel + logo strip)
10. Team (6 team members)
11. Blog (3 latest articles)
12. Contact (Two-column form)
13. Footer (5-column + newsletter)
```

## 🎯 Key Measurements

```
Container Max Width: 1536px (2xl)
Section Padding: py-24 (96px) desktop, py-16 (64px) mobile
Grid Gaps: gap-8 (32px) desktop, gap-6 (24px) mobile
Border Radius: rounded-lg (8px) cards, rounded-xl (12px) images
Button Height: py-4 (16px padding) = 48px total
Touch Target Min: 44x44px
```

## 🔘 Button Styles

### Primary CTA
```jsx
className="bg-mid-blue text-white px-8 py-4 rounded font-body font-medium 
           hover:bg-mid-blue-700 hover:shadow-lg transition-all duration-200 
           transform hover:-translate-y-0.5"
```

### Secondary CTA
```jsx
className="border-2 border-mid-blue text-mid-blue px-8 py-4 rounded 
           font-body font-medium hover:bg-mid-blue hover:text-white 
           transition-all duration-200"
```

### Ghost Button
```jsx
className="text-mid-blue hover:text-mid-blue-700 underline 
           underline-offset-4 transition-colors"
```

## 📊 Card Component Pattern

```jsx
<div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl 
                transition-all duration-300 border border-gray-200 
                hover:border-mid-blue">
  {/* Icon */}
  <div className="w-12 h-12 rounded-lg bg-mid-blue/10 flex items-center 
                  justify-center mb-6">
    <Icon className="w-6 h-6 text-mid-blue" />
  </div>
  
  {/* Title */}
  <h3 className="font-display text-xl font-bold text-navy mb-3">
    Title Here
  </h3>
  
  {/* Description */}
  <p className="font-body text-sm text-dark-slate leading-relaxed mb-4">
    Description text here...
  </p>
  
  {/* CTA */}
  <a href="#" className="text-sm font-body font-medium text-mid-blue 
                         flex items-center gap-1">
    Learn more →
  </a>
</div>
```

## 🎨 Section Header Pattern

```jsx
<div className="text-center mb-16">
  <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
    Section Title
  </h2>
  <p className="font-body text-lg text-light-gray max-w-2xl mx-auto">
    Subtitle or description text
  </p>
</div>
```

## 🖼️ Image with Overlay Pattern

```jsx
<div className="relative aspect-[16/9] overflow-hidden rounded-xl">
  <img 
    src="image.jpg" 
    alt="Description"
    className="w-full h-full object-cover transition-transform 
               duration-500 group-hover:scale-105" 
  />
  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 
                  transition-colors duration-300" />
</div>
```

## 🎭 Animation Classes

```jsx
/* Framer Motion - Fade In */
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

/* Framer Motion - Stagger Children */
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1, duration: 0.6 }}
```

## 📱 Responsive Grid Pattern

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                gap-6 md:gap-8">
  {/* Items */}
</div>
```

## 🎨 Background Patterns

```jsx
/* Light Background */
bg-white

/* Subtle Background */
bg-blue-gray

/* Dark Background */
bg-navy text-white

/* Accent Background */
bg-mid-blue text-white
```

## 🔤 Text Style Classes

```jsx
/* Display Heading */
font-display text-4xl md:text-5xl font-bold text-navy

/* Body Text */
font-body text-base text-dark-slate leading-relaxed

/* Muted Text */
font-body text-sm text-light-gray

/* Small Caps Label */
font-body text-xs font-semibold text-mid-blue uppercase tracking-wide

/* Quote/Italic */
font-body text-lg text-dark-slate leading-relaxed italic
```

## 🎯 Icon Sizing

```jsx
/* Small Icon (inline) */
<Icon className="w-4 h-4" />

/* Medium Icon (cards) */
<Icon className="w-6 h-6" />

/* Large Icon (hero) */
<Icon className="w-8 h-8" />

/* Extra Large Icon (features) */
<Icon className="w-12 h-12" />
```

## 🎨 Shadow Utilities

```jsx
/* Subtle */
shadow-sm

/* Default */
shadow-md

/* Prominent */
shadow-lg

/* Extra Prominent */
shadow-xl

/* Hover Effect */
hover:shadow-xl transition-shadow duration-300
```

## 📏 Spacing System (Tailwind)

```
p-4  = 16px    gap-4  = 16px    mb-4  = 16px
p-6  = 24px    gap-6  = 24px    mb-6  = 24px
p-8  = 32px    gap-8  = 32px    mb-8  = 32px
p-12 = 48px    gap-12 = 48px    mb-12 = 48px
p-16 = 64px    gap-16 = 64px    mb-16 = 64px
```

## 🎨 Form Input Pattern

```jsx
<input
  type="text"
  className="w-full px-4 py-3 border-2 border-gray-300 rounded 
             focus:outline-none focus:border-mid-blue 
             transition-colors font-body"
  placeholder="Enter text"
/>
```

---

## 🚀 Quick Tips

1. **Consistency**: Always use the color variables from Tailwind config
2. **Spacing**: Stick to 8px grid (use p-4, p-6, p-8, etc.)
3. **Animations**: Keep transitions between 200-400ms
4. **Typography**: Headlines = Merriweather, Body = Inter
5. **CTAs**: Use mid-blue for primary, border-mid-blue for secondary
6. **Images**: Always add group-hover:scale-105 for subtle zoom
7. **Cards**: White background, shadow-sm, hover:shadow-xl
8. **Icons**: Use Lucide React icons, size w-6 h-6 for cards
9. **Mobile**: Test on actual devices, not just browser resize
10. **Accessibility**: Always include aria-labels on icon buttons

---

## 🎨 Brand Voice Guidelines

**Headlines**: Direct, benefit-focused
- ✅ "We design websites & apps that grow revenue"
- ❌ "We create beautiful digital experiences"

**Body Copy**: Professional, jargon-free
- ✅ "Classic design principles meet modern technology"
- ❌ "Leveraging cutting-edge paradigms for synergistic solutions"

**CTAs**: Action-oriented, specific
- ✅ "Request a Quote", "Get Free Estimate", "Start Project"
- ❌ "Learn More", "Click Here", "Submit"

**Tone**: Confident but not arrogant, expert but not condescending
- ✅ "We've helped 150+ companies grow"
- ❌ "We're the best agency in the world"

---

Ready to customize! This reference guide makes it easy to maintain consistency. 🎨
