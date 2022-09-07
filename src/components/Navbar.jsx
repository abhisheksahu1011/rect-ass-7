import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='nav'>
        <Link to='/' className='item'>Home</Link>
        <Link to='/students' className='item'>Students</Link>
            {/* <li className='item'>Contact US</li> */}
            <Link to='/contact-us' className='item'>Contact US</Link>
        </ul>
    </div>
  )
}

export default Navbar