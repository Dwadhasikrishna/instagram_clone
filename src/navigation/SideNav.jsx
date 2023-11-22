import React from 'react'
import './Sidenav.css'

function SideNav() {
  return (
    <div className='sidenav'>
      <img className='sidenav__icon' src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png" alt="" />
      <div className="sidenav__buttons">
         {/* icons */}
        <button className="sidenav__button">
         <i class="fa-solid fa-house fa-2x"></i>
          <span>Home</span>
         </button>

         <button className="sidenav__button">
         <i class="fa-solid fa-magnifying-glass fa-2x"></i>
          <span>Search</span>
         </button>

         <button className="sidenav__button">
         <i class="fa-solid fa-compass fa-2x"></i>
          <span>Explore</span>
         </button>

         <button className="sidenav__button">
         <i class="ri-video-line fa-2x"></i>
          <span>Reels</span>
         </button>

         <button className="sidenav__button">
         <i class="ri-message-line fa-2x"></i>
          <span>Messages</span>
         </button>

         <button className="sidenav__button">
         <i class="fa-regular fa-heart fa-2x"></i>
          <span>Notifications</span>
         </button>

         <button className="sidenav__button">
         <i class="fa-solid fa-circle-plus fa-2x"></i>           
         <span>Create</span>
         </button>
      </div>
      {/* more  */}
      <div className="sidenav__more">
        <button className='sidenav__button'>
        <i class="fa-solid fa-bars fa-2x"></i>
        <span>More</span>
        </button>
      </div>
    </div>
  )
}

export default SideNav