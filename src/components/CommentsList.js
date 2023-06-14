import React from 'react'
import Comment from './Comment';

const CommentsList = ({comments}) => {
  return comments.map((comment,index) =>
  <div  key={index}>
  <Comment data={comment}/>
  <div className='pl-7 border border-l-black ml-5 my-90'>
      <CommentsList comments={comment.replies}/>
  </div>
  </div>

  );
 
};

export default CommentsList