import { Component } from './Component';
import { IFormBuilder } from './interfaces/IFormBuilder';
import { IParser } from './interfaces/IParser';
export declare class FormBuilder implements IFormBuilder, IParser {
    private _pages;
    components: Component[];
    constructor(json: JSON);
    headerUtternace(): any;
    footerUtterance(): void;
    parse(json: any): Array<Component>;
}
