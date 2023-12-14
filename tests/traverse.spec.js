const { test, expect } = require('@playwright/test');
const assert = require ('assert');

test("all children element",async({page})=>{
 
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let elementCount = await page.$$('.traversal-drinks-list > *');
    expect(elementCount.length).toBe(5)
   
})

test("finding previous element sibling",async({page})=>{
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    //let elementCount = await page.$('#milk')
    let preEtext = await page.$eval('#milk',(element)=>{
        return element.previousElementSibling.textContent.trim(); // 'Tea'
    })
    expect(preEtext).toBe('Tea')
})

test("finding next element sibling",async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let preEtext = await page.$eval('#milk',(element)=>{
        return element.nextElementSibling.textContent.trim()
    })
    expect(preEtext).toBe('Espresso')
})

test("finding nextAll element sibling",async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let allNextSibling = await page.$$('#coffee ~ *')
    expect(allNextSibling.length).toBeGreaterThan(2)
})

test("finding previousAll element sibling",async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let allprevious = await page.$$('#sugar ~ *')
    expect(allprevious.length).toBeGreaterThan(2)
})

test("finding previousAll element sibling",async({page})=>{
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let allSiblings = await page.$$('#sugar ~ *')
    expect(allSiblings.length).toBe(4)
})