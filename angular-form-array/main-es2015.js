(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"bg-light border p-3 rounded\">\n    <h5 class=\"font-weight-bold text-center\">Main Form</h5>\n    <hr />\n    <form [formGroup]=\"mainForm\">\n      <div class=\"card-columns\">\n        <ng-container formArrayName=\"modules\">\n          <ng-template ngFor let-module [ngForOf]=\"modules.controls\">\n            <ng-container [formGroup]=\"module\">\n              <div class=\"card\">\n                <div class=\"card-header font-weight-bold text-capitalize\">\n                  <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"isChecked\" [id]=\"module.get('name').value\">\n                    <label class=\"custom-control-label\" [for]=\"module.get('name').value\">{{module.get('name').value}}</label>\n                  </div>\n                </div>\n                <ng-container formArrayName=\"subModules\">\n                  <ul class=\"list-group list-group-flush\">\n                    <ng-template ngFor let-subModule [ngForOf]=\"module.controls.subModules.controls\">\n                      <ng-container [formGroup]=\"subModule\">\n                        <li class=\"list-group-item\">\n                          <span>{{subModule.get('name').value}}</span>\n                          <hr class=\"my-2\" />\n                          <div class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"read\" [id]=\"'customCheckRead' + module.get('name').value\">\n                            <label class=\"custom-control-label\" [for]=\"'customCheckRead' + module.get('name').value\">Read</label>\n                          </div>\n                          <div class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"write\" [id]=\"'customCheckWrite' + module.get('name').value\">\n                            <label class=\"custom-control-label\" [for]=\"'customCheckWrite' + module.get('name').value\">Write</label>\n                          </div>\n                          <div class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"delete\" [id]=\"'customCheckDelete' + module.get('name').value\">\n                            <label class=\"custom-control-label\" [for]=\"'customCheckDelete' + module.get('name').value\">Delete</label>\n                          </div>\n                          <div class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"create\" [id]=\"'customCheckCreate' + module.get('name').value\">\n                            <label class=\"custom-control-label\" [for]=\"'customCheckCreate' + module.get('name').value\">Create</label>\n                          </div>\n                          <div class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"import\" [id]=\"'customCheckImport' + module.get('name').value\">\n                            <label class=\"custom-control-label\" [for]=\"'customCheckImport' + module.get('name').value\">Import</label>\n                          </div>\n                          <div class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" formControlName=\"export\" [id]=\"'customCheckExport' + module.get('name').value\">\n                            <label class=\"custom-control-label\" [for]=\"'customCheckExport' + module.get('name').value\">Export</label>\n                          </div>\n                        </li>\n                      </ng-container>\n                    </ng-template>\n                  </ul>\n                </ng-container>\n              </div>\n            </ng-container>\n          </ng-template>\n        </ng-container>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppComponent = class AppComponent {
    constructor(_FormBuilder, _MainService) {
        this._FormBuilder = _FormBuilder;
        this._MainService = _MainService;
        this.mainForm = this._FormBuilder.group({
            modules: this._FormBuilder.array([])
        });
        this.alive = true;
    }
    ngOnInit() {
        this._MainService.getData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(() => this.alive)).subscribe({
            next: data => {
                if (data && data.modules) {
                    data.modules.forEach(module => {
                        this.modules.push(this.generateModule(module));
                    });
                }
            }
        });
    }
    ngOnDestroy() {
        this.alive = false;
    }
    get modules() {
        return this.mainForm.get('modules');
    }
    generateModule(module) {
        const generateSubModules = (subModules) => {
            const formArray = this._FormBuilder.array([]);
            subModules.forEach(val => {
                formArray.push(this._FormBuilder.group({
                    id: [val.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    name: [val.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    read: [val.read || false],
                    write: [val.write || false],
                    delete: [val.delete || false],
                    create: [val.create || false],
                    export: [val.export || false],
                    import: [val.import || false]
                }));
            });
            formArray.disable();
            return formArray;
        };
        const control = this._FormBuilder.group({
            id: [module.id, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: [module.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            isChecked: [false],
            subModules: generateSubModules(module.subModules)
        });
        this.toggleInnerStatus(control);
        return control;
    }
    toggleInnerStatus(control) {
        control.get('isChecked').valueChanges.subscribe({
            next: value => {
                value === true ? control.get('subModules').enable() : control.get('subModules').disable();
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let MainService = class MainService {
    constructor(_HttpClient) {
        this._HttpClient = _HttpClient;
    }
    getData() {
        return this._HttpClient.get('assets/data/data.json');
    }
};
MainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MainService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MainService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/angular-form-array/angular-form-array/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map