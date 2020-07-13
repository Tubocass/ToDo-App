package com.tubocass.back_end;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepo extends JpaRepository<Project, Integer> {
	
}
