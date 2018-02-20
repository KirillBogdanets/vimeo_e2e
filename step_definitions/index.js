'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const utils = require("./utils");
const EC = protractor.ExpectedConditions;
let {Then, When, Given} = require('cucumber');
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const parser = require('./poParser');

Given(/^I am on Main page$/, () => {
	return browser.wait(EC.visibilityOf(world.StartScreenHomePage.WholeHeader), DEFAULT_STEP_TIMEOUT);
});

When(/^I am logged in as "([^"]*)" with "([^"]*)" password$/, (userName, password) => {
	return utils.login(userName, password);
});

Then(/^I wait until "([^"]*)" element is visible$/, (element) => {
    return browser.wait(EC.visibilityOf(parser.parser(element)), DEFAULT_STEP_TIMEOUT);
});

Then(/^I wait (\d+) seconds$/, (number) => {
	let seconds = parseFloat(number);
    return browser.sleep(Math.floor(seconds * 1000));
});

Then(/^"([^"]*)" element should( not)? be visible$/, (element, shouldNotBe) => {
    return utils.visibilityOf(element, shouldNotBe);
});

Then(/^"([^"]*)" element should( not)? be in viewport$/, (element, shouldNotBe) => {
    return utils.isInViewPort(element, shouldNotBe);
});

Then(/^I scroll to the "([^"]*)" element$/, (element) => {
    return utils.scrollToTheElementHelper(element);
});

When(/^I scroll down page by (\d+) pixels$/, (pixels) => {
    return browser.executeScript(`window.scrollBy(0,'${pixels}');`);
});

Then(/Text of "([^"]*)" element should be equal to "([^"]*)"( ignoring case)?$/, (element, givenText, ignoringCase) => {
    return utils.isTextsEquals(element, givenText, ignoringCase);
});

When(/I remember "([^"]*)" element size as "([^"]*)"$/, (element, saveAs) => {
    return utils.sizeRemember(element, saveAs);
});

Then(/Remembered value as "([^"]*)" should be (bigger then|smaller then|different then|equal to) "([^"]*)"$/, (firstValue, expected, secondValue) => {
    return utils.sizeHelper(firstValue, expected, secondValue);
});

Then(/I click "([^"]*)" element$/, (element) => {
    return parser.parser(element).click();
});

Then(/Text of #"([^"]*)" element of "([^"]*)" collection should be equal to "([^"]*)"$/, (number, collection, givenText) => {
    return utils.collectionTextWorker(number, collection, givenText);
});

Then(/I enter "([^"]*)" text into "([^"]*)" element$/, (givenText, element) => {
    return parser.parser(element).sendKeys(givenText);
});

Then(/I click "([^"]*)" element with JS$/, (element) => {
    return browser.executeScript("arguments[0].click()", parser.parser(element));
});

Then(/I open "([^"]*)" url$/, (url) => {
    return browser.get(url);
});


