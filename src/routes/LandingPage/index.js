import React, { createRef } from 'react';
import cx from 'classnames';
import scrollToElement from 'scroll-to-element';
import people from '../../images/landing-page/people2.png';
import survey from '../../images/landing-page/survey2.png';
import certification from '../../images/landing-page/certification2.png';

import './landing-page.css';
import { AuthService } from '../../services/AuthService';
import { AuthButton } from '../../components/Buttons';

function scrollTo(query) {
  scrollToElement(query, {
    offset: -70,
    ease: 'out-quad',
    duration: 500
  })
}

export class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
      mobileMenu: false,
      navbarSticky: false,
    }
    this.setIsLogin = isLogin => this.setState({ isLogin });
    this.navbarText = () => cx({"text-white": !this.state.navbarSticky}, {'text-blue': this.state.navbarSticky});
    this.navbar = createRef();
  }
  componentDidMount() {
    window.onscroll = () => {
      var sticky = this.navbar.current.offsetTop;
      this.setState({
        navbarSticky: window.pageYOffset > sticky
      });
    }
  }
  setMobileMenu = (mobileMenu) => {
    this.setState({ mobileMenu }, () => {
      if (mobileMenu) {
        window.onclick = (e) => {
          if (!e.target.classList.toString().includes('btn-menu')) {
            this.setState({ mobileMenu: false });
            window.onclick = null;
          }
        }
      }
    });
  }

  componentWillUnmount () {
    window.onscroll = null;
  }

  render() {
    const { mobileMenu, isLogin, navbarSticky } = this.state;
    return (
      <div className="lp">
        <nav className={cx('header', {'sticky': navbarSticky})} ref={this.navbar}>
          <div className="navbar">
            <div className="container">
              <a className={cx("navbar-brand", this.navbarText())} href="/">Thi Hương</a>
              <div className="form-inline my-2 my-lg-0">
                <i className={cx("d-md-none fa fa-bars btn-menu", this.navbarText())} onClick={_ => this.setMobileMenu(!mobileMenu)}></i>
                <div className="d-none d-md-flex">
                  <a className={cx('nav-link', this.navbarText())} href="#" onClick={_ => scrollTo('#form-section')}>Ghi danh / Đăng nhập</a>
                  <a className={cx('nav-link', this.navbarText())} href="#" onClick={_ => scrollTo('#rank-section')}>Bảng xếp hạng</a>
                  <a className={cx('nav-link', this.navbarText())} href="#" onClick={_ => scrollTo('#stat-section')}>Về cuộc thi</a>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("d-md-none navbar collapse navbar-collapse mobile-menu mt-2", {'show': mobileMenu}, {'sticky': navbarSticky})}>
            <ul className="navbar-nav container">
              <li className="nav-item">
                <a className={cx('nav-link', this.navbarText())} href="#" onClick={_ => scrollTo('#form-section')}>Ghi danh / Đăng nhập</a>
              </li>
              <li className="nav-item">
                <a className={cx('nav-link', this.navbarText())} href="#" onClick={_ => scrollTo('#rank-section')}>Bảng xếp hạng</a>
              </li>
              <li className="nav-item">
                <a className={cx('nav-link', this.navbarText())} href="#" onClick={_ => scrollTo('#stat-section')}>Về cuộc thi</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container my-5 pt-5">
          <div className="row">
            <div className="col-md-6 col-lg-7 text-white mt-md-5 pt-md-5 pr-md-4 font-italic">
              <h3 className="text-center text-md-left">"Hiền tài là nguyên khí quốc gia, nguyên khí thịnh thì thế nước mạnh rồi lên cao, nguyên khí suy thì thế nước yếu rồi xuống thấp."</h3>
              <h5 className="text-center text-md-right mb-4 mt-4 font-itatlic">- Thân Nhân Trung -</h5>
            </div>
            <div id="form-section" className="col-md-6 col-lg-5 pt-5 pt-md-0 pl-md-4">
              <div className="card">
                <div className="card-body">
                  <ul className="nav nav-tabs mb-5">
                    <li className="w-50 nav-item text-center">
                      <a className={cx("nav-link", {active: !isLogin })} href="#" onClick={_ => this.setIsLogin(false)}>Ghi danh</a>
                    </li>
                    <li className="w-50 nav-item text-center">
                      <a className={cx("nav-link", {active: isLogin })} href="#" onClick={_ => this.setIsLogin(true)}>Đăng nhập</a>
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
                    <AuthButton className="w-100 btn btn-blue" onClick={_ => AuthService.login()}>
                      {isLogin ? "Đăng nhập" : "Ghi danh"}
                    </AuthButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-5 mb-5">
            <div id="rank-section" className="col-md-6 col-lg-5 pr-md-4 order-2 order-md-1">
              <div className="card w-100">
                <div className="card-body">
                <h3 className="text-center text-blue mt-4">Bảng vàng thành tích</h3>
                <div className="text-center mb-4">
                  <span className="smallline bg-blue"></span>
                </div>
                {Array.from(Array(10)).map((_, rank) => (
                  <h4 key={rank} className="my-3 form-control hover">{rank+1}. Super Hero {rank+1}</h4>
                ))}
                <h4 className="text-center text-blue mt-4">Chi tiết</h4>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center my-5 pt-5 pl-4 font-italic order-1 order-md-2">
              <h3 className="text-center text-md-right">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis sint, accusamus laboriosam porro beatae officiis repudiandae deserunt modi quibusdam consequuntur.</h3>
            </div>
          </div>
          <div id="stat-section" className="row py-md-5 mb-5">
            <div className="col-12 mb-4">
              <h3 className="text-center text-blue mt-4">Những con số ấn tượng của cuộc thi</h3>
              <div className="text-center mb-4">
                <span className="smallline bg-blue"></span>
              </div>
            </div>
            <div className="card-hover col-md-4 d-flex justify-content-center">
              <div className="text-center">
                <img width="100" src={people} alt="People"/>
                <h5 className="my-3"><b className="text-success">10000+</b> </h5>
                <h5 className="my-3">Sĩ tử đã ghi danh</h5>
              </div>
            </div>
            <div className="card-hover col-md-4 d-flex justify-content-center">
              <div className="text-center">
                <img width="100" src={survey} alt="Submition" />
                <h5 className="my-3"><b className="text-success">5000+</b></h5>
                <h5 className="my-3">Bài thi đã được hoàn thành</h5>
              </div>
            </div>
            <div className="card-hover col-md-4 d-flex justify-content-center">
              <div className="text-center">
                <img width="100" src={certification} alt="Success" />
                <h5 className="my-3"><b className="text-success">100+</b></h5>
                <h5 className="my-3">Hiền tài đã được vinh danh</h5>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-5 py-5 text-center text-white bg-light-blue">
          <h5>Webdevs Hackathon 2019</h5>
          <h5 className="mb-0"><small>&copy; Javascript team</small></h5>
        </footer>
      </div>
    )
  }
}