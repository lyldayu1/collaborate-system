webpackJsonp([1,5],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ProblemDetailComponent = (function () {
    function ProblemDetailComponent(data, route) {
        this.data = data;
        this.route = route;
    }
    ProblemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.data.getProblem(+params['id'])
                .then(function (problem) { return _this.problem = problem; });
        });
    };
    return ProblemDetailComponent;
}());
ProblemDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-problem-detail',
        template: __webpack_require__(400),
        styles: [__webpack_require__(386)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], ProblemDetailComponent);

var _a;
//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/problem-detail.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProblemListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ProblemListComponent = (function () {
    function ProblemListComponent(data) {
        this.data = data;
    }
    ProblemListComponent.prototype.ngOnInit = function () {
        this.getProblems();
    };
    ProblemListComponent.prototype.getProblems = function () {
        var _this = this;
        this.subscriptionProblems = this.data.getProblems()
            .subscribe(function (problems) { return _this.problems = problems; });
    };
    return ProblemListComponent;
}());
ProblemListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-problem-list',
        template: __webpack_require__(401),
        styles: [__webpack_require__(387)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object])
], ProblemListComponent);

//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/problem-list.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 202;


/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(218);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(396),
        styles: [__webpack_require__(382)]
    })
], AppComponent);

//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/app.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_collaboration_service__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_problem_list_problem_list_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_problem_detail_problem_detail_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_new_problem_new_problem_component__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_editor_editor_component__ = __webpack_require__(220);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_problem_list_problem_list_component__["a" /* ProblemListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_new_problem_new_problem_component__["a" /* NewProblemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_editor_editor_component__["a" /* EditorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */]
        ],
        providers: [{
                provide: 'data',
                useClass: __WEBPACK_IMPORTED_MODULE_5__services_data_service__["a" /* DataService */]
            },
            {
                provide: 'auth',
                useClass: __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]
            },
            {
                provide: 'authGuard',
                useClass: __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuardService */]
            },
            {
                provide: 'collaboration',
                useClass: __WEBPACK_IMPORTED_MODULE_8__services_collaboration_service__["a" /* CollaborationService */]
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/app.module.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });



var routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component: __WEBPACK_IMPORTED_MODULE_1__components_problem_list_problem_list_component__["a" /* ProblemListComponent */]
    },
    {
        path: 'problems/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__components_problem_detail_problem_detail_component__["a" /* ProblemDetailComponent */],
        canActivate: ['authGuard']
    },
    {
        path: '**',
        redirectTo: 'problems'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/app.routes.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditorComponent = (function () {
    function EditorComponent(collaboration, data, route) {
        this.collaboration = collaboration;
        this.data = data;
        this.route = route;
        this.language = 'Java';
        this.languages = ['Java', 'C++', 'Python'];
        this.defaultContent = {
            'Java': "public class Example {\npublic static void main(String[] args) {\n    // Type your Java code here\n    }\n}",
            'C++': "#include <iostream>\nusing namespace std;\nint main() {\n  // Type your C++ code here\n  return 0;\n}",
            'Python': "class Solution:\n   def example():\n       # Write your Python code here"
        };
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.sessionId = params['id'];
            _this.initEditor();
        });
    };
    EditorComponent.prototype.initEditor = function () {
        var _this = this;
        this.editor = ace.edit('editor');
        this.editor.setTheme('ace/theme/eclipse');
        this.editor.setFontSize(18);
        this.editor.$blockScrolling = Infinity;
        this.resetEditor();
        this.collaboration.init(this.editor, this.sessionId);
        this.editor.lastAppliedChange = null;
        // registering change callback
        this.editor.on('change', function (e) {
            console.log('Editor Component: ' + JSON.stringify(e));
            if (_this.editor.lastAppliedChange != e) {
                _this.collaboration.change(JSON.stringify(e));
            }
        });
        // registering cursor change callback
        this.editor.getSession().getSelection().on('changeCursor', function () {
            var cursor = _this.editor.getSession().getSelection().getCursor();
            console.log('CLIENT! CURSOR' + JSON.stringify(cursor));
            _this.collaboration.cursorMove(JSON.stringify(cursor));
        });
        this.collaboration.restoreBuffer();
    };
    EditorComponent.prototype.resetEditor = function () {
        console.log('Resetting editor');
        this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
        this.editor.setValue(this.defaultContent[this.language]);
        this.output = '';
    };
    EditorComponent.prototype.setLanguage = function (language) {
        this.language = language;
        this.resetEditor();
    };
    EditorComponent.prototype.submit = function () {
        var _this = this;
        this.output = '';
        var userCode = this.editor.getValue();
        var code = {
            userCode: userCode,
            lang: this.language.toLocaleLowerCase()
        };
        this.data.buildAndRun(code)
            .then(function (res) { return _this.output = res.text; });
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editor',
        template: __webpack_require__(397),
        styles: [__webpack_require__(383)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('collaboration')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __metadata("design:paramtypes", [Object, Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object])
], EditorComponent);

var _a;
//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/editor.component.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var NavbarComponent = (function () {
    function NavbarComponent(auth) {
        this.auth = auth;
        this.title = 'COJ';
        this.username = '';
        if (this.auth.authenticated()) {
            this.username = this.auth.getProfile().nickname;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.login = function () {
        var _this = this;
        this.auth.login()
            .then(function (profile) { return _this.username = profile.nickname; });
    };
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(398),
        styles: [__webpack_require__(384)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('auth')),
    __metadata("design:paramtypes", [Object])
], NavbarComponent);

//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/navbar.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProblemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var DEFAULT_PROBLEM = Object.freeze({
    id: 0,
    name: '',
    desc: '',
    difficulty: 'easy'
});
var NewProblemComponent = (function () {
    function NewProblemComponent(data, authGuard) {
        this.data = data;
        this.authGuard = authGuard;
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
        this.difficulties = ['easy', 'medium', 'hard', 'super'];
    }
    NewProblemComponent.prototype.ngOnInit = function () {
    };
    NewProblemComponent.prototype.addProblem = function () {
        this.data.addProblem(this.newProblem)
            .catch(function (error) { return console.log(error); });
        this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
    };
    return NewProblemComponent;
}());
NewProblemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-problem',
        template: __webpack_require__(399),
        styles: [__webpack_require__(385)]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('data')),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('authGuard')),
    __metadata("design:paramtypes", [Object, Object])
], NewProblemComponent);

