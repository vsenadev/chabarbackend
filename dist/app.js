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
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/db/conn.ts
var require_conn = __commonJS({
    "src/db/conn.ts": function(exports, module2) {
        "use strict";
        var import_mongoose = __toESM(require("mongoose"));
        var mongo = require("mongoose");
        function main() {
            return _main.apply(this, arguments);
        }
        function _main() {
            _main = _asyncToGenerator(function() {
                var error;
                return __generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _state.trys.push([
                                0,
                                2,
                                ,
                                3
                            ]);
                            import_mongoose.default.set("strictQuery", true);
                            return [
                                4,
                                mongo.connect("mongodb+srv://viniciussena:10092019JUvi@chabardb.2vwcmbn.mongodb.net/test")
                            ];
                        case 1:
                            _state.sent();
                            console.log("connect");
                            return [
                                3,
                                3
                            ];
                        case 2:
                            error = _state.sent();
                            console.log("Erro: ".concat(error));
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
            return _main.apply(this, arguments);
        }
        module2.exports = main;
    }
});
// src/models/Admin.ts
var require_Admin = __commonJS({
    "src/models/Admin.ts": function(exports, module2) {
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
    "src/controllers/AdminController.ts": function(exports, module2) {
        "use strict";
        var AdminModel = require_Admin();
        var adminController = {
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
        module2.exports = adminController;
    }
});
// src/routes/Admin.ts
var require_Admin2 = __commonJS({
    "src/routes/Admin.ts": function(exports, module2) {
        "use strict";
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
        module2.exports = router;
    }
});
// src/models/Guests.ts
var require_Guests = __commonJS({
    "src/models/Guests.ts": function(exports, module2) {
        "use strict";
        var mongooseGuest = require("mongoose");
        var SchemaGuest = mongooseGuest.Schema;
        var guestSchema = new SchemaGuest({
            name: {
                type: String,
                require: true
            },
            gift: {
                type: String,
                require: false
            },
            sex: {
                type: String,
                require: true
            },
            giveawayStatus: {
                type: Boolean,
                require: true
            }
        }, {
            timestamps: true
        });
        var Guest = mongooseGuest.model("Guest", guestSchema);
        module2.exports = Guest;
    }
});
// src/models/Gifts.ts
var require_Gifts = __commonJS({
    "src/models/Gifts.ts": function(exports, module2) {
        "use strict";
        var mongooseGifts = require("mongoose");
        var SchemaGifts = mongooseGifts.Schema;
        var giftSchema = new SchemaGifts({
            name: {
                type: String,
                require: true
            },
            sorted: {
                type: Boolean,
                require: true
            }
        }, {
            timestamps: true
        });
        var Gifts = mongooseGifts.model("Gifts", giftSchema);
        module2.exports = Gifts;
    }
});
// src/controllers/GuestsController.ts
var require_GuestsController = __commonJS({
    "src/controllers/GuestsController.ts": function(exports, module2) {
        "use strict";
        var getRandomIntInclusive = function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        var GuestModel = require_Guests();
        var GiftsModel = require_Gifts();
        var guestController = {
            create: function() {
                var _ref = _asyncToGenerator(function(req, res) {
                    var guest, response, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                guest = {
                                    name: req.body.name,
                                    gift: req.body.gift,
                                    sex: req.body.sex,
                                    giveawayStatus: req.body.giveawayStatus
                                };
                                return [
                                    4,
                                    GuestModel.create(guest)
                                ];
                            case 1:
                                response = _state.sent();
                                res.status(201).json({
                                    response: response,
                                    msg: "Convidado criado com sucesso."
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
            createMany: function() {
                var _ref = _asyncToGenerator(function(req, res) {
                    var guestList, response, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                guestList = req.body;
                                return [
                                    4,
                                    GuestModel.insertMany(guestList)
                                ];
                            case 1:
                                response = _state.sent();
                                res.status(201).json({
                                    response: response,
                                    msg: "Convidados criados com sucesso."
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
                    var guest, error;
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
                                    GuestModel.find()
                                ];
                            case 1:
                                guest = _state.sent();
                                res.json(guest);
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
            get: function() {
                var _ref = _asyncToGenerator(function(req, res) {
                    var id, guest, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                id = req.params.id;
                                return [
                                    4,
                                    GuestModel.findById(id)
                                ];
                            case 1:
                                guest = _state.sent();
                                if (!guest) {
                                    res.status(404).json({
                                        msg: "Convidado n\xe3o encontrado"
                                    });
                                    return [
                                        2
                                    ];
                                }
                                res.json(guest);
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
            delete: function() {
                var _ref = _asyncToGenerator(function(req, res) {
                    var id, guest, deletedService, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    3,
                                    ,
                                    4
                                ]);
                                id = req.params.id;
                                return [
                                    4,
                                    GuestModel.findById(id)
                                ];
                            case 1:
                                guest = _state.sent();
                                if (!guest) {
                                    res.status(404).json({
                                        msg: "Convidado n\xe3o encontrado."
                                    });
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    GuestModel.findByIdAndDelete(id)
                                ];
                            case 2:
                                deletedService = _state.sent();
                                res.status(200).json({
                                    deletedService: deletedService,
                                    msg: "Convidado removido com sucesso."
                                });
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                error = _state.sent();
                                console.log(error);
                                return [
                                    3,
                                    4
                                ];
                            case 4:
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
                    var id, guest, updatedGuest, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                id = req.params.id;
                                guest = {
                                    name: req.body.name,
                                    gift: req.body.gift,
                                    sex: req.body.sex,
                                    giveawayStatus: req.body.giveawayStatus
                                };
                                return [
                                    4,
                                    GuestModel.findByIdAndUpdate(id, guest)
                                ];
                            case 1:
                                updatedGuest = _state.sent();
                                if (!updatedGuest) {
                                    res.status(404).json({
                                        msg: "Convidado n\xe3o encontrado."
                                    });
                                    return [
                                        2
                                    ];
                                }
                                res.status(200).json({
                                    msg: "Convidado atualizado com sucesso."
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
            sortedGift: function() {
                var _ref = _asyncToGenerator(function(req, res) {
                    var id, gifts, giftsList, troy, sorted, guest, turnOffGift, giftSelect, updatedGuest, updateGift;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                id = req.params.id;
                                return [
                                    4,
                                    GiftsModel.find({
                                        sorted: false
                                    })
                                ];
                            case 1:
                                gifts = _state.sent();
                                giftsList = [];
                                troy = "";
                                gifts.forEach(function(element) {
                                    giftsList.push(element.name);
                                });
                                if (giftsList.length != 1) {
                                    sorted = getRandomIntInclusive(0, giftsList.length);
                                    troy = giftsList[sorted];
                                } else {
                                    troy = giftsList[0];
                                }
                                guest = {
                                    name: req.body.name,
                                    gift: troy,
                                    sex: req.body.sex,
                                    giveawayStatus: true
                                };
                                return [
                                    4,
                                    GiftsModel.find({
                                        name: troy
                                    })
                                ];
                            case 2:
                                turnOffGift = _state.sent();
                                giftSelect = {
                                    name: troy,
                                    sorted: true
                                };
                                return [
                                    4,
                                    GuestModel.findByIdAndUpdate(id, guest)
                                ];
                            case 3:
                                updatedGuest = _state.sent();
                                return [
                                    4,
                                    GiftsModel.findByIdAndUpdate(turnOffGift[0]._id, giftSelect)
                                ];
                            case 4:
                                updateGift = _state.sent();
                                res.status(200).json({
                                    msg: "Presente soretado com sucesso."
                                });
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
        module2.exports = guestController;
    }
});
// src/routes/Guests.ts
var require_Guests2 = __commonJS({
    "src/routes/Guests.ts": function(exports, module2) {
        "use strict";
        var router = require("express").Router();
        var guestController = require_GuestsController();
        router.route("/guest").post(function(req, res) {
            return guestController.create(req, res);
        });
        router.route("/guest").get(function(req, res) {
            return guestController.getAll(req, res);
        });
        router.route("/guestsmany").post(function(req, res) {
            return guestController.createMany(req, res);
        });
        router.route("/guest/:id").get(function(req, res) {
            return guestController.get(req, res);
        });
        router.route("/guest/:id").put(function(req, res) {
            return guestController.update(req, res);
        });
        router.route("/guest/:id").delete(function(req, res) {
            return guestController.delete(req, res);
        });
        router.route("/guest/sorted/:id").put(function(req, res) {
            return guestController.sortedGift(req, res);
        });
        module2.exports = router;
    }
});
// src/controllers/GiftsControllers.ts
var require_GiftsControllers = __commonJS({
    "src/controllers/GiftsControllers.ts": function(exports, module2) {
        "use strict";
        var GiftsModel = require_Gifts();
        var giftsController = {
            create: function() {
                var _ref = _asyncToGenerator(function(req, res) {
                    var gifts, response, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                gifts = [
                                    {
                                        name: req.body.name,
                                        sorted: req.body.sorted
                                    }
                                ];
                                return [
                                    4,
                                    GiftsModel.create(gifts)
                                ];
                            case 1:
                                response = _state.sent();
                                res.status(201).json({
                                    response: response,
                                    msg: "presente criado com sucesso."
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
            createMany: function() {
                var _ref = _asyncToGenerator(function(req, res) {
                    var giftsList, response, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                giftsList = req.body;
                                return [
                                    4,
                                    GiftsModel.insertMany(giftsList)
                                ];
                            case 1:
                                response = _state.sent();
                                res.status(201).json({
                                    response: response,
                                    msg: "presentes criados com sucesso."
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
                    var gifts, error;
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
                                    GiftsModel.find()
                                ];
                            case 1:
                                gifts = _state.sent();
                                res.json(gifts);
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
                    var id, gifts, updatedGifts, error;
                    return __generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _state.trys.push([
                                    0,
                                    2,
                                    ,
                                    3
                                ]);
                                id = req.params.id;
                                gifts = {
                                    name: req.body.name,
                                    sorted: req.body.sorted
                                };
                                return [
                                    4,
                                    GiftsModel.findByIdAndUpdate(id, gifts)
                                ];
                            case 1:
                                updatedGifts = _state.sent();
                                if (!updatedGifts) {
                                    res.status(404).json({
                                        msg: "Presente n\xe3o encontrado."
                                    });
                                    return [
                                        2
                                    ];
                                }
                                res.status(200).json({
                                    msg: "Presente atualizado com sucesso."
                                });
                                return [
                                    3,
                                    3
                                ];
                            case 2:
                                error = _state.sent();
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
            }()
        };
        module2.exports = giftsController;
    }
});
// src/routes/Gifts.ts
var require_Gifts2 = __commonJS({
    "src/routes/Gifts.ts": function(exports, module2) {
        "use strict";
        var router = require("express").Router();
        var giftsController = require_GiftsControllers();
        router.route("/gifts").post(function(req, res) {
            return giftsController.create(req, res);
        });
        router.route("/giftsmany").post(function(req, res) {
            return giftsController.createMany(req, res);
        });
        router.route("/gifts").get(function(req, res) {
            return giftsController.getAll(req, res);
        });
        router.route("/gifts/:id").put(function(req, res) {
            return giftsController.update(req, res);
        });
        module2.exports = router;
    }
});
// src/routes/router.ts
var require_router = __commonJS({
    "src/routes/router.ts": function(exports, module2) {
        "use strict";
        var router = require("express").Router();
        var adminRouter = require_Admin2();
        var guestRouter = require_Guests2();
        var giftRouter = require_Gifts2();
        router.use("/", adminRouter);
        router.use("/", guestRouter);
        router.use("/", giftRouter);
        module2.exports = router;
    }
});
// src/app.ts
var app_exports = {};
__export(app_exports, {
    default: function() {
        return app_default;
    }
});
module.exports = __toCommonJS(app_exports);
var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 5e3;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
var conn = require_conn();
conn();
var routes = require_router();
app.use("/api", routes);
app.listen(5e3, function() {
    console.log("Server online");
});
var app_default = app;
