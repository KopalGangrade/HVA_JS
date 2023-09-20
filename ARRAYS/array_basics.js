
const myarr=[3,4,7,9,12]

// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// 1]JavaScript arrays are resizable and can contain a mix of different data types. 
//2]JavaScript arrays are not associative arrays but array elements cannot be accessed using arbitrary strings as indexes
// 3]JavaScript array-copy operations create shallow copies. 

// SHALLOW COPY--> shallow copy of an object is a copy whose properties share the same references

// deep copy --> in which the source and copy are completely independent.

// Two objects o1 and o2 are structurally equivalent if their observed behaviors are the same. These behaviors include:

// The properties of o1 and o2 have the same names in the same order.
// The values of their properties are structurally equivalent.
// Their prototype chains are structurally equivalent (although when we deal with structural equivalence, these objects are usually plain objects, meaning they both inherit from Object.prototype).



// SHALLOW COPY--> shallow copy of an object is a copy whose properties share the same references

// More formally, two objects o1 and o2 are shallow copies if:

// They are not the same object (o1 !== o2).
// The properties of o1 and o2 have the same names in the same order.
// The values of their properties are equal.
// Their prototype chains are equal.




const name2= new Array(1,4,7,9,3,6)
console.log(name2[3]);  // 9



