import React, { Component } from "react";
import "./Nurse.scss";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import { Menu, Icon } from "antd";
class Nurse extends Component {
  render() {
    return (
      <div className="listgood">
        <div className="gehu">
          个护
          <Icon type="right-circle" className="right-circle" />
        </div>

        <div className="listgood_c">
          <div>口腔护理</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href>
              {/* <img src="../../assets/img/hu1.jpg" /> */}
              <div>电动牙刷</div>
            </a>
          </li>
          <li>
            <a href>
              {/* <img src="../../assets/img/hu1.jpg" /> */}
              <div>漱口水</div>
            </a>
          </li>
        </ul>

        <div className="listgood_c">
          <div>身体护理</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href>
              {/* <img src="../../assets/img/hu1.jpg" /> */}
              <div>脱毛</div>
            </a>
          </li>
          <li>
            <a href>
              {/* <img src="../../assets/img/hu1.jpg" /> */}
              <div>洗发</div>
            </a>
          </li>
          <li>
            <a href>
              {/* <img src="../../assets/img/hu1.jpg" /> */}
              <div>手足</div>
            </a>
          </li>
          <li>
            <a href>
              {/* <img src="../../assets/img/hu1.jpg" /> */}
              <div>沐浴</div>
            </a>
          </li>
          <li>
            <a href>
              {/* <img src="../../assets/img/hu1.jpg" /> */}
              <div>精油</div>
            </a>
          </li>
        </ul>

        <div className="listgood_c">
          <div>男士护理</div>
          <div>
            更多
            <Icon type="right" className="right" />
          </div>
        </div>
        <ul>
          <li>
            <a href>
              {/* <img src="../../assets/img/hu1.jpg" /> */}
              <div>男士护肤</div>
            </a>
          </li>
          <li>
            <a href>
              {/* <img src="../../assets/img/hu1.jpg" /> */}
              <div>剃须刀</div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

// Nurse = withStorage(Nurse);

export default Nurse;
// import React from "react";

// const Home = () => <div>首页</div>;

// export default Home;
