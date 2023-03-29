import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {   // navigation bar to navigate over different pages
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <span class='nav-link active'>Drones</span>
            </li>
        </ul>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/">Home</Link>
            </li>
        </ul>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/createCustomer">Create Customer</Link>
            </li>
        </ul>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/customers">Customers</Link>
            </li>
        </ul>
        
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/createBooking">Book Customer</Link>
            </li>
        </ul>
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/bookings">Bookings</Link>
            </li>
        </ul>
      </div>
  </div>
</nav>
  )
}

export default Navbar
