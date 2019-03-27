import React from 'react';
import { withAuth } from '../../containers/Auth';
import { Link, NavLink } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';

import './header.css';

function _Header({ logged }) {
  return (
    <nav className="header bg-white bsd-1" ref={this.navbar}>
      <div className="navbar">
        <div className="container">
          <Link className="nav-link" to="/">THI HƯƠNG</Link>
          <NavLink className="nav-link" to="/history" activeClassName="active">LỊCH SỬ</NavLink>
          <NavLink className="nav-link" to="/ranks" activeClassName="active">BẢNG VÀNG</NavLink>
          <div className="form-inline my-2 my-lg-0">
            <i className="d-md-none fa fa-bars btn-menu" onClick={}></i>
            <div className="d-none d-md-flex">
              {logged && <NavLink to="/profile">{AuthService.user}</NavLink>}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export const Header = withAuth(_Header);