import {todoInterface} from './functions2';

class Todo implements todoInterface{
constructor(){}
myArray:Array<String> = [];

 addTask(task: String) : number
{
    this.myArray.push(task);
    console.log("String has been added:" + task);
    return this.myArray.length;
}

 listAllTasks() : void
{
    for (let item of this.myArray)
    {
        console.log(item);
    }
}

 deleteTask(task: String) : number
{
    let index : number = this.myArray.indexOf(task);

    if (index > -1)
    {
        this.myArray.splice(index, 1);
        console.log("Task has been deleted:" + task);
    }
  
    return this.myArray.length;
}
}
