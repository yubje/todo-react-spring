import React from 'react';
import '../css/TodoItem.css';
 
class TodoItem extends React.Component {
    render() {
        // 5가지 props를 받는다.
        // content: todo 내용
        // isComplete: 체크박스 on/off 상태
        // id: TodoItem의 key값
        // onToggle: 체크박스를 on/off 시키는 함수
        // onRemove: TodoItem을 삭제시키는 함수
        const {content, isComplete, id, onToggle, onRemove} = this.props;
        console.log(id);
 
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="todo-item-remove" onClick={(e) => {
                    e.stopPropagation();    // onToggle 이 실행되지 않도록 함
                    onRemove(id)}
                }>
                    &times;
                </div>
                <div className={`todo-item-content ${isComplete && 'isComplete'}`}>
                    <div>
                       {content}
                    </div>
                </div>
                {
                    isComplete && (<div className="isComplete-mark">✓</div>)
                }
            </div>
        )
    }
}
 
export default TodoItem;