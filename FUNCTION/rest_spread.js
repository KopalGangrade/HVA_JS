// JavaScript Rest & Spread Operator

// JavaScript uses three dots (...) for both the rest and spread operators. But these two operators are not the same.

// DESTRUCTUREING

// Destructuring assignment is used to unpack values from an array, or properties from objects into distinct variables.

// let arr=[2,5,6,8,9,2,4,1]
// let [a,b]=arr
// console.log(arr)

// let [a,,...rest]=arr
// console.log(a,rest)


// function myname(first,last,...other){
//     return other;
// }

// mywork=myname("color","hobby","game","skills");
// console.log(mywork);



// let arr1=[3,5,7] // spread
// function sum(v1,v2,v3){
//     return v1+v2+v3
// }
// console.log(sum(...arr1))



// let {a,b}={a:1,b:3}   // object
// console.log(a,b)



//REST  // shows all left values which is not wri


// function addNum(a,b,c,...number){
//     console.log(number)
//     return a+b+c;
// }

// const result=addNum(2,4,7,4,7,10)
// console.log(result)
// console.log(number)



// rest in object

let student={
    name:"kopal",
    age1:"22",
    hobby:["singing","dancing"]
}
// let age1=students.age;
let {...rest}=student;
console.log(rest)

// Spread oprator  // used to spread the values to the diffrent index

// let names=["kopal","nikita","sonali"];
//  function getnames(name1,name2,name3){
//     console.log(name1,name2,name3);
//  }
//  getname(names[0],names[1],names[2])
// getnames(...names)
// getnames(names)


//Spread 

let newStudent={
    ...student,
    age:"29"
}
console.log(newStudent)

