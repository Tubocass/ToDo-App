import {keys} from './reference';
import {renderTask} from './taskView';

export function ClearList()
{
    keys.listView.innerHTML = '';
}
export function RenderList(list)
{
    list.forEach(item =>  
        keys.listView.insertAdjacentHTML('beforeend', renderTask(item))
        );
}
// keys.createButton.addEventListener("click", () =>{
//     keys.inputModal.style.display = "block";
// })

// const task = {id, taskStr, dueDate, priorityLevel, reminder};
