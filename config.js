'use strict';
const path = require("path");
const yargs = require("yargs").argv;

exports.config = {
    directConnect: true,
    
    baseUrl: 'https://vimeo.com/cameo',
    capabilities: {
        browserName: 'chrome'
    },
    specs: [
        './features/**.feature'
    ],
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize(); 
    },
    cucumberOpts: {
        require: path.resolve('./step_definitions/**.js'),
        tags: [`${yargs.tag}`],
        ignoreUncaughtExceptions: true,
        format: ['json:output/cucumber.json']
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
};