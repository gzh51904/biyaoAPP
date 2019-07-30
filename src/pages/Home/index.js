import React,{Component} from 'react';

import { Button,Input,Tabs,} from 'element-react';
// import { Carousel } from 'antd';
import { Carousel, WingBlank }from 'antd-mobile'; // 加载 JS
import 'antd-mobile/lib/date-picker/style/css'; 
// import 'antd/dist/antd.css';
import 'element-theme-default';
import './home.scss';
import {api} from '../utils';
class Home extends Component{
    constructor(){
        super();
        this.state= {
            datalist:[],
            data: ['group1/M00/F9/E7/rBACVF0MM0aAUjXiAAE-pwtvmik813', 'group1/M00/02/8E/rBACVF0ZYxaAbpHEAAC05gUoNhQ260', 'group1/M00/01/28/rBACW10Udg6AK-9oAADgjov5WkA483','group1/M00/37/39/rBACW10uviqANqpGAAFdTUiMADU900','group1/M00/F8/56/rBACYV0IOwGAAocMAAB7vb8YcUA428','group1/M00/2F/1F/rBACYV0oT3WAS98iAAFaVH84uy4370'],
            imgHeight: 176,
        };
        
        
        // api.get('floorList?pageIndex=1',{
        //   params:{
        //     pageIndex:'1'
        //     isTab:1,
        //     platform:'mweb'
        //   }
        // }).then(res=>{
        //   console.log('res:',res)
        // })
      
        this.goto = this.goto.bind(this);
    }
    //请求数据
        async componentWillMount(){
          let res = await api.get('floorList?pageIndex=1',{

          })
          console.log(res)
        }
        //走马灯
        componentDidMount(){
          // simulate img loading
          setTimeout(() => {
            this.setState({
              data: ['group1/M00/F9/E7/rBACVF0MM0aAUjXiAAE-pwtvmik813', 'group1/M00/02/8E/rBACVF0ZYxaAbpHEAAC05gUoNhQ260', 'group1/M00/01/28/rBACW10Udg6AK-9oAADgjov5WkA483','group1/M00/37/39/rBACW10uviqANqpGAAFdTUiMADU900','group1/M00/F8/56/rBACYV0IOwGAAocMAAB7vb8YcUA428','group1/M00/2F/1F/rBACYV0oT3WAS98iAAFaVH84uy4370'],
            });
          }, 100);
        };
        //列表加载滚动

