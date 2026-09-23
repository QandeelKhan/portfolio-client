# Mobile Touch Interaction Fix - Bugfix Design

## Overview

The portfolio application exhibits systematic touch interaction issues on mobile browsers caused by a full-screen pseudo-element overlay (`#home-background::before`) that creates an invisible layer blocking touch events across all routes. This overlay, positioned with `z-index: 1`, sits above interactive elements that have lower or no z-index values, causing touch targets to be misaligned. Users must tap on specific areas (typically the right half of elements) where the z-index stacking context allows interactions to penetrate through. The fix involves removing the problematic overlay pseudo-element and replacing it with a safer background implementation that doesn't interfere with touch events.

## Glossary

- **Bug_Condition (C)**: The condition that triggers the bug - when a user attempts to tap on interactive elements (inputs, buttons, cards, tabs) on a mobile browser and the tap occurs on an area covered by the pseudo-element overlay
- **Property (P)**: The desired behavior when taps occur - interactive elements should respond immediately to touch events regardless of tap position within their clickable area
- **Preservation**: Existing chevron icon functionality, desktop mouse interactions, routing, scrolling, and gesture behaviors that must remain unchanged by the fix
- **#home-background::before**: The pseudo-element overlay in `home-background.css` that creates a full-screen darkening effect with `z-index: 1`, positioned absolutely at 100% width/height
- **Z-index Stacking Context**: The layering order of elements where higher z-index values appear above lower ones, controlling which elements can receive pointer/touch events
- **Touch Target**: The interactive area of an element that should respond to touch events on mobile devices
- **Pseudo-element Overlay**: A CSS ::before or ::after element that creates a visual layer, which can inadvertently block pointer events if not properly configured

## Bug Details

### Bug Condition

The bug manifests when a user taps on interactive elements across multiple routes (/contact, /login, /portfolio, /resume, /about) on mobile browsers. The `#home-background::before` pseudo-element creates a full-screen overlay with `z-index: 1` and `pointer-events: auto` (default), which sits above many interactive elements that have `z-index: 1` or no explicit z-index (defaulting to `auto` or `0`). This creates an invisible layer that blocks touch events from reaching the underlying interactive elements.

**Formal Specification:**
```
FUNCTION isBugCondition(input)
  INPUT: input of type TouchEvent
  OUTPUT: boolean
  
  RETURN input.target IS_INTERACTIVE_ELEMENT
         AND input.deviceType == 'mobile'
         AND tapPosition IS_COVERED_BY_OVERLAY(#home-background::before)
         AND element.zIndex <= OVERLAY_Z_INDEX(1)
         AND NOT interactionTriggered(input.target)
END FUNCTION

FUNCTION IS_COVERED_BY_OVERLAY(overlay)
  INPUT: overlay CSS pseudo-element
  OUTPUT: boolean
  
  RETURN overlay.position == 'absolute'
         AND overlay.width == '100%'
         AND overlay.height == '100%'
         AND overlay.zIndex >= 1
         AND overlay.pointerEvents != 'none'
END FUNCTION
```

### Examples

**Contact Page - Input Fields:**
- User taps on the name input field center → Input does not focus (overlay blocks tap)
- User taps on the right edge of name input → Input focuses (z-index stacking allows penetration)
- Expected: Tapping anywhere on the input field should focus it immediately

**About Page - Download Button:**
- User taps directly on "Download Resume" button text → Nothing happens (overlay blocks tap)
- User taps on empty space to the right of button → Download triggers (tap penetrates overlay)
- Expected: Tapping anywhere on the button should trigger download

**Resume Page - See More Button:**
- User taps on "See More" text in card description → Description does not expand (overlay blocks tap)
- User taps on chevron icon → Expansion works correctly (chevron has `z-index: 2`, above overlay)
- Expected: Both "See More" button and chevron should work, with chevron continuing to work as it does

**Portfolio Page - Project Cards:**
- User taps on center of project card → No response (overlay blocks tap)
- User taps on right edge of card → Card action triggers (tap penetrates overlay)
- Expected: Tapping anywhere on the card should trigger the card action

**Login Page - Input Fields:**
- User taps on left side of email input → Input does not focus (overlay blocks tap)
- User taps on right side of email input → Input focuses (tap penetrates overlay)
- Expected: Tapping anywhere on input should focus it

### Root Cause Analysis

The primary issue is the `#home-background::before` pseudo-element in `home-background.css`:

