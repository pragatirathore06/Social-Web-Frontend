import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'


const Post = ({data}) => {
  return (
    <div className="Post">
        <img src={data.img} alt="" />


        <div className="postReact">
            <img src={data.liked?Heart: NotLike} alt="" width={'100px'} height={'38px'}/>
            <img src={Comment} alt="" width={'40px'} height={'40px'}/>
            <img src={Share} alt="" width={'40px'} height={'40px'}/>
        </div>
        <br/>


        <span style={{color: "var(--gray)", fontSize: '12px'}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post