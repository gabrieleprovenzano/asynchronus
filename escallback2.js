function repeatHello (callback , n) {
     let Hello = setInterval(callback , 1000)
     setTimeout(()=> clearInterval(Hello), 1000 * n)
}

repeatHello(()=> console.log("hello"), 5);