```css
#home-background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #151515;
    opacity: 0.6;
    z-index: 1;
}
```

**Why this causes the bug:**

1. **Full-Screen Coverage**: The overlay spans the entire viewport (`width: 100%`, `height: 100%`)
2. **Z-index Stacking**: With `z-index: 1`, it sits above elements with `z-index: 0`, `auto`, or `1`
3. **Pointer Events**: Default `pointer-events: auto` blocks touch events from passing through
4. **Absolute Positioning**: Positioned at `top: 0, left: 0`, covering all content

**Why some elements work:**
- Chevron icons have `z-index: 2` (above the overlay)
- Desktop works because the overlay issue is exacerbated on mobile touch interfaces
- Right-side taps sometimes work due to complex stacking contexts and element boundaries

**Why the overlay exists:**
The overlay was intended to darken the home page background image, creating visual contrast for the banner text. However, it's positioned globally and affects all routes, not just the home page.

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- **Requirement 3.1**: Chevron icon functionality on resume cards must continue to expand/collapse descriptions correctly when tapped on mobile
- **Requirement 3.2**: Desktop browser interactions with mouse input must continue to function correctly for all click events
- **Requirement 3.3**: Navigation between routes must remain functional on mobile browsers
- **Requirement 3.4**: Scrolling behavior must remain smooth and responsive on mobile browsers
- **Requirement 3.5**: Mobile browser gestures (zoom, pinch, swipe) must continue to work appropriately

**Visual Preservation:**
- The darkening effect on the home page background must be maintained with the same visual appearance (60% opacity dark overlay)
- Theme switching between light and dark modes must continue to work correctly
- Banner text visibility and contrast must remain unchanged

**Scope:**
All visual styling and non-interactive behaviors should remain completely unaffected by this fix. The fix should ONLY address the touch event blocking issue without altering any visual presentation, layout, or existing working interactions.

## Hypothesized Root Cause

Based on the bug analysis, the root cause is:

1. **Global Overlay Interference**: The `#home-background::before` pseudo-element creates a full-screen overlay that blocks touch events on interactive elements across all routes on mobile browsers.

2. **Z-index Misconfiguration**: The overlay's `z-index: 1` places it above many interactive elements that have:
   - `z-index: 1` (e.g., `.send-message-btn`, `.download-resume-btn`, `.signature-area`)
   - No explicit z-index (defaults to `auto` or `0`)
   - Lower z-index values

3. **Pointer Events Default Behavior**: The overlay doesn't have `pointer-events: none`, so it intercepts all touch events instead of allowing them to pass through to underlying elements.

4. **Route-Independent Positioning**: The overlay is positioned globally and affects all routes, not just the home page where it's intended to darken the background.

**Supporting Evidence:**
- Chevron icons with `z-index: 2` work correctly (above the overlay)
- Desktop mouse interactions work better (less affected by overlay stacking)
- Right-side taps occasionally work (edge cases in stacking context)
- Multiple routes affected consistently (global overlay issue)

## Correctness Properties

Property 1: Bug Condition - Touch Events Reach Interactive Elements

_For any_ touch input on a mobile browser where a user taps on an interactive element (input field, button, card, tab) at any position within its clickable area, the fixed implementation SHALL allow the touch event to reach and trigger the interactive element's handler, causing the element to respond appropriately (focus, click, expand, navigate, etc.).

**Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11**

Property 2: Preservation - Non-Touch Interactions

_For any_ input that is NOT affected by the overlay issue (chevron icons with higher z-index, desktop mouse clicks, keyboard navigation, scrolling, gestures), the fixed code SHALL produce exactly the same behavior as the original code, preserving all existing functionality for these interactions.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

## Fix Implementation

### Changes Required

The fix involves replacing the problematic pseudo-element overlay with a safer implementation that provides the same visual effect without blocking touch events.

**File**: `src/pages/css/home-background.css`

**Approach**: Replace the `::before` pseudo-element overlay with a direct background modification using CSS filters or multiple backgrounds, ensuring no overlay elements block touch events.

**Specific Changes**:

1. **Remove Pseudo-element Overlays**: Delete both `#home-background::before` and `[data-theme="light"] #home-background::before` pseudo-element rules that create the blocking overlay.

2. **Apply Darkening via Linear Gradient**: Add a semi-transparent black gradient overlay directly to the background property using `linear-gradient()`, which doesn't create a separate layer that can block events:
   ```css
   background: linear-gradient(rgba(21, 21, 21, 0.6), rgba(21, 21, 21, 0.6)),
               url("/images/other/home-bg.jpg") !important;
   ```

