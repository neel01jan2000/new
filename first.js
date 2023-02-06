
// koi v function jo object key sath juda ho use hum METHOD bolegey
// WE CAN create method with four different type
// 1. creating oject with anoynomus function
let man ={
    firstname:'King',
    lastname:'kumar'
}
man.sayhello = function(){
    console.log("Hello King says");
}

man.sayhello();

// 2. creating function then assigning to object

let mohan ={ }
function greet(){
    console.log("Hello 2nd way to declare method says");
}
mohan.say = greet;
mohan.say();

// 3. creating  anoynomus function inside the object when its propeties are being defined
 let nemoh ={
    firstname: 'Mohit',
    nickname: 'King',
    saygreet :function(){
        console.log("Hello 3rd way to declare method says");
    }
 }
  nemoh.saygreet();

// 4. creating function inside object withour being writing function
 let troj ={
    height:'45',
    weight:'58kg',
    saybye (){
        console.log("Hellow 4th way to declare method says");
    }
 }
 troj.saybye();

//  "this" propertie is uses to acces the propeties of object if it's properies is being accesed within the object

// creating object or method with "new" keyword
// eg
 
var legend = new Object();
 legend.name="Bhagat Singh";
 console.log(legend.name);
 document.write(legend.name);

//  GETTER & SETTER fucntion
// agar hume ek aisa function caheye jo ki ek function ki tarah na likh kar
// balki ek properites ki tarah likhe uske liye hum get() & set() ka use karte hai
 
var boys={
    n1:"The boy name is Neel Avinash",
    //  getdetls = function(){
    //     return this.n1.toUpperCase();
    //  }
    // INSTED OF WRITTING THIS WE CAN USE GET FUNCTION

    get getdetls(){
        return this.n1.toUpperCase();
    }
    
};
console.log(boys.getdetls);

// set() function ka use data ki manuplate karne key liye karegey
 

// OBJECT CONSTRUCTURE ka use hum tab karegey jab hume ek se jada object cahiye, having same properies or value
// eg

function Student(first,last,age,cls){
    this.firstname = first;
    this.lastName = last;
    this.age = age;
    this.clss = cls;
}

var student1 = new Student("Rocky", "Bhai", "24", "12");
console.log(student1);

// To add propertie to Student object dynamically to all the object with different name but same value
// WE USE prototype function , due to which the related prperties will get added to all the obeject
// Syntax

// Student.prototype.nationality = "Indian";

// CREATING NESTED OBJECT
// syntax

var user ={
    id: 101,
    email: "email@gmail.com",
    personalInfo: {
        name: "abc",
        address: {
            street: "dfdih",
            city: "Patna",
            country: "India",
        }
    }
};
console.log(user);
console.log(user.personalInfo.address);



