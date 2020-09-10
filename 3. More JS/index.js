// ES5 vs ES6

// arrow functions
function my_function(arg1, arg2) {
    console.log('yo')
}

my_function = (arg1, arg2) => {
    console.log('yo')
}

my_function = () => {}

// spread operator ...
a1 = [1, 2]
a2 = [3, 4]
a3 = [...a1, ...a2, 'hello']
console.log(a3)

obj1 = {a: 1, b: 2}
obj2 = {c: 3, d: 4}
obj3 = {greeting: 'yo'}
obj3 = {...obj3, ...obj1, ...obj2} //updating
obj4 = {...obj1, ...obj2} // make new obj
console.log(obj3)

product = {
    name: 'phone',
    price: 10
    // many many more keys
}


add_default_product_dets = (product) => {
    const store_name = 'harrys store'
    return {
        ...product,
        store_name // key is assigned to name of variable and value is value of variable
    }
}

print_product_main_details = ({name, price, random, ...rest}) => {
    console.log(name)
    console.log(price)
    console.log(random)
    console.log('other dets', rest)
}

print_product_main_details(product)


Object.keys(product).forEach((key)=>{console.log(product[key])})