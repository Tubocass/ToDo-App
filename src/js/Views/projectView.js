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

    this.project.list.forEach(item =>  
        keys.listView.insertAdjacentHTML('beforeend', renderTask(item))
        );
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

// export function AddTask()
// {
//     const markup = `
//             <div>
//                     <input id="InputField" type="text" placeholder="New Task">
//                     <br>
//                     <input id="DatePicker" type="date">
//                     <input id="TimePicker" type="time">
//                     <br>
//                     <button id="Submit" type="submit"> Submit </button> 
//             </div>
//         `;
   
//     return markup;
// }

// keys.createButton.addEventListener("click", () =>{
//     keys.inputModal.insertAdjacentHTML('beforeend', AddTask());
// });