     //页面跳转
     goto(id){
        let {history} =this.props;
        let pathname = '/details/'+id;
        console.log('id:',id,pathname)
        history.push({
            pathname
        })
    }
    handleIconClick(ev) {

    }
    render() {
        return (
          <div>
            <div className="nav_lz">  
              <Input
                icon="search"
                placeholder="请输入你想要的商品"
                onIconClick={this.handleIconClick.bind(this)}
              />
            </div>
            <div>
            <Tabs activeName="1" onTabClick={ (tab) => console.log(tab.props.name) }>
                <Tabs.Pane label="推荐" name="1">
                  <WingBlank>
                    <Carousel
                      autoplay={true}
                      infinite
                      // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                      // afterChange={index => console.log('slide to', index)}
                      dots={true}
                    >
                      {this.state.data.map(val => (
                        <a
                          key={val}
                          href="#"
                          style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                          <img
                            src={`https://bfs.biyao.com/${val}.jpg`}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                              // fire window resize event to change height
                              window.dispatchEvent(new Event('resize'));
                              this.setState({ imgHeight: 'auto' });
                            }}
                          />
                        </a>
                      ))}
                    </Carousel>
                    <div className="guarantee_g">
                      <p>
                      <span>大牌品质</span><span className="icon-line"></span>
                      <span>工厂价格</span><span className="icon-line"></span>
                      <span>分期支付</span><span className="icon-line"></span>
                      <span>顺丰包邮</span><span className="icon-line"></span>
                      <span>无忧退款</span>
                      </p>
                    </div>
                    <div className="section-cateList section-proList" id="section-cateList">
                      <div className="titleline">
                        <div className="titleline-box">
                          <a href="#">
                            <span className="mainTitle" >热销 · 好评</span>
                            <p>用户购买热度实时推荐</p>
                          </a>
                        </div>
                      </div>
                      <div className="blockline">
                        <div className="blockline"></div></div>
                    </div>
                    <div className="doubleRowList">
                      <div className="module-list">
                        <a className="recommendLinkJump">
                          <img src="https://bfs.biyao.com/group1/M00/5D/D2/rBACYVuxjUuABuHaAAB0wcL8WiU579.jpg"/>
                            <dl id="shop-show">
                              <dt className="price">
                                <span>￥</span><span>98</span>
                              </dt>
                              <dd className="labels">
                                <span className="labels_1">精选</span>
                                <span className="labels_2">一起拼</span>
                              </dd>
                              <dd className="escp module-subtitle">LA MER原料制造商直供</dd>
                              <dd className="escp module-title">冻干多肽抗皱面膜 8片</dd>
                              <dd className="last-line"><span className="comment">853条好评</span>
                              </dd>
                            </dl>
                            </a>
                      </div>
                      <div className="module-list">
                           <a className="recommendLinkJump" href="javascript:void(0);" data-href="/products/1301755051010000001.html?stp=%7B%22rpvid%22%3A%22a365ed06-1564391110906-2ddeddce20%22%2C%22spm%22%3A%221.500001.moses%3Apid_25.f%7C1%7C1%7C1%22%2C%22aid%22%3A%22%7B%5C%22rcd%5C%22%3A%5C%2200285604712746d0.1564391111495%5C%22%7D%22%7D&amp;jumpTog=1">
                           <img src="https://bfs.biyao.com/group1/M00/2E/11/rBACVFqiIGyAM2znAABUq-P7T8Y111.jpg"/>
                            <dl id="shop-show">
                              <dt className="price">
                                  <span>￥</span><span>59</span>
                              </dt>
                              <dd className="labels">
                                <span className="labels_1">精选</span>
                                <span className="labels_2">一起拼</span>
                              </dd>
                              <dd className="escp module-subtitle">LIBMAN制造商直供</dd>
                              <dd className="escp module-title">强韧丁腈家务手套 3双装</dd>
                              <dd className="last-line">
                                <span className="comment">744条好评</span>
                              </dd>
                            </dl>
                            </a>
                      </div>
                     </div>
                     <div className="doubleRowList">
                      <div className="module-list">
                        <a className="recommendLinkJump">
                          <img src="https://bfs.biyao.com/group1/M00/5D/D2/rBACYVuxjUuABuHaAAB0wcL8WiU579.jpg"/>
                            <dl id="shop-show">
                              <dt className="price">
                                <span>￥</span><span>98</span>
                              </dt>
                              <dd className="labels">
                                <span className="labels_1">精选</span>
                                <span className="labels_2">一起拼</span>
                              </dd>
                              <dd className="escp module-subtitle">LA MER原料制造商直供</dd>
                              <dd className="escp module-title">冻干多肽抗皱面膜 8片</dd>
                              <dd className="last-line"><span className="comment">853条好评</span>
                              </dd>
                            </dl>
                            </a>
                      </div>
                      <div className="module-list">
                           <a className="recommendLinkJump" href="javascript:void(0);" data-href="/products/1301755051010000001.html?stp=%7B%22rpvid%22%3A%22a365ed06-1564391110906-2ddeddce20%22%2C%22spm%22%3A%221.500001.moses%3Apid_25.f%7C1%7C1%7C1%22%2C%22aid%22%3A%22%7B%5C%22rcd%5C%22%3A%5C%2200285604712746d0.1564391111495%5C%22%7D%22%7D&amp;jumpTog=1">
                           <img src="https://bfs.biyao.com/group1/M00/2E/11/rBACVFqiIGyAM2znAABUq-P7T8Y111.jpg"/>
                            <dl id="shop-show">
                              <dt className="price">
                                  <span>￥</span><span>59</span>
                              </dt>
                              <dd className="labels">
                                <span className="labels_1">精选</span>
                                <span className="labels_2">一起拼</span>
                              </dd>
                              <dd className="escp module-subtitle">LIBMAN制造商直供</dd>
                              <dd className="escp module-title">强韧丁腈家务手套 3双装</dd>
                              <dd className="last-line">
                                <span className="comment">744条好评</span>
                              </dd>
                            </dl>
                            </a>
                      </div>
                     </div>      
                  </WingBlank>
                </Tabs.Pane>
                <Tabs.Pane label="美妆" name="2">配置管理</Tabs.Pane>
                <Tabs.Pane label="个护" name="3">角色管理</Tabs.Pane>
                <Tabs.Pane label="女装" name="4">定时补偿任务</Tabs.Pane>
                <Tabs.Pane label="男装" name="5">用户管理</Tabs.Pane>
                <Tabs.Pane label="箱包" name="6">配置管理</Tabs.Pane>
                <Tabs.Pane label="内衣配饰" name="7">角色管理</Tabs.Pane>
                <Tabs.Pane label="鞋靴" name="8">定时补偿任务</Tabs.Pane>
                <Tabs.Pane label="家纺" name="9">用户管理</Tabs.Pane>
                <Tabs.Pane label="眼镜" name="10">配置管理</Tabs.Pane>
                <Tabs.Pane label="电器" name="11">角色管理</Tabs.Pane>
                <Tabs.Pane label="数码" name="12">定时补偿任务</Tabs.Pane>
                <Tabs.Pane label="餐厨" name="13">用户管理</Tabs.Pane>
                <Tabs.Pane label="运动" name="14">配置管理</Tabs.Pane>
                <Tabs.Pane label="母婴" name="15">角色管理</Tabs.Pane>
                <Tabs.Pane label="家装" name="16">定时补偿任务</Tabs.Pane>
                <Tabs.Pane label="家具" name="17">用户管理</Tabs.Pane>
                <Tabs.Pane label="饮食" name="18">配置管理</Tabs.Pane>
                <Tabs.Pane label="汽配" name="19">角色管理</Tabs.Pane>
                <Tabs.Pane label="正餐" name="20">定时补偿任务</Tabs.Pane>
                <Tabs.Pane label="宠物" name="21">用户管理</Tabs.Pane>
                <Tabs.Pane label="定制" name="22">配置管理</Tabs.Pane>
                <Tabs.Pane label="健康保健" name="23">角色管理</Tabs.Pane>
              </Tabs>
              </div>
            <Button type="primary" onClick={this.goto.bind(this)}>点击跳转商品详情</Button>
          </div>
        )
      }
}

export default Home;