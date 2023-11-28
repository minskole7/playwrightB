const { test, expect } = require('@playwright/test');


test('has title', async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');

    // find single element 
    let singleElement = await page.$('h2[name= "contactme"]')
    expect(singleElement).not.toBeNull()

    // find multiple element
    let multipleElements = await page.$$('input[type="text"]')
    expect(multipleElements.length).toBe(3);


    // find element by class name
    let multipleElementsByClassNmae = await page.$$('.text-center')
    expect(multipleElementsByClassNmae.length).toBe(2);

    // find element by id 
    //#contact_form

    let elementById = await page.$('#contact_form')
    expect(elementById).not.toBeNull()


    // find element by Css selector 
    // tagName[attribute = "value"]
    let elementByCssSelector = await page.$('input[name = "first_name"]')
    expect(elementByCssSelector).not.toBeNull()

    // find element by tagName 
    let text  = await page.locator('h2').innerText()
    expect(text).toEqual("CONTACT US")



    // // find element by linkText
    
    
    // // find element by name 






});
