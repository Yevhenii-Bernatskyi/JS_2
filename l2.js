
//1.2.3 Object
let car1 = new Object();
car1.color = "black";
car1.maxSpeed = 310;
car1.driver = new Object();
car1.driver.name = "Eugen Bernatsky";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

//1.2.4 Literal
let car2 ={
    color: "black",
    maxSpeed: 310,
    driver: {
        name: "Eugen Bernatsky",
        category: "B",
        "personal limitations": null,
    },
    tuning: false,
    "number of accidents": 2,
    drive: function(){
        console.log("I can drive anytime");
    }
}

//1.2.5 car1.Drive
car1.drive = function(){
    console.log("I am not driving at night");
}

//1.2.6 car2.Drive
car2.drive = function(){
    console.log("I can drive anytime");
}

car1.drive();
console.log("=======");
car2.drive();
console.log("=======");

//1.2.7 Truck
function Truck(color, weight, avgSpeed, brand, model){
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;

    //1.2.9 method trip
    this.trip = function (){
        if(this.driver == undefined){
            console.log("No driver assigned");
        }
        else{
            console.log(`Driver ${this.driver.name}`);
            if(this.driver.nightDriving == true){
                console.log("drives at night");
            }
            else {
                console.log("does not drive at night");
            }
            console.log(`and has ${this.driver.experience} years of experience`);
        }
    }
}

//1.2.8 static method
Truck.prototype.AssignDriver = function(name, nightDriving, experience){
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    }
}

//1.2.10 add objects to truck
let truck1 = new Truck("red", 4000, 80, "Volvo", "FH16");
truck1.AssignDriver("Eugen", true, 2);
let truck2 = new Truck("blue", 5000, 75, "Scania", "R500");
truck2.AssignDriver("Vlad", false, 3);

truck1.trip();
console.log("=======");
truck2.trip();
console.log("=======");

//1.2.11 use classes
//1.2.12 class Square
class Square {
    a = 0;

    //1.2.13 constructor
    constructor(a){
        this.a = a;
    }

    //1.2.14 static help
    static help = function(){
        console.log("Square: a quadrilateral with all sides equal and all angles 90 degrees.");
    }

    //1.2.15 methods
    length(){
        return 4 * this.a;
    }

    square(){
        return this.a ** 2;
    }

    info(){
        console.log("=======");
        console.log(`Each side is ${this.a}`);
        console.log(`Each angle is 90 degrees`);
        console.log(`Perimeter is ${this.length()}`);
        console.log(`Area is ${this.square()}`);
    }
}

//1.2.16 class Rectangle
class Rectangle extends Square {
    b = 0;

    //1.2.17 recode methods
    constructor(a, b){
        super(a);
        this.b = b;
    }

    static help = function(){
        console.log("Rectangle: a quadrilateral with opposite sides equal and all angles 90 degrees.");
    }

    length(){
        return 2 * (this.a + this.b);
    }

    square(){
        return this.a * this.b;
    }

    info(){
        console.log("=======");
        console.log(`Each side is ${this.a} and ${this.b}`);
        console.log(`Each angle is 90 degrees`);
        console.log(`Perimeter is ${this.length()}`);
        console.log(`Area is ${this.square()}`);
    }

    //1.2.22 setter and getter
    set a(value){
        if(value > 0){
            this._a = value;
        }
        else{
            console.log("Invalid value");
        }
    }

    get a(){
        return super.a;
    }

    set b(value){
        if(value > 0){
            this._b = value;
        }
        else{
            console.log("Invalid value");
        }
    }

    get b(){
        return this.b;
    }
}

//1.2.18 class Rhombus
class Rhombus extends Square {
    alpha = 0;
    beta = 0;

    //1.2.19 recode methods
    constructor(a, alpha, beta){
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help = function(){
        console.log("Rhombus: a quadrilateral with all sides equal and opposite angles equal.");
    }

    length(){
        return 4 * this.a;
    }

    square(){
        return this.a ** 2 * Math.sin((this.beta * (Math.PI / 180)));
    }

    info(){
        console.log("=======");
        console.log(`Each side is ${this.a}`);
        console.log(`Angles are ${this.alpha} and ${this.beta}`);
        console.log(`Perimeter is ${this.length()}`);
        console.log(`Area is ${this.square()}`);
    }
}

//1.2.20 class Parallelogram extends Rhombus
class Parallelogram extends Rhombus {
    b = 0;

    //1.2.21 recode methods
    constructor(a, b, alpha, beta){
        super(a, alpha, beta);
        this.b = b;
    }

    static help = function(){
        console.log("Parallelogram: a quadrilateral with opposite sides equal and opposite angles equal.");
    }

    length(){
        return 2 * (this.a + this.b);
    }

    square(){
        return this.a * this.b * Math.sin(this.beta * (Math.PI / 180));
    }

    info(){
        console.log("=======");
        console.log(`Each side is ${this.a} and ${this.b}`);
        console.log(`Angles are ${this.alpha} and ${this.beta}`);
        console.log(`Perimeter is ${this.length()}`);
        console.log(`Area is ${this.square()}`);
        console.log("=======");
    }
}

//1.2.23 help
Square.help();
Rectangle.help();  
Rhombus.help();
Parallelogram.help();

//1.2.24 objects info
x1 = new Square(5);
x1.info();
x2 = new Rectangle(3, 6);
x2.info();
x3 = new Rhombus(4, 60, 120);
x3.info();
x4 = new Parallelogram(2, 5, 60, 120);
x4.info();



//1.2.25 function Triangular
function Triangular(a=3,b=4,c=5){
    return {a,b,c};
}

//1.2.26 objects 
ob1 = {a:0,b:0,c:0};
ob2 = {a:0,b:0,c:0};
ob3 = {a:0,b:0,c:0};

ob1= Triangular();
console.log(ob1);
ob2= Triangular(6,7,8);
console.log(ob2);
ob3= Triangular(13, 14,15);
console.log(ob3);

//1.2.27 function PiMultiplier
function PiMultiplier(x){
    function Pi(x1){
        return x1 * x;
    }
   return Pi;
}

//1.2.28 functions
let y1 = PiMultiplier(Math.PI);
console.log(y1(2));
let y2 = PiMultiplier(Math.PI);
console.log(y2(2/3));
let y3 = PiMultiplier(Math.PI);
console.log(y3(0.5));

//1.2.29 function Painter
function Painter(color){
    let Output = function(Object){
        if(Object.type == undefined){
            console.log("No ‘type’ property occurred!")
        }
        else console.log(`Object type is ${Object.type} and color is ${color}`);
    }
    return Output;
}

//1.2.30 color functions
let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

//1.2.31 demonstrate
object1 = {maxSpeed: 280, type: "Sportcar", color : "magenta"}
object2 = {type: "Truck", ["avg speed"]: 90, ["load capacity"]: 2400}
object3 = {maxSpeed: 180, color: "purple", isCar: true}

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);
