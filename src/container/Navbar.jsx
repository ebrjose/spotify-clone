import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to='/characters'>Characters</Link>
      </li>
      <li>
        <Link to='/locations'>Locations</Link>
      </li>
      <li>
        <Link to='/episodes'>Episodes</Link>
      </li>
    </ul>
  )
}
