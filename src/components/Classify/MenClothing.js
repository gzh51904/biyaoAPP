import React, { Component } from "react";

// import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import { Icon } from "antd";
import "./Nurse.scss";
class MenClothing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgurl: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    const _this = this;
    axios
      .get(
        "https://www.easy-mock.com/mock/5d22ff60f65c8e1dacc203a9/example/ming"
      )
      .then(function(response) {
        console.log(response);
        _this.setState({
          imgurl: response.data.data,
          isLoaded: true
        });
      })
      .catch(function(error) {
        console.log(error);
        _this.setState({
          isLoaded: false,
          error: error
        });
      });
  }
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <div className="listgood">
          <div className="gehu">
            男装
            <Icon type="right-circle" className="right-circle" />
          </div>

          <div className="listgood_c">
            <div>{this.state.imgurl[0].title}</div>
            <div>
              更多
              <Icon type="right" className="right" />
            </div>
          </div>
          <ul>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu1.jpg")} alt="" />
                <div>{this.state.imgurl[0].content1}</div>
              </a>
            </li>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu2.jpg")} alt="" />
                <div>{this.state.imgurl[0].content2}</div>
              </a>
            </li>
          </ul>

          <div className="listgood_c">
            <div>{this.state.imgurl[1].title}</div>
            <div>
              更多
              <Icon type="right" className="right" />
            </div>
          </div>
          <ul>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu3.jpg")} alt="" />
                <div>{this.state.imgurl[1].content1}</div>
              </a>
            </li>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu4.jpg")} alt="" />
                <div>{this.state.imgurl[1].content2}</div>
              </a>
            </li>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu5.jpg")} alt="" />
                <div>{this.state.imgurl[1].content3}</div>
              </a>
            </li>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu6.jpg")} alt="" />
                <div>{this.state.imgurl[1].content4}</div>
              </a>
            </li>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu7.jpg")} alt="" />
                <div>{this.state.imgurl[1].content5}</div>
              </a>
            </li>
          </ul>

          <div className="listgood_c">
            <div>{this.state.imgurl[2].title}</div>
            <div>
              更多
              <Icon type="right" className="right" />
            </div>
          </div>
          <ul>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu8.jpg")} alt="" />
                <div>{this.state.imgurl[2].content1}</div>
              </a>
            </li>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu9.jpg")} alt="" />
                <div>{this.state.imgurl[2].content2}</div>
              </a>
            </li>
          </ul>

          <div className="listgood_c">
            <div>{this.state.imgurl[0].title}</div>
            <div>
              更多
              <Icon type="right" className="right" />
            </div>
          </div>
          <ul>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu1.jpg")} alt="" />
                <div>{this.state.imgurl[0].content1}</div>
              </a>
            </li>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu2.jpg")} alt="" />
                <div>{this.state.imgurl[0].content2}</div>
              </a>
            </li>
          </ul>

          <div className="listgood_c">
            <div>{this.state.imgurl[1].title}</div>
            <div>
              更多
              <Icon type="right" className="right" />
            </div>
          </div>
          <ul>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu3.jpg")} alt="" />
                <div>{this.state.imgurl[1].content1}</div>
              </a>
            </li>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu4.jpg")} alt="" />
                <div>{this.state.imgurl[1].content2}</div>
              </a>
            </li>
          </ul>

          <div className="listgood_c">
            <div>{this.state.imgurl[2].title}</div>
            <div>
              更多
              <Icon type="right" className="right" />
            </div>
          </div>
          <ul>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu8.jpg")} alt="" />
                <div>{this.state.imgurl[2].content1}</div>
              </a>
            </li>
            <li>
              <a href="true">
                <img src={require("../../assets/img/hu9.jpg")} alt="" />
                <div>{this.state.imgurl[2].content2}</div>
              </a>
            </li>
          </ul>
        </div>
      );
    }
  }
}

// MenClothing = withStorage(MenClothing);

export default MenClothing;
