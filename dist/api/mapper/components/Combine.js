"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const ComponentTypes_1 = require("../constants/ComponentTypes");
//import { Question } from '../Question';
class Combine extends Component_1.Component {
    constructor() {
        super();
        this.type = ComponentTypes_1.ComponentTypes.Combine;
    }
    parse(json) {
        // for (let option of json.options) {
        // 	let question = new Question();
        // 	// probably change later
        // 	// input type & dropdown
        // 	question.answerType = option.label;
        // 	question.label = striptags(option.label, [], '');
        // 	this.questions.push(question);
        // };
        console.log(json);
    }
}
exports.Combine = Combine;
//# sourceMappingURL=Combine.js.map