'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const EC = protractor.ExpectedConditions;
const consts = require("../consts/common.consts.json");
const DEFAULT_STEP_TIMEOUT = 30 * 1000;
let sizesArray = [];

const login = (userName, password) => {
	return world.StartScreenHomePage.LoginButton.click().then(() => {
		return browser.wait(EC.visibilityOf(world.LoginToVimeoPopup.WholePopup), DEFAULT_STEP_TIMEOUT);
			}).then(() => {
				return world.LoginToVimeoPopup.EmailInput.sendKeys(userName ? userName : consts["userEmail"]);
		    }).then(() => {
			    return world.LoginToVimeoPopup.PasswordInput.sendKeys(password ? password : consts["userPassword"]);
		    }).then(() => {
                return browser.wait(EC.elementToBeClickable(world.LoginToVimeoPopup.WholePopup), DEFAULT_STEP_TIMEOUT);
	     	}).then(() => {
		     	return world.LoginToVimeoPopup.LoginButton.click();
		    });
};

const inViewPortHelper = (coordinates, shouldNotBe) => {
    return browser.executeScript("return window.scrollY;").then((scrollTop) => {
        return browser.executeScript("return window.innerHeight;").then((innerHeight) => {
            if (shouldNotBe) {
                if (coordinates.y >= scrollTop && coordinates.y < scrollTop + innerHeight) {
                    throw new Error();
                }
            } else {
                if (!(coordinates.y >= scrollTop && coordinates.y < scrollTop + innerHeight)) {
                    throw new Error();
                }
            }
        });
    });
};
const isInViewPort = (element, homeElement, shouldNotBe) => {
    switch (homeElement) {
        case "StartScreen":
            return world.StartScreenHomePage[`${element}`].getLocation().then((coordinates) => {
                return inViewPortHelper(coordinates, shouldNotBe);
            });
            break;
        case "HomePage":
            return world.HomePage[`${element}`].getLocation().then((coordinates) => {
                return inViewPortHelper(coordinates, shouldNotBe);
            });
            break;
        case "ItunesCameoPage":
            return world.ItunesCameoPage[`${element}`].getLocation().then((coordinates) => {
                return inViewPortHelper(coordinates, shouldNotBe);
            });
            break;
    }
};

const sizeHelper = (firstValue, expected, secondValue) => {
    sizesArray.map((value) => {
        if (value.startsWith(`${firstValue}-`)) {
            firstValue = value.split("-")[1];
        } else if (value.startsWith(`${secondValue}-`)) {
            secondValue = value.split("-")[1];
        }
    });

	switch (expected) {
		case "bigger then":
            return expect(firstValue > secondValue).to.be.true;
            break;
		case "smaller then":
            return expect(firstValue < secondValue).to.be.true;
            break;
        case "different then":
            console.log(firstValue, secondValue);
            return expect(firstValue !== secondValue).to.be.true;
            break;
        case "equal to":
            return expect(firstValue === secondValue).to.be.true;
            break;
	}
};

const visibilityOf = (element, page, shouldNotBe) => {
    if (shouldNotBe) {
        switch (page) {
            case "StartScreen":
                return browser.wait(EC.invisibilityOf(world.StartScreenHomePage[`${element}`]), 2000);
                break;
            case "HomePage":
                return browser.wait(EC.invisibilityOf(world.HomePage[`${element}`]), 2000);
                break;
            case "ItunesCameoPage":
                return browser.wait(EC.invisibilityOf(world.ItunesCameoPage[`${element}`]), 2000);
                break;
        }
    } else {
        switch (page) {
            case "StartScreen":
                return browser.wait(EC.visibilityOf(world.StartScreenHomePage[`${element}`]), 2000);
                break;
            case "HomePage":
                return browser.wait(EC.visibilityOf(world.HomePage[`${element}`]), 2000);
                break;
            case "ItunesCameoPage":
                return browser.wait(EC.visibilityOf(world.ItunesCameoPage[`${element}`]), 2000);
                break;
        }
    }
};

