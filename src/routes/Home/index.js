import React from 'react';
import { Card } from '../../components/Cards';

export function Home() {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-12">
          <h1 className="text-blue">Trang chủ</h1>
          <div className="smallline bg-blue"></div>
        </div>
      </div>
      <div className="row">
        {Array.from(Array(10)).map((_, idx) => (
          <div className="col-md-6 mb-5">
            <Card>
              <Card.Title>Hello World {idx+1}</Card.Title>
              <div className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor nam totam molestiae sed nemo dignissimos nisi ratione quidem et!
              </div>
              <button className="btn btn-blue mt-3 px-4 bsd-3">Làm bài thi</button>
            </Card>
          </div>
        ))}
        
      </div>
    </div>
  )
}