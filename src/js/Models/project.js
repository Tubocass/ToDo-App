/*
    Task Model:
    There is a Meta-List of Projects/Goals *I actually might make "Projects" its own model*
    Tasks are either one-time or reccuring
        Reoccurrence can be every X days/weeks/months
    Reminders: 
        Light - One-time friendly reminder
        Heavy - Extremely Insistent reminder that keeps popping up ubtil the task is done.
    Due Date - A specific date and/or time can be set
    Health - Basically a gauge of how well tasks are being handled
        Fresh tasks, or ones with far off due dates, are green
        Stale tasks, ones that have an approaching due date or haven't been cleared after X days (maybe 5), are yellow
        Late Tasks, either past due date or not cleared after X days (maybe 10), are red
    Priority:
        ! - Has a set time for completion, i.e. an appointment
        !! - Important, but not Urgent. Complete as soon as you can get to it
        !!! - Relatively minor, usually quick personal maintence or daily habits, i.e. brush teeth, change kitty litter
        * might put these symbols in reverse order
    Keywords/Labels - Not sure if I want to have this yet. Seems more like a large-scale projevt management thing.
    
*/

import Task from './Task';

export default class Project 
{
    constructor(title, desc, date) 
    {
        this.title = title;
        this.description = desc;
        this.dueDate = date;
        this.list = [];
        this.count = 0;
    }

    addTask(taskStr, dueDate = 'none') 
    {
        const id = this.count++;//generate an id
        const task = new Task(id, taskStr, dueDate);
        this.list.push(task);

        //persist data in JSON

        return task;
    }

    deleteTask(id) 
    {
        const index = this.list.findIndex(el => el.id === id);
        console.log(index);
        this.list.splice(index, 1);
         //persist data in JSON
    }

    calcHealth()
    {
        /*
        if dueDate.none
            return calcAge()<5 ? green:yellow;
        else if 0 < (Date(today) - dueDate.Date) < 2
            return yellow
        else if  Date(today) - dueDate.Date <= 0
            return red;
       */
    }
}