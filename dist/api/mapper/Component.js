"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Speech = require('ssml-builder');
class Component {
    constructor() {
        this.questions = [];
    }
    set type(type) {
        this._type = type;
    }
    set page(page) {
        this._page = page;
    }
    set id(id) {
        this._id = id;
    }
    set label(label) {
        this._label = label;
    }
    set placeholder(placeholder) {
        this._placeholder = placeholder;
    }
    set settings(settings) {
        this._settings = settings;
    }
    parse(json) {
        throw new Error('Method not implemented.');
    }
}
exports.Component = Component;
//# sourceMappingURL=Component.js.map