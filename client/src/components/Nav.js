import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
// import classnames from 'classnames';
import './Nav.css'

export default function Nav() {
  // const navClass = classnames("nav")

  return (
    <nav /*className={navClass}*/>
      <Fragment>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/">My Fav</Link>
        </div>
        <div>
          <Link to="/">My Bookings</Link>
        </div>
      </Fragment>
    </nav>
  )
}