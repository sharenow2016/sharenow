System.register(['angular2/platform/browser', './application.component', './datamodel/screen.service', 'angular2/http', './scripts/componentconfig'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, application_component_1, screen_service_1, http_1, componentconfig_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (application_component_1_1) {
                application_component_1 = application_component_1_1;
            },
            function (screen_service_1_1) {
                screen_service_1 = screen_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (componentconfig_1_1) {
                componentconfig_1 = componentconfig_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(application_component_1.ApplicationComponent, [screen_service_1.ComponentDataService, http_1.HTTP_PROVIDERS, componentconfig_1.componentconfig]);
        }
    }
});
//# sourceMappingURL=main.js.map