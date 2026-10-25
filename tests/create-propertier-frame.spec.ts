import { test } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('create propertier mobile frame mockup', async ({ page }) => {
    // Read the screenshot and convert to base64
    const screenshotPath = path.join(process.cwd(), 'public', 'images', 'portfolio', 'propertier.jpeg');
    const imageBuffer = fs.readFileSync(screenshotPath);
    const base64Image = imageBuffer.toString('base64');
    
    await page.setContent(`
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    margin: 0;
                    padding: 50px;
                    background: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }
                .phone-mockup {
                    position: relative;
                    width: 380px;
                    height: 780px;
                    background: #1a1a1a;
                    border-radius: 45px;
                    padding: 14px;
                    box-shadow: 0 40px 90px -24px rgba(0,0,0,0.6);
                }
                .phone-screen {
                    width: 100%;
                    height: 100%;
                    background: white;
                    border-radius: 34px;
                    overflow: hidden;
                    position: relative;
                }
                .phone-notch {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 200px;
                    height: 32px;
                    background: #1a1a1a;
                    border-radius: 0 0 22px 22px;
                    z-index: 10;
                }
                .screenshot {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: top;
                }
            </style>
        </head>
        <body>
            <div class="phone-mockup">
                <div class="phone-screen">
                    <div class="phone-notch"></div>
                    <img class="screenshot" src="data:image/jpeg;base64,${base64Image}" alt="Propertier App">
                </div>
            </div>
        </body>
        </html>
    `);
    
    await page.waitForTimeout(1000);
    
    const outputPath = path.join(process.cwd(), 'public', 'images', 'portfolio', 'propertier-framed.png');
    
    console.log('Creating phone frame mockup...');
    
    // Take screenshot of the phone mockup
    const phoneMockup = page.locator('.phone-mockup');
    await phoneMockup.screenshot({ 
        path: outputPath,
        type: 'png'
    });
    
    console.log('✅ Propertier mobile frame created!');
});