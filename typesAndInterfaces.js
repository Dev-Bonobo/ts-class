// diffrence b/w types and interfaces are types can't be extended as interfaces can 
// also you can't use types to implement classes 
// now u can use this Shape directly whenever u want to use the whole line 
function renderShape(shape) {
    console.log("rendered!!");
}
renderShape({
    radius: 10,
    height: 40,
    width: 30,
    side: 50
});
// 
