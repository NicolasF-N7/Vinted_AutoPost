// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality.
// Any number of plugins can be added through `puppeteer.use()`
const puppeteer = require('puppeteer-extra')
const fs = require('fs');
const picturesRootDir = "/home/nico/Documents/nico/Work/ISLA/Multichannel listing/Fusalp test/Clothes_Pictures/"

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// Add adblocker plugin to block all ads and trackers (saves bandwidth)
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')
puppeteer.use(AdblockerPlugin({ blockTrackers: true }))

// That's it, the rest is puppeteer usage as normal 😊
puppeteer.launch({ headless: false }).then(async browser => {
  const page = await browser.newPage()

  const navigationPromise = page.waitForNavigation()

  await page.goto('https://www.vinted.fr/')

  await page.setViewport({
    width: 1024,
    height: 720,
    deviceScaleFactor: 1,
  });

  await navigationPromise

  //===========CONNECTION============
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

  await page.keyboard.press("Tab")
  await page.keyboard.type('VintedNico13')

  await page.waitForSelector('.Cell_content__2bRVC > .Cell_body__10a_u > .Button_button__1HmfN > .Button_content__1Pyrd > .Button_label__3jCra')
  await page.click('.Cell_content__2bRVC > .Cell_body__10a_u > .Button_button__1HmfN > .Button_content__1Pyrd > .Button_label__3jCra')

  await navigationPromise
  //============END CONNECTION===========

  //============GO TO SELL PRODUCT PAGE========
  await page.waitForSelector('.u-desktops-only > .u-ui-padding-right-small > .c-button--filled > .c-button__content > .c-button__label')
  await page.click('.u-desktops-only > .u-ui-padding-right-small > .c-button--filled > .c-button__content > .c-button__label')

  await navigationPromise
  //===========================================

  let id = 9;
  //===============UPLOAD PICTURES============
  //Calc the number of picture available for this clothe ID
  let nbPict = 0;
  let i=1;
  let fileExist = true;
  while(fileExist){
    let fileName = id + '-' + i + '.jpg';
    fs.access(picturesRootDir + fileName, fs.constants.F_OK, (err) => {
      console.log('\n> Checking Permission for reading the file');
      if (err){
        console.log('File ' + fileName + ' doesn\'t exist');
        fileExist = false;
      }
      else
        console.log('File exist');
    });
  }
  nbPict = i;
  console.log(nbPict + " files found");

  await page.waitForSelector("input[type=file]");
  const input = await page.$("input[type=file]");
  await input.uploadFile(picturesRootDir + "6-1.jpg");
  //============END UPLOAD============



})
