import React from 'react';
import '../css/Form.css';

// form 컴포넌트가 받는 4가지 props
// value: input 내용
// onChange: input 내용이 변경될 때 실행되는 함수
// onCreate: 버튼이 클릭될 때 실행되는 함수
// onKeyPress: input에서 키를 입력할 때 실행되는 함수
const Form = ({ value, onChange, onCreate, onKeyPress }) => {
    return (
        <div className="form">
            <input
                value={value}
                placeholder="오늘 할 일을 입력하세요.."
                onChange={onChange}
                onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};
 
export default Form;