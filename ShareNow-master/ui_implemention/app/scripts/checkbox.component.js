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
    var CheckboxComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CheckboxComponent = (function () {
                function CheckboxComponent() {
                    this.list = new Array();
                }
                CheckboxComponent.prototype.checkedvalues = function (value1) {
                    alert(value1.checked);
                    if (value1.checked) {
                        this.list.push(value1.value);
                    }
                    else {
                        var index = this.list.indexOf(value1.value);
                        if (index > -1) {
                            this.list.splice(index, 1);
                        }
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CheckboxComponent.prototype, "checkboxjson", void 0);
                CheckboxComponent = __decorate([
                    core_1.Component({
                        selector: 'sncheckbox',
                        template: "<div *ngFor=\"#checkbox of checkboxjson;#i=index\">\n                <input type=\"checkbox\" name=\"{{checkbox.group}}\" value=\"{{checkbox.name}}\" (click)=\"checkedvalues(checkboxobj)\" #checkboxobj>\n                <label>{{checkbox.name}}</label>\n            </div>\n            "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CheckboxComponent);
                return CheckboxComponent;
            }());
            exports_1("CheckboxComponent", CheckboxComponent);
        }
    }
});
//# sourceMappingURL=checkbox.component.js.map