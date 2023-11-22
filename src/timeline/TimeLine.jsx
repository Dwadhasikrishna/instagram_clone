import React, { useState } from 'react'
import './Timeline.css'
import Suggesstion from './Suggesstion'
import Post from './posts/Post'

function TimeLine() {
  
  return (
    <div className='timeline'>
      <div className="timeline__left">
        {/* create posts */}
       <div className="timeline__posts">
        <Post/>
        <Post/>
        <Post/>

       </div>
      </div>
      <div className="timeline__right">
        <Suggesstion/>
      </div>
    </div>
  )
}

export default TimeLine