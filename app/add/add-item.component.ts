import {Component, OnInit, Input} from '@angular/core';
import { VARIABLE } from '../variable';
import { AddItemService } from './add-item.service';
import { Control, Validators, ControlGroup, FormBuilder, FORM_DIRECTIVES} from '@angular/common';
import { TextValidator } from './textValidator';
import * as _ from 'lodash';
@Component({
    selector: 'add-item',
    templateUrl: 'app/add/add-item.template.html',
    directives:[FORM_DIRECTIVES],
    providers: [AddItemService]
})
export class AddItemComponent implements OnInit {
    ngOnInit() {
    }
    name:string;
    task: Control;
    item:VARIABLE;
    form: ControlGroup;
    constructor(private _addService: AddItemService, private _builder: FormBuilder) {
        this.task = new Control("", Validators.compose([Validators.required, TextValidator.isString])
         );
 
         this.form = _builder.group({
             task: this.task
         });
    }
    onSave(name: string) {
        this._addService.setItem(this.name).then(
        item => this.item = item
        );
           window.history.back();
    
    } 
     onBack() {
        window.history.back();
    

 }
}