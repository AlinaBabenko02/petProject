import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item} >
    {props.post}
    <div>
      <span>like</span> {props.likesCount}
    </div>
  </div>

}

export default Post;