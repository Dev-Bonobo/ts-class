var Arithmetic;
(function (Arithmetic) {
    Arithmetic[Arithmetic["add"] = 0] = "add";
    Arithmetic[Arithmetic["sub"] = 1] = "sub";
    Arithmetic[Arithmetic["mul"] = 2] = "mul";
    Arithmetic[Arithmetic["div"] = 3] = "div";
})(Arithmetic || (Arithmetic = {}));
function Calci(a, b, type) {
}
let c = Calci(1, 2, Arithmetic.add);
console.log(c);
