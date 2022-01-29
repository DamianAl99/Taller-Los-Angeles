//require("dotenv").config()
// const { chromium } = require("playwright-chromium")
// (async () => {
//     try{
//     console.log("pasa algo")
//     const browser = await { chromium, firefox }[browserName].launch({
//         chromiumSandbox: false
//       })
//     const page = await browser.newPage()
//     await page.goto('https://www.instagram.com/accounts/login/')
//     //await page.waitForTimeout(10000)
//     await page.fill('input[name="username"]', process.env.USER)
//     await page.waitForTimeout(2000)
//     await page.fill('input[name="password"]', process.env.PASS)
//     await page.waitForTimeout(2000)
//     await page.locator("#loginForm>div>div:nth-child(3)>button>div").click()
    
//     await page.goto('https://www.instagram.com/leomessi/?__a=1')
//     const text = await page.innerText('body>pre');
//     var textJson = JSON.parse(text)
//     textJson.graphql.user.edge_owner_to_timeline_media.edges.map(item => console.log(item.node.display_url))
//     await browser.close()
//     }catch(error){
//         console.log(error)
//     }
// })() 

const express = require("express")
const { chromium } = require("playwright-chromium")

const app = express()
//app.use(express.static("./public"))
const port = process.env.PORT || 3000;

var a = async () => {
  const browserName = "chromium"
  if (!["chromium"].includes(browserName)) {
    return res.status(500).send(`invalid browser name (${browserName})!`)
  }
  const url = "https://www.instagram.com/accounts/login/"
  const waitUntil = "load"
  const width =  1920
  const height = 1080
  console.log(`Incoming request for browser '${browserName}' and URL '${url}'`)
  try {
    /** @type {import('playwright-chromium').Browser} */
    const browser = await { chromium }[browserName].launch({
      //headless: true
        chromiumSandbox: true
    })
    const page = await browser.newPage({
      viewport: {
        width,
        height
      }
    })
    await page.goto(url, {
      timeout: 10 * 1000,
      waitUntil
    })
    await page.fill('input[name="username"]', process.env.USER)
    await page.waitForTimeout(2000)
    await page.fill('input[name="password"]', process.env.PASS)
    await page.waitForTimeout(2000)
    await page.screenshot({path: "./imga.png"})
    await page.locator("#loginForm>div>div:nth-child(3)>button>div").click()
    await page.waitForTimeout(5000)
    //await page.screenshot({path: "./imgb.png"})
    await page.goto('https://www.instagram.com/leomessi/?__a=1', {timeout: 10 * 1000,
    waitUntil})
    await page.waitForTimeout(2000)
    //await page.screenshot({path: "./imgc.png"})
    const text = await page.innerText('body>pre');
    var textJson = JSON.parse(text)
    var data = ""
    textJson.graphql.user.edge_owner_to_timeline_media.edges.map(item => data += item.node.display_url)
    await browser.close()
    console.log(data)
  } catch (err) {
    console.log(err)
    //res.status(500).send(`Something went wrong: ${err}`)
  }
};

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
  a()
});
