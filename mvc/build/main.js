webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.login = {};
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.login(this.login.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/login/login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic logo">\n	</div>\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Username</ion-label>\n				<ion-input [(ngModel)]="login.username" name="username" type="text" #username="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Username is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Signup</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, userData) {
        this.navCtrl = navCtrl;
        this.userData = userData;
        this.signup = {};
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.userData.signup(this.signup.username);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Signup</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n	</div>\n\n	<form #signupForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Username</ion-label>\n				<ion-input [(ngModel)]="signup.username" name="username" type="text" #username="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Username is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n		</div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_data__["a" /* UserData */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support_support__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, userData) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
    }
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    // Present an alert with the current username populated
    // clicking OK will update the username and display it
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.changeUsername = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Username',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'username',
            value: this.username,
            placeholder: 'username'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.userData.setUsername(data.username);
                _this.getUsername();
            }
        });
        alert.present();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
        });
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    AccountPage.prototype.support = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__support_support__["a" /* SupportPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div padding-top text-center *ngIf="username">\n    <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n    <h2>{{username}}</h2>\n\n    <ion-list inset>\n      <button ion-item (click)="updatePicture()">Update Picture</button>\n      <button ion-item (click)="changeUsername()">Change Username</button>\n      <button ion-item (click)="changePassword()">Change Password</button>\n      <button ion-item (click)="support()">Support</button>\n      <button ion-item (click)="logout()">Logout</button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.conferenceDate = '2018-04-21';
        this.conferenceDateTo = '2018-04-23';
    }
    AboutPage.prototype.presentPopover = function (event) {
        var modalCtrl = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__about_popover_about_popover__["a" /* PopoverPage */]);
        modalCtrl.present({ ev: event });
    };
    AboutPage.prototype.goToExternalLink = function (link) {
        window.open(link, '_system', '');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Главная</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="about-header">\n    <img src="assets/img/appicon.png" alt="ionic logo">\n  </div>\n  <div padding class="about-info">\n    <h4>Московский ветеринарный конгресс </h4>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon name="calendar" item-left></ion-icon>\n        <ion-label>Даты:  21 - 23 апреля 2018 год</ion-label>\n      </ion-item>\n\n      <ion-item class="item-text-wrap">\n        <ion-icon name="pin" item-left></ion-icon>\n        <ion-label class="wrap">Адрес: ЦВК "Экспоцентр", г.Москва, Краснопресненская набережная, дом 14, Павильон 3</ion-label>\n      </ion-item>\n      <ion-item>\n		<ion-icon name="call" item-left></ion-icon>\n        <ion-label>Тел.: <a href=\'tel: 74991420305\'>+7 (499) 142-03-05</a></ion-label>\n      </ion-item>\n      <ion-item class="item-text-wrap">\n        <ion-icon name="map" item-left></ion-icon>\n        <ion-label class="wrap"><a (click)="presentPopover(e);">карта места проведения</a></ion-label>\n      </ion-item>\n      <ion-item>\n		<ion-icon name="link" item-left></ion-icon>\n        <ion-label>Веб-сайт: <a (click)="goToExternalLink(\'http://vetcongress.ru\')">http://vetcongress.ru</a></ion-label>\n      </ion-item>\n	  <ion-item>\n		<ion-icon name="chatbubbles" item-left></ion-icon>\n        <ion-label>Facebook: <a (click)="goToExternalLink(\'https://www.facebook.com/theMVC\')">https://www.facebook.com/theMVC</a></ion-label>\n      </ion-item>\n      \n	  <ion-item>\n		<img src="assets/img/sponsor.jpg" />\n	  </ion-item>\n      \n    </ion-list>\n	<h4>Мы рады приветствовать вас на сайте, посвященном ежегодному Московскому международному ветеринарному конгрессу!</h4>\n    <p>Московский ветеринарный конгресс это ведущее научное мероприятие для ветеринарных врачей, имеющее многолетнюю историю.</p>\n	<p>Московский ветеринарный конгресс это не только лекции и мастер-классы, но и просто место, где можно хорошо провести время и отдохнуть всей семьей.Представляем вашему вниманию лишь часть возможностей для отдыха на любой вкус, которые будут доступны для делегатов и членов их семей.</p>\n	<p>Местом проведения конгресса в 2018 году является ЦВК «Экспоцентр». Удобное расположение «Экспоцентра» дает возможность всем его посетителям совместить насыщенное деловое общение с интересным проведением досуга. Выставочный комплекс находится в шаговой доступности от делового центра «Москва-Сити», торгово-развлекательного центра "Aфимолл" , Центра международной торговли, Дома Правительства РФ, Правительства Москвы, МИД России, в непосредственной близости от исторического и культурного центра столицы, ее достопримечательностей.</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _a || Object])
    ], AboutPage);
    return AboutPage;
    var _a;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_support__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.support = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_2__support_support__["a" /* SupportPage */]);
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/about-popover/about-popover.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n    <ion-title>карта места проведения</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<img src="assets/img/shema.jpg" />\n</ion-content>'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/about-popover/about-popover.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]) === "function" && _d || Object])
    ], PopoverPage);
    return PopoverPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=about-popover.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_conference_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = (function () {
    function MapPage(confData, platform) {
        this.confData = confData;
        this.platform = platform;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getMap().subscribe(function (mapData) {
            if (mapData) {
                var mapEle_1 = _this.mapElement.nativeElement;
                var map_1 = new google.maps.Map(mapEle_1, {
                    center: mapData.find(function (d) { return d.center; }),
                    zoom: 16
                });
                mapData.forEach(function (markerData) {
                    var infoWindow = new google.maps.InfoWindow({
                        content: "<h5>" + markerData.name + "</h5>"
                    });
                    var marker = new google.maps.Marker({
                        position: markerData,
                        map: map_1,
                        title: markerData.name
                    });
                    marker.addListener('click', function () {
                        infoWindow.open(map_1, marker);
                    });
                });
                google.maps.event.addListenerOnce(map_1, 'idle', function () {
                    mapEle_1.classList.add('show-map');
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>карта</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="map-page">\n  <div style="height: 100%; width: 100%" #mapCanvas id="map_canvas"></div>\n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Platform */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_filter_schedule_filter__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';




var SchedulePage = (function () {
    function SchedulePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, confData, user) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.user = user;
        this.dayIndex = 0;
        this.queryText = '';
        this.segment = 'all';
        this.excludeTracks = [];
        this.shownSessions = [];
        this.groups = [];
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Программа');
        this.updateSchedule();
    };
    SchedulePage.prototype.updateSchedule = function () {
        var _this = this;
        // Close any open sliding items when the schedule updates
        this.scheduleList && this.scheduleList.closeSlidingItems();
        this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe(function (data) {
            if (data) {
                _this.shownSessions = data.shownSessions;
                _this.groups = data.groups;
            }
        });
    };
    SchedulePage.prototype.presentFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */], this.excludeTracks);
        modal.present();
        modal.onWillDismiss(function (data) {
            if (data) {
                _this.excludeTracks = data;
                _this.updateSchedule();
            }
        });
    };
    SchedulePage.prototype.goToSessionDetail = function (sessionData) {
        // go to the session detail page
        // and pass in the session data
        if (sessionData.link) {
            window.open(sessionData.link, '_system', '');
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], sessionData);
        }
    };
    SchedulePage.prototype.scrollToGroup = function (i) {
        if (i == 0) {
            document.getElementsByTagName("ion-item-group")[0].scrollIntoView();
        }
        else {
            var el = document.getElementById('group' + i);
            el.scrollIntoView();
        }
    };
    SchedulePage.prototype.addFavorite = function (slidingItem, sessionData) {
        if (this.user.hasFavorite(sessionData.name)) {
            // woops, they already favorited it! What shall we do!?
            // prompt them to remove it
            this.removeFavorite(slidingItem, sessionData, 'Добавлено в избранное');
        }
        else {
            // remember this session as a user favorite
            this.user.addFavorite(sessionData.name);
            // create an alert instance
            var alert_1 = this.alertCtrl.create({
                title: 'Добавлено в избранное',
                buttons: [{
                        text: 'OK',
                        handler: function () {
                            // close the sliding item
                            slidingItem.close();
                        }
                    }]
            });
            // now present the alert on top of all other content
            alert_1.present();
        }
    };
    SchedulePage.prototype.removeFavorite = function (slidingItem, sessionData, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            buttons: [
                {
                    text: 'Отмена',
                    handler: function () {
                        // they clicked the cancel button, do not remove the session
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                },
                {
                    text: 'Удалить',
                    handler: function () {
                        // they want to remove this session from their favorites
                        _this.user.removeFavorite(sessionData.name);
                        _this.updateSchedule();
                        // close the sliding item and hide the option buttons
                        slidingItem.close();
                    }
                }
            ]
        });
        // now present the alert on top of all other content
        alert.present();
    };
    SchedulePage.prototype.openSocial = function (network, fab) {
        var loading = this.loadingCtrl.create({
            content: "Posting to " + network,
            duration: (Math.random() * 1000) + 500
        });
        loading.onWillDismiss(function () {
            fab.close();
        });
        loading.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scheduleList', { read: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* List */])
    ], SchedulePage.prototype, "scheduleList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Content */])
    ], SchedulePage.prototype, "content", void 0);
    SchedulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n      <ion-segment-button value="all">\n        все\n      </ion-segment-button>\n      <ion-segment-button value="favorites">\n        избранное\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentFilter()">\n        <ion-icon ios="ios-options-outline" md="md-options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="updateSchedule()"\n                   placeholder="Поиск">\n    </ion-searchbar>\n    <button ion-button (click)="scrollToGroup(0);" outline>\n		21 апр\n	</button>\n	<button ion-button (click)="scrollToGroup(1);" outline>\n		22 апр\n	</button>\n	<button ion-button (click)="scrollToGroup(3);" outline>\n		23 апр\n	</button>\n	<button ion-button (click)="scrollToGroup(5);" outline>\n		24 апр\n	</button>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  \n  <ion-list #scheduleList [hidden]="shownSessions === 0">\n	  <ion-item-group *ngFor="let group of groups; let groupNum = index;" [hidden]="group.hide">\n\n      <ion-item-divider sticky>\n        <ion-label id="group{{groupNum}}"> \n          {{group.time}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-sliding *ngFor="let session of group.sessions; let sessionNum = index; " #slidingItem [attr.track]="session.tracks[0] | lowercase" [hidden]="session.hide">\n\n        <button ion-item (click)="goToSessionDetail(session)">\n          <h3>{{session.name}}</h3>\n          <p>\n            {{session.timeStart}} <span *ngIf="session.timeEnd">&mdash; {{session.timeEnd}}</span><span *ngIf="session.location">: {{session.location}}</span>\n          </p>\n        </button>\n\n        <ion-item-options>\n          <button ion-button color="favorite" (click)="addFavorite(slidingItem, session)" *ngIf="segment === \'all\'">\n            избранное\n          </button>\n          <button ion-button color="danger" (click)="removeFavorite(slidingItem, session, \'Удалить из избранного?\')" *ngIf="segment === \'favorites\'">\n            Удалить\n          </button>\n        </ion-item-options>\n\n      </ion-item-sliding>\n\n    </ion-item-group>\n\n  </ion-list>\n\n  <ion-list-header [hidden]="shownSessions > 0">\n      Записей не найдено\n  </ion-list-header>\n\n  \n\n</ion-content>'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/schedule/schedule.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */]])
    ], SchedulePage);
    return SchedulePage;
}());

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleFilterPage = (function () {
    function ScheduleFilterPage(confData, navParams, viewCtrl) {
        var _this = this;
        this.confData = confData;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tracks = [];
        // passed in array of track names that should be excluded (unchecked)
        var excludedTrackNames = this.navParams.data;
        this.confData.getTracks().subscribe(function (trackNames) {
            if (trackNames) {
                trackNames.forEach(function (trackName) {
                    _this.tracks.push({
                        name: trackName,
                        isChecked: (excludedTrackNames.indexOf(trackName) === -1)
                    });
                });
            }
        });
    }
    ScheduleFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.tracks.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ScheduleFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        var excludedTrackNames = this.tracks.filter(function (c) { return !c.isChecked; }).map(function (c) { return c.name; });
        this.dismiss(excludedTrackNames);
    };
    ScheduleFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    ScheduleFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-schedule-filter',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/schedule-filter/schedule-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Отмена</button>\n    </ion-buttons>\n\n    <ion-title>\n      фильтр \n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Готово</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-item *ngFor="let track of tracks" [attr.track]="track.name | lowercase">\n      <span item-left class="dot"></span>\n      <ion-label>{{track.name}}</ion-label>\n      <ion-toggle [(ngModel)]="track.isChecked" color="secondary"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Сбросить все фильтры\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/schedule-filter/schedule-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
    ], ScheduleFilterPage);
    return ScheduleFilterPage;
}());

