import React from 'react'
import './Suggesstion.css'
import { Avatar } from '@mui/material'

function Suggesstion() {
  return (
    <div className='suggesstions'>
      <div className="suggesstions__title">Suggesstions for you
      </div>
      <div className="suggesstions__usernames">


      <div className="suggesstions__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className='username'>rayan_</span>
            <span className='relation'>New to instagram</span>
          </div>
        </div>
        <button className='follow__button'>follow</button>
      </div>

      <div className="suggesstions__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className='username'>rayan_</span>
            <span className='relation'>New to instagram</span>
          </div>
        </div>
        <button className='follow__button'>follow</button>
      </div>

      <div className="suggesstions__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className='username'>rayan_</span>
            <span className='relation'>New to instagram</span>
          </div>
        </div>
        <button className='follow__button'>follow</button>
      </div>

      <div className="suggesstions__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username__info">
            <span className='username'>rayan_</span>
            <span className='relation'>New to instagram</span>
          </div>
        </div>
        <button className='follow__button'>follow</button>
      </div>
    </div>
    </div>
  )
}

export default Suggesstion