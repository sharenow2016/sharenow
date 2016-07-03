System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CreateGroupScreen;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CreateGroupScreen = (function () {
                function CreateGroupScreen() {
                    this.buttonText = "create";
                    this.json = {
                        "text": "creategroup",
                        "placeholder": "Group Name",
                        "name": "name"
                    };
                    this.searchjson = {
                        "text": "searchGroup",
                        "placeholder": "search Group",
                        "name": "serchname"
                    };
                }
                CreateGroupScreen.prototype.fireevent = function () {
                    console.log("creategroup button");
                };
                CreateGroupScreen = __decorate([
                    core_1.Component({
                        selector: 'creategroup',
                        template: "<div>\n                    <label>{{json.text}}</label>\n                    <input type=\"text\" name=\"{{json.name}}\" placeholder=\"{{json.placeholder}}\" >\n                    <label>{{searchjson.text}}</label>\n                    <input type=\"search\" name=\"{{searchjson.name}}\" placeholder=\"{{searchjson.placeholder}}\" >\n                    <button type=\"submit\" value=\"Submit\" (click)=\"fireevent()\">{{buttonText}}</button>\n               </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CreateGroupScreen);
                return CreateGroupScreen;
            }());
            exports_1("CreateGroupScreen", CreateGroupScreen);
        }
    }
});
//# sourceMappingURL=creategroup.screen.js.map