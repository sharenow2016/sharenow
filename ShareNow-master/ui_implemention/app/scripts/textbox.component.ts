import {Component,Input,Output,EventEmitter} from 'angular2/core';
@Component({
  selector: 'sntextbox',
  template:`<div>
                <label>{{json.text}}</label>
                <input type="text" name="{{json.name}}" placeholder="{{json.placeholder}}" >
            </div>`
  })
export class TextBoxComponent { 
    @Input() json:any;
    
 }
