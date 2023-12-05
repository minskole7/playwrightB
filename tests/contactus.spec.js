const { test, expect } = require('@playwright/test');

// Action 
// Assertion
test('verify contact us form with valid data',async({page})=>{
    // Arrangement 
    await page.goto("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    // Actions 

    await page.locator("input[name='first_name']").fill("chinmay")
    await page.locator("input[name='last_name']").fill("chinmay")
    await page.locator("input[name='email']").fill("chinmaydeshpande010@gmail.com")
    await page.locator("textarea[name='message']").fill("I am learning js")
    await page.locator("input[type ='submit']").click()
    // Assertion
   await page.waitForTimeout(2000);
   let avail =  await page.locator('h1').isVisible();
   expect(avail).toBeTruthy()

})

test('verify contact us form with valid data',async({page})=>{
    // Arrangement 
    await page.goto("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    // Actions
    // <h1>Hello</h1>
    await page.locator("input[name='first_name']").fill("chinmay")
    await page.locator("input[name='last_name']").fill("chinmay")
    await page.locator("input[name='email']").fill("chinmaydeshpande010@gmail.com")
    await page.locator("textarea[name='message']").fill("I am learning js")
    await page.locator("input[type ='reset']").click()
    let str = await page.locator("input[name='first_name']").innerText()
    expect(str).toBe("")

})

test('verify contact us form with valid data',async({page})=>{
    // Arrangement 
    await page.goto("https://www.webdriveruniversity.com/Contact-Us/contactus.html")
    // Actions
    // <h1>Hello</h1>
    await page.locator("input[name='first_name']").fill("chinmay")
    await page.locator("input[name='last_name']").fill("chinmay")
    await page.locator("input[name='email']").fill("chinmaydeshpande010gmail.com")
    await page.locator("textarea[name='message']").fill("I am learning js")
    await page.locator("input[type ='submit']").click()
    await page.waitForTimeout(2000);
    let str = await page.locator("body").innerText()
    expect(str).toContain("Error: Invalid email address")
    
})