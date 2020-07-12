import Project from './Models/project';
import {keys} from './Views/reference';
import ProjectView from './Views/projectView'


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

// const tasksList = new Project("Project 1", "Some project", new Date().toLocaleDateString("en-US"));
// tasksList.addTask('Pickup cat from school.', new Date().toLocaleDateString("en-US"));
// projects.push(tasksList);
// const projectView = new ProjectView();
// projectView.SetProject(tasksList);
// projectView.RenderProject();

// projects.forEach(

// )
// keys.submitButton.addEventListener('click',e =>{
//     e.preventDefault();
//     tasksList.addTask(keys.taskInput.value, new Date(keys.taskDate.value).toLocaleDateString("en-US"));
//     keys.taskInput.value = '';
//     keys.taskDate.value = '';
//     projectView.renderProject();
    
// });

keys.createButton.addEventListener('click',e =>{
    e.preventDefault();
    // projectView.AddTask();
    let inputModal = document.createElement('div');
    let taskString = document.createElement('input')
    taskString.setAttribute("type", "text");
    let taskDate = document.createElement('input')
    taskDate.setAttribute("type", "date");
    let submit = document.createElement('button')
    submit.innerHTML= "Submit"

    submit.addEventListener("click",()=>{
        console.log('click');
        let project = new Project(taskString.value,'', taskDate.value);
        const projectView = new ProjectView(project);
        projects.push(projectView);

        // keys.inputModal.style.display = 'hidden';
        taskString.value = '';
        taskDate.value = '';
        
    })

    inputModal.appendChild(taskString);
    inputModal.appendChild(taskDate);
    inputModal.appendChild(submit);
    keys.projectView.appendChild(inputModal);
    
});
keys.deleteButton.addEventListener("click", () =>{
    for(let i =0; i< keys.listView.children.length; i++){
        console.log(i);
        if(keys.listView.children[i].firstChild.checked)
        {
            tasksList.deleteTask(i)
        }
    };
    projectView.RenderProject();

 });


// console.log(tasksList);