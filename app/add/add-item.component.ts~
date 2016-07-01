import {Component, OnInit, Input} from '@angular/core';
import { VARIABLE } from '../variable';
import { AddItemService } from './add-item.service';
import * as _ from 'lodash';
@Component({
    selector: 'add-item',
    templateUrl: 'app/add/add-item.template.html',
    providers: [AddItemService]
})
export class AddItemComponent implements OnInit {
    ngOnInit() {
    }
    @Input() _task: string;
    item:Hero;
    constructor(private _addService: AddItemService) {
    }
    onSave(_task: string) {
        this._addService.setItem(this._task).then(
        _item => this._item = _item
        );
    } 
     onBack() {
        window.history.back();
    

}
