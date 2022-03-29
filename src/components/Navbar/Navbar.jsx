import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="color_wrapper">
        <nav className="nav nav--left js-nav">
            <ul>
                <li>
                    <Link to={{ pathname: '/'}}><span>Home</span></Link>
                </li>
                <li>
                    <Link to={{ pathname: '/Lamborghini'}}><span>Lamborghini</span></Link>
                </li>
                <li>
                    <Link to={{ pathname: '/Porsche'}}><span>Porsche</span></Link>
                </li>
                <li>
                    <Link to={{ pathname: '/Nissan'}}><span>Nissan</span></Link>
                </li>
            </ul>
        </nav>

        <figure className="logo" style={{position: 'fixed'}}>
            <h1>1127470</h1>
        </figure>
    </div>
  )
}

export default Navbar