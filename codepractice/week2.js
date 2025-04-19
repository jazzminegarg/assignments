




















// function sum(a,b){
//     return a+b;
// }
// function parsesum(a,b){
//     return parseInt(a)+parseInt(b);
// }
// let ans=sum("20",3);
// let ans2=sum(20,3);
// console.log(ans);
// console.log(ans2);

// function add(n){
//     // let sum=0;
//     // for(let i=0;i<n;i++){
//     //     sum+=i+1;
//     // }
//     // return sum;
//     return n*(n+1)/2;
// }

// let as=add(5);
// console.log(as);


// const fs= require("fs");
// const contents = fs.readFileSync("a.txt", "utf-8");
// const content2 = fs.readFileSync("b.txt", "utf-8");
// console.log(contents + " "+content2);
//what is utf-8 -> if we do not write it it returns an array of bytes (a different specific encoding), so it is one way to repesent english characters
// readfile and readfileSync: asynchronous and synchronous
//CPU bound task ans I/O bound task
//CPU bound task: when the CPU is doing the work
//I/O bound task: when the CPU is waiting for the input/output to finish


//readfile function working asychronously

//first we understand the functional arguments 

//we want files to be read parallelly, for that we need asynchronus functioning

// fs=require("fs");

// function print(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// }

// const contents=fs.readFile("a.txt", "utf-8", print);
// const content2=fs.readFile("b.txt", "utf-8", print);
// console.log("Done");
// whenever this async function are done executing then call the read function
//now both start together and whenever one finishes it calls the print function

//we see that here done gets printed first because the read function is async and it takes time to read the file




//SETTIMEOUT - call a callback function after a certain time - async function
// console.log("Start");
// function timeout(){
//     console.log("Timeout");
// }
// setTimeout(timeout, 1000);  //clock starts somewhere in the background and it will call the function after 3 seconds like WebAPI
// console.log("End");

// let c=0;
// for(let i=0;i<1000000000;i++){ //3-4 seconds
//     c=c+1; 
// }
// console.log("Expensive CPU operation");
//here after 1 sec the thread wasnt free so first the loop finishes and then the timeout function executes


// setTimeout(()=>{
//     console.log("hi")
// },4000);

//asynchronous function are provided by the browser(Webapis),some functions are provided by js and some by browser, node js supoorts the asynchronous on top of js structure(js was never supposed to support the async functions)
//Synchronous settimeout

// function setTimeoutSync(timeout){
//     starttime=Date();
//     while(true){
//         if(Date()-starttime>=timeout){
//             break;
//         }
//     }
// }

// setTimeoutSync(1000)


//promises, async, await

//classes- blueprint of an object
//object - simply a key value pair
//class declaration - variables(properties) and functions for objects of that class
//no concept of deconstructuring in classes because js manages memory for us

// class Square{
//     constructor(length,color){
//         this.length=length;
//         this.color=color;
//     }
//     area(){
//         const area=this.length*this.length;
//         return area;
//     }
//     paint(){
//         console.log(`paint this with ${this.color}`);
//     }
// }

// const area1=new Square(5,"red"); //instance or object of the class
// area1.paint();
// console.log(area1.area());

// using js already created classes
// const date= new Date();
// console.log(date.getDate()); 
// const map= new Map(); --key value pairs
// map.set("name","harkirat");
// map.set("age",19);
// console.log(map.get("name"));


// function promiseCallback(resolve){
//     setTimeout(resolve,3000);
// }
// a wrapper over settimeout function

// function setTimeoutPromisified(ms){
//     let p= new Promise(resolve=>setTimeout(resolve,ms));
//     return p;
// }
//returns object of a Promise class
// function logname(){
//     console.log("hello");
// }
// settimeout(logname, 1000); //this is a callback function
//we can use callback approach or promise approach

//using a promise - object that represents the eventual completion or failure of an asynchronous operation and its resulting value
//more effeciently (cleaner and easier to read) than callback approach

// setTimeoutPromisified(3000).then(logname); //syntactically cleaner
// promiseCallback(logname); 


// promisified version of fs.readFile
// const fs=require("fs");
// function readFilePromisified(path){
//     const p=new Promise((resolve,reject)=>{
//         fs.readFile(path,"utf-8",(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         });
//     });
//     return p;
// }
// function print(data){
//    console.log(data);
// }
// readFilePromisified("a.txt").then(print);


function dosomething(resolve){
    setTimeout(resolve,8000);

}
function promisefunction(){
    return new Promise(dosomething)
}

function print(){
    console.log("hfvjuvheu");
}  

promisefunction().then(print);
console.log("Done");





// class Promise2{
//     constructor(fn){
//         fn(()=>{
//             this.resolve();
//         })
//     }

//     then(callback){
//         this.resolve=callback;
//     }
// }
