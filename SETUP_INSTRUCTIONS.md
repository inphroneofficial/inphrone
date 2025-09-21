# Inphrone Portfolio Setup Instructions

## Google Form Integration

To integrate your Google Form survey:

1. **Replace the placeholder links** in the following files:
   - `src/components/Hero.tsx` (line 51)
   - `src/components/Interactive.tsx` (line 101)
   
2. **Find the placeholder text**: `"YOUR_GOOGLE_FORM_LINK_HERE"`

3. **Replace with your actual Google Form URL**: 
   ```
   "https://forms.gle/YOUR_ACTUAL_FORM_ID"
   ```

## Example:
```jsx
// Before
onClick={() => window.open("YOUR_GOOGLE_FORM_LINK_HERE", "_blank")}

// After
onClick={() => window.open("https://forms.gle/abcd1234xyz", "_blank")}
```

## Features Added:

✅ **Dark/Light Mode Toggle** - Top right corner
✅ **Enhanced Animations** - Floating elements, hover effects
✅ **Premium Design System** - Custom gradients, shadows, effects
✅ **Responsive Layout** - Works on all devices
✅ **Interactive Elements** - Hover effects, glow animations
✅ **External Form Links** - Opens your Google Form in new tab
✅ **Inphrone Branding** - Uses your uploaded logo and banner
✅ **Step-by-Step Flow** - Clear user journey through sections

## Theme Toggle:
Users can switch between dark and light modes using the moon/sun icon in the top-right corner.

## Performance:
All animations are optimized and use CSS transforms for smooth performance.