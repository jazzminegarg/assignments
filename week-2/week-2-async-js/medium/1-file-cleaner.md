// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```



let fs=require('fs');
fs.readFile('a.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        let j=data.replace(/\s+/g,' ');
        console.log(j);
    }
})
