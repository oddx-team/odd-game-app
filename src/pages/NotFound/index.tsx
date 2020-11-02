import React from 'react'
import './style.scss'

export const PageNotFound = ({ history }) => {
  const goBack = () => {
    history.push('/')
  }

  return (
    <div className='page-notfound'>
      <div className='panel-decor' />
      <div className='panel-lost'>
        <h1>Are you lost?</h1>
        <p>You are accessing a page that does not exist or has been deleted / replaced. Don't worry, you can still go back to the homepage.</p>

        <button className='btn-home' onClick={goBack}>Home</button>
      </div>
    </div>
  )
}
