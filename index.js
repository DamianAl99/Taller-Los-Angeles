require("dotenv").config()
const { chromium } = require('playwright');



(async () => {
    try{
    console.log("pasa algo")
    const browser = await chromium.launch({headless : true})
    const page = await browser.newPage()
    await page.goto('https://www.instagram.com/accounts/login/')
    //await page.waitForTimeout(10000)
    await page.fill('input[name="username"]', process.env.USER)
    await page.waitForTimeout(2000)
    await page.fill('input[name="password"]', process.env.PASS)
    await page.waitForTimeout(2000)
    await page.locator("#loginForm>div>div:nth-child(3)>button>div").click()
    
    await page.goto('https://www.instagram.com/leomessi/?__a=1')
    const text = await page.innerText('body>pre');
    var textJson = JSON.parse(text)
    textJson.graphql.user.edge_owner_to_timeline_media.edges.map(item => console.log(item.node.display_url))
    await browser.close()
    }catch(error){
        console.log(error)
    }
})() 


var hola = async (page, browser)=>{
   // const appDiv = document.getElementById('app');
    console.log("hola");
    await page.goto('https://www.instagram.com/leomessi/?__a=1')
    //await page.screenshot({path: "img.png"})
    //var aa = await page.locator("/html/body/pre/text()[2]").text
    const text = await page.innerText('body>pre');
    var textJson = JSON.parse(text)
    
    textJson.graphql.user.edge_owner_to_timeline_media.edges.map(item => console.log(item.node.display_url))

    await browser.close()
};