3. **Alternative: Use CSS Filter**: If gradient approach has visual inconsistencies, use the `filter` property with `brightness()` to darken the background image directly without creating overlays.

4. **Update Z-index References**: Remove the `z-index: 2` from `.banner-text` since it was only needed to sit above the overlay. The banner text will naturally be above the background image.

5. **Test Affected Routes**: Verify that all interactive elements on /contact, /login, /portfolio, /resume, and /about routes respond correctly to touch inputs on mobile browsers.

**Implementation Details**:

**Before (Current - Problematic):**
```css
#home-background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #151515;
    opacity: 0.6;
    z-index: 1;
}

[data-theme="light"] #home-background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #151515;
    opacity: 0.6;
    z-index: 1;
}

.banner-text {
    position: relative;
    z-index: 2;
}

[data-theme="light"] .banner-text {
    position: relative;
    z-index: 2;
}
```

**After (Fixed):**
```css
#home-background {
    /* ... existing properties ... */
    background: linear-gradient(rgba(21, 21, 21, 0.6), rgba(21, 21, 21, 0.6)),
                url("/images/other/home-bg.jpg") !important;
    /* Remove the rest of the background properties that are now redundant */
}

[data-theme="light"] #home-background {
    /* ... existing properties ... */
    background: linear-gradient(rgba(21, 21, 21, 0.6), rgba(21, 21, 21, 0.6)),
                url("/images/other/home-bg.jpg") !important;
}

/* Remove these pseudo-element blocks entirely */
/* #home-background::before { ... } */
/* [data-theme="light"] #home-background::before { ... } */

.banner-text {
    position: static !important;
    /* z-index: 2 is removed - no longer needed */
    /* ... rest of existing properties ... */
}

[data-theme="light"] .banner-text {
    position: relative;
    z-index: 2;
    /* Keep for light theme if needed for other elements */
}
```

## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, surface counterexamples that demonstrate the bug on unfixed code by attempting touch interactions on mobile browsers, then verify the fix works correctly across all affected routes and preserves existing behavior.

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples that demonstrate the bug BEFORE implementing the fix. Confirm that the `#home-background::before` overlay is indeed blocking touch events and that removing it resolves the issue.

**Test Plan**: Use mobile browser developer tools (responsive mode) and actual mobile devices to test touch interactions on each affected route. Document which elements fail to respond and where the overlay interferes. Run these tests on the UNFIXED code to observe failures and confirm the root cause.

**Test Cases**:
1. **Contact Input Focus Test**: On mobile, tap center of name/email input fields (will fail - no focus on unfixed code)
2. **Contact Button Test**: On mobile, tap "Send Message" button text directly (will fail - no action on unfixed code)
3. **About Download Test**: On mobile, tap "Download Resume" button text directly (will fail - no download on unfixed code)
4. **Resume See More Test**: On mobile, tap "See More" button in card descriptions (will fail - no expansion on unfixed code)
5. **Portfolio Card Test**: On mobile, tap center of project cards (will fail - no response on unfixed code)
6. **Login Input Test**: On mobile, tap left side of login input fields (will fail - no focus on unfixed code)
7. **Chevron Icon Test**: On mobile, tap chevron icon on resume cards (will PASS - chevron has z-index: 2, above overlay)

**Expected Counterexamples**:
- Touch events on input fields, buttons, and cards do not trigger expected actions when tapping on areas covered by the overlay
- Console inspection shows the `#home-background::before` element is receiving touch events instead of the interactive elements
- Right-side or edge taps occasionally work due to stacking context boundaries
- Chevron icons work correctly, confirming z-index stacking theory

### Fix Checking

**Goal**: Verify that for all inputs where the bug condition holds (touch events on interactive elements on mobile), the fixed implementation produces the expected behavior (elements respond to taps).

