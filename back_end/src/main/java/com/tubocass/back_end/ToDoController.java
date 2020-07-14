package com.tubocass.back_end;

import java.time.LocalDate;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RequestMapping("/todo")
@RestController
public class ToDoController {
	
	@PostMapping(value= "/addtask")
	public boolean AddTask(Project project, String taskString, LocalDate date)
	{
		Task newTask = new Task(taskString, date);
		project.taskList.add(newTask);
		return false;
	}

}
