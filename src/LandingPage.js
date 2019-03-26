import React, { useState } from 'react';
import illu from './online-survey.png';
import cx from 'classnames';
import './landing-page.css';

export function LandingPage() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="lp">
      <nav className="navbar ">
        <div className="container">
          <a className="navbar-brand text-white" href="/">Thi Hương</a>
          <div className="form-inline my-2 my-lg-0">
            <a className="nav-link text-white" href="#">Bảng xếp hạng</a>
            <a className="nav-link text-white" href="#">Về chúng tôi</a>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7 text-white mt-5 pt-5 pr-4 font-italic">
            <h3>"Hiền tài là nguyên khí quốc gia, nguyên khí thịnh thì thế nước mạnh rồi lên cao, nguyên khí suy thì thế nước yếu rồi xuống thấp."</h3>
            <h5 className="text-right mt-3 font-itatlic">- Thân Nhân Trung -</h5>
          </div>
          <div className="col-md-5 pl-md-4">
            <div className="card">
              <div className="card-body">
                <ul className="nav nav-tabs mb-5">
                  <li className="w-50 nav-item text-center">
                    <a className={cx("nav-link", {active: !isLogin })} href="#" onClick={_ => setIsLogin(false)}>Đăng ký</a>
                  </li>
                  <li className="w-50 nav-item text-center">
                    <a className={cx("nav-link", {active: isLogin })} href="#" onClick={_ => setIsLogin(true)}>Đăng nhập</a>
                  </li>
                </ul>
                <div className="form-group mb-4">
                  <label for="">Tên tài khoản</label>
                  <input className="form-control" type="text" placeholder="Tên tài khoản" />
                </div>
                <div className="form-group mb-4">
                  <label for="">Mật khẩu</label>
                  <input className="form-control" type="text" placeholder="Mật khẩu" />
                </div>
                {!isLogin &&
                <div className="form-group mb-4">
                  <label for="">Xác nhận mật khẩu</label>
                  <input className="form-control" type="text" placeholder="Nhập lại mật khẩu" />
                </div>}
                <div className="form-group">
                  <button className="w-100 btn btn-primary">{isLogin ? "Đăng nhập" : "Đăng ký"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}