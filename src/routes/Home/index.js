import React from 'react';
import { Card } from '../../components/Cards';
import { Title } from '../../components/Title';

export function Home() {
  return (
    <div className="container">
      <div className="row mt-4 mb-5">
        <div className="col-12">
          <Title className="text-center">Trang chủ</Title>
        </div>
      </div>
      <div className="row">
        {Array.from(Array(10)).map((_, idx) => (
          <div key={idx} className="col-md-6 mb-5">
            <Card>
              <Card.Title>Hello World {idx+1}</Card.Title>
              <div className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor nam totam molestiae sed nemo dignissimos nisi ratione quidem et!
              </div>
              <button className="btn bg-cn-red text-white mt-3 px-4 bsd-2 bdr-8">Làm bài thi</button>
            </Card>
          </div>
        ))}
        
      </div>
    </div>
  )
}