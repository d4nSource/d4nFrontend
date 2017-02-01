webpackJsonp([1,5],{

/***/ 1031:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(552);


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    AuthService.prototype.signup = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post('http://localhost:3000/user/new' + token, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.signin = function (user) {
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post('http://localhost:3000/user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json()); });
    };
    AuthService.prototype.signout = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Git/d4nFrontend/src/auth.service.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'd4n-dashboard',
            template: __webpack_require__(985),
            styles: [__webpack_require__(980)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Git/d4nFrontend/src/dashboard.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightsComponent = (function () {
    function LightsComponent() {
    }
    LightsComponent.prototype.ngOnInit = function () {
    };
    LightsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'd4n-lights',
            template: __webpack_require__(987),
            styles: [__webpack_require__(982)]
        }), 
        __metadata('design:paramtypes', [])
    ], LightsComponent);
    return LightsComponent;
}());
//# sourceMappingURL=C:/Git/d4nFrontend/src/lights.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'd4n-not-found',
            template: __webpack_require__(988),
            styles: [__webpack_require__(983)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Git/d4nFrontend/src/not-found.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SigninComponent = (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var user = {
            email: form.value.email,
            password: form.value.password
        };
        this.authService.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('token', data.token);
            _this.router.navigateByUrl('/');
        }, function (error) { return console.error(error); });
        //        form.reset();
    };
    SigninComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(989)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Git/d4nFrontend/src/signin.component.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignoutComponent = (function () {
    function SignoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignoutComponent.prototype.ngOnInit = function () { };
    SignoutComponent.prototype.onLogout = function () {
        this.authService.signout();
        this.router.navigateByUrl('/signin');
    };
    SignoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signout',
            template: __webpack_require__(990)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], SignoutComponent);
    return SignoutComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Git/d4nFrontend/src/signout.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(_formBuilder, authService) {
        this._formBuilder = _formBuilder;
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        //       this.signupForm = new FormGroup({
        //           'username': new FormControl('', Validators.required),
        //           'email': new FormControl('', Validators.required),
        //           'password': new FormControl('', Validators.required)
        //       });
        this.signupForm = this._formBuilder.group({
            'nickname': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, this.customValidator]],
            'firstname': [''],
            'lastname': [''],
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
                ]],
            'password': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    };
    SignupComponent.prototype.customValidator = function (control) {
        // set the condition for an invalid case!!
        if (control.value === 'Administrator') {
            return { invalid: true };
        }
        // otherwise its valid
        return null;
    };
    SignupComponent.prototype.asyncValidator = function (control) {
    };
    SignupComponent.prototype.onSubmit = function (user) {
        this.authService.signup(user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.signupForm.reset();
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(991)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Git/d4nFrontend/src/signup.component.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
        // default values inside the form
        // [ngModel] one-way databinding required inside the form
        // [(ngModel)] 2-way databinding
        this.user = {
            username: 'Hello',
            password: ''
        };
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.onSubmit = function (form) {
        console.log("form send: " + form.value.username);
    };
    ;
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(992),
            styles: [__webpack_require__(984)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
//# sourceMappingURL=C:/Git/d4nFrontend/src/user.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./configurator/configurator.module": [
		1033,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 551;


/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(709);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Git/d4nFrontend/src/main.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__landing_page___ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_user_service__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_auth_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user___ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__lights_lights_component__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["MaterialModule"].forRoot() // module for all Material2 components
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_7__landing_page___["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user___["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user___["b" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user___["c" /* SignoutComponent */],
                __WEBPACK_IMPORTED_MODULE_14__lights_lights_component__["a" /* LightsComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__shared_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__shared_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__landing_page___["a" /* LandingPageComponent */]] // start component
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
;
//# sourceMappingURL=C:/Git/d4nFrontend/src/app.module.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_signup_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_signin_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_signout_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lights_lights_component__ = __webpack_require__(461);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });








var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot([
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'configurator', loadChildren: './configurator/configurator.module#ConfiguratorModule' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'lights', component: __WEBPACK_IMPORTED_MODULE_7__lights_lights_component__["a" /* LightsComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_3__user_user_component__["a" /* UserComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_4__user_signup_component__["a" /* SignupComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_5__user_signin_component__["a" /* SigninComponent */] },
    { path: 'signout', component: __WEBPACK_IMPORTED_MODULE_6__user_signout_component__["a" /* SignoutComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */] }
]);
//# sourceMappingURL=C:/Git/d4nFrontend/src/app.routing.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landing_page_component__ = __webpack_require__(712);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__landing_page_component__["a"]; });

//# sourceMappingURL=C:/Git/d4nFrontend/src/index.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LandingPageComponent = (function () {
    function LandingPageComponent(_router, authService, mdIconRegistry, sanitizer) {
        this._router = _router;
        this.authService = authService;
        this.isDarkTheme = false;
        this.gradient = true;
        this.single = [
            {
                'name': 'used',
                'value': 200
            },
            {
                'name': 'free',
                'value': 500
            }
        ];
        this.view = [50, 50];
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        mdIconRegistry
            .addSvgIconSetInNamespace('core', sanitizer.bypassSecurityTrustResourceUrl('../../assets/core-icon-set.svg'));
    }
    LandingPageComponent.prototype.onClick = function () {
        this._router.navigate(['dashboard', 2]);
    };
    LandingPageComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    LandingPageComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdSidenav"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdSidenav"]) === 'function' && _a) || Object)
    ], LandingPageComponent.prototype, "sidenav", void 0);
    LandingPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-d4n-root',
            template: __webpack_require__(986),
            styles: [__webpack_require__(981)],
            viewProviders: [__WEBPACK_IMPORTED_MODULE_3__angular_material__["MdIconRegistry"]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdIconRegistry"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdIconRegistry"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === 'function' && _e) || Object])
    ], LandingPageComponent);
    return LandingPageComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/Git/d4nFrontend/src/landing-page.component.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(1004);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._baseUrl = 'localhost:4300/user/';
    }
    UserService.prototype.getAllUsers = function () {
        return this._http.get(this._baseUrl + "/all")
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=C:/Git/d4nFrontend/src/user.service.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signin_component__ = __webpack_require__(463);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__signin_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signout_component__ = __webpack_require__(464);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__signout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_component__ = __webpack_require__(465);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__signup_component__["a"]; });



