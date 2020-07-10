import Project from './Models/project';
import {keys} from './Views/reference';
import * as TaskView from './Views/projectView'


/*

Render projects

projectName - description
dueDate
    tasks  -- Add New
    .
    .
    .
projectName - description
dueDate
    tasks  -- Add New
    .
    .
    .


*/

const projects = [];

const tasksList = new Project();
tasksList.addTask(0,'Pickup cat from school.', new Date(), 0, 'none');
keys.submitButton.addEventListener('click',e =>{
    e.preventDefault();
    tasksList.addTask(keys.taskInput.value, keys.taskDate.value);
    TaskView.ClearList();
    TaskView.RenderList(tasksList.list);
    //console.log('do stuff');
});

console.log(tasksList);