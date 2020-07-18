import React, { useState } from 'react';
import '../css/Form.css';

// form 컴포넌트가 받는 4가지 props
// value: input 내용
// onChange: input 내용이 변경될 때 실행되는 함수
// onCreate: 버튼이 클릭될 때 실행되는 함수
// onKeyPress: input에서 키를 입력할 때 실행되는 함수
// const Form = ({ value, onChange, onCreate, onKeyPress }) => {
const Form = ({ onCreate }) => {
    // React Hook > 클래스 타입에서 사용 x
  const [ input, setInput ] = useState('')

    // input 값 변경
	const handleChange = (event) => {
		setInput(event.target.value);
	}

	// Enter key event
	const handleKeyPress = (event) => {
		// 눌려진 키가 Enter key 인 경우 handleCreate 호출
		if(event.key === 'Enter') {
			onCreate(input);
			setInput('');
		}
	}

  return (
    <div className="form">
      <input
        value={input}
        placeholder="오늘 할 일을 입력하세요.."
        onChange={handleChange}
        onKeyPress={handleKeyPress} />
      <div className="create-button" onClick={() => {
        onCreate(input);
        setInput('');
      }}>
        추가
      </div>
    </div>
  );
};
 
export default Form;