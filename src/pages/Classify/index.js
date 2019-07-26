import React, { Component } from "react";

import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import "./classify.scss";
import { Tabs, Radio } from "antd";
import Nurse from "../../components/Classify/Nurse.js";
import MenClothing from "../../components/Classify/MenClothing.js";
import WomenClothing from "../../components/Classify/WomenClothing.js";
import Bags from "../../components/Classify/Bags.js";
// let content = [Nurse, MenClothing, WomenClothing, Bags];
const tab1 = [
  "个护",
  "男装",
  "女装",
  "箱包",
  "内衣",
  "鞋靴",
  "家纺",
  "眼镜",
  "电器",
  "数码",
  "餐厨",
  "运动",
  "母婴"
];
const { TabPane } = Tabs;

class Classify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "left"
    };
  }

  render() {
    const { mode } = this.state;
    return (
      <div className="search">
        <div className="header">
          <input type="text" placeholder="请输入你想要的商品" />
        </div>
        <div className="container">
          <Tabs
            defaultActiveKey="0"
            tabPosition={mode}
            style={{}}
            // checkchildren={{ color: "#7F4395" }}
            // onTabClick
            className="tab"
          >
            {/* {[...Array(12).keys()].map(i => (
              <TabPane tab={tab1[0]} key={0}>
                {<Nurse />}
              </TabPane>
            ))} */}
            <TabPane tab={tab1[0]} key={0}>
              <Nurse />
            </TabPane>
            <TabPane tab={tab1[1]} key={1}>
              <MenClothing />
            </TabPane>
            <TabPane tab={tab1[2]} key={2}>
              <WomenClothing />
            </TabPane>
            <TabPane tab={tab1[3]} key={3}>
              <Bags />
            </TabPane>
            <TabPane tab={tab1[4]} key={4}>
              <Bags />
            </TabPane>
            <TabPane tab={tab1[5]} key={5}>
              <Bags />
            </TabPane>
            <TabPane tab={tab1[6]} key={6}>
              <Bags />
            </TabPane>
            <TabPane tab={tab1[7]} key={7}>
              <Bags />
            </TabPane>
            <TabPane tab={tab1[8]} key={8}>
              <Bags />
            </TabPane>
            <TabPane tab={tab1[9]} key={9}>
              <Bags />
            </TabPane>
            <TabPane tab={tab1[10]} key={10}>
              <Bags />
            </TabPane>
            <TabPane tab={tab1[11]} key={11}>
              <Bags />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

// List = withStorage(List);

export default Classify;
