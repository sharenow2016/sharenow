System.register(['angular2/core', '../services/pay.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pay_service_1;
    var PayScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pay_service_1_1) {
                pay_service_1 = pay_service_1_1;
            }],
        execute: function() {
            PayScreen = (function () {
                function PayScreen(payService) {
                    this.payService = payService;
                    this.buttonText = "paay maadi";
                    this.json = {
                        "text": "Amount",
                        "placeholder": "Amount",
                        "name": "amount"
                    };
                }
                PayScreen.prototype.ngOnInit = function () { this.getGroupName(); };
                PayScreen.prototype.getGroupName = function () {
                    var _this = this;
                    this.groupName = this.payService.getgroupname().subscribe(function (data) {
                        _this.groupName = data;
                    });
                };
                PayScreen.prototype.fireevent = function (textbox_amount) {
                    console.log(textbox_amount.value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], PayScreen.prototype, "componentJson", void 0);
                PayScreen = __decorate([
                    core_1.Component({
                        selector: 'pay',
                        providers: [pay_service_1.PayService],
                        template: "<div>\n                    <label>{{json.text}}</label>\n                    <input type=\"text\" name=\"{{json.name}}\" placeholder=\"{{json.placeholder}}\" #textbox_amount>\n                    <select>\n                        <option value=\"{{group.groupname}}\" *ngFor=\"#group of groupName.grp\" >{{group.groupname}}</option>\n                    </select>\n                    <button type=\"submit\" value=\"Submit\" (click)=\"fireevent(textbox_amount)\">{{buttonText}}</button>\n               </div>"
                    }), 
                    __metadata('design:paramtypes', [pay_service_1.PayService])
                ], PayScreen);
                return PayScreen;
            }());
            exports_1("PayScreen", PayScreen);
        }
    }
});
//# sourceMappingURL=pay.screen.js.map