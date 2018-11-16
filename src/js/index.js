import TaskList from './Models/Task';
import {keys} from './Views/reference';
import * as TaskView from './Views/taskView'

const tasksList = new TaskList();
//tasksList.addTask(0,'Pickup cat from school.', new Date(), 0, 'none');
keys.submitButton.addEventListener('click',e =>{
    e.preventDefault();
    tasksList.addTask(keys.taskInput.value, keys.taskDate.value);
    TaskView.ClearList();
    TaskView.RenderList(tasksList.list);
    //console.log('do stuff');
});
keys.createButton.addEventListener("click", () =>{
    keys.inputModal.style.display = "block";
})

console.log(tasksList);