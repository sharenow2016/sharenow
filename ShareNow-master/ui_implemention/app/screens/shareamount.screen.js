System.register(['angular2/core', '../services/shareamount.service'], function(exports_1, context_1) {
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
    var core_1, shareamount_service_1;
    var ShareAmountScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shareamount_service_1_1) {
                shareamount_service_1 = shareamount_service_1_1;
            }],
        execute: function() {
            ShareAmountScreen = (function () {
                function ShareAmountScreen(shareAmountService) {
                    this.shareAmountService = shareAmountService;
                    this.buttonText = "Share maadi";
                    this.json = {
                        "text": "Enter Amount",
                        "placeholder": "Amount",
                        "name": "amount"
                    };
                }
                ShareAmountScreen.prototype.ngOnInit = function () { this.getMembers(); };
                ShareAmountScreen.prototype.getMembers = function () {
                    var _this = this;
                    this.memberList = this.shareAmountService.getMembers().subscribe(function (data) {
                        _this.memberList = data;
                        console.log(_this.memberList);
                    });
                };
                ShareAmountScreen.prototype.fireevent = function () {
                    console.log("share amoubt button");
                    console.log(this.mem);
                };
                ShareAmountScreen = __decorate([
                    core_1.Component({
                        selector: 'shareamount',
                        providers: [shareamount_service_1.ShareAmountService],
                        template: "<div>\n                    <label>{{json.text}}</label>\n                    <input type=\"text\" name=\"{{json.name}}\" placeholder=\"{{json.placeholder}}\" >\n                    <select onchange=\"alert(this.value);mem=this.value\">\n                        <option value=\"{{member}}\" *ngFor=\"#member of memberList.members\" >{{member}}</option>\n                    </select>\n                    <button type=\"submit\" value=\"Submit\" (click)=\"fireevent()\">{{buttonText}}</button>\n               </div>"
                    }), 
                    __metadata('design:paramtypes', [shareamount_service_1.ShareAmountService])
                ], ShareAmountScreen);
                return ShareAmountScreen;
            }());
            exports_1("ShareAmountScreen", ShareAmountScreen);
        }
    }
});
//# sourceMappingURL=shareamount.screen.js.map