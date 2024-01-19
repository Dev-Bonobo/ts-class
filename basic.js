// interface, nums and 
function greet1(person) {
    return "hi " + person.name + " and you are " + person.age + " years old, also more info is " + person.persongender.gender + person.persongender.pronouns;
}
const persondetails = { name: "Ashutosh", age: 20, persongender: { gender: "male", pronouns: "he/him" } };
console.log(greet1(persondetails));