//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/new-problem.component.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.auth.authenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
        }
    };
    AuthGuardService.prototype.isAdmin = function () {
        if (this.auth.authenticated() && this.auth.getProfile().roles.includes('Admin')) {
            return true;
        }
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('auth')),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/auth-guard.service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(53);
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
    function AuthService(router) {
        this.router = router;
        // Configure Auth0
        this.clientId = 'Q_I90r-cG_0LIyaSmw5tAJ81mDfzT5PJ';
        this.domain = 'rita-ren.auth0.com';
        this.lock = new Auth0Lock(this.clientId, this.domain, {});
    }
    AuthService.prototype.login = function () {
        var _this = this;
        // Call the show method to display the widget.
        // this.lock.show();
        return new Promise(function (resolve, reject) {
            _this.lock.show(function (error, profile, id_token) {
                if (error) {
                    reject(error);
                }
                else {
                    localStorage.setItem('profile', JSON.stringify(profile));
                    localStorage.setItem('id_token', id_token);
                    resolve(profile);
                }
            });
        });
    };
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.router.navigate(['/']);
    };
    AuthService.prototype.getProfile = function () {
        return JSON.parse(localStorage.getItem('profile'));
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/auth.service.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_colors__ = __webpack_require__(227);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollaborationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollaborationService = (function () {
    function CollaborationService() {
        this.clientsInfo = {};
        this.clientNum = 0;
    }
    CollaborationService.prototype.init = function (editor, sessionId) {
        var _this = this;
        this.collaborationSocket = io(window.location.origin, { query: 'sessionId=' + sessionId });
        // listener for change event
        this.collaborationSocket.on('change', function (delta) {
            console.log('collaboration service: editor changed by ' + delta);
            delta = JSON.parse(delta);
            editor.lastAppliedChange = delta;
            editor.getSession().getDocument().applyDeltas([delta]);
        });
        // listener for cursorMove events emitted from server
        this.collaborationSocket.on('cursorMove', function (cursor) {
            // cursor: row: xxx, column: xxx, socketId: xxx
            console.log('RECEIVED from SERVER cursor move: ' + cursor);
            cursor = JSON.parse(cursor);
            var x = cursor['row'];
            var y = cursor['column'];
            var changeClientId = cursor['socketId'];
            var session = editor.getSession();
            if (changeClientId in _this.clientsInfo) {
                session.removeMarker(_this.clientsInfo[changeClientId]['marker']);
            }
            else {
                _this.clientsInfo[changeClientId] = {};
                var css = document.createElement('style');
                css.type = 'text/css';
                css.innerHTML = '.editor_cursor_' + changeClientId
                    + '{ position: absolute; background: ' + __WEBPACK_IMPORTED_MODULE_1__assets_colors__["a" /* COLORS */][_this.clientNum] + ';'
                    + 'z-index: 100; width: 3px !important; }';
                document.body.appendChild(css);
                _this.clientNum++;
            }
            // TODO: draw a new one
            var Range = ace.require('ace/range').Range;
            var newMarker = session.addMarker(new Range(x, y, x, y + 1), 'editor_cursor_' + changeClientId, true);
            _this.clientsInfo[changeClientId]['marker'] = newMarker;
        });
    };
    // emit change event
    CollaborationService.prototype.change = function (delta) {
        this.collaborationSocket.emit('change', delta);
    };
    // emit cursor move event
    CollaborationService.prototype.cursorMove = function (cursor) {
        this.collaborationSocket.emit('cursorMove', cursor);
    };
    CollaborationService.prototype.restoreBuffer = function () {
        this.collaborationSocket.emit('restoreBuffer');
    };
    return CollaborationService;
}());
CollaborationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CollaborationService);

