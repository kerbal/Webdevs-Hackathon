import React, {createRef} from 'react';
import { Title } from '../../components/Title';
import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search';
import ExamList from '../../components/ExamStorage/ExamList';
import { AuthService } from '../../services/AuthService';
import { Button } from '../../components/Buttons';
import { NavLink } from 'react-router-dom';
import { UserService } from '../../services/UserService';
import { history } from '../..';
import '../../components/Search/search.css';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.user = AuthService.user;
    this.codeInput = createRef();
    this.onSubmit = () => {
      let code = this.codeInput.current.value;
      if (!code) {
        return;
      }
      history.push('/app/exam/'+encodeURIComponent(code));
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4 mb-5">
          <div className="col-12">
            <Title className="text-center">Trang chủ</Title>
          </div>
        </div>
        <div>
          <div className="row mb-5">
            <div className="col-12">
              <form className="text-center" onSubmit={this.onSubmit}>
                <div className="search">
                  <i className="fa fa-terminal text-main"></i>
                  <input ref={this.codeInput} className="form-control py-4 bsd-3" type="text" placeholder="Nhập mã đề thi..."/>
                </div>
                <p className="mt-4"><small>Mã đề thi của bạn: <span class="text-danger">{this.user.Code}</span></small></p>
                <Button onClick={this.onSubmit}>Làm bài thi</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  
  // if(user.Exam.ExamId === '' || user.Exam.Score === -1) {
  //   return (
  //     <div className="container">
  //       <div className="row mt-4 mb-5">
  //         <div className="col-12">
  //           <Title className="text-center">Trang chủ</Title>
  //         </div>
  //       </div>
  //       <div>
  //         <div className="row mb-5">
  //           <div className="col-12">
  //             <Search placeholder="Tìm kiếm..."></Search>
  //           </div>
  //         </div>
  //         {/* <div className="row">
  //           <ExamList userView/>
  //         </div> */}
  //         <div className="mt-4 d-flex justify-content-center">
  //           <Pagination current={1} total={50} pageSize={10}></Pagination>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  // else {
  //   return (
  //     <div className="container my-5 d-flex align-items-center justify-content-center" style={{ height: '70vh' }}>
  //       <div className="text-center">
  //         <Title className="text-center">
  //           Chúc mừng bạn đã hoàn thành kì thi
  //         </Title>
  //         <div className="text-center">
  //           <NavLink to='/app/history'>
  //             <Button className="mt-4 px-4">
  //               Xem kết quả
  //             </Button>
  //           </NavLink>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
}