"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
//import { Question } from '../Question';
const ComponentTypes_1 = require("../constants/ComponentTypes");
class DropDown extends Component_1.Component {
    constructor() {
        super();
        this.type = ComponentTypes_1.ComponentTypes.DropDown;
    }
    parse(json) {
        // let question = new Question();
        // question.answerType = 'catchAll';
        // question.label = striptags(json.label, [], '');
        // for (let option of json.options) {
        // 	question.label += ` ${option.id} ${option.text},`;
        // };
        // this.questions.push(question);
        console.log(json);
    }
}
exports.DropDown = DropDown;
//# sourceMappingURL=DropDown.js.map