//# sourceMappingURL=C:/Git/d4nFrontend/src/index.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Git/d4nFrontend/src/environment.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_map__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(1029);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);



//# sourceMappingURL=C:/Git/d4nFrontend/src/polyfills.js.map

/***/ }),

/***/ 980:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 981:
/***/ (function(module, exports) {

module.exports = "body {\n  margin: 0;\n  font-family: Roboto, sans-serif; }\n\n* {\n  -webkit-font-smooting: antialiased;\n  -moz-osx-font-smooting: antialiased; }\n\n.md-elevation-z4 {\n  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.md-toolbar-font {\n  font-size: 14px;\n  padding: 0 14px; }\n\nmd-toolbar .fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\nmd-sidenav-layout {\n  height: 100vh; }\n  md-sidenav-layout [md-raised-button] {\n    width: 100%; }\n  md-sidenav-layout md-icon {\n    height: 24px;\n    width: 24px; }\n\nmd-sidenav {\n  width: 320px; }\n\nmd-24 {\n  height: 20px; }\n"

/***/ }),

/***/ 982:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 983:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 984:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 985:
/***/ (function(module, exports) {

module.exports = "<md-card>\r\n  dashboard works!\r\n</md-card>"

/***/ }),

/***/ 986:
/***/ (function(module, exports) {

module.exports = "  <md-toolbar color=\"primary\" class=\"md-elevation-z4\" [class.dark-theme]=\"isDarkTheme\">\r\n    <span>\r\n      <button md-icon-button (click)=\"primsidenav.toggle()\"></button>\r\n      D4n Smarthome\r\n    </span>\r\n    <span class=\"fill-remaining-space\"></span>\r\n    <span *ngIf=\"isLoggedIn()\">\r\n      Username\r\n    </span>\r\n    <span>\r\n      <button [md-menu-trigger-for]=\"menu\"></button>\r\n      <md-menu x-position=\"before\" #menu=\"mdMenu\">\r\n          <button md-menu-item (click)=\"isDarkTheme = !isDarkTheme\"> Toggle Theme </button>\r\n          <button md-menu-item> Settings </button>\r\n          <button md-menu-item> Help </button>\r\n          <button md-menu-item [disabled]=\"!isLoggedIn()\" routerLink=\"signout\"> Sign Out </button>\r\n      </md-menu>\r\n    </span>\r\n    <router-outlet id=\"test\"></router-outlet>\r\n  </md-toolbar>\r\n\r\n  <md-sidenav-container>\r\n    <md-sidenav #primsidenav mode=\"over\">\r\n      <md-nav-list>\r\n        <md-list-item routerLink=\"lights\" (click)=\"primsidenav.close()\"><md-icon svgIcon=\"core:light-bulb\"></md-icon>Licht</md-list-item>\r\n        <md-list-item routerLink=\"dashboard\" (click)=\"primsidenav.close()\">Dashboard</md-list-item>\r\n        <md-list-item [routerLink]=\"['dashboard', 1]\" (click)=\"primsidenav.close()\">Dashboard with Option</md-list-item>\r\n        <md-list-item routerLink=\"configurator\" *ngIf=\"isLoggedIn()\" (click)=\"primsidenav.close()\">Configuration</md-list-item>\r\n        <md-list-item routerLink=\"user\" *ngIf=\"isLoggedIn()\" (click)=\"primsidenav.close()\">User Administration</md-list-item>\r\n        <md-list-item routerLink=\"signup\" *ngIf=\"isLoggedIn()\" (click)=\"primsidenav.close()\">Create new User</md-list-item>\r\n        <md-list-item routerLink=\"signin\" *ngIf=\"!isLoggedIn()\" (click)=\"primsidenav.close()\">Login</md-list-item>\r\n        <md-list-item routerLink=\"signout\" *ngIf=\"isLoggedIn()\" (click)=\"primsidenav.close()\">Logout</md-list-item>\r\n        <button md-raised-button (click)=\"primsidenav.close()\" color=\"primary\">CLOSE</button>\r\n      </md-nav-list>\r\n    </md-sidenav>\r\n    <md-sidenav #sidenav align=\"end\" mode=\"side\">\r\n      <md-tab-group>\r\n        <md-tab>\r\n          <template md-tab-label>Details</template>\r\n          <template md-tab-content>\r\n            <button md-raised-button (click)=\"sidenav.close()\" color=\"accent\">CLOSE</button>\r\n          </template>\r\n        </md-tab>\r\n        <md-tab>\r\n          <template md-tab-label>Feed</template>\r\n          <template md-tab-content></template>\r\n        </md-tab>\r\n      </md-tab-group>\r\n    </md-sidenav>\r\n    <ngx-charts-advanced-pie-chart\r\n      [view]=\"view\"\r\n      [scheme]=\"colorScheme\"\r\n      [results]=\"single\"\r\n      [gradient]=\"gradient\"\r\n      (select)=\"onSelect($event)\">\r\n    </ngx-charts-advanced-pie-chart>\r\n    <router-outlet></router-outlet>\r\n  </md-sidenav-container>"

/***/ }),

