const { chromium } = require('playwright');


(async () => {
    console.log(Date.now)
    const browser = await chromium.launch({headless : false})
    const page = await browser.newPage()
    await page.goto('https://www.instagram.com/accounts/login/')
    await page.fill('input[name="username"]', process.env.USER)
    await page.fill('input[name="password"]', process.env.PASS)
    await page.locator("#loginForm>div>div:nth-child(3)>button>div").click()
    await page.waitForTimeout(10000)
    
    hola(page)
})() 


var hola = async (page)=>{
   // const appDiv = document.getElementById('app');
    console.log("hola");
    await page.goto('https://www.instagram.com/leomessi/?__a=1')
    //await page.screenshot({path: "img.png"})
    //var aa = await page.locator("/html/body/pre/text()[2]").text
    const text = await page.innerText('body>pre');
    var textJson = JSON.parse(text)
    
    textJson.graphql.user.edge_owner_to_timeline_media.edges.map(item => console.log(item.node.display_url))
};