**Pseudocode:**
```
FOR ALL route IN ['/contact', '/login', '/portfolio', '/resume', '/about'] DO
  NAVIGATE_TO(route)
  FOR ALL interactiveElement IN getInteractiveElements(route) DO
    touchEvent := simulateTouchTap(interactiveElement.center)
    ASSERT expectedBehavior(touchEvent, interactiveElement)
    
    touchEvent := simulateTouchTap(interactiveElement.leftSide)
    ASSERT expectedBehavior(touchEvent, interactiveElement)
    
    touchEvent := simulateTouchTap(interactiveElement.rightSide)
    ASSERT expectedBehavior(touchEvent, interactiveElement)
  END FOR
END FOR

FUNCTION expectedBehavior(touchEvent, element)
  IF element.type == 'input' THEN
    RETURN element.isFocused() AND mobileKeyboardVisible()
  ELSE IF element.type == 'button' THEN
    RETURN element.actionTriggered()
  ELSE IF element.type == 'card' THEN
    RETURN element.clickHandlerCalled()
  END IF
END FUNCTION
```

**Testing Approach**: Manual testing on mobile browsers (Chrome Mobile DevTools, Safari Responsive Design Mode) and actual mobile devices (iOS Safari, Android Chrome) to verify touch interactions work correctly across all tap positions.

**Test Cases** (Run on FIXED code):
1. **Contact Page - All Input Fields**: Tap center, left, right of name, email, and message fields → All should focus and show keyboard
2. **Contact Page - Send Button**: Tap button text, button edges → Should trigger submit action
3. **Contact Page - Map**: Tap on map area → Should respond with map interactions
4. **Login Page - All Input Fields**: Tap center, left, right of email and password fields → All should focus
5. **Login Page - Buttons**: Tap login button, reset button → Should trigger actions
6. **Portfolio Page - Project Cards**: Tap center, edges of cards → Should trigger card click action
7. **Portfolio Page - Tabs**: Tap each tab directly → Should activate the correct tab
8. **Resume Page - See More**: Tap "See More" text → Should expand card description
9. **About Page - Download Button**: Tap button text, button area → Should trigger download

### Preservation Checking

**Goal**: Verify that for all inputs where the bug condition does NOT hold (chevron icons, desktop interactions, navigation, scrolling, gestures), the fixed function produces the same result as the original function.

**Pseudocode:**
```
FOR ALL preservedBehavior IN getPreservationRequirements() DO
  originalResult := executeOnOriginal(preservedBehavior)
  fixedResult := executeOnFixed(preservedBehavior)
  ASSERT originalResult == fixedResult
END FOR

FUNCTION getPreservationRequirements()
  RETURN [
    ChevronIconExpansion,
    DesktopMouseClicks,
    RouteNavigation,
    ScrollingBehavior,
    MobileGestures,
    VisualAppearance,
    ThemeSwitching
  ]
END FUNCTION
```

**Testing Approach**: Compare behavior before and after fix implementation to ensure no regressions. Use visual regression testing for appearance, functional testing for interactions.

**Test Plan**: Test all preserved behaviors on FIXED code and compare with documented original behavior (since chevron and desktop already work correctly).

**Test Cases**:
1. **Chevron Icon Preservation**: On mobile, tap chevron icon on resume cards → Should expand/collapse correctly (MUST work identically to original)
2. **Desktop Mouse Clicks**: On desktop browser, click all interactive elements → Should work correctly (MUST work identically to original)
3. **Visual Appearance**: Compare home page background darkness → Should look identical (60% dark overlay effect preserved)
4. **Theme Switching**: Switch between dark and light themes → Background darkening should work correctly in both themes
5. **Banner Text Visibility**: Check banner text contrast and readability → Should be identical to original
6. **Route Navigation**: Navigate between routes on mobile → Should work smoothly without issues
7. **Scrolling**: Scroll pages on mobile → Should remain smooth and responsive
8. **Mobile Gestures**: Test pinch-to-zoom, swipe gestures → Should work appropriately
9. **Layout Integrity**: Check that no elements shift or change position after fix

### Unit Tests

- Test touch event propagation through the background element (no blocking overlays)
- Test z-index stacking context of interactive elements (should receive events)
- Test visual appearance of home background (gradient overlay provides correct darkening)
- Test banner text positioning and visibility (remains correctly positioned)

### Property-Based Tests

- Generate random tap positions within interactive elements and verify all positions trigger correct behavior
- Generate random combinations of routes and interactive elements to test comprehensive coverage
- Test across different mobile viewport sizes and orientations to verify consistent behavior

### Integration Tests

- Test full user flow: navigate to contact page, fill form, submit on mobile device
- Test full user flow: navigate to portfolio, select project, view details on mobile
- Test full user flow: navigate to resume, expand multiple cards using both chevron and "See More"
- Test theme switching during interaction flows to ensure no conflicts
- Test rapid navigation between routes to ensure overlay doesn't reappear or cause issues
