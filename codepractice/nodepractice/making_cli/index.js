const fs=require('fs');
const { Command } =require('commander');
const program = new Command();

program
    .name('counter')
    .description('CLI to do file based tasks')
    .version('0.8.0');

program.command('count')
    .description('Count the number of lines in a file')
    .argument('<file>','file to use')
    .action((file)=>{
        fs.readFile(file,'utf-8',(err,data)=>{
            if(err){
            console.log(err);
            }
            else{
                const lines=data.split('\n').length;
                console.log("there are "+ lines+ " lines in "+file);
            }
        })
    })

program.parse();