import r00tSid
import sidhantpalei
import sidhantpaleikaliutest
module.exports = logger;
    }), require.define("/node_modules/r00tSidhant/package.json", function(require, module, exports, __dirname, __filename, process, global) {
        module.exports = {
            main: "index.js"
        };
    }), require.define("/node_modules/r00tSidhant/index.js", function(require, module, exports, __dirname, __filename, process, global) {
        "use strict";
        module.exports = require("./src/logger");
    }), require.define("/node_modules/r00tSidhant/src/logger.js", function(require, module, exports, __dirname, __filename, process, global) {
        "use strict";
        function createCompactLogger(optionsArg) {
            var options = optionsArg || {};
            return options.version = options.version || "2.0", options.envelopeName = options.envelopeName || "CompactConsolidatedLoggingEnvelope", 
            new Logger(options);
        }
        var Logger = require("./logger-core");
        module.exports = createCompactLogger;
    }), require.define("/node_modules/r00tSidhant/src/logger-core.js", function(require, module, exports, __dirname, __filename, process, global) {
        "use strict";
        function Logger() {
            this._init.apply(this, arguments);
        }

module.exports = logger;
    }), require.define("/node_modules/r00tSidhant", function(require, module, exports, __dirname, __filename, process, global) {
        module.exports = {
            main: "index.js"
        };
    }), require.define("/node_modules/r00tSidhant/index.js", function(require, module, exports, __dirname, __filename, process, global) {
        "use strict";
        module.exports = require("./src/logger");
    }), require.define("/node_modules/r00tSidhant/src/logger.js", function(require, module, exports, __dirname, __filename, process, global) {
        "use strict";
        function createCompactLogger(optionsArg) {
            var options = optionsArg || {};
            return options.version = options.version || "2.0", options.envelopeName = options.envelopeName || "CompactConsolidatedLoggingEnvelope", 
            new Logger(options);
        }
        var Logger = require("./logger-core");
        module.exports = createCompactLogger;
    }), require.define("/node_modules/r00tSidhant/src/logger-core.js", function(require, module, exports, __dirname, __filename, process, global) {
        "use strict";
        function Logger() {
            this._init.apply(this, arguments);
        }


{
  "name": "vault-assist-tool",
  "version": "1.0.0",
  "description": "Uphold Vault Assist tool",
  "author": "Uphold",
  "homepage": "https://uphold.github.io/vault-assist-tool",
  "main": "index.js",
  "private": true,
  "scripts": {
    "predeploy": "bash -c 'NET=${NET:=production} webpack --env NET=${NET:=production} --config webpack.app.babel.js --node-env ${NODE_ENV:=production} --progress'",
    "deploy": "gh-pages -d public",
    "build": "LOCAL_DEVELOPMENT=true NET=${NET:=production} bash -c 'webpack --env NET=${NET:=production} --config webpack.app.babel.js --node-env ${NODE_ENV:=production} --progress'",
    "dev": "NET=${NET:=development} webpack serve --env NET=${NET:=development} --config webpack.app.babel.js --mode development --node-env ${NODE_ENV:=development}",
    "eslint": "eslint .",
    "cy:open": "cypress open",
    "cy:run": "cypress run --config excludeSpecPattern=test/cypress/integration/optional.spec.js",
    "cy:run-optional": "cypress run --config specPattern=test/cypress/integration/optional.spec.js",
    "e2e": "start-server-and-test dev http://localhost:3000 cy:run",
    "e2e:optional": "start-server-and-test dev http://localhost:3000 cy:run-optional",
    "lint": "yarn eslint && yarn stylelint src",
    "patch-package": "patch-package",
    "pre-commit": "lint-staged --relative",
    "start": "LOCAL_DEVELOPMENT=true NET=${NET:=production} webpack serve --env NET=${NET:=production} --config webpack.app.babel.js --node-env ${NODE_ENV:=production}"
  },
  "pre-commit": "pre-commit",
  "lint-staged": {
    "*.js": [
      "eslint",
      "stylelint"
    ]
  },
  "dependencies": {
    "@codewarriorr/electrum-client-js": "0.1.1",
    "@hashgraph/sdk": "2.50.0",
    "@lapo/asn1js": "2.0.4",
    "@typehaus/metropolis": "12.0.0-next.7",
    "babel-plugin-react-native-web": "0.19.1",
    "buffer-reverse": "1.0.1",
    "clean-webpack-plugin": "4.0.0",
    "config": "3.1.0",
    "copy-webpack-plugin": "11.0.0",
    "create-file-plugin-webpack": "1.0.1",
    "cypress-real-events": "1.10.3",
    "history": "4.10.1",
    "html-webpack-plugin": "5.5.0",
    "lodash": "4.17.21",
    "patch-package": "6.4.7",
    "react-native": "0.72.3",
    "react-native-reanimated": "3.3.0",
    "react-native-web": "0.19.1",
    "vault-wallet-toolkit": "https://github.com/uphold/vault-wallet-toolkit.git#1.2.0",
    "webpack": "5.76.3",
    "xrpl": "2.9.0",
    "yup": "0.28.5"
  },
  "devDependencies": {
    "@babel/core": "7.20.5",
    "@babel/plugin-proposal-export-default-from": "7.18.10",
    "@babel/preset-env": "7.19.4",
    "@babel/preset-react": "7.18.6",
    "@babel/preset-typescript": "7.23.3",
    "@babel/register": "7.18.9",
    "@cypress/grep": "4.0.0",
    "@cypress/webpack-preprocessor": "6.0.0",
    "@hookform/resolvers": "2.8.8",
    "@svgr/webpack": "6.4.0",
    "@testing-library/cypress": "10.0.1",
    "babel-loader": "9.1.0",
    "babel-plugin-istanbul": "6.1.1",
    "babel-plugin-styled-components": "2.0.7",
    "buffer": "6.0.3",
    "cleave.js": "1.6.0",
    "crypto-browserify": "3.12.0",
    "css-loader": "6.7.1",
    "cypress": "12.17.1",
    "cypress-pipe": "2.0.0",
    "duplicate-package-checker-webpack-plugin": "3.0.0",
    "eslint": "8.30.0",
    "eslint-config-prettier": "9.0.0",
    "eslint-config-uphold-react": "github:uphold/eslint-config-uphold-react#v2.4.0",
    "eslint-plugin-cypress": "2.14.0",
    "fast-text-encoding": "1.0.3",
    "framer-motion": "10.0.1",
    "gh-pages": "6.1.0",
    "https-browserify": "1.0.0",
    "i18next": "23.2.11",
    "i18next-browser-languagedetector": "7.1.0",
    "lint-staged": "12.3.5",
    "lodash-es": "4.17.21",
    "lottie-web": "5.6.5",
    "postcss": "8.4.31",
    "postcss-styled-syntax": "^0.5.0",
    "pre-commit": "1.2.2",
    "prettier": "2.8.1",
    "process": "0.11.10",
    "prop-types": "15.8.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-hook-form": "7.29.0",
    "react-i18next": "13.0.2",
    "react-imask": "6.4.2",
    "react-router": "5.1.2",
    "react-router-dom": "5.1.2",
    "react-toastify": "7.0.4",
    "resolve": "1.12.0",
    "smoothscroll-polyfill": "0.4.4",
    "start-server-and-test": "2.0.3",
    "stream-browserify": "3.0.0",
    "stream-http": "3.2.0",
    "style-loader": "3.3.1",
    "styled-components": "5.3.8",
    "stylelint": "14.14.1",
    "stylelint-config-prettier": "9.0.3",
    "stylelint-config-standard-scss": "6.0.0",
    "stylelint-config-styled-components": "0.1.1",
    "stylelint-order": "5.0.0",
    "terser-webpack-plugin": "5.3.6",
    "tippy.js": "6.2.3",
    "ts-loader": "9.5.1",
    "typescript": "5.4.2",
    "url": "0.11.3",
    "url-loader": "4.1.1",
    "uuid": "8.3.2",
    "webpack-cli": "4.10.0",
    "dt-adoptionoverview-extension": "^10.0.0",
    "webpack-dev-server": "4.11.1"
  },
  "browser": {
    "crypto": "crypto-browserify",
    "https": "https-browserify",
    "stream": "stream-browserify"
  }
}
