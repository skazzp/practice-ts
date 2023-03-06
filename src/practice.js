var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var age = 50;
var name1 = 'Max';
var toggle = true;
var empty = null;
var notInitialize = undefined;
var callback = function (a) {
    return 100 + a;
};
var anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
if (typeof some === 'string')
    str = some;
var person = ['Max', 21];
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
/////////////////////////////////////////////////////////////
var Key = /** @class */ (function () {
    function Key() {
        this.signature = Math.floor(Math.random() * 100);
    }
    Key.prototype.getSignature = function () {
        console.log(this.signature);
        return this.signature;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
    }
    Person.prototype.getKey = function () {
        console.log(this.key);
        return this.key;
    };
    return Person;
}());
var House = /** @class */ (function () {
    function House(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    House.prototype.comeIn = function (person) {
        if (!this.door) {
            throw new Error('Door is close');
        }
        this.tenants.push(person);
        console.log('Person inside');
    };
    return House;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyHouse.prototype.openDoor = function (key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('Key to another door');
        }
        return (this.door = true);
    };
    return MyHouse;
}(House));
var key = new Key();
var key2 = new Key();
var house = new MyHouse(key);
var person1 = new Person(key2);
house.openDoor(person1.getKey());
house.comeIn(person1);