const scrollToTheElementHelper = (element, homeElement) => {
    switch (homeElement) {
        case "StartScreen":
            return world.StartScreenHomePage[`${element}`].getLocation().then((location) => {
                return browser.executeScript(`window.scrollTo(0, "${location.y}");`);
            });
            break;
        case "HomePage":
            return world.HomePage[`${element}`].getLocation().then((location) => {
                return browser.executeScript(`window.scrollTo(0, "${location.y}");`);
            });
            break;
        case "ItunesCameoPage":
            return world.ItunesCameoPage[`${element}`].getLocation().then((location) => {
                return browser.executeScript(`window.scrollTo(0, "${location.y}");`);
            });
            break;
    }
};

const isTextsEquals = (element, homeElement, givenText, ignoringCase) => {
    if (ignoringCase){
        switch (homeElement) {
            case "StartScreen":
                return world.StartScreenHomePage[`${element}`].getText().then((text) => {
                    return expect(text.toLowerCase()).to.equal(givenText.toLowerCase());
                });
                break;
            case "HomePage":
                return world.HomePage[`${element}`].getText().then((text) => {
                    return expect(text.toLowerCase()).to.equal(givenText.toLowerCase());
                });
                break;
            case "ItunesCameoPage":
                return world.ItunesCameoPage[`${element}`].getText().then((text) => {
                    return expect(text.toLowerCase()).to.equal(givenText.toLowerCase());
                });
                break;
        }
    } else {
        switch (homeElement) {
            case "StartScreen":
                return world.StartScreenHomePage[`${element}`].getText().then((text) => {
                    return expect(text).to.equal(givenText);
                });
                break;
            case "HomePage":
                return world.HomePage[`${element}`].getText().then((text) => {
                    return expect(text).to.equal(givenText);
                });
                break;
            case "ItunesCameoPage":
                return world.ItunesCameoPage[`${element}`].getText().then((text) => {
                    return expect(text).to.equal(givenText);
                });
                break;
        }
    }
};

const sizeRemember = (element, homeElement, saveAs) => {
    switch (homeElement) {
        case "StartScreen":
            return world.StartScreenHomePage[`${element}`].getAttribute("style").then((value) => {
                let opacityValue = value.slice(value.indexOf('opacity:'), value.indexOf(';'));
                return sizesArray.push(`${saveAs}-${opacityValue.match(/\d+/g)}`);
            });
            break;
        case "HomePage":
            return world.HomePage[`${element}`].getAttribute("style").then((value) => {
                let opacityValue = value.slice(value.indexOf('opacity:'), value.indexOf(';'));
                return sizesArray.push(`${saveAs}-${opacityValue.match(/\d+/g)}`);
            });
            break;
        case "ItunesCameoPage":
            return world.ItunesCameoPage[`${element}`].getAttribute("style").then((value) => {
                let opacityValue = value.slice(value.indexOf('opacity:'), value.indexOf(';'));
                return sizesArray.push(`${saveAs}-${opacityValue.match(/\d+/g)}`);
            });
            break;
    }
};

const collectionTextWorker = (number, collection, homeElement, givenText) => {
    switch (homeElement) {
        case "StartScreen":
            return world.StartScreenHomePage[`${collection}`].then((item) => {
                return item[`${parseFloat(number)-1}`].getText().then((text) => {
                    return expect(text).to.equal(givenText);
                });
            });
            break;
        case "HomePage":
            return world.HomePage[`${collection}`].then((item) => {
                return item[`${parseFloat(number)-1}`].getText().then((text) => {
                    return expect(text).to.equal(givenText);
                });
            });
            break;
        case "ItunesCameoPage":
            return world.ItunesCameoPage[`${collection}`].then((item) => {
                return item[`${parseFloat(number)-1}`].getText().then((text) => {
                    return expect(text).to.equal(givenText);
                });
            });
            break;
    }
};

module.exports = {
	login,
	isInViewPort,
    sizeHelper,
    visibilityOf,
    scrollToTheElementHelper,
    isTextsEquals,
    sizeRemember,
    collectionTextWorker
};