//# sourceMappingURL=schedule-filter.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpeakerListPage = (function () {
    function SpeakerListPage(actionSheetCtrl, navCtrl, confData, config, iab) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.config = config;
        this.iab = iab;
        this.speakers = [];
    }
    SpeakerListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getSpeakers().subscribe(function (speakers) {
            if (speakers) {
                _this.speakers = speakers;
            }
        });
    };
    SpeakerListPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__session_detail_session_detail__["a" /* SessionDetailPage */], session);
    };
    SpeakerListPage.prototype.goToSpeakerDetail = function (speakerName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], speakerName);
    };
    SpeakerListPage.prototype.goToSpeakerTwitter = function (speaker) {
        this.iab.create("https://twitter.com/" + speaker.twitter, '_blank');
    };
    SpeakerListPage.prototype.openSpeakerShare = function (speaker) {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Share ' + speaker.name,
            buttons: [
                {
                    text: 'Copy Link',
                    handler: function () {
                        console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
                        if (window['cordova'] && window['cordova'].plugins.clipboard) {
                            window['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
                        }
                    }
                },
                {
                    text: 'Share via ...'
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage.prototype.openContact = function (speaker) {
        var mode = this.config.get('mode');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Contact ' + speaker.name,
            buttons: [
                {
                    text: "Email ( " + speaker.email + " )",
                    icon: mode !== 'ios' ? 'mail' : null,
                    handler: function () {
                        window.open('mailto:' + speaker.email);
                    }
                },
                {
                    text: "Call ( " + speaker.phone + " )",
                    icon: mode !== 'ios' ? 'call' : null,
                    handler: function () {
                        window.open('tel:' + speaker.phone);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SpeakerListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-list',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/speaker-list/speaker-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>лекторы</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content speaker-list">\n  <ion-card *ngFor="let speaker of speakers" class="speaker-card">\n\n    <ion-card-header *ngIf="speaker.title">\n      <button ion-item detail-none (click)="goToSpeakerDetail(speaker)">\n        <ion-avatar item-left>\n          <img [src]="speaker.profilePic" alt="Speaker profile pic">\n        </ion-avatar>\n        {{speaker.name}}\n      </button>\n    </ion-card-header>\n\n    <ion-card-content class="outer-content" *ngIf="speaker.title">\n      <ion-list>\n        <button ion-item (click)="goToSpeakerDetail(speaker)">\n          <h3 class="wrap">{{speaker.title}}</h3>\n        </button>\n\n		<button ion-item *ngFor="let session of speaker.sessions; let i = index;" (click)="goToSessionDetail(session)">\n		  <h2 *ngIf="i == 0">лекции:</h2>\n          <h3 class="wrap">{{session.name}}</h3>\n        </button>\n      </ion-list>\n    </ion-card-content>\n\n    <ion-row no-padding hidden>\n      <ion-col>\n        <button ion-button clear small color="primary" icon-left (click)="goToSpeakerTwitter(speaker)">\n          <ion-icon name="logo-twitter"></ion-icon>\n          Tweet\n        </button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button clear small color="primary" icon-left (click)="openSpeakerShare(speaker)">\n          <ion-icon name=\'share-alt\'></ion-icon>\n         Share\n        </button>\n      </ion-col>\n      <ion-col text-right>\n        <button ion-button clear small color="primary" icon-left (click)="openContact(speaker)">\n          <ion-icon name=\'chatboxes\'></ion-icon>\n          Contact\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/speaker-list/speaker-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], SpeakerListPage);
    return SpeakerListPage;
}());

//# sourceMappingURL=speaker-list.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__events_detail_events_detail__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EventsPage = (function () {
    function EventsPage(navCtrl, navParams, confData) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.confData = confData;
        this.events = [];
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.confData.getEvents().subscribe(function (events) {
            if (events) {
                _this.events = events;
            }
        });
    };
    EventsPage.prototype.goToEventDetail = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__events_detail_events_detail__["a" /* EventsDetailPage */], event);
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/events/events.html"*/'<!--\n  Generated template for the Events page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Мероприятия</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-card-content class="outer-content">\n      <ion-list>\n        <button ion-item *ngFor="let event of events" (click)="goToEventDetail(event)">\n          <h3>{{event.name}}</h3>\n        </button>\n      </ion-list>\n	</ion-card-content>\n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/events/events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_conference_data__["a" /* ConferenceData */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workshop_detail_workshop_detail__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the EventsDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var EventsDetailPage = (function () {
    function EventsDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = this.navParams.data;
    }
    EventsDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsDetailPage');
    };
    EventsDetailPage.prototype.goToWorkshopDetail = function (workshop) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__workshop_detail_workshop_detail__["a" /* WorkshopDetailPage */], workshop);
    };
    EventsDetailPage.prototype.goToExternalLink = function (event) {
        window.open(event.link, '_system', '');
    };
    EventsDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events-detail',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/events-detail/events-detail.html"*/'<!--\n  Generated template for the EventsDetail page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Мероприятия</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 [innerHtml]="event.name"></h1>\n  <img align="top" [src]="event.eventPic" *ngIf="event.eventPic"/>\n  <p *ngIf="event.description" [innerHtml]="event.description"></p>\n  <div *ngIf="event.eventRules">\n	<p><b>Внимание - внимание Фотоконкурс 2017!</b></p>\n	<p><b>MVC-2017 объявляет фотоконкурс!</b></p>\n    <p>Призы всем известны – полные бесплатные регистрации на MVC-2017 с посещением фуршета! Используйте свой шанс стать известным и получить приятный бонус в виде бесплатного посещения нашего конгресса!!!</p>\n	<p>В этом году будут разыграны 5 призов в следующих номинациях:</p>\n	1. Архивные снимки<br/>\n	2. Где была моя собака<br/>\n	3. Мой первый питомец<br/>\n	4. Как кошка с собакой<br/>\n	5. «Нетрогательные» домашние зверюшки\n\n	<p><b>«Архивные снимки»</b> - принимаются портреты ваших собак и кошек и всех прочих питомцев в детском возрасте и в старшем. Покажите нам, в кого превратился ваш маленький серый, белый или рыжий, пушистый или не очень комочек. Краткая история и кличка героя обязательны. Наличие хозяина на снимке приветствуется.</p>\n\n	<p><b>«Где была моя собака»</b> - путешествуете всей семьей, фотографируетесь на фоне достопримечательностей, загляните в телефон своей собаки, может там есть чудесные селфи на фоне московского Кремля или на горнолыжном спуске в Сочи, или фотографии с рыбалки в Карелии? Если вам повезло, то присылайте эти работы нам, с указанием имени и возраста собаки-путешественника и места где был сделан снимок. Если ваша кошка или ежик тоже увлекаются путешествиями с вами, принимаются работы и от них.</p>\n\n	<p><b>«Как кошка с собакой»</b> если у вас живут домашние питомцы разных видов, и они даже дружны между собой, присылайте нам эти трогательные моменты.  Примечание: Принимаются фотографии любых видов домашних животных, кроме белых медведей.</p>\n\n	<p><b>«Мой первый питомец»</b> - в память о наших первых собаках и кошках, самых долгожданных, которых мы так долго выпрашивали у родителей, или на которых мы долго копили деньги, которые возможно помогли нам стать ветеринарными врачами или связать свою профессию с животными тем или иным способом. И которых, уже возможно, с нами нет. Если вы готовы поделиться с нами этими своими воспоминаниями, присылайте свой портрет с питомцем и его краткую историю, и мы все вместе вспомним о них.</p>\n\n	<p><b>«Нетрогательные домашние зверушки»</b> вот у многихживут собаки и их можно гладить, и кошки часто сидят на коленях, а если ваш питомец – игольчатая мышь или таракан, или даже улитка. В общем, это номинация для тех, за чьими питомцами можно больше наблюдать, чем гладить и обнимать.  Берите аккуратно своего «недотрогу» на руки, делайте портрет и присылайте нам вместе с краткой историей такого увлечения.</p>\n\n	<p><b><u>Условия конкурса</u></b></p>\n\n	<p>Фотоработы конкурсантов будут размещаться на страницах Конгресса в Фейсбуке и Контакте. Победители выбираются по сумме отметок «Нравится» в двух социальных сетях. Голосование свободное. Хотите отдать свой голос определенной работе жмите «Нравится» </p>\n\n	<p>Всего будет разыграно 5 регистраций по одной в каждой номинации.</p>\n\n	<p>Лучшие работы будут опубликованы в журнале «Вестник ветеринарной медицины». Конгресс оставляет за собой право на публикации присланных работ в печатных изданиях конгресса, по согласованию с автором.</p>\n\n	<p>Желающие принять участие могут присылать свои работы на почту infosupport@vetcongress.ru  в теме указывайте Фотоконкурс и название номинации. Работы принимаются с 20 января по 20 марта, подведение итогов 24 марта 2017 года.  Работы принимаются от ветеринарных врачей и ассистентов, администраторов и владельцев ветеринарных клиник, аспирантов и преподавателей ВУЗОВ, а также от представителей компаний, занятых в зообизнесе. Работы от студентов и членов оргкомитета принимаются с пометкой «вне конкурса».</p>\n\n	<p>Требования к фотографиям: оригинальная работа, допускается обработка в фоторедакторах, тип файла JPG, объем не более 3МБ. </p>\n\n	<p>Желаем удачи!</p>\n  </div>\n  <div *ngIf="event.exhibitors">\n	<p style="text-align: center;"><span style="text-decoration: underline;"><strong><span>ЭКСПОНЕНТЫ</span></strong></span></p>\n	<p><strong><span>Концертный зал &laquo;Измайлово&raquo;:</span></strong></p>\n	<p><span>&laquo;PEDIGREE &amp; WHISKAS&raquo;, &laquo;ROYAL CANIN&raquo;, &laquo;PURINA&raquo;, &laquo;BAYER&raquo;, &laquo;VIRBAC ANIMAL HEALTH&raquo;, &laquo;НВЦ АГРОВЕТЗАЩИТА С-П&raquo;, ГК &laquo;ВЕТПРОМ&raquo;, &laquo;ВЕТБИОХИМ&raquo;, &laquo;BEAPHAR&raquo;, &laquo;STORMOFF&raquo;, &laquo;WET MEDICA&raquo;, &laquo;IDEXX LABORATORIES&raquo;, &laquo;FARMINA PET FOODS&raquo;, &laquo;GLOBUS VET&raquo;, &laquo;ESAVS&raquo;, &laquo;ZOOMED&raquo;, &laquo;MONGE VETSOLUTION&raquo;,&nbsp; &laquo;АПИ-САН&raquo;, &laquo;БАЛЬФ&raquo;, &laquo;БИОЦЕНТР&raquo;, &laquo;БАЛТИЙСКИЙ ФОРУМ&raquo;, &laquo;ВАЛТА ПЕТ ПРОДАКТС&raquo;, &laquo;БИОСЕНСОР АН&raquo;, &laquo;ИСТ МЕДИКАЛ&raquo;, &laquo;МИРАЛЕК&raquo;, &laquo;ПЕПТЕК&raquo;, &laquo;БИОГРАД&raquo;, &laquo;ВЕТМАРКЕТ&raquo;, &laquo;ИНТЕРМЕДИКА&raquo;, &laquo;ИЗДАТЕЛЬСТВО АКВАРИУМ&raquo;, &laquo;МЕКСИДОЛ-ВЕТ&raquo;, &laquo;ПАНАФАРМ&raquo;, &laquo;СИМЕДИКА&raquo;, &laquo;ТД &laquo;ВИК&raquo;, &laquo;ЭЛАНКО&raquo;.</span></p>\n	<p><strong><span>Выставочный павильон &laquo;Тент&raquo;:</span></strong></p>\n	<p><span>&laquo;BOEHRINGER-INGELHEIM&raquo;, &laquo;CODOS&raquo;, &laquo;INVESA S.A.&raquo;, &laquo;MINIME&raquo;, &laquo;MERIAL&raquo;, &laquo;PCHELODAR&raquo;, &laquo;VETNODE&raquo;, &laquo;SEVC&raquo;, &laquo;VEDA&raquo;, &laquo;ZOETIS&raquo;, &laquo;ZIVER&raquo;, &laquo;АС &ndash; МАРКЕТ&raquo;, &laquo;АМИГО&raquo;, &laquo;АЛКОМ МЕДИКА&raquo;, &laquo;БИОТЕХ-ФАРМ&raquo;, &laquo;БИОМЕДВЕТСЕРВИС&raquo;, &laquo;ВЕТОКИНОЛ СА&raquo;, &laquo;ВЕТЭКСПЕРТ&raquo;, &laquo;ДИАКОН-ВЕТ&raquo;, &laquo;ИНТЕРМЕДАПАТИТ&raquo;, &laquo;КОМПАНИЯ НЕОРЕНТГЕН&raquo;, &laquo;МИШЕЛЬ и К&raquo;, &laquo;МЕДИКАЛ ИНС&raquo;, &laquo;М.П.А. МЕДИЦИНСКИЕ ПАРТНЕРЫ&raquo;, &laquo;МЕДВЕТ&raquo;, &laquo;МЕДСИС&raquo;, &laquo;НПФ &laquo;ЭКОПРОМ&raquo;, &laquo;НТЦ &laquo;БИОИНВЕСТ&raquo;, &laquo;НВП &laquo;АСТРАФАРМ&raquo;, &laquo;НПП &laquo;ФАРМАКС&raquo;, &laquo;ОРИОН ФАРМА&raquo;, &laquo;ПАНДАЭКСПО&raquo;, &laquo;САРШТЕДТ&raquo;, &laquo;ТД ВЕТ&raquo;, &laquo;ТЕХНО-МЕД&raquo;, &laquo;ХОСПИТЕКС ДИАГНОСТИКС&raquo;, &laquo;ЦИЛИТА&raquo;, &laquo;ЭКО-МЕД-СМ&raquo;, &laquo;ВЕТСТОМ&raquo;, &laquo;&laquo;МЕДИК-СЕРВИС&raquo;, &laquo;ХЕМА&raquo;,&nbsp; &laquo;ШКОЛА ПОСТДИПЛОМНОГО ОБРАЗОВАНИЯ ИМ. В.Н. МИТИНА&raquo;, &laquo;ШТЕЙМАН КРАФТ&raquo; , &laquo;ЮПИТЕР&raquo;.</span></p>																		\n  </div>\n  <a href=\'#\' *ngIf="event.link" (click)="goToExternalLink(event)">{{event.linkText}}</a>\n  <img align="bottom" [src]="event.eventPic2" *ngIf="event.eventPic2"/>\n  <ul *ngIf="event.workshops">\n	<li *ngFor="let workshop of event.workshops">\n		<a (click)="goToWorkshopDetail(workshop)">{{workshop.name}}</a><br/><br/>\n	</li>\n  </ul>\n</ion-content>\n\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/events-detail/events-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], EventsDetailPage);
    return EventsDetailPage;
}());

