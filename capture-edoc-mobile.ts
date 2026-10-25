import { chromium } from '@playwright/test';
import path from 'path';

async function captureEdocMobile() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    try {
        console.log('Navigating to edoc21.com...');
        await page.goto('https://edoc21.com', { waitUntil: 'networkidle' });
        
        // Wait for the mobile frame to be visible
        console.log('Waiting for mobile frame...');
        await page.waitForSelector('.relative.rounded-\\[2\\.6rem\\]', { timeout: 10000 });
        
        // Find the mobile frame element
        const mobileFrame = page.locator('.relative.rounded-\\[2\\.6rem\\].border-\\[11px\\]');
        
        // Take screenshot of just that element
        const screenshotPath = path.join(__dirname, 'public', 'images', 'portfolio', 'edoc21-mobile.png');
        console.log(`Capturing screenshot to: ${screenshotPath}`);
        
        await mobileFrame.screenshot({ 
            path: screenshotPath,
            type: 'png'
        });
        
        console.log('✅ Screenshot captured successfully!');
        
    } catch (error) {
        console.error('Error capturing screenshot:', error);
    } finally {
        await browser.close();
    }
}

captureEdocMobile();
