import {Component} from 'angular2/core';

@Component({
    selector: 'creategroup',
    template: `<div>
                    <label>{{json.text}}</label>
                    <input type="text" name="{{json.name}}" placeholder="{{json.placeholder}}" >
                    <label>{{searchjson.text}}</label>
                    <input type="search" name="{{searchjson.name}}" placeholder="{{searchjson.placeholder}}" >
                    <button type="submit" value="Submit" (click)="fireevent()">{{buttonText}}</button>
               </div>`
})
export class CreateGroupScreen {
    buttonText:string = "create";
     json : any = {
        "text":"creategroup",
        "placeholder":"Group Name",
        "name":"name"
        };
        searchjson : any = {
        "text":"searchGroup",
        "placeholder":"search Group",
        "name":"serchname"
        };
    constructor(){}
    fireevent(){
        console.log("creategroup button");
    }
 }