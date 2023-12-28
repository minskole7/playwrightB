
const { test, expect } = require('@playwright/test');
const assert = require('assert');
test("children elements", async ({ page }) => {
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let childrens = await page.$$('.traversal-buttons > *')
    expect(childrens.length).toBe(5)

})

test("firstChild", async ({ page }) => {
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let firstText = await page.locator('.traversal-drinks-list > li').first().innerText();
    expect(firstText).toBe("Coffee")
})

test("lastChild", async ({ page }) => {
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let lastText = await page.locator('.traversal-drinks-list > li').last().innerText();
    expect(lastText).toBe("Sugar")

})

test("nth:child", async ({ page }) => {
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let lastText = await page.locator('.traversal-drinks-list > li').nth(1).innerText()
    expect(lastText).toBe("Tea")

})

test("prevElement", async ({ page }) => {
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let milkElement = await page.$('#milk')
    let txtFound = await milkElement.evaluate((el) => {
        let text = el.previousElementSibling.textContent
        return text
    });
    expect(txtFound).toBe('Tea')

})

test("nextElement", async ({ page }) => {
    // arrangement
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let milkElement = await page.$('#milk')
    let txtFound = await milkElement.evaluate((el) => {
        let text = el.nextElementSibling.textContent
        return text
    });
    expect(txtFound).toBe('Espresso')

})


// children() // nth() // first() // last() // evaluate()
// js using evalute
// remaining topic to be covered AJAX




// test('Filter Elements Based on Text Content with CSS Selector', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
//     let buttons = await page.$$('button')
//     for(const button of buttons){
//         let linkText = await button.textContent()
//         console.log(linkText)
//     }

// });


// test('Find and Print Text of Multiple Elements', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html');

//     // Use page.locator with a selector to find multiple elements
//     const elements = await page.locator('button');

//     // Get the count of found elements
//     const count = await elements.count();
//     console.log('Number of elements found:', count);

//     // Iterate through the found elements and print their text content
//     for (let i = 0; i < count; i++) {
//         const textContent = await elements.nth(i).innerText();
//         console.log('Element Text:', textContent);
//     }
// });

// test.only('Find and Print Text of Multiple Elements with Flag', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html');

//     // Use page.locator with a selector to find multiple elements
//     const elements = await page.locator('button');

//     // Get the count of found elements
//     const count = await elements.count();
//     console.log('Number of elements found:', count);

//     // Flag to check if the button with text "Button-2" is found
//     let button2Found = false;

//     // Iterate through the found elements and print their text content
//     for (let i = 0; i < count; i++) {
//         const textContent = await elements.nth(i).innerText();
//         console.log('Element Text:', textContent);

//         // Check if a button with the text "Button-2" is found
//         if (textContent === 'Button-2') {
//             console.log('Button-2 found!');
//             button2Found = true;
//             break; // Break out of the loop if the button is found
//         }
//     }

//     // Add an assertion based on the flag
//     await expect(button2Found).toBe(true);
// });

// test.only('Count Buttons Starting with Text "Button"', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
//     // Use page.$$ to find all buttons with the specified selector
//     const buttons = await page.$$('button');
//     // Use the filter method to get buttons starting with the text "Button"
//     const filteredButtons = buttons.filter(async (button) => {
//         const buttonText = await button.textContent();
//         return buttonText.startsWith('Button');
//     });
//     // Log the count of buttons starting with the text "Button"
//     console.log('Number of Buttons Starting with "Button":', filteredButtons.length);
//     // Add an assertion to check if there are at least 2 such buttons
//     await expect(filteredButtons.length).toBeGreaterThan(1); // Adjust the expectation as needed
// });

// test.only('Count Buttons Starting with Text "Button"', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
//     // Use page.$$ to find all buttons with the specified selector
//     const buttons = await page.$$('button');
//     // Use the filter method to get buttons starting with the text "Button"
//     const filteredButtons = await Promise.all(
//         buttons.map(async (button) => {
//             // const buttonText = await button.innerText();
//             // return buttonText.startsWith('Button');
//             return button.innerText().includes('Button')
//         })
//     );

//     // Count the number of buttons starting with the text "Button"
//     const count = filteredButtons.filter((result) => result).length;

//     // Log the count of buttons starting with the text "Button"
//     console.log('Number of Buttons Starting with "Button":', count);

//     // Add an assertion to check if there are at least 2 such buttons
//     await expect(count).toBeGreaterThan(1); // Adjust the expectation as needed
// });


// test.only('Count Buttons Starting with Text "Button"', async ({ page }) => {
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
//     // Use page.$$ to find all buttons with the specified selector
//     const buttons = await page.$$('button');
//     // Use the filter method to get buttons starting with the text "Button"
//     const filteredButtons = buttons.filter(async (button) => {
//         const buttonText = await button.innerText();
//         return buttonText.startsWith('Button');
//     });

//     // Log the count of buttons starting with the text "Button"
//     console.log('Number of Buttons Starting with "Button":', filteredButtons.length);

//     // Add an assertion to check if there are at least 2 such buttons
//     await expect(filteredButtons.length).toBeGreaterThan(1); // Adjust the expectation as needed
// });