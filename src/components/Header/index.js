import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';

import './header.css';

export function Header() {
  return (
    <nav className="header bg-white bsd-1">
      <div class="navbar py-0">
        <div class="container">
          <div className="h-100">
            <Link className="text-blue link pl-0 h-100 pr-3" to="/app">Thi Hương</Link>
            <NavLink className="ml-5 link navlink h-100 text-dark" to="/app" activeClassName="active" exact>Trang chủ</NavLink>
            <NavLink className="ml-5 link navlink h-100 text-dark" to="/app/history" activeClassName="active">Lịch sử</NavLink>
            <NavLink className="ml-5 link navlink h-100 text-dark" to="/app/leaderboard" activeClassName="active">Bảng vàng</NavLink>
          </div>
          <div className="form-inline">
            <i className="d-md-none fa fa-bars btn-menu"></i>
            { 
              AuthService.user === 'admin' &&
              <div className="d-none d-md-flex">
                {<NavLink className="nav-link" to="/app/admin">ADMIN</NavLink>}
              </div>
            }
            <div className="d-none d-md-flex">
              <NavLink className="text-blue nav-link" to="/profile">{AuthService.user}</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
