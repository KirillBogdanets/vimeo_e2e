'use strict';
const path = require("path");
const yargs = require("yargs").argv;
const reporter = require('cucumber-html-reporter');

exports.config = {
    directConnect: true,
    
    baseUrl: 'https://vimeo.com/cameo',
    capabilities: {
        browserName: 'chrome',
        version: "63.0.3239.132"
    },
    specs: [
        './features/**.feature'
    ],
    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize(); 
    },
    onComplete: function() {
        let options = {
            theme: 'bootstrap',
            jsonFile: './output/cucumber.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "Browser": "Chrome",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };

        reporter.generate(options);
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