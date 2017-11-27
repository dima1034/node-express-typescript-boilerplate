"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComponentTypes_1 = require("../constants/ComponentTypes");
function getType(type) {
    switch (type) {
        case 'Combine':
            return ComponentTypes_1.ComponentTypes.Combine;
        case 'Rate':
            return ComponentTypes_1.ComponentTypes.Rate;
        case 'Dropdown':
            return ComponentTypes_1.ComponentTypes.DropDown;
    }
}
exports.getType = getType;
//# sourceMappingURL=getType.js.map