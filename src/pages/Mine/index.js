import React,{Component,Fragment} from 'react'
import axios from "axios";
import qs from 'qs';

import "./mine.css"


class Mine extends Component{
    constructor(){
        super();
		this.state={
			data:[]
		}
	}
	async componentWillMount(){
		
	let res = await axios({			
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			method: 'post',
			url: 'http://39.104.201.114:1111/mine',
			params:{source:"s1"}
		})
	
		this.setState({data:res.data.data.blockList[0].block.map(item=>item.data)})
		// console.log(this.state.data)
	}
	
	
    render(){
        return (
            <Fragment>
				<div id="z">
                <div className="personal">
                    <div className="personal-pic">
                        <img className="lazy" src="http://bfs.biyao.com/group1/M00/F5/87/rBACW10DkcaAHMHDAAAt1qdjx14684.png" alt=""/>
                    </div>
                    <div className="person-info">
                        <div className="person-name">
                            <p>180****3029</p>
                            <div className="person-message">
                                <a >
                                    <img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_nav_message@2x_750ba6a.png" alt=""/>
                                    <span className="none" id="ms_num"></span>
                                </a>
                            </div>
                        </div>
                        <div className="person-level">
                            
                                <img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_v@2x_3b946f4.png" alt=""/>					
                        </div>
                    </div>
                    <ul>
                        <li>
                            <a >
                                <img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_nav_service@2x_2d290d8.png" alt=""/>
                                <p>平台服务</p>
                            </a>
                        </li>
                        <li>
                            <a >
                                <img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_nav_setting@2x_bb1c3de.png" alt=""/>
                                <p>设置</p>
                            </a>
                        </li>
                    </ul>
               
                </div>
                <div className="order-panel">
		<div className="order-all">
			<a >
				<img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_order_full@2x_a1ea9ec.png" alt=""/>
				<p>全部订单</p>
                
			</a>
		</div>
		<div className="order-line"><img src="https://static.biyao.com/mnew/img/master/personalCenter/img_line@2x_90a5483.png" alt=""/></div>
		<ul>
			<li>
				<a >
					<img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_order_pay@2x_ad67213.png" alt=""/>
					<p>待付款</p>
					<span className="unpaid none"></span>
				</a>
			</li>
			<li>
				<a >
					<img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_order_receive@2x_1a3f235.png" alt=""/>
					<p>生产/待收货</p>
					<span className="inProductingAndSending none"></span>
				</a>
			</li>
			<li>
				<a >
					<img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_order_evaluate@2x_94d42f6.png" alt=""/>
					<p>待评价</p>
					<span className="unComment none"></span>
				</a>
			</li>
			<li id="aftersale">
				<a>
				<img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_order_refund@2x_6f9c99c.png" alt=""/>
				<p>退款/售后</p>
				</a>
			</li>
		</ul>
		
	</div>
    			<div className="entry-wrapper psre none" style={{"display": "block"}}>
		<div id="entryList" className="entry-List" style={{"paddingBottom": "0.26rem"}}>
            <ul className="entry-ul" style={{"transform":" translate(0px, 0px)"}}>
                <li className="entry-li">
                    <div className="entry-item" data-id="15" data-index="0" data-nature-index="0">
                        <div className="entry-icon">
                            <img className="icon" src="https://bfs.biyao.com/group1/M00/16/F7/rBACW10kgxmATVnNAAAPCZYRFq4043.png" />
                        
						</div>
							<h4 className="entry-text">每日挖宝</h4></div>
                    </li>
                </ul>
                <div className="iScrollHorizontalScrollbar iScrollLoneScrollbar" style={{overflow: "hidden", pointerEvents:" none",display: "none"}}>
                    <div className="iScrollIndicator" style={{transitionDuration: "0ms",display:" none", transform: "translate(8px, 0px)"}}>
                    </div>
                    </div>
     </div>
	</div>
            {/* {请求回的列表数据} */}
			{/* <div id="recommendPosition" className="recommend-position none" style="display: block;"> */}
				<div className="zrecommend">	
					<div className="recommend-title fx fx-r-c fx-c-c fx-dc">
						<p className="title">为你推荐</p>
						<div className="line"></div>
					</div>
				</div>	
		{/* 数据列表 */}
		<div id="bigContent">
		{
			this.state.data.map(item=>{
				if(!item){return}
				return (
					<div id="section-cateList" className="section-cateList section-proList clear" key={item[1].id}>
						<div className="module-list" key={item[0].id}>
							<a className="recommendLinkJump"><img src={item[0].image}/>
								<dl id="shop-show"><dt className="price"><span>￥</span><span>{item[0].priceStr}</span></dt>
								<dd className="labels"><span style={{background:"#AB7FD1",color:"#FFFFFF",border:"0.01rem solid #AB7FD1",borderRadius: ".02rem",}}>精选</span><span style={{background:"#FFFFFF",color:"#FB4C81",border:"0.01rem solid #FB4C81",borderRadius: ".02rem"}}>一起拼</span></dd><dd className="escp module-subtitle">{item[0].subtitle.split("|")[0]}</dd>
								<dd className="escp module-title">{item[0].mainTitle}</dd>
								<dd className="last-line"><span className="comment">{item[0].thirdContent}</span></dd>
								</dl>
							</a>
						</div>
						<div className="module-list" key={item[1].id}>
							<a className="recommendLinkJump"><img src={item[1].image}/>
								<dl id="shop-show"><dt className="price"><span>￥</span><span>{item[1].priceStr}</span></dt>
								<dd className="labels"><span style={{background:"#AB7FD1",color:"#FFFFFF",border:"0.01rem solid #AB7FD1",borderRadius: ".02rem",}}>精选</span><span style={{background:"#FFFFFF",color:"#FB4C81",border:"0.01rem solid #FB4C81",borderRadius: ".02rem"}}>一起拼</span></dd><dd className="escp module-subtitle">{item[1].subtitle.split("|")[0]}</dd>
								<dd className="escp module-title">{item[1].mainTitle}</dd>
								<dd className="last-line"><span className="comment">{item[1].thirdContent}</span></dd>
								</dl>
							</a>
						</div>
					</div>	
				)
			})
		}
		
		</div>	
		</div>
            </Fragment>

        )
    }
}

export default Mine;