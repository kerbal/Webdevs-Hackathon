import React, { useState } from 'react';
import cx from 'classnames';
import people from '../../images/landing-page/people2.png';
import survey from '../../images/landing-page/survey2.png';
import certification from '../../images/landing-page/certification2.png';

import './landing-page.css';
import { AuthService } from '../../services/AuthService';
import { AuthButton } from '../../components/Buttons';

export function LandingPage({ history }) {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="lp">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand text-white" href="/">Thi Hương</a>
          <div className="form-inline my-2 my-lg-0">
            <a className="nav-link text-white" href="#">Bảng xếp hạng</a>
            <a className="nav-link text-white" href="#">Về chúng tôi</a>
          </div>
        </div>
      </nav>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-lg-7 text-white mt-md-5 pt-md-5 pr-md-4 font-italic">
            <h3 class="text-center text-md-left">"Hiền tài là nguyên khí quốc gia, nguyên khí thịnh thì thế nước mạnh rồi lên cao, nguyên khí suy thì thế nước yếu rồi xuống thấp."</h3>
            <h5 className="text-center text-md-right mb-4 mt-4 font-itatlic">- Thân Nhân Trung -</h5>
          </div>
          <div className="col-md-6 col-lg-5 pt-5 pt-md-0 pl-md-4">
            <div className="card">
              <div className="card-body">
                <ul className="nav nav-tabs mb-5">
                  <li className="w-50 nav-item text-center">
                    <a className={cx("nav-link", {active: !isLogin })} href="#" onClick={_ => setIsLogin(false)}>Ghi danh</a>
                  </li>
                  <li className="w-50 nav-item text-center">
                    <a className={cx("nav-link", {active: isLogin })} href="#" onClick={_ => setIsLogin(true)}>Đăng nhập</a>
                  </li>
                </ul>
                <div className="form-group mb-4">
                  <label htmlFor="">Tên tài khoản</label>
                  <input className="form-control" type="text" placeholder="Tên tài khoản" />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="">Mật khẩu</label>
                  <input className="form-control" type="text" placeholder="Mật khẩu" />
                </div>
                {!isLogin &&
                <div className="form-group mb-4">
                  <label htmlFor="">Xác nhận mật khẩu</label>
                  <input className="form-control" type="text" placeholder="Nhập lại mật khẩu" />
                </div>}
                <div className="form-group">
                  <AuthButton className="w-100 btn btn-primary" onClick={_ => AuthService.login()}>
                    {isLogin ? "Đăng nhập" : "Ghi danh"}
                  </AuthButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-5 mb-5">
          <div className="col-md-6 col-lg-5 pr-md-4 order-2 order-md-1">
            <div className="card w-100">
              <div className="card-body">
              <h3 className="text-center text-primary mt-4">Bảng vàng thành tích</h3>
              <div className="text-center mb-4">
                <span className="smallline bg-primary"></span>
              </div>
              {Array.from(Array(10)).map((_, rank) => (
                <h4 key={rank} className="my-3 form-control hover">{rank+1}. Super Hero {rank+1}</h4>
              ))}
              <h4 className="text-center text-primary mt-4">Chi tiết</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 d-flex align-items-center my-5 pt-5 pl-4 font-italic order-1 order-md-2">
            <h3 className="text-center text-md-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis sint, accusamus laboriosam porro beatae officiis repudiandae deserunt modi quibusdam consequuntur.</h3>
          </div>
        </div>
        <div className="row py-md-5 my-5">
          <div className="card-hover col-md-4 d-flex justify-content-center">
            <div className="text-center">
              <img width="100" src={people} alt="People"/>
              <h5 className="my-3 text-pink">10000+ sĩ tử đã ghi danh</h5>
            </div>
          </div>
          <div className="card-hover col-md-4 d-flex justify-content-center">
            <div className="text-center">
              <img width="100" src={survey} alt="Submition" />
              <h5 className="my-3 text-pink">5000+ bài thi đã được hoàn thành</h5>
            </div>
          </div>
          <div className="card-hover col-md-4 d-flex justify-content-center">
            <div className="text-center">
              <img width="100" src={certification} alt="Success" />
              <h5 className="my-3 text-pink">100+ hiền tài đã được vinh danh</h5>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5 bg-light py-5 text-center">
        <h5>Webdevs Hackathon 2019</h5>
        <h5 class="mb-0"><small>&copy; Javascript team</small></h5>
      </footer>
    </div>
  )
}