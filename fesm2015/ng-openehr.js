import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵadvance, ɵɵtextInterpolate1, Input, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class NgOpenehrService {
    constructor() { }
}
NgOpenehrService.ɵfac = function NgOpenehrService_Factory(t) { return new (t || NgOpenehrService)(); };
NgOpenehrService.ɵprov = ɵɵdefineInjectable({ token: NgOpenehrService, factory: NgOpenehrService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgOpenehrService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class NgOpenehrComponent {
    constructor() { }
    ngOnInit() {
    }
}
NgOpenehrComponent.ɵfac = function NgOpenehrComponent_Factory(t) { return new (t || NgOpenehrComponent)(); };
NgOpenehrComponent.ɵcmp = ɵɵdefineComponent({ type: NgOpenehrComponent, selectors: [["lib-ng-openehr"]], decls: 2, vars: 0, template: function NgOpenehrComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " ng-openehr works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgOpenehrComponent, [{
        type: Component,
        args: [{
                selector: 'lib-ng-openehr',
                template: `
    <p>
      ng-openehr works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class OpenehrTreeComponent {
    constructor() { }
    ngOnInit() {
    }
}
OpenehrTreeComponent.ɵfac = function OpenehrTreeComponent_Factory(t) { return new (t || OpenehrTreeComponent)(); };
OpenehrTreeComponent.ɵcmp = ɵɵdefineComponent({ type: OpenehrTreeComponent, selectors: [["lib-openehr-tree"]], inputs: { canonicalJson: "canonicalJson" }, decls: 2, vars: 1, template: function OpenehrTreeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h1");
        ɵɵtext(1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1("This is the tree ", ctx.canonicalJson, "");
    } }, styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(OpenehrTreeComponent, [{
        type: Component,
        args: [{
                selector: 'lib-openehr-tree',
                templateUrl: './openehr-tree.component.html',
                styleUrls: ['./openehr-tree.component.css']
            }]
    }], function () { return []; }, { canonicalJson: [{
            type: Input
        }] }); })();

class NgOpenehrModule {
}
NgOpenehrModule.ɵmod = ɵɵdefineNgModule({ type: NgOpenehrModule });
NgOpenehrModule.ɵinj = ɵɵdefineInjector({ factory: function NgOpenehrModule_Factory(t) { return new (t || NgOpenehrModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgOpenehrModule, { declarations: [NgOpenehrComponent, OpenehrTreeComponent], exports: [NgOpenehrComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgOpenehrModule, [{
        type: NgModule,
        args: [{
                declarations: [NgOpenehrComponent, OpenehrTreeComponent],
                imports: [],
                exports: [NgOpenehrComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ng-openehr
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgOpenehrComponent, NgOpenehrModule, NgOpenehrService };
//# sourceMappingURL=ng-openehr.js.map
