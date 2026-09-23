# Implementation Plan

- [ ] 1. Write bug condition exploration test
  - **Property 1: Bug Condition** - Touch Events Blocked by Overlay
  - **CRITICAL**: This test MUST FAIL on unfixed code - failure confirms the bug exists
  - **DO NOT attempt to fix the test or the code when it fails**
  - **NOTE**: This test encodes the expected behavior - it will validate the fix when it passes after implementation
  - **GOAL**: Surface counterexamples that demonstrate the `#home-background::before` overlay is blocking touch events
  - **Scoped PBT Approach**: Test concrete failing cases across multiple routes to demonstrate systematic touch blocking
  - Test that touch events on interactive elements (inputs, buttons, cards) are blocked when tapping center/left positions covered by the overlay
  - Verify the overlay element (`#home-background::before`) exists with `z-index: 1` and covers the viewport
  - Test specific failing cases:
    - Contact page: tap center of name/email input fields → should focus but doesn't (overlay blocks)
    - Contact page: tap "Send Message" button text → should submit but doesn't (overlay blocks)
    - About page: tap "Download Resume" button text → should download but doesn't (overlay blocks)
    - Resume page: tap "See More" button → should expand but doesn't (overlay blocks)
    - Portfolio page: tap center of project cards → should respond but doesn't (overlay blocks)
    - Login page: tap left side of input fields → should focus but doesn't (overlay blocks)
  - Document that chevron icons work correctly (they have `z-index: 2`, above overlay)
  - Run test on UNFIXED code using mobile browser DevTools responsive mode or actual mobile device
  - **EXPECTED OUTCOME**: Test FAILS (this is correct - it proves the bug exists)
  - Document counterexamples found: specific elements that don't respond, tap positions that fail, z-index stacking issues
  - Mark task complete when test is written, run, and failures are documented
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11_

