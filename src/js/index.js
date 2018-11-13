import TaskList from './Models/Task';

const tasksList = new TaskList();
tasksList.addTask(0,'Pickup cat from school.', new Date(), 0, 'none');

console.log(tasksList);