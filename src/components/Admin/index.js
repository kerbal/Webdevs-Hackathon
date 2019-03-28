import React, { Component } from 'react';
import { Switch } from "react-router-dom";
import { Card } from '../Cards';
import QuestionPort from '../QuestionPort';

class Admin extends Component {
  render() {
    return (
      <div className="container">
        <h2>CÂU HỎI</h2>
        <QuestionPort/>
        <h2>&nbsp;</h2>
        <h2>ĐỀ THI</h2>
      </div>
    );
  }
}

export default Admin;