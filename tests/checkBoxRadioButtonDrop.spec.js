const { test, expect } = require('@playwright/test');
const assert = require ('assert');

test("Drop down",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
   
})


test("Check box",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //actions
    await page.check('input[value= "option-2"]')
    await page.uncheck('input[value= "option-3"]')
    const avail = await page.$eval('input[value= "option-2"]',(el)=> el.checked);
    const availB = await page.$eval('input[value= "option-3"]',(el)=> el.checked);
    assert.strictEqual(avail,true)
    assert.strictEqual(availB,false)
   
})


test("Radio button",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    //actions
    await page.check("input[value= 'green']")
    let availC = await page.$eval('input[value= "green"]',(el)=>el.checked)
    assert.strictEqual(availC,true)
    let availD = await page.$eval('input[value= "blue"]',(el)=>el.checked)
    assert.strictEqual(availD,false)
    
})



