//Write a promise. If the variable called number is greater than 10, then it returns a resolve, otherwise it returns a reject. Then manage the promise with then and catch in case of any reject.

const num = 8;

let promise = new Promise((resolve, reject) => {
    if (num > 10) {
        resolve ("Logged")
    } else {
        reject ("not Logged")
    }
})

promise
    .then ((data)=> console.log(data))
    .catch((err)=> console.log(err))