import {keys} from './reference';
import {renderTask} from './taskView';
import Project from '../Models/project';


export default class ProjectView{
    constructor(project = new Project())
    {
        this.project = project;
        this.projectViewPort = document.createElement('div')
        this.projectViewPort.setAttribute('name','project')

        this.projectDescription = document.createElement('div')
        this.listView = document.createElement('ul')

        this.projectViewPort.appendChild(this.projectDescription);
        this.projectViewPort.appendChild(this.listView);
        keys.projectView.appendChild(this.projectViewPort);
        this.RenderProject();
    }
    SetProject(project)
    {
        this.project = project;
    }

    RenderProject()
    {
        this.projectDescription.innerHTML = `
        <h4>
            ${this.project.title} ${this.project.dueDate?` - Due: ${this.project.dueDate}`:''}
        </h4>
        `;
        this.RenderList();
    };

    RenderList()
    {
        this.listView.innerHTML = '';

        this.project.list.forEach((item) =>{  
            let li = document.createElement('li')
            let checkbox = document.createElement('input')
            checkbox.setAttribute("type", "checkbox");

            checkbox.addEventListener('click',()=>{
                li.style.textDecoration = checkbox.checked? "line-through": "none";
            });
            li.appendChild(checkbox)
            li.insertAdjacentHTML('beforeend',` ${item.description} `);
            li.insertAdjacentHTML('beforeend',item.dueDate?`- Due: ${item.dueDate}`:'');
            li.addEventListener("click",()=>{
                // console.log('click');
                //move elements
            })
            this.listView.appendChild(li);
        });
        let addTaskButton = document.createElement('button')
        addTaskButton.innerHTML = "+"
        addTaskButton.addEventListener('click',()=>{
            this.AddTask();
        });
        this.listView.appendChild(addTaskButton);
    }

    AddTask()
    {
        if(!this.projectViewPort.contains(document.getElementById("taskModal")))
        {
            this.inputModal = document.createElement('div')
            this.inputModal.setAttribute('class','taskModal')
            this.inputModal.setAttribute('id','taskModal')


            let taskString = document.createElement('input')
            taskString.setAttribute("type", "text");
            let taskDate = document.createElement('input')
            taskDate.setAttribute("type", "date");
            let submit = document.createElement('button')
            submit.innerHTML= "Submit"

            submit.addEventListener("click",()=>{
                console.log('click');
                this.project.addTask(taskString.value, taskDate.value);
                this.inputModal.style.display = 'hidden';
                taskString.value = '';
                taskDate.value = '';
                this.RenderProject();
            })

            this.inputModal.appendChild(taskString);
            this.inputModal.appendChild(taskDate);
            this.inputModal.appendChild(submit);
            this.listView.appendChild(this.inputModal);
        }else{
            this.inputModal.style.display = 'block';
        }
    }
}