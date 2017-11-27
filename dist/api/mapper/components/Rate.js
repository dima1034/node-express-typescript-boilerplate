"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../Component");
const ComponentTypes_1 = require("../constants/ComponentTypes");
//import { Question } from '../Question';
class Rate extends Component_1.Component {
    constructor() {
        super();
        this.type = ComponentTypes_1.ComponentTypes.Rate;
    }
    parse(json) {
        // 	let question = new Question();
        // 	question.answerType = 'numeric';
        // 	question.label = striptags(json.label, [], '');
        // 	this.questions.push(question);
        // //make questions for rate
        console.log(json);
    }
}
exports.Rate = Rate;
//# sourceMappingURL=Rate.js.map