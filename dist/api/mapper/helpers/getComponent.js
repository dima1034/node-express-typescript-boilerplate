"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = require("../components");
const ComponentTypes_1 = require("../constants/ComponentTypes");
function getComponent(type) {
    switch (type) {
        case ComponentTypes_1.ComponentTypes.Combine:
            return new components_1.Combine;
        case ComponentTypes_1.ComponentTypes.Rate:
            return new components_1.Rate;
        case ComponentTypes_1.ComponentTypes.DropDown:
            return new components_1.DropDown;
    }
}
exports.getComponent = getComponent;
//# sourceMappingURL=getComponent.js.map