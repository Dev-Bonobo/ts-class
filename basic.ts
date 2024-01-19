// interface, nums and 


// points to remember 
// 1) all interfaces names start with capital letters 
// 2) what are class? Classes are where we can able to define constructors as well as some functions which we have to use in later code 
// but in interfaces wee can define only some variales in short interfaces can be compared to struct in C while classes are compared to class in oops concepts of CPP


// interface PersonInterface {
//     name : string ;
//     age : number ;
//     greet() : string 
// }

// class Person implements PersonInterface{
//     name : string; 
//     age : number;

//     constructor(name, age){
//         this.name = name ,
//         this.age = age ;
//     }
//     greet(): string {
//         return "hi " + this.name  + " you are a good guy"; 
//     }
// }

// interfaces may use other interfaces too 
interface PersonGenderDetails{
    gender : string, 
    pronouns : string 
}

interface Person {
    name : string, 
    age : number, 
    persongender : PersonGenderDetails
}


function greet1(person : Person): string{
    return "hi " + person.name + " and you are " + person.age + " years old, also more info is " + person.persongender.gender + person.persongender.pronouns

}

const persondetails = {name : "Ashutosh", age : 20, persongender :{gender: "male", pronouns : "he/him"}}

console.log(greet1(persondetails
))

// use of extended 

// interface PersonGenderDetails {
//     gender : string, 
//     pronouns : string 
// }

// interface Person extends PersonGenderDetails{   //and this line will auto generate PersonGenderDetails inside the object declaration as same as done previously

//     name : string, 
//     age : number, 
    
// }


// to use the optional properties in TS
interface NewInterface{
    optionalProp ?: string,
    definiteProp : string
}
