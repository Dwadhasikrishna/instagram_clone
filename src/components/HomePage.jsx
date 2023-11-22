import React from 'react'
import '../Homepage.css'
import SideNav from '../navigation/SideNav'
import TimeLine from '../timeline/TimeLine'

function HomePage() {
  return (
    <div className='homepage'>
        <div className="homepage__nav">
        <SideNav/>
        </div>
        <div className="homepage__timeline">
           <TimeLine/> 
        </div>
    </div>
  )
}

export default HomePage