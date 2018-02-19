'use strict';

let {After, Before, Status} = require('cucumber');
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const fs = require('fs');

Before({tags: "@prepearedStatementForHomePage"}, () => {
    return browser.get(browser.baseUrl);
});

After(function (testCase){
    if (testCase.result.status === Status.FAILED) {
        let world = this;
        return browser.takeScreenshot().then((screenShot) => {
            let decodedImage = new Buffer(screenShot, 'base64');
            let stream = fs.createWriteStream(`./output/${testCase.pickle.name}.png`);
            stream.write(new Buffer(screenShot, 'base64'));
            stream.end();
            return world.attach(decodedImage, 'image/png');
        });
    }
});
