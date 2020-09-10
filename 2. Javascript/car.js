class Car {
    constructor(model, age) {
        this.model = model
        this.age = age
        this.fuel = 10
        this.passengers = []
    }

    drive () {
        this.fuel -= 1
    }

    get_in (name) {
        this.passengers.push(name)
    }
}

car = new Car('chevy', 1969)
console.log(car.fuel)
car.drive()
console.log(car.fuel)
console.log(car.passengers)
car.get_in('harry')
console.log(car.passengers)