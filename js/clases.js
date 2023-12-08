

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