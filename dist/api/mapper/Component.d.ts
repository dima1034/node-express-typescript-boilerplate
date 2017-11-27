import { IParser } from './interfaces/IParser';
import { Settings } from './helpers/Settings';
import { Question } from './Question';
import { ComponentTypes } from './constants/ComponentTypes';
export declare class Component implements IParser {
    private _settings;
    private _placeholder;
    private _label;
    private _id;
    private _type;
    private _page;
    questions: Array<Question>;
    type: ComponentTypes;
    page: Number;
    id: Number;
    label: string;
    placeholder: string;
    settings: Settings;
    parse(json: any): any;
}
