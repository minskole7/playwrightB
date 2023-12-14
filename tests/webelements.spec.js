const { test, expect } = require('@playwright/test');

test('click on the element', async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('[name= "first_name"]',"chinmay");
    await page.fill('[name= "last_name"]',"deshpande");
    await page.fill('[name= "email"]',"chinmaydeshpande010@gmail.com");
    await page.fill('[name= "message"]',"I am learning js");
    await page.click('[type = "submit"]') // click()
    await page.waitForSelector('h1')
    

});

test('typing into the input element', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('[name= "first_name"]',"chinmay");
    await page.fill('[name= "last_name"]',"deshpande"); // type
    await page.fill('[name= "email"]',"chinmaydeshpande010@gmail.com");
    await page.fill('[name= "message"]',"I am learning js");
    await page.click('[type = "submit"]') // click()
    let r = await page.$('[type = "submit"]')
    r.click()
    await page.waitForSelector('h1')


});

test('clearing the input field', async ({ page }) => {

    // await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    // await page.fill('[name= "first_name"]',"chinmay");
    // await page.fill('[name= "first_name"]','');
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
    await page.fill('[name= "first_name"]',"chinmay");
    await page.click('[type="reset"]')
    //let text = '' // expected
    let expectText = await page.$eval('[name= "first_name"]',x =>x.value)
    expect(expectText).toBe('') 
});


test('getting the attribute value', async ({ page }) => {
    //getAttribute('id')
    //getAttribute('id')

});

test('getting the text value of element', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    let textContentVal= await page.$eval('h1',(el)=>el.textContent)
    assert.strictEqual(textContentVal,"Dropdown Menu(s), Checkboxe(s) &amp; Radio Button(s)")
});

// test('verify element enabled', async ({ page }) => {

// });


// test('verify element selected', async ({ page }) => {

// });

// test('verify element isdisplayed', async ({ page }) => {

// });