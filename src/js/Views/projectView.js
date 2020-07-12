import {keys} from './reference';
import {renderTask} from './taskView';
import Project from '../Models/project';


export default class ProjectView{
    constructor(project)
    {
        this.project = project;
    }
    SetProject(project)
    {
        this.project = project;
    }

    RenderList()
    {
        keys.listView.innerHTML = '';

        this.project.list.forEach((item) =>{  
            let li = document.createElement('li')
            let checkbox = document.createElement('input')
            checkbox.setAttribute("type", "checkbox");

            checkbox.addEventListener('click',()=>{
                if(checkbox.checked)
                {
                    li.style.textDecoration = "line-through"
                }else{
                    li.style.textDecoration = "none"

                }
            })
            li.appendChild(checkbox)
            li.insertAdjacentHTML('beforeend',` ${item.description} - Due: ${item.dueDate}`);
            li.addEventListener("click",()=>{
                // console.log('click');
                //move elements
            })
            keys.listView.appendChild(li);
        });
    }

    RenderProject()
    {
        keys.projectView.innerHTML = '';
        const markup = `
        <h4> <li>
                ${this.project.title} - ${this.project.description} - Due: ${this.project.dueDate}
            </li> </h4>
        `;
        keys.projectView.insertAdjacentHTML('afterbegin', markup);
        this.RenderList();
    };

    AddTask()
    {
        keys.inputModal.innerHTML = '';

        let taskString = document.createElement('input')
        taskString.setAttribute("type", "text");
        let taskDate = document.createElement('input')
        taskDate.setAttribute("type", "date");
        let submit = document.createElement('button')
        submit.innerHTML= "Submit"

        submit.addEventListener("click",()=>{
            console.log('click');
            this.project.addTask(taskString.value, taskDate.value);
            // keys.inputModal.style.display = 'hidden';
            taskString.value = '';
            taskDate.value = '';
            this.RenderProject();
        })

        keys.inputModal.appendChild(taskString);
        keys.inputModal.appendChild(taskDate);
        keys.inputModal.appendChild(submit);
    }
}