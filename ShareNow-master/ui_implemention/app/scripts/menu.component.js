System.register(['angular2/core', '../container/nav.service'], function(exports_1, context_1) {
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
    var core_1, nav_service_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nav_service_1_1) {
                nav_service_1 = nav_service_1_1;
            }],
        execute: function() {
            MenuComponent = (function () {
                function MenuComponent(navService) {
                    this.navService = navService;
                    this.menulist = ['home', 'Pay', 'shareamount', 'report', 'creategroup', 'logout'];
                    this.item = "pay";
                }
                MenuComponent.prototype.selectedNavItem = function (item) {
                    console.log('selected nav item ' + item);
                    this.navService.emitNavChangeEvent(item);
                };
                MenuComponent = __decorate([
                    core_1.Component({
                        selector: 'snmenu',
                        template: "<div >\n                <input type='button' value='{{menu}}' *ngFor=\"#menu of menulist;\" (click)='selectedNavItem(menu)'>\n            </div>\n            "
                    }), 
                    __metadata('design:paramtypes', [nav_service_1.NavService])
                ], MenuComponent);
                return MenuComponent;
            }());
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map