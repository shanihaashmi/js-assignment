//take user input
let name=prompt("Enter your name!", "shan");
console.log(name);


//String methods

let str="This is my assignment";

//search

let s=str.search("is");
console.log(s);   //output:5

//slice
let v=str.slice(3, 8);
console.log(v);   //output:s is my 

//substring
let x=str.substring(11, 14);
console.log(x);     //output:assi

let x=str.subst(11);
console.log(x);     //output:assignment

//replace

let n=str.replace("is", "are");
console.log(n);    //output:this are my assignment

//concat
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);  //output:Hello World


let text = "Hello" + " " + "World!";
let text = "Hello".concat(" ", "World!");  //output:Hello world

//trim
let str = "       Hello World!        ";
alert(str.trim());      //output: Hello World

//charAt()
let str = "HELLO WORLD";
str.charAt(0);            // returns H


//Array

let arr=['one', 'Two', 'Three', 'Four', 'Five'];

//delete
console.log(arr.splice(2, 1, "Five", "two"));
console.log(arr);  //output:let arr=['one', 'Two', 'Five',"two", 'Four', 'Five']

//concat
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys

//slice
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(3);   //output:Apple, Mango




