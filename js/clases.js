

console.log("---- Comenzamos a trabajar con clases ----")

// const car = {
//     brand: "VW",
//     doorsQuantity: 4,
//     automatic: false,
//     run: function () {
//         console.log(`El auto, de marca ${this.brand}, está arrancando.`)
//     } 
// }

// car.run()

class Car {
    constructor (brand, doorsQuantity) {
        this.brand = brand;
        this.doorsQuantity = doorsQuantity;
    }

    run() {
        console.log(`El auto, de marca ${this.brand} de ${this.doorsQuantity} puertas, está arrancando.`)
    }
}

class Truck extends Car {
    super() {}
    run() {
        console.log(`El camión, de marca ${this.brand} de ${this.doorsQuantity} puertas, está arrancando.`)
    }
}

const car1 = new Car("Ford", 5)
const car2 = new Car("Nissan", 3)

const truck1 = new Truck("Mercedes", 6)

// car1.run()
// car2.run()

truck1.run()

class Rectangle {
    constructor (width, height) {
        this.name = "Rectangle"
        if (height) {
            this.height = height
        } else {
            this.height = 0
        }
        if (width) {
            this.width = width
        } else {
            this.width = 0
        }
    }

    sayArea() {
        console.log(`El área del ${this.name}, es de ${this.height * this.width}`)
    }

    get area(){
        return this.height * this.width
    }

    set area(val) {
        this.height = this.width = Math.sqrt(val)
    }
}

const r = new Rectangle(4, 5);

r.sayArea()

console.log(r.area)

r.area = 25

console.log("Width", r.width)

class Square extends Rectangle {
    constructor (length) {
        super(length, length)
        this.name = "Cuadrado"
    }
}

const c = new Square(7)

c.sayArea()

const date = new Date()

console.log(date.getTime())