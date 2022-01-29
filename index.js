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
const engines = ['chromium', 'firefox', 'webkit'];
app.get('/', (req, res) => {
  res.send(`
  <a href="/test/chromium">Test Chromium</a>
  `);
});

app.get('/test/:browserName', async (req, res) => {
  const name = req.params.browserName;
  console.log(`Testing browser engine: ${name}`);
  if (!engines.includes(name)) {
    return res.send(`Not available engine ${name}`);
  }

  try {
    const browser = await { chromium }[name].launch({
              chromiumSandbox: false
    })
    const context = await browser.newContext();
    const page = await context.newPage('http://whatsmyuseragent.org/');
    
    await page.screenshot({ path: `example-${name}.png` });
    await browser.close();
    console.log(`Testing ${name} successfull!`);
    res.send('DONE');
  } catch(err) {
    console.log(err);
    res.send(err + '');
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
