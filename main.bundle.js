webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.app-content {\n  position:relative;\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.logo {\n  height: 42px;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <a mat-button routerLink=\"\"><img class=\"logo\" src=\"assets/empire_logo.png\"></a>\n\n    <a mat-button routerLink=\"/tractor\">Tractor Beam Control</a>\n\n    <a mat-button routerLink=\"/prisoners\">Prisoner Manifest</a>\n\n    <a mat-button routerLink=\"/firing\">Firing Form</a>\n\n    <span class=\"fill-remaining-space\"></span>\n    <span *ngIf=\"auth.isAuthenticated()\">\n      {{auth.getCurrentUser()}}\n      <button mat-button (click)=\"auth.logout()\">Logout</button>\n    </span>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"app-content mat-app-background\" fullscreen>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppComponent = class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MaterialImportModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tractor_control_tractor_control_component__ = __webpack_require__("./src/app/tractor-control/tractor-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prisoner_manifest_prisoner_manifest_component__ = __webpack_require__("./src/app/prisoner-manifest/prisoner-manifest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__prisoner_manifest_prisoner_card_component__ = __webpack_require__("./src/app/prisoner-manifest/prisoner-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__firing_form_firing_form_module__ = __webpack_require__("./src/app/firing-form/firing-form.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














let MaterialImportModule = class MaterialImportModule {
};
MaterialImportModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MatDividerModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* MatToolbarModule */],
        ],
    })
], MaterialImportModule);

let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__prisoner_manifest_prisoner_card_component__["a" /* PrisonerCardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__prisoner_manifest_prisoner_manifest_component__["a" /* PrisonerManifestComponent */],
            __WEBPACK_IMPORTED_MODULE_4__tractor_control_tractor_control_component__["a" /* TractorControlComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* AppRoutes */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_13__firing_form_firing_form_module__["a" /* FiringFormModule */],
            MaterialImportModule,
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["h" /* ReactiveFormsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__auth_guard_service__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_8__auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tractor_control_tractor_control_component__ = __webpack_require__("./src/app/tractor-control/tractor-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__prisoner_manifest_prisoner_manifest_component__ = __webpack_require__("./src/app/prisoner-manifest/prisoner-manifest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__firing_form_firing_form_component__ = __webpack_require__("./src/app/firing-form/firing-form.component.ts");






const appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'tractor',
        component: __WEBPACK_IMPORTED_MODULE_3__tractor_control_tractor_control_component__["a" /* TractorControlComponent */]
    },
    {
        path: 'prisoners',
        component: __WEBPACK_IMPORTED_MODULE_4__prisoner_manifest_prisoner_manifest_component__["a" /* PrisonerManifestComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__auth_guard_service__["a" /* AuthGuard */]]
    },
    {
        path: 'firing',
        component: __WEBPACK_IMPORTED_MODULE_5__firing_form_firing_form_component__["a" /* FiringFormComponent */],
    }
];
const AppRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true });
/* harmony export (immutable) */ __webpack_exports__["a"] = AppRoutes;



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AuthGuard = class AuthGuard {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(route, state) {
        if (!this.auth.isAuthenticated()) {
            window.location.replace("/assets/login.html");
            return false;
        }
        return true;
    }
};
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
], AuthGuard);



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm2015/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


const TOKEN_EXPIRATION = 300000; // 5 minutes
let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
    }
    isAuthenticated() {
        if (!this.readToken()) {
            return false;
        }
        const timestamp = this.readToken().timestamp;
        return timestamp && (Date.now() - timestamp) < TOKEN_EXPIRATION;
    }
    getCurrentUser() {
        if (this.isAuthenticated()) {
            return this.readToken().user;
        }
        return null;
    }
    logout() {
        localStorage.removeItem('auth');
        this.router.navigateByUrl('/');
    }
    readToken() {
        return JSON.parse(localStorage.getItem('auth'));
    }
};
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
], AuthService);



/***/ }),

/***/ "./src/app/firing-form/fire-button.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/firing-form/fire-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n<button mat-button [disabled]=\"!enabled\" class=\"ready\" type=\"button\" (click)=\"ready()\">Ready</button>\n{{countdown | number:\"0.3-3\"}}\n</div>\n<div>\n<button mat-button class=\"fire\" type=\"button\" [disabled]=\"!isReady\" (click)=\"fire()\">Fire</button>\nConfirm (must be pressed after 10s, within 15s)\n</div>\n{{status}}\n"

/***/ }),

