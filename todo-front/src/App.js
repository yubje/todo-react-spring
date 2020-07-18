import React from 'react';
import TodoList from './components/js/TodoList';
import Form from './components/js/Form';
import TodoItemList from './components/js/TodoItemList';
 
 
class App extends React.Component {
    render() {
        return (
            <TodoList form={<Form/>}>
                <TodoItemList/>
            </TodoList>
        );
    }
}
 
export default App;