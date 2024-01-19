// how to declare array in ts 

type arrType = number[] | string[]
function firstIndex(arr : arrType): (string | number) {
    return arr[0];
}

let x = firstIndex([12,3,4,5]);
let y = firstIndex(["dark", "world", "this is hell world", "never ever get heel from this"])
console.log(x);
console.log(y);

// concept of generics which is used to improve some mofre stickness towards types

function firstIndexGenerics<T>( arr : T[]) : T{
    return arr[0];
}
let a = firstIndexGenerics<number>([12,3,4,5]);
let b = firstIndexGenerics<string>(["dark", "world", "this is hell world", "never ever get heel from this"])

console.log(a);
console.log(b);

// swap function assignment 
function swap<B, U>(a : B, b : U) : [U, B] {

    return [b, a]; 
}

let ans = swap("hey", 1);
console.log(ans);

// Partials in TS: they used to allow user to enter partial data among complete type of dataset 
interface Todo{
    title : string, 
    description : string , 
    id : number , 
    done : boolean 
}

type UpdateTodoInput = Partial<Todo>

function updateTodo(id : number, udpatetype : UpdateTodoInput){

}
updateTodo(1, {
    description : "lorem300"
})