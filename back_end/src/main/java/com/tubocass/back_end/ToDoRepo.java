package com.tubocass.back_end;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface ToDoRepo extends JpaRepository<Project, Integer> {
	public Project findbyId(@Param("id")Integer id);
}
