'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const EC = protractor.ExpectedConditions;
const consts = require("../consts/common.consts.json");
const DEFAULT_STEP_TIMEOUT = 30 * 1000;

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
    if (homeElement === "StartScreen") {
        return world.StartScreenHomePage[`${element}`].getLocation().then((coordinates) => {
            return inViewPortHelper(coordinates, shouldNotBe);
        });
    } else if (homeElement === "HomePage") {
        return world.HomePage[`${element}`].getLocation().then((coordinates) => {
            return inViewPortHelper(coordinates, shouldNotBe);
        });
    } else {
        return world.ItunesCameoPage[`${element}`].getLocation().then((coordinates) => {
            return inViewPortHelper(coordinates, shouldNotBe);
        });
    }
};

const sizeHelper = (firstValue, expected, secondValue, array) => {
    array.map((value) => {
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

const visabilityOf = () => {

};

module.exports = {
	login,
	isInViewPort: isInViewPort,
    sizeHelper
};