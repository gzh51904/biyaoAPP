import React, { Component } from "react";

import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import { Menu, Icon } from "antd";
import "./Nurse.scss";
class MenClothing extends Component {
  render() {
    return (
      <div className="listgood">
        <div className="gehu">
          男装
          <Icon type="right-circle" className="right-circle" />
        </div>

        <div className="listgood_c">
          <div>男士内搭</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu1.jpg")} />
              <div>T恤</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu2.jpg")} />
              <div>衬衫</div>
            </a>
          </li>
        </ul>

        <div className="listgood_c">
          <div>男士下裤</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu3.jpg")} />
              <div>休闲裤</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu4.jpg")} />
              <div>牛仔裤</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu5.jpg")} />
              <div>西裤</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu6.jpg")} />
              <div>9分裤</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu7.jpg")} />
              <div>短裤</div>
            </a>
          </li>
        </ul>

        <div className="listgood_c">
          <div>男士外套</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu8.jpg")} />
              <div>皮衣/夹克</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu9.jpg")} />
              <div>风衣/大衣</div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

// MenClothing = withStorage(MenClothing);

export default MenClothing;
