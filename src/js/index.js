import Project from './Models/project';
import {keys} from './Views/reference';
import * as projectView from './Views/projectView'


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

const tasksList = new Project("Project 1", "Some project", new Date().toLocaleDateString("en-US"));
tasksList.addTask('Pickup cat from school.', new Date().toLocaleDateString("en-US"));
projectView.SetProject(tasksList);
projectView.renderProject();


keys.submitButton.addEventListener('click',e =>{
    e.preventDefault();
    tasksList.addTask(keys.taskInput.value, new Date(keys.taskDate.value).toLocaleDateString("en-US"));
    keys.taskInput.value = '';
    keys.taskDate.value = '';
    projectView.renderProject();
    
});

keys.deleteButton.addEventListener("click", () =>{
    for(let i =0; i< keys.listView.children.length; i++){
        console.log(i);
        if(keys.listView.children[i].firstChild.checked)
        {
            tasksList.deleteTask(i)
        }
    };
    projectView.renderProject();

 });


// console.log(tasksList);