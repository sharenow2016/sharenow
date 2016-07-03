System.register(['angular2/core', '../datamodel/screen.service', './nav.service', '../scripts/menu.component', '../screens/pay.screen', '../screens/creategroup.screen', '../screens/shareamount.screen', '../screens/report.screen', '../services/pay.service', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, screen_service_1, nav_service_1, menu_component_1, pay_screen_1, creategroup_screen_1, shareamount_screen_1, report_screen_1, pay_service_1, http_1;
    var componentContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (screen_service_1_1) {
                screen_service_1 = screen_service_1_1;
            },
            function (nav_service_1_1) {
                nav_service_1 = nav_service_1_1;
            },
            function (menu_component_1_1) {
                menu_component_1 = menu_component_1_1;
            },
            function (pay_screen_1_1) {
                pay_screen_1 = pay_screen_1_1;
            },
            function (creategroup_screen_1_1) {
                creategroup_screen_1 = creategroup_screen_1_1;
            },
            function (shareamount_screen_1_1) {
                shareamount_screen_1 = shareamount_screen_1_1;
            },
            function (report_screen_1_1) {
                report_screen_1 = report_screen_1_1;
            },
            function (pay_service_1_1) {
                pay_service_1 = pay_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            componentContainer = (function () {
                function componentContainer(navService, dataService) {
                    this.navService = navService;
                    this.dataService = dataService;
                    this.menuItem = "creategroup";
                }
                componentContainer.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this.navService.getNavChangeEmitter()
                        .subscribe(function (item) { return _this.selectedNavItem(item); });
                };
                componentContainer.prototype.isScreen = function (screen) {
                    if (screen == this.menuItem) {
                        return true;
                    }
                    else
                        return false;
                };
                componentContainer.prototype.selectedNavItem = function (item) {
                    this.menuItem = item;
                    // this.dataService.ComponentData(this.menuItem).subscribe(menu => {
                    //             this.componentJson = menu;
                    //             this.componentValueArray = this.componentJson.values;
                    //         });
                };
                componentContainer.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                componentContainer = __decorate([
                    core_1.Component({
                        selector: 'container',
                        providers: [nav_service_1.NavService, pay_service_1.PayService, http_1.HTTP_PROVIDERS],
                        directives: [menu_component_1.MenuComponent, pay_screen_1.PayScreen, creategroup_screen_1.CreateGroupScreen, shareamount_screen_1.ShareAmountScreen, report_screen_1.ReportScreen],
                        template: "<div>\n                    <snmenu></snmenu>\n                    \n                    <pay *ngIf=\"isScreen('Pay')\" [componentJson]='componentValueArray'></pay>\n                    <creategroup *ngIf=\"isScreen('creategroup')\"></creategroup>\n                    <shareamount *ngIf=\"isScreen('shareamount')\"></shareamount>\n                    <report *ngIf=\"isScreen('report')\"></report>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [nav_service_1.NavService, screen_service_1.ComponentDataService])
                ], componentContainer);
                return componentContainer;
            }());
            exports_1("componentContainer", componentContainer);
        }
    }
});
//# sourceMappingURL=componentContainer.js.map