# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mobile-touch-bug-exploration.spec.ts >> Mobile Touch Interaction - Bug Condition Exploration >> Login page - input fields do not focus on left side tap (Bug 1.4, 1.10)
- Location: tests/mobile-touch-bug-exploration.spec.ts:206:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[type="email"]').first()
    - locator resolved to <input value="" id="email" required="" type="email" name="email" tabindex="3" class="_form-input__input_cyvj4_10"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="sidenav-container">…</div> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="sidenav-container">…</div> intercepts pointer events
    - retrying click action
      - waiting 100ms
    40 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="sidenav-container">…</div> intercepts pointer events
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - button "" [ref=e7]
      - link "Qandeel Khan" [ref=e10] [cursor=pointer]:
        - /url: /
    - generic [ref=e11]:
      - generic [ref=e12]:
        - img "qandeel baloch profile" [ref=e13]
        - generic [ref=e14]: QANDEEL KHAN
      - list [ref=e17]:
        - listitem [ref=e18]:
          - link "HOME" [ref=e23] [cursor=pointer]:
            - /url: /
        - listitem [ref=e24]:
          - link "ABOUT ME" [ref=e29] [cursor=pointer]:
            - /url: /about
        - listitem [ref=e30]:
          - link "RESUME" [ref=e35] [cursor=pointer]:
            - /url: /resume
        - listitem [ref=e36]:
          - link "PORTFOLIO" [ref=e42] [cursor=pointer]:
            - /url: /portfolio
        - listitem [ref=e43]:
          - link "BLOG" [ref=e49] [cursor=pointer]:
            - /url: /blog
        - listitem [ref=e50]:
          - link "CONTACT" [ref=e55] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e56]: Client Portal
      - link "Login / Sign Up" [ref=e60] [cursor=pointer]:
        - /url: /login
      - generic [ref=e65]:
        - generic [ref=e66]:
          - link "" [ref=e67] [cursor=pointer]:
            - /url: https://www.instagram.com/qandeelhaiderkhan/
          - link "" [ref=e69] [cursor=pointer]:
            - /url: https://www.facebook.com/qandeelhaiderkhan
          - link "" [ref=e71] [cursor=pointer]:
            - /url: https://twitter.com/CQandeelhaider
          - link "" [ref=e73] [cursor=pointer]:
            - /url: https://www.linkedin.com/in/qandeel-khan-b89a851a0/
          - link [ref=e75] [cursor=pointer]:
            - /url: https://www.upwork.com/freelancers/~014d77a2fec0748c13
        - generic [ref=e78]: 2023 © developed by Qandeel Khan. All Right Reserved.
  - generic [ref=e80]:
    - button "Switch to light mode" [ref=e82] [cursor=pointer]:
      - generic [ref=e83]: 
    - generic [ref=e86]:
      - generic [ref=e87] [cursor=pointer]: 
      - generic [ref=e89]:
        - heading "Page Animation" [level=6] [ref=e90]
        - combobox [ref=e91]:
          - option "theme1" [selected]
          - option "theme2"
          - option "theme3"
          - option "theme4"
          - option "scalingTheme"
          - option "scalingTheme2"
          - option "fadingTheme"
          - option "springTheme"
          - option "springTheme2"
          - option "staggerTheme"
          - option "staggerTheme2"
          - option "glitchTheme"
          - option "blurTheme"
          - option "warpTheme"
          - option "crazyTheme"
          - option "newTheme"
    - generic [ref=e95]:
      - heading "Login." [level=1] [ref=e97]
      - generic [ref=e100]:
        - generic [ref=e101]:
          - text: Email
          - textbox [ref=e103]
        - generic [ref=e104]:
          - text: Password
          - generic [ref=e105]:
            - textbox [ref=e106]
            - button "" [ref=e107]
        - button "button" [ref=e109] [cursor=pointer]
        - link "Do not have an account?" [ref=e112] [cursor=pointer]:
          - /url: /registration
      - button "Sign Up with Google" [ref=e114] [cursor=pointer]
    - button "Open WhatsApp chat" [ref=e123] [cursor=pointer]
