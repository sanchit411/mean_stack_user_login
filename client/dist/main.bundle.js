webpackJsonp(["main"],{

/***/ "../../../../../client/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../client/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item \" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item \" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/profile']\">Profile <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item \"[routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/login']\">Login <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/register']\">Sign Up <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"http://example.com\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n          <a class=\"dropdown-item\" href=\"#\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n\n<main role=\"main\">\n\n  <!-- Main jumbotron for a primary marketing message or call to action -->\n  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1 class=\"display-3\">beaconcrystal</h1>\n      <p>Source available at client/app/app.component.html</p>\n      <p><a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a></p>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n  <!-- /container -->\n\n</main>\n\n<footer class=\"text-muted\">\n  <div class=\"container\">\n    <p class=\"float-right\">\n      <a href=\"#\">Back to top</a>\n    </p>\n    <p>New to Bootstrap? <a href=\"https://getbootstrap.com/\" target=\"_blank\">Visit the homepage</a> or read our <a href=\"https://getbootstrap.com/docs/4.0/getting-started/introduction/\" target=\"_blank\">getting started guide</a>.</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../client/app/app.component.html"),
            styles: [__webpack_require__("../../../../../client/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__("../../../../../client/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_not_found_not_found_component__ = __webpack_require__("../../../../../client/app/pages/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_app_service__ = __webpack_require__("../../../../../client/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__ = __webpack_require__("../../../../../client/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile_component__ = __webpack_require__("../../../../../client/app/pages/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register_component__ = __webpack_require__("../../../../../client/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_reset_reset_component__ = __webpack_require__("../../../../../client/app/pages/reset/reset.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile_component__["a" /* ProfileComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_12__pages_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'reset',
        component: __WEBPACK_IMPORTED_MODULE_13__pages_reset_reset_component__["a" /* ResetComponent */]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__pages_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_reset_reset_component__["a" /* ResetComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // debugging purpose
                )
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_9__services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../client/app/pages/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Example row of columns -->\n<p>Section available at client/app/pages/home.component.html</p>\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h2>Heading</h2>\n    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n    <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n  </div>\n  <div class=\"col-md-4\">\n    <h2>Heading</h2>\n    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n    <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n  </div>\n  <div class=\"col-md-4\">\n    <h2>Heading</h2>\n    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n    <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n  </div>\n</div>\n\n<hr>\n"

/***/ }),

/***/ "../../../../../client/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../client/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../client/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../client/app/pages/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 50%; margin: auto; padding-bottom: 20px\" align=\"center\">\n  <h1>\n    Login\n  </h1>\n  <form class=\"form-signin\" (submit)=\"loginCheck()\">\n    <br>\n    <label for=\"username\" class=\"sr-only\">Email address</label>\n    <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" required autofocus>\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n    <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n  </form>\n  <p>Did you forget your password? <a [routerLink]=\"['/forgotPassword']\"><em>Click here</em></a></p>\n  <hr>\n  <p>Do you want to SignUp? <a [routerLink]=\"['/register']\"><em>SignUp</em></a></p>\n \n  <hr>\n  <div>\n      <button type=\"button\" class=\"btn\" style=\"background-color: rgb(59, 89, 152); color: white;\" (click)=\"loginFacebook()\">\n        Facebook\n      </button>\n      <button type=\"button\" class=\"btn\" style=\"background-color:rgb(29, 161, 242); color: white;\" (click)=\"loginTwitter()\">\n        Twitter\n      </button>\n      <button type=\"button\" class=\"btn\" style=\"background-color: rgb(219, 68, 55); color: white;\" (click)=\"loginGoogle()\">\n        Google\n      </button>\n      <button type=\"button\" class=\"btn\" (click)=\"loginGithub()\">\n        Github\n      </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../client/app/services/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginCheck = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.appService.loginUser(user).subscribe(function (data) {
            if (data) {
                _this.router.navigate(['profile']);
            }
            else {
                _this.router.navigate(['reset']);
            }
        });
    };
    LoginComponent.prototype.loginFacebook = function () {
        this.appService.loginFacebook();
    };
    LoginComponent.prototype.loginTwitter = function () {
        this.appService.loginTwitter();
    };
    LoginComponent.prototype.loginGoogle = function () {
        this.appService.loginGoogle();
    };
    LoginComponent.prototype.loginGithub = function () {
        this.appService.loginGithub();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../client/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../client/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../client/app/pages/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/pages/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 style=\"padding-bottom: 50px\">Page not found :/</h1>\n\n<button type=\"button\" class=\"btn btn-primary\" routerLink='/' style=\"margin-bottom: 50px\">Return to home</button>\n"

/***/ }),

/***/ "../../../../../client/app/pages/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../client/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../client/app/pages/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../client/app/pages/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".facebook {\n  background-color: rgb(59, 89, 152);\n  color: white;\n}\n\n.twitter {\n  background-color: rgb(29, 161, 242);\n  color: white;\n}\n\n.google {\n  background-color: rgb(219, 68, 55);\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/pages/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 60%; margin: 0 auto; padding-bottom: 20px\" align=\"center\" *ngIf=\"user\">\n  <h1>\n    Profile\n  </h1>\n  <div>\n    <a href=\"/api/user/auth/logout\">\n      Logout\n    </a>\n  </div>\n  <p class=\"subtitle\">Add Connections</p>\n  <div>\n    <button type=\"button\" class=\"btn\" *ngIf=\"!user.facebook\" style=\"background-color: rgb(59, 89, 152); color: white;\" (click)=\"loginFacebook()\">\n        Facebook\n    </button>\n    <button type=\"button\" class=\"btn\" *ngIf=\"!user.twitter\" style=\"background-color:rgb(29, 161, 242); color: white;\" (click)=\"loginTwitter()\">\n        Twitter\n    </button>\n    <button type=\"button\" class=\"btn\" *ngIf=\"!user.google\" style=\"background-color: rgb(219, 68, 55); color: white;\" (click)=\"loginGoogle()\">\n        Google\n    </button>\n    <button type=\"button\" class=\"btn\" *ngIf=\"!user.github\" (click)=\"loginGithub()\">\n        Github\n    </button>\n  </div>\n  <hr>\n</div>\n<div style=\"width: 60%; margin: 0 auto; padding-bottom: 20px\" *ngIf=\"user\">\n  <div *ngIf=\"user.facebook\">\n    <h3>Facebook Account</h3>\n    <p><strong>Id:</strong> {{ user._id }}</p>\n    <p><strong>Facebook Id:</strong> {{ user.facebook.id }}</p>\n    <p><strong>Token:</strong> {{ user.facebook.token }}</p>\n    <p><strong>Name:</strong> {{ user.facebook.name }}</p>\n    <p><strong>Email:</strong> {{ user.facebook.email }}</p>\n    <a href=\"/api/user/unlink/facebook\">Unlink</a>\n    <hr>\n  </div>\n  <div *ngIf=\"user.twitter\">\n    <h3>Twitter Account</h3>\n    <p><strong>Id:</strong> {{ user._id }}</p>\n    <p><strong>Twitter Id:</strong> {{ user.twitter.id }}</p>\n    <p><strong>Token:</strong> {{ user.twitter.token }}</p>\n    <p><strong>Username:</strong> {{ user.twitter.username }}</p>\n    <p><strong>Display Name:</strong> {{ user.twitter.displayName }}</p>\n    <a href=\"/api/user/unlink/twitter\">Unlink</a>\n    <hr>\n  </div>\n  <div *ngIf=\"user.google\">\n    <h3>Google Account</h3>\n    <p><strong>Id:</strong> {{ user._id }}</p>\n    <p><strong>Google Id:</strong> {{ user.google.id }}</p>\n    <p><strong>Token:</strong> {{ user.google.token }}</p>\n    <p><strong>Name:</strong> {{ user.google.name }}</p>\n    <p><strong>Email:</strong> {{ user.google.email }}</p>\n    <a href=\"/api/user/unlink/google\">Unlink</a>\n    <hr>\n  </div>\n  <div *ngIf=\"user.github\">\n    <h3>Github Account</h3>\n    <p><strong>Id:</strong> {{ user._id }}</p>\n    <p><strong>Github Id:</strong> {{ user.github.id }}</p>\n    <p><strong>Name:</strong> {{ user.github.username }}</p>\n    <p><strong>Display Name:</strong> {{ user.github.displayName }}</p>\n    <p><strong>Email:</strong> {{ user.github.email }}</p>\n    <p><strong>Public Repos:</strong> {{ user.github.publicRepos }}</p>\n    <a href=\"/api/user/unlink/github\">Unlink</a>\n    <hr>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/pages/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_service__ = __webpack_require__("../../../../../client/app/services/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.appService.getSession().subscribe(function (res) {
            console.log(res);
            _this.user = res;
        }, function (err) {
            console.log("Error occured");
            console.log(err);
            _this.appService.routeTo(['/login']);
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.loginFacebook = function () {
        this.appService.loginFacebook();
    };
    ProfileComponent.prototype.loginTwitter = function () {
        this.appService.loginTwitter();
    };
    ProfileComponent.prototype.loginGoogle = function () {
        this.appService.loginGoogle();
    };
    ProfileComponent.prototype.loginGithub = function () {
        this.appService.loginGithub();
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../client/app/pages/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../client/app/pages/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_app_service__["a" /* AppService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../client/app/pages/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {-webkit-box-sizing: border-box;box-sizing: border-box;\n    margin : 10px;}\n\n/* Full-width input fields */\n\ninput[type=text], input[type=password] {\n  width: 100%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  display: inline-block;\n  border: none;\n  background: #f1f1f1;\n}\n\ninput[type=text]:focus, input[type=password]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\nhr {\n  border: 1px solid #f1f1f1;\n  margin-bottom: 25px;\n}\n\n/* Set a style for all buttons */\n\nbutton {\n  background-color: #4CAF50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  opacity: 0.9;\n}\n\nbutton:hover {\n  opacity:1;\n}\n\n/* Extra styles for the cancel button */\n\n.cancelbtn {\n  padding: 14px 20px;\n  background-color: #f44336;\n}\n\n/* Float cancel and signup buttons and add an equal width */\n\n.cancelbtn, .signupbtn {\n  float: left;\n  width: 50%;\n}\n\n/* Add padding to container elements */\n\n.container {\n  padding: 16px;\n}\n\n/* Clear floats */\n\n.clearfix::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n\n@media screen and (max-width: 300px) {\n  .cancelbtn, .signupbtn {\n    width: 100%;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onRegisterSubmit()\" style=\"border:1px solid #ccc\">\n  <div class=\"container\">\n    <h1>Sign Up</h1>\n    <p>Please fill in this form to create an account.</p>\n    <hr>\n    <label for=\"name\"><b>Name</b></label>\n    <input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Enter Name\" name=\"name\" required>\n\n    <label for=\"email\"><b>Email</b></label>\n    <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"Enter Email\" name=\"email\" required>\n\n    <label for=\"username\"><b>Username</b></label>\n    <input type=\"text\" [(ngModel)]=\"username\" placeholder=\"Enter Username\" name=\"username\" required>\n\n    <label for=\"password\"><b>Password</b></label>\n    <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\n\n\n    <div class=\"clearfix\">\n      <button type=\"button\" class=\"cancelbtn\">Cancel</button>\n      <button type=\"submit\" class=\"signupbtn\">Sign Up</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../client/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, routes) {
        this.authService = authService;
        this.routes = routes;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        console.log(user);
        // Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data) {
                _this.routes.navigate(['\login']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../client/app/pages/register/register.component.html"),
            styles: [__webpack_require__("../../../../../client/app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../client/app/pages/reset/reset.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/pages/reset/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <form id=\"register-form\" role=\"form\" autocomplete=\"off\" class=\"form\" method=\"post\">\n    \n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope color-blue\"></i></span>\n                          <input id=\"email\" name=\"email\" placeholder=\"email address\" class=\"form-control\"  type=\"email\">\n                        </div>\n                      </div>\n                      <div class=\"form-group\">\n                        <input name=\"recover-submit\" class=\"btn btn-lg btn-primary btn-block\" value=\"Reset Password\" type=\"submit\">\n                      </div>\n                      \n                      <input type=\"hidden\" class=\"hide\" name=\"token\" id=\"token\" value=\"\"> \n                    </form>\n</div>"

/***/ }),

/***/ "../../../../../client/app/pages/reset/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResetComponent = /** @class */ (function () {
    function ResetComponent() {
    }
    ResetComponent.prototype.ngOnInit = function () {
    };
    ResetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reset',
            template: __webpack_require__("../../../../../client/app/pages/reset/reset.component.html"),
            styles: [__webpack_require__("../../../../../client/app/pages/reset/reset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "../../../../../client/app/services/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = /** @class */ (function () {
    function AppService(router, http) {
        this.router = router;
        this.http = http;
        this.message = "";
        this.apiUrl = 'http://localhost:8080/api/';
    }
    AppService.prototype.routeTo = function (route) {
        this.router.navigate(route);
    };
    AppService.prototype.getUser = function () { return this.user; };
    AppService.prototype.getSession = function () {
        return this.http.get(this.apiUrl + 'user/auth/session');
    };
    AppService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'applications/json');
        return this.http.post("/api/user/login", user, { headers: headers });
    };
    AppService.prototype.loginFacebook = function () {
        window.location.href = '/api/user/auth/facebook/login';
    };
    AppService.prototype.loginTwitter = function () {
        window.location.href = '/api/user/auth/twitter/login';
    };
    AppService.prototype.loginGoogle = function () {
        window.location.href = '/api/user/auth/google/login';
    };
    AppService.prototype.loginGithub = function () {
        window.location.href = '/api/user/auth/github/login';
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../client/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'applications/json');
        return this.http.post("/api/user/register", user, { headers: headers });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../client/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map