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
            <li className="menuItem"><a href="https://tictactoeplus.com/" className="menuItem">Tic Tac Toe</a></li>
          </ul>
        </div>
        <div className="body">
        </div>
        <div className="content">
          <p className="contentText">Raymond Mutyaba</p>
          <div className="social_icons">
            <a href="https://www.instagram.com/raymondmutyaba/" className="social_link">
              <svg className="instagram" viewBox="0 0 503.84 503.84">
                <path d="M256,49.47c67.27,0,75.23.26,101.8,1.47,24.56,1.12,37.9,5.22,46.78,8.67a78,78,0,0,1,29,18.85,78,78,0,0,1,18.85,29c3.45,8.88,7.55,22.22,8.67,46.78,1.21,26.57,1.47,34.53,1.47,101.8s-.26,75.23-1.47,101.8c-1.12,24.56-5.22,37.9-8.67,46.78a83.51,83.51,0,0,1-47.81,47.81c-8.88,3.45-22.22,7.55-46.78,8.67-26.56,1.21-34.53,1.47-101.8,1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78,78,0,0,1-29-18.85,78,78,0,0,1-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23,1.47-101.8c1.12-24.56,5.22-37.9,8.67-46.78a78,78,0,0,1,18.85-29,78,78,0,0,1,29-18.85c8.88-3.45,22.22-7.55,46.78-8.67,26.57-1.21,34.53-1.47,101.8-1.47m0-45.39c-68.42,0-77,.29-103.87,1.52S107,11.08,91,17.3A123.68,123.68,0,0,0,46.36,46.36,123.68,123.68,0,0,0,17.3,91c-6.22,16-10.48,34.34-11.7,61.15S4.08,187.58,4.08,256s.29,77,1.52,103.87S11.08,405,17.3,421a123.68,123.68,0,0,0,29.06,44.62A123.52,123.52,0,0,0,91,494.69c16,6.23,34.34,10.49,61.15,11.71s35.45,1.52,103.87,1.52,77-.29,103.87-1.52S405,500.92,421,494.69A128.74,128.74,0,0,0,494.69,421c6.23-16,10.49-34.34,11.71-61.15s1.52-35.45,1.52-103.87-.29-77-1.52-103.87S500.92,107,494.69,91a123.52,123.52,0,0,0-29.05-44.62A123.68,123.68,0,0,0,421,17.3c-16-6.22-34.34-10.48-61.15-11.7S324.42,4.08,256,4.08Z" transform="translate(-4.08 -4.08)"/>
                <path d="M256,126.64A129.36,129.36,0,1,0,385.36,256,129.35,129.35,0,0,0,256,126.64ZM256,340a84,84,0,1,1,84-84A84,84,0,0,1,256,340Z" transform="translate(-4.08 -4.08)"/>
                <circle cx="386.4" cy="117.44" r="30.23"/>
              </svg>
            </a>
            <a href="https://github.com/ordinaryname" className="social_link">
              <svg className="github" viewBox="0 0 120.78 117.79">
                <path d="M60.39,0A60.39,60.39,0,0,0,41.3,117.69c3,.56,4.12-1.31,4.12-2.91,0-1.44-.05-6.19-.08-11.24C28.54,107.19,25,96.42,25,96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67,6.07.43,9.26,6.22,9.26,6.22,5.39,9.23,14.13,6.57,17.57,5,.55-3.9,2.11-6.56,3.84-8.07C36,85.55,21.85,80.37,21.85,57.23A23.35,23.35,0,0,1,28.08,41c-.63-1.52-2.7-7.66.58-16,0,0,5.07-1.62,16.61,6.19a57.36,57.36,0,0,1,30.25,0C87,23.42,92.11,25,92.11,25c3.28,8.32,1.22,14.46.59,16a23.34,23.34,0,0,1,6.21,16.21c0,23.2-14.12,28.3-27.57,29.8,2.16,1.87,4.09,5.55,4.09,11.18,0,8.08-.06,14.59-.06,16.57,0,1.61,1.08,3.49,4.14,2.9A60.39,60.39,0,0,0,60.39,0Z" fill="#191717" fill-rule="evenodd"/>
                <path d="M22.87,86.7c-.13.3-.6.39-1,.19s-.69-.61-.55-.91.61-.39,1-.19.69.61.54.91Z" fill="#191717"/>
                <path d="M25.32,89.43c-.29.27-.85.14-1.24-.28a.92.92,0,0,1-.17-1.25c.3-.27.84-.14,1.24.28s.47,1,.17,1.25Z" fill="#191717"/>
                <path d="M27.7,92.91c-.37.26-1,0-1.35-.52s-.37-1.18,0-1.44,1,0,1.35.51.37,1.19,0,1.45Z" fill="#191717"/>
                <path d="M31,96.27A1.13,1.13,0,0,1,29.41,96c-.53-.49-.68-1.18-.34-1.54s1-.27,1.56.23.68,1.18.33,1.54Z" fill="#191717"/>
                <path d="M35.46,98.22c-.15.47-.82.69-1.51.49s-1.13-.76-1-1.24.82-.7,1.51-.49,1.13.76,1,1.24Z" fill="#191717"/>
                <path d="M40.4,98.58c0,.5-.56.91-1.28.92s-1.3-.38-1.31-.88.56-.91,1.29-.92,1.3.39,1.3.88Z" fill="#191717"/>
                <path d="M45,97.8c.09.49-.41,1-1.12,1.12s-1.35-.17-1.44-.66.42-1,1.12-1.12,1.35.17,1.44.66Z" fill="#191717"/>
              </svg>
            </a>
            <a href="https://stackoverflow.com/users/5563191/raymond-mutyaba" className="social_link">
              <svg className="stackoverflow" viewBox="0 0 120 120">
                <path fill="#bcbbbb" d="M84.4 93.8V70.6h7.7v30.9H22.6V70.6h7.7v23.2z"/>
                <path fill="#f48023" d="M38.8 68.4l37.8 7.9 1.6-7.6-37.8-7.9-1.6 7.6zm5-18l35 16.3 3.2-7-35-16.4-3.2 7.1zm9.7-17.2l29.7 24.7 4.9-5.9-29.7-24.7-4.9 5.9zm19.2-18.3l-6.2 4.6 23 31 6.2-4.6-23-31zM38 86h38.6v-7.7H38V86z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
