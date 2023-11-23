//Write a first promise that takes as parameter the variable isLogged . If the variable is true, then we return a random number from the resolve, otherwise we dispatch an error. We write a second promise that takes a variable of type number as a parameter. If the input parameter is greater than 0.5, in the resolve we must return the following data: {name: "John", age: 24}, otherwise we must dispatch an error. Once this is done, try to chain the promises to eventually return the final object {name: "John", age: 24}

function FirstPromise(isLogged) {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            resolve(Math.random());
        } else {
          reject(new Error("Error"));
        }
})
}

function SecondPromise(inputNumber) {
    return new Promise((resolve, reject) => {
      if (inputNumber > 0.5) {
        resolve({ name: "John", age: 24 });
      } else {
        reject(new Error("Input number is not greater than 0.5"));
      }
    });
  }

  FirstPromise(true)
  .then((rand) => {
    console.log(rand);
    return SecondPromise(rand);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Error");
  });