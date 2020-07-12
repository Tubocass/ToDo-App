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


keys.createButton.addEventListener('click',e =>{
    e.preventDefault();
    // projectView.AddTask();
    if(!keys.projectView.contains(document.getElementById("projectModal")))
    {
        let inputModal = document.createElement('div');
        inputModal.setAttribute('id','projectModal')

        let taskString = document.createElement('input')
        taskString.setAttribute("type", "text");
        let taskDate = document.createElement('input')
        taskDate.setAttribute("type", "date");
        let submit = document.createElement('button')
        submit.innerHTML= "Submit"

        submit.addEventListener("click",()=>{
            let project = new Project(taskString.value,'', taskDate.value);
            const projectView = new ProjectView(project);
            projects.push(projectView);
            taskString.value = '';
            taskDate.value = '';
            inputModal.style.visibility = 'hidden';
           
        })

        inputModal.appendChild(taskString);
        inputModal.appendChild(taskDate);
        inputModal.appendChild(submit);
        keys.projectView.appendChild(inputModal);
    }else{
        document.getElementById("projectModal").style.visibility = 'visible';
        console.log(document.getElementById("projectModal").display);
    }
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