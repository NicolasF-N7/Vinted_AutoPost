/*const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1024,
    height: 720,
    deviceScaleFactor: 1,
  });

  // await page.goto("https://paris.craigslist.org/");
  await page.goto("https://vinted.fr/");
  await page.screenshot({ path: 'example.png' });
  const version = await page.browser().version();
  console.log(version);

  //await browser.close();
})();*/


//--------------------------------Recorded script------------------------------------------
//======CONNECTION======
/*const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  const navigationPromise = page.waitForNavigation()

  await page.goto('https://www.vinted.fr/')

  await page.setViewport({
    width: 1024,
    height: 720,
    deviceScaleFactor: 1,
  });

  await navigationPromise

  await page.waitForSelector('#onetrust-accept-btn-handler')
  await page.click('#onetrust-accept-btn-handler')

  await page.waitForSelector('.l-header__actions > .u-desktops-only > .js-signin-button > .c-button__content > .c-button__label')
  await page.click('.l-header__actions > .u-desktops-only > .js-signin-button > .c-button__content > .c-button__label')

  await page.waitForSelector('.u-overflow-auto > .u-ui-padding-horizontal-large > .Text_text__QBn4- > .u-cursor-pointer > .Text_text__QBn4-')
  await page.click('.u-overflow-auto > .u-ui-padding-horizontal-large > .Text_text__QBn4- > .u-cursor-pointer > .Text_text__QBn4-')

  await page.waitForSelector('.u-fill-width > .u-overflow-auto > .u-ui-padding-horizontal-large > .Text_text__QBn4- > a')
  await page.click('.u-fill-width > .u-overflow-auto > .u-ui-padding-horizontal-large > .Text_text__QBn4- > a')

  await page.waitForSelector('#username')
  await page.click('#username')
  await page.type('#username', 'nfoin07@gmail.com')

  await page.waitForTimeout(1000)

  await page.keyboard.press("Tab")
  await page.keyboard.type('VintedNico13')

  await page.waitForTimeout(1000)

  await page.waitForSelector('.Cell_content__2bRVC > .Cell_body__10a_u > .Button_button__1HmfN > .Button_content__1Pyrd > .Button_label__3jCra')
  await page.click('.Cell_content__2bRVC > .Cell_body__10a_u > .Button_button__1HmfN > .Button_content__1Pyrd > .Button_label__3jCra')

  await navigationPromise

})()*/
//======END CONNECTION======
//========================================TAKE BACK HERE================
//====PICTURES UPLOAD====
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://www.vinted.fr/items/new')

  await page.setViewport({ width: 1366, height: 630 })


  //===============UPLOAD PICTURES============
  await page.waitForSelector('.media-select__input-content > .Button_button__1HmfN > .Button_content__1Pyrd > .Button_label__3jCra > span')
  await page.click('.media-select__input-content > .Button_button__1HmfN > .Button_content__1Pyrd > .Button_label__3jCra > span')

  await page.waitForSelector('.body-content > #ItemUpload-react-component-bbb25041-4593-47df-bf50-aac72cace6ec > .Card_card__21tqh > #photos > .u-hidden')
  await page.click('.body-content > #ItemUpload-react-component-bbb25041-4593-47df-bf50-aac72cace6ec > .Card_card__21tqh > #photos > .u-hidden')

  await page.waitForSelector('.Button_content__1Pyrd > .Button_icon__3VQ6P > .Icon_cp1__lNYAj > svg > path')
  await page.click('.Button_content__1Pyrd > .Button_icon__3VQ6P > .Icon_cp1__lNYAj > svg > path')

  await page.waitForSelector('.body-content > #ItemUpload-react-component-bbb25041-4593-47df-bf50-aac72cace6ec > .Card_card__21tqh > #photos > .u-hidden')
  await page.click('.body-content > #ItemUpload-react-component-bbb25041-4593-47df-bf50-aac72cace6ec > .Card_card__21tqh > #photos > .u-hidden')

  await page.waitForSelector('.Button_content__1Pyrd > .Button_icon__3VQ6P > .Icon_cp1__lNYAj > svg > path')
  await page.click('.Button_content__1Pyrd > .Button_icon__3VQ6P > .Icon_cp1__lNYAj > svg > path')

  await page.waitForSelector('.body-content > #ItemUpload-react-component-bbb25041-4593-47df-bf50-aac72cace6ec > .Card_card__21tqh > #photos > .u-hidden')
  await page.click('.body-content > #ItemUpload-react-component-bbb25041-4593-47df-bf50-aac72cace6ec > .Card_card__21tqh > #photos > .u-hidden')
  //============END UPLOAD============
  
})()
