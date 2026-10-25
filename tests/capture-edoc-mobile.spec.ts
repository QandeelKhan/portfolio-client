import { test } from '@playwright/test';
import path from 'path';

test('capture edoc21 mobile screenshot', async ({ page }) => {
    console.log('Navigating to edoc21.com...');
    await page.goto('https://edoc21.com', { waitUntil: 'networkidle' });
    
    // Close cookie banner if it appears
    const acceptButton = page.locator('button:has-text("Accept")').first();
    const closeButton = page.locator('button:has-text("close")').first();
    
    if (await acceptButton.isVisible().catch(() => false)) {
        await acceptButton.click();
        console.log('Closed cookie banner');
    } else if (await closeButton.isVisible().catch(() => false)) {
        await closeButton.click();
        console.log('Closed dialog');
    }
    
    // Wait for page to settle after closing dialog
    await page.waitForTimeout(1000);
    
    // Scroll down to ensure mobile mockup is in view
    await page.evaluate(() => window.scrollTo(0, 400));
    await page.waitForTimeout(500);
    
    // Change the background color to white and remove any filters/opacity effects
    await page.evaluate(() => {
        // Find the section containing the mobile mockup
        const section = document.querySelector('section');
        if (section) {
            section.style.backgroundColor = 'white';
            section.style.filter = 'none';
        }
        document.body.style.backgroundColor = 'white';
        
        // Find and fix the phone mockup specifically - remove any tints
        const phoneFrame = document.querySelector('div.relative.rounded-\\[2\\.6rem\\]');
        if (phoneFrame) {
            // Remove any filters or overlays that might cause the greenish tint
            phoneFrame.style.filter = 'none';
            phoneFrame.style.opacity = '1';
            
            // Check for any pseudo-elements or overlays
            const allChildren = phoneFrame.querySelectorAll('*');
            allChildren.forEach(child => {
                child.style.filter = 'none';
                child.style.opacity = '1';
            });
        }
        
        // Find the image inside and ensure it's clear
        const phoneImage = document.querySelector('div.relative.rounded-\\[2\\.6rem\\] img');
        if (phoneImage) {
            phoneImage.style.filter = 'none';
            phoneImage.style.opacity = '1';
        }
    });
    
    await page.waitForTimeout(300);
    
    console.log('Looking for phone frame...');
    
    const screenshotPath = path.join(process.cwd(), 'public', 'images', 'portfolio', 'edoc21-mobile.png');
    
    // Try to find the actual phone frame with border
    const phoneFrame = page.locator('div.relative.rounded-\\[2\\.6rem\\].border-\\[11px\\]').first();
    
    if (await phoneFrame.count() > 0) {
        console.log('Found phone frame, capturing with clean colors...');
        await phoneFrame.screenshot({ 
            path: screenshotPath,
            type: 'png'
        });
        console.log('✅ Phone frame screenshot captured with no tint!');
    } else {
        console.log('Trying parent container...');
        const parentContainer = page.locator('div.relative.mx-auto.w-\\[268px\\]').first();
        if (await parentContainer.count() > 0) {
            await parentContainer.screenshot({ 
                path: screenshotPath,
                type: 'png'
            });
            console.log('✅ Container screenshot captured!');
        }
    }
});
