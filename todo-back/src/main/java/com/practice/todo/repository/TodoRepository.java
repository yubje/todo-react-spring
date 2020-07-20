package com.practice.todo.repository;
 
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.stereotype.Repository;

import com.practice.todo.domain.Todo;
 
public interface TodoRepository extends JpaRepository<Todo, Long> {
 
}