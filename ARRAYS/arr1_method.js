
const color=["red","black","pink","green"]
const room=["desk","pen","laptop","charger"]

// const result=color.concat(room);
// console.log(result);

// const result=[...color,...room]
// console.log(result)

const another_arr=[2,3,5,[5,9],12,[9,5,3,[2,6]]]

const real_arr=another_arr.flat(Infinity)  // used to open nasted list into single element
console.log(real_arr) //  [2, 3, 5, 5, 9,12, 9, 5, 3, 2,6]

console.log(Array.isArray([1,6,3,"kopal"])); // checks array is or not


console.log(Array.from("kopal")); // convert string into array

console.log(Array.from({name:"kopal"}));  // in object, it gives empty array


let score1=100
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))