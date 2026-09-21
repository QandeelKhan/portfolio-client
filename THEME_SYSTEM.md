# Light/Dark Theme System Documentation

## Overview
This portfolio site now features a comprehensive light/dark theme switching system with smooth transitions and localStorage persistence.

## Architecture

### 1. Redux State Management
- **File**: `src/redux/colorThemeSlice.ts`
- **Store**: `src/redux/store.ts` (integrated as `colorTheme` reducer)
- **State**: Manages `mode` ("dark" | "light")
- **Actions**:
  - `setColorTheme(mode)` - Set specific theme
  - `toggleColorTheme()` - Toggle between themes
- **Persistence**: Automatically saves to localStorage on change

### 2. Theme Provider
- **File**: `src/components/theme/ThemeProvider.tsx`
- **Purpose**: Applies `data-theme` attribute to `<html>` element
- **Integration**: Wraps entire app in `src/index.tsx`
- **Behavior**: Syncs with Redux state and applies theme on mount

### 3. Theme Toggle Component
- **File**: `src/components/theme/ThemeToggle.tsx`
- **Styles**: `src/components/theme/theme-toggle.css`
- **Location**: Fixed position, top-right corner
- **Features**:
  - Beautiful sun/moon icon animation
  - Smooth sliding track transition
  - Gradient backgrounds (dark: navy, light: sunrise)
  - Hover and active state animations
  - Mobile responsive

### 4. CSS Variable System

#### Dark Theme (Default)
```css
[data-theme="dark"] {
  --primaryColor: #00a3e1;          /* Bright blue accent */
  --backgroundColor: #2c2d2f;       /* Dark gray background */
  --cardBackground: #1e1f21;        /* Darker card background */
  --textPrimary: #ffffff;           /* White text */
  --textSecondary: #d4d4d4;         /* Light gray text */
  --sidebarBackground: #000000;     /* Pure black sidebar */
  --borderColor: #7a7a7a;           /* Gray borders */
  --hoverColor: #fff;               /* White hover */
  --skillBarFill: #00a3e1;          /* Blue skill bars */
}
```

#### Light Theme
```css
[data-theme="light"] {
  --primaryColor: #0082b6;          /* Deeper blue accent */
  --backgroundColor: #ffffff;       /* White background */
  --cardBackground: #f8f9fa;        /* Light gray cards */
  --textPrimary: #1a1a1a;          /* Dark text */
  --textSecondary: #404040;         /* Medium gray text */
  --sidebarBackground: #ffffff;     /* White sidebar */
  --borderColor: #d0d0d0;           /* Light gray borders */
  --hoverColor: #0082b6;            /* Blue hover */
  --skillBarFill: #0082b6;          /* Blue skill bars */
}
```

## Updated Files

### Core System Files
1. `src/redux/colorThemeSlice.ts` - Redux slice for theme state
2. `src/redux/store.ts` - Integrated colorTheme reducer
3. `src/components/theme/ThemeProvider.tsx` - Theme provider component
4. `src/components/theme/ThemeToggle.tsx` - Toggle button component
5. `src/components/theme/theme-toggle.css` - Toggle button styles
6. `src/index.tsx` - App wrapped with ThemeProvider
7. `src/pages/Layout.tsx` - ThemeToggle component added

### CSS Files with Theme Variables
1. `src/App.css` - Global theme variables
2. `src/components/css/resume-info-block.css`
3. `src/components/css/resume-item.css`
4. `src/components/css/service-area.css`
5. `src/components/css/skills-section.css`
6. `src/components/css/testimonials-section.css`
7. `src/components/css/left-pole.css`
8. `src/components/sideNav/side-nav.css`
9. `src/components/sideNav/side-nav-button.css`
10. `src/pages/css/about.css`
11. `src/pages/css/blog.css`
12. `src/pages/css/contact.css`
13. `src/pages/css/home-background.css`
14. `src/pages/css/landing-page.css`

## Usage

### Toggle Theme Programmatically
```typescript
import { useDispatch } from 'react-redux';
import { toggleColorTheme, setColorTheme } from './redux/colorThemeSlice';

const dispatch = useDispatch();

// Toggle between themes
dispatch(toggleColorTheme());

// Set specific theme
dispatch(setColorTheme('light'));
dispatch(setColorTheme('dark'));
```

### Access Current Theme
```typescript
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

const colorTheme = useSelector((state: RootState) => state.colorTheme.mode);
```

### Add Theme Support to New Components
1. Use CSS variables instead of hardcoded colors:
```css
/* ❌ Bad - Hardcoded color */
.my-component {
  color: #ffffff;
  background: #2c2d2f;
}

/* ✅ Good - Theme variables */
.my-component {
  color: var(--textPrimary);
  background: var(--backgroundColor);
}
```

2. Available CSS Variables:
- **Colors**: `--primaryColor`, `--primaryLight`, `--primaryDark`
- **Backgrounds**: `--backgroundColor`, `--cardBackground`, `--sidebarBackground`
- **Text**: `--textPrimary`, `--textSecondary`, `--textTertiary`, `--textMuted`
- **Borders**: `--borderColor`, `--borderLight`, `--borderDark`
- **Interactive**: `--hoverColor`, `--hoverBackground`, `--activeColor`
- **Utilities**: `--successColor`, `--skillBarBackground`, `--skillBarFill`

## Features

### ✅ Persistence
- Theme choice saved to localStorage
- Automatically restored on page reload

### ✅ Smooth Transitions
- CSS transitions on theme changes
- Animated toggle button with icon rotation

### ✅ Accessibility
- ARIA labels on toggle button
- Proper contrast ratios in both themes
- Keyboard accessible

### ✅ Mobile Responsive
- Toggle button repositions on mobile
- Touch-friendly size and spacing

### ✅ Complete Coverage
- All major pages themed (Home, About, Resume, Blog, Contact, Portfolio)
- All components use theme variables
- Sidebar, navigation, forms, cards all themed

## Browser Support
- Modern browsers with CSS custom properties support
- localStorage for persistence
- Graceful degradation for older browsers (defaults to dark theme)

## Future Enhancements
- Add more theme color schemes (e.g., blue, green, purple variants)
- System preference detection (prefers-color-scheme)
- Smooth theme transition animations for background images
- Theme preview before applying
