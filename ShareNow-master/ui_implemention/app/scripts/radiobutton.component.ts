import {Component,Input,Output,EventEmitter} from 'angular2/core';
@Component({
  selector: 'snradiobutton',
  template:`<div *ngFor="#radiobutton of radiobuttons;#i=index">
                <input type="radio" name="{{radiobutton.group}}" (click)="fireevent(radiobutton.id)" checked>
                <label>{{radiobutton.name}}</label>
            </div>`
  })
export class RadioButtonComponent { 
    @Input() radiobuttons:any;
    @Output() myevent:EventEmitter<string> = new EventEmitter();
    
    constructor(){
        this.mth();
    }
    mth(){
         console.log(this.radiobuttons);    
    }
    
    fireevent(value){
        alert(value);
        this.myevent.next(value);
    }
}
