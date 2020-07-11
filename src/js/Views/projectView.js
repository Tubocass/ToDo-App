import {keys} from './reference';
import {renderTask} from './taskView';
import Project from '../Models/project';


export function SetProject(project)
{
    this.project = project;
}

export function RenderList()
{
    keys.listView.innerHTML = '';

    this.project.list.forEach((item) =>{  
        let li = document.createElement('li')
        li.innerHTML = `<input type ="checkbox">- ${item.description} - Due: ${item.dueDate}`;
        li.addEventListener("click",()=>{
            console.log('click');
        })
        keys.listView.appendChild(li);
    });
}

export function renderProject()
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


// keys.deleteButton.addEventListener("click", () =>{
//    for(let i =0; i< keys.listView.children.length; i++){
//        console.log(i);
//        if(keys.listView.children[i].firstChild.checked)
//        {
//            this.project.deleteTask(i)
//        }
//    };
// });

