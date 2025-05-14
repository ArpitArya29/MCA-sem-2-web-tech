// FUNCTIONS IN JAVASCRIPT


// Normal function
// function test(){
//     console.log("Hello MCA IIA");
// }
// test();


// Argumented function
// function with arguments
// function test(x,y){
//     return x+y;
// }
// console.log(test(4,5));


// function with dafault value
// function test(a, b=10){
//     return a+b;
// }
// console.log(test(5));


// function as expression
// let t = function test(x,y){
//     return x+y;
// }
// console.log(t(4,9));


// anonymus funtion
// let f = (x,y)=>{
//     return x+y;
// }
// console.log(f(4,1));


// IIFE (Immediately Invoked Function Expresion)
(function test(x,y){
    console.log(x+y);
})(4,6);