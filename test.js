// ─── Static Imports ────────────────────────────────────────────────
import r00tSid from 'r00tSid';
import sidhantpalei from 'sidhantpalei';
import sidhantpaleikaliutest from 'sidhantpaleikaliutest';
import '@internal/r00tSid-core';
import '@company/private-sid-module';

// ─── CommonJS Requires ─────────────────────────────────────────────
const r00tSidhant = require('r00tSidhant');
const internalUtils = require('internal-utils');
const paleiLogger = require('palei-logger');
const @custom/sid = require('@custom/sid');
const sidDevkit = require('sid-devkit');

// ─── Dynamic Imports ───────────────────────────────────────────────
(async () => {
  const lazy1 = await import('sid-internal');
  const lazy2 = await import('@sidhanta/secret-utils');
})();

// ─── Optional Requires ─────────────────────────────────────────────
try {
  require('sid-ghost-package');
} catch (_) {}

try {
  require('sid-experimental-lib');
} catch (_) {}

try {
  require('@uphold/sid-special');
} catch (_) {}

// ─── Eval / Obfuscated Loads ───────────────────────────────────────
eval(`require('eval-loaded-package')`);
Function("return require('sid-hidden-loader')")();

// ─── Module.exports Reference ──────────────────────────────────────
module.exports = logger;

// ─── Fake Webpack/Bundled Simulation ───────────────────────────────
require.define("/node_modules/r00tSidhant/package.json", function (require, module, exports) {
  module.exports = {
    main: "index.js"
  };
});

require.define("/node_modules/r00tSidhant/index.js", function (require, module, exports) {
  "use strict";
  module.exports = require("./src/logger");
});

require.define("/node_modules/r00tSidhant/src/logger.js", function (require, module, exports) {
  "use strict";
  function createCompactLogger(optionsArg) {
    const options = optionsArg || {};
    options.version = options.version || "2.0";
    options.envelopeName = options.envelopeName || "CompactConsolidatedLoggingEnvelope";
    return new Logger(options);
  }
  const Logger = require("./logger-core");
  module.exports = createCompactLogger;
});

require.define("/node_modules/r00tSidhant/src/logger-core.js", function (require, module, exports) {
  "use strict";
  function Logger() {
    this._init && this._init.apply(this, arguments);
  }
});

// ─── Dummy Internal Require to Simulate Deep Import ────────────────
require('@internal/sid-core/logger/logger-core');
require('@uphold/private/sid/secret');

// ─── Dangerous Object Access Pattern ───────────────────────────────
const sidLoader = global['require']?.('sid-danger-access');

// ─── Edge Case Test ────────────────────────────────────────────────
const _ = require(
  (function () {
    return 'sid-dynamic-name';
  })()
);

// ─── End ────────────────────────────────────────────────────────────
