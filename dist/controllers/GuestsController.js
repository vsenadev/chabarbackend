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
// src/models/Guests.ts
var require_Guests = __commonJS({
    "src/models/Guests.ts": function(exports2, module2) {
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
    "src/models/Gifts.ts": function(exports2, module2) {
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
var GuestModel = require_Guests();
var GiftsModel = require_Gifts();
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
module.exports = guestController;
