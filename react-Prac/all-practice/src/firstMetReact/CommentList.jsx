import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "Dana",
    comment: "hi",
  },
  {
    name: "Joy",
    comment: "wow",
  },
  {
    name: "Lily",
    comment: "hey",
  },
];
function CommentList() {
  return (
    <>
      <div>
        <h3>이렇게 해서 넘겨줘도 되고 (위에서 배열 선언 후 넘겨주기)</h3>
        {comments.map((comment) => {
          return <Comment name={comment.name} comment={comment.comment} />;
        })}
      </div>
      <div>
        <h3>이렇게 해서 넘겨줘도 된다 (바로 넘겨주기)</h3>

        <Comment name="DANA" comment="댓글 컴포넌트지롱" />
      </div>
    </>
  );
}

export default CommentList;
