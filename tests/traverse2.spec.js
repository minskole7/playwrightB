const { test, expect } = require('@playwright/test');
const assert = require ('assert');
// test("all children element",async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
//     let elementCount = await page.$$('.traversal-drinks-list > *');
//     expect(elementCount.length).toBe(5)
   
// })

// test("Traverse using childrens",async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
//     let totalItemCount = await page.$$eval('.traversal-buttons  > input',(items) =>{
//       return items.length
//     })
//     expect(totalItemCount).toBe(3) 
// })

// test("Traverse using childrens",async({page})=>{
//     // .traversal-buttons  > input  ---> css selector
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
//     let totalItemCount = await page.$$eval('.traversal-buttons  > input',(items) =>{
//       return items.length
//     })
//     expect(totalItemCount).toBe(3) 
// })

// first(),last(),eq()
//.btn-group-toggle >button:nth-child(2) // 2nd child
//.btn-group-toggle >button:first-child
//.btn-group-toggle >button:last-child


// test("traverse using first",async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
//     let firstElementText = await page.$eval('.btn-group-toggle >button:first-child',(firstE)=>{
//         return firstE.textContent
//     })
//     expect('Button-1').toBe(firstElementText)
// })

// test("traverse using last",async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
//     let lastElementText = await page.$eval('.btn-group-toggle >button:last-child',(lastE)=>{
//         return lastE.textContent
//     })
//     expect('Button-4').toBe(lastElementText)
// })

// test.only("traverse using last",async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
//     let secondEText = await page.$eval('.btn-group-toggle >button:nth-child(2)',(secondE)=>{
//         return secondE.textContent
//     })
//     expect('Button-2').toBe(secondEText)
// })


test.only("element by Index",async({page})=>{
   // let indexV = 2
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let listE =  await page.$$eval('.btn-group-toggle > button',(elements)=>{
       // Array
        return  element.map(function(el){
            return el.textContent
        })
       
    })
    //   0             1          2           3
    // ['Button-1',''Button-2','Button-3','Button4']
    expect('Button-3').toBe(listE[listE.length-1])
    
})


// children() , firstELement , lastElement , nth-Child(),ElementbyIndex






