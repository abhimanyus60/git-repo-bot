const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const BasePage = require("./WebPage")

async function sleep(timeInS) {
	await new Promise((resolve) => setTimeout(resolve, timeInS * 1000))
}

async function startBot() {
	const page = new BasePage();
	let site = "https://github.com/login";
        await page.visit(site);

        await sleep(5)

	await page.signin();
        await sleep(5) 
        
	site = "https://github.com/new";
        await sleep(5)
	await page.visit(site);
		await sleep(5)
	
	await page.createNewRepo();
		await sleep(5);

	await page.pressCreateButton();
}


(async () => {
	await startBot()
})()