- [ ] 2. Write preservation property tests (BEFORE implementing fix)
  - **Property 2: Preservation** - Non-Touch Interactions Work Correctly
  - **IMPORTANT**: Follow observation-first methodology
  - Observe behavior on UNFIXED code for non-buggy inputs (elements/interactions that currently work)
  - Test cases to verify on UNFIXED code:
    - Resume page: tap chevron icon on cards → should expand/collapse (currently works - chevron has `z-index: 2`)
    - Desktop browser: click all interactive elements with mouse → should work correctly (currently works)
    - Mobile browser: navigate between routes using navigation menu → should work (currently works)
    - Mobile browser: scroll pages vertically → should be smooth (currently works)
    - Mobile browser: pinch-to-zoom gesture → should zoom appropriately (currently works)
    - Visual check: home page background has 60% dark overlay effect → should be visible (currently works)
    - Theme switching: toggle between dark/light themes → backgrounds should adjust (currently works)
    - Banner text: check visibility and contrast on home page → should be readable (currently works)
  - Write property-based tests capturing these observed behavior patterns from Preservation Requirements
  - Property-based testing generates multiple test scenarios for stronger guarantees
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 3. Fix for mobile touch interaction overlay blocking

  - [ ] 3.1 Remove problematic pseudo-element overlays from home-background.css
    - Open `src/pages/css/home-background.css`
    - Delete the entire `#home-background::before` rule block (lines creating the overlay with z-index: 1)
    - Delete the entire `[data-theme="light"] #home-background::before` rule block
    - These pseudo-elements create the full-screen overlay that blocks touch events
    - _Bug_Condition: isBugCondition(input) where tapPosition IS_COVERED_BY_OVERLAY(#home-background::before) AND element.zIndex <= 1_
    - _Expected_Behavior: Touch events reach interactive elements and trigger expected actions immediately_
    - _Preservation: Chevron icons, desktop clicks, navigation, scrolling, gestures, visual appearance must remain unchanged_
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ] 3.2 Replace overlay with CSS linear-gradient for darkening effect
    - In the `#home-background` rule, update the background property to use a linear-gradient overlay:
      ```css
      background: linear-gradient(rgba(21, 21, 21, 0.6), rgba(21, 21, 21, 0.6)),
                  url("/images/other/home-bg.jpg") !important;
      ```
    - In the `[data-theme="light"] #home-background` rule, apply the same linear-gradient approach:
      ```css
      background: linear-gradient(rgba(21, 21, 21, 0.6), rgba(21, 21, 21, 0.6)),
                  url("/images/other/home-bg.jpg") !important;
      ```
    - This provides the same 60% darkening effect without creating a separate layer that blocks touch events
    - The gradient is part of the background layer, not a pseudo-element overlay
    - _Expected_Behavior: Visual appearance preserved - background remains darkened with same opacity_
    - _Preservation: Home page visual appearance must remain identical to original_
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ] 3.3 Update banner-text z-index references
    - Locate the `.banner-text` rule in home-background.css
    - Remove `z-index: 2` from `.banner-text` in the dark theme (no longer needed - overlay removed)
    - Change `position: relative` to `position: static !important` for `.banner-text` dark theme
    - Keep `z-index: 2` and `position: relative` for `[data-theme="light"] .banner-text` if needed for light theme stacking
    - The banner text will naturally be above the background without needing explicit z-index
    - _Expected_Behavior: Banner text remains visible and properly positioned on home page_
    - _Preservation: Banner text visibility and contrast must remain unchanged_
    - _Requirements: 3.2, 3.3, 3.4, 3.5_

  - [ ] 3.4 Verify bug condition exploration test now passes
    - **Property 1: Expected Behavior** - Touch Events Reach Interactive Elements
    - **IMPORTANT**: Re-run the SAME test from task 1 - do NOT write a new test
    - The test from task 1 encodes the expected behavior
    - When this test passes, it confirms the expected behavior is satisfied
    - Run the exploration test on mobile browser (DevTools responsive mode or actual device)
    - Test all previously failing cases:
      - Contact page: tap center of input fields → should now focus and show keyboard
      - Contact page: tap "Send Message" button → should now trigger submit
      - About page: tap "Download Resume" button → should now trigger download
      - Resume page: tap "See More" button → should now expand description
      - Portfolio page: tap center of cards → should now respond
      - Login page: tap anywhere on input fields → should now focus
    - Verify touch events work across all tap positions (center, left, right, edges)
    - **EXPECTED OUTCOME**: Test PASSES (confirms bug is fixed)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11_

  - [ ] 3.5 Verify preservation tests still pass
    - **Property 2: Preservation** - Non-Touch Interactions Preserved
    - **IMPORTANT**: Re-run the SAME tests from task 2 - do NOT write new tests
    - Run preservation tests on FIXED code
    - Verify all preserved behaviors still work:
      - Chevron icons: tap on resume cards → should still expand/collapse correctly
      - Desktop clicks: test all interactive elements → should still work correctly
      - Navigation: switch between routes → should still work smoothly
      - Scrolling: scroll pages on mobile → should still be smooth
      - Gestures: test zoom, pinch, swipe → should still work appropriately
      - Visual: check home background darkening → should look identical (60% opacity)
      - Theme switching: toggle themes → should work correctly with proper backgrounds
      - Banner text: check visibility → should remain readable with good contrast
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions)
    - Confirm all tests still pass after fix (no functionality broken)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 4. Checkpoint - Ensure all tests pass
  - Run complete test suite to verify all exploration and preservation tests pass
  - Manually verify on multiple mobile browsers (Chrome Android, Safari iOS)
  - Test on actual mobile devices if available (not just DevTools responsive mode)
  - Verify visual appearance is identical to original across both dark and light themes
  - Test all routes (/contact, /login, /portfolio, /resume, /about, /) for touch interactions
  - Ensure chevron icons still work correctly (preservation requirement)
  - Ensure desktop browser interactions are unaffected (preservation requirement)
  - If any tests fail or issues arise, document them and ask the user for guidance
  - Mark complete when all tests pass and mobile touch interactions work correctly across all routes
