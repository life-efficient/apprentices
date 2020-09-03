console.log('hi')

x = 10
console.log(x)

array = [1, 2, 3]
obj = {
    attribute1: 'attr1', 
    attribute2: 2, 
    num: x
}

function myfunc(ar1, arg2) {
    console.log(arg1)
}

class Laptop {
    constructor(model, num_cpus) {
        console.log('my model is: ', model)
        this.num_cpus = num_cpus
    } 

    turn_on() {
        console.log('i am turned on')
        console.log('and i have ', this.num_cpus, 'cpus')
        this.save_file()
    }

    save_file() {
        console.log('saved')
    }
}

my_laptop = new Laptop('tensorbook', 16)
my_laptop.turn_on()

ayos_laptop = Laptop('mac', 12)
ayos_laptop.turn_on()
