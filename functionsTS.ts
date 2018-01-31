let myArray:Array<String> = [];

function addTask(task: String) : number
{
    myArray.push(task);
    console.log("String has been added:" + task);
    return myArray.length;
}

function listAllTasks() : void
{
    for (let item of myArray)
    {
        console.log(item);
    }
}

function deleteTask(task: String) : number
{
    let index : number = myArray.indexOf(task);

    if (index > -1)
    {
        myArray.splice(index, 1);
        console.log("Task has been deleted:" + task);
    }
    return myArray.length;
}

addTask("test");
listAllTasks();
deleteTask("test");