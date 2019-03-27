import React from 'react';
import { withAuth } from '../../containers/Auth';
import { Link, NavLink } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';

import './header.css';

function _Header({ logged }) {
  return (
    <nav className="header bg-white bsd-1">
      <div class="navbar">
        <div class="container">
          <div className="d-flex align-items-center">
            <Link className="nav-link px-0" to="/">Thi Hương</Link>
            <NavLink className="nav-link ml-5 link" to="/app/history" activeClassName="active">Lịch sử</NavLink>
            <NavLink className="nav-link ml-5 link" to="/app/leaderboard" activeClassName="active">Bảng vàng</NavLink>
          </div>
          <div className="form-inline">
            <i className="d-md-none fa fa-bars btn-menu"></i>
            <div className="d-none d-md-flex">
              {logged && <NavLink className="nav-link" to="/profile">{AuthService.user}</NavLink>}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export const Header = withAuth(_Header);