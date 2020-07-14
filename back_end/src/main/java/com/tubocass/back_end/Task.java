package com.tubocass.back_end;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;

@Entity
@Table(name = "tasks")
public class Task {
	@Id
	int id;
	@Column(name = "description")
	String description;
	@Column(name = "dueDate")
	@JsonDeserialize(using = LocalDateDeserializer.class)
	LocalDate dueDate;
//	List<Task> taskList;
	
	public Task(String taskString, LocalDate date)
	{
		this.description = taskString;
		this.dueDate = date;
	}
	
}
