var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand) {
        this.mycar = new Car("ford");
        this.engine = brand;
    }
    return Car;
}());
var Subcar = /** @class */ (function (_super) {
    __extends(Subcar, _super);
    function Subcar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subcar.prototype.disp = function () {
        console.log("name of the engine" + this.engine);
    };
    return Subcar;
}(Car));
var obj = new Subcar("mini");
obj.disp();
