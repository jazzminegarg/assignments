//value and type of variables in js can change

// let firstname="John";
// const age=56;
// var a = true;
// a="harkirat";
// a=67;

// console.log(firstname);
// console.log(age);
// console.log(a);



//only 2 ways to use variables should be const and let
//const is used to make the code stricter

//arrays
// let array1=[1,2,3,4,5];
// console.log(array1[0]);


//operators
// let sum =10+5;
// let age=19;
// let canvote = (age>18);
// console.log(canvote);


//functions- lets you define a process

// function greet(name){
//     return "hello " +name;
// }

// let a = greet("harkirat");
// console.log(a);


// function sum(a,b){
//     let totalsum = a+b;
//     return totalsum;
// }

// console.log(sum(5,3));
// console.log(sum("jasmine",3))

// function canvote(age){
//     // return age>18?true:false;
//     if(age>18){
//         console.log("yes he/she can vote");
//     }
//     else{
//         console.log("no he/she is not an adult");
//     }
// }

// let users=[1,2,3,4,5];
// function loop(users){
//     for(let i=0;i<users.length;i++){
//         console.log(users[i]);
//     }
// }

// loop(users);



// console.log(canvote(87));
///

//OBJECTS - collection of key value pairs
// let user1={
//     name:"Jasmine",
//     age:20,
//     gender:"female"
// }
// function greet(user){
//     console.log(user.age);
//     console.log(user.name);
// }
// greet(user1);


// function greetwithgender(user){
//     let a="Mr.";
//     if(user.gender=="female"){
//         a="Mrs.";
//     }
//     else if(user.gender=="others"){
//         a="Others";
//     }
//     console.log("Hi "+a+" "+user.name+", your age is "+user.age);
// }

// greetwithgender(user1);



let arr=[{
    name:"jasmine",
    age:20,
    gender:"female"/
},{
    name:"ritu",
    age:44,
    gender:"male"
},{
    name:"yash",
    age:14,
    gender:"male"
}];

// function input(arr){
//     // for(let i=0;i<arr.length;i++){
//     //     if(arr[i].age>18 && arr[i].gender=="male"){
//     //         console.log(arr[i].name);
//     //     }
//     // }

//     // let users=[];
//     // for(let i=0;i<arr.length;i++){
//     //     if(arr[i].age>18 && arr[i].gender=="male"){
//     //         users.push(arr[i].name);
//     //     }
//     // }
//     // return users;
// }

// console.log(input(arr));

let users=[];
function useragegender(user){
    if(user.age>18&&user.gender=="male"){
        users.push(user.name);
    }
}

arr.filter(useragegender);
console.log(users);
