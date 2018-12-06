(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/Home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <app-product-list></app-product-list>\r\n</section>"

/***/ }),

/***/ "./src/app/Home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/Home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding: 80px 100px 50px 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSG9tZS9DOlxcVXNlcnNcXHBlZHJvXFxEZXNrdG9wXFxzYWZlMlxcUHJvamV0by1FbmdTSVxcZW5qb2VpMi9zcmNcXGFwcFxcSG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUE4QixFQUNqQyIsImZpbGUiOiJzcmMvYXBwL0hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDgwcHggMTAwcHggNTBweCAxMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/Home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/Home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _product_register_product_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-register/product-register.component */ "./src/app/product-register/product-register.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home/home.component */ "./src/app/Home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    // {
    //   path: '',
    //   component: HeaderComponent,
    //   data: {
    //     breadcrumb: 'Home'
    //   },
    //   children: [
    //     {
    //       path: 'produtos/detalhes',
    //       component: ProductDetailsComponent,
    //       data: {
    //         breadcrumb: 'Produtos Detalhes'
    //       }
    //     }
    //   ]
    // },
    { path: 'home', component: _Home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'perfil', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'publicar', component: _product_register_product_register_component__WEBPACK_IMPORTED_MODULE_0__["ProductRegisterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <app-header (openLogin)=\"openLogin()\" [id]=\"id\" (logout)=\"logout()\"></app-header>\r\n  <!-- <app-product-list></app-product-list> -->\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-login *ngIf=\"showLogin\" (closeLogin)=\"closeLogin()\" (doLogin)=\"doLogin($event)\"></app-login>\r\n\r\n<!-- <router-outlet></router-outlet> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communication.service */ "./src/app/communication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(communication) {
        this.communication = communication;
        this.title = 'enjoei2';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.showLogin = false;
        var oldId = window.localStorage.getItem('enjoojeiUserID');
        if (oldId) {
            this.doLogin(oldId);
        }
    };
    AppComponent.prototype.openLogin = function () { this.showLogin = true; };
    AppComponent.prototype.closeLogin = function () { this.showLogin = false; };
    AppComponent.prototype.doLogin = function (id) {
        this.showLogin = false;
        this.id = id;
        window.localStorage.setItem('enjoojeiUserID', id);
        this.communication.login();
    };
    AppComponent.prototype.logout = function () {
        window.localStorage.removeItem('enjoojeiUserID');
        this.id = -1;
        this.communication.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_communication_service__WEBPACK_IMPORTED_MODULE_1__["CommunicationService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/header-nav/header-nav.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _Home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Home/home.component */ "./src/app/Home/home.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-menu/user-menu.component */ "./src/app/user-menu/user-menu.component.ts");
/* harmony import */ var _safe_url_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./safe-url.pipe */ "./src/app/safe-url.pipe.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _product_register_product_register_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product-register/product-register.component */ "./src/app/product-register/product-register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_7__["HeaderNavComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
                _Home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_18__["UserMenuComponent"],
                _safe_url_pipe__WEBPACK_IMPORTED_MODULE_19__["SafeUrlPipe"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"],
                _product_register_product_register_component__WEBPACK_IMPORTED_MODULE_21__["ProductRegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/communication.service.ts":
/*!******************************************!*\
  !*** ./src/app/communication.service.ts ***!
  \******************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommunicationService = /** @class */ (function () {
    function CommunicationService() {
        this.triggerLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.triggerLogout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.triggerAccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.triggerSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CommunicationService.prototype.trigger = function () {
        this.triggerLogin.emit(true);
    };
    CommunicationService.prototype.search = function (search) {
        this.triggerSearch.emit(search);
    };
    CommunicationService.prototype.login = function () {
        this.triggerAccess.emit(true);
    };
    CommunicationService.prototype.logout = function () {
        this.triggerAccess.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommunicationService.prototype, "triggerLogin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommunicationService.prototype, "triggerLogout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommunicationService.prototype, "triggerAccess", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], CommunicationService.prototype, "triggerSearch", void 0);
    CommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CommunicationService);
    return CommunicationService;
}());



/***/ }),

/***/ "./src/app/header-nav/header-nav.component.html":
/*!******************************************************!*\
  !*** ./src/app/header-nav/header-nav.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav\">\r\n  <li *ngIf=\"!isLogged\" class=\"nav-item login\" (click)=\"loginClick()\">\r\n    Entrar\r\n  </li>\r\n  <li *ngIf=\"isLogged && user\" class=\"nav-item\" (click)=\"menuClick()\">\r\n    <span>Minha conta</span>\r\n    <img [src]=\"user.profileImage | safeUrl\" class=\"profile-picture\" (click)=\"menuClick()\">\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/header-nav/header-nav.component.scss":
/*!******************************************************!*\
  !*** ./src/app/header-nav/header-nav.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex; }\n\n.nav {\n  display: flex;\n  align-self: center;\n  font-size: 18px;\n  height: 100%; }\n\n.nav .nav-item {\n    display: flex;\n    justify-content: space-between;\n    text-align: center;\n    align-self: center;\n    padding: 0 20px;\n    height: 100%;\n    width: 240px;\n    color: white;\n    cursor: pointer;\n    transition: all .1s ease-in; }\n\n.nav .nav-item.login {\n      justify-content: center;\n      flex-direction: column;\n      width: 120px; }\n\n.nav .nav-item span {\n      display: flex;\n      justify-content: center;\n      flex-direction: column; }\n\n.nav .nav-item:hover {\n      background: rgba(255, 255, 255, 0.2); }\n\n.profile-picture {\n  width: 60px;\n  height: 60px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  align-self: center;\n  border-radius: 60px;\n  margin-left: 30px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyLW5hdi9DOlxcVXNlcnNcXHBlZHJvXFxEZXNrdG9wXFxzYWZlMlxcUHJvamV0by1FbmdTSVxcZW5qb2VpMi9zcmNcXGFwcFxcaGVhZGVyLW5hdlxcaGVhZGVyLW5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWEsRUFDaEI7O0FBRUQ7RUFJSSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBRWYsYUFBWSxFQTZCZjs7QUFyQ0Q7SUFXUSxjQUFhO0lBQ2IsK0JBQThCO0lBQzlCLG1CQUFrQjtJQUNsQixtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixhQUFZO0lBQ1osYUFBWTtJQUNaLGFBaEJTO0lBaUJULGdCQUFlO0lBYWYsNEJBQTJCLEVBSTlCOztBQXBDTDtNQXNCWSx3QkFBdUI7TUFDdkIsdUJBQXNCO01BQ3RCLGFBQVksRUFDZjs7QUF6QlQ7TUEyQlksY0FBYTtNQUNiLHdCQUF1QjtNQUN2Qix1QkFBc0IsRUFDekI7O0FBOUJUO01Ba0NZLHFDQUFvQyxFQUN2Qzs7QUFJVDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1oscUJBQWlCO0tBQWpCLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci1uYXYvaGVhZGVyLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5uYXYge1xyXG5cclxuICAgICR3aGl0ZTogd2hpdGU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgJi5sb2dpbiB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2ZpbGUtcGljdHVyZSB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/header-nav/header-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/header-nav/header-nav.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_publicUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/publicUser */ "./src/app/objects/publicUser.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent() {
        this.loginAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLogged = false;
    }
    HeaderNavComponent.prototype.checkLogin = function () {
        if (this.id >= 0) {
            this.isLogged = true;
        }
        else {
            this.isLogged = false;
        }
    };
    ;
    HeaderNavComponent.prototype.ngOnInit = function () {
        this.checkLogin();
    };
    HeaderNavComponent.prototype.ngOnChanges = function () {
        this.checkLogin();
    };
    HeaderNavComponent.prototype.loginClick = function () {
        this.loginAction.emit('loginAction');
    };
    HeaderNavComponent.prototype.menuClick = function () {
        this.menuAction.emit('menuAction');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderNavComponent.prototype, "loginAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderNavComponent.prototype, "menuAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HeaderNavComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _objects_publicUser__WEBPACK_IMPORTED_MODULE_1__["PublicUser"])
    ], HeaderNavComponent.prototype, "user", void 0);
    HeaderNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-nav',
            template: __webpack_require__(/*! ./header-nav.component.html */ "./src/app/header-nav/header-nav.component.html"),
            styles: [__webpack_require__(/*! ./header-nav.component.scss */ "./src/app/header-nav/header-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n  <h1 class=\"title\">\r\n    <a routerLink=\"/home\" routerLinkActive=\"active\">Enjoojei</a>\r\n  </h1>\r\n\r\n  <!-- Barra De Busca -->\r\n  <div class=\"row\">\r\n    <form class=\"search\">\r\n      <input [(ngModel)]=\"search\" name=\"search\" placeholder=\"Precisa encontrar alguma coisa?\" class=\"\">\r\n      <button type=\"button\" (click)=\"searchAction()\"><mat-icon matSuffix>search</mat-icon></button>\r\n    </form>\r\n  </div>\r\n  <app-header-nav *ngIf=\"!showMenu\" (loginAction)=\"openLoginHandler()\" (menuAction)=\"menuHandler()\" [id]=\"id\" [user]=\"user\"></app-header-nav>\r\n</header>\r\n<app-user-menu *ngIf=\"showMenu\" (closeMenu)=\"closeMenu()\" (logoutAction)=\"logoutHandler()\" [user]=\"user\"></app-user-menu>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 80px;\n  position: fixed;\n  width: 100%;\n  padding: 0 100px;\n  display: flex;\n  background: #AA076B;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to left, #61045F, #AA076B);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  z-index: 900;\n  top: 0;\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4); }\n  .header .title {\n    font-size: 24px;\n    align-self: center; }\n  .header .title a {\n      text-decoration: none;\n      color: white; }\n  .header .row {\n    flex-grow: 1;\n    padding-left: 20%; }\n  .header .row .search {\n      display: flex;\n      height: 100%;\n      padding: 20px;\n      font-size: 16px;\n      font-family: 'Exo', sans-serif; }\n  .header .row .search input {\n        width: 300px;\n        box-sizing: border-box;\n        background: transparent;\n        color: white;\n        border: 1.5px solid white;\n        padding: 0 20px;\n        border-radius: 100px; }\n  .header .row .search input::-webkit-input-placeholder {\n          color: white; }\n  .header .row .search input::-ms-input-placeholder {\n          color: white; }\n  .header .row .search input::placeholder {\n          color: white; }\n  .header .row .search button {\n        background: transparent;\n        color: white;\n        border-radius: 40px;\n        box-sizing: border-box;\n        width: 41px;\n        border: 1.5px solid white;\n        margin-left: 10px;\n        display: flex;\n        justify-content: center;\n        transition: all ease-out .1s; }\n  .header .row .search button:hover {\n          color: #AA076B;\n          background: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xccGVkcm9cXERlc2t0b3BcXHNhZmUyXFxQcm9qZXRvLUVuZ1NJXFxlbmpvZWkyL3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQVFJLGFBQVk7RUFDWixnQkFBZTtFQUNmLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLG9CQVZ1QjtFQVVNLCtCQUErQjtFQUNrQixnQ0FBZ0M7RUFDOUcsdURBQW1FO0VBQUUsc0VBQXNFO0VBQzNJLGFBQVk7RUFDWixPQUFNO0VBQ04sNENBQXdDLEVBdUQzQztFQXpFRDtJQXFCUSxnQkFBZTtJQUNmLG1CQUFrQixFQU1yQjtFQTVCTDtNQXlCVSxzQkFBcUI7TUFDckIsYUFyQk8sRUFzQlI7RUEzQlQ7SUErQk0sYUFBWTtJQUNaLGtCQUFpQixFQXdDbEI7RUF4RUw7TUFtQ1EsY0FBYTtNQUNiLGFBQVk7TUFDWixjQUFhO01BQ2IsZ0JBQWU7TUFDZiwrQkFBOEIsRUFnQy9CO0VBdkVQO1FBMENVLGFBQVk7UUFDWix1QkFBc0I7UUFDdEIsd0JBQXVCO1FBQ3ZCLGFBeENPO1FBeUNQLDBCQXpDTztRQTBDUCxnQkFBZTtRQUNmLHFCQUFvQixFQUtyQjtFQXJEVDtVQW1EWSxhQTlDSyxFQStDTjtFQXBEWDtVQW1EWSxhQTlDSyxFQStDTjtFQXBEWDtVQW1EWSxhQTlDSyxFQStDTjtFQXBEWDtRQXdEVSx3QkFBdUI7UUFDdkIsYUFwRE87UUFxRFAsb0JBQW1CO1FBQ25CLHVCQUFzQjtRQUN0QixZQUFXO1FBQ1gsMEJBeERPO1FBeURQLGtCQUFpQjtRQUNqQixjQUFhO1FBQ2Isd0JBQXVCO1FBQ3ZCLDZCQUE0QixFQUs3QjtFQXRFVDtVQW1FWSxlQWhFZTtVQWlFZixrQkEvREssRUFnRU4iLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICAvLyB2YXJpYXZlaXNcclxuXHJcbiAgICAkcHJpbWFyeS1saWdodDogI0FBMDc2QjtcclxuICAgICRwcmltYXJ5LWRhcms6ICM2MTA0NUY7XHJcbiAgICAkd2hpdGU6IHdoaXRlO1xyXG4gICAgLy8gZmltIHZhcmlhdmVpc1xyXG5cclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1saWdodDsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICRwcmltYXJ5LWRhcmssICRwcmltYXJ5LWxpZ2h0KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgJHByaW1hcnktZGFyaywgJHByaW1hcnktbGlnaHQpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICB6LWluZGV4OiA5MDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLDAsMCwwLjQpO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5yb3cge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG5cclxuICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCAkd2hpdGU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHJcbiAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICB3aWR0aDogNDFweDtcclxuICAgICAgICAgIGJvcmRlcjogMS41cHggc29saWQgJHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1vdXQgLjFzO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyAuYnVzY2F7XHJcbi8vICAgY29sb3I6ICNBQTA3NkI7XHJcbi8vICAgd2lkdGg6IDUwMHB4O1xyXG4vLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gI2JhcnJhLWJ1c2NhIHtcclxuLy8gICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyAgIH1cclxuLy8gICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICB9XHJcbi8vICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4vLyAgICAgY29sb3I6ICNBQTA3NkI7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAgIC9kZWVwLyAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vICAgL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcclxuLy8gICAgIGNvbG9yOiAjQUEwNzZCO1xyXG4vLyAgIH1cclxuXHJcbi8vIC5vdXRsaW5le1xyXG4vLyAgIGNvbG9yOiAjQUEwNzZCO1xyXG4vLyB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _mock_data_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock-data/image */ "./src/app/mock-data/image.ts");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../communication.service */ "./src/app/communication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, formBuilder, el, userService, toastr, communication) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.el = el;
        this.userService = userService;
        this.toastr = toastr;
        this.communication = communication;
        this.openLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showMenu = false;
        this.search = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inicializeFormBusca();
        this.checkUser();
        this.communication.triggerLogin.subscribe(function (action) {
            _this.checkUser();
        });
    };
    HeaderComponent.prototype.searchAction = function () {
        if (this.router.url.indexOf('/home') < 0) {
            this.router.navigate(['/home']);
        }
        else {
            this.communication.search(this.search);
        }
    };
    HeaderComponent.prototype.checkUser = function () {
        var _this = this;
        if (this.id >= 0) {
            this.userService.getPublicUser(this.id)
                .subscribe(function (data) {
                if (data) {
                    _this.user = data;
                    if (!_this.user.profileImage) {
                        _this.user.profileImage = _mock_data_image__WEBPACK_IMPORTED_MODULE_5__["defaultImg"];
                    }
                }
                else {
                    _this.toastr.error('Informações do usuário não encontradas!', 'Algo deu errado!');
                }
            }, function (error) {
                _this.toastr.error('Não foi possível carregar as informações do usuário - (DEVs) Para ver a mensagem completa, abra o console do navegador', 'Algo deu errado!');
                console.log(error);
            });
        }
    };
    HeaderComponent.prototype.ngOnChanges = function () {
        this.checkUser();
    };
    HeaderComponent.prototype.inicializeFormBusca = function () {
        this.formBusca = this.formBuilder.group({});
        this.el.nativeElement.style.backgroundImage = this.color;
    };
    HeaderComponent.prototype.openLoginHandler = function () {
        this.openLogin.emit('openLogin');
    };
    HeaderComponent.prototype.logoutHandler = function () {
        this.logout.emit('logout');
    };
    HeaderComponent.prototype.closeMenu = function () {
        this.showMenu = false;
    };
    HeaderComponent.prototype.menuHandler = function () {
        this.showMenu = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "openLogin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "logout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], HeaderComponent.prototype, "id", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _communication_service__WEBPACK_IMPORTED_MODULE_6__["CommunicationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.loginURL = 'https://enjoei2-perfil.herokuapp.com/login';
    }
    LoginService.prototype.doLogin = function (login) {
        return this.http.post(this.loginURL, login, this.httpOptions);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-overlay\" (click)=\"closeLoginHandler($event)\">\r\n  <div class=\"login-holder {{loginClass}}\">\r\n    <form *ngIf=\"showLoginForm\" class=\"login-form\">\r\n      <h2 class=\"title\">Login</h2>\r\n      <fieldset>\r\n        <div class=\"input-field\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"E-mail ou nome de usuário\" id=\"user\" [(ngModel)]=\"email\" name=\"login\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"input-field\">\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Senha\" [type]=\"hide ? 'password' : 'text'\" id=\"pwd\" [(ngModel)]=\"password\" name=\"password\">\r\n            <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n          </mat-form-field>\r\n        </div>\r\n      </fieldset>\r\n      <div *ngIf=\"!loading\" class=\"btn-holder\">\r\n        <button type=\"button\" class=\"login-btn register\" (click)=\"openRegister()\">Criar conta</button>\r\n        <button type=\"button\" class=\"login-btn\" (click)=\"loginHandler()\">Entrar</button>\r\n      </div>\r\n      <div *ngIf=\"loading\" class=\"btn-holder center\">\r\n        <button type=\"button\" class=\"login-btn sending\" disabled>Enviando, por favor aguarde</button>\r\n      </div>\r\n    </form>\r\n\r\n    <app-register *ngIf=\"showRegisterForm\" (closeRegister)=\"closeRegisterAction()\"></app-register>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-overlay {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  z-index: 901;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center; }\n  .login-overlay .login-holder {\n    height: 65%;\n    width: 400px;\n    align-self: center;\n    background: white;\n    border-radius: 5px;\n    z-index: 902;\n    transition: all ease-in .2s; }\n  .login-overlay .login-holder.register {\n      width: 100%;\n      border-radius: 0; }\n  .login-overlay .login-holder .login-form {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      height: 100%;\n      padding: 40px; }\n  .login-overlay .login-holder .login-form .title {\n        text-align: center;\n        font-size: 24px;\n        color: #AA076B; }\n  .login-overlay .login-holder .login-form fieldset {\n        flex-grow: 1;\n        padding-top: 100px; }\n  .login-overlay .login-holder .login-form fieldset .input-field {\n          display: flex;\n          flex-direction: column; }\n  .login-overlay .login-holder .login-form fieldset .input-field label {\n            font-size: 16px;\n            color: #747474;\n            margin-bottom: 5px; }\n  .login-overlay .login-holder .login-form fieldset .input-field input {\n            height: 30px;\n            font-size: 16px;\n            color: #AA076B;\n            letter-spacing: 1px; }\n  .login-overlay .login-holder .login-form fieldset .input-field input#pwd {\n              letter-spacing: 3px; }\n  .login-overlay .login-holder .login-form .btn-holder {\n        display: flex;\n        justify-content: flex-end; }\n  .login-overlay .login-holder .login-form .btn-holder.center {\n          justify-content: center; }\n  .login-overlay .login-holder .login-form .btn-holder .login-btn {\n          font-size: 20px;\n          color: #AA076B;\n          box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #AA076B; }\n  .login-overlay .login-holder .login-form .btn-holder .login-btn.register {\n            color: #747474;\n            box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #c3c3c3;\n            margin-right: 30px; }\n  .login-overlay .login-holder .login-form .btn-holder .login-btn.sending {\n            color: #747474;\n            box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxwZWRyb1xcRGVza3RvcFxcc2FmZTJcXFByb2pldG8tRW5nU0lcXGVuam9laTIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1JLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLFlBQVc7RUFDWCxPQUFNO0VBQ04sYUFBWTtFQUNaLCtCQUEyQjtFQUMzQixjQUFhO0VBQ2Isd0JBQXVCLEVBa0YxQjtFQS9GRDtJQWdCUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQixrQkFsQlM7SUFtQlQsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWiw0QkFBMkIsRUF3RTlCO0VBOUZMO01BeUJZLFlBQVc7TUFDWCxpQkFBZ0IsRUFDbkI7RUEzQlQ7TUE2QlksY0FBYTtNQUNiLHVCQUFzQjtNQUN0QiwrQkFBOEI7TUFDOUIsYUFBWTtNQUNaLGNBQWEsRUE0RGhCO0VBN0ZUO1FBb0NnQixtQkFBa0I7UUFDbEIsZ0JBQWU7UUFDZixlQXBDVyxFQXFDZDtFQXZDYjtRQTJDZ0IsYUFBWTtRQUNaLG1CQUFrQixFQXNCckI7RUFsRWI7VUErQ29CLGNBQWE7VUFDYix1QkFBc0IsRUFpQnpCO0VBakVqQjtZQWtEd0IsZ0JBQWU7WUFDZixlQWhETjtZQWlETSxtQkFBa0IsRUFDckI7RUFyRHJCO1lBd0R3QixhQUFZO1lBQ1osZ0JBQWU7WUFDZixlQXhERztZQXlESCxvQkFBbUIsRUFLdEI7RUFoRXJCO2NBOEQ0QixvQkFBbUIsRUFDdEI7RUEvRHpCO1FBcUVnQixjQUFhO1FBQ2IsMEJBQXlCLEVBc0I1QjtFQTVGYjtVQXlFb0Isd0JBQXVCLEVBQzFCO0VBMUVqQjtVQTZFb0IsZ0JBQWU7VUFDZixlQTVFTztVQTZFUCxxRUE3RU8sRUF5RlY7RUEzRmpCO1lBa0Z3QixlQS9FTjtZQWdGTSxxRUEvRUE7WUFnRkEsbUJBQWtCLEVBQ3JCO0VBckZyQjtZQXdGd0IsZUFyRk47WUFzRk0saUJBQWdCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tb3ZlcmxheSB7XHJcbiAgICAkd2hpdGU6IHdoaXRlO1xyXG4gICAgJHByaW1hcnktbGlnaHQ6ICNBQTA3NkI7XHJcbiAgICAkZ3JheTogIzc0NzQ3NDtcclxuICAgICRsaWdodC1ncmF5OiAjYzNjM2MzO1xyXG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogOTAxO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5sb2dpbi1ob2xkZXIge1xyXG4gICAgICAgIGhlaWdodDogNjUlO1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB6LWluZGV4OiA5MDI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4gLjJzO1xyXG5cclxuICAgICAgICAmLnJlZ2lzdGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbi1mb3JtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmaWVsZHNldCB7XHJcblxyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5pbnB1dC1maWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmI3B3ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnRuLWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmNlbnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5sb2dpbi1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggMHB4IDBweCAkd2hpdGUsIGluc2V0IDBweCAtMXB4IDBweCAkcHJpbWFyeS1saWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5yZWdpc3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggMHB4IDBweCAkd2hpdGUsIGluc2V0IDBweCAtMXB4IDBweCAkbGlnaHQtZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJi5zZW5kaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, toastr) {
        this.loginService = loginService;
        this.toastr = toastr;
        this.closeLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.email = '';
        this.password = '';
        this.hide = true;
        this.showLoginForm = true;
        this.loginClass = '';
        this.showRegisterForm = false;
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.doLoginHandler = function (id) {
        this.doLogin.emit(id);
    };
    LoginComponent.prototype.openRegister = function () {
        var _this = this;
        this.loginClass = 'register';
        this.showLoginForm = false;
        setTimeout(function () {
            _this.showRegisterForm = true;
        }, 300);
    };
    LoginComponent.prototype.closeRegisterAction = function () {
        var _this = this;
        this.loginClass = '';
        this.showRegisterForm = false;
        setTimeout(function () {
            _this.showLoginForm = true;
        }, 300);
    };
    LoginComponent.prototype.closeLoginHandler = function (e) {
        if (e.srcElement === document.getElementsByClassName('login-overlay')[0] && this.showLoginForm) {
            this.closeLogin.emit('closeLogin');
        }
    };
    LoginComponent.prototype.loginHandler = function () {
        if (this.email !== '' && this.password !== '') {
            this.submit();
        }
        else {
            this.toastr.error('Preencha todos os campos para prosseguir', 'Algo deu errado!');
        }
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        var loginData = {
            email: this.email,
            password: this.password
        };
        this.loginService.doLogin(loginData)
            .subscribe(function (data) {
            _this.toastr.success('Login efetuado com sucesso!', 'Sucesso');
            var id = data.message;
            _this.doLoginHandler(id);
            _this.loading = false;
        }, function (error) {
            error = error.error || {};
            _this.toastr.error((error.errors[0] || {}).message || 'Problema não esperado, desculpe pelo inconveniente', 'Algo deu errado');
            _this.loading = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "closeLogin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "doLogin", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mock-data/image.ts":
/*!************************************!*\
  !*** ./src/app/mock-data/image.ts ***!
  \************************************/
/*! exports provided: defaultImg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultImg", function() { return defaultImg; });
var defaultImg = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUDBAkJBwcIBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHChALBwgOCQcHDRUNDhERExMfBwsWGBYSGBASExIBBQUFCAcIDQkJDRINDQ0SEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEv/AABEIAtAFAAMBIgACEQEDEQH/xAAdAAABBQEBAQEAAAAAAAAAAAADAQIEBQYABwgJ/8QATRAAAQMCAwUEBQcICgMAAQUBAgADEgEEBSIyBhNCUmIRI3KCBzOSovAUITFDssLSFUFTYXGx4vIIUWOBkaHB0eHxFiRz0yVEg5OjNP/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAA1EQACAgICAgICAQMBBwMFAAAAAQIRAyESMQRBE1EFImEUMnGBFSNCkaHB8LHR8QYWM1Ji/9oADAMBAAIRAxEAPwDwetsguW60Ttmoj9uPKubDKu2SeJszx2/8KA+2rp5tRHW1ohlXYhY2ypIE0AUh0EggtcJpiJiUFEGqWraWKapWxY8VNtCUKtFKs1bGpqjR2BLQ2RLO4bUZK/torj+X2bMDDulqUAjJHc8qaDa50n6NVsaKkQ+MqY0ypLbaotEmyD2le2YaVV2TKvLQMo6kI6KsmMVRNX8y4RS9nMkjRKCn0BOoKRUyDxql7V1KJULIdSqd2plE4USIPouMopKpggiT2VyCiXiTuxJH4+Kp1PEibsKLfscNEtKptKJ28Qjouh3Ym9qb5k6tFAZu+glFwpsl3aoUPklTQSGMlCxexKmjRd2qNhx6OKqAZIlKoL8uZAGRniTmCQXyT7Q1VC3JXZcWZeyryzVHY1FXtpXzIZAp0y6sSVzZ0VLZK6tENhvZMBO7U0U4qcqKyuLOqhPVTxFMdohZI9g0GtU8k1AMGkminLqq0iCAj9qCNUaheVXQPIVdRIK4qq2EOXVXJ1BVUQSiRPqkpRWkA0KKWlUidFQs6lUtaJE8URTdigi0qm9icNBRJWDQ8FIGqBSiJSqYlQNBEQE1tOomosf2pwJieNEQISiemCuGquILYtV1U6i4qIgGx1EtKLhonditFHUS9i4aJaKyCVFPomxTqUUIckKieNEtaKUQQEtRTexOiiRBKpe1dSi7sVgnUqn9iQaJysglE5MoSd2qAi0on0TKVTu1MKY+iWlEylU5QFockok7V3aiRQ5dWq5ciKHjVO7UOlV0kVg8QtKpyCJJ41UsFod2p1KpnanVRoFjqJU0arldgDu1OTKJa1RJhDlyZWqUapikVQ5cuXIkUdRKkS0Rohy5cuVkOXLlyhDly5coQ5cuXKEOXLlyhDly5coQ5cuXKEOXLlyhDly5coQ5cuXKEOTSTk01CmIm1olqk7UREIuSVqkorLF7Ui6tEigJySlUtapgq6JYpLiTk1USxqSqWi4qIiqG9q6lUtBTFCCpKJaVS9iEEbVL2rq0SKBH59OsKFcCre6BRH2iXnY9m2ihuBVc/RXdw0q+4BbY/wAGOe1ZUkCbQVJfogRWzG9GVq+wfYlKiWqZWi2JC5JJj6VUqyLMolKKTaKMHh7NDh5xV/aCqHDKF4Vf2q5WXbOhhjq2xDDNqRbYEnFmUi2HLzLn5DVGKCA0pDbCVsPKpjQ9KWPhFVsJZNK6thHmUG1HpVjbiUfwqqGwVMOFOpKVU6len3UoUQ8URyQwaJaeVPKqaXhQyVFJi1SUFP7PEu7EFDFQ2KeSWqbJQqhwkKf2oVAT1ZSbrZ3UiUJD7cyWtFEFEIkoK7hThiqdhVfs6gp1ASQXTjlVouqH0DwrqUQ+1EkmNEHdibRdSqWiWQaQrhTiSUohYUBhoTvUi+JDfoKqhjILtU+2pmSO6k9pXoW4UW1pRXFgqe0qryyrpQSBoubQ1b2ZKnshHhV3ailtMJWTW6Ja1TQolKiibJz9CoD6P2ILtOVEwaAxTKp9UPsQOgoI6tElaLl1FaCdnDRSIqOKOFVZKFpVJU1w6lzgqBCgSdU1GZcjlJSBUZB0kqQU6lFEyDhokqlqkpVQh1E8KJRFOFHFWDxQtK5dKeC6lUtBTox+inGuggoo0QaIjaNIFhBqighiiUV0/sAcnimESZV4VaISRok7OpR6XI6ZRUZ2/EdRJkaBcSyo4lq4KorjFRHiUK7x4RESl7P/AEp/gBqjUVd6keayNMfbyxJT2MYEh1K6/kovScR26KhDEhJXLLwx1KIhI7F3ahi6KfSqllDknYnUou7Fash0VyckijKOourRKkrRWQTtXVTqUS0UINquFOrRd2K6Ks5KKTsS0RlD1wpO1KoUKuSLu1XYNC1Tk2qTtRIqh65cu7FZBaVTxqmdiWlVAWPT+1D7U7tR2A0LQk6hJlV1FdlcUOoSXtTO1O7VdkoXtTqJlKpe1EmC0P7Uqb2pyNP7IcupVcuTEwRVy5cishy5cuREOXLlyhDly5coQ5cuXKEOXLlyhDly5coQ5cuXKEOXLlyhDly5coQ5NKicmlRQpiJKpFyJEQ2KWtV1U2qssQ6rl1aLlATklaJVyIobQU2qfWiZWiEtHJKLk0qKFDlyStU3tUIPXJqcqIch9iIm1UIfCJtqvuA8yun6cqq3x6cy89F2dGSop7htVz7Su7gZKquQWuM60ZHDRUvsoFRU94VDOmZbcbMUlTIxUTao5+L3UCtFsi7QqYw0eyLMgFRHshzfwq5bRFI0WGaoyWgZplWew/3ldNEuXldGvC70HbLmU21EelVwlJWdosOU2p0qJw05oqaxRRbeinW0vLzJKGRdlhZqxYqodtRTW6dKqxt0EoKQW06lB5Sl7ScVS4kMXastxoaYj8Cur4U7Ku7OJU1ZUVYytNK6lE4aJO2KBqhsVQ3sS9iYScJKFiUHwpwLq1SgPUoSMdnRTxplSguGiobwR3alFIIfEU6qhXAc3VLFNT6EoE1oSK4RSOVStqIWhaJ3auiupUuVQYo0dWqbVPKqSlUPIKhlaILlculHrVAcplJWQgP0JGZqhuI1tVLbohaWYq8sqKksaK7tOXSpGVgtWXVhRXdsqS0qri1opLstKiwbEUtaJW6Lq0VE0NKiC6pAoL9FUhaVkdMqKJWiH2JYxKgdUtKp1arqRULGgjUqg9kkWlUaIESySUS9ihBlw1IerhQbd36tzh0lzI9aJHrYSH7ynFvogUU5QGLgmyg75XOElYhRTiQbWqf2LqCnKyChROrRLRdWiJOiC0Twqm0TqJsZWC3QVPEfZUY3hUd7EhHUj5APZZSio9zfCMlmMXx8RHKSyt5tXLLL4/wS3mRRuLzHhHUSqbvacY5SXm+J46UpOafj9SDbX8swlKXCrhKUukylS7ZuHtq+r4/wUPENqJNkMokK8z2jq6Lndi4MuVE/Jb7gt5tXMS1w8fI/QqeaK9l3dbXO5hIvNpVQ7tU64UWyVxYbPSbi+JC5wlzK3wfZARzRiS14/wAdkbsxz8qK2Z6zxu5iIuDq0kr9vaN3diJCQrT4Lsa048IuFpGWVSrnY5spELg5dIrUvx07FR8qD9sq7XGHREZLT4ftGUe8yjzFlTW8LbcFmQ5m+bKKgY1cMNtkLheyKdP8c0vRUfLUjV4ZjIuZhJWo4mIxzal5+1jLAsCTXFwiJK2sroTFveFuy4hlpFIn4LQ6GZM29rdz4kej482ZYZ3HbZtwQF0REdRK6tL9pxsiEvCUlm/p5+kH80TRtuInasY5jLbcRbcjzEWolOscZlqcFBKLiGaVcqtnElMauh5ULISexLSiaDootFRTYylEtaJ3auRoqxnauon9i6qsuxlUopy4aKFWcurRd2JaqWUdVdRdVdREihexL2rl3YiIKu7ElE7tVtlHdqXtSST1aBEpVOpVN7F1aoiqFS0XJyhR1EqRcrsoVOQ61TqVVplND+1KhlVdQk6PRVBFy5cjBOSpF3arRBVy5dREQ5cuXKEOXLlyhDly5coQ5cuXKEOXLlyhDly5coQ5cuXKEOTSqnJtaKFMTtTCSkK7tRFCVXUS0S9ihBhLuxJSiWKsg1ckqlUIzlyQqJVCgaTtTqimqWQ5J2rqVSoZOiWM7UtaJSSK07IdSqbWqdWi4aqyHw475VBum/gVavt5VWXFPiS87H6OhIqbivUoDwyVjcD1KvuPD5lqjpGNsrLoVFIVPuFDrJbMcW+jLPsjlpUaCknRAKi3R6BB1RLcsyGSewhyJ0VRe2BZlZVOJKqtNMlLaNYs0RsJUWNtUpK/sPDmH3lQWhaVe2g/ElzZrZrxuy1boplhRQmBVlYtpTNEPssGaKYHSgMI1SQ0OqwvYuqKZOSIHMhQxq0N7EjnuolappkoDGC9g+xcRcqUqJqptINMbX4ilBdRdSqsKAvanUTBRKVVckElWxaknCabJcNVbjasPkmHoKZTUkmlolASewlKLk3t+IrpKFqSodVOCviQq16U6hKUCEr8cKchDTmiuFQtOhXSTBqnVr8RTKUVNF99C9iYSJRDcorDREdolaTXlzBS4ULFzlT0W1gXsrQYdUdSobCnhL7SvbWqpFxk/ZeYcri2oqWworq1rlVONhckTwql4UxqqeoA2NomOItEJ5A+i49kckyqJVDKqWMGVquXGupVVZB4p4UQ20agpiIJROoupVLRQhwolEgCkkrRBlywLgkJKLb3BNlBzTwkpyjYlGMS9rlRcWyB2ilJON2KweJbVjaObtwhzaZaf3LNY3t4WYWy8wl/wihgyT/tTFzyxXs9adxAR1EgHjzXMvCrnbZ0y1EoVMfdclvHN3JN/pJp7Ez8qC6PernapoRylL45lS3m2zYyze8vGH8SKMicks9ebQ7sizSzKlgb2Kn5PR7rcbetjqcj7yqcS2ukJRclLl1Lxpp87sosEUuJanZvYy8kJuEUS9lPxeFln/gk/NikWWJ484XUJcXEiYey+5mEZNlxLa4fsY3ES5uEuL/NaPDsB3Y9zm/syFdTB+JhHcjLPzZPowlxgm8bjHzK12d2ZbEY/WdWleh4XhG8HNESHhjmFVWJs7giIij5cq6uPxsUP7UZp5ZT2yhusHi4OkiVpbNttj3jYiXhTaX4l4kY6FupRl0lxJy4mdp2TmbxiOkSJBrc6ojFYrEblxopOEQi5wjHL7KU9omyZ9ZEhylKWlHzonFmopjoCMRHvB1FJVF5tAW/Hdl/EsLimIiO8JspSLVp91RrfGiGLhCUkLyAyi/R6Pe4mQtkZOeUVVug1csyJwpcIyWZttod73ZRlyqvwvF90445EspaiLL7KGTUtEVrZsmrcpNg2WnhyqTcX0ijvIxHMsq5tU3uHjkIvOZR4YrMPYm7wud3HNLL5ldR9Eg3uzf3VG3CkTitsIxAx5ibjpEl5FZY+IuCJFLNmWsZ2vbBsolqHUP/AEglGLD5M1zpFmNxyJfVio9jc3IlIi9riXnF5tsTj4jvJbvN5fMpV9tu6USFwY8Wn/ZJeDH9DlmZ7BXG3e7HSUVa4djbo5icEl4JabeRKThERFxS0qwtPSa2T0ZZR4viiW/DxMOPlTi/4PpjC78iESIhkWZWbVy7yyHpXzbgfpP74QlESLNLV5V7Hs/6SLTc94Q5R1FlXNyYFF90bI5OfRvmz6c3Kl3izVntmw+UmyGPMtGy8BjKXmS9enZde6C0qlrVNGo8yWpKFCpRTKEiUVWUxK0XUS1SKyjhS1olSUqoQVcuolrRGmUckXLlZZ3Yl7V1UihB1E6iZSqdSqKwWOXUTJJQJEU0FSdqSSRQEd2J3YmJ3arQLRxLqUXLu1NjKkQf2ru1M7U4aqk9lNDhS0Sdq7tTUwRy5IuRp2QVck7VylkFXLl1FZDly5coQ5cuXKEOXLlyhDly5coQ5cuXKEOQ6olUPtVoglV1KJe1IpYNidi4UqStURbG0onJBSKFiJCSp0VTdAsHSq6tU7sTK1Q02UJRJ2LktBRljSok7E6opK0UKYiWiSq6pKiqEJNT60SVFWmWfE7wqsuaZlbvUVa/Veej2bJKyruBVTdjqV1cKpv1px77E5Ekiseoo50Ut2ijFRb8eujE79kBxCdUl+iA9VbEBKwDiVkklaJo0zalHsDky4t3RipDBj8EqsXUe2NZs0UNWzQ2h5loLN1ZewLMKvMPLpXMywXo1Y51o0NqfSrawr8fFFQ2rgqyta/HCsTbs242vsv6Uy/eTxNVQXHMSK1e8P8AErTsdZatVRKKqC9RBvPgkt2noZyRY0qmmUepQm7tPo/ykrJYYq5knahb5JQvESpogalUlEgOLqIbYSH1qmy8xJvl95OHpQluTHUJOoXsofbmRO1EpPoHsIApwUTKVTu1VQyMVQ7tS1JcNEtepUU0cu7ElapxKFpbHUom1ouGviTZKBcUEr4k2tU0z6kIjV0EkFrTzIDtUu86UhKRTvYWiI6nW6a7VOtj+NJKqszvey3sG83EtBah0qhsS5Vf2lfKr4ksubEFdWoKnsqq6tUXEjZNCiINE1uif1IHD+C0xpKO9RSjUZxJaJdEd2qGSeSStUthxdg4paUXR+JJCVUGECqLQUEFIpVXZBKpEqY4YjqRpX0Sgo1Qn3hHUqvEsbbbFYHaPbfhb/EtuLw5ZOjPl8iMPZusRx9tsfxLD4/tjyksPiuPunqKKoLjEWh1PZuXStuLw4Q3J7MebyZypRWiy2qu3HxIpSIc0lVYcbbjcnC8QyUC+xsSGLYylyyksq4F4T0WWXMxZRitUXPqCoySUU/2Ztr/ABK2aEo+9JZLG9oJF3BeVbPZD0TYrduN/LWYslzEOX2ar2PZv0KYU0MblttxweLMJfv7EcfDlP8AuZTzJaitHzpsxZ3124MWXIy4hykvZME9EjT7Lb7km3I94JCW78K9eHBmLNsWrZkd3Hl+KqwAxaZEtI8Q8MfxLdj8eEFQmSb22YvZ/YSzbiLbItucwitla4M20MXnN4Kpdo8abBmbGYen1jayR7cuEW6lLTmL7Kcqj0TVUb62JoSiTmWURHlQLu7Jh4uLNllyrD/+SttuSe1FqHh8qvGrxp0R7wiEtPSqc0EomsMnSi6yWrNqVVjTHylsglm6uEvCgYfeONPDu3JNllIS8OpSjoTb4yLu3i9kkPyh/GVb+FG2wJbvvB+yo18+40wJkPdjlLwq62tOLUSczEOVZN6XybdOOZXOEopbmn0TjxM9iOMC7dtgOZstWrKKwu216PylwmCLdiXV95Jj4uMPkW8zcI9Kqbx4eaUtWoiS/lp0wHGxbXFHMuXUp9zckQyIiHmUMgzNxGWXVH7ql4oxuxiQ5nB1cKbzF8WV1tcEThFIcunMoWJYyQtwHTzas370Z3D3BZEhKJFKXKqG8aKXeaVLvsHY878m2/8A6KG/izojm08Px2KPdNkZCLekVHvA4eXiRpUU2Ot7wpaiKPCpjOLlpIsqph1KfbWhcWWSmyEoLnUQ5Sc1FqTHjcjlLyqba24lEOXiU9jDhbEs3eFl0o+Ap5UjLRdll1I1u0QyMpSV5b2neFvMo+FSH8KcIpCOXhVxhfoCWeNFRbEQkJZuaMlqsLxBxxvvJRTbPZw3Ik5llqWjZwRtoc3vaf3qp/jXkQzB56xOzSYLtA402IsNlEdWZbzANunzEZDEfj9S89sqCTHqxjzKU1elpIhFsR0iIyWaH4JRTuVGuf5ptqMYo9kD0jsNNlIZEPVq/wAlIw/b3fjJsREeFfNeLY33hCOnSKfhW0z7TwgTzbbY5sxcJeFYc/hTx6TNMPLUt0fUmGY6TpdPESuwxMSLKQkK+erTb3KINONiMczmn7VFd4NtRu87lyJcoj/0sDuDps1QamrR7y2+luHoiRLzPCtvhPizcPwVFowvN6I7wiEdRRWjDjll6AyVB7LkMTyyLKpjF2JZpLO3TA7kdRDwjxEo1HSFwRIc3LwiqlCUHTRaakjZUdHmRK1WXbxtsSjmkPKJR9r6Fd2t+JeJByX2U8bWyYuSUJKmx2Cd2papF1FZDly6q5FohycCZROFSymEXdq5dSqICh65N7UnapZVDqkk7VySqJEFTk2idJRFMUU6iGJJw1Rxl9iwi6lUztT0xS+iCpFy5Hoh3alSLkRBVyRKoQ5cuXKEOXLlyhDly5coQ5cmlVKKhVnFVBonu1Qe1EiWFpVL2oa7tVUitDqpJLq1TaIiC1S9qbSqWigQlapaEkXKmgaO7UnYuqkGqF36KF7Uwqp1UytEZDqJap4plVArGxXVolXFVC2wRq6icmqIh8XvjzKuuKfBZlYEXCodyPsrgHRaKe6+MqqboR+BV1dV6fCqm4WiLoy5iqfp0qMZKa4epQjW7DIySS+yK9pzCojlPMplaqG8tUZCwLlcyaFU40KlcyYKfYYSVja00qtarmVzYtpGYbBVosrCnD7SvrEfiSrLCmZXds3LSK52Q248a7Jls3pVk1lUe1DpUkBWGQ+Ea6CUqKaVer2k2ooZ1Qv+B4YnC8KTfkgEftIc1AW9E0n/AI0pgv8AxJRDf5oqM7ciKt6BT/kuaXWZGrelJZz5YnUuuJA0Mhk9M01b9ODEB+CWXK7L2U6l2pQ+/wDyzUfLE8buKzPyvqRGLrmJJRHNJ0aQLwUVu8VC1cCSkgaZFUWnZcheD8Cjg6PMqAD6lJq6rbpWFzout54SSnWXFFVLDilC/FKuxidk0E9R99pT6V6VCBJplYriokpRQkpUNMophEnJKI0weYla5VxllS1QyU5oO9AnEjZJhUFOthzIY9i2010XNgWmX8yvrGnMs/h7f8y0dhROSBtovLLMru3oqSyFXVqjRTdlg1RETGiRaKmQaorqmEorqzyjaCTIrgpE9yiCSzNMcooQqp1Eyq6lUCdkHiiggkUVGuL9sOL7qtfRLonvHlWU2jxfdiWYR8yrNo9sBbEhEl51i+0wuSJxxdrw/CX92RHN8nyr/WLD7Q4y46URcIh9lUL5C3InCl5lBfxYSlucxcKudj9jnLxyTxOCPLGUl0alJcYLr2YuMYu7tmXfo/ckLbDbhCRR0kt3sj6FDu81yTjJZeb7tV61sxhVnhojvt2MeYcxf51WqxDadhxv/wBJxuQj4U2Hj62TJkvozWynoisbbK82y4Q6XMxFL/FBv8Js2L0WnG2SFwYiUdJLrj0gtCJNvObt9vMMZRL/AC7JLyTbr0h5pi4JONuSl90VqhjjETKSPd8IxYREmCi2TWXxCjW2IsbwicjGXFmXztiXpSFxlp9ssxDFweLL09is8B9JAy1C42XNqEk5ASypKz3raC7bGO5zDwlLSs3eXpOxa0y6SXl9x6Ss0fq94MvD0/MvWbLE7S5aZuWCzR05sqtgwyKZQ4hgT5EIxiUub1grN43s4IuEQtxc6ZZf817DaOMSEnMxRVLc2YtvO5fWF4iScirY6MLPAtprc24lLTql9rN8ys9isXLeCDmnxK/9Lez4tMb2RZi0ivOtl7iT7YZhHm+6ue5OzR8dI9ytLgt5vJKTcOm+MRllcEpadKjYQy0TMmS0jJziVvhjG8EdzGQlIvCmqTlokIbINwchLfMlFviLUsviplvJZo8IrXbUPxcjqIhHL4VjMTvR3TglIXOUuFLlMZwPOtqmTc3juovLl9lZ3DGC4hkS13yqYkG5kJe0m4XgEsxEQpUZcgZYqZAt3R3JS1DpT3K7xsd5mjpIpZVcWGCyIRIhb1dUuWSDeYeQiQuSHy5VpU6KePRmMcdImRFssol4ZKmrZj9YRcy1V4xJuRRy5R4SVFdMk62O7GTgyIo6sqNTTZnlhaVlK8xFhwhylKIy5VWOsFHVLmirNijhZCHKJd50qbS1bJ5sRkUdRR+0taVmKaaZmbOw4olKWVXFLI5ZuXSI6Vq8MwfeSdytizp05k59gRLeOOSEc27jGXspvxfyRTSM/h1u5lCIi4WZT2bFwSlq5RJWmD3G8JzdsiThZRL+aitwoIiQl3hFliMtXLL9SdDEn7M2WT7orrBghGRCIy4o6fxKTRltvMREXL1KZupbsOIiyiPqx8RKsx/Ce/HvScIR0t5RHzfQtaxpIxznYG9xFwc3dss8Mi9okfDcR3nrnB3DfEWpwvw/rWbvrNtsu/Ii8UpEudllGJNiOkXJfZQSzNdD8eFNWz0nC6luydbcFsfqx1S6svCqlwNRyJx7iIsrf+39yz2H35DlF6Q8XKK0LbltESfuSkWkcwj7I6lfy2tlvFUrRlsUdi4WbeucIiOnzKqFopSf1Fpb4l6thFtbOlG2b/8A5iH7I8SNjGztowMyGTxDl5vZ7VzMuPlZ0YTPOMOYEikOX/6cKsH8aIO6EiIZZizEKM8Ay0jlLhH7X+yV55pzKLYk51aR/wAlzp4IXTRohKS6Za4Jje7czEPNIssfxLe7P7XOFqcJyRRHi/lH9a8kfsRj3bgy4ijFsemRLaYIyIsttNvtk8Q5hbISL2voFavHgoqkTJNyds922LxQnXC3xCRCOXiipF6zJ5w9/LpEYj5iXn2yxk22QuEQx5frC6ulW11iwtZil5RLMkeZ/a3Q/wAffs0rJttCRuubxzlHSPi5lDsseEnJC5ux6uLwrMXe1TW5juXJcojIiWfZx8SIoj3nCPL/AJLzWfKkdnHjT7PfMIvN4P3lbdq8u2Ix12MXh1L0KxvxIRWjxfLjJU2Zs+Bp2uif2JUlFxrcnZmFSFVNoacoVRyWiSq5QsfRd2piWiYDQRcm9qd2qAs6iXsXdiWitFDVyVcqshydRJ2JeFGA1QqcKbSi5XF0VQ4qrhqmyTqVTEyxy5cuRqQJyVIuVkFouSUolREOXLlyhDly5coQYVUopjlUoaVfoFCOoXanOplFTLqx1TT+1CTu1CTiL2pEqWiPkW0J2pO1OrRNqq5A2JVcNUq5EnZLOTapy5WSwaU6pakupVQo5NJKSStFCxEgpV1VRBKpV3YuUKPi6qg3xcP4lNLxe6oV3TqXn4dnRKq78Sqn6K2uKKsuhWiOzLmV7Kx4VFdopVwSiPU6lsiY2iG4ortFMOiiPCt0FoAAVUIxTyqmUojoU+yTaB8RV9hbSp7IFosOp0rPmHwW7LO0ZV1ZsafvKHYK8tB6VzMx0MKCNB0otRUlhsSTyAViNNEGCF2fEVPBpMNsfCpRCA4Ki3Doiplz7yqXm9StIXNqyK/dlwoVHOJK635vKhwRCI9sJQ0jqbUC+BTaAq4oamO3ie24gk0nUQuIcf5JG96UQXFEqSQqqljSZJOiwt348qmNXPUqpmgqWFfiKBp2EpWXDDyk1c6vsqot3YqYw8iUb7HJMntmji5lUGhogH1KuIxMsm3FLYuVUUcUhl1K67DU1Zb0PLlSUH4/Cojb/vKWGbwq7T6DtMaVPj8S6g/GpFo2uqEUMk1slIZRCKiMQpCplVWiiCdPEnB0pXqobVPiSJdlNFvhx/wrQ2NFncPb+JLRWA5VpTVA8S+w6qurRUVnw8KvLYVLAZYs1Re1AbRe1UwbHdqjP1UkqKuuziWZJboYkxTJRnCihO3YjlIlVYrijYyllHmlGPiSODnKkX8nHssTux5lGfxlsRIiJeN7Z7YlaOkdo9vBHVlk35lgL/0pOkUnM3SPq/ZW/H+Jm92Zc35CMdUe94htq0Mo7wo8unzESzWLbRuv+pFsR4ilL/ZeJ4ntl8p/sy6dPmVWztPcsEQ5pahLMOVdvxvxOKNOT2cjP+UnLUUemYhauG85J8SL9GOVVuIbOFGWaXKLklS4JtsxmJ9st8Q5S1SVk1ju97xiXVIo5fMunLx41owR8m5U0U9L5y0KUox4tXlithg+2hbuTF2Tbg8MdRf4Kg2gurZxiTLhNvfWMlml1SXnFzdONuFEopFcejSpM9Xxn0iXbsgeLecIl8UVBabYm04RbxwSLql/ovPXL4uolFK85kPsuz0DFdrHX5ZilxEJLMuvk5ISIvEqi0PvBIVprWwaNsnOKWYZRVtkKWyuvWNZuklbYNvJFH6tW2D7Mtldjmk2UfKvSLLY1poiacKW+ju45pS/vVc62VGEmYNmzfKJ7uMtI5tPMvYfRi9csCW8GQxyihFgAgTNs3EncojLl/6XpI2TTAtgLcnxbzdP+iU/IHxxP2S9lr4nCEnG83F7SvSvW/lZS0iMvFlVRhxyFsWyiRFmy+0I8yjbU4w2244DY8okXh1KpZm0NUaMt6Zb1t1hwCc1erHTy/qXl2x1t3w6SHiJW3pTfcdeZIiyuerb6cuZWuxWCttsTL1hSiMvjMsvbNHo2eyBbpwXC9SQkJDyirlm4FonjYkWYYlL7qhbOCJNiIiUikMepI004wTjbgyHUm9AQ0AxHHJPC66IiI6ZeyslilSceckTY7wpN/xK12puGCcbOUYjEhH8PEs3ekT72UYjw6lnySvodTsfs5hAjelvCFwSlzZVqsHwpsd5vRIm28w8v71V2GGubxoicEYy8yvMWxAhtnGybIpRlHhGWnLRSGkXLszF026V2JMNludRZcoj0oW1IG7kaGJEWbhiI8S2/wCTRGyFxv18RGOnKXN1LO3lqJE4LndjHM4XEXKKfDXYjlJsxTts2LYtOPETgyyjw8siVSzRtgpR1eVaKoNNOd0JETmniKI8SH/4s/duOE53LYjItOnpToONisjfRjrpoRISHNvCzCIxzeJXGF23c5WxzcWrN0/Otdg+xTZCPfd2WUeb9601jsE0xISc3hbuRdMtI5a6lojkS2Z3jvsydhghfJh3mXi1e8X+ypLvZtwXO73jhOavuiPzr1nDsBkO7bzbv1hF1FpUnFrOMmrYSFyIiT0Rj5SJEvIsr4Ezyu5wbcNiTgk393p6iVxhluO53YiPU4Qj3f8AqRfmVviezhtiMpOcUi0iXMq8QJjS2RR05eLmQyzNbQUfHop77AX95InN21wjlEiUyztxEZbneOaZFKLfVH6z+9ExK1K57150ssR3Yl7X61Owu1cId2y9EW8xDlyj1S+ckUfOfQMvBjJ26Kb8iiLhPvZnNIlu4+z+YVW3+x+9c+UvkRCWlsS4eou3/JbV25d3ghEXMpeUUbDLJoSI33Cej6tsSJtsfxJ0s0ZdCY4GrPNbrZru+7b3Y8UfvfOotvs3EpuFlHiL7Ir225BvKW7ZbEdIiMhEubqVYeDtvuERSLd83dtyL/KKtSVF8TJYW06LcmB3Y6eES8SW7o5qIcxZZOFmHy9uValvAHCcykTjYllHSy34fzuftqh49gjY95ckI8oyLeOeUfmEUGSSa0SCaPP79oWoxGUik5ESj72pR8VxBsmYDp4m2xFsi/8Ao59K1GI2wl9SQ8ojxD4i4f1rJ4ngzrbko7tstMtPl/OS5k5XLTNmODM+/dbwYbmPKMiL2lrNmbVsGR3Zd+RZuER8P51W0we5kJNMPOS1PbnKPl+haGxdJhuLbI74fWOOCLjg+GPbRtFCddknjZ6Ls+QsNiROC49HSWYR8vMo2L2b9yU3HNywJadJPeb6RH9izuDOuiM3MolmzEtFbY+1qcH5SQjlEpCyJdXMgz5HJUjRhx6tlezci2RCUR5Rb/8AyfSqPFrYnXCcZdISHhZHL7XESBjV84+/Jx0YyytsiIj4cqosUvLscrJPtjyt8S4nlV0dDG2o2bnZDGN3ECcckJanCJet4HjIE2OYZD1L5NcffbKThODzbxSbTbN1rKy8Ql7X2lyVgyKVwNuPyIONSPtewxZuIiTgjLzKVfmJDlMV8o7Hba3JviJPbwuYuHwr37Za8aFsSezFqLNJehwf2JSezlZEuTa6Ntbs5dUkhux6lDw/GBcKIDERR7q5b5vKKY1xQtO+wwEiUUJq7HmzKY24KqMkyMINF1aLhqkM4plizu1PqhbxPGqstoWtV1CQ7p4QGRKKzdzLKOXmVWWo2ifRL2JoVTlYA6tF3akolV2QXtSEuXK7Ko5cuXV0p0eitBKJK1TRqupRWgB9KpU0aJyNOyHJV1ElERBVy5coQ5dVcuqoQGaUVxJaIgUAdomp7tE0kMg7ES0SUS0ohKsXtXUquSdigKY6SRckGqhG0dVJ2riXUFEmULRJSqck7EZBCom0SyXUqoQXtS1SCnVUIDSVqnVokULEFcuXKEo+L1DuaKWQZVEeFef6ZsbZUPEq25LlVndNqtuhyknx0ZpybRVukoj9epS3aqK90rZEzN0QHVGOpKYdVFqXMtkXoAjlRBrRHdJR6FmTUxT7LLD6LSYdlWdsKZlpMO1fGVZMsh0WX+HcPMr60qqWxBXVmPCudlZ0sJYMDl+6uI04AQLgxisY+Q51wR4vdVddXvL7qC/dSyqGZI0C2GN6WpBIU4UtKqC5Rb7BVEeJNNtGqCeI6VC4oh7ldS36fZVkLJcqLuEDkkXxKc7dCrb+FXpNKO42g+UYkVhMJhsKabahPOI4zsDIhWx8KMFVH34pwuqSQMWyYBcKkNVzSURoxRakqRsiybv0lX+r3VWVeSFcqFORcfKpfxKVbXCoG7kVIYuc2pA22JWto0rLqn27/wAZlnra40xVvZuy1Kkq7NUW0WdHE7sQWSRaoZbGxdoWlE12qc34vupH6pdIIhHRLbUSHREZpmRx7Iixs1obKulUNoKvbOqbZSey9saq7tCVHhyubSqtMkmWIVRJoNuKV0VXISdcnlWQ2ku7mPcEJcwq3xK+3YlvJR5hWG2mxxhsSIX3Gy4ZRJCtuqsTmlS7PM9vNt8QtHCizl4pafEvOrvbe7uSk49ux6dPlFTfSLtENy+XfEQ/a8q8yxC9Jwot6RyxH8S9J4uOMYp8Ujg55yk6tmuDFBL1z5bstRak2zew0bkSlJotW8lHxEP+ioMG2cfucu8bb/8AoS2+C+h590ZfK2Pe/wB11Y5eS/tMksEn3Ior66tBeLcaSLqitBY3LT4tg42y44Q/pBEiip936EL4RImSaf5c0ftVVRifoxxzDxF8rBzd6iJsm3hGPNu61r/knY5punAzZcE49SI+0mF2jT7Yk2TZZSIWy3m7ElHxuxG0ITYud4y8MoxiQ9JKy/8ALxcFwb3DmHLsoiL5SEmxHKIi32dg/wB/zqOAFdjGIttt+sKMsqZkhB/2AxlOC/cg2lzJkd5ElCxWyJwZCKt8Zw7dtju3BLlyxkowOlu4xIeZYJY2ns2wzKjFvUiUSTCJW20FuOodXEqGlUmSofGSkjTbK4bvSlyq/wAPtyKWXy9XMs9s5eiIwEc3NJbnZuwdcF4xEoxjLhkSEMtdnrgmtzJsZCWol6Ew+5Fx93u4iO5HKRERf5rDYPhzjbg776nUUeJaW5dcESLM5p7wRi2PmKnYly6Ci30WmCYo6N62bY945lEeHTqXod5dNNtuG48IuR7wurlXl2A4lEiuXcwtjFsS5i5VcXl62W7K57sY7wh1ZuEf+Vj9myHWzVW2O9yJN92Ijl5i6voWW2l2pG2GLmZxzh5R5lSO41mJ3STmVsZZW2x4iXmu2OMSuSiROE5xEr5NFSNNaYuV3iO9c08I6tOkZcS9dw+wF20bdGLcsoiJZsq8n2EsAb3ZO5iykvS8EvmykIx3IlFvllxIUx0ei5axImibbjlbEil1DzRRyxAiacuXikRfZ5VW4pbDuiLeRlwxkq18nNyLRCUhIdOkh8KuUmkGsaQ97Cyc71tv1glGXCoVoBiMCISclpEeFazZ/ECcLdEMXBGJZeFXDuzwiJG4LbZFmHLmIfF+tZ5NhukiNstbDuWzIhkMtSFVuLgtF9YROEUeXMKkW9k41G2bEnHHCkRDpGWaI/sSbXg0Ii484Ilp3fMXT/qmRlqgU0ytucQ3YkROCMiEfFyisftBipOvEGkW/WZtSdjW0NoO5jm1REuZZNyjjjhHLK4UR08SOWSo37BUEui92auWicek3mERFslvNnWnSZJpyJSIfEs1sBhQi9J5sSFvT1dS3tvIXXjbHUURLLlFVDPqwJYNknCrAWu9uYk2zlbblESLi0rsQfIhc3DYydLvHJRiPCI/7qTidiIsCb70nnCi2zq3f9oXzqPFprdlIojxF9Y54eWn9ak8za0WsVIMGHiwLcnpOatyOkS/F+tVuPXxNFmLvHPVsjEvFIv91OJ9oWXnSInHNRRH3ZLEvYs3LeuN7sZanNRdI/nTFkUVQpxNALrbrLhOPEJcOr3R+glWXUREd4WX7X+qose2gdKJtsi2zpb5S8KrL3GXNxEYi5GTjrmYhHpHmQvImG4qi+mw1IhGMuEdIjzERKh+UFvC3Onl5v8ApZjD2758SKLkXHIssj6y5Lm6RWjphdy23BzuyH1j0pCyX6NsR9cX7k7HKkZ5LRPusZbts7zg6eYvsqBZ7V20pZm2yKIxlJwuYR4Vbl6NiuWW3SGLeoieIpOEWn8/YKqMR9HbDREZPuE42PVq5W4qptNWXFt6L9jExcfbER3rf6PeRHzOD85fsotBavtNCUh3jxaWRkTYl1FxdixWA2jTDgiTZE4Xqxl8RV9eWt2243uGxkQyIiESFn2tSCGdrQx4VWi9cxa5cKDcRlqcERy+1RQsWw5rc94Tt2+OYR0stlzF8+YlHtnDYbcce3r7hFmIcxS5Rj8wihsY6MiJ5ncjwyKRe7qJaYZVLsVPE0DtDcbbI3hJn9GJEOb/AFQ7QTdc3/yYXo5hcfcyj4W/mp/ioWP422USj05iGReUfnWcxDFiLM85u2eFptIyJJ2goNpmmx7EHLmTG/FnmFmO7HzD8yqMNY3ZRak5HijlVQ3ijhx3LIttjyiRE55voVvh2OOiWZtuOmIlEvMscsjbNkXFbZY3rRx7wWyH9H+IuL9iqcZvLmIgy1l5RiMh8I/6qZcv73MTkeURkQoTFmPFejL9C2Mi8xfSKRknJdBLbKS3ccEpPblj+zEsw+z+9Q9or/eD3JafrBcjL2lb4phpCPctiUuIvwkshjLO6kJOCJFwksy2tmlaVGfu6lIpd4X/ANJKru3Cj1J122W8lIfayqJdOEP8KbBVsyZdsu9iMSJq5EnPeJfSmxG1DZMiGqWqOn/cl8hsuETks2Xw/aXr/ozvrkibi22LY8znvK3rYzFk1R9QYBiROFFsSj4YrTXBhGThR94l5Zg+MuC3FuLhdOnzF2LUYTfZe+iRcUiyimRnyQTjstXb1sczcnPEqjEfSQxbZXNQ/HCqTajFJS3e6ZEeInPu/SvMXLdty5k8QvjLNqFv3lXGTloCXR6u/wClsSGTLJF8dVFJwPbEnSm6Qtj1cPlXk20WIi23C2bER6cyiYXjO7b0k85wjwj8f1LYsaS32ZLk5aPo6wx9tzMLmXmJTvyyJaXB+6vmT/zG5aKT2keERiIqRX0o5YyzcOXKKbDxpPd6Bn5Cjpo+h7nEm4kTzwx4R5vLxJuFOuGUhyt/aHzaV4Tgu27ZODvHt8ReyK9g2Pu3LuJNx3I6i5f4kzJ40UrRUc7k9dG0ZfUkDkhW7A6R9pSYCsrjQdnUJKgVThdVLZGg3YlTKEn0qmEOXUXdq5WpA0dSiVJVKjsAcNU5MpVLSqJMg5KkpVKmJkOXLlyshySqVJVQgFxE7E0k6qJlIE5RN7ErtU2tUuyrYtKLu1NrVOElCjq1XUqk7V1KqBNKhaLu1JUk2ihSQ/tTarqJVdBcUM7F1EtUgo10VoVcu7E6tFGyhKCkqnDVNqhTImd2Lk4kxHZaZ1Uq7tXVopZLPjGSh3FVaUYUW6t+ZeeWza4Gfu6Ksui6Ve3LHiVZdMp0Z+jPKNKyhuPguVRDkrS5ZUA21thOkY5fZXuioRj0q0MFDeZWuHQDK402gI7gIJ0TkJl2WNiMVpcNp1F9pZbDx6pLVYWOlZc64sbi6NBhzivGaqqwq2lHLJXNAH+FcybtnTxOlsIT8RUK7c1IzpcMVFcaLlWdxG3fRDLUmxU8GUQWOlWiqK+iKLasPk4patiqst6REFpSWmI8qJU0B99C3YUQpCmqGd8o5XUeFA0wieRJqgUu0w7skEnQXIk3IqjxCubwo91fdSpsQvU3H0KyOtDjuE8LhUr97mzIbdzypvBsTzSNQ1ceFHpdKgYuEWl1FL4jozp2WD7vTFDo6q56/UNy9RgTypbLyl51IzV5yksyF51KTaPy+IoOIqOV2bKxuObMtHhh8Kx2FuZVrMLOXMkzZvhO0X7AEpoMIVjX2la2zSVyNUVRC3EkwrZXgsoZ28lQRnnmiXMsK5ds0jdsogFKx1iwre0FR7a3JWLDaNMMnWFFdW1FU2+WKtGKq+RCyaTHRjxEmNmuuHo6kDnsmiqxO5bESIhIvLJfNfpr2nJ17cMsxj5Sll5fnXuWN7StlvhbKLLZRce4iLlbHiXi202IN79w22Iy+sKJOF4i+gf7l0/x3jSm+b6+zj+blVcV2eX2WyrrjZOvluyLh6f8UdnZxpvUX4le315ISiUVUPucxL0lqKs5UVKwzToterkrWx2ocbIcxDFUTZiXEhPC2rj5HIOeJ1aPZdhfSIQuCLxDEuIv+l7lgW1rDgiIxzcPDFfFVvcE3GMijpXsPo4xjeRylLqJXPO4O1/1DxYoZI8ZHo3pV9FGH4uw5eYe1ub1vM4LchF7Tw+X8yyWHYHhbuEvNNiNpctxbeEt233glHu29ThftqvXNjsQIHWpFlLKQ9JLG+kT0YOljo4jZC21bNkLpERRkUdIj29pV/uXU8LLjn336f8ArTX/ALHE/IYJY5fweDekjDCYcbCXdiOUSGJZY6upYlyjkc3vL03004sdzcll7llyO83eUnMso/sXl91cNiRRzS5v+0flQjGbF+O21opsTbL2upUpMxKKvcRCWaQ9PEoVA6ZFyrkZPo62Nasn7K4cZFIeLSPMvdSqWH2DLDbcpNiTz3KTi8v2UadGI2jO8uXh1ad2PFmL5h/arbHcUuyb3VzcjlIZN834kgcmegbJ3zbokw88LbZSJ14hll5R/wB1o74W3WGba27m2IcpcTubV1fOvH7y63vya2tt2OWTjg5W2x4t4RdklvMA2maYFtoe+FtuIvcTnhl8wj2oXHQUZEg7RtohBxwe7zCMhkXUSpcbvCdcIicIhHi4VV4hiZOOOPuRzFlzRER5R5v21VDimNtEMR0jqjzLHxdujTytAMe2hcaGLbkpSyl/0sbaXBk9vSIZS4vwpMcv5FlGUlDw3VLNLpRPE6sROTTPZtmb7uxFss27zFpHyrb7AvNORtnBjuyJwnJFm1LzPYqg5d5LTlEsq9R2Ks43IllHd5iGIlKXUsyi7NsOka5zK+2QxJkdQ9XDqVvbYHNwrlwots6o8RFlEf7lCunGxcb30R1OEOnwirfZ6/37jg/UNxciJZSLhT0rDnOkS7LD2m23nRyuDHxOEWlObxNgy3Dwyf8ArCllEeER6lHxAt2ThNvas0f7Qssf8PzrPnd/JHCO5iTzhZRb1f6oMqSAhPkbm/vhbKcolGLPUPEXSvLtvsfY7wniEhbytiI6S6eZN2l27b326kIuR9WWlseouzMS8c2txty5uSBspZuHT5RSWw63ZMtyG5uSIi8Jcq3eCW8t2Ixy5R05i8yyGyGAObwRcbzEQy6vZqvWdntmxbeZPSJFGKzS5SZpSVFlh+Gk0TJPFmKJZerhire0tz3g5tTkhH7KtMQtN5nFsZCWkuERER/r/PHtTTYJxiRFu3Hii2WaQiOqKYk0i0qVlPjl62LhNb0SIS70h5uUS/UgYxi7YtCTYiQiMebMSr8SwEmmXBYcL+2cLV1ZiRbK3tnGxlKTcRb6uEYiPzc3bVWmLoqcTv7kRGIybczcoxHV/n+ZMe2dHdjdXJSJ71LcsrY8RdSvb+xInms2UR7trpHUSl3tqw5u9+5vIjHciRDm4RHp/PX+tHHoCboqLO0bNmW7k36tsiEYjHUUVFvcPaIhEWd23pkUZF1R7dKXG8RdbfbEZM22XKIjp82ldW5adzPk42wJZREu8eEerh+dFZXKy4bbatGxIRHeEOoi0+Xh7VVsmJELty9pLuWeEfZWVx7EpOd3IW4y6Rb6i4iWSudq3yf3Vo0TgtjqylHq+haYy/UyZGrPandoMwtZnCjlccluxHiKPESj3N8wUR3jbctREUiLmLp/YvMr63xRvdnclu3nh7tnLIR8I/qQBwe5LvHJCXMQ5vKglKfqIeJpXs9XwBqzF+TDm+fc1Fwsj4i09v6lb4yLUhFgsw6nCLux/wDyEvIcMq/bDuyHdiWbLHvC5i/OS0YbTCWUotkPCQyl5R+ZRNe0Nj3ZdX9wJFupOPCObuxIW/ZHsp/mspiFh8pKIyyyiPL4i+hXdMYYdbEHCKJSIhHuWy8zfZUv2IY3okO7beYtBLTlIiLxEgcZenofa9ozVns4Qk4Tzg5eUS+0qDG2H95BhkoiXrCjGP716a6yMY/K9+XK2MRHy8Sqq7wiIB3bY8ThNjL2iqs82urBjCldGHxC5fbEW99mj6tmIiqli9fIik57IyJb3GcE3pRbERcLikIl7XaqxzZFtjO884ThfVtj97t7VknNj44rAWN66I7sYsiWpx4pF5RFSwfMsrbjbhDqcL/tQXMMf1blwR6uXxITAmRELchjqKUftJOTI6HQwJMuL1m5jmcbiWr47aLL4/gzbgy3gt8xEJF7K0jbb4tyk2XVlWexq4IsrxNl4RS+bJKFI8+xGwiRd95oxUFygjxES0OMi23pbEfEUpfhWdcNwiytiIrZjk6s507sbcvNlERHdxGJRHV1ErLZzFyYc1FHzfZUChOjw5VKtreRSLT4lWXaKj2ez7H7USFvdtvlwylER8vEvSsLvJjm82ZeF4RiLAttgyWblkvQ8CuxJse+EvFqSoSaNyRpcbBuJbsmxLmcLKsHtE8LY+slxSb/AIaLVPhLKTjRDyl+FY7amjkcrjRD0jH7S0862LljtEW0x0d3EZEXElK93YluyFvLmIlkGX+8jLTyqLjLbhZsxJ3PkuxOlotr+6kLknZcubKsteXcssoj4lCdbLSRRHxIdzEoxT8fkOKpGXJiUnZbYNf98I7yLcpEvo/0Y7auvizZ20mbZsYk8X4RXy/atRzF5RV3b7YPsDBhxxvw/e+ZNl5H67BhicXaPvrDMTYARHeTLmlxKwpdCfF2dK+Itm/SLeN7uT7hez/svQrT0sOk2ItubstJR+98yzPPZqjj/g+nnHQHUYio1aiRDHN1LxnZTa4ndT0iLV1ebhXoOF4zLLEi6f4lFkRJQdGzBOmqT5U5HLlSsXEdUiJF8iAUGXtaru1QW7oU+j6NMBqiXQktaqLvUlHVa7FEylUnaom9TqXCcQlBVEooFbhdv1alRCdJLJV9bhLR9HYLdE/tTDqoRXKZW7R0WTCoi0qqql4jDdZVH0CSHa+FD7VErdpBuEnkEibSq5Q991JPlCNNUWTaLlFF7qXfKOpDyIShJcoYvpCeJWpEJ3aurVQq3CZW4VpkJy6Sgb/qTd+pYD7LGppKkPMoFbhJV5VZCwkPMk3qgUdSfKFCFjUkk1X1eSVeRJWQsKml3qrBeTqvIWQ+YKsoFzb6sv4ldCyo9w2uJA6Jlbq2VPe2/TH7S1d01qVVe26ZQmeN1oylwx1e6q54P5lorlqPFL3VV3Da0RZiljZSOCoNyCtrgVX3QrdiexMuipdFRzU64pFQXaS/mWoQWGFjxLX4KKx+GVzR0rZYecR+8suZP2PxGls6xHMj7yWVUzNwreyDiXOyKmbovkqJzDSLW2Ui1BTaMrHkbs0f4Kv5N05U42o+yrB1riJQ3GUu2QhuuZco5kAqlxeyp1WviKikMVVl19gSoorgyUknEOpcX8yNIjl9EAxQ60Ux2o8yiHUR+BVg83YEwFRnnBEV11cqrun+pWqYvJlfoW9uOlUN5cI17cdSpby5TowaYmeRt76GXNxmQm7xV9w6o9HlrcLQqM9mmC96syX5eSord1Fo8s/ChnyfyWp3SAT6gm+hE8mxxJi3NsljclJW1hccqy2/U2zueqKCeKtokXs3+F3Ola7C7nTmXmmH3ulavCb5ZsmPRvxTR6XhdxlEpLQWt31LzzDbz+Vaexv8oisTjR0Y5F0bO2cR6AqCxuupWzD/AFKg+aJLjKHRhSGzRaVS3aIqfQJsVKbonNh1I9BU5NBBGBVixRQGz4ZKQ26hc2yFgNV5N6bvSB8kErO2ISfcHviEvVjly/R2Sqtltljw2dk+6WoR7sepfJWO3xXL7j7uZwiIlt8Xx/l2zH5eVx0i0HaVwhzF3Y6YrX+hzALbHrx61vsU/J8RHdNiLZPXJFLK2TmUeyP66rya4u46VVflAm323WyJtxspCQ6hIV6/x4RjFRPO+TOaTr/z+D6V9Jv9H26w62fvLK7G/tmhkTZN7p8R/OXZKBf3L58urrMQkS+gsF/pOCWCHaYhaE/c7rdb8SyuDpk4PZqXzk64LrxE3lEiIo+Za3Djj3V2+va+/wCDBDNKeVLajSu/T3q/f+Q7TxcKkNpLWyH9Ijm1u1mcXE6MWmDuCi2t76M3XIjEiGXxxLz9tkn3BHSK9G2ZsIiIyLLxCkZ5a2afGjbPVWMYg2MuFLjeO4nfMb+QtsAJCLhEIkQjl7se2Rft7FkG5OOCwO8kWnmJSfSBjRjZDZ2TZMbtvv3CzPF4SJdX8NCSTl6Ob+clB1H2eXekXaAXSFhvLu5C4RZiIuIiLmWAocpZtKscWYE3oNEXM4ThZvEqZ9qJR4eriU8vM27Mfh4XxDfKxbcEhbyj5pKTvhcGZDEiLLL3k3DbYdTjZOR1R0iPUh3tzvHOEW8otjyiK592dDaL62xkmvVllIYlmj5UCwxASfJ18pN8v3VT3ZaQ9kf4UC4t3AIZcWaIoWNRe1xaLxETMm5SFvNEo6Zcw0/qV7hWNtk2ROjIi0tjlEvZ7MtP1LJtNuEPTzJ0CGUfs/ZUcHJEui0xPE5FmIojpbHSqS4uZFIcvLFTbDCnXc7mVseLUXsqe1hYuFliMcsh+NSWsVMKOR+jLG0RF91bTYzBRESN6QjHlyj/ABLT7P8Ao8k3v3IiOoZRIsuoi+davCrVsWcoyZEspODGXDl/5TJRVFp29kXBbUTbHdt+rHKWlavDbtq0bF1zNxbscso6ZEmsUAi7st3bNiI6hk8X3RVbtA1bNud48LjhR0kRC2PKP+6xuJqUjWWeNjeWjhlu2+ZzLKOotX9X6lJwrFmyFz5MJC22IkTkize0srabQ23dgTYkzpJsZE457PCpOL7R79sWLRncM5nHCjEWxHSKVK60NW+ydTakhegy3vHCkWbVLq5Rosxjm0ptSfuYyIi3eWROOD1dmmirLbGxb3hb6T0S3jnDEuEVjdptoDu3G95lZbGLJasvF/mkSb9l6XRDxXHH3HHHXCHeF05le7GYI++/PMIiMiIh6f8AdZvD7PeuR1R4h/CvVrGrjTTLTEYvCIk4P3ktvQ3HG9m02GIWnBN5veRHM5ylw+Ja+zNoX3C3nDIeKPV/oshheFvjh1zKTZRGJcwyzRVnsNehEWIkThFmly/4K4Nrs0ckbf5VFkc0RdzdUepU2J4yO+Y3Y9y3ly8RFwqNjbwu3bgC5FtlsScy5RkOUVib/HGt/uilFvNGWXTqIh/cpJv2BbNnjrjm7Ihc3ci0xlL2f9UKwYIBm45EhGWbNGX/AAsDZYlG7mTnc6hkXxWKrGtp3Cuxdeek22445HmLhGP6lcUC2ep4ziIt2z7oiIvkIttuaiEeX+oe36e1U9liIMWTly8RPP5RH9GwPN/aHX+pYvGNuvlbkByttiREWkic4fzfmUSrlzc4XFkosMvd4RFEnCIpft+ZHX0Lm/s7aPady5fER4iyjLN5o/MpOI4NduWzHeEJPObtsdJR4iW39C/o7Ebkrm5b3xbsdQ5RlKX5+z6F6Lh1vZ3d/MWRjaFumBLLJ4tRCPF2UknRwWhLyr2ZfA/RiLGHTfHfPOCMZDmInOER7cy0myXoztrNnf3LYk/qFrhlwiXz5uz6VuheLejl3kSiI5RFvLzcPZT51Q7S7SMG6LYvCMZSjKRR4RLhp+taceNITKmypuMCaFxx8hF17UTjhSzcI5vmEafR8yodocDIW9/ue8c0uOD7rLP+te1aKmKN5d5KP1bYxJxzwj9WP66qo2q2uF0SDdiTg8LZbxwR5SL6G0509WDfEwpYa2LZOPvxe1EURIh6W1nr21HULMh4RIokX+pftVztDe93vHmN3yst5iLlJwvoWExLaIi1FFzhFnl5SJLn48X0FHO12GxEyHS36vTyj7PzJljjojkciJcxDL2fpiqS/wBoJZXCiPLLMRfeVVeSIpR94fsrJk8Wa2huPy4s9RwrFmnBgJRHiKWr9ylA+AlFtl16PLlFeW2mOFbREt3m4uJaDBduN3lFwiEtTe7y/uXNzfq9nSxTi0bR29InMts2MeInM3+iltPCQjvXM3S2Tnvdv7lnrPE23XJbss2bStQw+Qj3MR/+jZD/AMLLkaRthD3RWXlgThZXHCb6ijlVZfW+7yiIxLiIZLU713MLhCPhiX+6rrtkSKUnHyHljH2UlzTGOO9Gdum3d3qj4RiqG/s8pEROPEPSIitpf13gx3MS5ZR90VS3Vq4I+pHyrOpNvRPhPOsQt2yLMOblKOVVbtkUu7EfFlJXW0L0XJbvL7SBh57wotyGXStmPI6MOXFGRSu2bglEooLlq4WXfe7lWovMFd4vaFV52wtDFwikmKfIzy8ehmAtC0WZz3VvcKxRoY5iIi8IivPGilllLq0q+wa1ESEi7wvEKodCLSPU8Ls232xLLLxS/wBe1Ve09g6IxJqTY8UiRcCfOPdtiIjlykKO/ek4RCRCQjwi5JW5aHqKZ5niNsQFIWyHqIoj7PaqTE7hyJd55R1L0Lam1Em/Vx6hGS82xQxFwhGRR1FGK0YmmYvIjw2jOXlXJZiJSGHi0kSBiDstQufdUYCGPKnuDRgjk3svHnojIiFVJXZalHM/Mo5Ep8bY9ztaLvCL+JSIvKtbg+LbwtQtiPx+1edNlxSR/l+WMkE19Awyyh/J65Z7WONEO50iXT96i3uC+kB/djFyJf2mZfO1jdcW8yqfa4+RZVlfO9G2Mk1+x9a7P7c7yIk8RFxCt5hu0AmOYiXx9s9tW61ERjHxL1TZPbWeVyUuZVHLL2U8erPcDxwRL1hKXY7StFlIsy88auG3RzFLpkmVdFsZCPsp8cz9CHjTZ66ziIlpISRxeXio7SOt5myKPh/Epln6S4lF5kvFw/uWlZrKlhSVnr1X+pNJ5YKz29tD4o+L/pWbO1FtLK6PVmijU2J4o1XyjqXfK+pUQ4w2Q5XB91Oau5cXsouRKS6LgrhcFzLiVRV5N3qNZEBKL7Lg7iKaVz1Kq+UdSdvU35inEsKPJ9X+pVW9S/KEMsqRSg/ZYlcJvylVp3HhTBuEl5LGxxlyNwu3/UqilwnBdKuY1QVdFrV9LS4VWTyH8oRJ12BwZcjcJjjqqaXHUlrcpkZp9Aygyzq8kO4VVvuoklbhW5USMC0rcJnyhVZXCTfKuYDjstq3PUuG4VSLy6ryvmyuJb0dTK3CraXHiSE8q+QpRLT5R1JpPKtq4kF1T5WmTiWm/XUe6lWbxDI4q3ksvieZnbqNcsK1KPModyYiuOmb2Z67ts3Sqi+YV5ev6s2lUV6/IcubxJkVsXJ0ilvmlXPM9IqyfqPmUO4LLqToN2ZZMobtr+ZVF00r66PpVPfH0xW/HJ2ZWtFO+KrjpFWV0q9xbUZmS8N1SWhtnpRjmWWZNaHCa6VnzjY66NVhVvLpWrw6205vdWWwu4zaVpbC7jxfH+C5OWJuwr2aZhpSqW+VVlredWbwxU9q58yyM1RQ163JR3GY6vso15dxHlIlU3WJdXupTlTCpCXJiqe9dQL/ABLpVRe3pc3mkmJWgHJhLm7EeLyoLV1Li+6qy4dlxJjd1FN46ALY7hQXXuqKivXKhXFzJWoWBKdBLq56lVXj/NFEedVVeuSTYxSM0psbcXHKqq6eFPeNQLiuZaseNPsRYJ+qjHVFOSHWi0OFItBWHEYHFEpRKg4IJEonEInUxISiikQWpIjJoKWlVUoWgui5s7wRV/hmIDlWKAlKZuyFZ546GwyU9nqFpjAiI5lf4VjojxLx9jEiHUrazxscub4/wWTLiTVex8PIbke34ZjPF+FXlviw5cy8aw3F8ur7K0VlimWO89pZPiaNvyo9XZxIeYlLtsR9peZ2WLlHUraxxYeIkiYzHPR6Mxfj1IxYgMVhQxWOlGcxXikljObNg3iAlqRxxAeZYL8tZtQxRQxbKROEW7bGRLT4/iPNkUIi8/krFG2Uvp9xwtw20JZS4fZ4l4M44S2HpMx0bt6TYxEdOaWXKsTcO5V6KHjx8Z8DmufzLmyHevKrkpL6gual0cRgmrYWrmVK08Q6SigURmGyT7SFy3ovsKxYhykIuFzEptcWbIol7qzpjHMiYcyROSLT4kmea+w8eFJaPR9l6MZTylFbf5U0JDHVFeZYS8LekvKvRfR1s1eX074cN+U2VtmdN97cMOEP1YkPzuV/UNFmalnmoxX+pqjOOCHKbNx6Omt4Vzc6hai2RZZDzR/OvP8A0vbVRJy2tHItues7sZR8SsMb26Ytm32xbG2ceLMyzIWxj/dmHsXimN4yTrrhSKJFLm+0vVvj42BQvfs8y5PyMrk+vRErqlmlzKC/WTkeVHm645xF4Ue3wpxxwRKQyXnsmRN6dnXxY+MQR4iQskDZREtQjll4lX25RIS1FKSvi2fzZi0qUxYbvLuREi5uEUFhuNlS0EiIy9Z9lSxtyLhIpFH4JT2WWwlJuXhyq5tcXa3gkIiJM6RHTLiKJcVFRdaBW+CujECbKRaRFXVrgzbWV2O81RESKPs8ShU2wFtwjcFxz9HwiRfvEUO52nJ1siZEWHI6hzEX+SbGSiJ4WXWEW7TmVxvdtiWYeIvFyj+qivceZYabb3DI7wv/APMeHNxF+xebYPj5NEROSLpyiMuZXTu2Pdlpl/8AMSKXTKnYP7VJ5Ew8ceJsrN4vknrs31gyiIiPMqdu+3rjbDjjjjMswtiWnhHKs2OKu3OVx8W29RNjpHxR1ErFna3cCO7zREhb3Yx94qav2pMp2MRf4jiUbvdkMWGRzNlKQx0jEVQBiW9u3t0IjL6x4pbseGI8JKluNoNRvai+rlJz2uxV442Lhd2wLY8Lepxwi4icSGNs3Gz+ODbE8HrN5qyxHzOF88f1UXX+1Qgw8DZeuLNHl5foWFxK6fkJuiIx+rkO7Hpyqpv8XIikMfZ+yKzzVqg4Tpl7dYrqEeL2U1ishEizR8qz290l8fuVxZvxHNmHpWeUKNEJKRpsMZc74m8wjHTqzLXbOHG2ExIm4uRKX8Sy2C3cmSBsYuahzf8AC1OzV2Tts4JDlbIeHNKXElsdE397tGXyRkN2WZvvCLxKjwq8ctnC3bkd8UpatPCKz19ihPvttbst2I83Ki3+JtE22JEQ7sSk5+FSw7NJfbRkDZR7yTneFl7wuGXzfmWFx3akW5SERKXDxf5KC9fkLAxclIi3Y8UZaiJZu4Z3hFvJdREmOPJFPJQd3aZ8iInCyjpFVI4ybjmrzcqiX7ER6eFX3o82bK8cIREiLUXCIinxwa2YcmZt6NL6NNlncQu2xHebtyXeeFe4VwBuzFhhspNyk5LMLhJfRbYsWLbIfWE29mLUJZleVbIn5XJREWyeEcuWOnT/AFp8cSQDm2i6xTH91aDbMRbIW9454i0iRdn50ux1t8mbcu3nm3HBbKJFpbcc1R5o0IvZXmnpD2ibBsm4yu7sh3LYjmyxjm/YqbaC/ftrJlp+59YIt7gSzEThDp6v66/1JySiinKz0TFNsjNwWrDNKUnCKLceJ1z88a/1LJ4njTVo84RXPyu5czRb0+aPbRsVjbm8bthcaedJhshk4LfLyk5868yx7HxInDaLciRd23qKI8RFxEs08vpDIpVbPZ77bEREn7t8nHC9XaMZRH/7Of59lFmbnbRxxtx11/5JbFm3bIiTzxDw/wBYj+teR/LDdiROFHNEfvEjjYjHeuPt5dIkWlNx/Znbs0uL7buujAXS3fDvCWff2iciW7KRcUREY+H86obtxsi9YXsxQwcER4fEWZaE7Ksu8GoRuZiISItRail1F8629pYttNjFyTxcOohXmlvclL1wj4RWgwDFW2/rCIvZScsZMrFNWXmL4aRDJx8R5Rjm91VzVCYIe8zf2g/dWowXF2CGUR3nVxeZGxEPlJEDgtt5dIxyjzSWSSi1xa2boOSfJC4HtKRRBwh8uVeiYBi0hjIo9Wb/AJXh93YlaOd29vBEltNntpiIWxJvMOWUspeVcPy48ZOjteN5DaqR6VdX7cojvJF0l9pAZthzFu3B932lW4djmYRcHL4VoGbxuOVws2WJf9LlvbOnGCaspnpyiwyRF1fxId0wRNlvC3ZR1SU/ELGOYScES4hzD/uKhG800JbzeEJK1JLQTWjy7GHO8cGIuZtSbhhODLdll8Ks9p67x4iZYiJcQ8XiVA0wROEIk438cK1R6ObKNSNps9pk+Rbvwy+ygYzZNuDJlkSj05vMKl7NVLdxJzVpIhWutbMd337bbn9s25Eo9QpUcnF0NljUkeJ32HOtkUmY8Sm4G1zDm5SW/wAdYbzRblH+0+KrPNEQ/VyHhGS0rKhMYU6LGwxHdDu3GiEemOb8KsGL5gsosueLeKncYuXNOnlyq2w7Z8yHVm6kXyJ6CcePQoBIcrch5XHNXlWH20sSIpRbbEuESHT5aLeYhhbg6ij4Y/8AapL2ybHM48PmFNxTpiMsOSPHcWHd5RIvMqeWbNJekbS2AEPciPilFef4uyQkUikurinyOTmhxYOSjmXUhCaG6Ke4qxNkiSYRoUkMqpaxoeWDLye27mVZvUVp1R4/oueV0anDL0h5vaWqwvGSy7sokvNWrouFWeH3xCWmXsrJnwOtDMXl7pnt+z2POgQkTko8Ikt1he1ouN5hzaYy+18y8KwXGSLLEVsrXO13eVzxLP4v+6f7GzJH5I/qenjtQ3pIRj1f9J44jZnlcjmXiL+KutkQuD4SFOtcc5iLzf8AS7OH45M5Epyjpnr2KnZkJblwZcJLIXVzAo7zL0yVDTFR5t37yh3r5c3srZ8UPoS5tnouBbQbuOYi8RLc4LtPLT91fOzF9H1hRV/g2NEJZXEnJjiui4ZGj6Uw7FCcU8HpdK8u2Jxs3MpZvDwr0XD7qUR4lgyaN8JXEmhVFmuAU8gQ8gliG0rzJs06rabu1UpBxgkNqaYNUSoJN11ILLcW+hBJITo8qRwEwwyqWTiLv1wvoMEiqyUH3/tLidQaV5l3arUmWooIT6TeISUUakU4ofV1MJ5cSRU5sB40PJ1PA0CtE8CVKTBWPew9SXAaHJEbqikxqikOXdqStF3Yrh0U4piVqXMkqSJUUhUVtsW8bPMn78eZU2IX/V5dSo7jEfFHmVVd4nm1Ln447Lyy0XF7d9Spry9EuX2lUP4jmkRKtubzVEvKnQjJGd5U0WtxdjzD7UlFK55VRne5kArrMtMIPsTOSos7m5lJVVySRx7mJQHXFqh2IbG3NMygu0RHzUVw+pbl0Jl2FZV1hz0VnxJTrd5Kyw5IqH6mwsLvN/Er2wvIllJYG2u+pWdtf9S5OWMjfiyo9FtMQ5lZMYkPDm8S86ZxQR8SOGOx4hHzLE4s2KaRs8TxH4zLPYhifVmVHcYxLi9kvvKqu76UuZT4bBeVFtc4j1Kuu8Qyqgu75V71wXMnwwcTPLNo0JYj/Ko7mJEXEqCt11JCeTVBIBTb7L53Ey8yA5eFxKnacRAqSvoXKdkl28LmUY3CThFOFqSYoXsrshnRBcBXNLVEbsfEjhPY1QSVGf3KT5KtTTDelGbwoekU2U/orgzH0tEdqyWu/JAy05V1MNEUpZb0FGNMypWRLq2BLV/k7pKPMn/kxFzS0F8ak7MWVokpZktfXDS8KGeHKfJ/Iv4zJlbEKaTC0pYegOWHwKpzTI8bRSbhODKrf5D1JvyJKmyfG2MsruOpXdlekPFIVTVZRhrFZpw5D1Kka21xHT/KrFm8LUPsyWHYuSHiR2rxJlgfLYxZFJaPRbTF+bKSIWMFFYCl8SktXpc33lP6f6HLM+jYflP2vCj4rdF8gIhezOZYxEVkAxHVEsxcXKrbCrkXWYk5Ih95d/8AFeP8abfZyPOzObozWLWcWBPVLUUcqztzSS9F2pbnZRb9Y3w8y81N0uIU3ysDtSS9DvFzRUeN/wChGdaUbdKy3glqiKEQD/Ks2PI1pjZ44vaIW7Uy2okAUStZZRypssjsH4lRHuBJxyIjlWz9H2xl5id23Z4e1vXTzcrbY8TjjhfMI0WesbIh05i9pej+jPavEsK3/wCTSFo3xEXCJtsiERlxOU05vzJ2LH8jqT0Zs2Vwj+q2e2bP+gTD8KaC82hxJp4mxInLYGxG38O8KsnK/r7KLH+mL0wA7bBhmANFaWdtkHdyETHKXYI9nb9Mlh9pMevL4pYpevulmIeXyiPZRV1odmEd9mKWpyWX2V0PkjhX67a99V/hf92cxYcmefKbpfXf/Nv/ANFSMvcYO+/J18surNqS0w1sBkI7whW4faY3LhC5vBIcurKse7cC2U23IlL41LFkzSm7kzdHFCH9qEtHB0k3ElEuHO+lvBLp0/aQ74yORi8JF1RFVpgZavtCs9Uxylotfyq2JRc/EoVxiRSLN4elVxDzakG4Py+ZRslWSn3Sc1FIkS2xEmpRGJRjLKUVTVc6l3aSib+gSZdXRFxSL4/uQWr0h4tWrMlZtSLhRm8IcLMQlHmiUUy70iP+QBPeJEtXSiXL8cXYpVMFc8XmTgw0hFTgwFONXZEtnil08Skv4qRZRyiOlFZso5nB8KcVv0iIlqJT42R5IpdkHfx1RL3kx5wdRFHpFSHrMfq1Fdw53VwoZRaJGal0RjuiLiKKaL6I7ZOCMiEvL/CoB1SpQdGqEWyyZfV5hByyy9rSsxbGrO3ezCSRKLHL9TcW7O7ISbIhIdS0ezuIFImIiMpFxZoiRSWJtn9Ii4Rbzm1CtbgFm1Id45qykQ8Mv80pxblRPkLLDGSd3jouZeEUDE7Rx9sRjuxEs3V4ulaTDN3ZjESbcJwu7EuXxK37WpFvx9aMpCWXLwpsMFlPN/Jir/C2hab3Y+9mcLmjwjRVD+DO7kjzC23q5SJbmysW3XHHIxba4pEQiPCPiqj7SYgLlsy1aMxbHK23mlItTrhf6Ldi8eN2zNkzOjyAbYnXs2Uer7q9Y9DWGtti4UZe1pzfr7IrIO4ITbgi5ljqVy1jvya0uSZciTe7bFvTvJFw/nRyjuxUL7Z7FcXbDZMuxluyKIjw5enSq/aLF95YN3TbgiLzhNlzFEtKwuHY8Ldo4683InGxjIiLMXD/AFLLWGNvkzbNP5WN+45LizFm8I0S5LYznui2xLGv/wBTbdGTzjcRiWkcqqr+6uSxErl8hEsxNuFHu5DGQj9A/N830Kix/ExbvR+TF3ci6h6dSpNsMQffKMottjIox1FzJEm/oOl9lpflvN8bj++zR3kuIuXmWauQFuREMmx4i+7zKFaXB7st4RRb0j1KPf3cmxJwt4Q+rHhFIdsLmOrfao+XMo5XZDxKuO4TAJbMSpCnFk7ec34UySBvF1C6k6wWmSSckpFo5FQaUTqtlzKPohp8PuhkMXIktVg2J7pyW83nVmJeYsux1K0tsRjxFm0rLkxtbCi6Z63fuBcjqISLmH/qKpblsWI92QlzDvIqowTHnYwylLm1K+wm+cMt29lHpzF/suX5CddHRwyVonbOY0IlF59wR8xCK9XwbEWHGx3bgufa95ePY9h4tiJsReEtQxiQ+VS8AxAm4j6svMuN5Hj8U5RO7g8lx09nseId43Ee7LiHN935lmrxlshICcIS4SirjZi+nGRbzmzSVjilo0UikXNHlWBbOgpckeTXrgjIc28HTmL7P0KuzuRj7MR/4WtxjBRceyuauYcwqsxLChEoNy3nNJaITSMeTG7LDCcNyyIolyj/ANrV4czvG47kvZyl+JZfALcxGLglIepXzF/ciXqd435ZD5kqUrZeOGiPjOAyEspNj08Kq7XZ3diRNvSLlcFayxfdLMMijwkj3snI5Y8xfiUT0E8SezDOtZouOC2XiJWtvvWIkTzcfFKSsrzBMsiFtwuEhKPu9qgmw2LemRDzJnNlNNBX3idHMQj1Cq2/wJsx9cJCKn4fuyykzlLiEsoor+DDLLFseLvNX+a1QlrQiUeXZh8bwpohi25p1RFYrGMAab9Y4Wbm/wC161iD7TAkI6unNH/JY7FcPcuZELjeXiJtbMGZ8ujnZsaR4xfsbsiH2VAI1q9qMKcbczOCXhEllblopfwruY5clo5klTAGa4CTYLkyMaKgrYQqpk0taptFbQ9x+x4uqUxcqH2Lu1A4X2A4r0aHDsWJshKS1WG7akMREfN8UXmouKZaXOZJngiwo5p4+2exu3g3bIlERc6VS3FCaLMMVX7OYtGMvaW7pZt3jWWJOe95Vz3KWF3Lo0cI5otxZSYVct/WDIenhVjc2okMm3FRYtgbjBZZRH4zJ1vihDqXY8bMpxuzmZIOOpEZ+hCRcSl4ffRyqI69vOJRahElonBMSpO9HpmxW07bDwi4W7lxCvednsUF1tshcbcy+FfITJkvQPR5teVs6IukQtkQiufnxuJrw5HfZ9R2+ZSKKk2dvBdZE2XJCrgCWRxo6cdxsdSqSS6qUaKixIriTqpnYoHEGdUzsRlyW+xcuyK4KFRSyFMqKiKRGKiStEYxSiKJuiwA0T60Ragko2onZAKQkWoJpURAgqguBOquKihdHdqI0gVRKEonRRImlkgiSLRGnZBwEuqnDVdSqsh8gXmMRHMSq7vFS4Yqgcu+ZQX7nMk48Ry3mbLp/FCJQjxLqVK8+hVNa4YX7EuZdVvBLiT27keZUdXU+jyfCDRXNMuyu1HN5Vs0oGmxi7sptIkm4hCSHJLSqeKb2FOqQXIptSTK0VSdEjsl0fRBvyFVtaodRWHJG2NRZu4imUxMh6ulVnYkOqV8SXoLk/ssq4mh/lElWVpFIAkg+MImuXMkEnZIVRSUBOIwwIkUICRBJU4okUwjaKNUASRBJWor6LcaJLVFJYooYHFSmHRSZWnobCCfsnMApjDagMOKa0fxJDF7Hxiu0TmAFFo2gMmpIGqlJ2E42FowpAW4lwrmTRmjQi3D6GtsorbCJNKJ5dXlS5NoZCH0DrajyigO248KmEajO1kheX0M4qL6K560HNlUV5jyq0rVRnxHMhtk7Kd9mKiPArO4oop0RRkxfFleQJCFTjbXA0nwa9guFkCjftIosErAGEaloSZt9oX8fHZWg2SeIqypalFPpZRHMoopk5MgvlliJe6h4fcuMFMY+H+FWDrbRMyEpOcuaSq62paokQll8PlXW8XHKKpGDyHE9QdDD7nC7Q983bXbxOb3NKLYlqjxf5LEYpsQ6TjZsNvOMuy3L5NkLbkeVNfwPdtyFvMQ6SLN7K+hP6N3pPbphVzZ446xQbSDdpRyMjZzSDd0Hs7By1l2rsTxKUEqbetI5Hy8J8rpb32eL2XoIxd8ZMCycREnS3jbYtSzRInDzF+xQh9Dt9wkJFvN3liQyHq7V6b6QNpxtsQuXcJcFxh8crbcm2x0yyl88v1/Msq7tvdlu4kLYjIREeri8S0Q/HYFuXYEfyeaXapMBabGDZ2jlriLNs2865Ir1zvHWxH6tvP2ChNbM4fEd2W8GOVziIukS4VGusQbdek4RPuEXF/ErezO0aIZCJFyyyj1FH+pXLDirSLWXJyrkwOHYa2GmLbfLHMSi4piTGZpsc3Fl+92dq7aXH2ykI5uqX4aLIljW7luGWyLiJ4t4Xx/cubm43o3pa2WeLYo21EW2d48XK4X3lnr64ccLvG92XUQqJiuObwoiQiXMLf2fmVVfYjw7wiWGf8ABrj0ibiNy61Hvy8IllUV2/kPeFIo5R5VSPPkXEhCJakqy1tllVzLqQd8i4bhrjpCDYyItI5fgVu9kvR0444Tl6MW2/qxLM4XDIh0im48Mp9IjcY7ZgWgNwsokRFyq6wvZJ9/MRC2PVmL2V6zcbFiwxvyEWWRzZdRdOb5yWFxfaAmnB3fdjyiObzdS0Lw6/vM0/LUv7B2FbGMCRE9JyPlH96n2OFMNuZmBiWmTeb96sPR5tQ2++Ns42JC8QiRFzfv/uovTb3ZVpspbuQlmGRZvEXT+pOWBVaAllbdHnZU5WWWx4RFoScIebp/vQsUZcabEo5XOaObxLSYy0LQkQ8WXKP4lmbgpCUh3kfVy4fEPZ2F/eg+Su0X8Orsob0RIso5v7OWpRHsPcEZF5ldsM7zdi2yMiLLGRERcxR/d9CNb4e5vHCIpC3wxHV1ClOTkAkomTMS5fZSC4MYkP8ACtr+TZRDS45mkIjlH8SpTwxuRCI7whKPiLlH/tEoyoKkyvbs29yOneEUtP3lBftybLNHylJWl41uyISkMcuUZDLlFCZcGOaJS5tSji/YUV9EBy6cjCURLVpVTc4a2Us3mWjxEBLKIjGPhVLctxHi9pC0n2NUnHoonbeJcUeZc24plyWXMq66IeFZ5Y0aI5HI1dk/lEpCJCtDgtxLfATshIZac0vEvPLUsupaTZu7JuW8GQ+8SXHHXokuzY4finfSLMIjEeUcvEtzaU37LZiUhEYl0l4l5Lg92RPQbHu5Zula/wCXO20QFwd2WYhEpR/0+f8AanJoFHoVncWLVsTRd4/GRDm1EWX/ACWYu7rviIXBbbHS3Ic0f71UX94QyfIpOORiIiURVZcXAukMi7xkSRcqI2vY7E8dI35cMh6sqfi+8dcEiZGO7yjl9ov+VSN1EiInHBEuH+VTMUx4SiUZFHd5SjlFUnZG6GYxdO7lq2FyIjmLqLlVRfYvuxaEfqxIS8RIuI4k2/8AJmt3uREXCJzSTkur9Sqb0GhH9JIS8RfhS5dlfyJe4gTu7jpbEpdMuJV1bgpSbJNvAJtsSllc95RGi1EqGRa9g7h0s0iUYhRkM6IGkHCSvZGXI27Ui1sCLhyjqIkyCHuSiQuxOAVdDhfFEhb4SLi8KvGMKtm2ZONuPP8ACyOVsS5nCH5/m/qp2JlC3lTMe1QuVGBX/wAmbjpcccLlyiPlHV/ipFrgxO7sW2PE5m5v8FX8GfvZRWVuJF3mlXQMtZRYHedOUftLQYjhjDFsLTds44+X/wC5cc3bY/8Aza+j++qonMDIRkTox6c3u9qjKJbGGuCWYm25cMhcL3Vo28PFvdm3ckTnEO7cEf3diz2EC2DgyEo8TkSWgtdqRbcICEhbHiLNvFk8iKa6/wCg7FJJ7NKxft7uDgxKOocyYy8ESy/iJVh4xZuyi33kcsSIc3mUCxuhFyLgkK5mTCp6/wChvhlamn6NbhNy6JRIe7llIRLL5hW1w3Fi3Y7wd51cSwOD34mRALxM8suLxLUWjrgtlGUh4YjElxfJ8ZwfR2vF8uL9lxiNsTudspdMcyr37TmbiXMg4LtD3kXGyHm5VrCdbdESERkWmRR/4WLjZ0oyUtmYdtS3ch9mKPg+8HNq933eJTBbISIBIuoery6kdq1EfXNkJcPx9KGfJLRSgvZYW7ROjlGJKY3aCTeYoly6lX4c9uyiQlm05lMoA7yXeD0yS8eR+w3jVaI97hYiIkLxD7Rf6qres4lHeatMssloLrdj6wvKQkozxDxMtuDwy+6nWBRk7ywc3hDvCb8Kn2uH5eYi4pErUhItLJe6XvKDuHZFISZ9mKdB0rM04P0NaweMiJxvLzDL/VMxZqzbb7whkWrdjH3UdqzKURcHwlISQcSwMXfXCPiktUcjXRgyY77POtosLtH5E24Q8PEI/uXl20OCiDhRlEdOrN7S9xxbCN2UW22xH/6D7Sxu1ezBH6u5YzDp4l0fE8iUXsw58ca0jxK5DMg9i1O0mzr7GoZDzDpWZcoS7uJqSOenxexq5J2pU2h12dVIlqkV0FE5OEk2iVLljtgySfZNtr0hzCWZa3ZrapxshkWlYKSO0/FLzeMsi2JcnF3E+gcIxlu8b3ZEMo6fiiz20eGGwXDFef7MYo4283EuJe14SA3zESHvI8S5Dh/TT1tHRhKHk46a/Y8rduM0U5oy4cwq42nwAmHC7uMeJUdscSXXxeRHJ0cfLieF1IMVSEpCpFtiXeDIfMuq+Lmoc3NJRbjKmy32Av4PXvRr6QStnBBwpCWXN+FfSGAYq3csibZcsl8ItXekhykvTfRn6S3LMhB6RNl1f8LDmxe0b8Gb02fWoUXUVLshtTbXzIkw8JFHTLMr/drM00bUxnYkME6tEQRVFpkejS4m1IqCQm1VEIpAh1bU+oINRV8SEWKWClRSeVXwshGgu3akECbQUUVQJGqCG6Km1FBqCFp2EQiok7FKqzm+P90PdquLBIsU4RRybXRUotHBlT6JVzaKJGOGiWgpexORvso/PV8lGJSHaKOVFqxwSRwnGyOVUypEiEmVqn8UUxJJ1DTUlaooxREgtCTu1ACqLJMSoGXYWSJ2qN2o9CUBHp9UzsTxQzWrLhrQytE2oosVwtrJNVscAqKTdKa2yi/Jln+auxyxWrK7c9K4WFZCzyo4W6r5EFwSKarKbVsuVXlLNOrZKfIgKsoasrqNxV6NgSQ8N+IqSzBxi0UdRJLSitTsS+BQzsi5SUWZEnF9kIEtDUqlsupakqeSxfJNdHWzynN3Ch0tSRQYJCXGTRYBcqS3dKsbaJFBtU1YayNFsN6pTF7LKQqqYbUpoOVVxC+aRZi+iUcUe2ZJTG7fLqRTVrQWNtsFR0uZILqkDbcyI3bjLT5lmkr6GRk12QioSjmyrz5OMebypvyPpJUov2PVNaKJ62kKGNkXFpWlbw9z9GpTWFnHSI+JHGIMlsyw4b8aVLaw3KOValnCnOlS2MEPiL3RRFJGYYwvp93/AJUwMMIh05Vp2sBIvrPdVixs+WqRK1JhShoyLeD9KV3BxISk2WlbpjBOovMq/GMOcIt0yUnHNI/iTsduWjPkSirPPsOsGGpEWoizbzSPLEVExi8EYk2QkXSP/CvScvrR8gK0ZLhkTY+78yrTsnydJ14WpOaRyx91eh8aDo4mfLCXSKxxlwhnvoyHMUfdFRRfFscspaeYiWvu9md2wLt3cx3mYW245RVMQ2jTgiPeEXu9S6abRjlpaI2B4Bd3ZDuJSLh4iVjtfs26NyxZ2jZE4LcnREpZuIic+hL/AOUE0PcPEyQ/WCMXP3KlxPa5whc3LjjO89YROFIi6i+ku39aks8Uql2BDE5LZqm2bS2Yjc7snG8sRjlLikQ6iWLxvFGpTZIt3m4cvl/Osve4i6RatWpwi+yqp0yIu8cIlz8vka4xNWLD/wATLt/F5F3bIl4ilL/RV+J4obuoRHw5U1t8gbIRyy9pRu2XUsbZ0aIg1IS/hUdyRFJXTFkRZiHKpvyWQxbbj8cyosztGJD1LXbGbGOXhNkUm2S4o6lWM4e5KRNyEVoHNsX2O7bHdyGOXhH/AAT8Khdz6M+TI+o9ntvo62Hw9sY5W/7dwu8cjq/P2NjRX+3OFMWdkTlk+yQ5SJ2WqP1bY/PL9q8Kwj0ik3bPNEW8J6LciKO7bEpEIiNOz50gbaN7yRFvBbGWbTLlEV3IZsMY/qzkzhntqZabYbZXL+Z5zdtj3bNsMY5frHi7O2S8ox25kRETkjIpdKssdxNtxwiHizDLN7Sz7Nu4++INCRmZRERXL8jO5SpdmrxPHjC5NV/Jt/QpbOOYi2Qt7zNl5RIpZpcK+n9oaxYzEMoi2LhaZZZbsfpLs/rWF9G2w5YVhjl48QsEyMi3n6QvDXMWb6Fm9ptqnZSJ0t37RF7Wn+5McHix/sPhNZJ/r10We21wDZC029vx074h1FxRb5e1RMNtxfaiQjEczhOFuWxEeaPzkqi0urnEHe7FwWG4i44MREfN9MltbKx3rY2xN7kWy0ttuOPuDzOE5Xs+f6ez+pKjhlP9kXkzqD4rYDCMKEhE7ZmW9y7/ANW25w7tgfniNOavz1Uw9lxaGRbyMu8IRGMuUfzkX61c32LiwTJXJD3Yxbb3YtxHSOX5qf4rE7S+kpsZCLhSkWn8P0RoqyRhCNt7Lxxcntdi4lau98TbLhcIyi2I8Kxbrm7KLhCObNH7sUDFvSM45IN5IS1cJfuWcvcfFziIY9SRJqrTNCg49mgxG6bc0j3fLxEqZ0hIotjEuolWlcyzjl6kI7jSRSIfeJI+R2Vk/gsL4SFzNqHq/CnFEx0tyLhkXu/m/wAVEduN4OmKjGXiTPkTBFu7PpzKmvG+YYrRWt7LLpVXiTMiLiVSa9BRRWNnFXtnfZRHy5ftLOnWPCjWD+bMhGGyw+1dbJwmNOXeERRGRcPUtNY2wk2ROOxLUTY8UepY7DXSkMc3mV1bd5JoSKRcIykXURcqWyFtZYqTkiERj6tuUsvUqjGW3WiI93q4uEVbYPZbyQtuRFj6woxIukuz8yk39WibEn3N8WYW282YuYo6Rp+tBGyzz0n94UpRijtNZeLNmSYpaE2REI5epQCxFwdJcMUadC+JY0czERaRHKPMot3c6iEf4VE3w7vUW8LUmNGOZS7Ig9LnSRZo8yhPlIi6ktXEKhSUDHDVErbyLLlFMaakQitPhOF6SIZI1CynLjsg4dhEo5Sc+OZay1wAyEe7lLKywPN/aErm0raNjlEvDxLO3+1TouFGLbYjERGOUfxLVCEYLZlfySf8BMbw4gbIXHB7nKUdIlyiXESFasmNsRxiy2I7xwuIi0j4v2KixLaiWVtuI8pFL7VPzqru8bccGOaI6Rll9n/ZKck2MjFxVG12Nwi7xV5xiytHLu5HNu2ybZZYaHMTrjjlaCI9g8VVsMB22YsrJ+zYwtp/EmiIX8Rv3hetLIZRH5NbN0gVdWata1rVeMWWO3LQuC1cOtC6MXBbcJveDyuR1D+1RCuSiQy1J0MuNLXYqeHJN6ejR4hijj77pOXZPZi7whjLqFvhH9SlbG34jdjvMPdxTNltm3HGRccL1YkTNJRl8/ZT6YrHtvdSssNxt+2j8mecYISIpNlEpEMSzfT9BFRIWRRk2h04NxS9mr/LrouXBXLgsZiH5I2yMWpcLfzdg9n9fz1UK4v94OWUfLEv8lQXF24YjIpc2mReIkX5SQkIxy8spEP+iHNNz/t6Lx43Ht7Lpm4abiUScLlLTJPPEwcKRDuy6SIlDoTce81JhW0/Vx+8uZnhvZsxZX0aXC8RcyxHecpRWsw7aN9iJN94Jasun2lh8IcO23brbkXB4Sze0tdXGt7F0mRlHMLYxl1LmeR9HTw7PQ8BuWrxpzeCLbhFq4pKVbsOtEQPELjZaSjEhWHZMj3Z22UeIdJCr3Drh8pAT7mXhKP2lyMmPl0dvx58f7ujXYWwBfWaf0ivLu0m3mEpcJCsbgrW7czXJEPEJCK21q5+hKQ9WVZX9Grk7IrJFGPEPhkpuHjP1nDp4SQRAxKRNxHmVhaE3Lq9mSz2x66IeI25aSZl1KDVnhzeYRV29cEJaSH3hQaM5ZapcwqR7BcXRUXputjJnV5SSUAnRk9IS8Se+RSyiJEigJaiH8KeuxEuiqcGJZhl5kO/tTIZNvD4Vd3LLbg8PiFVQWDYkRE59oY/5rUkvRjkYvHiyxcGReySp29nrR8fWONufeW5vLQXCykL/N0rP4rZE3ImxER5paVuwNnPzQb2eV7c7LusZhf3jfLml+/sXm943El7XtG0RNlvXMvMvN8ZtGuFyRfH6l2fEzVpnLyxvroyVUiO6GZCqK6voqD9DFy5LVSxqYiVcuUKGxSpUhKn0A4qg9o9EhJei7BbdfJHh7kSHiEiXmgVRWzSMmFzTWgIXF2j6axK/tsUYnbFFyOYeUl5btRgRWxSzEJcSpdhcfK2fHUQlqGWX+Ze6Ew1iFlJuMi4SXKd+PK0jfKvJjUu0eEMXMS1KddOCQyHzKZtZgZNOFHKPTpVFb3HCXlXQxeQpI5jwyg6GVqQo4ERChu1QmXs2qKOW1SFxdG52H2nubFwTYKMeHmX0r6MfSmxfCLVyQtv6V8dNXSt8GxYmyk25Elky4nHbNWPNWkfoHbiJZhzDzIxNr589DvpgGQ21+UR4XC0/uX0Bh982+Iky4JCSWkmb4ytCE0lqEVJIU2rSpouyPBDJpTYIZgjLIu6SVFHOiSgqAN0AqKSCPQU6rahE7IcUkFIcBMioSwJsoRtqZ2ZU2tEVFJkWKbRrpU2jKStEJbVkaoIcVKqkioC5KICgp0UaiSgqBJn55Ogobjaun2FBeZW5dHFK1wcqjVU98FEMU5Agkgp1UyqNKi6HJ3am9qWlOpWLn2FCiMCE3TqRgUAsfREoh0RBpzKn0WOEUZmiEAo7YLHldqgodhwbUkGUK2FWDALnzh7OjjlSGs23KpoWKLbsq0YZSJZHEfjxpuyrHD5FlRaWMcqvWLZTmcOlmilfIxq8dGXHD075D0rXUw5PDDB1RLwx+8p8jLeJIxoYbLhT/ySQ5Yrat4SPLl9796LTCx5SRKbZXEwL+CSXUwT4JegVwfNLSnBhHSr5MBYo3bPPhwaXDlRHMF5hivQxwgvD5V1cHjm1Jqm4oD40/R51TBh5fMnBgvSvQa4Pxbv3kT8j9KNTZPgRgmsF5RVgzg5at3FbG3wmKmN4aiU/spYUzHNYTxRUimF5dK2VMN6fMjN4b0qWxnxRSMbb4WXwKnNYcWmIlLpWsbw0ZKW3h3TJA5fRcI+7MeGG/2aKOGFpiti3YCUcvtKSNj0quQyjHBhMUVrDR4h+8tg5Y9KaNj0qrLM43h3KKks4cWlX7dopIW0VXJBcSoYsBHUKmM2as2mxRmmulC2SK2Vh2eXLm8SwjzjhXZEJblxstRL0fFIi2Rcq8kxy6bJ8j3nFpjqW/xFsxeW0kXmK3Q5jeIRGOYtUiWFxvEbYvVsRiWoi1dSdiOJiJFu2/CJFKPUsniZFduEI7sebMu/DNSo5GTEq2GxfaAnS3TJDpyi2Pu5qKCWGutRdfZ1cJFL7KHbt7gdQyHl5vMot7jDubeO+GUSTNv+5mXS6RGvb4SIsv3VT3ZD4ekUzEbwiIs0vDlVa4+RcSVlaexmOFofcXAqNR5AcBGtWJaln7NfSJdqQkWZHeqMsox8RKRaNtiOkvEis2O8cEBkRFpJNWNvoRLJHtuh7GIRbiIiMldbLYFc3hZe7b5ubw8ymW+CNMDJ4hec5dMfDHUttsLeNNl3g5pSEenq6l0PF8TnqRg8nzowjxiyqv8AYx22Z9X5i1Esti2z5anB3flX13gVvbP2QnGRlxEOVZPbzYZoW5iJFxfhy8IrRl8FS1HsRi8/7Z8iYlgLgjIRIeUuZVLmHXI5d2505V9N4lsQIuWROjum3RJyJRIijpy/T89Vq8N9FTTTYuYkUpRcFpsRk23/AI5iL+r8yxR8CfKmbf8AaEOP2fMGx/o3xLEHIsskI5ZEXDL+9e5bH7EYXs/F3EYv3PiKUh1REa1W9udtLbCm3RtmmhkPdjEhEeGTkg7ZU/qXgO2m0x3brjo5ZFqLN7PL2/qW7+mh465S2/WzFLy55nxXReekD0gHckQNkXyZuW4ZHK2zLi/NIv2rBYbK+vWLYiLvnBGRZhEeIv7qKkxe+jxZkbYa5dO5izLeFxCMiEeUS4e3+tc35vnzfsbYp4sNo+m71iztGrK1wW2jbMDvLvE3G2ycdLpbc+aVaypSlfoVFj+2RMC9uyjvJFGIiXicIdRIjxtsYYJXbjm+3fdsOOERFy92NOwRp+v56rxTGsRJxwiJyRF7vTFdXy8ixYlFL/3MXh4nPI52S9q9rN4JDp4izai5l55iGISLVmS4vckREqcqrzDk5ybPTxikgzrydZMG44IjxeVMtLcnCiIr0S32KdYYYN8d3vhIhEiEnCHw9v502EJPpCc+aEFTKGwwd0swtkTY5d4Wki6eb+5WD1mQNzKObKPVzK3dxRwX2xJsXN2O7ZbjER6ot9lCJQr4SccInMpeXKjniUTJDLyZTVqkcoplbYVHuKR/lWWbrRpIR1THnyJJcEo9Zak6PRAN2ElDrSJKY4ajHRFVkNNs7dFGIxEubUX8y1to8xuIlLeaYjqJec4Ndbt4S4RXptpRh0WSZcIXIycGOkulMg69WJyhrmhOMsNMsbhtvNvCKROe1pH9SkWFlcvuCREO7GUWx3bY+0itW27fZEWSecczSLNq4vpViTIi4Q3IyIeFvKOYeZunYSqcE9okZbMTt4A6RcbccbGJbv1bfhL6XC/WsE6XMvSsftSlEW3B3mneDES8P54rD41h5DLmlmiQxSJRoZ2VLdUdkVGbUqXKgCqgtG0RnDy1aRTrEeZW+9GPMiXYJJ2fwghHfkMW/wBJlzdIiS0FvdCQl3YiIjKQ5RbEeIuqqy9/jZRhLKIxHl/cqylwbuXMUuHmWj5FFCvibe2S8cx8nHCFmUeGP4uxAwvArm5IYiWbxEtxsDsA+/3hMxHiJxev2GDW2HsSykQjm0pMptOjdiwXG7PK8J9DJONiT7hDLh/lqtFg/ojtBHvIl1Zi/wBVZY56TGGh3TDe+IfEI+0VP3LFXG39yWktz0jmQ/u9pB8Maf7M3dv6LsNEYuNyzZcpIeJ+iTDCiLI7suLMWZebv7e3YlInnC8P8NEA/SBc/pHPa/4V4sU92BlyYV/aabHPQsI+oel8ftWDx/0b3lsWVvedQq/tPSU+3mkXVKJS/wAlf2vpEbdjvi8pfwonjfsWpxa0eLXVu40UXhJsuVMG6jxR6l7dePYbeCW+ERlxDw9UlgNp9iokRWjm9b1KlGmXSZQ2V40Od0nHHOERLKgnisSk2JD5pKA60TZRcGJCnNxRSdqqQlRpmownGm3MhDEuYsyuMNvDYcExISH3ViAKJfwrQYUxvdL2b9GRLB5kFxuka/GyNSq2ehbP42Lr4i4O4kWVxsspeIV6E7g8Rm24O8LTmGJD4V4zhTh2zgtPDJso5pZh8PzL0bCb9sXG23nJNkMm+Lyl9FV57PBJHoPGy8tF0bxN5ol1SWk2Y2ibLuybzdPD5uxUeKbtxoSZKQjqHp/eoto7u4uNZpcxLlT7OvDo9Mtr9vNmJxv9GXCpdmy0RZZD4iWRwfERcId4ItyW2w5lsm9WZK9jl0I8I6Y+8h3NcoxElNrEeoeUv+0j9G+GTf2feVtpbLivRSuYe4JTiMenMnVMY8KeWolCuYcxKRlYE40Rahq0/dUA6NkUSLNxcSsqsNll5vKmFZsNxEd5LxZvaWjG+LMeXZDrgPELmrlyqlxvAiFsol5SzSWwtTGJZpeIYoDdsObSXLm/F/otkcyj6MeXE2uzxLFbB0hLKXlJeeY9ZCJaXJSXv212BuOETgjJseUol7upeQbUYaQkUdPEJFmEl0sGVPZyc2NnndzbxLpQ4cqn39vm5o83CnWwOFGMRHwiuzjknGzmzVMrm8OkWbL4k24sI8QrRtWQ6nHJeEVHuxHhHzEj5Fxm10Zh1uKHUlaXdpxSVY82q5GiErGLl1KJK0RoMdWqdRDpRFFG1YM+iTYvR8q9T9Ge1+6KDnqyiMZZfF9C8lAlZYe7mHMl5MKnFpozfLJS0e/bZYQ1dtzZKQkPDwrxfHMOJoiHlXouw+IkTBAThOS93wqk2xsokWb2orjQUcM+DdfRvzL5Y849rsxltc5Yl/Ekfb4hJNcFOoeValM5zGAaI0WbKgOUStlFPS5IC6Lm2vSHSWYV6/6JPS27ZuMtXJE41KMi1COb9S8KE1KtXo5h4VnyYqeh8csj9F9ltoWLxht1lwSkrlfEHoo9Izti8JERbviHLp6fmyr622G2tYxBgXGXM0cw6kCfo3453E01UlaJwUT+xMoYnYGCSPSjdi7sVcSMBQUtQRnKCg9qtIEZUE2oI1F0VZKAbldUEXsSlRSiUAimEjFRNqKpqyEaKWqNUU0QUSoGUqBUFdBSIJsFXErmj4KdZVfdWq1523SoNzZ9MUazWc94/oxT7ChvNLXXln4VU3tn0rVHLYozrjaBWis7phV5hmToysg2ieNE2KWlUYDa9hBqjCgBVPpVQW6sNNHApKNQkVslH0QlUBGGiC2aO3VZcqVBQ7JLNFaWo5VWMeYVY2tVgmqRshNXRdWreVW9kwqrC+pXdkSwZTfB/RNtLaXSrVi2FAsiVrbjJLlp/wAGmLVbGN2vLmUpq0Uu3a+P4lKEFa30DJkZmxHiUgbKPV4lMZbUgKdKtxLjXsgBZcwo9LRT22csh4UajaOCfsFlVWz5kvyBW8U8BV8QWrKn5EK6lj5lcblPowiTIo0VLVmPCOZPpacwxVmDKKDSPYUUkVbVoKMFt0qfuR5feRAZ6VLZRCC1HlRgtBUzdpwAqoiRFC3RBaEVI3aLQFTCUWyNRtLu1JglohcqI1QAW06tsjEm1c5cxKyWCq3FNqXKii0RcopjzLYiROOcPhUX8ldGQ26xIhZIYlpXiF7iOYjlxaV65tztXaC3BtsXCzDxLx7EqtO5hajLqXY8PH+t0cjypuU9PRW3dxvJETgiPSSYdWBakOr7ygfJxGRaVU32IahW9aezFkyJ/qiVfXot5ZSJUl66opXEkxw5ZRUb2AogieFCpVE+SEpTLUeFUlbGRX0R22iJWdtatjGRZukVY4ZgTkd65JtsiyjlkX+qtGcNaKWYYjzJ+Px5SFZPIjDTIVi3LKLZeX4ypzzW7KUSHmKUi+P2KxtKiOnLLi6fKjO2Ljoy4eGWVb8WHic/LlhP0wGH0cczZo8vEXmV8LxW27NzU5IhZHvCjwyLh/ZVCwMHAFwS9oYy8IpGqNjvDekRDqHlHqIdPat0ZUYqtmv2X22dF9sHcrAkPd6Ry/3Zl7ue1A3NoLotjmHKOkohxFLhXyJeYqTr0mm93+jbHp6le4V6RH2GfkxFlLu3C1FHlEuFP+eEq5f8IieJ8tG32yxN+5vWTJwi+TEJCRCOoS7sRHi/qVltZt7eNtsE+6JPvCQl3I92Ixjm7Owi7FYbCjYlZOXLxETjDZOEMcoyKI5vpH9VK0+dYPbW9bIm4tk4OYt4QxjLNw0zdlPzprrbRISjdMrnn3X23TKJDHi4R5pF/WvPcYfbH1ZSHm0rUbU463HdWjjkd2IvFpkXKI9mleeYlcERbtvM4WVee87Nuvf/AEOz4uFf3Log3cn3RBvMRZRivePRf6N37S2ZvHbYniuZfJu8EW2+ZwhHM4VP6qfMqr0bbK22G2Tl9iW7G9cj8mFxwpNyLNFofmIuz89foovTz24ErRxx98t3uhaafdGLgtjqbYZb7B/v7P71r8Lw4xSyT7B8vyHL/dwMz6QN2wy21Jx+5ISceiMWx5ZfPmXjuIsZiLSK3GO7QWx943pLhbHhHq7a/Ssrf4gJSIRiPCPKKzfkc3KX8I0eDi4qzC43ZRLLmVN2r0BxnejEVT3eznEuYo/R01lSK/ZfEvkzs4r0XFNqmrsRItTbYtjlIYj0rzlzBSHiQSAwWqGbgqRl8nDHM0zZWuJxIjbGJDlEizEI9KY7ck5wjm1cyyYXTiktYmUY6fCk5J2SOBLounXBHiUS9dyqEFwPiJEccGOYlkk05GgDWqE/VI48MspIThpkZIpA3KoDhI1SQjFFyRLOZqtZsnjO4ebk2Lg8QkSyY1VxhjBOjFtuRDqIUUXYGVKj1ewv3LkSfFsWYllcFyJeER4VucD2ftHGN+9cufKXMw92UfN+ZeRbK3wkI2rwxIXNUs0eLKvTcAxUQeK0YeLcuDGRDLNH/GKemZIeyBti45vCaZHfi2PrBGWr7K8vxixylEi6vEvWtqbi5J4QyiMYluxi254h+fN/gsTjTbjbJC42I5tXEgnTH4k7PKXwiRCpFsKk41bELkuElFYqstGhssxLKoz1ymOnlUatJIXZXZJab3pDFfTH9Gz0HHdk1f4i04NgUt2Uhk4WbSPbWsf1rwPZW3HeCRZl9eegP0iMWNv8mxB5wLfspuSKTgslStcuWnb8/anwSl136C/s20bLb/Z0rVkWrJohtmRyCLbciIuESGnaZftXy16SsUuwu3LZ9h60cGMm3Bi5EhEhkPD20LtX3JhW1VpdPi1bOC9Xd73toVMgcJFT6R7fzdvYs3j/AKHMDxC7ub29tnbm6uSGrjvyy6HsiIgIgDTlAGlBGlPoTnCC1lTTr/zXoFZpS1Bpq3/B8AXQSLqUY2vZX0z/AEjfQxhmEYWWI4e5ctkLrbe4dc37ZbwhHKRUmJf31XzULolwp7aUE4NV/gz1cny7/wCZGuBGOlQ3LbiirE6JhLMwqTK0moodaKz3I8SAbcUDHIh275tZmyIeZXWF7QmOovEX4lWusSRmbDKg5oJSou8UaauW5EIiXMKxmIWTjRZtPCSsjuiaKMsvEKlXLgut8wqpOtg8lJmaF2Sm2t6TRCTYxIeJQnmd250ozdBQzjGcaYSdOzTs4m5eRF5wRcHSRZfLlWgwC0ccL1mZscq87CoitLgeOm243pERyl1CXMuJ5fjNJ0jZ4/lcZq3R6lspiJbxwXCEiGIiJcS0o+s3jI+LlFef4ddNkW8ElucEFwW5EQkJZhKWYemK81mXHs9bhnatdGxwSk2/V5uZXlhUhIYl5SXnmFY33hRykPCPF+FbPDcSnEt35lkcma1NdI1BlKOaJIjjREOrTy8Sr7a9kMY+yiC7HURe8rVDEglzQW8zgy6lWukHCO8Vmb3CQkSrB3ZEURimxX0VJoSLfERDl0kMs3iFSGLBoonqcHmlm/zUO4oI9ReynsuSiRDHpTFJrsySXZJdbazSHd+EiJQn7cXJCMS91SCMhGTYyLqQra9LeFJgR6hLKmqVifjMfeDF4hInG+WUib9pYrbG2bKW+blLSTZL1rHLtshi4x5l5/tRYzEiES6Vp8fJXbMXk4/1Z4pi9m23pIiFVdtqyl7S2mMWbgykMfeWExS37zLqXofHy3HR57NCi6pUYxIpF0przQx5epVFq06Wok50yHUS0c7FIFex4VTXFFauvKuugRqSYzGtkckxcS5ORoOS0SLgrmTQZdBhFHZShSQpg1VmJnoHo0vBF4RLi6lq9uLKPDIXByryXBbwmnBcGWVevN4t8ptG5Zt2PKuV+QxW1k+jf4eWk4P2eW34RJRhqr3aUe8yqhKqXjfKKkLy4lF8UPqhlVKJpSFOhN+zPKFDaIgU6kytURh3hJNsX0S2Hy5lufR/tnc4e8JtvFu5Zh4Y+FYKkeFTGHMsRWbKvo04p12fc3o29I9tiDTfeCLxahLKS9BpSQyX504Ni79s4JsuEJCUspL6U9D/AKaN4IsX5RLTItSFT3TN0MkX0fQFBTkHC79p9ubJSElKqMk2wgdaJtRRiFNoKhUutAxouoKJUVwioUuhhCm0FFJd2JmiwTjaHQFJpRMrRRohHOibWiOQrooOLFzTbBjROglpRKiVFQq9nxx8l5kJ+zLh+6rqjaTdLm/NxewFBUZG9sdSqrqzIRW3ftZKnvrb2VrxzdbM7xIwOIWaqLm2W6xKzyrPXVpJbceS9Iyz0Zl1tAVnc2+ZRHAWm6Ft2BFPFMJd2okUHBGCqACKoym9BgcUu3rJQW1IbJBKKB7LC3NWdocsslSgSsLSoy6kjJBNDsUmmaBk+WSurIyyxWbYdVtYO6Vz8uE3Qy32auwe6cyu7fSsvaF8SV9ZHl/iWWWKjTHPcmqL61orC3pLpVXaaVOtkOomj0WQCjt0zKI2jtkpaZCYFUQKKEFFJGqNEJUEoio9U/tREJNKLqCgULqThp1IaLpvokVbT4dSjH4k8CR8gXFkndp6hUqlI8quiyaNE8fEqgrjpIvCg1vSH6uPiVNENDWPSnCSydLlwpREi/8AmptvRwh9WQ+IkPZLL43R5hQTuG+EhVBdWdyQ5W2/aQrfC7keH2SFSiWaYHG/0gqQ043zCsnXDLnmL3Vm9pcTftm3C3hacuUUXxti3k49m72o2has2SN5wcq8bx/0ntO7wd4Qy9Xl1Lz/AGw2pduSi84MeXSs+FBlmiS3eP4e+TMXk+WpdaLy4xfeEXVxKDe3peEU3eDHKKqMQMl0oxo5mTJa0Qr66KRFIlWO0JTK1kmOto27AxLZEo0pDJCOVDcpHTmQ2lY1k4TIoiIqU0ECkQiRdSiMGQjyrnKkWbh0iXCmwS7ENOtFw3imUh4vjModHZFHVzFpVaxIijqVjbtxyp6y+kInDWy5wYmxIZFKWr+FWV7iYj9ZHpEpR8Rf6KlsrJwii2XeFp0xj4lcWOBjEt7Ei1Zi+8XzEtePkzFkpERu/c1jIRzReL3oiXzKHaCbpFmJttwoyKIi4XMX0LVjaNk2I5RbHK20IykRcX+vYpVtgwtkO/Lu5ZR+1l7fzrRwkL/4eRnXME3D+6buZE5q3YkROFxCJcI0/rVhhWz/AHhCUZRlmLKI+L6SJT8du2yegwO44ZDJyI8oy4kuH2TjshbL7ROPOFxEX0/3fQrWNWKll9k7Z/F3WGHLFsZMuuSyiLjjhDm1F84jT9vYqnaLG8rgEWYRjp0+VTdo7G5w1ls3iEXHvqxIZD4i7cpfqXmGN3LhEREWrNlL2krz/I+FJXs0+FgXkbS0Axd8cxCWpemegnY20ccHE8WFxy0ZLK23KT72YW2xEay+mPbWi8q2bsjubtpptsniItI6vKvq+52rwzDcHYsSsvkG6bHuyKT7ruonTcGvb81fnisng4vkk5z6NfmZXigscVszm1Fq2V24/uN3mFtlsh3jLIxjEWxrmP8AcsNjGBXd44Xef+swUe8cbyy+rbHt/PH503aDbwSIitG3yFvNKResLU4RFRY252xdGQ94MizSzf6Lbnz4vsy4sGS7a2a9vZLu948QtsCQjFshJ4s2aMq6uz/BTbjALNp8XXmx3Ax3bAuSIh+r3zg1zHX6a0XnrW1Rx4izS1cXMk/LxZS1FqzZvtLJ8mH+GaJxz1q0ej4k2044WVsSKMW24iIjwtiKodoYtkQ5ZcQjpEun8yzQ7SOCRGOVzm4h8KqrnEnC1Es88kH0NjGUXRPu3iLwqI80McyYNxJO3iyOVs2RTS2A+RjxJjmGjqUmtRimG9liPvJDHIq3rLNlUZ61LmVkThSTXTQcS7KiJCnmamEKE6wrUaCWwAVXEuqCeIoimgNFd7NXrjTndFGQxLLL4qqokWxdi4JJuNC8qtGzJgeH1pai/iVhhGJ7ovVxjxSkSJh1204w2JN7tzTIdUer9qi4hZC0JERZSLLLKQ/5pxjhGmbb8u7zMRFKOWPCqUy3+8J4iESIhbcLTLwioFmcbSTeZyWaWWIqvftHd2JRJtstI8xcyVN0a8bIOP4aTREMhclyrL7shLMtZdScbc/SCsw7qzJLGMQ6JgBm0qXusuXMgjUlTDxxtlnYGQxIS0rV02i3VtqKXiWOsKoeM3UoigTs2NcVovdndtL6xuSubK9ftnS1E0UZDykPZ2EvaPRr/SXu7UiHFLb5eJR79tzcvjzSEQqLi+bGiRd4unHyp8eMtr+f/LOTl8WEndb+12e5+nz06O4+IWdvb/JsPaLed5meeP5szkadgjTs+ii8gZuFUG4iNPJPK9eiOPFe/wDXZfstEWZHfsCj1KBZ40ItkO7zZYl0pgYsOYiIiLhzRiq/UDg/pk5mzKUSEhVgWECqeyxkvrCIhV1b4y3EZIasKM+PaZFewuPUK50N2Mh+8reptkjkzl1eUlnn0xyabVGRcwzetuEUpFwqtwsTAiEmy3ZLTVdFtwhypbuLg8It8XUudi8vdSN+TxNXEzOK2okMh4VTskta4EhKI5fMspiDO7eXRU4+jJW6LfDbfecqsnLUYxLVzaVSYPWRLS1qXFElnzOxuHDy3ItNnSJsZcIx6l6NhGI71vu9TQ5Ry5vKvOMFck5ux+sHT4VrMBsxJmTbhC5Imyb0l4l5ry8Cbs9D4smlSNDhtYvTy95qjHL0r0HCLU2tRSZc6dK8gYMmiHpJep7O40W4HeF5SzLlygq2dPEa6DZDlIRJHYcIRzRcbVMVSPO35hU21MhEhS29G9SosaVGUmyUS+MSIYxJzpQieVW4zm0kJeLUii9CJTV6LN5sRj3keaSDctFESbISHp4VEfsyLNvJcw6lIsQ3Q+rLxKxbYlndOjKWYfZRwvRLUMUOl7EtMiTmiacLSQl7qikk+yuLY1644Sbl5Vn8VtoyEdJcJcK2zAx4RIfjlVfjFqJCRC3L44UcKauLFZIb2eD7bAYlFsRKOrMvPMRDeEWXN8cS982qwy0jFxsh8RZhXke1WDNtERMvSHlJdrxPISVHB83xW3a6MNSUoyjFENnLqU7ELPLMh8yhhXLlXVhNNdnKcXHRAuA1KseoSuLluSgPNpsNstSorjTaVR3gUfsWxOI5T2Km8Scm1qmImR0iaySI4PEo7CnUHKrMYy0pmXp+yjMrbLLw/wAS81s2u8ivVdgbgWm3JZhjp6ln8tf7pjPGV5UZHamhC4QkMS4VnyJanat/ePEUfLyrMvrk4JrgjX5MWptjRold91MEkwjjqTuVmRysbWqKaaVfDFDoXUmRmwGHB1TG8yqyqpVq7lTFsomA/Es3tKYzfEJCTbhDHlVPU08HBQzxpukOhkaR7T6LPTHc4eQg8RPMdRaf8l9U7Abf2eKMCbLwi5xNkWaS/PCh8qt9nNpLmzeE7Z4myEpZSyqJKIcPIZ+lFRSiC+cfRH6ft7u2MUjyi6JeLVGi+iMKxFi5bF1hwXGyHhJFSZrxz5KxzgpKVR3aIBgga2RyaYnb0rhouomOeZSPZXNhaRSVikCuVISaR5GMquXVqmVqhk6GIWtUztQzNdL45kvsVLs+VxRBFBap0owAuWPGuND/ACqBd2kla1pl5UMwR8mBxsyeJWqoMRt8pZVu79jLpks/e2epbcOX7M2TDW0YK5Y1KmvG48K3d7h8s2lUV3YdK3rInowzxvsyh0XUorh/DSlpXNYaXKtC6M7iVwCjCKsAsYo/yGSMr2VdATxpFWjWGFyxRWsMVN0UlsqwUxk1PHDy5VItsLLlS2xsHSIrTitrG40pG8N6fe+IqxtcO05fvLLmDxylyLK0f8Sv7KukVXWNlpkK0GHWcdQrHJKjoxuybYj5Vb2zcR8SjW1v0q1t2unzJEommF+yQyGlHAEluCkiKQ0MGA0i0bThojURJBAgb5k4h5UXUnVaURT0NbDpRKNp4gnphQlGkVugpKnHUo7j0v4VCEh1yKiOHLqRmmJRkpYMCOkUaCeyvbtiLpRQshHVmJTaiugiBBg3HhFFGi6gogoJEECifRMoXV95CuLmIkXL5UFkejrl0iLdDqLUXKKwnpjaFqykQylq4eVa+0d1EWouUVk/S5auO4c5lckI6k3E3ZnzO0fMjtsTjpR0qwew4m283KqoXHBd8Kk4xiRafvL0OGCUDgZ5tPiiO2+IlGUfEg31FFZKRSimX93wiKITG/ZHerFCF1NqaRAx0ejkrYR1LqBJMIMyoO/Q1ymZS2QkOYiQQGSKBxy8KOMtipNxX6kpm2Hw/aUuxgJEThREdMeJVjVwUuFMfeIyiKapbFZf2dmgtMTISImSIerLIlat42ThNtEItjwiObNxOOfMs3hQc0iLhVszcNtE4Q5ijESiMRLw9n7l0sEjnZtStGzacG2Fs3S8JR1eX6VGu8ZJ8iOJNtjlHSTheXhGipbPHd64IvZijESyxHy9mVSLy/EWyab7sXMzj0hJxwuUfm7sVt+RJaERi+2WLt6022QtiJOkI7yTgxzcJEP7lGwXa4rOW7zPFKLkcvhEeWio7N9rNpERzSLN7qrcXxxoj7oSIo6yiObiiPZlWSflKG12MfjSap20w20+0jju8J5wicc+sIi08sVi7t6WmSdePZkfAmt4+Ixy8S4vkZZ5p/sd3xcEcGHR6B6HsL3Urxx7cC2OrebtwtUREvp/wVlcPb+7cvLv/wBn9G2/Is0YiURr+bLX50yyoO5IWxbERGMil7olSv8Aiqd1x0CkWlzLKQlIenl/auzBqONQRxp5XLJyCPPu7uDe73e8kUYiMv8ADMs3jNZEWUfKtHaWxONuSiI+Ifj/AAUfFbRhpnKJOOcXKKyZoyro24ZpMyIWjgtzj3aG3WRZVcuG46w2wRELYlIR6lW3Fi4ObhLLKK55uhJtARDNyriARLVJFBkunpGSY4zHUhbLFpVMmh1r4l1DQMNdBqvih1JDI05rMSXxKrZ3ahnVSHRFR3FcY7GIUKD+FNpRNJcBo+JZ1QTSbRKGlrVElRCNVlDMokpVaIZtIl2VRrdir3LGObm5Vq3rVt/SUibHNLL7Iry7C3YlqKK9P2evRdthFnu3GxzS+sLw9tVpUjLNXopaWh7+BCUeXT9lXFxVwm8xRFnS2XCpOK25Cw2T5btyRFEvWCI/5rO3WIkLknBJzeDmlLNylFImgoPi6IeJOSIt2WrUKoLwc2XzLW2NWhLvMxEPlVJi7MicJsYjw5pLC9GurIdpTL0odyAy/hQ7ZzNElJdFN9ApgCfzZlAujKSnugoFw3xJdWaPk1QjZIs1EojCSemJaC1STSUNJVXyK4iE4mtuJKim1oisJ9E5h9TLa+iWVVLStS3RM5RzcyrkhUop9l3g+KyKJavErS5xMY5dSxbFIqY26hcyRh6RNvLgickWpDO4IhikkJakKrWbL9pcSeBuTZ1IZ+EKLLDwEhKKqNq7KOf2lp9mLEnCjKXSjekPCo20oxzLRhm4/qxUsfKHOjzzDnokK1gEMRzLLWFsRFpWltRiOYfeTJypART9Fhg8d4JEQxEvMtPs/XM8Qy5sslgamW8iOnl/iXoexJbttx1zhy6hj/uuR5sU42dTxMvHTFfuSIs2XMPCt7so+JNxIcw6f5l5zjWINPyj3ZCr/Y25dBsYlvBLVLUuPPC+N0dNZXdHq2DPCJRIojwlIsvSrAjkWqXKQllLxCsdh+JbiW8b3jZasw5faVlhV02T0mC1cOaIrO07SNePI2qNFQIjKRZVHqYylvpCWoXPuqJd4nu8zOr6xkswl4VBs8QbcykOb2SVvToO37LDEno5mxIo8qsrG5dJrus3MJRVdb346CHwll95SsNEpFEoqgWWdpSQxebHpjqFGGjYly+JMNlyMt5EvaXMvZYvN/xf6omrVBwdA716Jcw8woNcR6SHqJTaC39Xm6ZKJdNkXChi6QUlz2zPY622/ISHNwlJeW7YYPlIYy8K9hdAc3N1cSxm1tqWpvLLhJa8OSjNlxLieJXFkQtlGWXhJZ/MPDFek4tbEMllsQaIhKQj5V2MGW1s835GBxdlJLpQnLWWbKj9pacoqUzbkQ5YrbCaiZYrkZ25tY6lWPNZlrMQZyqkftSWvHmjJ0gJQcSoSUVg5bqG8MU/kC5X2GtnIqeDwqmoSPbkmJ0LlXonVczSFehbCXPdue9xeZeb0W12HuSzDzcPSleTvGwvGaWVEracxEpe8si9USWq2rpwj7yyMVxvGgqs3+W7Y4BSPV4uJOFAcWirMLjQyafQkE0tCWlY2LkEIk0UOpJ4K6rRRJJNB1DouKqciEsKEm0LMmC4iVdEvErlHWyE21viD4ivWfRP6XX8PcEHnC3OWQ6sv+FV4w05m+PglIF4VjeNt6HQmqP0V2D28s8UZE2HhIuIeIf8lq61X5wbJ7U3Ni8Llo7u48PN/kvpz0V+nht1ttrEyi4WXeDp4v1KbXY+E1I+gCSKBheMMXLYuMPNuCXKSm1JEtDuDEOqHWqfVAdRp2Rqh9apHKoYmuq4rABkaZveYUjhILhqPSDUdHzQIfH4k6jRc0UYgRGgXDtmxQ0CingCPRrqRwD+ZUlsXJfRWv28palVvWmpaYm+lIVnLUKdGYLjZirjDVV3GFDqit89ZqE7hy0qexE8CZgXMIHUIoP5IJb5zDOn2UMcLW2GeSMWTAr0YpvCpcKkfkUh4Zcy2n5LyiiNYfHhTf6u9Ij8Vr0YscK+Ioo4SXCPm/hWzDDZcKf+T4+JC87ZXwGPbwvmzKQzhReFa9rDuYSUhuz5UuedrobDxk0ZNnDsw/hU9vDVpmbLmFSgsR8XlSX5DfaGR8f6KG0sSHV7uVWttacqsW7VS22opPK0MWJrYO2txipLTKe0z0qTBLkaUhjIIw0TxFdu0FFiCKeuEeZFbFEEI2CKDacCK2KpVZXY0QT6mnVpzKMciJEyM7MWUUZm3ipDTUUSKiooa0KfFdSidSqIIHUE6K4iigHedI+KSHbBDFXmQCdHmUapkRZRIvsozVoXSKfDGn2QbKRcvUufbHdkJCRaeJSvkiHdNCI9XiRcIp7Aly9UKN222MYj7Szm2+Jk4w4023LLEYlEf3K8aw0XNSNdYM3uy7sSy5ZJ8FiTM01kZ8pv4QO9cJwRlIlmMdsO8yjl5l6nt7h24uy5SKX8qxm0LY7vKvRY4KWPR5vLzWX9mY82xEcqhPBm4lPJvzeJMcFZZw4sYmmrRTu5SSCSK/SRITlEprYyLHiaERrhqKjmraDaZKofMmuOKO2OaRaUeHEhC4IeyMiVhh0WilqJVoOR0o7Dssqfir2ZskGWLd5Lh95Tvyc6cCKsekY5eolTfKRHTl8v4klxixcxdPT7K0qaRl+Jy0i/pYxKLZDvOIuZI/h5CJE84I5uEpEReWuX9izH5QcHNIpFxKMV04XFqVvyY/Q6Phz6ZfYxdBGLYxbEYlLUXUqN50fq0BypcSA6Sw5M1s14fHcdPYN2pES1exbTbZCT2UiWVtqScHxLXWzrYxHdxHiJH41c7aL8v/8AHxi6NkVWHG3CJzdjpEc28Lq/qFQ8Zctu6Fst9HU4X2R/Mq04ujFkijzaS95QXW2xIRJwoyzR5fEupOa9I5GPD+2ybTEC3g7v1cvVjpQsbuiIolEemQ/aSjiwtORYyx9WRDIvF9HZKigXYykbmYizSLi6lhzZH9mvHhSYVsBIdWb3UPGbsYthq3Y5elQ6XA8qjuPSWE3xSQfDWx1EQyItJcvV8ysblxqWYpZfaJUokRZRQnKkOpN1QqStk26AS8KgbsU8HpLncxJckrH41+oJxvKmtVij1BBIENIOgpUUZ2uZPKiFWilIs6tUCqN2oZVVkOpROGqcFEjlFCDiQq1RK1TiBWiCtZVeYLi5NkI6YrPknMORTLM84Ns39xiTl2Te8HeODEZFyo2L2zG7LvBF5odOZVmCutOWxDmF4tJDw9KgG1EilJzN5lUilBpnUMnOERj5ZeJPDSW75cw8KPd2IuDNvKMcwyVLp0kufnatUbI9EN2veS0qTR2SbcDxcSAy4mJgNMkN+FDuG5JQdzZVPYYEtXsphSKG4Zj4UKhK+vMO4h9lVL1k4PCSnoZH+QNEvamULMlrVJ5V2O4pvQSSQk6lF1BU+VsF4mDRm68q7cJzbSia9AvGEaLmUpqqCMUtHOVXZVJE8lKsLcnNKlbLbPncuDwt8RfdivWNkdkRl6sRbb4uZKyyhjjb7HYPGnnlS6+yP6PdnCERMh0jIiWc9L93KLXV4V6LtljzGH226GMiGMRlmXieJYiV2+RZRbllkOZZMGNybyPo6HlZFjgsUSkwxuOYvKrR+mVGurTSIx8oqLe0IRyintJmKKpbKw7mJSFW1lixcJdJKguapKlFZ8uBS0VHI1suK3keLMS0WE42bG7MfCsGJKwtsSMRjqHlScni/rQ2Hlts9dsMWcdEScKQlxaY+JW9viu64cpcQ8PiXluE4mLcSzZtTcsq1WFYk46JC2IxHUuTn8fhI63j+RZuGLhxxuUt5LLHT7KfY0EizSFweGKzzDxi2I6S4SVy2+5u9/lIhiJCMZLN8SvZ0YZbRoTvBbJsh7wR1ZdP4ld2rjbo5fZ0rM4PdtO545h9YMfwrThRsmxcZykPTEkpxGrYSty42UW83SS48SdIouMeEh0qSIzHmJOYEhkJe8gcBiSI7bguOcTJDxc3iVtSQ8QkojLPFEVw1KWUfZJLaGqFEa6CRS0lyqkxR4d2W8ZkPNyktOTfNlVVilvIczcfZzJkG0LyxVbPHNp694QjmHlLKslcR06V6ztThEBJwcwl06V5tjDAiS34cpyfKwtoyl4zEpcvuprdwpb4jJCo0upGWjjuKT0RLl3pVe5VXbTHSnXFi3LLlTcTp2hUlyMtcVVc/RaS+tR4fsqlvGokuhDJfYiWOisrROGqU0naK1vfQHCwzB5lsNkHe8ERWNt6rUbJuiLzctIl9pW4pxaYlx4zVF9tRLeRLzfwrKXAZlq9pbgSL+FZV4tS40Eb89vYAzQzJONIArZjgjI2xtayQTonlTMk7E6gWM7U6lUhUSCqpFD5JZJhUSURLsgemZchgSdWkk1AtWdQkYSQaUR2hUqiUSGmh8KvMPZOOURLq4lUW4qYJuDpJW4RktonKjf7GbS3dm8MbtwRy5ZSFfU/os2vK8YGTguEOUl8Q2mIOcWb2V6R6I9tPkN2JyiJFFwSXMy8Yy0dLxZ8o/sfa4uSQyVdgeJt3LDb7MYuCJKfREmaGkNcJCNEIkytEcZfYPFDKqMdVJKqivAqm7RaPAHG/ZRBDll9lSADKiCC4xpoGAJ4tpwii1UFAt0jAHlSjVGorSsgEWEwrcZSip3YlgnKVFNWVZWyc1Y9JErSrSfRqP8AMmfIyliKsLXmFG+Rjy/HhU4h8KcAKfIgqTtFcFlzJ5WinEKWtFPkZSgiI3bowWwxkjNU4kUFHJlLQFpjl9lSQaypRqit0VWWlQyrSdukQqJKqXqgx7bYp6HJPpVCim0+h9BTgohjVFChIil2cVE6idFLSihbQ4aFyo4U+MqCJJ8kNFrsW4NOthyyQ6ZiRwRFtUGpVImVBDfKKgAQy6ooDl1y5epRnXf5dSbRmWYpeHSjRdCERFp8xKTY4dmk5mJEtg9lTQJRFjhyp1TQTcUR50vwqpMokuXXCKJbNSzOIFqwMZcSlt1UjKS6K4p9oktjFK5WWVC3yY+7lJS3ZHD+Txj00UEXxH7o5dK8sxhwRZIfrCGI9K1HpzxON2ObSObpXm91eE6IkI+9L+Vet8F/7tHmPOheQhVrw5RUZworrpghkRSVT8oKUk6cTFBNaJtGoykQquuqiiHcSRQY3kS1LNOOzVii0tkZhmWnMjBaxkXKrw29wxEfWOauYVQlpzeVHGKiiSk2xjgSTa18qIzmQnVlofB8hd2mE5HSmick7dKDeCIo1XH8ZU8qiPUj3VBHd+GRKW6oqMEiFVPrIeFFJ0Yx4kx64kKGxgCqY9mS7xNqSW42MjB1Y+wHMtTZ3be7ISHvOFZq3r1Ka2fUn4snFmXLjci0exIRGIjm8SiTIszhD4UKYlwx6uZDuK8oxT55W2ZY4kibR4WylESIUJ+9kWn+FQiqhVNZ5ybGrE+yZPiLMSHSJFy9KGNSiuGgilmjgTLduOYVEvq5ktLuOlcbnMrsnFDGKosl1SQXKqgkqJPagkSaFUpjlULOrWSYdEwaqRSkhUIAoCiOirApKPXMoWmLap7lEg5U/tkoUwXYnSTjFMFQhxUUU8qlEKRwFd2QNhd2QkObyq+w0TIiMc0lmKAraxvYjEZKyFliLu7KIlHpVXcOFKRCiXRuHmLUpNw/3I5YrJlikHDeiHWsh0ioo0zKQJqM8KpFtCOjElItbmJCgVTCqjTAaL+r8h4VHN/p95V7V1lTxellIUxKyNkj5C26OUu8UB3CnB0jJGbqXCi/LHByiSGcU9Fxk0VRg4OpMGXhVvb3MhzNiX2k8wbIZEMVTxKhvzsrWqoxNdSlMMiWklPZoTf6PzIFjSBllbRWWli45pbJazZ/ZZwiEnBl0j+LtUQMVdHLFvpHLFS2tprsdO7EfCJKp2ugsKjJ/sel7O4MLESecbEeEeVO2m9ITFo040xme0yFeT32K3j/AK25IRLSIiIqvqwPE5vCWefj/I+TNv8AXxxx4wQbE8Tfvnd49p5VLw/u1Wg7wjp9lWbFMupMaio0jJCTnLkycV0McwqsuLreEQiiPuFzKveLmypSdD5K0Vl7lcTCrIUt5USKX2VHmnqKezK2+mGpVObNRwNFpRFKKYMdE5l0iIZZls9mb7dPCQ8qyuFgJCIkMfEtDhTUSIo5RzLl+VBG7BJp2b+zIn5EOUuFsvuqwwN8QcJhzKTmqXCss7iIluztnCEhzbvTmUx7GTdIScIW3B4tS4+SNHZx5NGraLdPSZLMPDqlJa7DHhIRIcrnEPCsbstijcout7wuEhyrVDiDQ5mxzcQlqWGXZvx36NBZnu3JFERJTbm5E9JCQ8wrPPYkxuxLvBEtQkJFFWGF4c243vWXtXVlL8KiNFUTDtylISIfDmU61aGOqJKmfo+Hq3JD5STRv3IxIZFzIeSHFy83Ec2ZV187lLiQhf5pfaTzq2X4SFSLT6BdozWLNETbkSkJDpJeU7UtEQkMdPLlXs+K2gkJRkPUvNdqsPiRFKSbjdMyZ4OSo8tZpmiSY+3u3BzZS4lb4ja5pe0oZtjwlIV2obPPTxNEuztxjLUPLLMh3dBzRXW9I5UZ62yyTloKWF0Utyy2WkiFUmI2g5sy0F40Q/zKgxUs2lPwzdmaeN0UD7SHBGfXCK6kJ6EKP2DGi0mx4ScVFu1ebKOxeHxI3K0JnGpWaTaUeXVFZR2S2GO1zSHiWau2Y5ly1rTNc1yKqmpLSqI4KFUVrx9GSSpgySCl7UpUTEhchOxDrRFpRNqCtxBGUrzLq0S1SqJEGIo1TUlESdEJAOIw1UPtRWBR9kJrZKUco6UG3GPKpNHxHKSqcuKLik2Fs6c2pW9gOYeaSqQrLTmWx9FuB/Lr0WNLksvwXYuPn/uOj47/AF6Pp/0Aif5LbFyUurMOol6eIqp2Lwcba0ZERiTYiJcK0FRToppbG+yKYdKGQqYSHFGo2EkRIphNKbQFxNoWij58SUolGifH+VclLRpEoKcBJKEnouKQviwnYlom0T6K07I40HEUUEJiqk9g8qJV7KSGwThFOEEQFGFGNbBECRHrRLSiINq3YEgSVbRXElPMoDMbRuOlEEF3ai0VMBKwdBRRSdiUKq0RqgtKppCk7UtVaIto6lE+lUjbiaYqmyUvQSiK1RRgT2zJQr2TaiupRAF4lxOkioJhoJXNKBvyXOP9KqkQkWoipQqE1cZdKfW4y6VaQJKfciKryORcyE7dkRer8KLb0LVHMpRCWwwmuBmTAfPlSb41CEtoIonaoU3I/wAKWk0UY2ypOlYdwy0xTQazLgbLmSblFKC+wFN/RJkPMmO3AjxKPS3S1sx4hkqSSGRk+6VjXcQb8Socfx+IkLYkOXVJXVzRsBXnu2OJiUgZHzZkUIJzAy3VnkHpPe3rhFGRfHEsXYXEcq2u17WUt4MeleYuvk24RDlXc8a8VP0cLyf277L/ABF2QxVT8l4iUNzEC6UN3ECJbZ5eRkjh2T2wEVZ4W3m6RzLL1uS5lMsMQMRS4zXI0/HRMvLuThSJRifEso5lDu3NSBZHEpFwqPLuhM8N7LxwBa1ZiIfZUChDmkUpKK/fERFxKNNDKSoZhx0TRLUKQbiIl4VDmnNiSTzo1KI5ceZEjFAdJZ5523o048C7YlKJlRQ951Lqy6lXyML4kLWqZWqStCSVoSNbHJRqhwmpNu/wkoaShI0qF5MSkW0khEodu/zaVLjy6UaZjlg49nCupVNNNiqF8USJihukmVXdigR1KIhGgVquUIHbokcQqEnFVQgo0Skckp1yodVdkFoitSQRqnNkqIFohOVRRThGShCJSqKBJHkChqEJgVlqRDoKigSkBSWUVCEatV0k824pqjdEEqlGq6hJh1Q8/otJMsrB6KORylJVDLqktPeyk5H7ZdfRLozllwpHaSHSm29fMKKdPZSOQZDDVFNdazIzlFOYo24MeJFGVMv42ypdazZUZgZKS/aEMlEAcyappk+Kux1SIeFMIlPuqjIRFuJRzFzKM+2i5IpqgRDypIpPsqVbBxIuaoDiRaB7S52pcyl3IyLKo5CgsqmKyRIhULmJNChI9BLlJA5oZjS9g6kXFJP7B1SUizIpRjL2lYM4MLmpwWfEX/KVKS7HKF9EZqrYjwl9pSjt8sxkQj0lH2kbD8MHfwIhIebhV9cWgiO6yk3zCP3iWSTS9j4Y7M+w3lkq7FKEXD4cy0RXLTUmxZbcyxzSKPUqO7IeEYoY5FYxooDEkA6K4Cy3hZSRjwgc3eSjyyXQjJcezFKDvRRsirjC2ZEIlpRrfB+JSGrQm9KTl8hV2Mx+O72gp2Yy7svd4VbWDDoiJDm8RZUyxticHil4Ve2loMe8l91cbJ5L6Ovi8OK2QWLJwnJS3fF0q/Zsy9YQtuD7yPa4awRas3mWqwzDrQR7vV1Sy+XiWWU/s1Y8OzPsuCJCLLhMucQlmVoxeOjHexLlcVj+Q2H3M2VzpGJfvVoOGiAwISjwyESWWUV2bYa0RMKxAnCICbGPx+pW1nZE1ImSIemWVLZ2rQ5fukrqyo3GLmXl1JRojFrZXst3LZSbKXxyo5XTvEyUi4kZ4BApCRCPtSRWrpvN3g+EksaBt8QiPeNyH3hSukLmYSj0qTV0dMRKSh3BNZokIkoLnXsjvlEeIh8QrF7SVEZFFaTEHcshIsvsks7iDouCQkKib6QqUfo87xN0SkJeUuVZpxomy5hW0xTDhkUSWXxtgxH4JdjBm0czPjt2RhLxKY1cRFVDT/MiOXWXUtXIx3Ww2IFvOKKzV/blLVJXFHnOFFbwO5f9WyRS0kOZMxy/YTk/bZjnG04AXomF+iXE3yys/Z/3XqWx39Gh90RK5cjzD8GupByS0c+Sp7PmwRU/CnBFwSX2pgn9GvChiVyyTnNmc/3Vjjn9H3AxtniatN24LZEJC45LKPjUbkHHHfR8gXJFGUsypsSelqH3ld42yTT7zRCUWyIRl0ks9eEsrdzsK+HbZBeok7elK7WSZ2rbh6MsnbGGupVKabRPBEBKS6ibWqgDESVSpKoSDIp9KpK1XKEHUUtnwqGKlNkii6IFlyorJ5lF7VaYYEso6ln8jK4jscFLRMsm3JZR8q+of6PuxQ7tu+IYvcvTmXlXo02GuX7lkX2SFvUJEOUun6V9fbN4aNtbMgIjIRzR/wC1jjBzfJnUjFQVIu2cv4USnhQk6lU9aB9hIoZ5UtCTTqr5IgnakKiQarhqiIfPYVSz4UKiezWOpcKNt/waG0KFEVtNqnAnNC1Kww16UXt6cyC2lCubwqlEjlZIaR26INEdqiIoINEoJKIg0UovkxIriqiocVZfJjCL+VdLlS1SCHhUKbFrROCiUap9KKUROjm6JRouBLQVdE7HDROKiZU0laqyx1KLiSjROQ6IDoaIFeVIIorYqIqhzaMFEOgowii5FiQXGKIILiRUiUKI9KE/XhRiPKowDIlQMo2GsGlMQwGKVXopRoWgpKilGqWqFliUSVolEl0VaZaCBpRIJjdEaitsgyjaR0Y6iUpVmLvxGI6iQ2SzO42+RyEdPF1cqqwwiLZG4OaK0Q2Y5Tc08KDizndkOlv3k/Hp2xM0meLekG1EiIo8K8Tx+gk4W7FfQe22Hzbc3Yxb6tRLwbFrFxtwpDEZLqY58lRy8kdmVcGKBU1a4i3xRyqpMhTJugKHTRRdio7aSSXyGcEw7j6HNMrVJWqL5AljFFFQKGib1MGcVVElsRRnrkRHq6Vp/RH6LsU2guYYczFhsu/u3CEWGdXF20keX6KL679Hf9F7CLHduX4liL45iIpNtS/+faqli5rug4Y2fFmzezmJYk5Cwsn35cQt5faXtGy/9GLEHWxcxF9tiX1IxIvN8+VfZ+E4FZ2jcLS2ZYb5WxipLgCPCmY/Hxru2bFis+WbP+jTbCOYiIuYi+6Jpt1/R9YHTzcv/K+nDjyqufqt0PHxv0H/AE2j5Xxb0EwlHNy/HastjPogdbHSX3f3r7AvWhLLFVV7YNkOZsUcvDxVrsV8PE+HsZ2Afb+rJZe/wRxvUJL7Y2g2dbcEsvlivMNqNixKUW83hLKsc/HcQZI+Y3WYo7V1GI8K3e1GzRCRZco9MVibmwIS5YpFUZ8qVB6FvEx8IqMLwt5R8xcRIoObz7qoyUMrVLWqcdEytVChE4aoYpyhBa0S1qmknN0UIK5XSkJcVUoqEFbbT6CjR7uSjbxQg8CSjVMEUVuqhBrgKM5WKsCUZ1qShCE8ZEUiUm1dSRTIqEJJklGiHNOFxVIgw0ytEUxQDqltFoQKRRwJCOqaB8KXLYaRMapmUtqhCojXNxKaLhFqiKTxDrQr9uQ5tQ9KijIS4hU9twYxzF1fwpl00RDIVUmFje9nT0yQnQiXTwoNHuEhirCtRcbyjmFCsnE0VYxl6Iy1EloG8zFlQ2bOWUiirJpiOUY+IlTy7AeGyFdWLf1ZS6YplgESiQq7tLWXL4Ut4yLWkRKXMOYfMp8xFh2RXh3ZDEfZXN27TspesQ3abziIS8SjtuE3LKJdSKOUY4pC0DdOSiMRVk27vdLYt9SgMXTZFFwfMrO1C2IhEXBGXCUkE8tFKKfRIC3ERjvBLykifIxLL92SMzhJbzuyGOrKSkM2xCRFvCb6hzeVZ8mVMdHE2gdsw20UR3nicGIqNd3Ij9dvEZ1s3JETxaeL+FUbzcSLvBL7qzVbHXFKgTt2UuZSrfDyuYiyJS6lIw3Bt/6uReXL/stzs1su40M94IkXhIv3o3k+NWVjwynL+CNhOyTbDYk+5FyPCI+zmRLy0Im92LLe7Lljm5SIhVndYc4eRxzeD9pWWG4ILY6e76Sksb8mUrs6MPBinoxgbOxzE4Mi4RV1h+EgIiRMyLp4ltTsLaI6dPVKSKzafo92Plkss82jdj8VLoxl1YDu4s2zgkXEMkIMPIR7xtwh5dK39XSHK4WXT3Y5lU4uEtMhHm/ElQl9jcmEg4RhokOVkpcOaSsAwopfWDLhyp+CXhNahEpcXx2q7O1nEhIub4+dLZUYaItixu3IvMl0uCQq834kMRIiHq4UEhHLvJEQpr1420Uil5RV9IiWyY2+IjGMvKiUvG45hLxIBvMGM2+84sqBbOtEUSEh6SSrHkyLZfXj0iSG5bEObK4PNwpt5Yt8Q5eFJat5YtueVK5oKmM3sc2lCedEilllzcym0HKQlxcSq7piOksoqyqA3duJCUVn7yz1RJX5lEZfBKEZiWaP3UUVvZUkzC39u5ItJdSz2IUmOYYr0K/thzcKqbqyEs32VrhJIyTwOTPMjsc0c0lc4fsdcv8AqxlyrVtYaJFw5ulejbE7Llli5qjL47VtxTt0zFm8PgmedYH6HL52OUWy4ZEP3Vv9kPRXids4OkY8QkMfZXu+yuz0REiccL3Vr2LMR0+8uri8df3WcybS0YbZTZ19sW9/FzLyiJLa24QGKkwQTNaeb9Cnxs4nVHuqSEh5sqVxBqSnyV2HGK9HxZ/SawgbTFpD6twcviyy+0vHbqJeVfXv9JjYn5Yx8sESJy3bLKI80fwr4/cGMpZSHhSFKNmXNF3/AAQXKIFaIxnmTVrxvWjFJ7BSXVquGqTtT4sqziqupVJRdQURQ2qQk7sXISDOxKnGkooQUEeiFQU+iGUqCirHtBIlu/Rbsw5d37IZoyl9r9azOzWEOXdy203qLSvr/wBDGwfyRlsnxHfDFYM83KVejd4uPuT/APk9E2asBbtmRJvvGxiRLQC6gCEUjdcyNOujW9kxs0USUahJ4krbKokyQyqkkmF5lRVD5J1CQKEl7VfJlUeA5lxNogp4rmpBvYMaIoUS1FEbRAxjQ+CeNMvCkEU6g9SlhDgUltAbojDRC2Qc3XMjtICJSqJEC9MlxCu7VzwqMNxB1ourTKkTlSAFFO7ExEpRMiWh1aLpLqJYKEsHREolFE3anEo6i6lF1BRRbKKviEMEUZuiVtokVscyriQGit0XVFEopxJob2paxT92mkClF2AdrmT2BSUbzKWAqMFgzSjRPo2lpRUUMXdqdVJFVTLEoi0FICeFESLi1QoURBquGiJBXxIIdcqobgpOZi4lJxzFBbbLm0xVVhNubpSLTyooxSAlvRIur0iKLQ/wrmcJlmcKXi+6ri1w0W80VOqGVGwFFmO2hwZrcFlHSvnj0iYMIk4Q6paelfUOMhJkh6eVePekbBe5IpRLiJaPHzpaE+RiXG0fNWNtlFUQM5lsbu0IrnddWpQMXw4WnMq6jh9nM+RJ0AssNHLJXNlgrTmX7yg2Ym5EGxkXDpU7DnSacLeavKh4Iam/ZV49gO6LLpWeuWYrd4w5vBWNxASlpS2h9FfVK3RJWidRMi6GKB+jH9FLcN7NWjbAttlGRCEZEREWYh/rXsD9cuVfDX9EH0jtWLjlpdvi2JEO6Epas2US+hfauFYq0+2JtmObq7U6ePqUejS8bpOhxCSjvhzKwdJQLmiPGx+KVsrrguVQ3CUx9tV1yPxFboySR0YRTI9y/q0qvfOSc/cFLSotw6i5Ik8O9ka7os1jTQlwy+yrx6pFxRVRiER1F8f4pE8q6FvxG10eY7W4WJSyiPx/gvKNqMGbXu+0JSyjHN0rz7GcNEpLn5pRWzBk8J0eG31hEi4RUJx2OVvLzFxEtztFhkZRWOu2Y8KUsiZzcmFxBt0IkhAo/wAoJHEh5kZmpoGVCRElU0QUI3Y6tUtCXUFcoUKNE9NAk8QkrohMuDH5MI8xKBQFZ4sMd21H1YjLxFmVcjIGNvu8qCJKwt2pNFlVeQoaIGq+lAfKgtileyqmQc5FAqKWtUqv0QHWiZvEY6IBUQkJDbi52gp9sTfFqRnrSWnL5ZChab6IitqSfSic4yQpAolzjSse1YRuqk9qENEUaJT6C9BmDHiyqZaPEJSEvjzKKy2JKwdFvd92RSWWUuJEqGX+GbwZt5i4lTMukBZeFXwCQjmIhL3VExK2lHLmS+TfZqVVofb3O9jmi4pdCLSXtKnDLqykrOzuNIkUkDYaLG4syEZt5uof+0JnF8sHBkPMSSj8crYyHxLnw3mUhzFyiqsIPbvNEQ8Q8ulWlxYDu5CzEeaQyWb/ACS6BSbEiHq/7VhS2k2MhcEvF/yhU6IRn8Pzd33nTy+0lrYuNjmZH2hUk7TKMt4MuKWVT7TA2iEScfl5o/a+dX8i9g8fozjrpCUm5D4S/CpTD1zpEnM3Mt1h+AMD9Y305UUnGmyLeDIvD+LtS5Txt6YyOPJRiqWb7movFm91WOF4II5nPZj/AMq8oW9iLDZD1FGKnsWJN5n2xKPE4X3UuWWKT0NXj+2Ps7STYg2ThdLY7sfeVzhmHuN+sEm+qUsqqrbEz3ncMFu+IhHL7XYtbghuuZX2yFsuaX2lgnkv0bsTS0iKbAyERecLp3avrTdtxEmyzdKk2+DCJCTLeXi7zKPlVs3a7scrZOF4fvFWqVK2jdjXsr2MGaczC3HqlH2UhYYIlFkijxcUVbN25OZiYIeksv8AqiVsDEcwjEuVIo0qX0UYYcQ5huxGOqQjmVTijY5ouC5LqitO7YDEicHdj4ZLIbR3rDWkd4XTlUr0Jyya2RcPZFvMTkekSV+bje7E23HpcOb8SzGE7T2xOCLzbfmktXhz4uFlFvdlpEdKJ42heLKprRbWFye7Eij4hyl+5PxF8HBEhES5pKaFuQt+ryx4VXgIkRDEZJc9DY9ka0sRlJuQlyjpXXZEOpsi6iRTacAsso8skN0zEZDKXUhTHgmjkQiThCpDYEJapdQio7FwUYvNjLmFTG2uIUCqybHDamWklX3dsQ6s3TpU1l+JZlz12JSlm8Sb+rDV+yiJv3uFV1w0UtUeVXF04PDFDeKQ6cyVzQSVlO6JRiWYVX0Y5ZF05VoXGCIVPwnDSkOUSHwq4tN9jnCkC2U2W+VkMmyH4/avatkdkNxEvdVdsPZxjl0r0e0GvMu74GCP9zOD+R8iSbiGt24ovauTK0XZb1Rwrtjjqox0UigoZoS1FWR6oJUFSCQTJBLehqKzGrQXWHG9QuDFfDHpx2Ldw/EXiFktw5mlwyX3xUFhfS3sO3imHOtRHeRk2XUKVKNbBlTWz89Hm1HbFbT0g7D3eGuRfbIRKWaOX96x8VqxSVHNywd6BEKbSiOTnCgUFa0hDVCCuGidUEoIihtUiNUUByihDq0SUon0SRQtWFxCgrbZzZ528fFpjMRaRTcN2fuXREmWScEuIV9G/wBHL0bui8NzctxjpkObi/Wss5+mOw4XJ36Lr0G+iYbaNzcj348PLq/WvfGLYRHwqSxaiI6Yp27SeKOiv10gBIRCpZggHTpRBA6VRR0pggiUUKbOomkSfVCOqlP0VYtCXSSAkl8RUCPDqU4k4RFI3ROrSK56YTiO7fCn0JNGqd2qWTiOoaeNFzcU4KKkwQoVTxQaUT6EiaIGolohBVPmoiB6VSGXUhT8qWhK6Db0OKq6lfKmdiWlFEgAgGjUJRBR2qIloJRDCnjVNolREHUTxFJSiKIplWCdRpFEfiSbSqeJcqW9BDxBPGi4U8URTFAF1KpRJOopRR1UKtEatUm7zKUQa0CNSniTqAnUbUaIMqKSgolQS0UUbCB0FLVpOpRGor4AgKNogAjRTiGMiJUo2BdA6VVXimJRyNZnC9lLfXkig35iR8OsRHUi4UWm2UjWGEWdzUtDhLQiKJdN5dKfZ0yqnEND60S1onp/YpxZZW3wDzcK8b9KTg7kh0kvbLujccy8K9MrjQkQtubz3YjlTMEOU0IzS4xZ4/hOHibjh7zM37yo8YaNx4t2Mvuq8w1+G8EdPMKiVqUiIeJehlFLGeegpPJsqra1faZcNvd5svMSpm2X3M0SIl6PhrAkMiEi5hVbjVvIiFkd2KLg5RSHOVS2YgXyGQkg3VOKKv3sGgUnCkXKnW+D/KXN2LwsiIylEi8sRWV4UmaFlMQ+OZOw6zdfdbYtm3Hn3Si2y2MnCLpFX72y7kvWCI9X4V9Lf0Nm8Bw2rz99e2w4u4W7bK57vct5srbjnzfPL6UcMDkm/S+uws3mQhVPb/8ANng+O+iLHsNtBvr3DXmGNUt4yTg9RC2daitH6IfTnfYU422+4V3aDwuRk2PSXZ2kvtva6/s7u1fAHWLkHBqOVwXB/f2L8/PSps23Z4jctskMRcIhHlktDfxxTpovwvPyN1Omr0fcno29LljirY7t9sXC+pIu8H2qLf1dEhy5l+XOz92+0+JsOE042UpDqX0X6NfTxc2gttYiJPN/peIfL2JXzY/ejv45YMz/AEdS+vR9bEKhXVvIVnNlPSBaXzImw8LkuXh8S0J3AkOpPjOLV2aliyQe0VN7Zcqo72pDl+6tTcmqm5ZEkibo2Qi3sxuIOF/CqHFjIeKXTyrY4pZtjpyrLYm34VmyZElZp/gzhsE5pHMqPFrQRkPFxLWuXG7HKUSWexSglItUuJIc0xGaDevR51j1pqFedbQWkcy9bxpkc3wRdKyFxs8TpSjl5S1Kjh+Vhvo8uJkpZRU2wwV9zMIl7K9t2Q9GYuEJODEeUh1ezVejt7BtNj6v8X710vG8Z5FfRxsumfLF1gT7YyIVBI45Yr6K222WFtuIjmLLxf7ryzaTZSPq9Ufj86mbx+HWxDdmHTexPumSbKJIdFnaolD2qKzwVsZE6Xq2s3m4R/qVcwEiiKlPGO7gOUR1au8LmRIoedd44RkWopEkFtMtriIkPEnk8QkMcpFqVpWLlK0XDlru7LelxFuxHmVFcdKu9qLru2GB+rGTkeYlRvFlVSVdFwAAUSFS7lgibkPFpUIlf7PRcZcbIZODp+P2IoQ5EnLirZnakkoaPizW7eIR06vaUVukkElToOKuPIkUrlQHgT6gUk0qoW6DjH2NCilWtyQ6SUUKJ1BVJklEn1MXNWpBcbTG6jHNq5U9o5IJ70X0he3LlQBNTI5VCeHMlVouO+iQ29HSre2cbIe8ykqITRQqsuaBpjGuy032bLpVjYXYyi43LqVCB5VMtr3SszixqkguM2JSIh08KrmXIq4usQ3giMcygu2ZcQkiguQTCW7vUpLdHCzS0+0qqlCHSnW9/EkM4NhrJE0ovHlkTntKbQWy4nPDKKzv5ZHlUlvHBjEm/NJJlFoNNM1+F2jTg94Ij1ERK2ZtrQcrbco6iWDsscISkI+1m/0UsMfkWnNyis04zXRoUom0bsQcKIskPhIv91Y2mD22beC5LlIv+VjbS+fLM3IfMMVaYa6/LvBFyWohKPtLPG07Y+P0aCgNsERNtEXTKK0OG4lZuDF20clHmIvs/MoOAtiUd43IvaW2s8DGMW2ClxZY/ZqlznfRohBMFgzDTY9yyRFwi5HL5VPd+UmMdyIiPU2rTDMDKPE3H44lGxMmGMzzhF1RKPu0QPIzRwSEw7DCEpkO7LqLL7qtScIRiO7IlVUx62cHuybIeWRfZKiCL8i7kYj4S/3SZZGnQ9NEh191wvrm4ll3YiI/H7VOtmijIniy82YvdVcbbojIR94f90CxxopbtwSbLy/7Kk72Ql4qzKRb+I9WVedbUYY6TbhMk3HqKMvaW+u7wnJSHLzalhdqbSQkW7cIs0ZOR91NxK5GbMrjo8gvLJ1t4t5KWkszZfZqvS/R84/uxGQ5coyXnmMNxc9XH8Stdl7C+cclbOR6SKPvEullwpwtHEwycZs+gLLfiI5h0prhSLvGx8QrMbNYtctDur1twf7QYuD7q0Vk+wZZXpEXCUhXIy0md/DJNBatyGQ6k1inN7ysWo6Y+YUNqoeJLTTNSRFcpzNpWatjlU42REdJR6VEq03zKqCIdwI6hL3UN61kMm/NFWAMj4k7dx0lFR0XCNszxYfyyHpTm7HqVrd15syYx4UhU2aY4n6A2mHDpJX+FWkdKjs04hFW2EBIhR4/7qAzaibXZ22y6lrLRuKpcDrlHKKvml67w8aUK9nkvKm2wlF1aJK1TSWpqjGkIVEx0U4kytFQaB9iZFPqk7VAhvYmuhlRBJOrVVRWzEbfbEMYlbOsPN+sHKUcwl0r4n9KHo7ucKu3AJsiZ+rcjljlX6GGKo9pNmra8bJq5ZFzxZkPBLoqUFJH5m3FuQlmTAaX2htV6A7R8S3bYtkJFEh5S4fpXzx6S/RXfYU/mbJy2L1bwjlHxfOtEZ0jHLxjzWqZ2q0LCnMxC2RR1RElEK2LqU+aK9i5YGiOnONKda4ebgyFso8yv7HYi+dbF1u2ccZLiH47VJZnHskMV9GSZallitPsnsc/dvCAtkMtJRXqGw/oUffISfEm2yHpkJf4r6Q2G2IatGGwcbEnGx1fFUt5uWjRDx97Mr6F9gmrayFq5ZFxyXEPFmXreH2DbXq8o8qVpmOlTGaKml6NQ4UWgLqCnKgGAMBQTHlRyqh9iNtUXQCtF1E9wEMlUAh4pKtpGk/tRtpAsFUEIxUg1HOqU2UeFiSfvE2iSi5ZoJE1zdUCiJSijZYelZIokowojdUNsBpeiSNcq6lE0apJJ92AEKiUKKOVUZokRSa9j61RAFCEhRhqomWOoKal7V1aIkghx0TmqpginjRWRNoKFUSlUGhrqEoVZLqaRtxBpVPRcxcm/RIoSkNqECODiG7GIkiS4iIUCaQj6lEUyY2aJNRWzRaGmKqKXQcaorSAzVHbqrotscu7V1UlaKmDYWlUgIdQ8yeFRVoJBaCnUBBoSKTgiOZHog83BFVly4TmUZCKeYk4Ui0qZbWsdSFAtIi2+HiIlzKUzXKpVKKI7lKXDJWyLQr2lOtUtayFNt6qgibSi7sQxqnqEIWKW4k2Ul85+l5vvSjL4ivoy/LLFeF+mJ5jvNIly+yt3iQvbRz/AC5vqzxmzLMQkOrh4k+4b5VNwptp0i3cpKJftxLUOXhiutX67OVBtSey7wG7jlipGL0bjpiWqQl8UWYt8ZJrhl4UX8tuuCQlERLhIfvJkWqoKRHeZ3hcy2OyGGZm2BbISe4hGRR8PEoOyuCDmfe0iMhKQxkOrV2S/Ytj6Pd/eX8Wm3nN5lk2TbYizpjm09v6lpweF8j5N0hM/LUVoJY7At4hclbYaLly+Ilvicb3Lbceoq9nzKFi/oXxDN/6T5bviZbkJdQy4V7djzpYY3bWOGNNM378d6/KZMNSmWXs7COv0LVbVYxiZWTX5NrVpzsGjty820X9Ui3ZU+n5i+haJ4n+qglxelbr/X3p+vZz15kXyclbX8f9rVUfHOIYBd4fLvnraPMLjZF5VjMUa3rhG6TjjnEREUl9zYtcYdiuFbq+D5e4Hc75oYui/wARVFvs3fz/ALV4VtX6FxC2eum7tiLIkRWxODvWx4ZCNapGTxpTVf27rf8A2/z/ACh/j+ZDt/Xr/uv/AJK/0e+lTCLGxrY3ezNpEhiV2z2OOudRC4M5fsqvMdubmzcu3HcOJzcOZhbcEh3fSpOI7J3LTYuxylpiMh9r6FQXNk4JZpfeWPPh+SHBqv5NuFpT5wl/oaT0Ru3f5Tb+TPE2I5nM2UtWWJL6S2e27IXd1cxEuF2JR/dlXzx6HMUbtsRbBzdti/3e+IZbss2n5/z/AEdtfoXru119bNEQPEO+KJDFNweBwxXf+p2PE/NThPhK2j2FnFxdESEpSTnH14Bhu23yMhkREyX1ZahXqGzu0jVy2JtuSEhXM8iTh+rPc+HLHngpQ/5F3f0qUlmsSDUtDW5EtJKsxEBISyrkZcvo6kcS9ow14MuLT4lW3a0t3aalDtrASKXuq8OS9HP8zFW6Mr+TCcLTl4eYlf4Ds6MhIh08wrZYbgo6o6lejYiI6V2vG8a9yODmlqiHhOGNiOX3RUi/ajqHKpVtcCJRQ8SdEiXSclGOjm/03J3R5ttO2W+lmcllbERUW92Y7kic9YXu9K2OJNiRSVbe4l3ZAUZJHyLdsVk8O+j5x9Iez0XO7GXlisC/bEJRivoDaViUg5tSwOPbPiQkSySfJ2ZcvjOC2YDexGA8WokOpcKZeM7siFBbcQ2Z/jtWg9MqPavDvBItIqNU00KK0xDgSrh3eOEZcRSQXnEN0kKpqSYePGPkrDAbrdujm1KsGqM0WYUUJqIc8Ton7Qj3nKqoKxJT8TOUSVfWipyTYWOP6UXdjF1uI+s4h5lCxC23ebh+yo1s+TZCS0jTg3LZR1cQ8RfxURSXNUkL3idsy1DS1JGvrQmy05S0koxUWR/q+x9qSscJIrDuZR+xJJS7JKqNA2OUSjqUW7pLpS4cZE2nUoKqa+gIOipcpFSGH0a6t1A7UEoWjRCfIshNFa1KtBxHB5InBoZRYOZdQo1tclGMlCauC4swqSFRllS0q6LchK1LNlUN5tXdk62WUo+ZMLdCWmXUJZU2jO0/sohoQpaPcytbtlotMpcukRUKtsPiVfHZOTSGsXMSVlaPN6lVkzypaU5iScuGxuLKl2b/AGfvGi1auUYrT21yJREWCIeLNm9peP2lyQFlV7huPODqHL4lz8nizW0dLD5EPs9u2caKQ7lndj1FIlvLR25KJNvFIfjiXgGFbUxju9424XFvJLa4Dtm43ERcJyXxKXYuZki4+jpYssaPW27x/eRfzc0S1ezRHdtmi8Jc2b7SxdljBO5vlLIlyxL7SkNXrpZd4254SH3UpOhqlfZfOYa1pbEZcXwKmW+GORGObpkoWDtkJZnhHp3f3lbVfiWZwi8MvsqSd7GwoiOYc5pISl0kS4rIhGUREi4iiSu7ciMZRKPDLKq29Yc/tJdOUUIZAaYKRSeEfC2oGPNtk3F4Sc6uZWbrL8cw+yQqDiLAiOYi8IjJFFtCpdUeM7WWDW97rKP2fa7FU4XiBsPCMnHM3hXp2OWLTgllJvlIl5y8xun4x3gy4Rkunjy/qcbPjUJWj1PZi83gyEizdMlqm7MCjJsZeysbsjtE0LYtPW7jJcMmyH3uzsW5sb9p0e7KXmFcryJb6Or4clLRFctXRzNuFH9GWb3kjdxHK4JNlzcKlm1m1R5U27oUYk3L7KzcUdaHQ8r0uXL7UkytG3M2YfKoLFsUpNllH6kvukpDJdKPbJSJHyXlKXuppWxaiT63HUuN8YoP1QaTI7TOb7yO1aZk+2bHmkprbUcyXEc3SHt22mS0OCWYjFUTByLStTgltpzfH+K2+JDlNaOf5eSoPZp8OjFWI1UGyAVOBeqwqlo8rldsf2Lu1LJDknL+RaFIkMyTakhyV0gxaku7U2lEztzJb7IHol7EyhJ4KiCJYp9FxKyAYqtx3BWrtsgfbFwepWhLqURwIefsejPDxIi+TN5spDHUqLHPQbhb7hOCzuyLVGX2V604Cb2qOMfZTSfZ5ThPoYsWBIRYHdlzfi7e0lpcB2SYtB3TbcmeVbKWVNOiGcY0VBUiqtcPBsYtjHpUmgLj1JZJaGHRRAqlpVJUUdAsKBLu1DGiWlUaigWIhohJnYr4omxpEhUqimCjFXMheugg3al7UCaWaBuwWGogOdKWlU06qF0eGdiStPiK6haoola+Zc6h1jKJwoJIlKoGA5aC1qitKONUVolSCgGJNKiTtkuomJh6OoKL2dSQUseVEA4/wLSvuowEhjXqTiRJFOIbqJKNRQxT2i8KsAkBRLUE0iXCagXqh1EkUtKpa0UBFT6USAKdSqt9EOIk6hEkrRP7Etsg2iKKQaIkU1aCHN1UsVHGikNIgQ1KIoJtKJwo0RhAXdqaNV0VJMHiP7EhCk7FxViqTJ0MJ2KRuRIcCIulSmsoqwgzQow1QQqnCSlFUG7UNykhzJKEiKyNWQqV3eXhUgelNcASykoR1cb6m0LdBFtSqSpKIzdCWlSG25FlRw/ZgTdIq8QZcKRCS+ffTmDu8Iib8xeVfR+KWRCMt/u8vsr5p9OlHRczXIudWnlXdwwUcZw/Km7PK9nMc3DhCQiJFxImM3bZERd4MuLKs08WaUpJjz5FxJnNNUzNCFPkWDDcnNW891WLT5CUd3LMs+w5HiV3glY94Tki5cxEri03oOezUvYu5uW2tzuWyHNmIvd4f7lf7PXBWZC6T71sLkS7siHL1RWTcxRoWxzFLlIiLzEJK5Fze20d8O5iP6PLHml84rr4Mmuzn5I1ao9P9G2OEGIOYjctPXNo2JC2RP7sc2pwh+lzT83zLYbSemMb4RasLEN3pbeeJyUuLdtN0p/jWvYvErW+fdZ3Xy1tmyYEZMv/AF0dItxp2l/ipjG2JEJWzDDTLereS0/5Zir/AFLS3jlJTa3H+WYoY/7l6fZoio60zcmTjNlbN+rtm3nBK5fc1OOF29pdn0qIDbFjg7jrjgld34kJPuRcIhl9W321qI9nzfP86wG1t6/eE2Ij3bPUXtFLsVXf4sQsiD0ni+rHhj5aIMvlxVvZpx4NqjcbH3jt843asXfyS2Yyi6+JEyJZiIiEu2RfmpRe4Wvoyw/FcHFqxGN8wXe3pskFX3PNXT+qi+cfR3cuNuNmTbbgtuZWS9WMubmL9a+yfRyDXybfjeu2vyn6gt2NJDxNiVK1/volZWvg+RPd61/0aV6oGTk8yj691S/5NukfIHpI2EucKuTYfa7DGJE8Pq4lGMfn6v2rMhixC2QkO+ItLpEW8GP3V9felO+sblu7woJXbzQ1deOW9dEtUn3XOyjTVKfr/YvjrGcLMBcfEf8A1t6Tbbm89Z4R7e0h/X2JWSUljTqr9f8AevRq8TJHk7fT7/8AOyLdYo4WopeLMrDZDa9+zfHdkTjP1jcvs/Mso68m7/y9Qrg+Vjc+j1f4/wDJvB0fVWyG2bV22O7LNxNlqWytXBd0r44wfHHLZwXGXCEh1dX+S9h9G3pYYFwRxFzdcpRk35o0XIeGXycWj3vi/kcefFyT2e4tbPTKXCraz2YEeryqJs1tTaXIyYfacEuUhl7K07d8MV0sWDHH/Jj8meSWvRW/kyI5VEu7eIyV/W5ElAvqCVCqtMsygtMyRw8tNGNvjiXKhv3Bcyl4u1y8Kz7z5LF/WXo2w8TgroW9ueFVOJeFFvHPaUcRlqQrLd7Ani5aoyuNW8s2aSgXtkJW38OpafE2lUExmEizdMkOPLxbRjz+FBqkjyHajZ7UUVhLu2JstK+gsYw8nBLT4ebzLy/bHCSEtKOOS32cDyvEeLpaMLJSLOuZI83FLb0WhSs5M17OvdRRUdEOuZNJEFCDW2INE4STmlxApQUp9oNdllFRJIz1UKgqmXiOmpNhek25IVHim9ir+3ZWWCas1hUbfZlHqIfvD/qs/cW5NlHh5kTCr0mi6eZXL7Yut5c0tRcvLHpqmOKkrRk58WZ+oIe6UitCEoojFZEkPQfKwlqER8SYdMyMFc0RXXFBHLqRctF8RhHJAdt1KbbFPep0pXIJaKl0EwSirImJKK5bo2lRphlvTOafRRd4lCISXA4s8o10HKHJ2W1tIupSQa4VVg4pY3hZc2X3kPoTW6Le3dFvK8wLnKREQ/ZUa4GWYWyEUT5eRNxkLn2kto85pHN0qoydhvHZBMEhh0qZdO6h3YimWzEuKKJuxcsddEEw5RilA4qe5amOrMorjckLjaYCbiyZhl3mzaVp8GxJoSlKWbSWlYo6R4UW1vo8K5ubxnP0b8XlqPbPZMOxlridYblyiUlp8MvDj3JMudUYrwiyxLNIW83tLXYVjjuWOXpFc+XjSj2dHF5kZSR7Bhl6/vM27FaZx/u5E+JOcojH3l5bgOLGURJwpcMvxLWjjDoxEd25zEQj7pLPOL6OhCezSW20LujMI80ZLrl8XSlJyX/0L7texUh0J0RKRN80VPw9oR1D5uJK41pmlO1ZaWjpcLg+1JGIHC5fdQAFgRytlItObKpBiQjwx5ZZkFsqiDfWROCURFZR/AgJzMyO85swreW7HKJSUgrB0v5VqhJV2ZskE2UeA4S+I5mxdbiOqP3lZ3GzrGsWStnOZsvu/Qr+wqQiIkIoeJ1IeIVnyytGjx8Sg7RlhbuWizEL49WUo+JSmsZbyi4JMl1fi+hWVpUSLvBRHLBopCQyEuFIWzoLog0alp08yFcYfxEWbhJI5g27kVs4410ykPskuYunxH/2WZD+mb0+YeFLuQyoiMbuUCyuc3MpNbIV1bZp0ZCXmFSbJkhykWVTiWnQNi3EUaPKpZsZVEmIkq4W6KnLVk3DrZwiyrYYThxcRLPYNejlWttbiURES8S7vgePBK2zg+dkk+iyZYEVIFR26pwEu5iicWXYVxNOqQjQSJNaJ0LvEOSaucqh4/yWmcZJlXEI6p4UQMJBwJGpWKC1REVEYUKp9EwKItKIoqwWwRptKpx0TEV8SId2JvYlomkSBu9ljYptUpEkqaogCopKCSKdU5sVCAwBP7JIpUFMBMh0QZFJ2IlaoZVREG1TU9JVU+irGmgHRGcNC7UosFFCNGcogVUIKJJZJBomSUIeH1p5U2jiI5VBrXMuZZorQ4E8CTARYS4ksUosUaIlUIMqPSvUiiGKNE+hpKp4dSMgoCnUolGorqKrZZ3YiUSUon0pFEUJ2pwnypK0TKCjTIGmuGqZSn8qfThRpi5PYRupIgoYURwFSyDxFPiuCvwKIHvKT30QbUEQW0QRT6US6BBAjN0XUBGpRGi0c0KKAJG0Ruid6KHNp9U2niXdiEgUUqGJLqkrSIOJCrQl1KoitlNHJK9KanqcixwURCqgtlH+LKiN16ldoIJQkQSQa1TqEoQeVE3tTSJCccihaKGXDTfhLpT7a1ud4O4clLTJPs6TLKthhFsIt5hzdK3+H4y/vZh8jO+kZnFsOuSb7xsS8JCvk3071EXXAGUpafZ5f9V9ebVmUSFzeCMfqcxF7PzivnD0pYVbOyKWbwlIfEXMu48VxRy5NM+bqUzZs3uod2Qyyj95aHFLNttwt39n8Sp7ihdSyziloEhtqW2cdLkVHCsc0ZJXHZalSdBcbJO9jxEUtWZWuG4qUYORbEv7NZw3+VObdlqzJ8PI4gTwWaV7GDEYlFzhHmHy8KfZY2UYuZR6cyzRXYjliMuYkKj0eJG/K+gP6VLoucTxduRbneCXVIpeVdhu/dISbHeOatQiIqmtmRIu8KIrQWDItkJSFwRzDmiqxSc5fsFLHxjrs2+ydw6OW5tnHCLSIxbb83/C11htjdi4TDT5WkcsmhFx8h4Wmyc+Zof66ryDENpXyjJ9zl0iMR6VZYLirbTbhDH/AOpaveXXxeSorgjlZsE2+TNxtLibgsvbnfMuPxF4RjuyESlme+lwq1+f5vmWOxdz5SLDDe7bFvLGXFqccIuVRsb2ofuRbaJ4SbHSIiLci5ijSklGfFsW28u8djKQ6Rlw/wBUlm8nKpysf40Xxt9lXjdg2LhCy9vBHLKPrC4i8KqH2CHhVxiTTjUSciMhlHl8XKq4nJll08RLkTezswTogi9FPC4FMvBGWUlDKiyzTs6GHNKNcWXeF4i6w5vbZ5xlwcwk2UV6lsf6bL62iN7/AO23zEUXPdp2EvFG3SFHC75lgyRlej0Hh/k5Y+9o+ytkPSlbXw5XN2XELhR/2WztsYF0cpyHmXwjh+IkBSbKJdOpeo7CelF9ohbue8b5sox9mizSyZI9s9T4ufxvJWtM+nrmslncRtuVB2b2kbuWxIXBKQ8KuqiJLH81u0a3icVTMlcAUswoFB4VpLrD5KqubbUtMcvRmlhRW3ACqy8Z6VbGOZQbpvzeZOcr2JniVFU5by1CsZtTYzEh9nKvQqt5VmMYZzFIVUJUzn+VgUl0eO4rhMZRFUpsx4V6Xi9pzCsveWEs0fjzLowyUjyuXxf2ejIE0hEKv7m2ioT7UkSyX2Zp4+JW0JPqSe5bEOpIQxV8zJNW7EIhTaJKUXVVqQagwo0FNJtNEkY6o5S1oXONPYIaKww+4zRLSoFUUVeOT9icmNOJZ3lry/zKFQd34lYWhyb6lX3tYuEqn9gRpaHNVkkfomASKNJakljkMaJFN/hQa05U4aCgSYckOpVFrb5RLLHxCo1XMyJVxOiCJcNjFVhCprhKM7RShkMvEZQ0ZpxAimkgcTQmn0WLTilb6OklUMuqa1WSS40Sie42Ud4RJbehcOXqQbe4jwyHlRrZ4ZZu7H2lVi5hJuDxSRwZERzOeWKHuhlzD0kmnu5avaUEyTs5xkSUKrUdWVTXKNjmFySJRyQ6ZK1IHgQmXiFWbN0RaSLKoZNj+jzc0iSsMmOYdKTmx8jRjyuGvRqcBx90CiREQ+0tthG0LRDqiXFKS8ptrhzeZdXKtHaO7sRJxuRFwiUVz/I8b9dHR8fy3F96PWMH20Y0lvC4dOVaa32haKMZF4l49h+It8IitXgJkWbdxHmkJe6sGTDqzqePnUrN21i4kXdx8MSWksSkMi3fmFYC3kWWXsxH7K1+ztr0y6t591Y3Fo2x2WwEWkRj4ZK2w8DISzSFJY0bHUOZT7bdS0xUii+Ie2tsvV1KLeZdQyUq5qI8XuqE4XKl5H9DYQZXUuR/R+FGC4+Ip5RlpRt2kp0x4wXx4kEzllH7qNueLUKcLPLpTassp38LzSbc3bnTp8wplH3BGNyJDyvDpL8Ku3oiJEWlZzFsba06kMqiHFOXRJLE8sYy5S4VHYfkSxl6L7jk2XCEeXhV9s3cERRcGLko5ubpLiSVNSminpbPQ8FESjlWtsXMulZDBgPLwrW2DZL0PiaRwPJdPZZtIi5lvKidi68NHLYKtUOtUc6JsEaddlEatE0kVwlH7VGyCVBKNEtKJ1KKgR7RIlKoQAjttxRKLsIe2nmSYhukrn0Q6ribSqjkSe2SWQONUqHRKoQ6tEGtFIQDVpkO7VwuJtapvark0QP2pgkmzSbxWnRAvahHVNJ1CI1fJECTTCe6kwnRUZx1LshIBxdV1QScS0KKpkJdSQ60Q98uo6oiDk0qJa1ThorJR4c4CH2eVSjp8Cu7PiIrk2amACiJROpmT6B4lZOIIR6koUJOqPh95I2KropoK0SdTUm0JEqKu2DQoonYmUokqUkSIwzdMvD9lFGqFw5k8kwqgwkmk2mAiioXQ3tTwJcVF0eYYq06Ak2gwJ9EGgogKwQjdUYKoPYiijB2w4kntoY0XSUikVTXZJEkUKoAIzVUaiiwtBT6JlESlURBJJ9KpsUxwkLCH9qEdfKmmXElA1Ispj6VRFHEkSlVJdFhRourRKNU5CiDRTqUXDROTP1IPEUtUyhIe+UsqwhVUR4k555CsykWb2kzHDlIVkbXRcYC1EhJal66IG5CObh5VTWgZe7HzcKp8XB8SlKQ8ukV3sEEkkcvNNhcUvxOQlIuaOX3l5D6SMP+Ui8TI7tkRKTjnxmW0dxJw5C4JNsD/wD6fwrG+k3GzG0JtoW4xyiWXKnzzekZEmz5u2gtYvkAyLNGWn3UJy2EW4NjvHNROFlUTGHnCdIilKXMSaNwRNxLKPTqLzJbjF7Fyck9FVctxJR6V5tKsXhHhEvMoVKjKXEs8lTNELrYBxCpVGr7yETKEYIVU2lEppk0JCbaux6pKcJ5ZCObxaVT71FbdTYyoVNN9FkI8TmbpRTeERzN5eEVX1fJOF0tRFJMWRi/j+0GG4HVHNw8qnned3InMxaWx5eaSrDuB1RkXNpj5UKhKubL+Ntpjn3icKWaPUSAbiK+5LpFRCWeUnZritCdq46ZV1EhoZbGwbTBEKYYo1RXdiU4mr5ERxojhcEOkk6rQqOQpbgn2Px+Q4f2mw2R2xdtHBISKPEPN+FfRHo823G8bHm5S4V8kNrSbL7Qu2bwk3mHiFc3yfCT3A9N+N/PNVDN1/1PtFi7kKG+3qXlexnpDYfERlFzLlKX3l6Nh+JtmMpS91c5OnTPU/pkXKDTRHvLf+VQ32C4VdiXT7yjvs6paVqsWsVFE83lzS9lZvFWsxEtgTeri8qze0QEI93q5cqKzH5CZhLxrePbrh1EUVGu8PGRRl+FWrVBEil9r7SrMextphspFm4RWvE2zg+RFLZhdrKCBCPUqEHhSY1fk+8TnDwqBVPWOT7OPOWy2rct8yh3JN8yhkmVqmRi0qMuWnocRLu1DRGm5JnD3YrjQqK2uNtI2SITONiVqnignqRGqKmrYlxVE/C3c0UbFgiQlzfGpRLKsXBjl5vCrHHtLaf1GkZqfJFOTifbOIKI1RZjVxDlVDqkq5mXVVpFSO7V3am9qVGkCOQjFPqmErIN7UwxRexNIVBuPJ6I5URbU4km9iH2JcoWjT62Wrboo9W+ISkPEqy3eU0HOVIlGhXfZOZcLUKddHMcwxJRQe6U+pZcwqcX6L4IjdseJFB0h4lEeczJW3VVCWWdLxwspKTaOZouSj0qvtnI/wASsLR4fCXuq2Wotli3ay9QMuqOZTW2HyHMRRHVl/CoTTj7USjl4SGJSVuxfuujpIvCP4VkyU+zVCKj2EsrYmxlq6iH8S02CXToiMSKJdKzNg1Iu8ecZ5pDJafAn4FHfiQ6ZfGlYfIridDxsivo1dnd6d4Mpasv4Vv9nrgR0j9pZjZ23lmEhLzLa4eQ6YiJeHKS485bOvDkujRWV0JR7vzKw3jY/wAqq7Bsh4RiprwqnJo0JfZJF0eEZIFw8KGxUdKBeFLqFKk9GiMaCB5SRKviIxioVoI8WXxKcNuPMhi3RYIrhtQ72/3YyGKn3NuOrLFZzaCuUhHKKkpNFpJlFimOuuSHT0qFZWkyl7qfb2ci4VeWjceFIjU3sfD9QuEYaJdSvWcEEokQqJaFyiry0eLLxLbgST6MXkydaLPC2SaHMO8b5uIVp8ONshy5hWdww5FEhJWzNuI5m5CS9F46VI875EnLsvhFcVFEtbyWUspfaUitVtox7BuIdUWpIdTVMIEVE0qIlaphUVIgyiTsRKkkpVWQeFE6mVM3iQiRcmQdVxBIlyaSpuyDSqummmupVUQO2aXee0mtpEaSIPqaYdV1apCQEBVql7ElaoZmoEOdNAI13amOKAjxcQzqkpRdRDZARElT6in0BEQj1FIQqUIJd2oREagplQUuoJsFAhjSkAgRRRp1KAnh9KxSVcUUk6hriNcVRqaok9iWqBveFP3nxyo4ysPkHpXLm/Em0rJCFGbVt0C5WciBWOVJ2dKdQVadg2OHxIgimUqn1cTF0WFoXSiDTpQBqnUqiIHouQO1L28KiZAw0TiohUNc2SllNWSpJQqoyIFU1dCH2S6EiN1UcCHhJFDxKmwor2SgTapoEnUp8RVJ0SYZuqINVGqaIyfUmRlsWS5ogVUcVICqYyk7CyTCFcJSTxohaYYGrQ8STdI50TBqhWimCilCieacAqPZLOCqKKGNEQKKywgppElKiZ2KEY06oI1UiKaQIkgQBUUepiJZsvUppgoL4cwp+CSUhWSKkmizw6/MCEdQkiY3fyiOYR4lGsCEh1DlVZevOkRCJDueLmLplwruxerOW4kXEL9tzumhFwh1aRFvxFxfsovO9scC7snXHt4Wr+zHwj2ra3rgiJCwMuaOkfERLA7Q3Ljvr8rMsrY/Web/AES572X0qPEtp2ZORbHeZtShsWBODFeoY+2BCW5ZESjHLmL3l5XdPE3ckPFLMMkyFVs5+S1LRUYwyTREJSH3VVVWwxqsszo5uHpWbetR4faQTi7HQku7I4O8o+ZNoMiEUOrRCMuFNZcIXBJANb9ky+ci4QkMiEYioQ05k6rZkREMi8K6rRSzFFU0VG2Obt5eFcTUUYKiIpBpIoiqoMDWqQST7hqKDWqnRFsONU3tQqmukqsd8Y/tXVSdq6iGXRfGjklBTqUXdqBOgrEJJBcacFFTdlLuxtOVPq2nDREq3lVM0IG1FGEU2rWaLYpCoQ8KBOuhlEm3cJspCUS5lvtj/SSbRCD5Sjxfy0XnJihkwXKsubxYZO+/R1Px/wCUyeM0rtH1Zs/tY0+IxL3loBvhIcpL5U2UuH2nJNkUeLlXp+F7ZC222L8R6iKQ/uyrlywzx/yew8f8vhzLun9Hqb7nxJYz0iY4NpbEZZS4R1SJRX/SHZtNyJ4SLN3beYvN8y8i2/2kcxB+Repb9S2OkebzVTMNzdUZfyXmwwwtSTb6QG92ufKUZNy8Kzl/eOOlJwpElim0Y6l18eNVo8jl8mWZ/syN2JCBSxCKR7SnNmW1ZD7EX5IWqJRT2ALVGSv8MdbciJZSUWwZz9mbbZ0qY2yr7EbER0ioMBjEiGSS5EUuSIDgKCTcVbutZVCeaVqWwWiJVNoaK/VCKiZGYDSYW2c7wUfFH5EIqPbakK4KREn2J4/uJvEa2NRqKW2EW/ElPH7NPESadR1CFokrgRVN0BLGmiSkFR23EYiiqTsQou6C1omHREZNSQbkpyoP4f5IlKITtVZOMqK4wjQnpkNMqiOUTFfI0RbY0aKW050qJVPaWeUNhOycJKXR+QxUAKp4VQ8q0WmAuBQmzUh6iAFFdezPIlsnJTWQIsqhWoZlfYe2UUE5Wh2LoZatORjIsqt8Luibyj7uVPw5qWUsw+b7qvbKxtvrCiXmWCckbYYW9gWR3mrN0yWiw/DWiGQkI9P8Xaq2ww8YkQj3fDm+KrS4RhTZCPdyLi1Ln+R9GvDBplns7iQtZYx82pek4Dci4P8AEsPYWLQ/V+0tPh1vEZCW7Ll1SXNyKmdjA5tbNexX41Ci1Ih0yj7UVAw4surNxKS1diJRJJezYoXscL8eJc46RINxuySWzwiQoHoakWFs3LUKnUomWJdPmSXLubMpyoH2RcWvRAVicRvt4WUpfZV3jVJZdI+JVdhZZtSz5G5exsGo+h1nblyq2sbQi1S+6iWjPDyq3s6Dw+ZPxRVbJPJo6zso9SubRlCtmx/lVnbAPiXXwYl2cbyc76D25RIYirdlzpUBskZt1daGjkZNqya83IcyALxCUS08JJd6hOUktFiCXU0KtVFaKOUkYaqmy6CTXHVNpVd2qJWUKmkSWjqC891K7oINIeZMq6om8S7xVZVMlEaZU1HccFCn7KtstRskbxEUUXE4TVci2qJNCS0NRSdFEF9TkDQWpIbrqA4aAZoiqJO8Te1Cbqn1cVXQUVYskhLhqn0opdlyVAapRonkKTeDzKyg7YIlWkBkkeSgNCiCdBNGqeJKmiAiFRnKqS5VBrVRFXuhotIo0imSRe3KrCo+de3KuoSrpl8EkqZLgydo30WNHVJaqKqWjUoHPMpGVIqi0BOAvCozbqJUkcZEpEqA8JSThJR2jSk4mJoFwTCmWZKNVE3nxJGbdV8iWlokgSM2Sii5miiCUUywUSuwUnmQqHypaKmSTQRKKYFZIrYRJRJ2Lcn6CUp0+ZPGnhTY/Ek+lE4S+x4ApLYoAqQFUIUU0EHpTuxIFE8aIgxrgaVwVRexDcoij9i5LYUSRWzUSlUQHE6waJYEjNqEBI7RqN2ESuxNQ5ogVQMiViVFLUEQKosVFRHECAp4inBTpTuxGlZBtaJsUagJOxTRAYilq38ZUUaJ/YroEjm2ot4OWKm3NYiqO4fJyTbMf/p+EeJOw47kKySSQK2umxchqLlHUp/5O3mZ4Yt/ox+8S7BLYWi9XIuIuIloK3HM2u5iWqOVk29GWxaxaFst2UcvCvP8Qw+XeuDEuEeXyr0nGbYnHIiWUcxCqjEWpDEhQNBs8lxOglJuQ+IcvtLx/bTBSbfJ1kZDxF1L3zGtne8JwSERLUOpZHai0bJkmtJF7KAVOFnihPSHNq5v4VUvOFxLR7U4P8mLKWX7yzzrJRkWWSPmJ+P+DmrzSLg5RXOXA5t2Ij5VXujmTZIOYXAM84XMUVERaOSyp4NqN2GhrSkNlFP+TFyoR0ihQQUakmkynDXKmlTTmUZCPUV1RTnU5too5vKhGrKwYrq1TjohdilDE7CNkm1JIdF1aIZVRBwEiUQOxEGqUhkVoktojJKKDqKLqGVoLmixtgiSsssdKq7N0S1KfLlWac6Wh2FctFjaWrcf4VX1w9veFIYj05kcLrL1IVXSllVc+RoeNIkGwTY92WXpUO/dkObUpzF2WkvtKFiXSpSewW5XZSAxIkb5OQqdhw95LSpzmYsxJ6aM2S5bZRHRdHiVu9aS4lGraF4kcdForXAkhkzLKp5W5csVzbKtssiFbxTGKEJSFTjLpknULLpVFNWCu8RMhi2MepdZYXvOoupJVtSLcspZvZJL4sqqId05EY6iFRxZcLMQ5VMrayKSmsFuxzS+0jhBp7FSyUjN3SBVWjlpJzNpR3LNoY8XmTVECOUqqViKjy5lJu65sqE0yRFpJXTGQ+2OtLfeF7ylUGRdKc8Ytjum4kResIdQ9Kcw2XKo06JyvvRPtmBjpUh21bjpUO2eLlRHL1Z1d0zbFQktMhOW4iSU2MqI+/JDJ5GhDSiV8oqfauKBc1zJGHkEkwXtaL5ukkR9jKolq8juv5U1Mx5YtFTdiotVJuDkSCatOxuJOgYogim0T6qNDG6HdqMNUAEStUDiLlLY6p5k4RQa0U21bRaBqyQwtDhNsTjZEJD4eJVDFkRDJXtq4Qtxyrn+RNo1YUkT7K43RRGMla/J96MspFyiquxsHHCnuyjzSW62fwqQyiQjHUuXKdvZ1sKTImC4a5ESHLHmjFbTB7Z3lHxDFJhDPCOnqU0sM5SzFwismWbb0boRimdW2fJzKJD5hWgtG3BEd5EvZVXh28b+s9rMIqx3zsssXB8qyZGbcUWXFrRvhyqSQD/Mq02iykOVTrYScy5SJZ3t6NipIO2EtJK3w2x4iQLKw3epWbFESX2BJ/RIoAjyqrxQS1COlWL1VUYndxGIkhySVAQTM9eME4XeF5RUi1bEVCeu82lTrYcsiWdSvocTbaKurURyqitgzKZV6PEn48lPaAlG0aO3AR1EpQO8qy7dx1KbbPkun4/kxs5WbA+zRNudSK26qdgykp4VXXjkUujmzg0TgNPoajAi1WgU0JcEiiaj1Xb1WgOLDk4m1eUN1xNA1GycWTKuILryYRoBl1Kg0gpPILzqFWqYqsIOVwlo6ohCnNqNlUTJLqEgDVEoUlT30WSQql7UNuiSpdKJFUglaoBEuKuVB7FCmtBKHyo7ZoLdEdoVCoxaCR5VyeNVzlUVokk2CMkKK5yqbWquy1HQou8qKDqg1JFkqtC3B0TxNdvFCmuo4o2Co0Ta1QyQxLqXEhLoLRFGiAFUVs0Seiz5gN5JQ0yoofYvOc2dC2Go/wCVSmnlXJ7RqKTFplyFx8SJFauVVNGXxFSGapqlQRaVNLR1RGHFIIkyMxcpUEmnjX2kIKdSdJXZKT2HmidqC3Tm9lFpVGpOwVtkxqn8SdJRaGit1TUw5RVEgao7delR6VUhkxRxM9P0HGsk+gIY18qLSqsnEdUU8UztT6IbDaQduqcIoQ1RBqiTBYWqbUU6SY5VWmVVg+xGFAM05uqcnoTNtdEkCRhoo4IzZItBBmqInYkaTpIZFp0FCskYaIQEi0JQtuw4UFOihtDlRBJHjKFqKGdEVNJQgAsvhXHdD8CnmmN0RLsEjk2TvrPV8qL8liOUY9IqY7URbl+JQiuJCt+CFOzNnaGW1e8GQyWrthDd6Vk7V2LkizK9avBIV08ZzpuivxDD9RCUVlsXZdzSISW6rRsh0qmxezGJSUmi09nluPtucMvL+JZnE2ZN5m5EPFHMvRsYwwo5ZeFUDrbmhxpILPFMXaYdc3bgllzLz3au2MXiIZbvhHhEeEV7vtLgUZd2Obiisri2CDuSFzi0y4VBfs8TGiC4C1m02zxNZmRIpeZZVyiWFQNcLxJ7iCiS0OgrRJpdFzJ+9Hl8XUShVFc3VVYOSH0i2azZY5ublQyaiojb8UQTkUiJUKoedeVLvSSCXsoL5KWQLU0N0RTBcSVqoOScRZJ1KphrkExjcaHES4STxbyozYigIp/RDMk+jikG0KEQcqtqxbk7JFu4pbNyoG7JOaMeJKnjTGwyuJZiUlIDKqkXs2UtKlb/ADavdSJQUejZjyKRZsgRcOZEu7Yx1N6lEt7wRIVNfxGQ5UqTaYyyAYCIy4kFu8GXEh3buqJKsM1qjHRklkj0aK2uZI51WdYe5VaNX0hRkU0ySfhQic9lI24PMnP0UC5JDhaHVFIYoYEuJ1Lk2TmOq1m/Eloz0oNXZIzV3H4JGhby+jnWYpjbZEPSKPvJDwo7FREdP2kUZpiZdFQ/bZkd/BijqVjRoR7zLItP8qITmX1iZyoqMGzOsYc3KOZWz2HxbIRKREOXpQTHdlKP4UBx5yUpeypzLcZWQm8JcEpF90lY25CQ7stXMOVQ3XyL4ihkSnIG37CfI3RIspEPNJQ3WizSEhVrbYhHVpRb+rbubT4UvirsKMqM4aQSVo5bN83tKI4wPMjjFDHmvRFuQQRU47Yi4k5u0jqVTSXQUciSAtvcqJUiJFqwPMo7xxVJA5EmCeQaJ5VSgCO2EqjHYopxUT2wXOEo2Ilkb6B0XDTMnABEp9raoZSSQS6HYfh5OeFXuH4XIoaiR7ZoRbbHLHUWbUpl7URETaciQ8qx5M9dGjHi9sLh2GuCW7IYq1LAy1EJF4dKjWWMtuNxeKL3C8nHjzrcRy+LhJYJO9s3Y1E2myGHDpc8suFejYc222Md2JEvMcA2gbcGTgiJcoq5tcXPejEspDp5Vyc0v2OtgUas2ToDLu8pJ7AcUs3ModsThDIlZMxjwy4hWZu2bFCwhs5eYvKiYcBSTCHiHL4VMs35ZSj5kjJO2bMeOlYZ0jVthAjxal1g3/Z+yre0sM0hHKhimXN0iWDYx0p1aJ4h4k+KKSszuRXX9wUYisvfPZuJaDF3ulUDtZFpWeRogtAbViJSJTRJRh9pSGgIkMFSCH0dikI0sU3tV2WPB6KlsPFxEoYtcSl2jKbib5Ay407L+wc5iVuyQqisWx5leWlMq9B4rbOB5NdkmlFztZJ9KikIV0zEArRCIVJqKZu1CAi0oVKKRUUMqqEGjRMcqn1qhOqF0CIklKpKCiUSyho6ktKLuxOoKtbI3Q6KdQU4fCjGKJaJdgRItKJSnSmwT26ZVSeyDHkIRUkqJkURBgCjgmUoSLSihbHDVcS6gp1aKESAkh1FHKicIqFFdBPiprlMqHSigLegMVzYI9UQaK0hYIG0taJ5VQXDUaogtSTd4guGhyVNkPnQaobokpXYOlNJpeYfZ0yJAk4ao9adK4Q6U2DcfQmhG6qWIIQsKYwEeJWpbssRsYo7ZJwNSTxb+CToOxU+xRTgFEBpGBhGUMZRiBGBnKniCYohca2RaNow0RhBOgjJJ2MpVHZ8SGIIgURRB/ySW0RCoiCmUUFAUVMoQrqEgBDguGi5tFboiiBMUATjFP7EtARlJ0QyBcNOlSzbTKgjjsGxlKqQ3RDEUYKIkiyS2KeKa2KNSiKiCdiKNEOop1VLoELQk8a5UNuqKFESZAg0SwSVTqVUbIMcBDEFKEUhipF2yMQgGOZVFyAiUZKbcv8ACKq7gY6l1cT5Iw+RjcXsM21xK3saZRkOVZSlHBKQyirzC8bjlcFbcbrRknGzRi03HLlUS4cEeUvKiDfNuD6uKADEizEmvoGK2Ut9QZZW1RYrbbyWXMti+wI8PmVZdD0iSRKI08m2ktH2xk2JOD5fvLI4q+TjcXGHG+aQ6fMK9exsJSEcqyF3YvlKJNl8cpIKBZ5TidWhbKQkUssSksZjtgw6Xdt7vLpzL0fGbB125Lux3bOXlGSp3bUhLMP8SqhLk7PKbrBHBlEcqqnWo6l7K+7bEO7jFYnaawbbIiFsSHxEgaGqTTMZQ+FSWsNdIZC2UR4iiI+0SNW6j6ttsS5oyL3u1R7m8cc9Y4RdMsvs/Qq0OUnJEjcsND3jm/c/Rt5Wx8TnF/colXB4UGopwqnIHixSMknblTorkuy4wTGCKf2LqUS0ii5lSVaOS0SJ9FTlYDdBRPKubND7EMaIXIiLAYp9W1EoURRG3VXIskUFQnm8ysKOZUylqTgyEcviUYC7AtN9SR9tMcEmy5Uwn+pCNi36H0MhSt3CFNKFRllVLGm7DeRpUT2hkoT7SnMZtKfcN5csfCmCORWVypwGm3DZIQoWhydk4H1JF5QGoqU7cjHSqKkTAfEdXupurT5ZKqM05t+KhFKiwp8ZklaR4lFF5d8q6lfHQPslUcUu2uB1OFp4c2ZVlLgeJOq6PMgURjdFm7fC4X2UFxzMq6leqKNREXHKl2TX3sqhuU5SXQyoVWyUGvIKFEwm06CVxklBTYytUtTyxThZXO1EVEByGJKtLqOiib4RRchaQUqZeUVEuHhSXtzIcqr6kpzHwhaHm6SHWi6SIApiQTjWxgo4CkEYpyJuhUsjaoUk2raI1RSW20uUioj7K3GOZc47HpRWBQ71tZsmzT/ahAuy5kd26kKgthmU22ZkST8aA5N6HtuEWok+u8IspF0qxrhRaswtq6wDCcw937XKs0+MXsfFSekjtljIhiWXmXqGyuFxkRZh1eIf+FkHdnoj8pbkJDqHmFajASf3Yk2Um45VyvIin/adfxm4tRkbthxjdjLKnO4eJZ2XP4lUYI44Uhdbjm1LVWTIiOlc2Tp0dyLTWittwKWpXmG4e5wxRrO0bVm3an9XpQJIcpNokW7Zjwq1tHD4lXWd8Uok2WVXlqUs0UX+BWSWujqEgvuEp5UFQLlwUM20qsVB2+isvBkOlVNWs3Srd255VDqkUak2Co0IprjvKleEiQSY5tSgQ2S7tSy5UrYkpxoPloUa+yrC2FrLmIvaUZtgeKSn27rbfq25F4lq8WHJmTyJOi3w5vTlyq4BseVVVi4RahirIZcS9D464nEyy+ySNBSlQUHtSVNazM0GqloCG1VHoShSjRGMEAhU+tFHcooERyQ6ipBAmdiHiQF2LqCnrkRAVWk6tE8k0qqEGEXKlBxDqPUk7ELVkJFCRKaUACRESIPGqdSqDVxcFVCBzqnNpAqlrRQpuhwmmuGhpCFQHkPpVGGiEAo/aoFYkJJKtpCJOEkwULBLRtdSib2KEEcaUQ6Ka6WVQXyQMpACokSVqnjRUOXR86jRHiKa2EkYWl5tI2WiPUcyM2KeTaILHlR8ZMARoVMYa/lTG2lYMAnxivaBkn6Gi1yooNeZSmgRW2k6MaA4sC0z0p265VJEF1GlTiwGmBbbUkWk4GlIbBMh/IXIjblNq2KmO05UKKOkTkAqK4ARN2l3ZIo0iWNgnUr4klKJ1KIuSKsf2pRouRBS2VJaCN+JSGxQG0elUcBLv2HiiNihs14UehI2Sm+hKj0pu7RKuppVyoloPVAt2nUFOGqTtUsXYUKp4ko1UvapZZO3i6lVBqfsoguqWQlBVF7epRg9pEo78SV2QPL2UZuqjgSfvEbZVEgS6lCxu4JtsiFSJLObb4zumCzDGKkOxuCKcraM1ZbUTvSalGPD96S2z492JFpXzVs/j/8A+sCUizOeKXlX0fZuOkwO8bJsSHUQ/wDC6XjSbM/nZY5H+oCrgjlkgjXMhPjEuZTGroRHMuhBnLk9lrhr46SVi4LRacvtLHFdlKQlHzSVthz8oyzJlglm45HKJSHlUd24ItQx8qK+ZCMmxUal+Zat2KgRVX9qJZpe6sbtO3u/Ul3jmmOrxLc3N2R5Wh3heHux8RKtDAikTj/fOcPCLfhj86BoFmHYweLGqREMilzEspi+F5S3Zd5yr1jEsLGOkm8ubMsnimGNjqcIY8USQNC3FnjeKYWZlFxspDxDFVV9h/dwKJeIV7DWwaIsr2ZZLaLAREpbyXFpzKqFuzwvF7ImyLLEVWVqvVcawmQkI5upYDGMJcaIpDlWacXZoxzRU1NJVKQLhFLpoelZ1EvauouReik6Z1VyWqbWiFWNlXY8apKuJvYndiIVw5Me24nhUUIVyCQXwkqrfLpXUTGzyp/YjSAaQZlxS2XyESESyqupRGakrYlgLoVEgrSqJasy8XhQfqxydIqxFOGik3bUSUQiRqP0U2mSmnop53PKoAkiCKsDQV12SAaIQoZAhCgdSqWa4QXUFU0E2hK1SJYpKVVcWVaHCSb2p9KEhGi9EtBKVTaV6kxLFBxLdex4kuqaQaJ3YpTFezheIeJEC7JCNvqQ49SJIZHonUu06t8q5dVRhqKvsmu3xEhO3fDJRCqlGiEbwiHo8h0NJRLFSmThFClTKmDRGo2koCJL7A+RLSB0BSAHKuoCktsJvJITKfJ6I1aqXaMZhkKMzaSjlVzY2OUilpWfJlYcMavZEYwxS6YcI8Sk29wQl4kWpFKUS/Csk/INmLDH2RGbLpkoF21LSK1llEhyxTrbDylIhEh4kp5x3wWYxmwIuFaHCLSLgi4OXmitts9hDDu8L1ZCWVSLG0Er1wCESiOpIzeW60ReGuwFhg4kOoSHh5Va2VpuizCJeHSrixwKWWMRRzwUmpfWCWrpXLyeS2qZ2Mfj40k12Kxh29ZIREvZ+8qvB7Vy0ud04UWHCykXCXKtPs/dON5RzDy8SLjwi62Qk2Q8UuUlnc0477HQw07ZoGLFshzZS8ykWbeaIrP7M4kTrIyIe7ykPh6VfsuDl4fsrPJrs1xyX6Lu2bEeklLA46lXA+Ue7zJlCcIswkqDTNLb3DRKYMRWdbdbH6slMadkrbKaLRx4VCNvUhOO5kN1zpSpBxhQNygiSjPHypbg+VMoCUpftQ1IDUyTqUkjHQUwnIqyfyMIUzt4UQ6yRWaDyo4xcim6JVhayV5YWUeVVto/lyj7StLcub3V2/ExRiv5OT5WaW6LRrwprppGayXOAumkc6TTY0TT6VQYknUGKagAwUR+xDZRJItAndqYVEXsTaqmQFWiGaKRoR1VB0D7E2qL2JtfCoUD7EOSkwSUaUKTsjJ9ARxaT6NiPCpZG0iKIpxVRaghuKFoFQk6hJaCkKqhAouJ1HcqhzSt1JSyVZJqaUaqNWqIClgSj9Eiho1CVe4aUHlCqZMcJJQlGJxKDyuwmtEyaGZoBPoW/VopR+wxkgmgFcIdDVMKkSOxGbFQpogl4kJZ4O2COVFK+TCPFLyp1WZLhfGjQRRFS2m0oW8VIAfj+FOUSrEBlSGGUNnxKW2KJIsO0COIigsnmUmielZH0dFPFvpThTqKUZZK3YoilqmkSRuqlEErVJFOqh1JWQcQpK0Q6p4qUEhexEpRNEUSKnFl0DoKcIp4gitiiqwkrGtCpIgmAKeIo0hM1sKCWKQQT6Ky49DYpaVTjFdQFCOKOrRMKqNQU11HxSF2Bo4h1dRaghOCgZaVj6ElqSDSqIKqwuJIZJSW4qEKlgKuwB5JW6plaJzNUaCjpjzNeUemC4IWSzc3wK9RxAxFsvCvAvSziciISlH45v8ARGqTGN0mzK+iC/YtMaYur9vfMMuSJuPi4eLs+lfUGPemLDLpn5NYbx55zSJN7sW/MXzLA+ij0VWw4YN9ekJb9veN+aWX6V5221bNY8TbDgxlGMpLp+NzUlFx19mHB48c2TT7Z7HQyjIuLhVc9dlLu3Fd1t+5EulUL4DLhkurmwOHRu838V8UOSZMwoBl37ki5R1LV2NwI5Wx9pYJ4eKXl4lMwS+OWaUUlSPPtSTPRaVHiUV91sdLMvKq1nFG+ZcWKCWn3UwIl3F1p3YkKBVsuJwhTrKRZo+0pRBl0qEK902yyykq/EsGApFzalaOCUtJeURUe7Zy5iJA0LcmYPG8EbHM22XlWWxKwLiZcjzcq9PfuBHKq6+xUR+pl5UNC2jynE9nyIZC4PhispiGzhZt5/D7q9gxI979STPiWVvWnBcyuiQ+FRxRV0eNYzso4MjFko8wjlWRumCHKS+m6Wbjjchb+zFec7Y7IajEREuLKlyxWF8zujyGKap2IWhNkQkKg9izuErNWPImckon1FN7FQ9qxEvakXdqhSSQskRuvMhUSyVNBE6jXm6kYLYlXNXBBpU1vFS4kEpNdAPHZJCxLUnwGUUOmKDyoJXwykIofkfsGWJUSyGRZYp1b4G9IyJQK3BJmVSLTKToK6W8LSmO2Zak9m4EeGSS6xA3OERHpT4ypFNXsik1FKIrqmuqalg8B4oLp5k0jQ+xUHCPoOBJ0ZIFKojbhKFZI0PIEKKNveZOFwVOUfYs4W8qGQKdvB5kCoqRd9hcdEXdolGiUmjaMwQhqU5xB2yNW17uSB2KRiF7PSMRUSSlp9FpV2OJBRe1MOiIJDUwk+i6tFTCGxTqUXVRAFCkgubBijN0Uhu1VgxhsRzKpTUQXykVzVuUVItbAil0q2tWRjpUxhoR08SCWZJaB+FkCwtM2ZHcs8ylg3lIktnSXiFZXlNcMFRTCM2PTJSxtoylIUz5fEcuVPYu96Qyy8MiWfJmHQxbBuNtl0qdaUyxHN5Uj2GODpkUulWuDYYQjmFYnKRtjBdIG3h8vVjHmFWlvbCLf2hL7qn4c8TbgyZEhR8RumHyi23u3OIUDzUP+ESwshFsRjqzZdSgWDLm/edZllIRzfZVm2/EcwkMVO2ZZ3jOYS3jhEUi4kjLNspY3pFiN+4TY5Yl0qZhmJSEhcEhIfMJJLfDi4svh0kjFYx0ueysUotM3RVIVtyObiTX8ULSTYl4v4UltUR4iLpIf+EoXttKLjeb45VT6Hvog4Vci1ey3fdvZS8S19xGMorO34sOMluRKQ5pK+we5J1hshbHTxcyU4uSAhpknDsUIRERy+8r+zxIXMuryxVcxb8wx8IqwtGxHSKiHpli1VdXpQwqZaYqU1SOolGFQDckkI4qQTqiOElSYfJiTHUSjOvcoxT3KJlW+pC2w47GBVEJNMhHqSUdLhFQK3VBWmlIZY5tSHb1JTrdkiW3Bj5CMk6CNDy5la2AFHShW7MYq1Zqu1gx62cbPOw7DeVdVpcBIguitqRjsZRlJBHI0KtRREOGiakM+VdSqgI/tTCqn0qhnVQtDK1QiqlcJR3D5VAkw1CXHWKE24jVrlUKqxWzS1r5UDeR0rp8ygCVMMdSTQQquJlXx5lAmrJdKprjgqJW5QicQuRaRIJxCqSjbzqT26quTLoMKem0TgFVZEJWqTfJXBUcqK7ojFedkmi4XMmnRDpVTkSiUJ9SWryi0JLvFLLpBjPqQJJ9AlmTCbVWQWlEtap0UgiiRKHjVLVEbBO3ZErFOTTPJSFJRGEk2hdK5EVTGydgqpKUJG7elcVE56IOtyUulFGCiO3TxIeRcZUGZopAUQEahJ0S27DtknIacBIgBxpJJaodR5VABTJAOqe5VdSnSqoljgFOpXMlbBPMFaRDgJPgkbBFRphJjQRaVQqojaLopTQ6lE9qqZVJQ0Ldlt2TqUSxUQX0XeqJ0A1ZKEl1AkhAaLQ0aAH1bQ3WorqOriNGmiAu1CcqKedVFfJVOl0FATKlq4opmntpLdhEpp5HB5QURuquiE9s0+pqI0eVFoabFXsGUrRF2heiwWby8q+afSTckTrnEMvwr6K2sc7gvCvmnbo+8LVmVt0y5J8D0zYPFbn8hiDNyQsi2WXhHMXMvIwvNxim/KRELnikrHZPbVy2YK21Dwqy2Tx22avRO7YFxsizc0eKK2w8lqUW3syYYyUuUV0evYHt8w+w2ESEo8vEgXr0sw6l6Ts9stg2L2W9w1xuUeHUJdQrB7ebAX1jImyJxnhIV2J+Y5rZ3sX5nE1wyIzjuPNSg8MS5viis2qi4MheiKwN0w4TnfCRfdV7hBaRbIi6SWP5LZw/NWOUm8fRvMNtWBGTjpF0rT2TzUYiKxWHWhRlL2lb2VHBLMUekVoRzmq0awXS4YiurcD9Y5m6VRg44XEjNCMuIuZEmCywK5HhUd50unzLio2OkZJBoXFEVfIhW3jUsxFHwqouWilpL3VoX1BMCItSpuwFGmZ16zczE4oNMJ5pFzSj7K1d1YxGX8RKCVoRfxKlokop9lNW13YiIxHpVdi1u7HNuCEeaP2lNxu1b0NkTjvK2X2vzKprslduZnu8EdLco/6qmweH0eQ7dYSTrrm7ZHxN6V53f4WTa+p3dmi3cCFvzfwrJ7S+jre6RHy/9pcosKMkj5yIV1KLd7QbCvtE4O5kI8Wn/VZK6w1wdQpFNDYu+2QK0TaNopMEPCSZWitOhyiMFLVLRdWqpuw0qG1XdidWqVD8aDsSlcqcJJlV1CQuFghN8hE6uoSQ6KlCgXFMdRxLNDpRLJXxLSpUPrVJWqabibNXQ30ESUTJLpKJA8QvakoSH2pKkrasnENUk4TQKEuqlOOyuCYfeIgPqLSqdRXsnEl1ui5kA3UOSaVVbi2Kqh9CT+1BoSdWqYkK42Ooa4qpoiSKAIgqoHSidUFI3SMw0luQfLRGZZVha2KI2z0qxYLMs8snoKMF2xrNrlU7D+oYqTa3QSiQjLmQLp3dlHhWeWW9DlFLosbe3bLUmOWSY3eCXDElKtb7NpjzCkcmjSsabsa0PCIy5pIdxYkJSbFWXyDeFNkspcqn2mBXMhJsd50oZZNBxhZlnLUizRJWmFYM5LMJLeWWESbkTG7L3VMtmo/V+7EVz8nkXE1Q8dPcmUAWbjcZCRNlxK5wwRHU3vPurSYdaOEPqxIeWSG5b7otMfZWeOVo2RxQ7RTv2LZDLMPi/wC1XMYaUpxl1acq1tO/yi3p1RKKZdWz7fqWYiX6QhiKksiekDwp2ZjGmpNi2OVwiitHg78WxCI5RjIYkqhgX33yk2zFjiHmLiUtuzdlq9kkHaCx6ZZ3DsSyufHhQSv3CiIjIvCpNlgrThDvhcL/APkIfsrRW2z7cYtM7vqKRfaqlcbNN2VuG2rhZsvsqcGFlIe5krKzwePrHS8I5Vb2oDHKiUA3K0VNrhPM2PhT8Ctt2TrQtjlISHzK7AFXXbkLtkhHK4JCXVyqqoGOkWDFpLUpNGRb4ZINTyy4k2hucRfhQ0g47Hm+XKI+FOac+JITlZIUy5UpvdDOI99wUMX5cKfUZal3ZyiktUMgl7GU6km9TjBC3cUNsMfSslKYYElDbUprhT8f7MmSWiewyQqYy1xKHb18SsLYClpXW8fEjl58vFWyYw0I5hFSANMAUxwl1IxpHM58thidTgJQqF1J4vdSZF+gZL2TZLqfGZRZIwuIiqClRKuonKEoQqoZ1RDcFRnDVN0Shjw9Si1rm1J7rij0HMoSiWNUQ0BrMpQNqyUAKia4plQQ3KIeyUQa1QDFWJ05UBxpC1QSIfYkElJIEByihDgopAqOFEduihH0GopAVQAS1JWnQKCOEhHRNEUkUSdhCOKMVFJMUMxQPsgMQSRRmaooiKhTGttItGUSiPRXEEE0ymGyKIZpvajK2DGiUQRVw1UB4HjM4rpJHkLsXHGPsPMUqjC5mRxNEtsGN+wgFm0qWzQiUNs1LAhjpTVFLsJEiiUCTQLL8EmUp8CmUXSJIEn0qgjSKdJXTIGGqVNbPKiCpRTGi0KcLadSqUeVWKkxw6kQarhT6iroG2MpVPpUfCmVLMnK6JbFrUU8KIbQoxKWCMI0OS6K6tVKsbaoYJIlXkKopnYSlMtbJg3COLqrgoidqtWLfZN7UglmQGUWKItdjyJR3MyPSifu1T2MVIriaJPbBT92jAwpGNsFzSIO6TqCp1G0I2s2lNcQOQEaIg0RRbRhYkh417IuzHbdXUWHMvCvm7al2Tjkl9C+lNzdskMfxcK+Zto3u8c4VV0x02uNFZaUzZVaM15lBw2in3lqYjpIZaVzMt5clI3+LGOKFs02xW1t5h74uWFyTBCUiiQiJDxCUqVkP6l9X+ir0r2mMN/JcQ3DN2WkSLu3/DKlKCX6l8obLbCuXbG/kQ9PxVSL3Zx+0KWbLpIfxLrYFl8eNP8AZP8A6GPyPHXkbqn/AOp9R+kD0TC5J+w1cTP4fnXlzmGfJi3Tg7twebmU30Qem1203drixOP2mkXoyfZ/y7XB/UvUNvMSwbFLKdtdsP3MZMkz273zj2UqP966WPJCfRxckJ4nT/8AP8M82w10hjIhLqVkV3HqWTOTTkSJWNpiTZZZe1xLTDJegMkaeizcxnNERzcQirC2xEY5hzcsVWgTTeaWr41J4Yi2Jd2OZOFly244Wkd2PMikMR1ERKgDFXCKMo+H8SONxEsokRc3CoQsnKnwx+8kqZRyxlzRUVxyIy4lVUvLm5KDAiLfE8WkfCPEoQlXmItteucEi4R4i8Kg7h+7KROOMMcIjqLxcqJa7MC2RG68T73M5H3RVgLojqUJxbCWuGNND3cZc0cynNNCIlxeJQLK9zepIuX47VPdFxzh8qKJVUVl27+jZJz2fvKO8REPqRZ6dRKzNohHSXtJbN6OoRLxKrYDgigcwRpwZOMiRFzLI7VbAsOyi2I+HSvVwelyl5UN7d8ol8cqFx5aKqj5hx70buN5mxGKxOI7MOCRDFfX+KYMT+XdjHwisVi+w0iId37P/aTLFXQccjs+WX8JIdKr32CHhXve0OwpCRaoj8f1rBY1gsXIj7SzybXo0WzzzsLiTaitRf4OQ5okQ+FV9cMLlyolInKRSiJJ+7V5TDCQriwIdSJyjWgOTi9lTFIFFchhxcqYdpEooLQXNlXUUggretlyrq4eWnUX2VLRfN/RTk0m0BW9bBzlXHZkP1eZTkiLJJlRu11QVsWHuaokh1ty0xL2UUdk+V9FbFN7Fb/k4xGUSSUZlqEvZRXEtZipoKfBT/k6kGzzCglXZfzFbRlOrbqxJgS4oorTYjqkq5IH5JMrG7fNpRXbPpV2LI8P2UlxadMh6Ut5GmTbM8LObMpzDA6lPK1HUIuCXUpFnbDqIh6myVfNRXCyuOyEtKH8hLhWltbQRLLlUmtq3xRHqS3nT9jo4tdGZYsCipNvhpcRLREDendyIfrBig2lq5vPVlFKl5NaDWEr3MPIeGSADZFw5ltbdkWx7wSLpUG5bbEpNs5VnlniP+C0ZxmyMXBkMlbPYWWWQ5eoVaWN022QkTMvayrTDdtOjFshl1ClSn9DIeK2Y+1wNwokOYVobTZzMJEPtFp9lT7e1cH1gy8JKzt7lwRiQjEeEoyWXLnrRox4a7FssFbHSJD4VOZb+TFISIhLlQrPGIaWcvFpim3+KiRZRiXLJYpZpS0jXjjBF/bXeXuyIh5SHNJNeuOEmxVThlHy0iQ8ulTa4TclxeL47UpxkMpBrWMtRNj0p+JXIjpIc2kikSUMHIdTmbhER/5VjZ4c4OoZF1Riq4sZBFXZXRaSj5cqfiV9BstREQxEcxZun5lduYXLU2PUUooeG4E26/q7tkuaXeJkYMqXZB2a2fHdiTjZbwsznCMuXqWotNn2/wCz8MlaBYRH1mVJu2+YvZV9aDSBhbbv1bIl4YolGHyLKMR8SkNPkPqx08ykA86WohHyq9Il0R6W4/WKQLTfDEU8RzZoqRVsi0jHzKm7Ci7AG2I8RKtxEszJR0uauJWL9uSqMSZyylIpDEUvI0kHRbHWOZRnLgvKldoRakFq3+CWec36HQVBWykiZRUd2ub8KET4pMpDKJVXR5oppGolHEhkgsOKJNXuYoplbj4iodW+qXSSQnI6ftKWHZZN1T6CRcJJ1gElbMkIrVhxiMk2lo7DbciH7yvmG8uUlWsPkWkVaNNlxLuYIUrOR5E70zqF5upRrk82pSTBRyZWwyOvREzJ7FUeCQKKyuwgyRKCkGqWlEdkJAkuq6hUJDI1TZBDr7KadU501H30kJDqinCA8SbWqcKOPRCQ1RHpVQ6VJFocVH0QkHVANdvk0XUBTC9ijvVS1PwobtVe2RA4pkfCnOVyqMTymiySKXtUeRIbpK2iEk7gV1HlXVkiBRCQs2jkndqhMuqW1VGimxCSVSnVIgZYiWpptF3Yia0UwwGl3yjuEmSQkJM0+aAFVzhKWRIIRp1KqONUYSRoFnjlSTHEvYh1rlXJLYMnOlNoZESLu05hpMjFWT/IdlSAoS5sUUW02rLtPo4KojNSklo2iUojTXsFuh1KfGZPpVcAogNq7JYo1RW6ptUztj+FSymw/alGiEBo7VVEgase11IhkmLkxKgJKh1KpaVTmxSOUUIJU0SSF2oVDQEJhRXbv4kggSIrRSEo1zJhCiVqmnRQJOhoglijBROqCZQNgxRmkyKMIoS06HB4U9uiYKLQVC3KwsUdqiG1HmR6kmQ+wWNikqKXtTqiibKGCKdUcvhRRbFMf0kogk6PIPSzdlEh82rw8y+e8frmLmIsy+hvSIzvJebMvCdqLfvsqGSS7Kbk2kV2GNDHlL7SlW29ffbY3mWWX+ZR2BVzsixJ+UtJZVz/ABocstr7OyoWlA+j/R1gm7tGxcjER1ZYqZjOGNOyb3YuDxLB4Pta63FpxyLY9I/7K3u9pxiItlq4pL2UYQUUmbZ+I1SXRmtsvR6Wuw1foyj7pdqxL1pfWbveC4y5wxX0KxiFo2wJuOCRcstKyW0W0jBODIRLyy/07UnP4+PJ6UX/AAc6fgzcuS2vo8tbxi7Iu8Ii8Qq7w7EMok5H2orRXdkxeR3bcS4ojH7SiXexog3mIm+os3+qyx8dxepWYfK8SffEk2b7ZD6zyq1wh5uXeEOVYi2tBYlFwvtKUOJjGOrmy5k9ZOOmcnJ47jtm8exJoh7sh8SgDelvJbzux6vsrOWVw0OYhIeklMYum8p6uUU1SsTxRrcNL5TqGLI6RlqV6DLYj3cW/jlWRtMbER+IijNbTtnpEva/4RWFwL54Blql7qjfJC4YqIziEi1DHlHMXmJFO7+B/iQlxVOyxsQEeYi5RUuuIFpyj9pV1rvC9Y4LI8vN4iUq2dY+rEXC8RI1KgXBt2EcASHURF0qrOwKWYij0q6K/HSJCXSI5R8RKLc3I8RSLlEVVg8GRPk4jpEvaSMCRF3bbni/mU6yGRcUeEeJWVw9Ec3dj0q0wXG0RLW1cl3hC231FmLwoOIAPCXiLiJBLFxIottk5HiLSnONyGThS6dMVJMpQRlNpibjHMREMR5veWCvNn5F6sR6V6Rirwy7sfdkqpy2Miyt+ZZJqmaMe9HleLYPm3cS8IqrrgEihu4ivVrrBs0nCEftKkxCziUmx8RLFl0aoJPswLmCC2JcwqnuGc2ZuQ8y3t8wRiWaWZU93h2XmzcSz/K/Y1+Op9GUEBllGKJS1HeRISGXEtDbYa3KX3cqX5KLjwy4VPmCXjFIOHiKexaNcTeriWjxPD+WJILARHTGSXLI29F/0xUDhoy7uMerV+9T64S3qIZeFWLeHN6oxLhIUjVqQlq9pK5zvthRxxXorHMOb4Wy3ZdQy/3UgcACOXNL3VOelqJtTLGPFll5hRvPlWrKWDG3bRVDs82OoZeEkg7LMFIxbzcrhRVw9bOahEo8wqVbNF+kiXUgeefsNePj9Iyt1hDA5StJcuaP2UBnZlshytxLlL8S3b9rL1w5R5Ug2beWJeXiVx8jIumX/TQMTTZNqPeCMulPZ2QbIun2V6BY2zZFHNIebSj3FjxR8JRQz8ia9lLxEYd3YfL3eUuX4qoLGyZCUSGJc0f+V6RS3IsvCmM2IykRF9pKfktdMZ/TQ+jFubIC43lIS8sSVB/4c4DhSjqyyEvtL2Vu0ajLMJeZK7Zi5l3g+b7Ki8iUgf6SL3Z5MWyDhZhEfKSsLLZaI94MveXpQYS4PKXhJObsYl6skueS9D44UlR5rXZpsi7uTZdSn2mzBDql4o/8r0UsOacH1cS5k4beI5XEM8jVFwxGNs9nOGRRL+z+99CmDs1bAXeCRSWg+SkRSGXiEsvsqRTDi4oudRaklyth0kZumzLBFlbyx0klLZW2jy+EVrbRkY/dKIl7qlttCI+rJHybDaSMVZ4AIlmLeD4iFWJ7KtOahIZcrmUfaWpFluOYfaXUFvhSJ9hKN9mQHY1pvLJSrXBmGh1D7P8A2tQDcuUhRitmuJsiTYwSWi1BIz7bbZZW1LZwcS4nPDw+0robZvhy9MUegOcypxsIqmMLjmU63DL4UQ65s0k5x8WxlH8RJco0WnRXYrWIiLfrnNPT1Kfh1kDbYiIkXMWbMXEX0puG2ebfuD3heYRHlFW4llyy8Io4tUSwG5y6UE6DLKJF5lJmZcPtJaW3tdKJpMaDF6OkcyMT2WRe6K4m46iHw8SivyLpHxZVmlIpqw7IyzSy/HCjlc8Ijm4SJQKPjGMpeVDK45R+6g50HCKJhVIuLxCoOKOCIiPUhVdcKWaKjulmHp5kqU7NEIJlkTiZvlEN8k4jSZS0MUR7pKLWuZGrRNq4IpLDSo4K+ZK44kkKCbhEWVUi0I4ZEiW1uJfBI7ban2rBcKfjxcgJzSB2lvEuIfEra3uGx9YMlzdoRaiRvkIro48PEyzyromBdt6hyqe0/JU1rbCKmtUXWxy/U5OauWifVxM7Uo0TopwpAzSE2SOFU+tcqlkAUFcTaKlJSyiMSFWqO4aiuuioyxpmkpTpUetwigSpMv0SQp0o0culCaqpFBThaY3syqI67HSiuGodwqfQRxuo7dVFFtSBLKgRVj5pvakEUcmkaRLI7iAQKQ7RDqgYSGVNMcNOIUMhV2Qb2p00lBTHFSdEJDZipVHBUBuvUuJ5XyKomE8nCSrampLJZVRZLolUcDTwqrsoJ2JCAU8qIbklfEEbVMoaIo7tIqUXYTeIoOSUKjiI2XSrKPKXenMkbBEFL2LkDXIRoFKFpDbUgKrRiikrFPoKwyjgyutiUkE2ykANpJQEca8yQiFTki7OCiK3RBBP7VFtlMJVDrRPTDHlRvoDkdSqeJqMVCRG6IUXGRMEk4TUWhcykNkKJSLlskN1TTIU2rgphRRWKoQ0OlVxVTKqFhgIUaj/AEqEOVJR5EkQmm4nNVUUSRAcUaITaVRKKKBozZI0gQ0UYBQgT6nFSSIOrRd2ptHElDS2qCHjVFF1DCqksNSVpWCPBO3iWgoLiNBB6vcqDciUSSBVNeNNGGB2taHNLlKK+fNr8z5CK9+2/oQtuZeGQ5l88Y27J4iLzZlj8qaUHY7BG5kRysW/CpOzLsSnmVffnwq42fbLd8yR4EXys6eTc1s3AV37MhEd50qp7H2y+CUNjECby6fCSE9i5EUfvLvTyLTOnh8mcNT/ALQ93j1zxZhHy+6h22LjxSEuolGGstRRTmrQXcpEI9STLJLu2aPH8vDldI0ezmMOtuSbdlyyIVJ2h2lvCHNGPlzf5Kob2YEWyLfeFRPk8cpP5UccsnDidBePDLH9e/RYWGPiIjvYylmWk+XWhNibO7HxLEXFo1+kEulXtiy1ucwl5tPlR4pV2zF5f/025K2t/SJg30iytyFSRxFptuJNkJeXKq+xKIlFsS5e8ihuWzpFMR94VpU0eU8r8FLH0mdiGLiPCUR5VHbx+OmI+b/hG+QuO6il0yVZfWOod3mFSfRxZYXjlVF21tUOXh6laWm0Yy1SLhXmd3aEOYo5eFVH5SNospLLzojlR7jc46OXfvE4X6MdIq6we/3gyIt22vnKzxh8nJE591aG02vFsYuP74uUSKIpT8mug4Qtuz6Ht8VYbHMUh6f4VE/8hInIttxGWouVeO4NtPvIxcEftLYYARuuDmkPEUtKOHlt6ot+LSuzeu4y5pZHvOZFsrI3Rk8RFLmLKPhFRbSotj9WP9oSIeMtyiLki6VqjP7ZleMvfkzTTfCXuqKb8+URVa8chm4Uh932VDLEpZZRHpR/Kg4wZbRHpy8SFcScKLfdtjqcigDdiIiOUR4RlmLxKuvrlx8t22RbvTEcsvMgc02GsbZHxrcN5W5PveLKot3hLrjcnG4iXhWwwjCGmBlHvnB8wqc3bjKRFKPD8akicHLZUXwejy88CERk4XlVXiGFyHuxy8S9Fxa0k5JziKLbY6lExnCSFsWy1aiiJLFlxuzbhynmN1Z6REdOpMurCIiUYraYhhu7jl6tP4VBxaxIi6fdWVo1ozNqxLKQyFFxfCt22JR95aXAcKLNKOXNqFCxm24eYvMpVKyUZmjYiyMva0qysbeYjlHpJTbjCBJghHV1KNs0G7eIC0pctFqNhgtc0N3IeZRnLHdFmkQ8vKtQ1biOr2kzEGW3RjKJKrCqitssunMPFzeym3eFTzsEPh0+6mWwkDkS8pS+6rizZE9OV4cxDHV1CquwKKyzYLS5mUl/BRLMI6c3hVjU45SGJIjDkdOYvtKrGcCsC1cHKPeD1RH3vpTmnCHK4OZXdP8A+si4eH3lHvqjLvBiXNwoZSbCKuHTHzKSyJcuXw6kWm7HUQqVbjl7shj8f3ihasltjBtuUZFxZkOpx9Y37slbMUEh0x82pO3aHgQr6PCQ5Yl7q6ftKdb27bhZSESHhJFraR4c3uoWqIVrbnSprYCWpuPmFPEBHUMlKaday92hCjFsEzZtyzDHwkjFbFw5kpV/sy9pD3hcrnhSp/ZOAEwzer8worIx/lRWi8Q+VSRIZalIFqNMhncjxDHqilaiXKSsWI8USFS2mmuUU3imP5Few2PKpA1H4FSi3Y83syT2aNlpL3SFShXLZHEJFlL3VxtKYYR6VEu75psczhSLSIykRK2wyJcGLeYsq6xbJwhN6I/ox1R6i6kJhknHJvSIuEeEVLdteLeR+1+9JmK5kghlqKPuojYfyyVa2yXNL46kSt3u9ReURS26CTssyd6RUZ+7jll7Kz99ixaRH/8AsL7qijdlxF9n/tV8zHx2XNxeeZRhMiLMREotLtuPMS6twsmTJbHrFT6J+/jpEfMm1vub3VW1vZIdblKeRoNQplqdzLSPtKKFcxEXEMVEbuCLpLmRRoXiQ87NK0Ho4SfJMpXmTqUQIscL0Vxmuo0PEX2kgtjzCicWQZQEYG+UUYWlPsbcuFHHE7FuaQG1aLwqSwyQlqVk3bdXuqQLC6OLx7M2TyPRDt6kXCpzIFyknW7UVIktuHHTObmnZwBHhRhdimVJDcqtqRkTJdX0zfqE44mifMoNLCjqfRxQRNLRxQEnC7FMN9RSdQqmiFkh91QnXErriBRSwk6CU5UdmKh1JEAiVp7I3ZZsnmUoKqtt1MacTbAYpio1A6VMTIIbslESlOVMKimOUQHFZQS28SJcOIApa0UsgKtUxyKK5RRa0VWEh9XEwnEotroISwdKpjwe0pA0ilIJKqshAoKcAKVuUUGYouFERBrQhRwJOcBOAVKKsVuqMyo9DXA4iBJ5EhFXMlbqiUFQhGNRnKSJWbjKBVmKhCKIJDJFICTd3zKEPJ6uIjZII0RGqLmRSYRLEUQMqGzTpUmPhTVoCw7ZdSMJqvqSOKuyiWaDQoptHR+MqfVRxZLFE06iaKQiVpNECjVPqShG4S5k9SLkKXYd11MbfQiqmdiqxlEqriY2+koOX7qaTShZIo8kIyQ2xT+FWmyqR1HOZOofmUaSINUaZToNSqI2KHRGBFYJx05U4arhqndquwWPApIrTii1RKVyqWy1skk+l3yrK0KWpLVwlLL4loLyI2RKtYFWduCu0Qm24qXUojpiooEuNxWmiJNkihLoqED6PQ0Vl8WEOuX+FRXiRAbkiVsyTEm+i+SS2YP0mF/6hZo+FfNN/Tvi8WpfTvpXtY2RfzL5gvT7xzxLD+RVKjb4FS2Vt85IoitJgRbtvMsu7WRLUYWEmxFN8GLjFUOn+07sI9mKWkftKNct5ZDlRbgIl0qHeu5f4lskvs1OTjDT0BZfJSpuCWqI+GSBhJCLmbSr924b3fDJC5Og/HyqLqhpYkQt8Spbm+Ii7sZKe0G8LKQqXVkGiy6uLqSnN/Z6TxckeS46O2ePTvBWlG0cuXBbbcERGOWSrrV+Q5RFTbO+baEu7i5zLTBpdnf/AHq4yT/7Glvdk5RbadES6i936UMdgLwSiy4JD0lp/wA1J9FWzmIYnekQy+Tjqcjl9rtpReybQYW+wx8lsGN9duDGWqPiL6BWpcaumeQ/MfnF40uFxm13R4fi1GMNGNy8JO8repUd5iO9bk2JMt8xCvYsO9DLLAuYjtDcC45Ht3ddI8umq8h9JO0TTjxMYc33Y5ZCPClS8lL9Tw855fLyOddnn+P3UdOaSyty4RaRXozGyZFF14d5LNHMuuaMCMPkwiXNFI4Sb2zp4vwuaUeR5W8JlzCoT0h8S9buMLaJrLGSxeI2Ai5mEVUsXDbByfjckCjwu/cFwZFllzF91ep4NtKxbMiThbwi0s7wtS85+TiJaRRmnI5oyLh6UxTjCPWzjZPHyqe+j1j/AMv3gjw/2fCP+SlBtC22Q7x4ic/Rt5faXkVcULqIuVRq3bhFLeElfJY+EWke5/8AkzjhDl8I/iVmzeOesJzN9leP4XtANs3IhInOHm/lU1va990ssRHlilfK7NHGLR65bXssolvCcLhy+0tVhtmTbcWfXFxcI9Ul5zgGLNsM71xwd+WkRWqwvGifGMhZHi1ZubVqWjDkb7E5I10ba3vhbbjKRaSLmJFtbmWbLGWZZEcRbDUQlHSI8XiLhR7TEhcIc3CRC2P3lt+bVGfh7Zs2LbeE46IyERyj8VVFiLpSInNLeqP2VO/LgtWggJd45qjwiqG8LeDl8yVncXErEnZFgTr0pac3lRbjD5CRdSmstbtuAj3jn2VZtsxbEeUfeXP+O2bozcSkw+zjwxFUl8wTlzHhHlWtfeyuC3pbHMs/ho5iMssZElT1o1J2Vd82QlEVFZtM0+JW13SRFxESM0z3JcyQ9jEqCMUEm8yr3WIuEPvRVxg7O8aIfvKCcRLNKQqmWRLqzkIlxDmknfJyGJtlmH3vMrO2AS1cS5gIlHh933UGyJIjdm9GWkuIVHabKUY+FTt3mKMuZK31KURNgTlpcHwqTa1bMeEuqObwppnl6lWvHu3Mss3EoWlZPdsWyLMOVJXDB4ZDykJf8obb291FEuZSbcyEsxS6uFQtwo5qjjeUu8H9JxeYVIbKXx9pOJ0fCXMgvtS0qUCS3AGOnNzKQw7ljvPKUVX25cykAIlxfZS5dhwX2SHKiPEKUYlqJQnmYjwkPNpJDbfEtJCgoK0i13Q83vJ1GupQ2OqJcscqeNSHmJSiJokUt/a8ScTLnLJDC8HiFEJ0tTbnliposVukdTalMQJQyvBj3kUSj7fCKu0RdlgLQ8JJjjQ8RKodxEWy+s8ub2U6j+8ylIW+Xi8yEtxDXF9mgzIi80R8RcX7EluA6nBJxziIhj7PKmFUW9MWx+P1KovsViRRcGXSJEgnaIo/yaZt8Y8o+JAeuGxGWpYs8SdIvWZfCoN7ijg6R3he6kTnXZaxJ7NfcY43wqpuMVkXrFkt8+6UnCFseURU5iizTmMjiTLarpS1DFI8+A5vsqM3XhiSlNCOqPtJPy26NMcSiMC+6S6U2u8Mssh6VYsvD0ipVu83zDJDKFs1JogM2hcWpSmLSRcykBcJlbguJDxSBkSW7Xy9KeVIoI3QxRqVlwq1QSOypQoXKhEwRaVNw+zIfCijG+iwY25KdZ2JErWwtJalZha8vCt+Dxr7MWfyVHRVs2URzD7qINsKtSaQt10roLxonOflWNbDKjCCVkeVHqnxhxFOduxo0TCJMkkdojVoVJpofQuZR3CThNCcoiUrJFIaVF1KLq0TSqqDCUJOFDpUiTwBU7IF7E10op7QJ7raOmVSIFZJVIoKEYqUC6AlVPt6oRDmRWAVoBkoa8KMyJJGaKbb5eFFZKCNghulEkR13KohnJE6LFJ3pQa1RKIVZdKGymhRqlJPAEh1EdKlkBEK4QTScRW6qrsJQHdiSCeKfQlaBYMwQgFSamupVHQNgIJ9acqcTqjFcK2wkPJRnCTLm5UKryBzKaJO8RGTUBuimNEorKLNo0YjUIaI1ERA9UF2q4yQScRIphK0TCQidQTNUyI8kYc6lJZcVaKkNkudGFBS0rLQKqQ3XKq5ouUlNt6+VWAEOqcNUM6ZkoHFRMgTtRwUYnEds0xyJW7C0SFT4JLSqUaKyER5dbipRNp1AHhVUCo0wNGkm6UitEo0UoIEAJ9aItB8SIYK0iETsS0oiueJOAVAHIiuAlaopkV1B6VaAY1uiLRtcIriNMLs6CFUUcaLiooC7AUEkUKJw1FOUCjoivio7Qkpr1UylFbREtj7bVpVm0SiW4KQRIA3D6Dm+hG6opkSaIkrCSaJdHkQLlAatiUxtgU1E5II2+UcqJ8rJOb0pSWvFBmTJkTdGQ9JVCcsi4oykvmC8b78hLicX19fWouNuAXEK+cfSns2ds+RiOXVKOX2u1YvymKTjyN/43Ioun7L+x9DzjtsL7brZSGUfiqx+I4WVm8QOcPEt96H8WJ+0K2+V7t9n6oi9Y3mzD8+ZC2rwxtwnMw7zq+6neHC8akjdCLnNqJ5jid5LKP8qiNiJDmRruxIXCGMcyjXIbvMSZkdBTxyWPi2rBnQRLKp9iwTg5S91VVXZK0w64iOX2dKVys2eEpR7diUAm3FaYewDvri8KqbsyIuVTcHbclmbKPMSWns9V4cMKfKaNRa2TYjlWv9FmwpYliTTT0Sth7x6P6MZZfp/OsKw8Us2Xwr6D9BdyxaMZSlcvZiKUojmykK34scZbb6OZ+e/Iw8fE8eC+eTVfx7Z7bhuHs2zAMMNg0y2MRAeyg0oqjGdqLS1bcdIhiGolj9u/SA3D5Ow53hayHl8S+fdvdqnbtwrZtzuRLN1EsWby5TlwxM8N4346WZ77ZYelX0j3eLvuMMlubRso5SzOD/AIUWPwsgY1N5uaOYlJ2YtSbeEnBHd+LL4lO2kZFxwdzEh5hyp+HAoR5Ptnu/x/g4vGnGE4W6svNm8XbccEXBGPDlVrtVYWJDLcDm4m8pLG/It02LgkUupQrnGD4iW/G1xpm3zcMpZk8WortEDaDA3RzsNuE2XurE4phr+omyEeoV69hu0wxzRyrM7ZYsT5aRj/ZxEfMs/kwTVpnJm8s5tOOvs8wJjpSVbGJLUUsRLiUS4wwZfH+65bbsW/EhO0zNUrHhThLMr9vBCIii4P4lAubIpRlmFX8hm/2PadPZXPHzF7Kl4dcDLiTXcNIdQySUtyHNpQU2YsvguBeM3uYYjmHiLT7K2OD4gWXMRcxaV5xhxlKRDIVdlihxiOUU2EnE5+XH9G3/ACkJFHLHiKWUfxKbgOOi24USGRZRJecA8TmWW7EtSmtG20MWiGXEWpT5nYtYVR6kWL5hiRE5xOcPsq9wm7b5vFml/KvK8GfLUUpcxZVaXGLQGLOZwtTiks5ePB6PRK44O9GOYtIiJaVev3oi3ESzapdS8bwDEm2nCdeKRaolpU3Ddrd6+RSy6ukR5Y9iJZkkX8Oz0a5fjaPSLM4Q6fEq2wPuyGWrSsrXamZEGYs3MrbALuThFwtjlWec7ZoUOJOfLNq09P8AwpVbqIj/ACrPYlighLUTjmkeXzIFheuuPNyKQ8qVY7ijW4BdahEswqPiLkpHpiWlQ7C6Fu5zaeLqTCvRJ9yWYS0iSHkXwRY210OXqRH3YllEo9MlVYc4JEQl5Ue5fiX3i6VVk4It7C4EspZfEmUHduRLhUAu8HVFKTxEMtWWJSzK0wJKmTbqkR+ySig6JCUpdX83YpFncZYFpQn8ubKXMhi7JF0DBkfglIapHSMh6lBFsXNJRTXiNvi/CSIckpIszZlpLy8QpoNGOki8yr2MRlqGJKa3fdQlyyQvZTxpDnnY+skPlXA9EcuYfZiiPXjZD3mX4/aqR2oiWrLzCX4ktlKL9GgavhLV72VHaYbLN/MszS4HmEvEitX3DIpdOZDyK+Nl7cCPUKaFyI8QuD1KpO6EtREPtKDdi59S5Ier8SuyKNGkfum/q3iHpIfvJtq+50qgF1ziEfK4Ka5c8xOD4S/D86CTGJWX1xfR1R8MUMbsiH9GPhEi9lZa6xYQ05val7XYoTuOjqzD7SSsjIkro2e/FuUXdWqWpMO/Lm+P3rz+72kjxZvCqs9pH5RIsvh/4VqbGKmj0a6vf7QlDN4f03vLG0xAy1OKK6ZS1Ekzk2xsIqtGzeuY6Y+LNH2lFbuZF4vMqmzMuKUfdVi3WOYUmSkPWGqRbDbDHKUlNYt4iqa2ueKSsWb/AC5uJA5emNXjbsswbbH4+6juvcMRIRVC9dcpIVLgi1EhphfEy+G5HibFDKrf1YkKBZBLMWUfCpBgUhiMhV8GVGNC0PxK1srEnByjl8SXC7SWYhW1wRjLmEU7B4zySoV5E+EbMwGGd3L3VOw7DCLm8K1VLYSLhiPCpLDAjp+ytsPx+6MH9aUjOECIyLUpVnZSVs83ljxJbAYrVj8RJin5TEtbURFHYajqUgAXOCtqxKPoyTk27ZHMFEdqpbpqA84roVQo1TlFB5GbqhYSdDqUXVFGCmVcTauiiGY8yHWmVTK06UxUy4kRtv4ki0DpS9q46qghydlUc6ptDUBcmTKOinGclEAk6pJhfIcajuH0qXVRzqKgIIaqS3RRaF1Jd/yqEJzJKWBqsZr1Iw3KhAzxoZnxKMb0kB1zqUIS/lQowuqmmjUuUSVqymWhOqKTqifKJCg0NL7IiWRJ4XShVcT2gIun7KpaC5E8HEcaqDRGYd5kZRMohOEkFxCcqr5FUNcNR3CTnHFFMlRaQypJKhJDqSktUkoQey0pbTabbiijVGAFoPKnGS6lSSFTmUIMI0EiSuJlKK0yPoQ0h0SknbpUUkeIC4pLbqBRsepJQfEKwF2T2nlKYuOoVTdsfgUZo1YL1suQd5vaSg4oTVUUKx6VGiJeyaZ9KcLuXh1KPQ0tKqLQ19WTm3UcSVYLkU4H8yYhRZ0ThrxKJR9LW4RsuyVWqc0Sg1dzJKXKpMW1ssQNP7eZVQv8yKD/APKruwok+ginULh4lGZekjR4kLBcQtDT6OqJMl1TUXYKJwkm1qgsufEfvJ5Emph8GKdU0XCSG7l4U3epXJ+iuIUaowKNRxFEkaZfBiFRPbohkaQnI8yrlRFDeyWLvx/ChuOKKTqQal8RVSk5DHj4sl0cFGbeVfSikAKGOmNqyyadRd8Krm6I26HzLXi7FZIpk2r/ACrt6o0hH8Ka5c9K3J0ZKDOEq3F8NbfbIXBkJcyIV4SHW4JPjBSWxcppM8d219HRMOb+ykP/AM9Q/wCazlxcELfeEW8HVLKXvL38ni5Vjdsdm23RJwRi54dXiWfJ4yjuDZt8L8g8c9rR5TZXgSkQkXi/EgYncMHlcb3fhzKxxW0FoibcGJDyyWcuBzRbSXKuz0kM2GUf5GW9u1Lu83lVtb4QZDlZJV1mBNlLd+ytHa47ljvCHypSpy2afFwRcrTon4LgLW7k/q6lExJ5ttwgZcGPLqULEL+Q+tJUZsCRSlm5kybjFWeixyWFF3hz0XJFm5dK12E7Tk02TTEhdc1fHYvM7hzd6pEtXsLYRErl7TqGWWSx5c/L9V0eK8tyy5nN/ejS45iRNsiJOFv3uIllrq4EcuouIuJWtcKubtwnx0lpLlHSo1xsy61nccEubVL/AGTvFwOC5JHq/wAH4HGHOS/Z9FaV8UcubpRbK5ckMh+P3Lr5xvS2yIlxRzKfg7wxi4K1KSO5lhOD32Tr7EBJkQ0+GP8Asm2ls0TciGWXzKzfwNsmZDq1ahEVnLi4cGQtjIuXSmt0cPNnhJOMX12Qbq27yLY5kK6wh2MpCRcv8S525cFwSLKSuwxLu9IyikZNnNz5ciS4K/sxZgQkUkPsLq8qtbgpPaRVuLLW7HMIrnzVMJ5eEVLiZZl8ol8Eo420XJFm4iUvGajIt3pTLRuTaBHQgoKPJdsnFcNuNllGQ6R5lQXVqWossuXhR3i3ZalIC3Is27IldmaPiJfs9lWxbS0prtq4PrClyirOtvEpDlUZ8M0iQybMWTwYt3RFtgcLSOUeVHGpDmU9m4Hd+Hh0qseeInM2lXzdGTJ4sbqgzGJmPERdKiu484REOnwqS9RsW+YiVWTWbLlVGb+mSJdb4t3lIilqXYfdELkRkTmnLwojGHcxZi5VOt7VtoSIczniUaI/H/ku8NJtgZvEO8JabCsZEWS6uKK8tv23XC4i+z5VPN8hZgJZkDB+K6NaV6TtyMc3iJaaycba4pF05lh9nXeYc0dSnBf7su8KMuHmVBTgjWfKJZpJnygZSIh6iWbPEJR/Rjzfwp71xvIxLSlk2ay0c5cxcJI79xvC+0qmzxEd3DiHUiOXURIhjmVkqy0F3hzI1uRSkRSHSXEsdieMR0lmFSMN2iEhEuLiEVCSxNGqrcRKLnlL7qVot4Upe8SpDf34luy8Spa40405GWnhJSwfjXZt958cyCOKCWV7m4lTYbjYujmciXKnu3A/WZo6SEsyGXQRYvVb4dKZvh06fjmWefv92WrL1IVtj7e8iQxIUFkRqaXHmTXKnGUZeHMqauLN8OX4/vRGMS5XCLp0+8oE06sK4GbVHpIYptLrhIS8qqcRxTmEiHxCq9i6EvVkTZdWlA0UotmxpcSTHLqI6vtLKHiTolHKXmSXN0bn1kemSpNFqLfRf3GJNj8SUB3EZaXiHpis4RFLMStMOZAhzFm8SJ76L+KV1RLpeczkkC4eEuUlHJxsXIozjrcc2rhSpRdj142Va4kV8QLhESQHnN2PV1Ci1oXD9lB3ZOFxEXSn/GqN+P8AFtbbCBSTcpIVs6UlYDZOCPeCQqQxg8s2UR8SF4kjcvx0Ywtsay/yo9blwSii4PYxciUVZ4pZtiQkOX7yXLGiLw4RSV2xtpauRlEupWdkxLKiMXoixGWZJh1yQoXiS2VHDOV1ESttzJttHefwqQ42ROdJK0DDBbiReyheFUMyYYwjb9+jhtyERU8Gt3HqUe7fbiMdXKmtiRRIhyqo40V4/j/aLiyczdK0dhdy4lm8OCRRzfaWgas4jlToPg9GL8pijxr2aG2MVMFwYrMMvkOpWTF3LKuhjzRkjys4yTLC4dQ23EISSdicZiYLyQnlFqabJGEnQ5x1Ry6k5wl0lVkbBiCsrRnKogRR6PxVg0ThYSHRBbuE+h9ShAZgo5ApskB9xW0RMikyuqKQ3UGriosY6SQTTXiQ6tqDF0Ecf8ySjhfBIIgpB1ERQ8iwwOKO66KGRLgBSyDRRBqlFPECRASCtgRJRbRGaEkr4lASPVriUdyktKmu6dPmUcm0DYXEjUbimV1IriaIqkwqSCts8qUG0VjwqRbijQMiONtzI27yotV1RVggSom1JOMUB01CD94nTyqHUk6tVCCFVOEExECiiVkGuNojK4aI+4QtFWLJEbJMcoozrsUbkVRPpcIRFmUAHuVSRNUpv2VRLFLUVGF1FE0a2QIwIqTUR5VFbcRpKEPCwoKWo+JPGg8qfWmVYicP5IlW0QRR4DFNgiWiuL9jwJFDwy8KFQSTgkrbLJIUSFqSiXVLpTjr0qnRTb6GkScLaYa5uqtAUiRUvjSmGkkmVIkT6CDhVCuXIpaGhOjLpQERzFx1Kcw9mVVBSrVok6KVFNoumD5VLElWMApzNPj+ZTigGx9aptSRq0QjaQ0WlsFSqNRxKDSTdZdMvMroagTjuZcIriDpJOoHiQNJdFM6lU8HEE6J1KKJINBe1AKUsqkiCe0wpVjAdq1zKWIp9BTRVqNFuvZ266k7siiNNqSIiritgSaS0RKLi8Km1AU1whWyDoyPZAzcyduuZGMxFcNZLTBr2UBFkUQQ5cqfQR+CTiMeGK0QkZZrZHNtRn21OIkOoJylaBoxe0mAtuDIV5zjGAkJFEY83Evc37NVuIYeJcIl5cyRm8dZENh5DgeBjR9ovFzCot1fFmkyPiXrOP4I2WYWxWLxHBSllEly8sJRZ1/F8xpJoxRXObN9lS3XmyGTan3ezL5ZhbL2dSocbArTK5GXKsfkKcsbR0Y/kHKX7t0Ouh3jjYy+8t/cXAtWzDXSOXTJeZ4XfzIfFwrb4i7HdSkWX4zJHiYq/uDl5MZTTXSN/s7jwEIhGMR1cKscScF1shkGYdS8uZxMiyer6pKztsKuRdbIX94JcK9Nh8n/AHfCKPY+F+Q8ecVumazAtl2y3kYkRcyr8U2WIDLNm4VLtcWO2cEHMvUrxlzfkJb0SHypzxY1H/8Ao6eSc9yTTi0YtzFSab3DhaRjl/6ULBrxveFLykS0+1OzpkUhj1Rj/usVjOGbjNIh8SyTcl2jzfleLHi3Htkvagmt2McxKksWN5mlpQauSyxIkoXLjfDGKyTk7sy+Phljg42NxK33ZZfeUQWSLTwqVdXMx5k2zdisuR2aseKfDdMjPgQaooQXJcKmYmyTpDEoxU3BLVoZbzUlo0ZOUYJyRUtm2RCRDvOrSrU7oSbjpFJiGHyKTeUVCasCc/iRpAZo8o3exuHhvHolGKucV2ebcESZIZD1alDZ2ef1DmHmyqUDLjZSckMeFRx/5F4vGyZKp6+yiu8EfHU3LwkoY2LhZdyQxV/e4k7KLY5RUauMGQ7shj1K5Qh6Yzy/Ghhipx2ylumOYfKoRN8qsXSInMyeVRj4UFHPyZOStrZXt3JDpRt9pIsyHUu86VLbiRRj95C2hWLDFydkzDrsRGTmlRbm7Ei7sfaVk/hQizIikodhbykIj+JDoZHw1yuybhzkRIi7xz3RVPe3G8ekUuUVdvNRZ3coy1Zcwqss7Pvojm8QlFSg83ga5ei4tXRiMtUdKO3ejIRFvzcKr32XGyLl+OZCGXD9lA0YIeOneyezfEL3L9lWTeMtyEXM3V/KstetOCUiLVyptrbk4Q5c0kNMk/Fl3Fl/iEd9Ihyl7qAJthxRHhRbi0Ihy5o8JFpVVVlwiiioc/Fc42maGwxMd4PKpWMtNuCRiq6zwVzd6REhzIJSEolq4UNAw8SMnV9dlNdPFKTeWKs7fECJvM4WXUkewlxwpREfvKIdgTRRJFSLn4+NuoMku3kizaeZOHdlm4hRMPwgnNOUer7qZe2MCjlLw5UPFBf0MWAunS0jlFT8Pv8AdjmzJbO0Ih6fjSuu7LLlkr4oOODHD9HtjL7EN6XKKjNHEsyvMEwkXMznCi4xh7Y6fZU4JDIxxKXx+ynbInC+zlXOAQkOUlpNmLZoikWXyqRtLQYiLcZKnKP0aIxjy4cbMuxZkWlLuIlEhirqyebEYlqUZ8t4WkRHqUUl6Rtx4/34xX+oL8lzzCSQLHMIlzKW1dlGKAVDlKJZVTl/BWSE5uqo1gYM0NtmHNHN1KlwYGxfKWkSy/Ao7BPujHeFHxRUV+zcbLMWrlio2iR8Sck4zl/yLTHnmyyiMuaKgfKojEW5eIoqztcL7vNIpIGF2Q7+JFIRLSl8rHY8WPHjabbormGyEpCKumsGcdbnKIq1xw2hbEYiRcq60xgRYjxcqGWgY5ZyheOJWYXYjvIlm6VJuqiLwxHKPCom+KUubxI9vhrjmeWXzKuzXHG0uU3X+CbdXcYkPurguyd5vaXC0223EsxeFOsqiA+LhQNsP4IuNxX/ADLNhpuObUlo9LKKraTMoiJeVX2FWm7iTiiaQnNxwxuT2XmB2wiObUStKjxKtt3R6VZsHJIm22eX8nlkk5MdCS4W4oiWqvHKts58sNvYRpz2kXeqLUUoEuph8lS0czP47i9IMBZlLEUFkUWpLWZ6ZHepmTN0nn8Chm6hbRTQlKIw1UelS5U9oFVhpaJwEkpVR6IokmR/kWGqhGuIlFdLqVyZSTHOCg1HMl3nKhGgsdSCnRDKq6hKQLSrZZD7EklPBscyA5RVRALTacZIkUlGhVoggI41Ta0FLRGBIfQiTTBMRAVFUPmoxvcJJXSUI3ZIQ49bCyTQohVJNF1Uiie3XKpDbiqwNFpVMKkWFXEhFlQGgRQFEkLdgXKEuqCk0FdBDRdkDcyTyaipNaIbtJKUWRKqQyCQAUllXEpiDVKZrj1aUwqKNA2CdPqUJ1S7gVHSrGuqEZFHpVMEkSg8qtABmgXEaHvcsUDtRoYoolAfUnFdDFQ6IT5KWC4nk4XI5Yx+PEng78RUFpEbr1LKA9lj283x7KKNOVRgNSWviSIBNi9iWgFyolHJKQCpl8iNQESgKTSvxFNGqpRbKk9EeCI3ThRCBI2KNKguIVpr2U51vlXJ4VRtaI0DBr+aKY4zmUns+MyYYqQBQE+UkZgRHT/Mu7E5okwVJUSmaqWAioFCR6OKiR2yWYih0PMhb7q8qbvM2lLsciVIUyXUgE91JROStFtP0F7F3YmUJc4avkl2Vv2MdT2uFB7JKVbNIbGKLolt05k+kUyg5UwqqBhCNKJjpQqUzZk6hCrKmSW6DJGUcXE+aJAONxFpQkM6pDfQ6up6fsRxGm1JPlFD3vwKZFOhK2AEN/zJlHulPABR26iPCtMRUoWRxNOq4pdTb4ooTpDwpilQPAib5zyrizaiRZeFRyaIuJGmypJIA7Yt6izFy6UP5C2WlsfNmUzdjxI7AcoqKKsC2VJWA8Ij9peOennZ6O7dEfdjy/3r6CZYHiWe9JOzI3lg6IjImxkKDPh5xL+TifKGAZXBXpZCJFbEWkoiS83ebNh8gIYk2WaS3Gz72/tiH6wdPMuLBcXR0o5Lx67PRbnYcSbE2hKMZSy/7qhusMuWiyuEIjwrXei3bFt1v5Hcl/7LIxzZZDmzDKi1l/h4u6l2IYE0nFmWPm5MUnZ5bYX5GW7ue8HhIoy9oaKRdWDjTm8tHPLLT7SutoWbS2KLkWyLSRLIYpijZerdEuUoqS/XTez0X478zliuTv8AwHuMUcIouOEJDxSQb0iuR3ZOyy6izEsrf3xy7yTg8SMydsTZEL25LlJUpJpnpF+bw5kovTL+2whpjMTpFFAxKrTjeoZKhcu3NW+3g+6ns40I+sZl1fFFmk09aJ8ePJJSUkdaWWbvBy8qmVYYcEojEhQ6bRNfof4f8lJLaNr6sYkXxmWOcLfaNq8dza4yM1dSFyIiSc4JDmll8S0NrdNuF6xsZcwp1/h4uaXBkOnSl8aNk/Hm1/en/BmxxXhlEfaUljEGxy7zUn3OCDKUf4vZUO7sS/R5uZUnRnzQkl+0S5DG923FtyReFdb4kTst4So7W1/SFH46VLO3HU255Uz5WlSJHyJQjw6LJ58R/EmlmHTlVKJuEUYyUu2dJsswkI8qXLQKm1Fq1v7I9w01wueXMg2tg47IW9I6iJW9blpz6nMpGGOC2JZhGXDxIoq0YvLwyxw5Rpszj2Gk3xSTLe1IXJy8qn4hc5iERyrsEMd5mFJrZnwNuNy7OvalxEUfjlRMNdEfxKzumv7QSb95MtWG+YfCiSOx4OLmrYC7N2PdkKJhl+Okok4pF7lEd2Ix4lEtQGUYjHiLqV0H58E0k+vokX16TmWMR8qig7u+GS0LWFtR+9JU11bZtRIGjm4MeOmoorr5/eZRFGsD3ZSVu3hLe7lmIlFuLIR06VXQhZcU58PZIO/GKhMOxclq6locGwkHG5FmLxIO0OGtNjJvVy/hQvY5Sxr/AHcQoYsO7kUvLxfhVHcOycIxy9Km4NZbzVpUnFrRsRlHMiovH4mODf8A+wJnE8uYSl0yVfcv7wpFlHhRLNqRZsqlXFs2h/yVLxMeKV+2Ow6/3Y8JIF6ZOFIlLwJoSciURFbG6aabZ9WMYqtPoOWXHga02zAW7scqObDpjlbIh4kcxb33DGS1do82LWryq0g884QlGXF7MXbPEGUZIhMOuZo+8i4i6Lj0hHLyqwZuhEfwoXI0ZIVU1HZXWzZDlHVyqyLDnI5iiReZRGrjvJEI+YVPuMRIhjxJLd7NLjOlKC2V7VqRPQktTTAGhYGXrOaRLKARSlm6SVtXE3CbiREjgLyY/InOPF/5A4Yw3v4lEhEtXxVXOK1aFsssuWKoHbdwRlEo8yPhNmVyQ5svEUkwnk+NKUk3PS7ok4O8IiREo2IXO8LKOVWGN4WLGUXN4RKbgdg0LcnBkXV+JJodJQjHnFNlbb35Rhp8UlGeYdEpiP4f3q2umd25MW+JFrcSHNl6RV0aYRcopKPf2RrJgnRzFGK5i17yIlIfDJSvloAMYj9pQ7e7GXdjm6cqGSHxxNf4+i6xWje7i2Ij1dSh2t5u24k4gPCZZnMo+8m2kSIYtuFzSS5SpiJfBjX7MkA8ThZRU21th4nPKp1paSHMMR5VXm2Lb2XmSpM5vk/l1H9caNBhzGnLFWdRUbBqyEZK2pbpbZw8uaWR3JkGrfKptiRJhNrmiihexd6otBHKnigMOqR2qhbQWiWhJginiKvk10LnFNbDNVFOKorm2U4mSWrB5kv7WjBPx4PoEQJtASkuFdTHJSVmGcNjm2syk0aFAbknEaaqEtBCAV1FHoSLLqUIkK5RRHqKQ4SEQqmMUaIlKJao9QQhBA0WI0OZHKqeyC5yKJdEB0JMOoprhIRIiDydSTEkKoIoBFQg+eVJvExxBbzKASJ4VXdqGyjEKhOQwiyqG+akuuioTlULDAvVkkBpc4XSni6hRTVkhlrqRqtIDRowDJMAaomMinOUTbaiMaJAtnUqUcyC64uq4SiXbpK2UlYrbskUqCqwXcyki8gbGLHQWtU9pxRaOpHbjKp6sGSDPOoW/UM303eoLZLDE4Sc3RDpWWVFpWKpFuNEhsU+lUFlSaCmJWUBCmZOqCKKU1Gi0yKdY6lCuDU+4oqy6BUxiPLBontgpxsCm0bFJ4mQBEsuVEaTyBDKKYtIQ07JAOKY0WWQqpE8yJR2KFpMZAtQNPGPwKq2XlKo8PMoqQwlEkaohtufElJtwVLbDjsfFFGvMlThp5kTRY0KJr9UYU11vqVWCyEdEouCnkCFWijegK3YZtxHqaiUT6EgTC4hamiNobYqSDWVWCJUZJYJ1KcKeKlhxG0QHizJ76i9mbUqc0Go2SrQVObJRbYVJIoirixi6DHLmQjdQaPSSFRXyKFq4kbJdQBTqFHUonYRJbNcbvlUcTSvGKJMEdUkGriSlZCm1iPiTVkdAuI9koyRKOiohjJNh1ZkUHTEk4r0R4kKj5EgNNipYUHpWqE7FzEAS1S91GCnmSUc8xeJNdcPwpykhM20SG2OVGqPSo9ucdRI1XU5SVC+LexsZKWwMVCIupFtz6lakAWLVBTqe6o9bgRHMo5Xoo7KZ4x6cdg//wB9aDlL1gjw6f1ry3Br9yzcE4yHiH7q+tX4ODFzMJah4V5R6QfR82RE7ZEOb6kvukS53kYXdrs1Ycta9GHu3Gn93dWT24u/ZKXm4VtrbbHF7O2Ertht9vhcbcbEi8X0rzQ8OdacIX2SiPEOZWNrbtGO7cJ4emRR/egw53j7JlxrI/1L0Nqvyq9uib3bgyIc3u/Qh3eGRYeLib0qDszh7Fne70XpNxLKQy4ebtXoNngwv4Dd3wvMiO9IREizav8AFO+TmtbC8fM8OpdHieI4445l3Yj1KrNnecxLXYXgDB5nHvCIjq8yubbAWB9WO88SVztaNers70WMYbbMvHiTZPS9WObKs/tleNvvl8ib3TPCPEtlb7NEWocvKpP/AIt/Zj5v+1lk2wnld/q2eWsk63qGXiIUO5veVkRXouJ4I23l4iVcGzciytpTN+Lzs0Y1yMezeCWXdxLmkrC2by5XPeWl/wDEhHhKXL8VTv8AxLqj0/FVDfi/KZovbKAMQdbykQkPDJNK9KRSzeFWV1sqUiGPmQKbNGJK0zfD87k6e0RWb0eJvKmjfjLu2xIVOpZvtahEvEKrb7eDqbHyiqj2a1+UjLbRYWt2JF6kfKp126JDFxr2SWat7qOru/CP2lZMh3chfzcpInJWacfl4p0FshaEpEUfFL7qnXwsEIkJD5VVUaLmZIvEpFoZNkJkyJR6RiSKLTZplDC9shvsjLUjWVmPCUVdXFo0+U/V9KBiLbYDFsvEpkS9CEoN0iBu4lmzeKSlNW+XKIy5UC0djllm6kZ24IS9XLzJZ2fFjFDBuCLuibiRZYpHLFxrhIVLpakUXco8XUpHy6OoZe8gZzPyGXIp/rG4kJl8tMkxxotUSVizRoikg3VTEpCQx6RQpFr9IaXZAC+cHKjW4mXMX3UjjYuFKUfKreyqA5ZIhC8aEXzUdkMX3GtJEJKO6846WYpFyxUrHRIoxISb5o5lK2fMQzakFfsE8SiuShsimDjWaMfKmkJO6SIunMtBe3bbgxIo+WSAHdj3Lgy6hUHY7rnKGyifsX2xluyHqSMERZcyvXb9xwYuZuoYqHYvNC5xSUouGKU3ynH/AAIzYOiM46eVCK4M8si6RKStr0xJuIubsukv+OxVtszEpSJz3UMkaMeLf7RCN2DnKI+zJNYZLeRKUi5iyqeFz0j5il/oluLpsmyk2I9QlmUVDFilJOUl10EbwAYyJyJdJKnJuLkB5o+JSxfER7sizcPxRPYuM2pCxWLHlk7ky/DD7YGJODmjxSyrNtNyejHL4lPexcoxKRdMUG3bccz7v7I+yquxsMTV3It2LcYxyj4lFctN1mb3ZS4kxuzdIoj8f5p9zZuiQi5p6YkjGQ+LFH9poG88XFm6VKwu+FoS0xLmJDcw4SyiThdXCriz2fbJvMJF1fFUEot9GeXmeNFO5FJcXjbjhFHN5kVl5wsrcvCri02eiWoY+FXNlhQt8XupZlf5rx4xqMTKv73KJDux4klMP098XlW0uLceWRdQobdv0j4lbZjy/np/8ETL/kf9GMi5iXO2BjHN7IrTOUzafMn0YS5yRiyflc+R9lA3YkWoiLpV1a4bp7xWNlbdJK6bYER0rO1syvI5bZDtrHL5VkcZ/wD+mI+6thjWI7tuLfrCWUba3jki1IZETLrCKxEVfsKtwq30q4FpUkC5bGvgo1B6VZUHKgXLflUKUyO3VSWjJBBrMjglydF3ZICSlMGorKkt0QqQl9EkDRQqooI1CRRk0JaCkA8qCQRLSigSfVbMfluJnyQsARiorxjJGepmUO4ourjyclZgnBpiUuOpL8oElXG8lbNHYstKGjNVFVrLylMkrSK6JLlOJBoKMNcqjG9FW0Xdhu1RHXPEnG7JBJQYuhO3xIsEjQqSAfGlVRXJAAZRRa6VOtxEUtxRN9Cm92VrlsuBmKk0oSC7UUN0WhOxI8aZ2qO87m8KByCUTjr0oFRRO1OghsYRjCSJS3RaAiVrlUiU3QMBUhgVEopDCMBuywA051CaRqioDREcKKrrlxWbrSiOtDzKBIgtDJSKVTaUS1Qhp2Bdqhl4kcqcqYVC5VTRZFqiNCngypDbKlCmtgG1IaonC2u7FaTKFGqliovaPL7yODqNKiNhAolOqWhrizKMnZHeLLpUQgUm8ryoKW0Q8yBzm9lJJVTTmbUprLnVJBsTaDGor9OpPJ4UwjR0W1GtAhpxItCTDLlSt9QqSAixwlwxJFCo6RTOxKNeVLbDD0c5lOs3vjMqmpZk+jsUCdPRadbRdb0fZ8yOw9IVUM3XmT238yNt0Wmy5o6mm8PT8eFVtLlFo6gtkZO1cPvIZIIGuJzqiiTLQUqJ7AoHantkipBEkD6VKbqobBI29Vg0iWPlXV0qMLiY8/HmQsOKQG7dQWnZeFAcckSfNJbVj4RRYC/FEq4otEVokaLml6JYim1ok7UM0boCwgu9SHUxSEzxIZodoI564TmzlmJDNvKhURIBpkgnOVPCnMogORTidzJkK9lS6D1cFMIuVNoKbPlTV2KcSW0CdFV5XTiQbweJPgJmi0bbUobbqVMd5wiubfIuLypsXsVJJ9l22w3zJTIR4lSC7HmRAcI4xbTdlaSLDfClrc8q5m2KMnEWrYijTFNKtECrbhFmJHoG74kjznLlQSbItRK7YCQ9264eJVrloThd4WXlVqERHTm5kF10i4lUlfYyNIqb20YESHci4Swm0+EtiXdju5auKX+eVehPBESIsqzOI2cnJkOX44VncUWvZnNmsHbfuWwfkLZSGQjqyq3e2Hi3di2T2UsoyKJD1D25lZbJXO8xayaJsRZ32aXFlX0Qezlrv3KRHvGv9FneSEeg4QTpyPlrBsDiz6mUfjSr3DLIRjIYrYYhg+7feEcrcsqqLkIuRkmJfqNeR8qTEbYEo6VzzcU0XE2olL4yrMOj9jGcEbMpFIldW+BDGIigYUJEURKK3mDWgiIiRZlow4FIVkzcTJDs3m0ikdwAR4Vu7oBHxKK8tMvFSQr+rkzF/wDjzYjp9pRHcDbLKIyJa59oiyyQKsi2OnMkT8dUaMXkMwuIYE3xDmWcv9m5F6vKXur1uyw2ecveQLzCBIuZIeCVUaX5N+zxDENlhItKz1/s4I5YkXtL3x/ANRcP2lQYhgolIhH8KU8DQ+Gf6PECwFzhSsPONFEpeZes0wKXq25F4Vn8UwcW3C3zQiSvi1s7eHydJWZYrwYyJki/+ZKK7i7ZZSFyPUtHbYAT5FEYj0ipruw+UZNl4ooJqTJl874tp7MUDjRcJCPte8rYbNtxv10ekvxLVW2yo6BHTqV9hWyjccwiX2UGx8fzeTjSPLBYJuWYi8OZFCWkZZulesFgDe7luxjp6k6ywFohzCMuVKaa9gQ/K5IvezzNiwdIfWNj0oJA4LkSLMvXGdnGspRHVy8P+KlO7LsEJFuxkStS3tjpfmZtVR45VgvMpeHYY65KMfMS9Wb2TbjmbEfL/wAqW1sw1u9P2kWkHD847qjx66wt9v1hCI9OZDatiESKXux/0XtJ7MtbnT9pCt9mWCEhJvN4VTgmD/t+S9Hjduw6Rahj1KVd2b4jLeN7v3l6oGzTfKOXpRHsBajpHKq+FML/AO4siVKJ5Db6dWbliX+yYFiTjnEPiFeq3ezjeUhEZDyijNYO2Q5hES8MlaxpCf8Ab2Z/8J5vdYGUZC8XhESTLSxcjEm3JezJeohbQGJCMUYrNshkOUlOMfZT/O5/R5Pb2LhOZmXBFWzuzW8GQslvOol6EFkMSEsyKzb8I6eUlOMQJ/mvJa/+Dy5/A7ttsh3TaFhNi/lk23Ieb/petEwJDEhFUd7YRLK3FVUUZv8AafkyfdGSv8OfciOVseKKt7TZgd2MnCLpVgFMytbKRZUuUtaRH5GWT/uZT22zwyyuF4VbN4ArOjUdOpSrNktRESqMky5Sk1tlW1gseJEoxHp8IqdciXMq5wS6lTf0Z+AjrgjwkozjxcuX3k9445d3/EiNN5ZaZILCSoBuyKMiijgKMNEyuYsyXOWhkWxrVtIs2ZWTNpHSh2YkWkYqxJ4R8SVf2MTFYYESkXsqFil/wiOZSLu5GPEqwGeL3UDZfIrnSKUY94XEpNvaRLiUti2ESlxKY2IqgLD2DeVTmKalHZyijsykqb0U5NEgBQLwVLBDuAQ2RTIjZJ9QXAyPESMQpU9l97GjRSAUcBUilfdQIpyCUSjRDklpVWmUSKIlKoAmiiXCmJoXJAXxlpUC4orJxvlUZ5qQ8q2eNmfKmZsuO+ikeqhtkSnG1LhTCYXWx7ObPTAdslObKKGDUUSsYpySKOO54UKmZKNFIYAZKmRDKCnUaUoATiBVQXL0AtmulSiqKGRxUR25RaBJ7ToohPqpF3MiOuq26JxJbtzFQn7lAcfUG6qlSlZKoku3KBvM2ZBbrKSeLfEhpsYnSDNmMlKFzlUIk4USQPIkk9zIrdJeFRK9SlMCiiinIkVa6U5hA7U8HBRUirJgFmRqCoYPipjTylIqxrgqFcNqxcdFRnVKRNkCjXMkIUR5xAF3MqaQSYUW0M8uWKJ2ptBVF8mNbFOo5HqTjCKjPlEVKKsadx0oBPoNTQDdVgJkutxmUpt9VAKUBKthFlS5l/MlF4lCqUUguZuJC2QmkckklFq4ntlJQs//2Q==";


/***/ }),

/***/ "./src/app/mock-data/product1.ts":
/*!***************************************!*\
  !*** ./src/app/mock-data/product1.ts ***!
  \***************************************/
/*! exports provided: PRODUCTS1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS1", function() { return PRODUCTS1; });
var PRODUCTS1 = [
    {
        id: 1,
        name: 'Camiseta Xadrez',
        cover: 'https://http2.mlstatic.com/vestido-xadrez-roupas-femininas-pronta-entrega-D_NQ_NP_697104-MLB27236349465_042018-O.webp',
        price: 40.00,
        tamanho: 'P',
        marca: 'Marisa',
        condicao: 'nunca usado',
        descricao: 'Camisa xadrez vermelha cumprida feminina'
    }
];


/***/ }),

/***/ "./src/app/mock-data/products.ts":
/*!***************************************!*\
  !*** ./src/app/mock-data/products.ts ***!
  \***************************************/
/*! exports provided: PRODUCTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS", function() { return PRODUCTS; });
var PRODUCTS = [
    {
        id: 1,
        name: 'Camiseta Xadrez',
        cover: 'https://http2.mlstatic.com/vestido-xadrez-roupas-femininas-pronta-entrega-D_NQ_NP_697104-MLB27236349465_042018-O.webp',
        price: 40.00,
        tamanho: 'P',
        marca: 'Marisa',
        condicao: 'nunca usado',
        descricao: 'Camisa xadrez vermelha cumprida feminina'
    },
    {
        id: 2,
        name: 'Vestido Cult',
        cover: 'https://ae01.alicdn.com/kf/HTB1JGL5QVXXXXbzapXXq6xXFXXXj/1950-s-Ver%C3%A3o-Vestido-O-Pesco%C3%A7o-Na-Altura-Do-Joelho-Patchwork-Preto-Do-Vintage-Pin-Up.jpg_350x350.jpg',
        price: 140.00,
        tamanho: 'M',
        marca: 'Zara',
        condicao: 'Usado apenas 1 vez',
        descricao: 'Vestido feminino para festas com estampa geométrica e sem decote'
    },
    {
        id: 3,
        name: 'Blazer',
        cover: 'http://cdn.shopify.com/s/files/1/0982/3144/products/blazer-masculino-importado-slim-casual-plus-size-drak-gray-roupas-e-moda_grande.jpg?v=1520542644',
        price: 140.00,
        tamanho: 'M',
        marca: 'Renner',
        condicao: 'em bom estado',
        descricao: 'Blazer masculino com pouco tempo de uso, com mescla de tecido, perfeito para ocasiões informais'
    },
    {
        id: 4,
        name: 'Camiseta Xadrez',
        cover: 'https://http2.mlstatic.com/vestido-xadrez-roupas-femininas-pronta-entrega-D_NQ_NP_697104-MLB27236349465_042018-O.webp',
        price: 40.00,
        tamanho: 'M',
        marca: 'Marisa',
        condicao: 'nunca usado',
        descricao: 'Camisa xadrez vermelha cumprida feminina'
    },
    {
        id: 1,
        name: 'Camiseta Xadrez',
        cover: 'https://http2.mlstatic.com/vestido-xadrez-roupas-femininas-pronta-entrega-D_NQ_NP_697104-MLB27236349465_042018-O.webp',
        price: 40.00,
        tamanho: 'P',
        marca: 'Marisa',
        condicao: 'nunca usado',
        descricao: 'Camisa xadrez vermelha cumprida feminina'
    },
    {
        id: 2,
        name: 'Vestido Cult',
        cover: 'https://ae01.alicdn.com/kf/HTB1JGL5QVXXXXbzapXXq6xXFXXXj/1950-s-Ver%C3%A3o-Vestido-O-Pesco%C3%A7o-Na-Altura-Do-Joelho-Patchwork-Preto-Do-Vintage-Pin-Up.jpg_350x350.jpg',
        price: 140.00,
        tamanho: 'M',
        marca: 'Zara',
        condicao: 'Usado apenas 1 vez',
        descricao: 'Vestido feminino para festas com estampa geométrica e sem decote'
    },
    {
        id: 3,
        name: 'Blazer',
        cover: 'http://cdn.shopify.com/s/files/1/0982/3144/products/blazer-masculino-importado-slim-casual-plus-size-drak-gray-roupas-e-moda_grande.jpg?v=1520542644',
        price: 140.00,
        tamanho: 'M',
        marca: 'Renner',
        condicao: 'em bom estado',
        descricao: 'Blazer masculino com pouco tempo de uso, com mescla de tecido, perfeito para ocasiões informais'
    },
    {
        id: 4,
        name: 'Camiseta Xadrez',
        cover: 'https://http2.mlstatic.com/vestido-xadrez-roupas-femininas-pronta-entrega-D_NQ_NP_697104-MLB27236349465_042018-O.webp',
        price: 40.00,
        tamanho: 'M',
        marca: 'Marisa',
        condicao: 'nunca usado',
        descricao: 'Camisa xadrez vermelha cumprida feminina'
    }
];


/***/ }),

/***/ "./src/app/objects/publicUser.ts":
/*!***************************************!*\
  !*** ./src/app/objects/publicUser.ts ***!
  \***************************************/
/*! exports provided: PublicUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicUser", function() { return PublicUser; });
var PublicUser = /** @class */ (function () {
    function PublicUser() {
    }
    return PublicUser;
}());



/***/ }),

/***/ "./src/app/product-list.service.ts":
/*!*****************************************!*\
  !*** ./src/app/product-list.service.ts ***!
  \*****************************************/
/*! exports provided: ProductListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListService", function() { return ProductListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-data/products */ "./src/app/mock-data/products.ts");
/* harmony import */ var _mock_data_product1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-data/product1 */ "./src/app/mock-data/product1.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductListService = /** @class */ (function () {
    function ProductListService(http, product) {
        this.http = http;
        this.product = product;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.popularURL = 'http://ec2-54-185-32-212.us-west-2.compute.amazonaws.com:8080/requisitar/maispop/24';
        this.userUrl = 'http://ec2-54-185-32-212.us-west-2.compute.amazonaws.com:8080/requisitar/bucarrelacionado/$$id/24';
        this.searchUrl = 'http://ec2-54-185-32-212.us-west-2.compute.amazonaws.com:8080/requisitar/busca/$$search/$$category/$$id/$$min/$$max/$$order';
    }
    ProductListService.prototype.getPopularProducts = function () {
        return this.http.get(this.popularURL, this.httpOptions);
    };
    ProductListService.prototype.getUserProducts = function (id) {
        var customUrl = this.userUrl;
        customUrl = customUrl.replace('$$id', id.toString());
        return this.http.get(customUrl, this.httpOptions);
    };
    ProductListService.prototype.getProducts = function () {
        return _mock_data_products__WEBPACK_IMPORTED_MODULE_1__["PRODUCTS"];
    };
    ProductListService.prototype.getProductsId = function () {
        return _mock_data_product1__WEBPACK_IMPORTED_MODULE_2__["PRODUCTS1"];
    };
    ProductListService.prototype.getFilterProducts = function (params) {
        var customUrl = this.searchUrl;
        params.search = params.search.replace('$$', '$');
        customUrl = customUrl.replace('$$search', params.search || '0');
        customUrl = customUrl.replace('$$category', params.category || '0');
        customUrl = customUrl.replace('$$id', params.id || '0');
        customUrl = customUrl.replace('$$min', params.min || '0');
        customUrl = customUrl.replace('$$max', params.max || '0');
        customUrl = customUrl.replace('$$order', params.order || '0');
        return this.http.get(customUrl, this.httpOptions);
    };
    ProductListService.prototype.getResults = function (idList, callback) {
        // let products: any[] = [];
        // for(let i = 0; i < idList.length; i ++) {
        //   this.product.getProduct(idList[i]).subscribe(
        //     data => {
        //       products.push(data);
        //       if(i === idList.length - 1) {
        //         callback();
        //       }
        //     },
        //     error => {}
        //   )
        // }
        callback();
    };
    ProductListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ProductListService);
    return ProductListService;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!hardLoad\">\r\n  <h2 *ngIf=\"!search\" class=\"list-title\">{{title}}</h2>\r\n  <h2 *ngIf=\"search\" class=\"list-title\">Exibindo resultados para \"{{search}}\"</h2>\r\n  <div class=\"product-list\">\r\n    <div *ngFor=\"let product of productList\" class=\"product-container\">\r\n      <div class=\"product-picture\">\r\n        <img [src]=\"product.cover\">\r\n      </div>\r\n      <div class=\"product-info\">\r\n        <h3 class=\"product-name\">{{product.name}}</h3>\r\n        <strong class=\"product-price\">R$ {{product.price}}</strong>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"hasMore\" class=\"btn-holder\">\r\n    <button *ngIf=\"!loading\" type=\"button\" (click)=\"getPage()\">carregar mais produtos</button>\r\n    <button *ngIf=\"loading\" type=\"button\" class=\"loading\" disabled>carregando</button>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"hardLoad\" class=\"loadingOverlay\">\r\n  <h2>Carregando produtos</h2>\r\n</div>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-title {\n  margin: 50px 0;\n  font-size: 24px;\n  color: #AA076B; }\n\n.product-list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.product-list .product-container {\n    width: 23.5%;\n    margin-bottom: 50px; }\n\n.product-list .product-container .product-picture img {\n      width: 100%;\n      border-radius: 5px;\n      display: block;\n      cursor: pointer; }\n\n.product-list .product-container .product-picture img:hover {\n        -webkit-filter: brightness(0.9);\n                filter: brightness(0.9); }\n\n.product-list .product-container .product-info {\n      font-size: 18px;\n      margin-top: 10px;\n      text-align: center; }\n\n.product-list .product-container .product-info .product-name {\n        margin-bottom: 5px; }\n\n.product-list .product-container .product-info .product-price {\n        color: #AA076B; }\n\n.btn-holder {\n  display: flex;\n  justify-content: center; }\n\n.btn-holder button {\n    font-size: 20px;\n    color: #AA076B;\n    box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #AA076B; }\n\n.btn-holder button.loading {\n      color: #747474;\n      box-shadow: none;\n      cursor: default; }\n\n.loadingOverlay {\n  text-align: center;\n  font-size: 20px;\n  padding-top: 300px;\n  color: #747474; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L0M6XFxVc2Vyc1xccGVkcm9cXERlc2t0b3BcXHNhZmUyXFxQcm9qZXRvLUVuZ1NJXFxlbmpvZWkyL3NyY1xcYXBwXFxwcm9kdWN0LWxpc3RcXHByb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGVBQWM7RUFDZCxnQkFBZTtFQUNmLGVBUG1CLEVBUXRCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLGdCQUFlO0VBQ2YsK0JBQThCLEVBaUNqQzs7QUFwQ0Q7SUFNUSxhQUFZO0lBQ1osb0JBQW1CLEVBNEJ0Qjs7QUFuQ0w7TUFZZ0IsWUFBVztNQUNYLG1CQUFrQjtNQUNsQixlQUFjO01BQ2QsZ0JBQWUsRUFJbEI7O0FBbkJiO1FBaUJvQixnQ0FBc0I7Z0JBQXRCLHdCQUFzQixFQUN6Qjs7QUFsQmpCO01BdUJZLGdCQUFlO01BQ2YsaUJBQWdCO01BQ2hCLG1CQUFrQixFQVNyQjs7QUFsQ1Q7UUE0QmdCLG1CQUFrQixFQUNyQjs7QUE3QmI7UUFnQ2dCLGVBMUNPLEVBMkNWOztBQUtiO0VBRUksY0FBYTtFQUNiLHdCQUF1QixFQWExQjs7QUFoQkQ7SUFNUSxnQkFBZTtJQUNmLGVBdkRlO0lBd0RmLHFFQXhEZSxFQStEbEI7O0FBZkw7TUFXWSxlQXpERTtNQTBERixpQkFBZ0I7TUFDaEIsZ0JBQWUsRUFDbEI7O0FBSVQ7RUFDSSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixtQkFBa0I7RUFDbEIsZUFwRVUsRUFxRWIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnktbGlnaHQ6ICNBQTA3NkI7XHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRncmF5OiAjNzQ3NDc0O1xyXG5cclxuLmxpc3QtdGl0bGUge1xyXG4gICAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0LWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAucHJvZHVjdC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAyMy41JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cclxuICAgICAgICAucHJvZHVjdC1waWN0dXJlIHtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKC45KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3QtaW5mbyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLnByb2R1Y3QtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcm9kdWN0LXByaWNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1ob2xkZXIge1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggMHB4IDBweCAkd2hpdGUsIGluc2V0IDBweCAtMXB4IDBweCAkcHJpbWFyeS1saWdodDtcclxuXHJcbiAgICAgICAgJi5sb2FkaW5nIHtcclxuICAgICAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubG9hZGluZ092ZXJsYXkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDMwMHB4O1xyXG4gICAgY29sb3I6ICRncmF5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product-list.service */ "./src/app/product-list.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _mock_data_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-data/products */ "./src/app/mock-data/products.ts");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../communication.service */ "./src/app/communication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productListService, toastr, communication, route) {
        this.productListService = productListService;
        this.toastr = toastr;
        this.communication = communication;
        this.route = route;
        this.hasMore = false;
        this.loading = false;
        this.title = 'Populares';
        this.hardLoad = true;
        this.search = '';
    }
    ProductListComponent.prototype.resetProductList = function (newIds) {
        this.productList = [];
        console.log(newIds);
        this.requestLine = newIds;
        this.getPage();
    };
    ProductListComponent.prototype.getPage = function () {
        var _this = this;
        if (this.requestLine.length) {
            this.loading = true;
            var nextRequest = this.requestLine.splice(0, 8);
            this.productListService.getResults(nextRequest, function (data) {
                //mock
                data = _mock_data_products__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS"];
                for (var i = 0; i < data.length; i++) {
                    _this.productList.push(data[i]);
                }
                if (_this.requestLine.length > 0) {
                    _this.hasMore = true;
                }
                else {
                    _this.hasMore = false;
                }
                _this.hardLoad = false;
                _this.loading = false;
            });
            // error => {
            //   this.toastr.error('Não foi possível obter os produtos solicitados', 'Algo deu errado!');
            //   console.log(error);
            //   this.loading = false;
            //   this.hardLoad = false;
            // }
        }
        else {
            this.hardLoad = false;
        }
    };
    ProductListComponent.prototype.getUserProducts = function () {
        var _this = this;
        this.search = null;
        this.hardLoad = true;
        if (this.id) {
            this.title = "Especialmente para você";
            this.productListService.getUserProducts(this.id).subscribe(function (data) {
                _this.resetProductList(data);
            }, function (error) {
                _this.toastr.error('Não foi possível obter os produtos para o usuário', 'Algo deu errado!');
                console.log(error);
                _this.hardLoad = false;
            });
        }
        else {
            this.title = "Populares";
            this.productListService.getPopularProducts().subscribe(function (data) {
                _this.resetProductList(data);
            }, function (error) {
                _this.toastr.error('Não foi possível obter os produtos populares', 'Algo deu errado!');
                console.log(error);
                _this.hardLoad = false;
            });
        }
    };
    ProductListComponent.prototype.searchAction = function (search) {
        var _this = this;
        var params = {
            search: search
        };
        if (this.id >= 0) {
            params.id = this.id;
        }
        this.productListService.getFilterProducts(params).subscribe(function (data) {
            _this.resetProductList(data);
        }, function (error) {
            _this.toastr.error('Não foi possível realziar a busca', 'Algo deu errado!');
            console.log(error);
            _this.hardLoad = false;
        });
    };
    ProductListComponent.prototype.initialize = function () {
        var id = window.localStorage.getItem('enjoojeiUserID');
        id = parseInt(id);
        if (id >= 0) {
            this.id = parseInt(id);
        }
        else {
            this.id = null;
        }
        this.getUserProducts();
    };
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initialize();
        this.subscription2 = this.communication.triggerAccess.subscribe(function (data) {
            _this.initialize();
        });
        this.subscription3 = this.communication.triggerLogout.subscribe(function (data) {
            _this.initialize();
        });
        this.subscription = this.communication.triggerSearch.subscribe(function (string) {
            _this.hardLoad = true;
            _this.search = string;
            if (string.trim() !== '') {
                _this.searchAction(string);
            }
            else {
                _this.getUserProducts();
            }
        });
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.scss */ "./src/app/product-list/product-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_product_list_service__WEBPACK_IMPORTED_MODULE_1__["ProductListService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _communication_service__WEBPACK_IMPORTED_MODULE_4__["CommunicationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product-register.service.ts":
/*!*********************************************!*\
  !*** ./src/app/product-register.service.ts ***!
  \*********************************************/
/*! exports provided: ProductRegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRegisterService", function() { return ProductRegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductRegisterService = /** @class */ (function () {
    function ProductRegisterService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.registerUrl = 'https://4yaozzf2f9.execute-api.sa-east-1.amazonaws.com/ver1';
    }
    ProductRegisterService.prototype.doRegister = function (register) {
        return this.http.post(this.registerUrl, {
            "a_venda": true,
            "categoria": "Vestimenta",
            "condicao": "Em bom estado de uso",
            "desconto": 20,
            "descricao": "camiseta laranja confortavel",
            "foto": "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAJdnBBZwAAAeAAAAHgAPpdNOQAAAANSURBVBhXY/hfr/4fAAbLAqUa4S1PAAAAAElFTkSuQmCC",
            "frete": 5,
            "id_comprador": 1,
            "id_vendedor": 3,
            "marca": 5,
            "nome": "camiseta confortavel",
            "preco": 20,
            "qtde_curtidas": 30,
            "tags": "Camiseta, Confortavel, Medio, Unissex",
            "tamanho": "Medio"
        }, this.httpOptions);
    };
    ProductRegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductRegisterService);
    return ProductRegisterService;
}());



/***/ }),

/***/ "./src/app/product-register/product-register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product-register/product-register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <nav>\r\n    <ul>\r\n      <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\r\n      <li>\r\n        <div class=\"arrow\"></div>\r\n      </li>\r\n      <li><a routerLink=\"/publicar\" routerLinkActive=\"active\">Anunciar produto</a></li>\r\n    </ul>\r\n  </nav>\r\n  <form *ngIf=\"showForm\">\r\n    <fieldset>\r\n      <div class=\"form-holder\">\r\n        <h2>Identificação</h2>\r\n        <div class=\"name-fields fields\">\r\n          <img *ngIf=\"form.foto\" class=\"product-picture\" [src]=\"form.foto | safeUrl\" />\r\n          <div *ngIf=\"!form.foto\" class=\"empty-picture\">\r\n            <button *ngIf=\"!form.foto\" type=\"button\" md-button (click)=\"imgFileInput.click()\">+</button>\r\n          </div>\r\n          <div class=\"side\">\r\n            <div class=\"input-field\">\r\n              <mat-form-field>\r\n                <input matInput [(ngModel)]=\"form.nome\" placeholder=\"Nome do produto\" id=\"name\" name=\"name\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <mat-form-field>\r\n                <input matInput [(ngModel)]=\"form.marca\" placeholder=\"Marca\" id=\"brand\" name=\"brand\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <mat-form-field>\r\n                <mat-select [(ngModel)]=\"form.categoria\" placeholder=\"Categoria\" id=\"category\" name=\"category\">\r\n                  <mat-option value=\"Camisetas\">Camisetas</mat-option>\r\n                  <mat-option value=\"Vestidos\">Vestidos</mat-option>\r\n                  <mat-option value=\"Calças\">Calças</mat-option>\r\n                  <mat-option value=\"Bermudas\">Bermudas</mat-option>\r\n                  <mat-option value=\"Saias\">Saias</mat-option>\r\n                  <mat-option value=\"Agasalhos\">Agasalhos</mat-option>\r\n                  <mat-option value=\"Acessórios\">Acessórios</mat-option>\r\n                  <mat-option value=\"Bolsas\">Bolsas</mat-option>\r\n                  <mat-option value=\"Outros\">Outros</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"input-field\"></div>\r\n        </div>\r\n        <div class=\"image-btn\">\r\n          <button *ngIf=\"form.foto\" type=\"button\" md-button (click)=\"imgFileInput.click()\">Trocar foto</button>\r\n          <input hidden type=\"file\" #imgFileInput (change)=\"imageUpload($event)\" />\r\n        </div>\r\n        <h2>Informações</h2>\r\n        <div class=\"info-fields fields\">\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <mat-select [(ngModel)]=\"form.condicao\" placeholder=\"Condição\" id=\"condition\" name=\"condition\">\r\n                <mat-option value=\"Novo\">Novo</mat-option>\r\n                <mat-option value=\"Usado\">Usado</mat-option>\r\n                <mat-option value=\"Seminovo\">Seminovo</mat-option>\r\n                <mat-option value=\"Defeito de fabricação\">Defeito de fabricação</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"form.tamanho\" matInput placeholder=\"Tamanho\" id=\"size\" name=\"size\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"form.tags\" matInput placeholder=\"Tags\" id=\"tags\" name=\"tags\">\r\n              <mat-hint>Separe as palavras por \",\"</mat-hint>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field full\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"form.descricao\" matInput placeholder=\"Descrição\" id=\"desc\" name=\"desc\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <h2>Pagamento</h2>\r\n        <div class=\"payment-fields fields\">\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"form.preco\" matInput type=\"number\" step=\"0.01\" placeholder=\"Preço\" id=\"price\" name=\"price\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"form.frete\" matInput type=\"number\" step=\"0.01\" placeholder=\"Frete\" id=\"shipping\" name=\"shipping\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input [(ngModel)]=\"form.desconto\" matInput type=\"number\" step=\"0.01\" placeholder=\"Desconto\" id=\"shipping\"\r\n                name=\"shipping\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!sending\" class=\"save-holder\">\r\n          <button type=\"button\" class=\"save\" (click)=\"saveHandler()\">Salvar</button>\r\n        </div>\r\n        <div *ngIf=\"sending\" class=\"save-holder center\">\r\n          <button type=\"button\" class=\"sending\" disabled>Enviando, por favor aguarde</button>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n  <div *ngIf=\"showError\" class=\"message\">\r\n    <p>Não foi possível acessar os dados do usuário que está publicando o produto</p>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/product-register/product-register.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/product-register/product-register.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 80px; }\n  .content nav {\n    padding: 30px 100px; }\n  .content nav ul {\n      display: flex; }\n  .content nav ul li {\n        margin-right: 10px; }\n  .content nav ul li .arrow {\n          display: inline-block;\n          width: 12px;\n          height: 12px;\n          border-top: 2px solid #AA076B;\n          border-right: 2px solid #AA076B;\n          -webkit-transform: rotate(-135deg);\n                  transform: rotate(-135deg);\n          margin-left: 5px; }\n  .content nav ul li a {\n          color: #AA076B; }\n  .content nav ul li a:visited {\n            color: #AA076B; }\n  .content .save-holder {\n    display: flex;\n    justify-content: center;\n    align-self: flex-end;\n    margin-top: 40px; }\n  .content .save-holder button {\n      font-size: 20px;\n      color: #AA076B;\n      box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #AA076B; }\n  .content .save-holder button.sending {\n        color: #747474;\n        box-shadow: none;\n        cursor: default; }\n  .content .product-picture {\n    width: 30%;\n    height: 300px;\n    border-radius: 10px;\n    align-self: center;\n    -o-object-fit: cover;\n       object-fit: cover; }\n  .content .empty-picture {\n    width: 30%;\n    height: 300px;\n    border-radius: 10px;\n    border: 1px solid #AA076B;\n    display: flex; }\n  .content .empty-picture button {\n      width: 100%;\n      font-size: 40px;\n      color: #AA076B; }\n  .content .image-btn {\n    display: flex;\n    padding: 0 0 1.25em 0;\n    width: 30%;\n    justify-content: center;\n    margin-top: 10px; }\n  .content .image-btn button {\n      align-self: flex-end;\n      font-size: 16px;\n      color: #AA076B;\n      box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #AA076B; }\n  .content .form-holder {\n    display: flex;\n    flex-direction: column;\n    padding: 0 100px 100px 100px; }\n  .content .form-holder h2 {\n      font-size: 24px;\n      margin: 80px 0 20px 0;\n      color: #AA076B; }\n  .content .form-holder .fields {\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      width: 100%; }\n  .content .form-holder .fields .side {\n        width: 30%; }\n  .content .form-holder .fields .side .input-field {\n          width: 100%; }\n  .content .form-holder .fields .input-field {\n        display: flex;\n        flex-direction: column;\n        width: 30%; }\n  .content .form-holder .fields .input-field.full {\n          width: 100%; }\n  .content .form-holder .fields .input-field label {\n          font-size: 16px;\n          color: #747474;\n          margin-bottom: 5px; }\n  .content .form-holder .fields .input-field .mat-input-element {\n          caret-color: #AA076B; }\n  .content .form-holder .fields .input-field input {\n          height: 30px;\n          font-size: 16px;\n          color: #AA076B;\n          letter-spacing: 1px; }\n  .content .form-holder .fields .input-field input[type=number]::-webkit-inner-spin-button, .content .form-holder .fields .input-field input[type=number]::-webkit-outer-spin-button {\n            -webkit-appearance: none;\n            margin: 0; }\n  .content .form-holder .fields .input-field .mat-select {\n          height: 30px;\n          font-size: 16px;\n          letter-spacing: 1px;\n          box-sizing: border-box;\n          padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1yZWdpc3Rlci9DOlxcVXNlcnNcXHBlZHJvXFxEZXNrdG9wXFxzYWZlMlxcUHJvamV0by1FbmdTSVxcZW5qb2VpMi9zcmNcXGFwcFxccHJvZHVjdC1yZWdpc3RlclxccHJvZHVjdC1yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1JLGtCQUFpQixFQTJKcEI7RUFqS0Q7SUFVUSxvQkFBbUIsRUEwQnRCO0VBcENMO01BYVksY0FBYSxFQXNCaEI7RUFuQ1Q7UUFnQmdCLG1CQUFrQixFQWtCckI7RUFsQ2I7VUFtQm9CLHNCQUFxQjtVQUNyQixZQUFXO1VBQ1gsYUFBWTtVQUNaLDhCQXBCTztVQXFCUCxnQ0FyQk87VUFzQlAsbUNBQTBCO2tCQUExQiwyQkFBMEI7VUFDMUIsaUJBQWdCLEVBQ25CO0VBMUJqQjtVQTRCb0IsZUExQk8sRUErQlY7RUFqQ2pCO1lBK0J3QixlQTdCRyxFQThCTjtFQWhDckI7SUF1Q1EsY0FBYTtJQUNiLHdCQUF1QjtJQUN2QixxQkFBb0I7SUFDcEIsaUJBQWdCLEVBYW5CO0VBdkRMO01BNkNZLGdCQUFlO01BQ2YsZUE1Q2U7TUE2Q2YscUVBN0NlLEVBb0RsQjtFQXREVDtRQWtEZ0IsZUEvQ0U7UUFnREYsaUJBQWdCO1FBQ2hCLGdCQUFlLEVBQ2xCO0VBckRiO0lBMERRLFdBQVU7SUFDVixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixxQkFBaUI7T0FBakIsa0JBQWlCLEVBQ3BCO0VBL0RMO0lBa0VRLFdBQVU7SUFDVixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLDBCQW5FbUI7SUFvRW5CLGNBQWEsRUFPaEI7RUE3RUw7TUF5RVksWUFBVztNQUNYLGdCQUFlO01BQ2YsZUF6RWUsRUEwRWxCO0VBNUVUO0lBZ0ZRLGNBQWE7SUFDYixzQkFBcUI7SUFDckIsV0FBVTtJQUNWLHdCQUF1QjtJQUN2QixpQkFBZ0IsRUFPbkI7RUEzRkw7TUFzRlkscUJBQW9CO01BQ3BCLGdCQUFlO01BQ2YsZUF0RmU7TUF1RmYscUVBdkZlLEVBd0ZsQjtFQTFGVDtJQThGUSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLDZCQUE0QixFQWdFL0I7RUFoS0w7TUFtR1ksZ0JBQWU7TUFDZixzQkFBcUI7TUFDckIsZUFuR2UsRUFvR2xCO0VBdEdUO01BeUdZLGNBQWE7TUFDYiwrQkFBOEI7TUFDOUIsZ0JBQWU7TUFDZixZQUFXLEVBbURkO0VBL0pUO1FBK0dnQixXQUFVLEVBS2I7RUFwSGI7VUFrSG9CLFlBQVcsRUFDZDtFQW5IakI7UUF1SGdCLGNBQWE7UUFDYix1QkFBc0I7UUFDdEIsV0FBVSxFQXFDYjtFQTlKYjtVQTZIb0IsWUFBVyxFQUNkO0VBOUhqQjtVQWlJb0IsZ0JBQWU7VUFDZixlQS9IRjtVQWdJRSxtQkFBa0IsRUFDckI7RUFwSWpCO1VBdUlvQixxQkFySU8sRUFzSVY7RUF4SWpCO1VBMklvQixhQUFZO1VBQ1osZ0JBQWU7VUFDZixlQTNJTztVQTRJUCxvQkFBbUIsRUFPdEI7RUFySmpCO1lBa0p3Qix5QkFBd0I7WUFDeEIsVUFBUyxFQUNaO0VBcEpyQjtVQXdKb0IsYUFBWTtVQUNaLGdCQUFlO1VBQ2Ysb0JBQW1CO1VBQ25CLHVCQUFzQjtVQUN0QixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0LXJlZ2lzdGVyL3Byb2R1Y3QtcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgICAkd2hpdGU6IHdoaXRlO1xyXG4gICAgJHByaW1hcnktbGlnaHQ6ICNBQTA3NkI7XHJcbiAgICAkZ3JheTogIzc0NzQ3NDtcclxuICAgICRsaWdodC1ncmF5OiAjYzNjM2MzO1xyXG5cclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgXHJcbiAgICBcclxuICAgIG5hdiB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAxMDBweDtcclxuICAgICAgICBcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNhdmUtaG9sZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCAwcHggMHB4ICR3aGl0ZSwgaW5zZXQgMHB4IC0xcHggMHB4ICRwcmltYXJ5LWxpZ2h0O1xyXG5cclxuICAgICAgICAgICAgJi5zZW5kaW5nIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3QtcGljdHVyZSB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbXB0eS1waWN0dXJlIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1saWdodDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZS1idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDEuMjVlbSAwO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDBweCAwcHggJHdoaXRlLCBpbnNldCAwcHggLTFweCAwcHggJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtLWhvbGRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTAwcHggMTAwcHggMTAwcHg7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDgwcHggMCAyMHB4IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWVsZHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuc2lkZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAmLmZ1bGwge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5tYXQtaW5wdXQtZWxlbWVudHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJldC1jb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICZbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCBcclxuICAgICAgICAgICAgICAgICAgICAmW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWF0LXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/product-register/product-register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product-register/product-register.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRegisterComponent", function() { return ProductRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _product_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product-register.service */ "./src/app/product-register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductRegisterComponent = /** @class */ (function () {
    function ProductRegisterComponent(toastr, registerService) {
        this.toastr = toastr;
        this.registerService = registerService;
        this.form = {
            a_venda: true,
            categoria: '',
            condicao: '',
            desconto: 0,
            descricao: '',
            foto: null,
            frete: 0,
            id_vendedor: 0,
            marca: '',
            nome: '',
            preco: 0,
            qtde_curtidas: 0,
            tags: '',
            tamanho: ''
        };
        this.sending = false;
        this.showError = false;
        this.showForm = false;
    }
    ProductRegisterComponent.prototype.imageUpload = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            this.toastr.error('Formato de arquivo inválido', 'Algo deu errado!');
            return null;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    ProductRegisterComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.form.foto = reader.result.split('base64,')[1];
    };
    ProductRegisterComponent.prototype.saveHandler = function () {
        var valid = true;
        console.log(this.form);
        for (var key in this.form) {
            if (this.form[key] === '' || this.form[key] === null) {
                valid = false;
                break;
            }
        }
        if (valid) {
            this.submit();
        }
        else {
            this.toastr.error('Preencha todos os campos para prosseguir', 'Algo deu errado!');
        }
    };
    ProductRegisterComponent.prototype.resetForm = function () {
        var oldId = this.form.id_vendedor || -1;
        this.form = {
            a_venda: true,
            categoria: '',
            condicao: '',
            desconto: 0,
            descricao: '',
            foto: null,
            frete: 0,
            id_vendedor: oldId,
            marca: '',
            nome: '',
            preco: 0,
            qtde_curtidas: 0,
            tags: '',
            tamanho: ''
        };
    };
    ProductRegisterComponent.prototype.submit = function () {
        var _this = this;
        this.sending = true;
        this.registerService.doRegister(this.form)
            .subscribe(function (data) {
            _this.toastr.success('Publicação registrada com sucesso', 'Sucesso!');
            _this.resetForm();
            _this.sending = false;
        }, function (error) {
            _this.toastr.error('Não foi possível registar o produto. (DEVs) Para ver a mensagem completa, abra o console do navegador', 'Algo deu errado!');
            console.log(error);
            _this.sending = false;
        });
    };
    ProductRegisterComponent.prototype.ngOnInit = function () {
        this.form.id_vendedor = parseInt(window.localStorage.getItem('enjoojeiUserID') || '-1');
        if (this.form.id_vendedor < 0) {
            this.showError = true;
        }
        else {
            this.showForm = true;
        }
    };
    ProductRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-register',
            template: __webpack_require__(/*! ./product-register.component.html */ "./src/app/product-register/product-register.component.html"),
            styles: [__webpack_require__(/*! ./product-register.component.scss */ "./src/app/product-register/product-register.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _product_register_service__WEBPACK_IMPORTED_MODULE_2__["ProductRegisterService"]])
    ], ProductRegisterComponent);
    return ProductRegisterComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.url = 'https://dry-escarpment-83331.herokuapp.com/v2/api-docs/produto/';
    }
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(this.url + id, this.httpOptions);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\r\n  <nav>\r\n    <ul>\r\n      <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\r\n      <li>\r\n        <div class=\"arrow\"></div>\r\n      </li>\r\n      <li><a routerLink=\"/perfil\" routerLinkActive=\"active\">Configurações</a></li>\r\n    </ul>\r\n  </nav>\r\n  <div *ngIf=\"loading\" class=\"message\">\r\n    <p>Carregando informações do usuário</p>\r\n  </div>\r\n  <div *ngIf=\"!loading && error\" class=\"message\">\r\n    <p>Não foi possível acessar os dados relacionados ao usuário solicitado</p>\r\n  </div>\r\n  <form *ngIf=\"!loading && !error && user\">\r\n    <fieldset>\r\n      <div class=\"form-holder\">\r\n        <img class=\"profile-picture\" [src]=\"user.profileImage | safeUrl\" />\r\n        <div class=\"image-btn\">\r\n          <button *ngIf=\"user.profileImage\" type=\"button\" md-button (click)=\"imgFileInput.click()\">Trocar foto</button>\r\n          <input hidden type=\"file\" #imgFileInput (change)=\"imageUpload($event)\" />\r\n        </div>\r\n        <h2 class=\"small-margin\">Identificação</h2>\r\n        <div class=\"name-fields fields\">\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Primeiro nome\" [(ngModel)]=\"user.firstName\" id=\"firstName\" name=\"firstName\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Último nome\" [(ngModel)]=\"user.lastName\" id=\"lastName\" name=\"lastName\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\"></div>\r\n        </div>\r\n        <div class=\"auth-fields fields\">\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"E-mail\" [(ngModel)]=\"user.email\" id=\"email\" name=\"email\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"btn-holder\">\r\n            <button *ngIf=\"!showPassword\" type=\"button\" class=\"change\" (click)=showPasswordFields()>mudar senha</button>\r\n          </div>\r\n          <div class=\"input-field\"></div>\r\n          <div *ngIf=\"showPassword\" class=\"fields\">\r\n            <div class=\"input-field\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Senha antiga\" [type]=\"hide ? 'password' : 'text'\" id=\"oldPwd\" [(ngModel)]=\"oldPassword\"\r\n                  name=\"oldPassword\">\r\n                <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Nova senha\" [type]=\"hide2 ? 'password' : 'text'\" id=\"pwd\" [(ngModel)]=\"password\"\r\n                  name=\"password\">\r\n                <mat-icon matSuffix (click)=\"hide2 = !hide2\">{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"input-field\">\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Confirmar senha\" [type]=\"hide3 ? 'password' : 'text'\" id=\"pwd2\"\r\n                  [(ngModel)]=\"password2\" name=\"password2\">\r\n                <mat-icon matSuffix (click)=\"hide3 = !hide3\">{{hide3 ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"input-field\"></div>\r\n            <div class=\"input-field\"></div>\r\n            <div *ngIf=\"!sendingPassword\" class=\"btn-pwd-holder\">\r\n              <button type=\"button\" class=\"cancel\" (click)=hidePasswordFields()>cancelar</button>\r\n              <button type=\"button\" class=\"\" (click)=savePasswordFields()>confirmar</button>\r\n            </div>\r\n            <div *ngIf=\"sendingPassword\" class=\"btn-pwd-holder\">\r\n              <button type=\"button\" class=\"sending\" disabled>Enviando</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <h2>Informações pessoais</h2>\r\n        <div class=\"information-fields fields\">\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput [(ngModel)]=\"user.cpf\" placeholder=\"CPF\" id=\"cpf\" name=\"cpf\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput [matDatepicker]=\"dp1\" [(ngModel)]=\"user.birthDate\" placeholder=\"Data de nascimento\"\r\n                disabled id=\"birthDate\" name=\"birthDate\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\r\n              <mat-datepicker #dp1 disabled=\"false\"></mat-datepicker>\r\n              <mat-hint>Clique no calendário para selecionar a data</mat-hint>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Sexo\" [(ngModel)]=\"user.sex\" id=\"sex\" name=\"sex\">\r\n                <mat-option value=\"MALE\">Masculino</mat-option>\r\n                <mat-option value=\"FEMALE\">Feminino</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"DDD\" [(ngModel)]=\"user.ddd\" id=\"ddd\" name=\"ddd\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Telefone\" [(ngModel)]=\"user.phone\" id=\"phone\" name=\"phone\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <mat-select placeholder=\"Tamanho\" [(ngModel)]=\"user.size\" id=\"size\" name=\"size\">\r\n                <mat-option value=\"PP\">PP</mat-option>\r\n                <mat-option value=\"P\">P</mat-option>\r\n                <mat-option value=\"M\">M</mat-option>\r\n                <mat-option value=\"G\">G</mat-option>\r\n                <mat-option value=\"GG\">GG</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" placeholder=\"Tamanho de sapato\" min=\"0\" [(ngModel)]=\"user.shoeSize\" id=\"shoeSize\"\r\n                name=\"shoeSize\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\"></div>\r\n          <div class=\"input-field\"></div>\r\n        </div>\r\n        <h2>Endereço</h2>\r\n        <div class=\"address-fields fields\">\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"CEP\" [(ngModel)]=\"cep\" id=\"cep\" name=\"cep\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Estado\" [(ngModel)]=\"state\" id=\"state\" name=\"state\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Cidade\" [(ngModel)]=\"user.city\" id=\"city\" name=\"city\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Bairro\" [(ngModel)]=\"user.neighborhood\" id=\"neighborhood\" name=\"neighborhood\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Logradouro\" [(ngModel)]=\"streetName\" id=\"streetName\" name=\"streetName\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Número\" [(ngModel)]=\"addressNumber\" id=\"addressNumber\" name=\"addressNumber\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"input-field\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Complemento\" [(ngModel)]=\"user.complement\" id=\"complement\" name=\"complement\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"!sending\" class=\"save-holder\">\r\n          <button type=\"button\" class=\"save\" (click)=\"saveHandler()\">Salvar</button>\r\n        </div>\r\n        <div *ngIf=\"sending\" class=\"save-holder center\">\r\n          <button type=\"button\" class=\"sending\" disabled>Enviando, por favor aguarde</button>\r\n        </div>\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n</section>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  padding-top: 80px; }\n  .content .message {\n    padding-top: 100px;\n    font-size: 24px;\n    text-align: center; }\n  .content nav {\n    padding: 30px 100px; }\n  .content nav ul {\n      display: flex; }\n  .content nav ul li {\n        margin-right: 10px; }\n  .content nav ul li .arrow {\n          display: inline-block;\n          width: 12px;\n          height: 12px;\n          border-top: 2px solid #AA076B;\n          border-right: 2px solid #AA076B;\n          -webkit-transform: rotate(-135deg);\n                  transform: rotate(-135deg);\n          margin-left: 5px; }\n  .content nav ul li a {\n          color: #AA076B; }\n  .content nav ul li a:visited {\n            color: #AA076B; }\n  .content .btn-pwd-holder {\n    display: flex;\n    justify-content: flex-end;\n    align-self: flex-end; }\n  .content .btn-pwd-holder button {\n      align-self: flex-end;\n      font-size: 16px;\n      color: #AA076B;\n      box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #AA076B; }\n  .content .btn-pwd-holder button.cancel {\n        margin-right: 20px;\n        color: #747474;\n        box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #c3c3c3; }\n  .content .btn-pwd-holder button.sending {\n        color: #747474;\n        box-shadow: none;\n        cursor: default; }\n  .content .save-holder {\n    display: flex;\n    justify-content: center;\n    align-self: flex-end; }\n  .content .save-holder button {\n      font-size: 20px;\n      color: #AA076B;\n      box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #AA076B; }\n  .content .save-holder button.sending {\n        color: #747474;\n        box-shadow: none;\n        cursor: default; }\n  .content .image-btn {\n    display: flex;\n    padding: 0 0 1.25em 0;\n    width: 100%;\n    justify-content: center;\n    margin-top: 20px; }\n  .content .image-btn button {\n      align-self: flex-end;\n      font-size: 16px;\n      color: #AA076B;\n      box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #AA076B; }\n  .content .form-holder {\n    display: flex;\n    flex-direction: column;\n    padding: 0 100px 100px 100px; }\n  .content .form-holder h2 {\n      font-size: 24px;\n      margin: 80px 0 20px 0;\n      color: #AA076B; }\n  .content .form-holder h2.small-margin {\n        margin-top: 40px; }\n  .content .form-holder .profile-picture {\n      width: 200px;\n      height: 200px;\n      border-radius: 200px;\n      align-self: center;\n      -o-object-fit: cover;\n         object-fit: cover;\n      cursor: pointer; }\n  .content .form-holder .fields {\n      display: flex;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      width: 100%; }\n  .content .form-holder .fields.auth-fields .btn-holder {\n        display: flex;\n        padding: 0 0 1.25em 0;\n        width: 30%; }\n  .content .form-holder .fields.auth-fields .btn-holder button {\n          align-self: flex-end;\n          font-size: 16px;\n          color: #AA076B;\n          box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #AA076B; }\n  .content .form-holder .fields .input-field {\n        display: flex;\n        flex-direction: column;\n        width: 30%; }\n  .content .form-holder .fields .input-field label {\n          font-size: 16px;\n          color: #747474;\n          margin-bottom: 5px; }\n  .content .form-holder .fields .input-field input {\n          height: 30px;\n          font-size: 16px;\n          color: #AA076B;\n          letter-spacing: 1px; }\n  .content .form-holder .fields .input-field input#pwd {\n            letter-spacing: 3px; }\n  .content .form-holder .fields .input-field .mat-select {\n          height: 30px;\n          font-size: 16px;\n          letter-spacing: 1px;\n          box-sizing: border-box;\n          padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXHBlZHJvXFxEZXNrdG9wXFxzYWZlMlxcUHJvamV0by1FbmdTSVxcZW5qb2VpMi9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1JLGtCQUFpQixFQXlLcEI7RUEvS0Q7SUFTUSxtQkFBa0I7SUFDbEIsZ0JBQWU7SUFDZixtQkFBa0IsRUFDckI7RUFaTDtJQWNRLG9CQUFtQixFQTBCdEI7RUF4Q0w7TUFpQlksY0FBYSxFQXNCaEI7RUF2Q1Q7UUFvQmdCLG1CQUFrQixFQWtCckI7RUF0Q2I7VUF1Qm9CLHNCQUFxQjtVQUNyQixZQUFXO1VBQ1gsYUFBWTtVQUNaLDhCQXhCTztVQXlCUCxnQ0F6Qk87VUEwQlAsbUNBQTBCO2tCQUExQiwyQkFBMEI7VUFDMUIsaUJBQWdCLEVBQ25CO0VBOUJqQjtVQWdDb0IsZUE5Qk8sRUFtQ1Y7RUFyQ2pCO1lBbUN3QixlQWpDRyxFQWtDTjtFQXBDckI7SUEyQ1EsY0FBYTtJQUNiLDBCQUF5QjtJQUN6QixxQkFBb0IsRUFvQnZCO0VBakVMO01BZ0RZLHFCQUFvQjtNQUNwQixnQkFBZTtNQUNmLGVBaERlO01BaURmLHFFQWpEZSxFQThEbEI7RUFoRVQ7UUFzRGdCLG1CQUFrQjtRQUNsQixlQXBERTtRQXFERixxRUFwRFEsRUFxRFg7RUF6RGI7UUE0RGdCLGVBekRFO1FBMERGLGlCQUFnQjtRQUNoQixnQkFBZSxFQUNsQjtFQS9EYjtJQW9FUSxjQUFhO0lBQ2Isd0JBQXVCO0lBQ3ZCLHFCQUFvQixFQWF2QjtFQW5GTDtNQXlFWSxnQkFBZTtNQUNmLGVBeEVlO01BeUVmLHFFQXpFZSxFQWdGbEI7RUFsRlQ7UUE4RWdCLGVBM0VFO1FBNEVGLGlCQUFnQjtRQUNoQixnQkFBZSxFQUNsQjtFQWpGYjtJQXFGUSxjQUFhO0lBQ2Isc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCx3QkFBdUI7SUFDdkIsaUJBQWdCLEVBT25CO0VBaEdMO01BMkZZLHFCQUFvQjtNQUNwQixnQkFBZTtNQUNmLGVBM0ZlO01BNEZmLHFFQTVGZSxFQTZGbEI7RUEvRlQ7SUFtR1EsY0FBYTtJQUNiLHVCQUFzQjtJQUN0Qiw2QkFBNEIsRUF5RS9CO0VBOUtMO01Bd0dZLGdCQUFlO01BQ2Ysc0JBQXFCO01BQ3JCLGVBeEdlLEVBNkdsQjtFQS9HVDtRQTZHZ0IsaUJBQWdCLEVBQ25CO0VBOUdiO01Ba0hZLGFBQVk7TUFDWixjQUFhO01BQ2IscUJBQW9CO01BQ3BCLG1CQUFrQjtNQUNsQixxQkFBaUI7U0FBakIsa0JBQWlCO01BQ2pCLGdCQUFlLEVBQ2xCO0VBeEhUO01BMkhZLGNBQWE7TUFDYiwrQkFBOEI7TUFDOUIsZ0JBQWU7TUFDZixZQUFXLEVBK0NkO0VBN0tUO1FBa0lvQixjQUFhO1FBQ2Isc0JBQXFCO1FBQ3JCLFdBQVUsRUFRYjtFQTVJakI7VUF1SXdCLHFCQUFvQjtVQUNwQixnQkFBZTtVQUNmLGVBdklHO1VBd0lILHFFQXhJRyxFQXlJTjtFQTNJckI7UUFnSmdCLGNBQWE7UUFDYix1QkFBc0I7UUFDdEIsV0FBVSxFQTBCYjtFQTVLYjtVQXFKb0IsZ0JBQWU7VUFDZixlQW5KRjtVQW9KRSxtQkFBa0IsRUFDckI7RUF4SmpCO1VBMkpvQixhQUFZO1VBQ1osZ0JBQWU7VUFDZixlQTNKTztVQTRKUCxvQkFBbUIsRUFLdEI7RUFuS2pCO1lBaUt3QixvQkFBbUIsRUFDdEI7RUFsS3JCO1VBc0tvQixhQUFZO1VBQ1osZ0JBQWU7VUFDZixvQkFBbUI7VUFDbkIsdUJBQXNCO1VBQ3RCLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgICR3aGl0ZTogd2hpdGU7XHJcbiAgICAkcHJpbWFyeS1saWdodDogI0FBMDc2QjtcclxuICAgICRncmF5OiAjNzQ3NDc0O1xyXG4gICAgJGxpZ2h0LWdyYXk6ICNjM2MzYzM7XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgICBcclxuICAgIC5tZXNzYWdlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIG5hdiB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAxMDBweDtcclxuICAgICAgICBcclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJjp2aXNpdGVkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXB3ZC1ob2xkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCAwcHggMHB4ICR3aGl0ZSwgaW5zZXQgMHB4IC0xcHggMHB4ICRwcmltYXJ5LWxpZ2h0O1xyXG5cclxuICAgICAgICAgICAgJi5jYW5jZWwge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggMHB4IDBweCAkd2hpdGUsIGluc2V0IDBweCAtMXB4IDBweCAkbGlnaHQtZ3JheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5zZW5kaW5nIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zYXZlLWhvbGRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDBweCAwcHggJHdoaXRlLCBpbnNldCAwcHggLTFweCAwcHggJHByaW1hcnktbGlnaHQ7XHJcblxyXG4gICAgICAgICAgICAmLnNlbmRpbmcge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbWFnZS1idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDEuMjVlbSAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCAwcHggMHB4ICR3aGl0ZSwgaW5zZXQgMHB4IC0xcHggMHB4ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1ob2xkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwMHB4IDEwMHB4IDEwMHB4O1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA4MHB4IDAgMjBweCAwO1xyXG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLnNtYWxsLW1hcmdpbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZpZWxkcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICYuYXV0aC1maWVsZHMge1xyXG4gICAgICAgICAgICAgICAgLmJ0bi1ob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAwIDEuMjVlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCAwcHggMHB4ICR3aGl0ZSwgaW5zZXQgMHB4IC0xcHggMHB4ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmlucHV0LWZpZWxkIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAmI3B3ZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYXQtc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _mock_data_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-data/image */ "./src/app/mock-data/image.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../communication.service */ "./src/app/communication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(toastr, userService, loginService, communication) {
        this.toastr = toastr;
        this.userService = userService;
        this.loginService = loginService;
        this.communication = communication;
        this.loading = true;
        this.error = false;
        this.sending = false;
        this.showPassword = false;
        this.hide = true;
        this.hide2 = true;
        this.hide3 = true;
        this.sendingPassword = false;
    }
    ProfileComponent.prototype.showPasswordFields = function () {
        this.showPassword = true;
    };
    ProfileComponent.prototype.hidePasswordFields = function () {
        this.showPassword = false;
        this.password = '';
        this.password2 = '';
        this.oldPassword = '';
    };
    ProfileComponent.prototype.savePasswordFields = function () {
        var _this = this;
        if (this.oldPassword.trim() === '' || this.password.trim() === '' || this.password2.trim() === '') {
            this.toastr.error('Preencha todos os campos para alterar a senha', 'Algo deu errado!');
            return;
        }
        if (this.password !== this.password2) {
            this.toastr.error('As senhas novas informadas estão diferentes', 'Algo deu errado!');
            return;
        }
        this.sendingPassword = true;
        var auth = {
            email: this.oldEmail,
            password: this.oldPassword
        };
        this.loginService.doLogin(auth).subscribe(function (data) {
            var saveData = {
                client: {
                    clientId: _this.user.clientId,
                    password: _this.password
                }
            };
            _this.userService.savePrivateUser(saveData.client).subscribe(function (data) {
                _this.toastr.success('Senha alterada com sucesso', 'Sucesso');
                _this.hidePasswordFields();
                _this.fetchUser();
                _this.communication.trigger();
                _this.sendingPassword = false;
            }, function (error) {
                _this.toastr.error('Não foi possível alterar a senha. (DEVs) Abrir o console para mais informações', 'Algo deu errado!');
                _this.sendingPassword = false;
            });
        }, function (error) {
            error = error.error || {};
            _this.toastr.error((error.errors[0] || {}).message || 'Problema não esperado, desculpe pelo inconveniente', 'Algo deu errado');
            _this.sendingPassword = false;
        });
    };
    ProfileComponent.prototype.parseISOString = function (s) {
        var b = s.split(/\D+/);
        return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.fetchUser();
    };
    ProfileComponent.prototype.fetchUser = function () {
        var _this = this;
        this.loading = true;
        this.error = false;
        this.sending = false;
        var id = window.localStorage.getItem('enjoojeiUserID');
        if (id) {
            this.userService.getPrivateUser(parseInt(id))
                .subscribe(function (data) {
                if (data) {
                    data.birthDate = _this.parseISOString(data.birthDate);
                    _this.user = data;
                    _this.oldEmail = _this.user.email;
                    if (!_this.user.profileImage) {
                        _this.user.profileImage = _mock_data_image__WEBPACK_IMPORTED_MODULE_3__["defaultImg"];
                    }
                }
                else {
                    _this.error = true;
                }
                _this.loading = false;
            }, function (error) {
                _this.toastr.error('Não foi possível acessar os dados do usuário. (DEVs) Abrir o console para mais informações', 'Algo deu errado!');
                console.log(error);
                _this.loading = false;
                _this.error = true;
            });
        }
        else {
            this.toastr.error('Não foi possível acessar os dados do usuário', 'Algo deu errado!');
            this.loading = false;
            this.error = true;
        }
    };
    ProfileComponent.prototype.imageUpload = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            this.toastr.error('Formato de arquivo inválido', 'Algo deu errado!');
            return null;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    };
    ProfileComponent.prototype._handleReaderLoaded = function (e) {
        var reader = e.target;
        this.user.profileImage = reader.result.split('base64,')[1];
    };
    ProfileComponent.prototype.saveHandler = function () {
        this.saveAction();
    };
    ProfileComponent.prototype.saveAction = function () {
        var _this = this;
        this.sending = true;
        this.userService.savePrivateUser(this.user)
            .subscribe(function (data) {
            _this.toastr.success('Usuário atualizado com sucesso', 'Sucesso');
            _this.fetchUser();
            _this.communication.trigger();
        }, function (error) {
            _this.toastr.error('Não foi possível atualizar o usuario. (DEVs) Abrir o console para mais informações', 'Algo deu errado!');
            console.log(error);
            _this.sending = false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _communication_service__WEBPACK_IMPORTED_MODULE_5__["CommunicationService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register.service.ts":
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.loginURL = 'https://enjoei2-perfil.herokuapp.com/perfil';
    }
    RegisterService.prototype.doRegister = function (register) {
        return this.http.post(this.loginURL, register, this.httpOptions);
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"register\">\r\n  <h2 class=\"title\">Precisamos de algumas informações para criar seu usuário</h2>\r\n  <fieldset>\r\n    <div class=form-content>\r\n      <div class=\"input-field\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Primeiro nome\" id=\"firstName\" [(ngModel)]=\"form.firstName\" name=\"firstName\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Último nome\" id=\"lastName\" [(ngModel)]=\"form.lastName\" name=\"lastName\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Sexo\" id=\"sex\" [(ngModel)]=\"form.sex\" name=\"sex\">\r\n            <mat-option value=\"MALE\">Masculino</mat-option>\r\n            <mat-option value=\"FEMALE\">Feminino</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"DDD\" id=\"ddd\" [(ngModel)]=\"form.ddd\" name=\"ddd\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Telefone\" id=\"phone\" [(ngModel)]=\"form.phone\" name=\"phone\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <mat-form-field>\r\n          <input matInput [matDatepicker]=\"dp1\" placeholder=\"Data de nascimento\" disabled id=\"birth\" [(ngModel)]=\"form.birthDate\"\r\n            name=\"birth\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"dp1\"></mat-datepicker-toggle>\r\n          <mat-datepicker #dp1 disabled=\"false\"></mat-datepicker>\r\n          <mat-hint>Clique no calendário para selecionar a data</mat-hint>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"CPF\" id=\"cpf\" [(ngModel)]=\"form.cpf\" name=\"cpf\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"E-mail\" id=\"email\" [(ngModel)]=\"form.email\" name=\"email\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Senha\" [type]=\"hide ? 'password' : 'text'\" id=\"pwd\" [(ngModel)]=\"form.password\"\r\n            name=\"password\">\r\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n  <div *ngIf=\"!loading\" class=\"btn-holder\">\r\n    <button type=\"button\" class=\"cancel\" (click)=\"closeRegisterHandler()\">Cancelar</button>\r\n    <button type=\"button\" (click)=\"registerHandler()\">Registrar</button>\r\n  </div>\r\n  <div *ngIf=\"loading\" class=\"btn-holder center\">\r\n    <button type=\"button\" class=\"sending\" disabled>Enviando, por favor aguarde</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register {\n  height: 100%;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between; }\n  .register .title {\n    text-align: center;\n    font-size: 24px;\n    color: #AA076B; }\n  .register .form-content {\n    display: flex;\n    flex-flow: row;\n    flex-grow: 1;\n    justify-content: space-between;\n    flex-wrap: wrap; }\n  .register .form-content .input-field {\n      display: flex;\n      flex-direction: column;\n      width: 30%; }\n  .register .form-content .input-field .mat-input-element {\n        caret-color: #AA076B; }\n  .register .form-content .input-field label {\n        font-size: 16px;\n        color: #747474;\n        margin-bottom: 5px; }\n  .register .form-content .input-field input {\n        height: 30px;\n        font-size: 16px;\n        color: #AA076B;\n        letter-spacing: 1px; }\n  .register .form-content .input-field input#pwd {\n          letter-spacing: 3px; }\n  .register .form-content .input-field .mat-select {\n        height: 30px;\n        font-size: 16px;\n        letter-spacing: 1px; }\n  .register .form-content .input-field .mat-select .mat-select-trigger {\n          top: 5px; }\n  .register .form-content .input-field .mat-select .mat-select-trigger .ng-star-inserted {\n            color: #AA076B; }\n  .register .btn-holder {\n    display: flex;\n    justify-content: flex-end; }\n  .register .btn-holder.center {\n      justify-content: center; }\n  .register .btn-holder button {\n      font-size: 20px;\n      color: #AA076B;\n      box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #AA076B; }\n  .register .btn-holder button.cancel {\n        color: #747474;\n        box-shadow: inset 0px 15px 0px 0px white, inset 0px -1px 0px #c3c3c3;\n        margin-right: 30px; }\n  .register .btn-holder button.sending {\n        color: #747474;\n        box-shadow: none;\n        cursor: default; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvQzpcXFVzZXJzXFxwZWRyb1xcRGVza3RvcFxcc2FmZTJcXFByb2pldG8tRW5nU0lcXGVuam9laTIvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU9JLGFBQVk7RUFDWixjQUFhO0VBRWIsY0FBYTtFQUNiLHVCQUFzQjtFQUN0QiwrQkFBOEIsRUFrRmpDO0VBOUZEO0lBZVEsbUJBQWtCO0lBQ2xCLGdCQUFlO0lBQ2YsZUFkbUIsRUFldEI7RUFsQkw7SUFxQlEsY0FBYTtJQUNiLGVBQWM7SUFDZCxhQUFZO0lBQ1osK0JBQThCO0lBQzlCLGdCQUFlLEVBeUNsQjtFQWxFTDtNQTRCWSxjQUFhO01BQ2IsdUJBQXNCO01BQ3RCLFdBQVUsRUFtQ2I7RUFqRVQ7UUFpQ2dCLHFCQTlCVyxFQStCZDtFQWxDYjtRQXFDZ0IsZ0JBQWU7UUFDZixlQWxDRTtRQW1DRixtQkFBa0IsRUFDckI7RUF4Q2I7UUEyQ2dCLGFBQVk7UUFDWixnQkFBZTtRQUNmLGVBMUNXO1FBMkNYLG9CQUFtQixFQUt0QjtFQW5EYjtVQWlEb0Isb0JBQW1CLEVBQ3RCO0VBbERqQjtRQXNEZ0IsYUFBWTtRQUNaLGdCQUFlO1FBQ2Ysb0JBQW1CLEVBUXRCO0VBaEViO1VBMkRvQixTQUFRLEVBSVg7RUEvRGpCO1lBNkR3QixlQTFERyxFQTJETjtFQTlEckI7SUFxRVEsY0FBYTtJQUNiLDBCQUF5QixFQXVCNUI7RUE3Rkw7TUF5RVksd0JBQXVCLEVBQzFCO0VBMUVUO01BNkVZLGdCQUFlO01BQ2YsZUEzRWU7TUE0RWYscUVBNUVlLEVBeUZsQjtFQTVGVDtRQWtGZ0IsZUE5RUU7UUErRUYscUVBOUVRO1FBK0VSLG1CQUFrQixFQUNyQjtFQXJGYjtRQXdGZ0IsZUFwRkU7UUFxRkYsaUJBQWdCO1FBQ2hCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXIge1xyXG4gICAgXHJcbiAgICAkd2hpdGU6IHdoaXRlO1xyXG4gICAgJHByaW1hcnktbGlnaHQ6ICNBQTA3NkI7XHJcbiAgICAkZ3JheTogIzc0NzQ3NDtcclxuICAgICRsaWdodC1ncmF5OiAjYzNjM2MzO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeS1saWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybS1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAuaW5wdXQtZmllbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLm1hdC1pbnB1dC1lbGVtZW50e1xyXG4gICAgICAgICAgICAgICAgY2FyZXQtY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGdyYXk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJiNwd2Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tYXQtc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idG4taG9sZGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5jZW50ZXIge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWxpZ2h0O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCAwcHggMHB4ICR3aGl0ZSwgaW5zZXQgMHB4IC0xcHggMHB4ICRwcmltYXJ5LWxpZ2h0O1xyXG5cclxuICAgICAgICAgICAgJi5jYW5jZWwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggMHB4IDBweCAkd2hpdGUsIGluc2V0IDBweCAtMXB4IDBweCAkbGlnaHQtZ3JheTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5zZW5kaW5nIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkZ3JheTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register.service */ "./src/app/register.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerService, toastr) {
        this.registerService = registerService;
        this.toastr = toastr;
        this.closeRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.form = {
            birthDate: null,
            cpf: '',
            ddd: '',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            phone: '',
            sex: ''
        };
        this.hide = true;
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.closeRegisterHandler = function () {
        this.closeRegister.emit('closeRegister');
    };
    RegisterComponent.prototype.registerHandler = function () {
        var valid = true;
        for (var key in this.form) {
            if (this.form[key] === null || this.form[key] === '') {
                valid = false;
                break;
            }
        }
        if (valid) {
            this.submit();
        }
        else {
            this.toastr.error('Preencha todos os campos para prosseguir', 'Algo deu errado!');
        }
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.registerService.doRegister(this.form)
            .subscribe(function (data) {
            _this.toastr.success('Usuário registrado com sucesso', 'Sucesso!');
            _this.closeRegisterHandler();
            _this.loading = false;
        }, function (error) {
            error = error.error;
            error = error.errors[0] || {};
            _this.toastr.error(error.message || "Erro" + ' - (DEVs) Para ver a mensagem completa, abra o console do navegador', 'Algo deu errado!');
            console.log(error.message);
            _this.loading = false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "closeRegister", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/safe-url.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/safe-url.pipe.ts ***!
  \**********************************/
/*! exports provided: SafeUrlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeUrlPipe", function() { return SafeUrlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = /** @class */ (function () {
    function SafeUrlPipe(sanitinizer) {
        this.sanitinizer = sanitinizer;
    }
    SafeUrlPipe.prototype.transform = function (value) {
        value = 'data:image/jpeg;base64,' + value;
        return this.sanitinizer.bypassSecurityTrustResourceUrl(value);
    };
    SafeUrlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safeUrl'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafeUrlPipe);
    return SafeUrlPipe;
}());



/***/ }),

/***/ "./src/app/user-menu/user-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-menu/user-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-overlay\" (click)=\"closeMenuHandler($event)\">\r\n  <div *ngIf=\"user\" class=\"menu-holder\">\r\n    <img [src]=\"user.profileImage | safeUrl\" class=\"profile-picture\">\r\n    <h2 class=\"name\">{{user.firstName}} {{user.lastName}}</h2>\r\n    <ul class=\"nav\">\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/perfil\" routerLinkActive=\"active\" (click)=\"closeMenuAction()\">Configurações</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/publicar\" routerLinkActive=\"active\" (click)=\"closeMenuAction()\">Anunciar produto</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"logoutHandler()\">Sair</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div *ngIf=\"!user\" class=\"menu-holder\">\r\n    <span class=\"center\">Carregando usuário</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user-menu/user-menu.component.scss":
/*!****************************************************!*\
  !*** ./src/app/user-menu/user-menu.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-overlay {\n  position: fixed;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 901;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: flex-end;\n  padding: 30px 60px;\n  color: #747474; }\n  .menu-overlay .menu-holder {\n    width: 250px;\n    align-self: flex-start;\n    background: white;\n    border-radius: 5px;\n    z-index: 902;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between; }\n  .menu-overlay .menu-holder .center {\n      align-self: center; }\n  .menu-overlay .menu-holder .name {\n      margin-top: 10px;\n      text-align: center;\n      font-size: 20px; }\n  .menu-overlay .menu-holder img {\n      width: 120px;\n      height: 120px;\n      align-self: center;\n      border-radius: 120px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n  .menu-overlay .menu-holder .nav {\n      margin-top: 30px; }\n  .menu-overlay .menu-holder .nav li {\n        margin-top: 15px; }\n  .menu-overlay .menu-holder .nav li:last-child {\n          margin-top: 30px; }\n  .menu-overlay .menu-holder .nav li:first-child {\n          margin-top: 0; }\n  .menu-overlay .menu-holder .nav li a {\n          color: #747474;\n          cursor: pointer;\n          text-decoration: none; }\n  .menu-overlay .menu-holder .nav li a:hover {\n            color: #AA076B; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1tZW51L0M6XFxVc2Vyc1xccGVkcm9cXERlc2t0b3BcXHNhZmUyXFxQcm9qZXRvLUVuZ1NJXFxlbmpvZWkyL3NyY1xcYXBwXFx1c2VyLW1lbnVcXHVzZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1JLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLFlBQVc7RUFDWCxPQUFNO0VBQ04sUUFBTztFQUNQLGFBQVk7RUFDWiwrQkFBMkI7RUFDM0IsY0FBYTtFQUNiLDBCQUF5QjtFQUN6QixtQkFBa0I7RUFDbEIsZUFaYyxFQWtFakI7RUF0RUQ7SUFtQlEsYUFBWTtJQUNaLHVCQUFzQjtJQUN0QixrQkFwQlM7SUFxQlQsbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixjQUFhO0lBQ2IsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QiwrQkFBOEIsRUEwQ2pDO0VBckVMO01BOEJZLG1CQUFrQixFQUNyQjtFQS9CVDtNQWtDWSxpQkFBZ0I7TUFDaEIsbUJBQWtCO01BQ2xCLGdCQUFlLEVBQ2xCO0VBckNUO01Bd0NZLGFBQVk7TUFDWixjQUFhO01BQ2IsbUJBQWtCO01BQ2xCLHFCQUFvQjtNQUNwQixxQkFBaUI7U0FBakIsa0JBQWlCLEVBQ3BCO0VBN0NUO01BK0NZLGlCQUFnQixFQXFCbkI7RUFwRVQ7UUFrRGdCLGlCQUFnQixFQWlCbkI7RUFuRWI7VUFxRG9CLGlCQUFnQixFQUNuQjtFQXREakI7VUF5RG9CLGNBQWEsRUFDaEI7RUExRGpCO1VBNERvQixlQXhERjtVQXlERSxnQkFBZTtVQUNmLHNCQUFxQixFQUl4QjtFQWxFakI7WUFnRXdCLGVBOURHLEVBK0ROIiwiZmlsZSI6InNyYy9hcHAvdXNlci1tZW51L3VzZXItbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LW92ZXJsYXkge1xyXG4gICAgJHdoaXRlOiB3aGl0ZTtcclxuICAgICRwcmltYXJ5LWxpZ2h0OiAjQUEwNzZCO1xyXG4gICAgJGxpZ2h0LWdyYXk6ICNjM2MzYzM7XHJcbiAgICAkZ3JheTogIzc0NzQ3NDtcclxuXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiA5MDE7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDMwcHggNjBweDtcclxuICAgIGNvbG9yOiAkZ3JheTtcclxuXHJcbiAgICAubWVudS1ob2xkZXIge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgei1pbmRleDogOTAyO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTIwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnktbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-menu/user-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-menu/user-menu.component.ts ***!
  \**************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _objects_publicUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../objects/publicUser */ "./src/app/objects/publicUser.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent() {
        this.closeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logoutAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent.prototype.closeMenuHandler = function (e) {
        if (e.srcElement === document.getElementsByClassName('menu-overlay')[0]) {
            this.closeMenuAction();
        }
    };
    UserMenuComponent.prototype.closeMenuAction = function () {
        this.closeMenu.emit('closeMenu');
    };
    UserMenuComponent.prototype.logoutHandler = function () {
        this.logoutAction.emit('logoutAction');
        this.closeMenuAction();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], UserMenuComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _objects_publicUser__WEBPACK_IMPORTED_MODULE_1__["PublicUser"])
    ], UserMenuComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserMenuComponent.prototype, "closeMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserMenuComponent.prototype, "logoutAction", void 0);
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/user-menu/user-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.publicURL = 'https://enjoei2-perfil.herokuapp.com/perfil/';
        this.privateURL = 'https://enjoei2-perfil.herokuapp.com/perfil/personalData/';
    }
    UserService.prototype.getPublicUser = function (id) {
        return this.http.get(this.publicURL + id, this.httpOptions);
    };
    UserService.prototype.getPrivateUser = function (id) {
        return this.http.get(this.privateURL + id, this.httpOptions);
    };
    UserService.prototype.savePrivateUser = function (data) {
        return this.http.put(this.publicURL + data.clientId, data, this.httpOptions);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
var environment = {
    production: false,
    api: 'http://localhost:3000'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pedro\Desktop\safe2\Projeto-EngSI\enjoei2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map