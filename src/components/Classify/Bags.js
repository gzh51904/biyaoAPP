import React, { Component } from "react";

import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import { Menu, Icon } from "antd";
import "./Nurse.scss";
class Bags extends Component {
  render() {
    return (
      <div className="listgood">
        <div className="gehu">
          箱包
          <Icon type="right-circle" className="right-circle" />
        </div>

        <div className="listgood_c">
          <div>功能箱包</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu1.jpg")} />
              <div>拉杆箱</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu2.jpg")} />
              <div>功能包</div>
            </a>
          </li>
        </ul>

        <div className="listgood_c">
          <div>男包/皮带</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu3.jpg")} />
              <div>男士商务包</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu4.jpg")} />
              <div>男士背包</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu5.jpg")} />
              <div>皮带</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu6.jpg")} />
              <div>男士钱包卡包</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu7.jpg")} />
              <div>男士钥匙包扣</div>
            </a>
          </li>
        </ul>

        <div className="listgood_c">
          <div>时尚女包</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu8.jpg")} />
              <div>女士单肩包</div>
            </a>
          </li>
          <li>
            <a href="true">
              <img src={require("../../assets/img/hu9.jpg")} />
              <div>女士钱包手办</div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

// Bags = withStorage(Bags);

export default Bags;
