//Printing two different functions; one with let and the other with var
(function(){
    if(true){
        let count = 2;
        console.log(`count is ${count}`)
    }
})();
(function(){
    if(true){
        var count = 2;
    }
    console.log(`count is ${count}`)
})()