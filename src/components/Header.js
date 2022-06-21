import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="headerContainer">
          <Link to="/">Home</Link>
          <Link to="/whatis">What is BMI</Link>
      </div>
    </>
  )
}

export default Header