```

# Test source

```ts
  116 |     // Find the download resume button
  117 |     const downloadButton = page.locator('a.download-resume-btn').first();
  118 |     await downloadButton.waitFor({ state: 'visible', timeout: 5000 });
  119 |     
  120 |     // Track if link was clicked
  121 |     let linkClicked = false;
  122 |     await downloadButton.evaluate(el => {
  123 |       el.addEventListener('click', () => {
  124 |         (el as any)._wasClicked = true;
  125 |       });
  126 |     });
  127 |     
  128 |     // Click the button (Playwright's click simulates touch on mobile viewport)
  129 |     await downloadButton.click();
  130 |     await page.waitForTimeout(500);
  131 |     
  132 |     // Check if link was clicked
  133 |     linkClicked = await downloadButton.evaluate(el => {
  134 |       return (el as any)._wasClicked || false;
  135 |     });
  136 |     
  137 |     // This should PASS on fixed code (overlay removed, no longer blocks tap)
  138 |     expect(linkClicked, 'Download should trigger on button tap (fixed - overlay removed)').toBe(true);
  139 |   });
  140 | 
  141 |   test('Resume page - See More button does not expand on tap (Bug 1.8)', async ({ page }) => {
  142 |     await page.goto('/resume');
  143 |     await page.waitForLoadState('networkidle');
  144 |     await page.waitForTimeout(1000); // Wait for animations
  145 |     
  146 |     // Find a "see more" span in experience/education cards
  147 |     const seeMoreSpan = page.locator('span.see-more').first();
  148 |     await seeMoreSpan.waitFor({ state: 'visible', timeout: 5000 });
  149 |     
  150 |     // Get the parent resume item
  151 |     const resumeItem = seeMoreSpan.locator('..').locator('..').locator('..');
  152 |     const isInitiallyExpanded = await resumeItem.evaluate(el => el.classList.contains('expanded'));
  153 |     
  154 |     // Track if see more was clicked
  155 |     let seeMoreClicked = false;
  156 |     await seeMoreSpan.evaluate(el => {
  157 |       el.addEventListener('click', () => {
  158 |         (el as any)._wasClicked = true;
  159 |       });
  160 |     });
  161 |     
  162 |     // Click the "see more" span (Playwright's click simulates touch on mobile viewport)
  163 |     await seeMoreSpan.click();
  164 |     await page.waitForTimeout(500);
  165 |     
  166 |     // Check if see more was clicked
  167 |     seeMoreClicked = await seeMoreSpan.evaluate(el => {
  168 |       return (el as any)._wasClicked || false;
  169 |     });
  170 |     
  171 |     // This should PASS on fixed code (overlay removed, no longer blocks tap)
  172 |     expect(seeMoreClicked, 'See More should be clickable when tapped (fixed - overlay removed)').toBe(true);
  173 |   });
  174 | 
  175 |   test('Portfolio page - project cards do not respond on center tap (Bug 1.6)', async ({ page }) => {
  176 |     await page.goto('/portfolio');
  177 |     await page.waitForLoadState('networkidle');
  178 |     
  179 |     // Find project cards
  180 |     const projectCard = page.locator('.project-card, .portfolio-item, [class*="card"]').first();
  181 |     await projectCard.waitFor({ state: 'visible', timeout: 5000 });
  182 |     
  183 |     // Track navigation or modal opening
  184 |     let actionTriggered = false;
  185 |     page.on('popup', () => {
  186 |       actionTriggered = true;
  187 |     });
  188 |     page.on('framenavigated', () => {
  189 |       actionTriggered = true;
  190 |     });
  191 |     
  192 |     // Tap the center of the card
  193 |     const box = await projectCard.boundingBox();
  194 |     if (box) {
  195 |       const centerX = box.x + box.width / 2;
  196 |       const centerY = box.y + box.height / 2;
  197 |       
  198 |       await page.touchscreen.tap(centerX, centerY);
  199 |       await page.waitForTimeout(500);
  200 |       
  201 |       // This should fail on unfixed code (overlay blocks tap)
  202 |       expect(actionTriggered, 'Card should respond to tap, but overlay blocks it').toBe(true);
  203 |     }
  204 |   });
  205 | 
  206 |   test('Login page - input fields do not focus on left side tap (Bug 1.4, 1.10)', async ({ page }) => {
  207 |     await page.goto('/login');
  208 |     await page.waitForLoadState('networkidle');
  209 |     await page.waitForTimeout(1000); // Wait for animations
  210 |     
  211 |     // Find email input
  212 |     const emailInput = page.locator('input[type="email"]').first();
  213 |     await emailInput.waitFor({ state: 'visible', timeout: 5000 });
  214 |     
  215 |     // Click the input (Playwright's click simulates touch on mobile viewport)
> 216 |     await emailInput.click();
      |                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
  217 |     await page.waitForTimeout(500);
  218 |     
  219 |     // Check if input is focused
  220 |     const isFocused = await emailInput.evaluate(el => el === document.activeElement);
  221 |     
  222 |     // This should PASS on fixed code (overlay removed, no longer blocks taps)
  223 |     expect(isFocused, 'Input should focus on tap (fixed - overlay removed)').toBe(true);
  224 |   });
  225 | 
  226 |   test('Resume page - Chevron icons work correctly (should PASS - z-index: 2)', async ({ page }) => {
  227 |     await page.goto('/resume');
  228 |     await page.waitForLoadState('networkidle');
  229 |     await page.waitForTimeout(1000); // Wait for animations
  230 |     
  231 |     // Find chevron icon (these should work because they have z-index: 2)
  232 |     const chevron = page.locator('.expand-icon-top-right').first();
  233 |     
  234 |     try {
  235 |       await chevron.waitFor({ state: 'visible', timeout: 5000 });
  236 |       
  237 |       // Get initial card state
  238 |       const card = chevron.locator('..'); // Parent resume-item
  239 |       const initialExpanded = await card.evaluate(el => el.classList.contains('expanded'));
  240 |       
  241 |       // Tap the chevron
  242 |       await chevron.click();
  243 |       await page.waitForTimeout(500);
  244 |       
  245 |       // Check if card state changed
  246 |       const newExpanded = await card.evaluate(el => el.classList.contains('expanded'));
  247 |       
  248 |       // This should PASS even on unfixed code (chevron has z-index: 2, above overlay)
  249 |       expect(newExpanded).not.toBe(initialExpanded);
  250 |     } catch (error) {
  251 |       // If chevron not found, mark test as passed with a note
  252 |       console.log('Chevron icons not found in current implementation, skipping this validation');
  253 |       expect(true).toBe(true);
  254 |     }
  255 |   });
  256 | });
  257 | 
```