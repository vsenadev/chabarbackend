"use strict";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var __generator = this && this.__generator || function(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
// src/models/Admin.ts
var require_Admin = __commonJS({
    "src/models/Admin.ts": function(exports2, module2) {
        "use strict";
        var mongooseAdmin = require("mongoose");
        var SchemaAdmin = mongooseAdmin.Schema;
        var adminSchema = new SchemaAdmin({
            user: {
                type: String,
                require: true
            },
            password: {
                type: String,
                require: true
            }
        }, {
            timestamps: true
        });
        var Admin = mongooseAdmin.model("Admin", adminSchema);
        module2.exports = Admin;
    }
});
// src/controllers/AdminController.ts
var require_AdminController = __commonJS({
    "src/controllers/AdminController.ts": function(exports2, module2) {
        "use strict";
        var AdminModel = require_Admin();
        var adminController2 = {
            create: function() {
                var _ref = _asyncToGenerator(function(req, res) {
                    var admin, response, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                admin = {
                                    user: req.body.user,
                                    password: req.body.password
                                };
                                return [
                                    4,
                                    AdminModel.create(admin)
                                ];
                            case 1:
                                response = _state.sent();
                                res.status(201).json({
                                    response: response,
                                    msg: "Usu\xe1rio criado com sucesso."
                                });
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                console.log(error);
                                return [
                                    3,
                                    3
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(req, res) {
                    return _ref.apply(this, arguments);
                };
            }(),
            getAll: function() {
                var _ref = _asyncToGenerator(function(req, res) {
                    var admin, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                return [
                                    4,
                                    AdminModel.find()
                                ];
                            case 1:
                                admin = _state.sent();
                                res.json(admin);
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
                                console.log(error);
                                return [
                                    3,
                                    3
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(req, res) {
                    return _ref.apply(this, arguments);
                };
            }(),
            update: function() {
                var _ref = _asyncToGenerator(function(req, res) {
                    var _req_body, user, password, filter, authenticate;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _req_body = req.body, user = _req_body.user, password = _req_body.password;
                                filter = {
                                    user: user,
                                    password: password
                                };
                                return [
                                    4,
                                    AdminModel.find(filter)
                                ];
                            case 1:
                                authenticate = _state.sent();
                                if (authenticate.length > 0) {
                                    res.status(200).json({
                                        msg: "Login realizado com sucesso!"
                                    });
                                } else {
                                    res.status(401).json({
                                        msg: "Usu\xe1rio ou Senha inv\xe1lidos!"
                                    });
                                }
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(req, res) {
                    return _ref.apply(this, arguments);
                };
            }()
        };
        module2.exports = adminController2;
    }
});
// src/routes/Admin.ts
var router = require("express").Router();
var adminController = require_AdminController();
router.route("/admin").post(function(req, res) {
    return adminController.create(req, res);
});
router.route("/admin").get(function(req, res) {
    return adminController.getAll(req, res);
});
router.route("/admin/authenticate").put(function(req, res) {
    return adminController.update(req, res);
});
module.exports = router;