//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/collaboration.service.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this._problemSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]([]);
    }
    DataService.prototype.getProblems = function () {
        var _this = this;
        this.http.get('api/v1/problems')
            .toPromise()
            .then(function (res) {
            _this._problemSource.next(res.json());
        })
            .catch(this.handleError);
        return this._problemSource.asObservable();
    };
    DataService.prototype.getProblem = function (id) {
        return this.http.get("api/v1/problems/" + id)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.addProblem = function (newProblem) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
            'content-type': 'application/json'
        });
        return this.http.post('api/v1/problems', newProblem, headers)
            .toPromise()
            .then(function (res) {
            _this.getProblems(); // becuase we need one more problem to display
            res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.buildAndRun = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
            'content-type': 'application/json'
        });
        return this.http.post('api/v1/build_and_run', data, headers)
            .toPromise()
            .then(function (res) {
            console.log(res);
            return res.json();
        })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('An error happened', error);
        return Promise.reject(error.body || error);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/data.service.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORS; });
var COLORS = [
    "#0000ff",
    "#a52a2a",
    "#00ffff",
    "#00008b",
    "#008b8b",
    "#a9a9a9",
    "#006400",
    "#bdb76b",
    "#8b008b",
    "#556b2f",
    "#ff8c00",
    "#9932cc",
    "#8b0000",
    "#e9967a",
    "#9400d3",
    "#ff00ff",
    "#ffd700",
    "#008000",
    "#4b0082",
    "#f0e68c",
    "#add8e6",
    "#e0ffff",
    "#90ee90",
    "#d3d3d3",
    "#ffb6c1",
    "#ffffe0",
    "#00ff00",
    "#ff00ff",
    "#800000",
    "#000080",
    "#808000",
    "#ffa500",
    "#ffc0cb",
    "#800080",
    "#800080",
    "#ff0000",
    "#c0c0c0",
    "#ffffff",
    "#ffff00"
];
//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/colors.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Rita/Desktop/Collaborative-Online-Judge-System/oj-client/src/environment.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "@media screen {\n #editor {\n   height: 600px;\n }\n .lang-select {\n   width: 100px;\n   margin-right: 10px;\n }\n header .btn {\n   margin: 0 5px;\n }\n footer .btn {\n   margin: 0 5px;\n }\n .editor-footer, .editor-header {\n   margin: 10px 0;\n }\n .cursor {\n   /*position:absolute;*/\n   background: rgba(0, 250, 0, 0.5);\n   z-index: 40;\n   width: 2px!important\n }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(33)(false);
// imports


