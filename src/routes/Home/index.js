import React from 'react';
import { Title } from '../../components/Title';
import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search';
import ExamList from '../../components/ExamStorage/ExamList';

export function Home() {
  return (
    <div className="container">
      <div className="row mt-4 mb-5">
        <div className="col-12">
          <Title className="text-center">Trang chủ</Title>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12">
          <Search placeholder="Tìm kiếm..."></Search>
        </div>
      </div>
      <div className="row">
        {/* {Array.from(Array(10)).map((_, idx) => (
          <div key={idx} className="col-md-6 mb-5">
            <Card className="bsd-3 pointer">
              <Title size="3">Hello World {idx+1}</Title>
              {idx <= 3 && <Card.Tag className="bg-main text-white" width={50} height={50}>
                <i className="fa fa-fire"></i>
              </Card.Tag>}
              <div className="row mt-3">
                <div className="col-12" title="Thời gian làm bài">
                  <span className="mr-4"><i className="fa fa-question-circle text-main mr-2"></i> 50 câu hỏi</span>
                  <span className="mr-4"><i className="fa fa-hourglass-half text-main mr-2"></i> 60 phút</span>
                  <span className="mr-4"><i className="fa fa-eye text-main mr-2"></i> 100 lượt xem</span>
                  <span><i className="fa fa-users text-main mr-2"></i> 100 lượt làm</span>
                </div>
              </div>
              <Button className="px-4 mt-3">Làm bài thi</Button>
            </Card>
          </div>
        ))} */}
        <ExamList userView/>
      </div>
      <div className="mt-4 d-flex justify-content-center">
        <Pagination current={1} total={50} pageSize={10}></Pagination>
      </div>
    </div>
  )
}