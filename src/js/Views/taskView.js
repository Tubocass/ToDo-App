import {keys} from './reference';

const renderTask = (item) => {
    const markup = `
        <li>
            <h4>${item.priorityLevel} - ${item.taskStr} - Due: ${item.dueDate}</h4>
        </li>
    `;
    keys.listView.insertAdjacentHTML('beforeend', markup);
};
// const task = {id, taskStr, dueDate, priorityLevel, reminder};
export function ClearList(){
    keys.listView.innerHTML = '';
}
export function RenderList(list){
    list.forEach(renderTask);
}