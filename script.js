document.write("Neel Welcome Back");
document.write("<br>");


// let age = 15;
// let hasVoterCard = 'Yes';
// if(age>=14 && hasVoterCard == 'Yes'){
//     alert("You can vote!");
// }else if(age>=14 && hasVoterCard != 'Yes'){
//    alert("Get your voter id"); 
// }
// else{
//     alert('You cannot vote');
// }

// ternery operator
let isLoggedin = 1;
let option = isLoggedin == 1 ? "Logout" : "Login";
document.write(option);

// while loop
let counter = 1;
while (counter <= 10) {
    document.write("Neel Avinash ");
    document.write("<br>");
    counter++;
}

// while loop
let count = 1;
let sum = 0;
while (count <= 100) {
    if (count % 2 == 0) {
        sum = sum + count;
    }
    count++;
}
document.write(sum);
document.write("<br>");
document.write("<br>");

// DO while loop(will execute atleat on time whether the condition is true or false)
let digit = 4;
do {
    document.write('Hello to do loop');
    document.write("<br>");
    digit++;
} while (digit <= 10);

// for loop()
for (let num = 1; num <= 5; num++) {
    document.write('Welcome Neel');
    document.write("<br>");
    document.write("<br>");
}
// Break loop 
for (let nuk = 1; nuk <= 10; nuk++) {
    if (nuk == 6) {
        break;
    }
    document.write(nuk);
    document.write("<br>");
}
//  continue (it will not print the output & will continue while excaping the loop)
for (let number = 1; number <= 10; number++) {
    if (number == 1) {
        continue;
    }
    document.write(number);
}

// Array 

let book = ["Math", "Bio", "English", "Computer"];
// to upadate in array like replace bio with hindi
book[1] = "Hindi";
console.log(book[1]);
document.write("<br>");
// * OPERATION IN ARRAY
document.write("<br>");

let car = ["Volvo", "BMW", "Audi", "Honda"];
document.write(car);

document.write("<br>");

document.write(car.length);
// IN ARRAY
// .push function is used to add array element in last index
// .unshift function is used to add array element in first index
// .pop function is used to remove element from the last index of array
// .shift function is used to remove element from the first index of the array
// .splice function is used to remove specific element & no. of element after that
// splice eg:
document.write("<br>")
let tag = ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"];
// suppose if we want to remove element from 4th index & 2 element after that
tag.splice(4, 3)
document.write(tag);

// .indexOf function is used to know the position of element in array by writing the element name
// .isArray function is used to know if it is variable or array

// TO CONVERT DATA INTO AN ARRAY
// .split is used (eg:)
document.write("<br>")

let sentce = "This the text to change in array ";
let wrdarray = sentce.split(' ');
let chartersplit = sentce.split('t');
document.write(wrdarray);
document.write("<br>")
document.write(chartersplit);

// .join function is used to add or join the element of the array

// TO MERGE MULTIPLE ARRAY IN SINGLE ARRAY
// .conact() is used for this
document.write("<br>")

let b1 = ["Math", "English", "Hindi"];
let b2 = ["Japanese", "Urdu"];
let b3 = ["345", "tie2"];

let Newb = b1.concat(b2, b3);
document.write(Newb);
document.write("<br>")
document.write("<br>")


// MULTI DIMENSIONAL ARRAY

let pagesofbook = [
    ["Physics", " has 500 pages"],
    ["Math",
    ["Chapter 1","has 9 pages"],
    ["Chapter 2","has 10 pages"]
    ],
    ["English","Biology"],
];
    let abtphy = pagesofbook[0];
    let abtmath = pagesofbook[1][2];

    document.write(abtphy);
    document.write("<br>")
    document.write(abtmath);
    document.write("<br>")

    // Accesing array element usign for loop
     let cars = ["Math", "Physics","Bio","Computer"];
     let carslength = cars.length;

     for(i = 0; i < carslength; i++){
        console.log('${cars[i]} \n');
     }
    //  Accesing array element using forEach() function
     let namen =["Neel", "Avinash","Mohit","Gaurev"];

     namen.forEach(myfu);
     function myfu(value){
        console.log(value);
     }

    //  FUNCTION IN JAVASCRIPT
     for(i=1; i<=10; i++){
        document.write(`2 x ${i} = ${2*i}`);
        document.write("<br>");
     }
    //  CREATING FUNCTION USING PARAMETER AND FUNCTION
    document.write("<br>")
function Mytable(num /*it is called PARAMETER of the the function, & value passed in the parameter is called ARGUMENT*/){
    for(i=1; i<=10; i++){
        document.write(`${num} x ${i} = ${num*i}`);
        document.write("<br>");
    }
}
// here we call the function
Mytable(8);
   
//  TO pass Multiple ARGUMENT in the function

function add(...arguments){
    if(arguments.length == 0){
        document.write("No Parameter Pass")
    }else{
        let sum=0;
        for(i=0; i < arguments.length; i++){
            sum = sum + arguments[i];
        }
        document.write(sum);
    }
}
add(86,14);
document.write("<br>");
// Also we can do like this
     let addition = add;
     addition(3,7); /*This will also give the same result*/
    
// ANOYNOMUS FUNCTION(to which no name is assigned)Eg:

let show = function(){
    console.log("Hello World");
}
show();
document.write("<br>");
// IMMEDIATELY INVOKED FUNCTION(means turant execute kare ga jaise hi loop khatam hoga)
// eg:

(function (){
    let string = "HELLO INVOKED FUNCTION";

    console.log(string);
    alert(string);
})();


document.write("<br>");
// using this kind of syntax we can execute function immediately


// OBJECT IN JAVASCRIPT

let person={ 
    firstname : 'Neel',
    lastname : 'Avinash',
    age : '23'
}
// can delete the properties of object by
delete person.lastname;

// can be accesed by 1:
console.log(person.firstname);
document.write(person.firstname);
// Or 
document.write(person['lastname']);
     
// TO Check if height properties is present or not in object person
 
console.log('height' in person); /*This (in) operator will give true or false*/

// TO ITTERATE i.e print ALL the properties of the object (WE CAN USE FOR in LOOP)
document.write("<br>");
for(let key in person){
    document.write(key +" :" + person[key]);
}
document.write("<br>");