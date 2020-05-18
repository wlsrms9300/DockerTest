import React, { useState } from 'react';
import './boardDetail.css';
import DetailComment from './DetailComment';

const BoardDetail = () => {
    const [boardName, setBaordName] = useState('누구인가?');
    const [userId, setUserId] = useState('김진근');
    const [registDate, setRegistDate] = useState('2020.04.30');
    const [content, setContent] = useState('누가 내 단밤을 훔쳤는가');

    return (
        <React.Fragment>
        <div>
            <table className="detail">
                <tbody>
                    <tr>
                        <th>글제목</th>
                        <td>{boardName}</td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>{userId}</td>
                    </tr>
                    <tr>
                        <th>작성일</th>
                        <td>{registDate}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>{content}</td>
                    </tr>  
                </tbody>
            </table>
            <div className="bt-wrap">
                <button className="board-update">수정</button>
                <button className="board-delete">삭제</button>
            </div>
        </div>
        <DetailComment></DetailComment>
        </React.Fragment>
    )
}

export default BoardDetail;