//# sourceMappingURL=events-detail.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkshopDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speaker_detail_speaker_detail__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the WorkshopDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var WorkshopDetailPage = (function () {
    function WorkshopDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.workshop = this.navParams.data;
    }
    WorkshopDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkshopDetailPage');
    };
    WorkshopDetailPage.prototype.goToSpeakerDetail = function (speakerName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], speakerName);
    };
    WorkshopDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-workshop-detail',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/workshop-detail/workshop-detail.html"*/'<!--\n  Generated template for the WorkshopDetail page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{workshop.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1 [innerHtml]="workshop.name"></h1>\n  <p>{{workshop.date}}</p>\n  <p><span>Мастер-класс проводит:&nbsp;</span><a (click)="goToSpeakerDetail(workshop.speaker);" [innerHtml]="workshop.speaker.name"></a><span *ngIf="workshop.speaker2"> | </span><a *ngIf="workshop.speaker2" (click)="goToSpeakerDetail(workshop.speaker2);" [innerHtml]="workshop.speaker2.name"></a><span *ngIf="workshop.speaker3"> | </span><a *ngIf="workshop.speaker3" (click)="goToSpeakerDetail(workshop.speaker3);" [innerHtml]="workshop.speaker3.name"></a></p>\n  	<p class="center"><img src=\'{{workshop.img1}}\' *ngIf="workshop.img1" /></p>\n\n	<p [innerHtml]="workshop.description"></p>\n	<p class="center">\n		<img src=\'{{workshop.img2}}\' *ngIf="workshop.img2" />\n		<img src=\'{{workshop.img3}}\' *ngIf="workshop.img3" />\n	</p>\n  <p *ngIf="!workshop.customEmail"><b>Заявки на участие по E-mail: <a href=\'mailto:infosupport@vetcongress.ru\'>infosupport@vetcongress.ru</a></b></p>\n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/workshop-detail/workshop-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], WorkshopDetailPage);
    return WorkshopDetailPage;
}());

