import React, { useState } from 'react';
import CommentWrite from './CommentWrite';

const DetailComment = () => {
    const [commentlist, setCommentlist] = useState([
        {id:1, content:'난 알고있지', registDate:'2020.04.30', userId:'승환'},
        {id:2, content:'범인은 xxx', registDate:'2020.04.30', userId:'김진근'}    
    ])

const CommentItem = commentlist.map(list => <tr><th key={list.id}>{list.userId}<br />{list.registDate}</th><td key={list.id}>{list.content}</td></tr>);

    return (
        <React.Fragment>
            <CommentWrite></CommentWrite>
            <div className="comment">
                <table>
                    <tbody>
                        {CommentItem}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

export default DetailComment;