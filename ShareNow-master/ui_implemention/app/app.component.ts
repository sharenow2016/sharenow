import {Component} from 'angular2/core';
import {ButtonComponent} from './scripts/button.component';
import {TextBoxComponent} from './scripts/textbox.component';
import {RadioButtonComponent} from './scripts/radiobutton.component';
import {CheckboxComponent} from './scripts/checkbox.component';
import {MenuComponent} from './scripts/menu.component';
import {CreateGroupService,Vehicle} from './services/creategroup.service';
import {PayService} from './services/pay.service';
import { Observable } from 'rxjs/Rx';
@Component({
    selector: 'myapp',
    providers : [CreateGroupService,PayService],
    template: `<div>
                <img src="images/logo.png">
                <label id='appname'>Share Now</label>
                <sntextbox [json]='jsondata'></sntextbox>
                <snbutton  (myevent)=getda()></snbutton>
                <snradiobutton [radiobuttons]='radiobuttons'></snradiobutton>
                <sncheckbox [checkboxjson]='radiobuttons'></sncheckbox>
                <label>{{tst.groupname}}</label>
                
               </div>`,
    directives:[ButtonComponent,TextBoxComponent,RadioButtonComponent,CheckboxComponent,MenuComponent],
    
})
export class AppComponent {
        cg: Observable<Vehicle[]>;
        constructor(public payService:PayService,public cretservice:CreateGroupService){
    }
    ngOnInit() { this.getda()}
    tst:any ;
    getda()
    {
        this.tst = this.payService.getgroupname().subscribe(d=>{
        this.tst=d;
        })
    }
       
        getcg(){
                alert("calling");
                this.cg = this.cretservice.getcreategroup();
                console.log("creategrp");
                console.log(this.cg);
                // console.log(this.cg[0]);
                console.log("end");
        }
    jsondata : any = {
        "text":"test",
        "placeholder":"UserName",
        "name":"name"
        };
    menulist=['Home','Pay','create group','logout'];
        radiobuttons:any = 
        [
            {"name" : "apple",
            "group" : "fruits",
            "id" : "apple"},
            {"name" : "orange",
            "group" : "fruits",
            "id" : "orange"},
            {"name" : "other",
            "group" : "fruits",
            "id" : "otherfruit"}
        ] 
    // constructor(public createg : CreateGroupService){
        
    // }
        handleevent(){
            alert("hi");
            
        }
        
    
        
 }