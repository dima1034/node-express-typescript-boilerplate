"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//declare function require(name:string): any;
const Speech = require('ssml-builder');
const getType_1 = require("./helpers/getType");
const getComponent_1 = require("./helpers/getComponent");
class FormBuilder {
    constructor(json) {
        this.components = this.parse(json);
    }
    headerUtternace() {
        return new Speech()
            .say(`Hi`)
            .pause('100ms')
            .say(`this is medical assistant`)
            .pause('100ms')
            .say(`you have ${this.components.length} components`)
            .pause('20ms')
            .say(`within ${this._pages} pages`)
            .pause('100ms')
            .say(`you can ask me`)
            .say(`for help`)
            .say(`and`)
            .say(`filling surveys`)
            .ssml(true);
    }
    footerUtterance() {
    }
    parse(json) {
        this._pages = json.pages.length;
        let components = [];
        for (let pages of json.pages) {
            for (let jsonComponent of pages.components) {
                let componentType = getType_1.getType(jsonComponent.type);
                //if no type exception!!!
                if (typeof componentType === 'undefined') {
                    continue;
                }
                //DIP
                let component = getComponent_1.getComponent(componentType);
                component.id = jsonComponent.id;
                component.page = pages.pageNumber;
                //parse specificly for each type
                component.parse(jsonComponent);
                //TODO: make setting init
                component.label = jsonComponent.label;
                components.push(component);
            }
        }
        return components;
    }
}
exports.FormBuilder = FormBuilder;
//# sourceMappingURL=FormBuilder.js.map