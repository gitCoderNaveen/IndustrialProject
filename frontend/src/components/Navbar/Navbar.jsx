// import React, { useState } from 'react'
// import '../Navbar/Navbar.css'
// import logo from 'D:/Projects/IndustrialProject/frontend/src/assets/Images/logo.png'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Navbar = () => {

//     const [menu, setMenu] = useState('careers')
//     return (
//         <div className='navbar'>
//             <img src={logo} alt="" className="logo" />
//             <div>
//                 <input type="text" name="" id="" />
//                 <button type='submit'>Seacrch</button>
//             </div>
//             <ul className='navbar-menu'>
//                 <li onClick={() => { setMenu('careers') }} className={menu == 'careers' ? 'active' : ''}>Careers</li>
//                 <li onClick={() => { setMenu('about') }} className={menu == 'about' ? 'active' : ''}>About</li>
//                 <li onClick={() => { setMenu('contact-us') }} className={menu == 'contact-us' ? 'active' : ''}>Contact Us</li>
//             </ul>
//             <div className="navbar-right">
//                 <button>Sign In</button>
//             </div>
//         </div>
//     )
// }

// export default Navbar

import React, { useState } from 'react';
import './Navbar.css';
import logo from 'D:/Projects/IndustrialProject/frontend/src/assets/Images/logo.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
    // Handle the search logic here
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="my-logo" width={'150px'}/>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <form className="nav-search" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className='searchBox'
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className="hamburger">
            <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

