function printAsyncName(callback, name) {
  setTimeout(function () {
    callback();
    setTimeout(function () {
      console.log(name);
    }, 1000);
  }, 1000);
}

function sayHello() {
  console.log("Hello");
}

printAsyncName(sayHello, "Gabriele Provenzano");