/***/ "./src/app/firing-form/fire-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FireButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let FireButtonComponent = class FireButtonComponent {
    constructor() {
        this.countdown = 0;
        this.isReady = false;
        this.startTime = 0;
        this.status = '';
        this.enabled = false;
    }
    ngOnInit() {
    }
    ready() {
        this.startTime = Date.now();
        let updateTimer = () => {
            this.countdown = 10 - (Date.now() - this.startTime) / 1000;
            if (this.countdown < 5) {
                this.isReady = true;
            }
            if (this.countdown > 0) {
                requestAnimationFrame(updateTimer);
            }
            else {
                this.isReady = false;
                this.countdown = 0;
            }
        };
        requestAnimationFrame(updateTimer);
    }
    fire() {
        this.status = "BOOM";
    }
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FireButtonComponent.prototype, "enabled", void 0);
FireButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-fire-button',
        template: __webpack_require__("./src/app/firing-form/fire-button.component.html"),
        styles: [__webpack_require__("./src/app/firing-form/fire-button.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FireButtonComponent);



/***/ }),

/***/ "./src/app/firing-form/firing-form.component.css":
/***/ (function(module, exports) {

module.exports = ".officers {\n    border: solid gray 1px;\n    width: 400px;\n    padding: 1em;\n}\n\n.officers h4{\n    margin: 0;\n}"

/***/ }),

/***/ "./src/app/firing-form/firing-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Firing Authorization Form</h2>\n<div>Failure to properly fill out the Death Star Firing Authorization Form will be punished under\n  Article 22-C of the Imperial Code of Military Conduct</div>\n\n<form [formGroup]=\"orderForm\" (ngSubmit)=\"onSubmit()\">\n\n<mat-form-field floatLabel=true>\n  <mat-label class=\"center-block\">System:</mat-label>\n  <input matInput class=\"form-control\" formControlName=\"system\">\n</mat-form-field>\n\n<mat-form-field floatLabel=true>\n  <mat-label class=\"center-block\">Orbit:</mat-label>\n  <input matInput class=\"form-control\" formControlName=\"orbit\">\n</mat-form-field>\n\n<div class=\"officers\">\n<h4>Authorizing Officers</h4>\n<mat-divider></mat-divider>\n<div formArrayName=\"authorizingOfficers\">\n  <div *ngFor=\"let officer of officers.controls; let i=index\" [formGroupName]=\"i\" >\n    <!-- The repeated address template -->\n    <div style=\"margin-left: 1em;\">\n      <mat-form-field floatLabel=true>\n        <mat-label class=\"center-block\">Name</mat-label>\n        <input matInput class=\"form-control\" formControlName=\"name\">\n      </mat-form-field>\n      <mat-form-field floatLabel=true>\n        <mat-label class=\"center-block\">Command Code</mat-label>\n        <input matInput class=\"form-control\" formControlName=\"commandCode\">\n      </mat-form-field>\n      <button (click)=\"removeOfficer(i)\" type=\"button\">Delete</button>\n    </div>\n  </div>\n  <button mat-button (click)=\"addOfficer()\" type=\"button\">Add an officer</button>\n</div>\n</div>\n\n<app-fire-button [enabled]=\"orderForm.valid\"></app-fire-button>\n</form>\n"

/***/ }),

/***/ "./src/app/firing-form/firing-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiringFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


class Officer {
    constructor() {
        this.name = '';
        this.commandCode = '';
    }
}
/* unused harmony export Officer */

class FiringOrder {
}
/* unused harmony export FiringOrder */

/* TODO: Validators
all fields required
at least one authorizing officer with a gold command code
*/
let FiringFormComponent = class FiringFormComponent {
    constructor(fb) {
        this.fb = fb;
        this.startTime = 0;
    }
    createForm() {
        this.orderForm = this.fb.group({
            system: ['Alderaan', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            orbit: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required],
            authorizingOfficers: this.fb.array([])
        }, {
            validator: officerValidator
        });
    }
    ngOnInit() {
        this.createForm();
    }
    ngOnChanges() {
        this.rebuildForm();
    }
    rebuildForm() {
        this.orderForm.reset({
            name: this.order.system,
            orbit: this.order.orbit,
            authorizingOfficers: this.setOfficers(this.order.authorizingOfficers)
        });
        this.setOfficers(this.order.authorizingOfficers);
    }
    get officers() {
        return this.orderForm.get('authorizingOfficers');
    }
    ;
    setOfficers(officers) {
        const officersFGs = officers.map(officer => this.fb.group(officer));
        this.orderForm.setControl('authorizingOfficers', this.fb.array(officersFGs));
    }
    addOfficer() {
        this.officers.push(this.fb.group(new Officer()));
        console.log(this.officers);
    }
    removeOfficer(index) {
        this.officers.removeAt(index);
    }
    onSubmit() {
        // Show video of death star firing
        console.log('Submitting!');
    }
};
FiringFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-firing-form',
        template: __webpack_require__("./src/app/firing-form/firing-form.component.html"),
        styles: [__webpack_require__("./src/app/firing-form/firing-form.component.css")]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
], FiringFormComponent);

