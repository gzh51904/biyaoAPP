import React, { Component } from "react";

import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import { Menu, Icon } from "antd";
import "./Nurse.scss";
class WomenClothing extends Component {
  render() {
    return (
      <div className="listgood">
        <div className="gehu">
          女装
          <Icon type="right-circle" className="right-circle" />
        </div>

        <div className="listgood_c">
          <div>女士内搭</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu1.jpg")} />
              <div>连衣裙</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu2.jpg")} />
              <div>针织衫</div>
            </a>
          </li>
        </ul>

        <div className="listgood_c">
          <div>女士下裤</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu3.jpg")} />
              <div>牛仔裤</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu4.jpg")} />
              <div>休闲裤</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu5.jpg")} />
              <div>半身裙</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu6.jpg")} />
              <div>短裤</div>
            </a>
          </li>
        </ul>

        <div className="listgood_c">
          <div>外衣/套装</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu8.jpg")} />
              <div>外套马甲</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu9.jpg")} />
              <div>风衣/大衣</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu7.jpg")} />
              <div>皮衣/皮草</div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

// WomenClothing = withStorage(WomenClothing);

export default WomenClothing;
