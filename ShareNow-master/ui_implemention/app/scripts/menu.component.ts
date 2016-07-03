import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {NavService} from '../container/nav.service';
@Component({
  selector: 'snmenu',
  template:`<div >
                <input type='button' value='{{menu}}' *ngFor="#menu of menulist;" (click)='selectedNavItem(menu)'>
            </div>
            `
  })
export class MenuComponent { 
     menulist=['home','Pay','shareamount','report','creategroup','logout'];
    item = "pay";
    constructor(private navService:NavService) {}
    selectedNavItem(item: string) {
            console.log('selected nav item ' + item);
            this.navService.emitNavChangeEvent(item);
        }
}
  