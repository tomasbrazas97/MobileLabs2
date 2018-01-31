"use strict";
var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log("String has been added:" + task);
    return myArray.length;
}
function listAllTasks() {
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var item = myArray_1[_i];
        console.log(item);
    }
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Task has been deleted:" + task);
    }
    return myArray.length;
}
addTask("test");
listAllTasks();
deleteTask("test");
