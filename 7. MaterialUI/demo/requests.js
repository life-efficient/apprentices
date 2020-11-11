const fetch = require("node-fetch");


f = async () => {
    var r = await fetch('https%3A%2F%2Fm0tccb6wy4.execute-api.eu-west-1.amazonaws.com%2Fproduction%2Fcomments')
    console.log(r)
}

f()
