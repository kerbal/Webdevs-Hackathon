import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthService } from '../../services/AuthService';
import cx from 'classnames';

import './header.css';

export function Header() {
  let [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="header bg-cn-yellow bsd-1">
      <div className="navbar py-0">
        <div className="container wrapper">
          <div className="h-100">
            <Link className="text-cn-red font-weight-bold link pl-0 h-100 pr-3" to="/app">Thi Hương</Link>
            <div className="h-100 d-none d-md-inline-block">
              <NavLink className="ml-5 link navlink h-100 text-dark" to="/app" activeClassName="active" exact>Trang chủ</NavLink>
              <NavLink className="ml-5 link navlink h-100 text-dark" to="/app/history" activeClassName="active">Lịch sử</NavLink>
              <NavLink className="ml-5 link navlink h-100 text-dark" to="/app/leaderboard" activeClassName="active">Bảng vàng</NavLink>
            </div>
          </div>
          <div className="form-inline">
            { 
              AuthService.user === 'admin' &&
              <div className="d-none d-md-flex">
                {<NavLink className="text-dark nav-link" to="/app/admin">ADMIN</NavLink>}
              </div>
            }
            <div>
              <div className="text-dark nav-link hover-menu pointer">
                {AuthService.user}
                <div className="dropdown-menu show">
                  <NavLink className="nav-link text-dark" to="/app/account">Tài khoản</NavLink>
                  <span className="nav-link pointer" onClick={_ => AuthService.logout()}>Đăng xuất</span>
                </div>
              </div>
            </div>
            <i className="d-md-none fa fa-bars btn-menu text-cn-red" onClick={_ => setMobileMenu(!mobileMenu)}></i>
          </div>
        </div>
      </div>
      <div className={cx("d-md-none navbar collapse navbar-collapse mobile-menu mt-2 bg-cn-yellow", {'show': mobileMenu})}>
        <ul className="navbar-nav container">
          <li className="nav-item">
            <NavLink className="nav-link text-cn-red" to="/app">Trang chủ</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-cn-red" to="/app/history">Lịch sử</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-cn-red" to="/app/leaderboard">Bảng vàng</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
