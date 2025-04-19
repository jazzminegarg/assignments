// setTimeout(() => {
//     console.log("hi");
// }, 1000);
// setTimeout(() => {
//     console.log("hello");
// }, 4000);
// setTimeout(() => {
//     console.log("hello there");
// }, 9000);
//cannot do this because the problem statement asks to run the clock after each log


// setTimeout(() => {
//     console.log("hi");
//     setTimeout(() => {
//         console.log("hello");
//         setTimeout(() => {
//             console.log("hello there");
//         }, 5000);
//     }, 3000);
// }, 1000);
// console.log("outside the callback hell");
//callback hell


//promisified version
// function setTimeoutPromisified(ms){
//     const p=new Promise(resolve=>{
//         setTimeout(resolve,ms);
//     });
//     return p;
// }

// setTimeoutPromisified(1000).then(()=>{
//     console.log("hi");
//     setTimeoutPromisified(3000).then(()=>{
//         console.log("hello");
//         setTimeoutPromisified(5000).then(()=>{
//             console.log("hello there");
//         })
//     })
// })
// console.log("outside the callback hell");

// PROMISE CHAINING
// function setTimeoutPromisified(ms){
//     const p=new Promise(resolve=>{
//         setTimeout(resolve,ms);
//     });
//     return p;
// }

// setTimeoutPromisified(1000).then(()=>{
//     console.log("hi");
//     return setTimeoutPromisified(3000)})
//     .then(()=>{
//         console.log("hello");
//         return setTimeoutPromisified(5000)})
//         .then(()=>{
//             console.log("hello there");
//         })
// console.log("outside the callback hell");



// async and await - async code that looks like sync code 
//syntactic sugar over promises(in real return promises but looks like sync code)

// function setTimeoutPromisified(ms){
//     const p=new Promise(resolve=>{
//         setTimeout(resolve,ms);
//     });
//     return p;
// }
// async function solve(){
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hello");
//     await setTimeoutPromisified(5000); 
//     console.log("hello there");
// }

// solve();
// console.log("outside the callback hell");

class MyPromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.callbacks = [];

        const resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.callbacks.forEach((callback) => callback());
            }
        };

        const reject = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.value = reason;
                this.callbacks.forEach((callback) => callback());
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled) {
        return new MyPromise((resolve, reject) => {
            const handleCallback = () => {
                try {
                    const result = onFulfilled(this.value);
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            };

            if (this.state === "fulfilled") {
                handleCallback();
            } else if (this.state === "pending") {
                this.callbacks.push(handleCallback);
            }
        });
    }
}