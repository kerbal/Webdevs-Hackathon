import React from 'react';
import { history } from '../..';
import './NavigationBar.css';

const map = {
  'app': 'Trang chủ',
  'admin': 'Quản lí',
  'exams': 'Đề thi',
  'questions': 'Câu hỏi',
  'history': 'Lịch sử',
  'leaderboard': 'Bảng vàng'
}

class NavigationBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let path = this.props.pathname.split('/');
    path.shift();
    return (
      <div className="navigation-bar mt-3 font-weight-bold">
        <div className="container">
        {
          path.map((subPath, index) => (
            !this.props.except.includes(subPath) &&
            <div className="nav" key={`${subPath}-${index}`}>
              <div
                key={index}
                id={`nav-${index}`}
                onClick={this.onClick}
                className="route"
              >
                {(map.hasOwnProperty(subPath) && map[subPath]) || subPath}
              </div>
              {
                index < path.length - 1 &&
                <span className="fa fa-chevron-right splitter"/>
              }
            </div>
          ))
        }
        </div>
      </div>
    )
  }

  onClick = (event) => {
    try {
      const index = event.target.id.split('-')[1];
      const rawPath = history.location.pathname;
      const path = rawPath.split(/[&/]+/);
      path.shift();
      let goto = '';
      for(let i = 0; i <= index; i++) {
        goto = goto + path[i] + (rawPath[rawPath.indexOf(path[i]) + path[i].length] || '');
      }
      if(['&', '/', '-'].includes(goto[goto.length - 1])) {
        goto = goto.substring(0, goto.length - 1);
      }
      if('/' + goto != rawPath) {
        history.push(`/${goto}`);
      }
    }
    catch (error) {
      console.log(error);
    }
  }
}

export default NavigationBar;