import {Component,Input,Output,EventEmitter} from 'angular2/core';
@Component({
  selector: 'sncheckbox',
  template:`<div *ngFor="#checkbox of checkboxjson;#i=index">
                <input type="checkbox" name="{{checkbox.group}}" value="{{checkbox.name}}" (click)="checkedvalues(checkboxobj)" #checkboxobj>
                <label>{{checkbox.name}}</label>
            </div>
            `
  })
export class CheckboxComponent { 
    @Input() checkboxjson:any;
    list:Array<string>= new Array<string>();
    checkedvalues(value1){
        alert(value1.checked);
        if(value1.checked){
            this.list.push(value1.value);
        } 
        else{
            let index=this.list.indexOf(value1.value);
            if(index>-1){
             this.list.splice(index,1);
            }
        }
    }
    
}
