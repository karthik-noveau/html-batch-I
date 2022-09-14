//pop up box or dialog box

//alert("Hello");
//confirm("Are you leave This page");
//prompt("Enter your value");


if (true) {
    let b = 20;
    b=20
    b = 1000;
    console.log("This is block scope " + b);
}
var c = 10;
var c= 20;
let d= 20;
    

// integer
// String
// Boolean
// null-objrct
// undefined
// Symbol--object

// array

// object


var a = 10; //integer
var b = "10"; // string

console.log(a == b);

undefined
var a = 10; //integer
var b = "10"; // string

console.log(a === b);

// named function
//Anonmous function
// Arrow Function - ES6 feature
// immediatley innovoked function ( IIF) 
const myF =function myFunc() {
    let a = 100;
    console.log("This is function " + a);
}
myF();

(
    ()=> console.log("This is immmediately innnoked function ")
)()

// Events
//      onclick ()
//      onChange ()
//      onmousover ()
//      onfouus ()
//      onmousedown ()

function buttonHandler(){
    document.getElementById("txt").innerHTML="Hai i'm from button";
    document.getElementById("twt").style.color="red"
    
    confirm("Are you sure to update the content");
}   


