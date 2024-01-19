// how to declare array in ts 
function firstIndex(arr) {
    return arr[0];
}
var x = firstIndex([12, 3, 4, 5]);
var y = firstIndex(["dark", "world", "this is hell world", "never ever get heel from this"]);
console.log(x);
console.log(y);
// concept of generics which is used to improve some mofre stickness towards types
function firstIndexGenerics(arr) {
    return arr[0];
}
var a = firstIndexGenerics([12, 3, 4, 5]);
var b = firstIndexGenerics(["dark", "world", "this is hell world", "never ever get heel from this"]);
console.log(a);
console.log(b);
// swap function assignment 
function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
    return arr;
}
var ans = swap(["hey", "Buddy"]);
console.log(ans);
