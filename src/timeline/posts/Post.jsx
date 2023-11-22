import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import { BookmarkBorder, ChatBubbleOutline, FavoriteBorder, MoreHoriz, Telegram } from '@mui/icons-material'

function Post() {
  return (
    <div className='post'>
        {/* header part contain user picture and name */}
        <div className="post__header">
            <div className="post__headerAuther">
            <Avatar>M</Avatar>  
             maxwell_ . <span>12h</span>
            </div>
         <MoreHoriz/>
        </div>
        {/* posts like piuctures */}
        <div className="post__image">
            <img src="https://sfmoma-media-dev.s3.us-west-1.amazonaws.com/www-media/2023/06/23120247/Kusama_Header_cropped.png" alt="" />
        </div>
        {/* footer contain message,like,share and etc... */}
        <div className="post__footer">
        <div className="post__footerIcons">
            {/* icons like,share,message */}
          <div className="post__iconsMain">
                <FavoriteBorder className='postIcon'/>
                <ChatBubbleOutline className='postIcon'/>
                <Telegram className='postIcon'/>
            </div>
            {/* icons save */}

            <div className="post__iconssave">
              <BookmarkBorder className='postIcon'/>  
            </div>
        </div>
        Liked by 21 people
        </div>
    </div>
  )
}

export default Post