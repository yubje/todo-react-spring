import React from 'react';
import TodoList from './components/js/TodoList';
import Form from './components/js/Form';
 
class App extends React.Component {
    render() {
        return (
            <TodoList form={<Form/>}>
                오늘 할 일 템플릿입니다
            </TodoList>
        );
    }
}
 
export default App;