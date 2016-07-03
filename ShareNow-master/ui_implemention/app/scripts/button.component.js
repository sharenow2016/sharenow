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
    var ButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ButtonComponent = (function () {
                function ButtonComponent() {
                    this.buttonText = "Login";
                    this.myevent = new core_1.EventEmitter();
                }
                ButtonComponent.prototype.fireevent = function () {
                    this.myevent.next(['a', 'b']);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', core_1.EventEmitter)
                ], ButtonComponent.prototype, "myevent", void 0);
                ButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'snbutton',
                        template: "<div><button type=\"submit\" value=\"Submit\" (click)=\"fireevent()\">{{buttonText}}</button></div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ButtonComponent);
                return ButtonComponent;
            }());
            exports_1("ButtonComponent", ButtonComponent);
        }
    }
});
//# sourceMappingURL=button.component.js.map