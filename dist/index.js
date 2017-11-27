"use strict";
/**
 * EXPRESS TYPESCRIPT BOILERPLATE
 * ----------------------------------------
 *
 * This is a boilerplate for Node.js Application written in TypeScript.
 * The basic layer of this app is express. For further information visit
 * the 'README.md' file.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const App_1 = require("./server/App");
exports.app = new App_1.App();
// Launch the server with all his awesome features.
exports.app.bootstrap();
//# sourceMappingURL=index.js.map