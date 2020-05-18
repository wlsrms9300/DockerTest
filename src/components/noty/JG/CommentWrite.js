import React, { useState } from 'react';

const CommentWrite = () => {
    const [value, setValue] = useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(e.target.value === "") {
            alert('내용이 없습니다.');
            inputRef.current.focus();
        } else {     //내용있으면 db저장
            setValue('');
            inputRef.current.focus(); 
        }      
    };

    return (
        <div className="write-comment">
            <form onSubmit={onSubmitForm}>
                <table>
                    <tbody>
                        <tr>
                            <td><textarea ref={inputRef} value={value} onChange={onChangeInput} placeholder="댓글을 입력해주세요."></textarea></td>
                            <td><button>입력</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default CommentWrite;