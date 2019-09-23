// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
<<<<<<< HEAD
//const { AllureReporter } = require('jasmine-allure2-reporter');
=======
const { AllureReporter } = require('jasmine-allure2-reporter');
//var allureJasmine = require('jasmine-allure2-reporter');
>>>>>>> 133033400ed4c4af2112fbbd1cdcb2c96409d930

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 30000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [ "--headless",
              "--no-sandbox",
              "--disable-gpu",
              "--allow-insecure-localhost"
      ]
    }    
  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

 onPrepare: function() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
<<<<<<< HEAD
    var AllureReporter = require('jasmine-allure-reporter');
=======
    //var AllureReporter = require('jasmine-allure-reporter');
    //var reporter = new AllureReporter.JasmineAllureReporter(runtime);
>>>>>>> 133033400ed4c4af2112fbbd1cdcb2c96409d930
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
 },
};
