const fs=require('fs');
const {Command} = require('commander');
const program= new Command();


program 
    .name("todo")
    .description("to manipulate a todo list")
    .version("0.7.0")


program.command('addtodo')
    .description("Adds a todo to the list++")
    .argument('<string>','string to add')
    .action((str)=>{
        fs.readFile('todos.json','utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                const todos=data?JSON.parse(data):{todolist:[]}
                const index=todos.todolist.findIndex(todo=>{
                    return todo.item === str;
                });
                console.log(index);
                if(index==-1){
                    todos.todolist.push({
                        index:todos.todolist.length+1,
                        done: false,
                        item:str
                    });
                    console.log(todos.todolist);
                    fs.writeFile('todos.json',JSON.stringify(todos,null,2),'utf-8',(err)=>{
                        if(err){
                            console.log(err);
                        }
                        else{
                            console.log('todo added');
                        }
                    });

                }
                else{
                    console.log('already added');
                }
                

            }
        })
    })

program.command('deletetodo')
    .description('lets you delete a todo from your list')
    .argument('<string>','give the todo to be deleted')
    .action((str)=>{
        fs.readFile('todos.json','utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                const todos= JSON.parse(data);
                if(todos.todolist.length==0){
                    console.log('the list is already empty');
                }
                else{
                    const index=todos.todolist.findIndex(todos=>{
                        return todos.item==str;
                    });
                    if(index==-1){
                        console.log('Not found');
                    }
                    else{
                        todos.todolist.splice(index,1);
                        fs.writeFile('todos.json',JSON.stringify(todos,null,2),err=>{
                            if(err){
                                console.log(err);
                            }
                            else{
                                console.log('deleted');
                            }
                        })
                    }
                    
                }
            }
        })
    })


program.command('markasdone')
    .description('mark or unmark your todo')
    .argument('<string>','string to be marked as done')
    .action((str)=>{
        fs.readFile('todos.json','utf-8',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                const todos=JSON.parse(data);
                const index=todos.todolist.findIndex(todos=>{
                    return todos.item==str;
                });
                if(index==-1){
                    console.log('Not found');
                }
                else{
                    todos.todolist[index].done = !todos.todolist[index].done;
                    console.log(todos.todolist[index].done);
                    fs.writeFile('todos.json',JSON.stringify(todos,null,2),err=>{
                        if(err){
                            console.log(err);
                        }
                        else{
                            console.log('toggled');
                        }
                    })
                }
                
            }
        })
    })

program.parse();