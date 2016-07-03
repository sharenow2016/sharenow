import {Component} from 'angular2/core';
import {ShareAmountService} from '../services/shareamount.service';

@Component({
    selector: 'shareamount',
    providers: [ShareAmountService],
    template: `<div>
                    <label>{{json.text}}</label>
                    <input type="text" name="{{json.name}}" placeholder="{{json.placeholder}}" >
                    <select onchange="alert(this.value);mem=this.value">
                        <option value="{{member}}" *ngFor="#member of memberList.members" >{{member}}</option>
                    </select>
                    <button type="submit" value="Submit" (click)="fireevent()">{{buttonText}}</button>
               </div>`
})
export class ShareAmountScreen {
    buttonText:string = "Share maadi"
    mem:string;
     json : any = {
        "text":"Enter Amount",
        "placeholder":"Amount",
        "name":"amount"
        };
    constructor(public shareAmountService: ShareAmountService){}
    ngOnInit() { this.getMembers() }
    memberList: any;
    getMembers() {
        this.memberList = this.shareAmountService.getMembers().subscribe(data => {
            this.memberList = data;
            console.log(this.memberList);
        })
    }
    fireevent(){        
        console.log("share amoubt button");
        console.log(this.mem);
    }
 }