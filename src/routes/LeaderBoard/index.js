import React from 'react';
import { Title } from '../../components/Title';
import { LeaderBoard } from '../../components/LeaderBoard';
import { Pagination } from '../../components/Pagination';
import { UserService } from '../../services/UserService';

export class LeaderBoardPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      leaderboard: null
    }
  }

  render () {
    return (
      <div className="container">
        <LeaderBoard className="my-4">
          <Title className="text-center my-3">Bảng vàng thành tích</Title>
          <div className="row"> 
            {
              this.state.leaderboard &&
              this.state.leaderboard
              .slice(0, 30)
              .map((user, idx) => (
                <div className="col-md-4">
                  <LeaderBoard.Cell key={user.UserName} icon={idx < 10}>
                    <span>{idx + 1}. {user.UserName}</span>
                    <span className="float-right">{user.Score}</span>
                  </LeaderBoard.Cell>
                </div>
              )) || 'Đang tải...'
            }
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Pagination total={50} pageSize={10} current={1}></Pagination>
          </div>
        </LeaderBoard>
      </div>
    )
  }

  async componentWillMount () {
    const lb = await UserService.Leaderboard();
    this.setState(() => ({
      leaderboard: lb
    }))
  }
}