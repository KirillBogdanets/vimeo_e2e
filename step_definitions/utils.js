'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const EC = protractor.ExpectedConditions;
const consts = require("../consts/common.consts.json");
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
let sizesArray = [];
const parser = require('./poParser');

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
const isInViewPort = (element, shouldNotBe) => {
    return parser.parser(element).getLocation().then((coordinates) => {
        return inViewPortHelper(coordinates, shouldNotBe);
    });
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

const visibilityOf = (element, shouldNotBe) => {
    if (shouldNotBe) {
        return browser.wait(EC.invisibilityOf(parser.parser(element)), 2000);
    } else {
        return browser.wait(EC.visibilityOf(parser.parser(element)), 2000);
    }
};

const scrollToTheElementHelper = (element) => {
    return parser.parser(element).getLocation().then((location) => {
        return browser.executeScript(`window.scrollTo(0, "${location.y}");`);
    });
};

const isTextsEquals = (element, givenText, ignoringCase) => {
    if (ignoringCase){
        return parser.parser(element).getText().then((text) => {
            return expect(text.toLowerCase()).to.equal(givenText.toLowerCase());
        });
    } else {
        return parser.parser(element).getText().then((text) => {
            return expect(text).to.equal(givenText);
        });
    }
};

const sizeRemember = (element, saveAs) => {
    return parser.parser(element).getAttribute("style").then((value) => {
        let opacityValue = value.slice(value.indexOf('opacity:'), value.indexOf(';'));
        return sizesArray.push(`${saveAs}-${opacityValue.match(/\d+/g)}`);
    });
};

const collectionTextWorker = (number, collection, givenText) => {
    return parser.parser(collection).then((item) => {
        return item[`${parseFloat(number)-1}`].getText().then((text) => {
            return expect(text).to.equal(givenText);
        });
    });
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