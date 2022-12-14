import React,{useState} from 'react';

//프롭스로 전달받을 데이터 타입을 지정
type TodoInsertProps = {
    onInsert: (text:string) => void;
}
const TodoInsert = ({onInsert}:TodoInsertProps) => {
    const [value, setValue] = useState('');
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        onInsert(value)
        setValue("");
    }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={value} placeholder="할일을 입력하세요"></input>
                <button type="submit">+</button>
            </form>
        </div>
    );
};

export default TodoInsert;