function officerValidator(group) {
    const value = group.value;
    const valid = value.authorizingOfficers.some((officer) => {
        return officer.commandCode.includes('Gold');
    });
    if (!valid) {
        return { 'MissingAuth': true };
    }
}


/***/ }),

/***/ "./src/app/firing-form/firing-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiringFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm2015/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__firing_form_component__ = __webpack_require__("./src/app/firing-form/firing-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fire_button_component__ = __webpack_require__("./src/app/firing-form/fire-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm2015/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm2015/material.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let FiringFormModule = class FiringFormModule {
};
FiringFormModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__fire_button_component__["a" /* FireButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_3__firing_form_component__["a" /* FiringFormComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDividerModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* ReactiveFormsModule */],
        ]
    })
], FiringFormModule);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: `
  Welcome to the Death Star!
  `
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/prisoner-manifest/prisoner-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrisonerCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let PrisonerCardComponent = class PrisonerCardComponent {
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], PrisonerCardComponent.prototype, "prisoner", void 0);
PrisonerCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'prisoner-card',
        template: `
  <mat-card class="card">
    {{prisoner.name}}
  </mat-card>
  `,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
        styles: [
            ".card { width:200px }",
        ]
    })
], PrisonerCardComponent);



/***/ }),

/***/ "./src/app/prisoner-manifest/prisoner-manifest.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prisoner-manifest/prisoner-manifest.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile *ngFor=\"let prisoner of prisoners\">\n    <prisoner-card [prisoner]=\"prisoner\"></prisoner-card>\n  </mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/prisoner-manifest/prisoner-manifest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrisonerManifestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

const PRISONERS = [
    { name: "Zarel Corrino" },
    { name: "Drake McConnell" },
    { name: "Jar-Tan  Hamasaki" },
    { name: "Archlonus Fury" },
    { name: "Graeme Narweld" },
    { name: "Iris Aboleth" },
    { name: "Carth Burkan" },
    { name: "Ubinaarisan Helkosh" },
    { name: "Yvan Renarus" },
    { name: "Anolo Benten" },
    { name: "Warryk Triblen" },
    { name: "Dexen Klakk" },
    { name: "Juntah Bele" },
    { name: "Zolar Aasa" },
    { name: "Viera Danigo" },
    { name: "Mai Tobian" },
    { name: "Arani Harkor" },
    { name: "Zentoo Damar" },
    { name: "Dahn Triblen" },
    { name: "Jarvis Cata" },
    { name: "Xiarr Tendoora" },
    { name: "Dietrich Marshall" },
    { name: "Padalynn Arrel" },
    { name: "Calla Annix" }
];
let PrisonerManifestComponent = class PrisonerManifestComponent {
    constructor() {
        this.prisoners = PRISONERS;
    }
    ngOnInit() {
    }
};
PrisonerManifestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-prisoner-manifest',
        template: __webpack_require__("./src/app/prisoner-manifest/prisoner-manifest.component.html"),
        styles: [__webpack_require__("./src/app/prisoner-manifest/prisoner-manifest.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PrisonerManifestComponent);



/***/ }),

/***/ "./src/app/tractor-control/tractor-control.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tractor-control/tractor-control.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <p class=\"time\">{{today | date: 'full'}}</p>\n  <p>\n    <button mat-button color=\"primary\" (click)=\"resetFrameState()\">reset frames</button>\n  </p>\n  <p>\n    <img class=\"lever\" [src]=\"getFrame()\" (click)=\"incrementFrameState()\" width=500/>\n  </p>\n  <p>\n    <span class=\"frame-state\">frame: {{frameState}}</span>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/tractor-control/tractor-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TractorControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let TractorControlComponent = class TractorControlComponent {
    constructor() {
        this.frameState = 1;
        this.today = Date.now();
    }
    ngOnInit() {
    }
    incrementFrameState() {
        if (this.frameState == 4)
            return;
        this.frameState++;
    }
    resetFrameState() {
        this.frameState = 1;
    }
    getFrame() {
        return `assets/frame${this.frameState}.png`;
    }
};
TractorControlComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-tractor-control',
        template: __webpack_require__("./src/app/tractor-control/tractor-control.component.html"),
        styles: [__webpack_require__("./src/app/tractor-control/tractor-control.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TractorControlComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm2015/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm2015/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map