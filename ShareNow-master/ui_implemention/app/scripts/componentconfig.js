System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var ComponentType, componentValue, componentconfig;
    return {
        setters:[],
        execute: function() {
            exports_1("ComponentType", ComponentType = {
                textBox: 'textbox',
                button: 'button',
                searchBox: 'searchbox'
            });
            componentValue = (function () {
                function componentValue() {
                }
                return componentValue;
            }());
            exports_1("componentValue", componentValue);
            componentconfig = (function (_super) {
                __extends(componentconfig, _super);
                function componentconfig() {
                    _super.apply(this, arguments);
                }
                return componentconfig;
            }(componentValue));
            exports_1("componentconfig", componentconfig);
        }
    }
});
//# sourceMappingURL=componentconfig.js.map