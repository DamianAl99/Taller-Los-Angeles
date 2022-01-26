const fetch = require("node-fetch");
const fs = require("fs");
const { chromium } = require('playwright');


(async () => {
    console.log(Date.now)
    const browser = await chromium.launch({headless : true})
    const page = await browser.newPage()
    await page.goto('https://www.instagram.com/accounts/login/')
    await page.fill('input[name="username"]', "damiian_al")
    await page.fill('input[name="password"]', "empanadadecarne")
    await page.locator("#loginForm>div>div:nth-child(3)>button>div").click()
    await page.waitForTimeout(10000)
    
    hola(page)
})()


var hola = async (page)=>{
   // const appDiv = document.getElementById('app');
    console.log("hola");
    await page.goto('https://www.instagram.com/leomessi/?__a=1')
    await page.screenshot({path: "img.png"})
    var aa = await page.locator("/html/body/pre/text()[2]").text
    const text = await page.innerText('body>pre');
    var textJson = JSON.parse(text)
    fs.writeFile("./test.txt", text, function (err) {
        // la funcion es la que maneja lo que sucede despues de termine el evento
        if (err) {
            return console.log(err);
        }
        // las funciones de javascript en nodejs son asincronicas
        // por lo tanto lo que se quiera hacer debe hacerse dentro de la funcion que maneja el evento
        // si uno declara una variable arriba de la funcion, la manipula dentro y la quiere usar
        // despues afuera, se corre el riezgo de que nunca se realice la manipulacion.
        console.log("The file was saved!");
    });
    textJson.graphql.user.edge_owner_to_timeline_media.edges.map(item => console.log(item.node.display_url))
};

