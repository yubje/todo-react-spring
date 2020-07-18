import React from 'react';
 
class TodoItemList extends React.Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;
 
        return (
            <div>
                TodoItem 자리
            </div>
        );
    }
}
 
export default TodoItemList;