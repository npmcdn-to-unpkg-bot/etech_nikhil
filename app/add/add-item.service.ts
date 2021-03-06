import { Injectable } from '@angular/core';
import { VARIABLE } from '../variable';
import * as  _ from 'lodash';

@Injectable()
export class AddItemService {
    setItem(task: string) {
        let obj = {
            name: task,
            id: DATA.length + 1,
            active: false,
            complete:false
        };
        this.pushItem(obj);
        return Promise.resolve(obj);
    }
    pushItem(obj: VARIABLE) {
        DATA.push(obj);
    }
}
