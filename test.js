import r00tSid
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
