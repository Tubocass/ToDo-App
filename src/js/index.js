import TaskList from './Models/Task';
import {keys} from './Views/reference';

const tasksList = new TaskList();
//tasksList.addTask(0,'Pickup cat from school.', new Date(), 0, 'none');
keys.submitButton.addEventListener('click',e =>{
    e.preventDefault();
    tasksList.addTask(keys.taskInput.value, keys.taskDate.value);
    //console.log('do stuff');
});

console.log(tasksList);