// TodoItem 컴포넌트 여러 개 렌더링
import React from 'react';
import TodoItem from './TodoItem';
 
class TodoItemList extends React.Component {

  render() {
    // 3가지 props
    // todos: todo 객체들이 들어있는 배열
    // onToggle: 체크박스를 on/off하는 함수
    // onRemove: todo 객체를 삭제하는 함수
    const {todos, onToggle, onRemove} = this.props;

    const todoList = todos.map (
      ({id, content, isComplete}) => (
        <TodoItem
          id={id}
          content={content}
          isComplete={isComplete}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id} />
      )
    );

    return (
      <div>
        {todoList}
      </div>
    );
  }
}
 
export default TodoItemList;