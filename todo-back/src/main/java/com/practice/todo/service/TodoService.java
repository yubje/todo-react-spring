package com.practice.todo.service;
 
import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Sort;

import com.practice.todo.domain.Todo;
 
public interface TodoService {
 
    List<Todo> getTodos(Sort sort) throws Exception;
    
    void postTodo(Todo todo) throws Exception;
    
    void deleteTodo(Long Id) throws Exception;
    
    Todo findTodoById(Long Id) throws Exception;
}