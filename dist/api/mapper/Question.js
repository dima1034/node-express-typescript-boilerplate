"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Question {
    set label(label) {
        this._label = label;
    }
    get label() {
        return this._label;
    }
    set answerType(answerType) {
        this._answerType = answerType;
    }
    get answerType() {
        return this._answerType;
    }
    set settings(settings) {
        this._settings = settings;
    }
    get settings() {
        return this._settings;
    }
}
exports.Question = Question;
//# sourceMappingURL=Question.js.map