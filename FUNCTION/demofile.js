// note - empty value and undefined values are false.

// function name1(){
//     console.log("Hello World!");
// }
// name1();



// Add to numbers using Function
// function add(a,b){
//     c=a+b;
//     console.log(c);
// }
// const result=add(3,5);
// console.log(result);  // 8  undefined


// function add(a,b){
    // let result=a+b;     // first way to print
    // return result

    // return a+b;        // second way to print
    // console.log("kopal");    it will not print anything because after return it will not work.
// }
// const result=add(3,5);
// console.log(result);  


// function login(username1){
//     return `${username1} just logged in`
// }

// console.log(login("kopal"))

// when you will not pass value so output will come undefined


// function a(b){
//     if (b===undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${b} just logged in`
// }
// console.log(a()); // if arguments will not pass to function then output will come undefined.

// function a(b){
//     if (!undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${b} just logged in`
// }
// console.log(a()); 

// function a(b){
//     if (undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${b} just logged in`
// }
// console.log(a());


//DEFAULT VALUES

// function a(b="kps"){
//     if (!a){
//         console.log("please enter a username");
//         return
//     }
//     return `${b} just logged in`
// }
// console.log(a("kl")); 


// rest operator in function

function calculateCartPrice(val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,100,234,244))


// object in function

const user={
    username: "kopal",
    price: 3000
}

function handleObject(anyobject){
    console.log(`usernam is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);


handleObject({
    username:"sam",
    price:400
})


const myArray=[20,30,40,10]
function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myArray))