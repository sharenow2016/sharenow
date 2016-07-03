import {Component, Input} from 'angular2/core';
import {componentValue} from '../scripts/componentconfig';
import {PayService, group} from '../services/pay.service';
import { Observable } from 'rxjs/Rx';
@Component({
    selector: 'pay',
    providers: [PayService],
    template: `<div>
                    <label>{{json.text}}</label>
                    <input type="text" name="{{json.name}}" placeholder="{{json.placeholder}}" #textbox_amount>
                    <select>
                        <option value="{{group.groupname}}" *ngFor="#group of groupName.grp" >{{group.groupname}}</option>
                    </select>
                    <button type="submit" value="Submit" (click)="fireevent(textbox_amount)">{{buttonText}}</button>
               </div>`
})
export class PayScreen {
    @Input() componentJson: componentValue[];

    buttonText: string = "paay maadi"
    json: any = {
        "text": "Amount",
        "placeholder": "Amount",
        "name": "amount"
    };

    constructor(public payService: PayService) {
    }

    ngOnInit() { this.getGroupName() }
    groupName: any;
    getGroupName() {
        this.groupName = this.payService.getgroupname().subscribe(data => {
            this.groupName = data;
        })
    }
    fireevent(textbox_amount) {
        console.log(textbox_amount.value);
    }

}