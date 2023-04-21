import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "전형서",
        comment: "안녕하세요, 전형서입니다",
    },
    {
        name: "김XX",
        comment: "아 이거 왜 함?",
    },
    {
        name: "박XX",
        comment: "지금 자러 갔습니다",
    },
];

function CommentList(){
    return (
        <div>
            {comments.map((comment)=>{
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;