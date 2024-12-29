// Imediately invoked Function Expressions (IIFE)

(function yo(){
    //named iife
    console.log(`DB CONNECTED`);
})(); //required semicolon tu end

( (name) => {
    console.log(`DB CONNECTED two ${name}`);
})("aryan")