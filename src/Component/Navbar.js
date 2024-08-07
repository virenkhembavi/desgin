import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar-section'>
            <div className='navbar-logo'>
                <img src='logo.png' alt='Logo' />
                <input placeholder='Search...' />
            </div>
            <div className='navbar-social'>
                <img src='mail.png' alt='Logo' />
                <img src='setting.png' alt='Logo' />
                <img src='notification.png' alt='Logo' />
                <img src='avatar.png' alt='Logo' />
            </div>
        </div>
    )
}
