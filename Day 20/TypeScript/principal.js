"use strict";
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
exports.__esModule = true;
var student_1 = require("./student");
var Principal = /** @class */ (function (_super) {
    __extends(Principal, _super);
    function Principal(id, name, marks) {
        return _super.call(this, id, name, marks) || this;
    }
    return Principal;
}(student_1.Student));
var pp = new Principal(2, "suhas", 67);
console.log(pp.name);
// import { Student} from './student';
// class principal extends Student{
// constructor(id:number, name:string,marks:number){
// super(id,name,marks);
// }
// }
// var pp:principal= new principal(1,'sonu',23);
// console.log(pp.name);
