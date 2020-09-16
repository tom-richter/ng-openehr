(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-openehr', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['ng-openehr'] = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var NgOpenehrService = /** @class */ (function () {
        function NgOpenehrService() {
        }
        return NgOpenehrService;
    }());
    NgOpenehrService.ɵfac = function NgOpenehrService_Factory(t) { return new (t || NgOpenehrService)(); };
    NgOpenehrService.ɵprov = i0.ɵɵdefineInjectable({ token: NgOpenehrService, factory: NgOpenehrService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgOpenehrService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var NgOpenehrComponent = /** @class */ (function () {
        function NgOpenehrComponent() {
        }
        NgOpenehrComponent.prototype.ngOnInit = function () {
        };
        return NgOpenehrComponent;
    }());
    NgOpenehrComponent.ɵfac = function NgOpenehrComponent_Factory(t) { return new (t || NgOpenehrComponent)(); };
    NgOpenehrComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgOpenehrComponent, selectors: [["lib-ng-openehr"]], decls: 2, vars: 0, template: function NgOpenehrComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " ng-openehr works! ");
                i0.ɵɵelementEnd();
            }
        }, encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgOpenehrComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-ng-openehr',
                        template: "\n    <p>\n      ng-openehr works!\n    </p>\n  ",
                        styles: []
                    }]
            }], function () { return []; }, null);
    })();

    var OpenehrTreeComponent = /** @class */ (function () {
        function OpenehrTreeComponent() {
        }
        OpenehrTreeComponent.prototype.ngOnInit = function () {
        };
        return OpenehrTreeComponent;
    }());
    OpenehrTreeComponent.ɵfac = function OpenehrTreeComponent_Factory(t) { return new (t || OpenehrTreeComponent)(); };
    OpenehrTreeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OpenehrTreeComponent, selectors: [["lib-openehr-tree"]], inputs: { canonicalJson: "canonicalJson" }, decls: 2, vars: 1, template: function OpenehrTreeComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h1");
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1("This is the tree ", ctx.canonicalJson, "");
            }
        }, styles: [""] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OpenehrTreeComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-openehr-tree',
                        templateUrl: './openehr-tree.component.html',
                        styleUrls: ['./openehr-tree.component.css']
                    }]
            }], function () { return []; }, { canonicalJson: [{
                    type: i0.Input
                }] });
    })();

    var NgOpenehrModule = /** @class */ (function () {
        function NgOpenehrModule() {
        }
        return NgOpenehrModule;
    }());
    NgOpenehrModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgOpenehrModule });
    NgOpenehrModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgOpenehrModule_Factory(t) { return new (t || NgOpenehrModule)(); }, imports: [[]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgOpenehrModule, { declarations: [NgOpenehrComponent, OpenehrTreeComponent], exports: [NgOpenehrComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgOpenehrModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [NgOpenehrComponent, OpenehrTreeComponent],
                        imports: [],
                        exports: [NgOpenehrComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ng-openehr
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgOpenehrComponent = NgOpenehrComponent;
    exports.NgOpenehrModule = NgOpenehrModule;
    exports.NgOpenehrService = NgOpenehrService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-openehr.umd.js.map
