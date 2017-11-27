/**
 * EXPRESS TYPESCRIPT BOILERPLATE
 * ----------------------------------------
 *
 * This is a boilerplate for Node.js Application written in TypeScript.
 * The basic layer of this app is express. For further information visit
 * the 'README.md' file.
 *
 */

import 'reflect-metadata';
import { App } from './server/App';

export const app = new App();

// Launch the server with all his awesome features.
app.bootstrap();
