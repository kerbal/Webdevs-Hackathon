import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cx from 'classnames';

import './header.css';
import { AuthService } from '../../services/AuthService';

export function Header() {
  let [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="header bsd-1 bg-white">
      <div className="navbar py-0">
        <div className="container wrapper">
          <i className="d-md-none fa fa-bars btn-menu text-main px-0" onClick={_ => setMobileMenu(!mobileMenu)}></i>
          <div className="h-100">
            <Link className="text-main font-weight-bold link pl-0 h-100 pr-md-3" 
              to={!AuthService.user.IsAdmin ? "/app" : "/admin"}>Thi Hương</Link>
            <div className="h-100 d-none d-md-inline-block">
            {AuthService.user.IsAdmin ?
              <>
                <NavLink className="ml-5 link navlink h-100 text-dark" to="/admin" activeClassName="active" exact>Trang chủ</NavLink>
                <NavLink className="ml-5 link navlink h-100 text-dark" to="/admin/questions" activeClassName="active">Kho câu hỏi</NavLink>
                <NavLink className="ml-5 link navlink h-100 text-dark" to="/admin/exams" activeClassName="active">Kho đề</NavLink>
              </> :
              <>
                <NavLink className="ml-5 link navlink h-100 text-dark" to="/app" activeClassName="active" exact>Trang chủ</NavLink>
                <NavLink className="ml-5 link navlink h-100 text-dark" to="/app/history" activeClassName="active">Lịch sử</NavLink>
                <NavLink className="ml-5 link navlink h-100 text-dark" to="/app/leaderboard" activeClassName="active">Bảng vàng</NavLink>
              </>
            }
            </div>
          </div>
          <div className="form-inline">
            <div>
              <div className="text-dark nav-link hover-menu pointer">
                <span className="d-none d-md-inline">{AuthService.user.Username}</span>
                <i className="d-inline d-md-none fa fa-user text-main px-0 px-md-3"></i>
                <div className="dropdown-menu show py-0 py-md-2">
                  <span className="nav-link d-block d-md-none text-center bg-dark-grey">
                    {AuthService.user.Username}
                  </span>
                  <span className="nav-link pointer" onClick={_ => AuthService.logout()}>
                    <i className="fa fa-sign-out mr-3 text-main"></i>Đăng xuất
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("d-md-none navbar collapse navbar-collapse mobile-menu mt-2 ", {'show': mobileMenu})}>
        <ul className="navbar-nav container">
          {AuthService.user.IsAdmin ?
            <>
              <li className="nav-item">
                <NavLink className="nav-link text-main" to="/app" exact activeClassName="active">Trang chủ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-main" to="/admin/questions" activeClassName="active">Kho câu hỏi</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-main" to="/admin/exams" activeClassName="active">Kho đề</NavLink>
              </li>
            </> :
            <>
              <li className="nav-item">
                <NavLink className="nav-link text-main" to="/app" exact activeClassName="active">Trang chủ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-main" to="/app/history" activeClassName="active">Lịch sử</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-main" to="/app/leaderboard" activeClassName="active">Bảng vàng</NavLink>
              </li>
            </>
          }
        </ul>
      </div>
    </nav>
  )
}
