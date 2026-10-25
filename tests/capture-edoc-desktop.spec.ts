import { test } from '@playwright/test';
import path from 'path';

test('capture edoc21 desktop mockup', async ({ page }) => {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    console.log('Navigating to edoc21.com...');
    await page.goto('https://edoc21.com', { waitUntil: 'load', timeout: 30000 });
    
    await page.waitForTimeout(2000);
    
    // Close cookie banner if it appears
    const acceptButton = page.locator('button:has-text("Accept")').first();
    if (await acceptButton.isVisible().catch(() => false)) {
        await acceptButton.click();
        console.log('Closed cookie banner');
        await page.waitForTimeout(500);
    }
    
    // Scroll to show the main content
    await page.evaluate(() => window.scrollTo(0, 200));
    await page.waitForTimeout(1000);
    
    const screenshotPath = path.join(process.cwd(), 'public', 'images', 'portfolio', 'edoc21-desktop.png');
    
    console.log('Capturing desktop screenshot...');
    
    // Take screenshot of viewport
    await page.screenshot({ 
        path: screenshotPath,
        type: 'png',
        fullPage: false
    });
    
    console.log('✅ Desktop screenshot captured!');
});