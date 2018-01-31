'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const utils = require("./utils");
const EC = protractor.ExpectedConditions;
let {Then, When, Given} = require('cucumber');
const DEFAULT_STEP_TIMEOUT = 30 * 1000;
let sizesArray = [];

Given(/^I am on Main page$/, () => {
	return browser.wait(EC.visibilityOf(world.StartScreenHomePage.WholeHeader), DEFAULT_STEP_TIMEOUT);
});

When(/^I am logged in as "([^"]*)" with "([^"]*)" password$/, (userName, password) => {
	return utils.login(userName, password);
});

Then(/^I wait until "([^"]*)" on (StartScreen|HomePage|ItunesCameoPage) is visible$/, (element, homeElement) => {
	if (homeElement === "StartScreen") {
        return browser.wait(EC.visibilityOf(world.StartScreenHomePage[`${element}`]), DEFAULT_STEP_TIMEOUT);
    } else if (homeElement === "HomePage") {
        return browser.wait(EC.visibilityOf(world.HomePage[`${element}`]), DEFAULT_STEP_TIMEOUT);
	} else {
        return browser.wait(EC.visibilityOf(world.ItunesCameoPage[`${element}`]), DEFAULT_STEP_TIMEOUT);
    }
});

Then(/^I wait (\d+) seconds$/, (number) => {
	let seconds = parseFloat(number);
    return browser.sleep(Math.floor(seconds * 1000));
});

Then(/^"([^"]*)" on (StartScreen|HomePage|ItunesCameoPage) should( not)? be visible$/, (element, homeElement, shouldNotBe) => {
    if (homeElement === "StartScreen") {
        if (shouldNotBe) {
            return browser.wait(
                EC.invisibilityOf(world.StartScreenHomePage[`${element}`]),
                2000
            );
        } else {
            return browser.wait(
                EC.visibilityOf(world.StartScreenHomePage[`${element}`]),
                2000
            );
        }
	} else if (homeElement === "HomePage") {
        if (shouldNotBe) {
            return browser.wait(
                EC.invisibilityOf(world.HomePage[`${element}`]),
                2000
            );
        } else {
            return browser.wait(
                EC.visibilityOf(world.HomePage[`${element}`]),
                2000
            );
        }
    } else {
        if (shouldNotBe) {
            return browser.wait(
                EC.invisibilityOf(world.ItunesCameoPage[`${element}`]),
                2000
            );
        } else {
            return browser.wait(
                EC.visibilityOf(world.ItunesCameoPage[`${element}`]),
                2000
            );
        }
    }
});

Then(/^"([^"]*)" on (StartScreen|HomePage|ItunesCameoPage) should( not)? be in viewport$/, (element, homeElement, shouldNotBe) => {
    return utils.isInViewPort(element, homeElement, shouldNotBe);
});

Then(/^I scroll to the "([^"]*)" element on (StartScreen|HomePage|ItunesCameoPage)$/, (element, homeElement) => {
    if (homeElement === "StartScreen") {
        return world.StartScreenHomePage[`${element}`].getLocation().then((location) => {
            return browser.executeScript(`window.scrollTo(0, "${location.y}");`);
        });
    } else if (homeElement === "HomePage") {
        return world.HomePage[`${element}`].getLocation().then((location) => {
            return browser.executeScript(`window.scrollTo(0, "${location.y}");`);
        });
    } else {
        return world.ItunesCameoPage[`${element}`].getLocation().then((location) => {
            return browser.executeScript(`window.scrollTo(0, "${location.y}");`);
        });
    }
});

When(/^I scroll down page by (\d+) pixels$/, (pixels) => {
    return browser.executeScript(`window.scrollBy(0,'${pixels}');`);
});

Then(/Text of "([^"]*)" element on (StartScreen|HomePage|ItunesCameoPage) should be equal to "([^"]*)"( ignoring case)?$/, (element, homeElement, givenText, ignoringCase) => {
    if (homeElement === "StartScreen") {
        return world.StartScreenHomePage[`${element}`].getText().then((text) => {
            if (ignoringCase) {
                return expect(text.toLowerCase()).to.equal(givenText.toLowerCase());
            }
            return expect(text).to.equal(givenText);
        });
    } else if (homeElement === "HomePage") {
        return world.HomePage[`${element}`].getText().then((text) => {
            if (ignoringCase) {
                return expect(text.toLowerCase()).to.equal(givenText.toLowerCase());
            }
            return expect(text).to.equal(givenText);
        });
    } else {
        return world.ItunesCameoPage[`${element}`].getText().then((text) => {
            if (ignoringCase) {
                return expect(text.toLowerCase()).to.equal(givenText.toLowerCase());
            }
            return expect(text).to.equal(givenText);
        });
    }
});

When(/I remember "([^"]*)" element size on (StartScreen|HomePage|ItunesCameoPage) as "([^"]*)"$/, (element, homeElement, saveAs) => {
    if (homeElement === "StartScreen") {
        return world.StartScreenHomePage[`${element}`].getAttribute("style").then((value) => {
            let opacityValue = value.slice(value.indexOf('opacity:'), value.indexOf(';'));
            return sizesArray.push(`${saveAs}-${opacityValue.match(/\d+/g)}`);
        });
    } else if (homeElement === "HomePage") {
        return world.HomePage[`${element}`].getAttribute("style").then((value) => {
            let opacityValue = value.slice(value.indexOf('opacity:'), value.indexOf(';'));
            return sizesArray.push(`${saveAs}-${opacityValue.match(/\d+/g)}`);
        });
    } else {
        return world.ItunesCameoPage[`${element}`].getAttribute("style").then((value) => {
            let opacityValue = value.slice(value.indexOf('opacity:'), value.indexOf(';'));
            return sizesArray.push(`${saveAs}-${opacityValue.match(/\d+/g)}`);
        });
    }
});

Then(/Remembered value as "([^"]*)" should be (bigger then|smaller then|different then|equal to) "([^"]*)"$/, (firstValue, expected, secondValue) => {
    return utils.sizeHelper(firstValue, expected, secondValue, sizesArray);
});

Then(/I click "([^"]*)" element on (StartScreen|HomePage|ItunesCameoPage) page$/, (element, homeElement) => {
    if (homeElement === "StartScreen") {
        return world.StartScreenHomePage[`${element}`].click();
    } else if (homeElement === "HomePage") {
        return world.HomePage[`${element}`].click();
    } else {
        return world.ItunesCameoPage[`${element}`].click();
    }
});

Then(/Text of #"([^"]*)" element of "([^"]*)" collection on (StartScreen|HomePage|ItunesCameoPage) should be equal to "([^"]*)"$/, (number, collection, homeElement, givenText) => {
    if (homeElement === "ItunesCameoPage") {
        return world.ItunesCameoPage[`${collection}`].then((item) => {
            return item[`${parseFloat(number)-1}`].getText().then((text) => {
                return expect(text).to.equal(givenText);
            });
        });
    } else if (homeElement === "HomePage") {
        return world.HomePage[`${collection}`].then((item) => {
            return item[`${parseFloat(number)-1}`].getText().then((text) => {
                return expect(text).to.equal(givenText);
            });
        });
    } else {
        return world.StartScreenHomePage[`${collection}`].then((item) => {
            return item[`${parseFloat(number)-1}`].getText().then((text) => {
                return expect(text).to.equal(givenText);
            });
        });
    }
});


