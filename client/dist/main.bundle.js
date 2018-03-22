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

/***/ "./src/app/adduser/adduser.component.css":
/***/ (function(module, exports) {

module.exports = "p{\n    color: #9854ff;\n}\nform{\n    border: 1px solid gray;\n    width: 300px;\n    padding: 10px;\n}\nbutton, #button{\n    padding: 5px;\n    background-color: #66bbff;\n    color: white;\n    border-radius: 5px;\n}\n"

/***/ }),

/***/ "./src/app/adduser/adduser.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/homepage']\">Home</a>\n<p>Add a new author:</p>\n<form (submit)=\"submitNewbie()\">\n    <label>Name:</label><br>\n    <input type=\"text\" name=\"newbie.name\" [(ngModel)]=\"newbie.name\" />\n    <br><br>\n    <button [routerLink]=\"['homepage']\">Cancel</button>  \n    <input type=\"submit\" value=\"Submit\" id=\"button\" />\n  </form>\n\n<p *ngIf=\"errors\">{{errors.errors.name.message}}</p>"

/***/ }),

/***/ "./src/app/adduser/adduser.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(_httpService, _router) {
        this._httpService = _httpService;
        this._router = _router;
    }
    AdduserComponent.prototype.ngOnInit = function () {
        this.newbie = { "name": "" };
        this.angularform = new forms_1.FormGroup({
            'name': new forms_1.FormControl(this.newbie, [
                forms_1.Validators.required,
                forms_1.Validators.minLength(3)
            ])
        });
    };
    AdduserComponent.prototype.submitNewbie = function () {
        var _this = this;
        var observable = this._httpService.newGuy(this.newbie);
        observable.subscribe(function (data) {
            if (data['error']) {
                console.log(data['error']);
                _this.errors = data['error'];
            }
            else {
                console.log(data);
                _this._router.navigate(['/homepage']);
            }
        });
    };
    AdduserComponent = __decorate([
        core_1.Component({
            selector: 'app-adduser',
            template: __webpack_require__("./src/app/adduser/adduser.component.html"),
            styles: [__webpack_require__("./src/app/adduser/adduser.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router])
    ], AdduserComponent);
    return AdduserComponent;
}());
exports.AdduserComponent = AdduserComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var adduser_component_1 = __webpack_require__("./src/app/adduser/adduser.component.ts");
var homepage_component_1 = __webpack_require__("./src/app/homepage/homepage.component.ts");
var edituser_component_1 = __webpack_require__("./src/app/edituser/edituser.component.ts");
var routes = [
    { path: 'adduser', component: adduser_component_1.AdduserComponent },
    { path: 'homepage', component: homepage_component_1.HomepageComponent },
    { path: 'edit/:id', component: edituser_component_1.EdituserComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<h1>Favorite Authors!</h1>\n\n<router-outlet></router-outlet> \n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this._route.params.subscribe(function (params) { return console.log(params['id']); });
        this.goHome();
    };
    AppComponent.prototype.goHome = function () {
        this._router.navigate(['/homepage']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
//added these two for http.service
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var adduser_component_1 = __webpack_require__("./src/app/adduser/adduser.component.ts");
var homepage_component_1 = __webpack_require__("./src/app/homepage/homepage.component.ts");
var edituser_component_1 = __webpack_require__("./src/app/edituser/edituser.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                adduser_component_1.AdduserComponent,
                homepage_component_1.HomepageComponent,
                edituser_component_1.EdituserComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [http_service_1.HttpService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/edituser/edituser.component.css":
/***/ (function(module, exports) {

module.exports = "p{\n    color: #9854ff;\n}\nform{\n    border: 1px solid gray;\n    width: 300px;\n    padding: 10px;\n}\nbutton, #button{\n    padding: 5px;\n    background-color: #66bbff;\n    color: white;\n    border-radius: 5px;\n}"

/***/ }),

/***/ "./src/app/edituser/edituser.component.html":
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/homepage']\">Home</a>\n<p>Edit this author</p>\n<form (submit)=\"submitEdits()\" method=\"post\">\n  <label>Name:</label><br>\n  <input type=\"text\" name=\"user.name\" [(ngModel)]=\"user.name\" value=\"{{user.name}}\" />\n  <br><br>\n  <button [routerLink]=\"['homepage']\">Cancel</button>  \n  <input type=\"submit\" value=\"Submit\" id=\"button\" />\n</form>\n\n<p *ngIf=\"errors\">{{errors.errors.name.message}}</p>"

/***/ }),

/***/ "./src/app/edituser/edituser.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var EdituserComponent = /** @class */ (function () {
    function EdituserComponent(_route, _HttpService, _router) {
        this._route = _route;
        this._HttpService = _HttpService;
        this._router = _router;
    }
    EdituserComponent.prototype.ngOnInit = function () {
        this.populateForm();
    };
    EdituserComponent.prototype.populateForm = function () {
        var _this = this;
        //get id from parameters
        this._route.params.subscribe(function (data) {
            console.log(data);
            _this.id = data['id'];
        });
        //get user from Http.Service
        var observable = this._HttpService.getOneAuthor(this.id);
        observable.subscribe(function (data) {
            _this.user = data;
        });
    };
    EdituserComponent.prototype.submitEdits = function () {
        var _this = this;
        console.log(this.user);
        var observable = this._HttpService.sendEdits(this.user);
        observable.subscribe(function (data) {
            if (data['error']) {
                console.log(data['error']);
                _this.errors = data['error'];
            }
            else {
                _this._router.navigate(['/homepage']);
            }
        });
    };
    EdituserComponent = __decorate([
        core_1.Component({
            selector: 'app-edituser',
            template: __webpack_require__("./src/app/edituser/edituser.component.html"),
            styles: [__webpack_require__("./src/app/edituser/edituser.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            http_service_1.HttpService,
            router_1.Router])
    ], EdituserComponent);
    return EdituserComponent;
}());
exports.EdituserComponent = EdituserComponent;


/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    border-collapse: collapse;\n    border-spacing: 0;\n    border: 1px solid black;\n    width: 50%;\n}\ntr:nth-child(odd) {\n    background-color: #f1f1f1;\n    border: 1px solid black;\n}\nth {\n    border-right: 1px solid black;\n}\np{\n    color: #9854ff\n}\nbutton{\n    color: white;\n    background: -webkit-gradient(linear,left top, left bottom,from(#e6d3be),to(#61737f));\n    background: linear-gradient(to bottom,#e6d3be,#61737f)\n}"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "\n<a [routerLink]=\"['/adduser']\">Add Author</a>\n<br>\n<p>We have quotes by:</p>\n<table>\n    <tr>\n        <th>Name</th>\n        <th>Actions Available</th>\n    </tr>\n    <tr *ngFor=\"let x of allusers\">\n        <th><p>{{x.name}}</p></th>\n        <!-- <th><button (click)=\"editMe(x._id)\">Edit</button> <button>Delete</button></th> -->\n        <th><button [routerLink]=\"['/edit/',x._id]\">Edit</button> <button (click)=\"deleteMe(x._id)\">Delete</button></th>\n    </tr>\n</table>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_service_1 = __webpack_require__("./src/app/http.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(_HttpService, _router, _route) {
        this._HttpService = _HttpService;
        this._router = _router;
        this._route = _route;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    HomepageComponent.prototype.getAll = function () {
        var _this = this;
        var observable = this._HttpService.getAllAuthors();
        observable.subscribe(function (data) {
            _this.allusers = data;
        });
    };
    HomepageComponent.prototype.deleteMe = function (id) {
        var _this = this;
        var observable = this._HttpService.kill(id);
        observable.subscribe(function (data) {
            _this.getAll();
        });
    };
    HomepageComponent = __decorate([
        core_1.Component({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [http_service_1.HttpService, router_1.Router, router_1.ActivatedRoute])
    ], HomepageComponent);
    return HomepageComponent;
}());
exports.HomepageComponent = HomepageComponent;


/***/ }),

/***/ "./src/app/http.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
//for our constructor to use. yay Dependency Injection!
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getAllAuthors = function () {
        return this._http.get('/all');
    };
    HttpService.prototype.getOneAuthor = function (id) {
        return this._http.get('/author/' + id);
    };
    HttpService.prototype.sendEdits = function (user) {
        console.log(user._id);
        return this._http.put('/author/' + user._id, user);
    };
    HttpService.prototype.newGuy = function (user) {
        console.log(user);
        return this._http.post('/author', user);
    };
    HttpService.prototype.kill = function (id) {
        return this._http.delete('/author/' + id);
    };
    HttpService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map