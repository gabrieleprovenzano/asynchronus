function printAsyncName(callback, name) {

    setTimeout(function() {
      console.log('Hello');
      
      setTimeout(function() {
        console.log(name);
      }, 1000);
    }, 1000);
  }

  printAsyncName(function() {
    console.log('Callback executed');
  }, 'John');