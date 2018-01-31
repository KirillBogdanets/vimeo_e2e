'use strict';

let {After, Before, Status} = require('cucumber');
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);
const fs = require('fs');

Before({tags: "@prepearedStatementForHomePage"}, () => {
    return browser.get("https://vimeo.com/cameo");
});

After((testCase) => {
    if (testCase.result.status === Status.FAILED) {
        return browser.takeScreenshot().then(function(screenShot) {
            let stream = fs.createWriteStream(`./output/${testCase.pickle.name}.png`);
            stream.write(new Buffer(screenShot, 'base64'));
            stream.end();
        });
    }
});
