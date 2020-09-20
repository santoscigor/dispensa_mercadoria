"use strict";
exports.__esModule = true;
var Grocery = /** @class */ (function () {
    function Grocery() {
    }
    Object.defineProperty(Grocery.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grocery.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Grocery.prototype.toJSON = function () {
        return {
            id: this._id,
            name: this._name
        };
    };
    return Grocery;
}());
exports.Grocery = Grocery;
