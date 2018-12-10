import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="header">
          <Link to="/"><button className="homeButton">RM</button></Link>
          <ul className="menu">
            <li className="menuItem"><a href="https://raymondmutyaba.com/cars-project/" className="menuItem">Cars Project</a></li>
          </ul>
        </div>
        <div className="content"><p className="contentText">Raymond Mutyaba</p></div>
      </div>
    );
  }
}

export default Home;
