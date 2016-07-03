import {Component,Output,EventEmitter} from 'angular2/core';
@Component({
  selector: 'snbutton',
  template:`<div><button type="submit" value="Submit" (click)="fireevent()">{{buttonText}}</button></div>`
  })
export class ButtonComponent { 
    buttonText = "Login";
    @Output() myevent:EventEmitter<string> = new EventEmitter();
    
    fireevent(){
        this.myevent.next(['a','b']);
    }
}