//# sourceMappingURL=workshop-detail.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideStorage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_popover_about_popover__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_map_map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_schedule_schedule__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_schedule_filter_schedule_filter__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_session_detail_session_detail__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_speaker_detail_speaker_detail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_speaker_list_speaker_list__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_events_events__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_events_detail_events_detail__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_workshop_detail_workshop_detail__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_support_support__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_conference_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_user_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























function provideStorage() {
    return new __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]({});
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_events_detail_events_detail__["a" /* EventsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_workshop_detail_workshop_detail__["a" /* WorkshopDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_support_support__["a" /* SupportPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* ConferenceApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_popover_about_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_schedule_schedule__["a" /* SchedulePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_schedule_filter_schedule_filter__["a" /* ScheduleFilterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_session_detail_session_detail__["a" /* SessionDetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_speaker_list_speaker_list__["a" /* SpeakerListPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_events_detail_events_detail__["a" /* EventsDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_workshop_detail_workshop_detail__["a" /* WorkshopDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_support_support__["a" /* SupportPage */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_23__providers_conference_data__["a" /* ConferenceData */], __WEBPACK_IMPORTED_MODULE_24__providers_user_data__["a" /* UserData */], { provide: __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], useFactory: provideStorage }, __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromPromise__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_throw__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ConferenceData = (function () {
    function ConferenceData(http, user, storage) {
        this.http = http;
        this.user = user;
        this.storage = storage;
    }
    ConferenceData.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            var result = this.http.get('http://dermboardreview.github.io/data1.json').map(function (data) {
                return data ? _this.processData(data) : data;
            }).catch(function () {
                return _this.http.get('assets/data/data.json').map(function (data) {
                    return data ? _this.processData(data) : data;
                });
            });
            return result;
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = typeof data.json === 'undefined' ? JSON.parse(data._body) : data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    session.time = group.time;
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                if (speaker.sessions.length == 0 || session.name != speaker.sessions[speaker.sessions.length - 1].name) {
                                    speaker.sessions.push(session);
                                }
                            }
                        });
                    }
                    if (session.lectureId >= 0) {
                        session.lectures = _this.data.lectures[session.lectureId];
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        if (this.data.workshops) {
            this.data.workshops.forEach(function (workshop) {
                var speaker = _this.data.speakers.find(function (s) { return s.name === workshop.speakerName; });
                if (speaker) {
                    workshop.speaker = speaker;
                }
                if (workshop.speakerName2) {
                    var speaker_1 = _this.data.speakers.find(function (s) { return s.name === workshop.speakerName2; });
                    if (speaker_1) {
                        workshop.speaker2 = speaker_1;
                    }
                }
                if (workshop.speakerName3) {
                    var speaker_2 = _this.data.speakers.find(function (s) { return s.name === workshop.speakerName3; });
                    if (speaker_2) {
                        workshop.speaker3 = speaker_2;
                    }
                }
            });
        }
        if (this.data.events) {
            this.data.events.forEach(function (event) {
                event.workshops = [];
                if (event.workshopNames) {
                    event.workshopNames.forEach(function (workshopName) {
                        var workshop = _this.data.workshops.find(function (w) { return w.name === workshopName; });
                        if (workshop) {
                            event.workshops.push(workshop);
                        }
                    });
                }
            });
        }
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day;
            if (data) {
                day = data.schedule[dayIndex];
                day.shownSessions = 0;
                queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
                var queryWords_1 = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
                day.groups.forEach(function (group) {
                    group.hide = true;
                    group.sessions.forEach(function (session) {
                        // check if this session should show or not
                        _this.filterSession(session, queryWords_1, excludeTracks, segment);
                        if (!session.hide) {
                            // if this session is not hidden then this group should show
                            group.hide = false;
                            day.shownSessions++;
                        }
                    });
                });
            }
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            if (data) {
                return data.speakers;
            }
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            if (data) {
                return data.tracks.sort();
            }
        });
    };
    ConferenceData.prototype.getEvents = function () {
        return this.load().map(function (data) {
            if (data) {
                return data.events;
            }
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            if (data) {
                return data.map;
            }
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_account_account__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_support_support__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_conference_data__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_data__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Главная', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], icon: 'home' },
            { title: 'Программа', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], index: 1, icon: 'calendar' },
            { title: 'Лекторы', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], index: 2, icon: 'contacts' },
            { title: 'Мероприятия', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], index: 3, icon: 'pint' },
            { title: 'Карта', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], index: 4, icon: 'map' }
        ];
        this.loggedInPages = [
            { title: 'Account', component: __WEBPACK_IMPORTED_MODULE_4__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Support', component: __WEBPACK_IMPORTED_MODULE_8__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Support', component: __WEBPACK_IMPORTED_MODULE_8__pages_support_support__["a" /* SupportPage */], icon: 'help' },
            { title: 'Signup', component: __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        // Check if the user has already seen the tutorial
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */];
        this.splashScreen = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]();
        this.platformReady();
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        this.userData.hasLoggedIn().then(function (hasLoggedIn) {
            _this.enableMenu(hasLoggedIn === true);
        });
        this.listenToLoginEvents();
    }
    ConferenceApp.prototype.openPage = function (page) {
        var _this = this;
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            this.nav.setRoot(page.component, { tabIndex: page.index });
        }
        else {
            this.nav.setRoot(page.component).catch(function () {
                console.log("Didn't set nav root");
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            setTimeout(function () {
                _this.userData.logout();
            }, 1000);
        }
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mj/Projects/mvc/src/app/app.template.html"*/'\n<!-- logged out menu -->\n<ion-menu id="loggedOutMenu" [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Меню</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="outer-content">\n\n    <ion-list>\n      <ion-list-header>\n        Навигация \n      </ion-list-header>\n      <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n        <ion-icon item-left [name]="p.icon"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- logged in menu -->\n<ion-menu id="loggedInMenu" [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>навигация</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="outer-content">\n\n    <ion-list>\n      <ion-list-header>\n        навигация\n      </ion-list-header>\n      <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n        <ion-icon item-left [name]="p.icon"></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n\n<!-- main navigation -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/app/app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_10__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_9__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.addFavorite = function (sessionName) {
        this._favorites.push(sessionName);
    };
    ;
    UserData.prototype.removeFavorite = function (sessionName) {
        var index = this._favorites.indexOf(sessionName);
        if (index > -1) {
            this._favorites.splice(index, 1);
        }
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    // return a promise
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_events__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__schedule_schedule__["a" /* SchedulePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__speaker_list_speaker_list__["a" /* SpeakerListPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__events_events__["a" /* EventsPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex">\n  <ion-tab [root]="tab1Root" tabTitle="Главная" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Программа" tabIcon="calendar"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Лекторы" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Мероприятия" tabIcon="pint"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Карта" tabIcon="map"></ion-tab>\n  \n</ion-tabs>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Support</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Support message is required\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">Submit</button>\n		</div>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/support/support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speaker_detail_speaker_detail__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SessionDetailPage = (function () {
    function SessionDetailPage(navParams, navCtrl, confData) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.confData = confData;
        this.session = navParams.data;
        this.navCtrl = navCtrl;
        this.confData = confData;
    }
    SessionDetailPage.prototype.goToSpeakerDetail = function (speakerName) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__speaker_detail_speaker_detail__["a" /* SpeakerDetailPage */], speakerName);
    };
    SessionDetailPage.prototype.goToExternalLink = function (link) {
        window.open(link, '_system', '');
    };
    SessionDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.session.map) {
            this.confData.getMap().subscribe(function (mapData) {
                if (mapData) {
                    var mapEle_1 = _this.mapElement.nativeElement;
                    var map_1 = new google.maps.Map(mapEle_1, {
                        center: mapData.find(function (d) { return d.center2; }),
                        zoom: 16
                    });
                    mapData.forEach(function (markerData) {
                        var infoWindow = new google.maps.InfoWindow({
                            content: "<h5>" + markerData.name + "</h5>"
                        });
                        var marker = new google.maps.Marker({
                            position: markerData,
                            map: map_1,
                            title: markerData.name
                        });
                        marker.addListener('click', function () {
                            infoWindow.open(map_1, marker);
                        });
                    });
                    google.maps.event.addListenerOnce(map_1, 'idle', function () {
                        mapEle_1.classList.add('show-map');
                    });
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mapCanvas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SessionDetailPage.prototype, "mapElement", void 0);
    SessionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-session-detail',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/session-detail/session-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Программа</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 *ngIf="session.topic" [innerHtml]="session.topic"></h2>\n  <p *ngIf="session.description" [innerHtml]="session.description"></p>\n  <p>{{session.location}}</p>\n  <p>{{session.time}}</p>\n\n	<p *ngFor="let lecture of session.lectures">\n		<img *ngIf="lecture.sessionPic" [src]="lecture.sessionPic">\n		<span [innerHtml]="lecture.description"></span><br/>\n		<span *ngIf="lecture.speaker >= 0">Лектор:</span>\n		<span *ngFor="let speaker of session.speakers; let i = index">\n			<a *ngIf="lecture.speaker == i" (click)="goToSpeakerDetail(speaker)">{{speaker.name}}</a>\n		</span><span *ngIf="lecture.speaker2">,</span>\n		<span *ngFor="let speaker of session.speakers; let i = index">\n			<a *ngIf="lecture.speaker2 == i" (click)="goToSpeakerDetail(speaker)">{{speaker.name}}</a>\n		</span><span *ngIf="lecture.speaker3">,</span>\n		<span *ngFor="let speaker of session.speakers; let i = index">\n			<a *ngIf="lecture.speaker3 == i" (click)="goToSpeakerDetail(speaker)">{{speaker.name}}</a>\n		</span>\n		<span [innerHtml]="lecture.footer" *ngIf="lecture.footer"></span>\n		<img *ngIf="lecture.sessionPic2" [src]="lecture.sessionPic2"/>\n	</p>\n\n	<span *ngIf="session.extLink">\n		<a (click)="goToExternalLink(session.extLink)">{{session.extLinkText}}</a>\n	</span>\n	<span *ngIf="session.contactEmail">\n		e-mail: <a href="mailto:{{session.contactEmail}}">{{session.contactEmail}}</a>\n	</span>\n	<span *ngIf="session.contactPhone">\n		Тел: <a href="tel:{{session.contactPhone}}">{{session.contactPhone}}</a>\n	</span>\n	<div *ngIf="session.map" #mapCanvas id="map_canvas"></div>\n</ion-content>\n\n\n  \n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/session-detail/session-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */]])
    ], SessionDetailPage);
    return SessionDetailPage;
}());

