get_products = () => {
    setTimeout(()=>{
        // console.log('got the products')
        const products = ['a', 'b']
        return products
    }, 2000)
}

get_products_promise = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log('got the products')
            const products = ['a', 'b']
            try {
                resolve(products)
            }
            catch {
                reject(Error('there was an error'))
            }
        }, 5000)
    })
}

get_products_async = async () => {
   const products = await get_products_promise()
   return products
}

get_special_deals = (products) => {
    // setTimeout(()=>{console.log('got the indices of the specials')}, 5000)
    const special_idx = 1
    console.log(products[special_idx])

}

// const products = get_products()
// get_products_promise()
// .then(get_special_deals)
// .catch(()=>{})
// get_special_deals(products)

// async/await

const p = get_products_async()
console.log(p)