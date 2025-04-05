"use strict";
let quantity = 50;
function greet(name) {
    return name ? `Hello, ${name}!` : "Hola, amigo!";
}
function getCustomer(id) {
    return id === 1 ? { birthdate: new Date() } : null;
}
console.log(getCustomer(1));
console.log(getCustomer(2));
//# sourceMappingURL=index.js.map