// module
exports.push([module.i, ".difficulty {\n  min-width: 65px;\n  margin-right: 10px;\n}\n\n.label.difficulty {\n  padding-top: 0.6em;\n  color: #fbfdfa;\n  font-size: 12px;\n}\n\n.title {\n  font-size: 1.2em;\n}\n\n.diff-easy {\n  background-color: #42ebf4;\n}\n\n.diff-medium {\n  background-color: #92cf5c;\n}\n\n.diff-hard {\n  background-color: #dd0d1e;\n}\n\n.diff-super {\n  background-color: #8d16e2;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 396:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

module.exports = "<section>\n  <header>\n    <select class=\"form-control pull-left lang-select\" id=\"language\"\n        name=\"language\"\n        [(ngModel)]=\"language\"\n        (change)=\"setLanguage(language)\"\n       >\n       <option *ngFor=\"let language of languages\"\n       [value]=\"language\">\n         {{language}}\n       </option>\n    </select>\n    <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#myModal\">\n      <span class=\"glyphicon glyphicon-refresh\" aria-hidden=\"true\"></span>\n    </button>\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h1 class=\"modal-title\" id=\"exampleModalLabel\">Reset?</h1>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body\">\n            Are you sure? Are you okay?\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\"\n              (click)=\"resetEditor()\">Reset</button>\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <div class=\"row\">\n    <div id=\"editor\">\n    </div>\n  </div>\n  <div class=\"row\">\n    {{output}}\n  </div>\n  <footer>\n    <button type=\"button\" class=\"btn btn-success pull-right\" (click)=\"submit()\">\n      Submit Solution\n    </button>\n  </footer>\n</section>\n"

/***/ }),

/***/ 398:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">{{title}}</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <form class=\"navbar-form navbar-left\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search for problems\">\n        </div>\n      </form>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!auth.authenticated()\">\n          <form class=\"navbar-form\">\n            <button type=\"button\" class=\"btn btn-primary\"\n              (click)=\"login()\"\n            >Sign in</button>\n          </form>\n        </li>\n        <li class=\"dropdown\" *ngIf=\"auth.authenticated()\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{username}} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">My profile</a></li>\n            <li><a href=\"#\">My favorites</a></li>\n            <li><a href=\"#\">Something else here</a></li>\n            <li role=\"separator\" class=\"divider\"></li>\n            <li><a (click)=\"logout()\">Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div><!-- /.container-fluid -->\n</nav>\n</div>\n"

/***/ }),

/***/ 399:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authGuard.isAdmin()\">\n  <form #formRef = \"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"problemName\">problem name</label>\n      <input name = \"problemName\" id=\"problemName\" class=\"form-control\" type=\"text\" required placeholder=\"Please enter problem name\" [(ngModel)] = \"newProblem.name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"problemDesc\">problem description</label>\n      <textarea name = \"problemDesc\" id=\"problemDesc\" class=\"form-control\" placeholder=\"Please enter problem description\" [(ngModel)] = \"newProblem.desc\" rows=\"3\">\n      </textarea>\n    </div>\n    <div class=\"form-group\">\n       <label for=\"problemDifficulty\">Difficulty</label>\n       <select class=\"form-control\" id=\"difficulty\" name=\"difficulty\" [(ngModel)] = \"newProblem.difficulty\">\n        <option *ngFor = \"let difficulty of difficulties\" [value] = \"difficulty\">\n          {{difficulty}}\n        </option>\n       </select>\n    </div>\n    <div class=\"row\">\n      <div class = \"col-md-12\">\n        <button type=\"submit\" class=\"btn btn-primary pull-right\"\n          (click) = \"addProblem()\"\n        > Add problem </button>\n      </div>\n    </div>\n  </form>\n</div>\n<br/>\n<br/>\n"

/***/ }),

/***/ 400:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"problem\">\n  <div class=\"col-xs-12 col-md-4\">\n    <h2>\n      {{problem.id}}. {{problem.name}}\n    </h2>\n    <p>\n      {{problem.desc}}\n    </p>\n  </div>\n  <div class=\"hidden-xs col-sm-12 col-md-8\">\n    <app-editor></app-editor>\n  </div>\n</div>\n"

/***/ }),

/***/ 401:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-new-problem></app-new-problem>\n  <div class=\"list-group\">\n    <a class=\"list-group-item\" *ngFor=\"let problem of problems\"\n      [routerLink] = \"['/problems', problem.id]\">\n      <span class=\"{{'pull-left label difficulty diff-' + problem.difficulty.toLocaleLowerCase()}}\">{{problem.difficulty}}</span>\n      <strong class=\"title\">{{problem.id}}. {{problem.name}}</strong>\n    </a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(203);


/***/ })

},[668]);
//# sourceMappingURL=main.bundle.js.map