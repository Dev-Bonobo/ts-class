// diffrence b/w types and interfaces are types can't be extended as interfaces can 
// also you can't use types to implement classes 



// declaration of interfaces and types are almost same only diffrence is of equal to 
 

// also types make use of each other tyeps as well as interfaces 

// interface PersonGender{
//     gender : string 
// }


// type Personinterface = {
//     name : string, 
//     age : number
//     personGender : PersonGender
// }

// function greet(guy : Personinterface) : string {
//     return "hey " + guy.name + " your age is " + guy.age;
// }

// console.log(greet({
//     name : "Ashutosh",
//     age : 20,
//     personGender : {gender : "male"}
// }))



// use of ors and unions 

interface Circle{
    radius : number
}
interface Square{
    side : number
}
interface Rectangle{
    height : number,
    width : number 
}

type Shape = Circle | Square | Rectangle; 

// now u can use this Shape directly whenever u want to use the whole line 

function renderShape(shape : Shape){   //now insuch function u may have to use statement Circle | Square | Rectangle repeteadly so we assign them to a value 
    console.log("rendered!!")

}
renderShape({
    radius : 10,
    height : 40, 
    width : 30,
    side : 50
})


// 