// Original object
const original = { name: "John", address: { city: "New York" } };

// Shallow copy using Object.assign
const shallowCopy = Object.assign({}, original);
console.log(shallowCopy); // { name: "John", address: { city: "New

// Modify the shallow copy
shallowCopy.address.city = "Los Angeles";

// Both objects now reflect the change
console.log(original.address.city); // Output: "Los Angeles"
console.log(shallowCopy.address.city); // Output: "Los Angeles"
