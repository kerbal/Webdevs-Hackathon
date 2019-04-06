import React, { createRef } from 'react';
import cx from 'classnames';
import scrollToElement from 'scroll-to-element';
import people from '../../images/landing-page/people1.png';
import survey from '../../images/landing-page/survey1.png';
import certification from '../../images/landing-page/certification1.png';

import './landing-page.css';
// import { AuthService } from '../../services/AuthService';
import { Title } from '../../components/Title';
import { Button } from '../../components/Buttons';
import { Card } from '../../components/Cards';
import { Footer } from '../../components/Footer';
import { AuthService } from '../../services/AuthService';
import { Dialog } from '../../components/Dialog';
import { LeaderBoardPage } from '../LeaderBoard';
import { UserService } from '../../services/UserService';

import crown from '../../images/leaderboard/crown.svg';

function scrollTo(query) {
  scrollToElement(query, {
    offset: -100,
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
      detailLB: false,
      alert: null,
      leaderboard: null
    }
    this.setIsLogin = isLogin => this.setState({ isLogin, alert: null });
    this.setDetailLB = detailLB => this.setState({ detailLB });
    this.navbarText = () => cx({"text-white": !this.state.navbarSticky}, {'text-main': this.state.navbarSticky});
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

  setInput = (field) => {
    return e => {
      this.setState({
        [field]: e.target.value,
        ["err_"+field]: false,
      });
    }
  }

  SubmitForm = async (e) => {
    e.preventDefault();
    if (this.state.isLogin) {
      this.Auth();
    } 
    else {
      const {Username, Password, ConfirmPassword, Fullname} = this.state;
      const response = await UserService.register({Username, Password, ConfirmPassword, Fullname});
      if(response) {
        this.setState({
          alert: { 
            success: false,
            message: response.join('\n')
          }
        });
      }
      else {
        this.setState({
          alert: { 
            success: true,
            message: 'Ghi danh thành công, hãy đăng nhập!'
          }
        });
      }
    }
  }

  Auth = async () => {
    let { Username, Password } = this.state;
    const response = await AuthService.login(Username, Password);
    if(response) {
      this.setState({
        alert: { 
          success: false,
          message: response
        }
      });
    }
    // if (Username && Password) {
    //   if (!AuthService.login(Username, Password)){
    //     this.setState({
    //       alert: { success: false, message: 'Tên tài khoản hoặc mật khẩu không đúng.' }
    //     });
    //   } 
    // } else {
    //   let error = {};
    //   error["err_Username"] = !Username;
    //   error["err_Password"] = !Password;
    //   this.setState(error);
    // }
  }

  render() {
    const { alert, detailLB, mobileMenu, isLogin, navbarSticky } = this.state;
    return (
      <div className="lp">
        {detailLB && 
        <Dialog onWrapperClick={_ => this.setDetailLB(false)}>
          <LeaderBoardPage></LeaderBoardPage>
        </Dialog>}
        <nav className={cx('header', {'sticky': navbarSticky})} ref={this.navbar}>
          <div className="navbar">
            <div className="container">
              <a className={cx("navbar-brand font-weight-bold", this.navbarText())} href="/">Thi Hương</a>
              <div className="form-inline my-2 my-lg-0">
                <i className={cx("d-md-none fa fa-bars btn-menu", this.navbarText())} onClick={_ => this.setMobileMenu(!mobileMenu)}></i>
                <div className="d-none d-md-flex">
                  <a className={cx('nav-link', this.navbarText())} href="#" onClick={_ => scrollTo('#form-section')}>Ghi danh / Đăng nhập</a>
                  <a className={cx('nav-link', this.navbarText())} href="#" onClick={_ => scrollTo('#rank-section')}>Bảng vàng</a>
                  <a className={cx('nav-link', this.navbarText())} href="#" onClick={_ => scrollTo('#stat-section')}>Về cuộc thi</a>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("d-md-none navbar collapse navbar-collapse mobile-menu mt-2", {'show': mobileMenu})}>
            <ul className="navbar-nav container">
              <li className="nav-item">
                <a className="nav-link text-main" href="#" onClick={_ => scrollTo('#form-section')}>Ghi danh / Đăng nhập</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-main" href="#" onClick={_ => scrollTo('#rank-section')}>Bảng vàng</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-main" href="#" onClick={_ => scrollTo('#stat-section')}>Về cuộc thi</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container my-5 pt-5">
          <div className="row">
            <div className="col-md-6 col-lg-7 text-white mt-md-5 pt-md-5 pr-md-4 font-italic">
              <h3 className="text-center text-md-left">"Dựng ngôi nhà tất phải kén đủ thứ gỗ quý: trị lý việc nước, ắt phải nhờ sức các bậc hiền tài."</h3>
              <h5 className="text-center text-md-left mb-4 mt-4 font-itatlic">- Trích văn bia khoa thi -</h5>
            </div>
            <div id="form-section" className="col-md-6 col-lg-5 pt-5 pt-md-0 pl-md-4">
              <Card>
                <form onSubmit={this.SubmitForm}>
                  <ul className="nav nav-tabs mb-5">
                    <li className="w-50 nav-item text-center">
                      <a className={cx("nav-link", {active: !isLogin })} href="#" onClick={_ => this.setIsLogin(false)}>Ghi danh</a>
                    </li>
                    <li className="w-50 nav-item text-center">
                      <a className={cx("nav-link", {active: isLogin })} href="#" onClick={_ => this.setIsLogin(true)}>Đăng nhập</a>
                    </li>
                  </ul>
                  {alert && 
                  <div className={cx("alert my-3", {"alert-danger": !alert.success, "alert-success": alert.success})}>
                    <div style={{whiteSpace: 'pre-line'}}>
                      {alert.message}
                    </div>
                  </div>}
                  <div className="form-group mb-4">
                    <label htmlFor="">Tên tài khoản</label>
                    <input className={cx("form-control px-3 bdr-max", {"bd-main": this.state["err_Username"]})} 
                      type="text" placeholder="Tên tài khoản" onChange={this.setInput('Username')}/>
                    {this.state["err_Username"] && <span className="text-main mt-3">Tên tài khoản là bắt buộc</span>}
                  </div>
                  {!isLogin &&
                    <div className="form-group mb-4">
                      <label htmlFor="">Tên đầy đủ</label>
                      <input className={cx("form-control px-3 bdr-max", {"bd-main": this.state["err_Fullname"]})} 
                        type="text" placeholder="Tên đầy đủ" onChange={this.setInput('Fullname')} />
                    </div>                    
                  }
                  <div className="form-group mb-4">
                    <label htmlFor="">Mật khẩu</label>
                    <input className={cx("form-control px-3 bdr-max", {"bd-main": this.state["err_Password"]})} 
                      type="password" placeholder="Mật khẩu" onChange={this.setInput('Password')} />
                    {this.state["err_Password"] && <span className="text-main mt-3">Tên tài khoản là bắt buộc</span>}
                  </div>
                  {!isLogin &&
                  <div className="form-group mb-4">
                    <label htmlFor="">Xác nhận mật khẩu</label>
                    <input 
                      className="form-control px-3 bdr-max" 
                      type="password" 
                      placeholder="Nhập lại mật khẩu" 
                      onChange={this.setInput('ConfirmPassword')}  
                    />
                  </div>}
                  <div className="form-group">
                    <Button type="submit" className="w-100">
                      {isLogin ? "Đăng nhập" : "Ghi danh"}
                    </Button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
          <div className="row py-5 my-5">
            <div id="rank-section" className="col-md-6 col-lg-5 pr-md-4 order-2 order-md-1">
              <Card>
                <Title className="text-center my-4" size="3">Bảng vàng thành tích</Title>
                {
                  (
                    this.state.leaderboard &&
                    this.state.leaderboard
                    .slice(0, 10)
                    .map((user, idx) => (
                      <h4 key={user.Username} className="my-3 form-control px-3 bdr-max hover">
                        <img className="icon mr-2" src={crown} width="20" style={{marginTop:'-5px'}}/>
                        <span>{idx + 1}. {user.UserName}</span>
                        <span className="float-right">{user.Score}</span>
                      </h4>
                    ))
                  ) || "Đang tải"
                }
                <Button className="w-100 mt-2 mb-3" onClick={_ => this.setDetailLB(true)}>
                  Chi tiết
                </Button>
              </Card>
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center my-5 pt-5 pl-4 font-italic order-1 order-md-2">
              <div>
                <h3 className="text-center text-md-right">"Hiền tài là nguyên khí quốc gia. Nguyên khí thịnh thì thế nước mạnh mà hưng thịnh. Nguyên khí suy thì thế nước yếu mà thấp hèn."</h3>
                <h5 className="text-center text-md-right">- Trích văn bia khoa thi -</h5>
              </div>
            </div>
          </div>
          <div id="stat-section" className="row py-md-5 mb-5">
            <div className="col-12 my-4">
              <Title className="my-4 text-center">Những con số ấn tượng của cuộc thi</Title>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="text-center">
                <img src={people} alt="People"/>
                <h5 className="my-3"><b className="text-success">10000+</b> </h5>
                <h5 className="my-3">Sĩ tử đã ghi danh</h5>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="text-center">
                <img src={survey} alt="Submition" />
                <h5 className="my-3"><b className="text-success">5000+</b></h5>
                <h5 className="my-3">Bài thi đã được hoàn thành</h5>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="text-center">
                <img style={{marginLeft:'-10px'}} src={certification} alt="Success" />
                <h5 className="my-3"><b className="text-success">100+</b></h5>
                <h5 className="my-3">Hiền tài đã được vinh danh</h5>
              </div>
            </div>
          </div>
        </div>
        <Footer style={{ marginTop: '3rem' }}></Footer>
      </div>
    )
  }

  async componentWillMount () {
    const lb = await UserService.Leaderboard();
    console.log(lb);
    this.setState(() => ({
      leaderboard: lb
    }))
  }
}