//# sourceMappingURL=session-detail.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_detail_session_detail__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpeakerDetailPage = (function () {
    function SpeakerDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.speaker = this.navParams.data;
    }
    SpeakerDetailPage.prototype.goToSessionDetail = function (session) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__session_detail_session_detail__["a" /* SessionDetailPage */], session);
    };
    SpeakerDetailPage.prototype.goToExternalLink = function (session) {
        window.open(session.link, '_system', '');
    };
    SpeakerDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-speaker-detail',template:/*ion-inline-start:"/home/mj/Projects/mvc/src/pages/speaker-detail/speaker-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{speaker.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="speaker-detail">\n\n  <div text-center>\n    <img [src]="speaker.profilePic" [alt]="speaker.name"><br>\n\n    <button ion-button icon-only clear small hidden color="twitter">\n      <ion-icon name="logo-twitter"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small hidden color="github">\n      <ion-icon name="logo-github"></ion-icon>\n    </button>\n    <button ion-button icon-only clear small hidden color="instagram">\n      <ion-icon name="logo-instagram"></ion-icon>\n    </button>\n  </div>\n  <h1>{{speaker.name}}</h1>\n  <p>{{speaker.title}}</p>\n  <p class="wrap">{{speaker.about}}</p>\n  <a *ngIf="speaker.link" (click)="goToExternalLink(speaker)">{{speaker.link}}</a>\n  \n</ion-content>\n'/*ion-inline-end:"/home/mj/Projects/mvc/src/pages/speaker-detail/speaker-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SpeakerDetailPage);
    return SpeakerDetailPage;
}());

//# sourceMappingURL=speaker-detail.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map