/***/ 987:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  lights works!\r\n</p>\r\n"

/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  This page wasn't found on the server, please use another link\r\n</p>"

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\r\n<form (ngSubmit)=\"onSubmit(signinForm)\" #signinForm=\"ngForm\">\r\n  <div>\r\n    <div class=\"form-group\">\r\n      <md-input placeholder=\"eMail\" type=\"text\" class=\"form-control\" id=\"email\" ngModel name=\"email\"></md-input>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <md-input placeholder=\"Password\" type=\"password\" class=\"form-control\" id=\"password\" ngModel name=\"password\" required #email=\"ngModel\"></md-input>\r\n  </div>\r\n  <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!signinForm.valid\">Submit</button>\r\n</form>"

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "<button (click)=\"onLogout()\">Logout</button>"

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports = "<h1> Datadriven Signup </h1>\r\n<md-card>\r\n    <md-card-content>\r\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit(signupForm.value)\">\r\n            <div>\r\n                <div class=\"form-group\">\r\n                    <md-input  placeholder=\"Login Name\" type=\"text\" \r\n                            class=\"form-control\" \r\n                            id=\"nickname\"\r\n                            formControlName=\"nickname\"></md-input>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <md-input  placeholder=\"First Name\" type=\"text\" \r\n                            class=\"form-control\" \r\n                            id=\"firstname\"\r\n                            formControlName=\"firstname\"></md-input>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <md-input  placeholder=\"Last Name\" type=\"text\" \r\n                            class=\"form-control\" \r\n                            id=\"lastname\"\r\n                            formControlName=\"lastname\"></md-input>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <md-input placeholder=\"eMail\" type=\"text\" \r\n                            class=\"form-control\" \r\n                            id=\"email\"\r\n                            formControlName=\"email\"></md-input>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <md-input placeholder=\"Password\" type=\"password\" \r\n                        class=\"form-control\" \r\n                        id=\"password\"\r\n                        formControlName=\"password\"></md-input>\r\n            </div>\r\n            <button md-raised-button color=\"primary\" type=\"submit\">Submit</button> \r\n        </form>\r\n    </md-card-content>\r\n</md-card>"

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports = "<h1>Template Driven Form</h1>\r\n<form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n  <div>\r\n    <div class=\"form-group\">\r\n      <md-input placeholder=\"Username\" type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"user.username\" name=\"username\" required></md-input>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <md-input placeholder=\"eMail\" type=\"text\" class=\"form-control\" id=\"email\" [(ngModel)]=\"user.email\" name=\"email\"></md-input>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <md-input placeholder=\"Password\" type=\"password\" class=\"form-control\" id=\"password\" ngModel name=\"password\" required #email=\"ngModel\"></md-input>\r\n  </div>\r\n  <button md-raised-button color=\"primary\" type=\"submit\" [disabled]=\"!f.valid\">Submit</button>\r\n</form>"

/***/ })

},[1031]);
//# sourceMappingURL=main.bundle.map