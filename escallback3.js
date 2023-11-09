function repeatHello (callback , n) {
    let Hello = setInterval(callback , 5000)
    setTimeout(()=> clearInterval(Hello), 5000 * n)
}

repeatHello(()=> console.log("hello"), 5);