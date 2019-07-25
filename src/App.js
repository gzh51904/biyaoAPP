import React, { Component } from "react";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import { Badge } from "antd";

import { Menu, Icon } from "antd";

import Home from "./pages/Home";
import Classify from "./pages/Classify";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";
import "./App.css";
let AllRouter = {
  Home,
  Classify,
  Cart,
  Mine
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      navs: [
        {
          name: "Home",
          path: "/home",
          title: "首页",
          icon: "home"
        },
        {
          name: "Classify",
          path: "/classify",
          title: "分类",
          icon: "appstore"
        },
        {
          name: "Cart",
          path: "/cart",
          title: "购物车",
          icon: "shopping-cart"
        },
        {
          name: "Mine",
          path: "/mine",
          title: "我的",
          icon: "user"
        }
      ],
      current: "Home"
    };
    //改变this指向
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(data) {
    // console.log(data);
    this.setState({
      current: data.key
    });

    //路由跳转
    //点击获取路由路径
    // console.log(this.state.navs);
    let currentRouter = this.state.navs.filter(
      item => item.name === data.key
    )[0];
    console.log(currentRouter);
    this.props.history.push(currentRouter.path);
  }
  render() {
    let { navs } = this.state;
    return (
      <div className="App">
        <Switch>
          {navs.map(item => (
            <Route
              key={item.name}
              path={item.path}
              component={AllRouter[item.name]}
            />
          ))}
          {/* <Route path="/goods/:id" component={Goods}/> */}
          <Redirect from="/" to="/home" exact />
        </Switch>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {navs.map(item => (
            <Menu.Item key={item.name}>
              <Icon type={item.icon} />
              {item.title}
            </Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}
App = withRouter(App);

export default App;
