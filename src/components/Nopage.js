import React from 'react'
import { Link } from 'react-router-dom'

export default function Nopage() {
  return (
    <div>
      <h1>nopage</h1>
    
          <Link className="nav-link" aria-current="page" to="*">
              Nopage
          </Link>
    </div>
  )
}
