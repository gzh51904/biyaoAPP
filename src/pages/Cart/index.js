import React,{Component} from 'react';

import { Icon } from 'antd';

import './cart.scss';

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            datalist:[]
        }
    }

    render(){
        let {datalist} = this.state;
        return (
            //购物车不为空时
            // <div className="container by_w" id="by_w">
            //     <div className="main-title">
            //         <div className="title-site"></div>
            //         <div className="title-fix">
            //             <a href="/"><Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/></a>
            //             <p className="escp">购物车</p>
            //             <span id="editAll" className="">编辑</span>
            //         </div>
            //     </div>
            //     <div id="panel-set" className="">
            //         <div className="shop-panel">
            //             <div className="shop-panel-store border-b-1 clear">
            //                 <div className="float-right"><span className="store-edit" data-edit="1">编辑</span></div>
            //                 <div className="float-left">
            //                     <b className="store-check">
            //                         <span className="nocheck none">
            //                             <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                         </span>
            //                         <span className="checked">
            //                             <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                         </span>
            //                     </b>
            //                     <img src="https://static.biyao.com/mnew/img/master/shopCar/store-logo_87d05ed.png" className="store-logo" />
            //                     <a className="store-name" href="/classify/supplierHome?supplierId=130300">FRC</a>
            //                     <span className="icon-arrow-right">
            //                         <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                     </span>
            //                 </div>
            //             </div>
            //             <div className="shop-panel-product-set">
            //                 <div className="shop-panel-product-item border-b-1 clear">
            //                     <div className="float-left icon-radio">
            //                         <b className="su-check">
            //                             <span className="nocheck none" data-shopcarid="813235277" data-specialproducttype="0">
            //                                 <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                             </span>
            //                             <span className="checked" data-shopcarid="813235277" data-specialproducttype="0">
            //                                 <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                             </span>
            //                         </b>
            //                     </div>
            //                     <div className="product-pic border-1">
            //                         <a href="javascript:;" className="aLinkJump" data-href="/products/1303005003010000001.html">
            //                             <img className="lazy" src="https://bfs.biyao.com/group1/M00/F6/98/rBACVF0IN5aALph_AACJL5soNkY303_400x400.jpg" />
            //                         </a>
            //                     </div>
            //                     <div className="product-detail">
            //                         <div className="product-name"><a href="/products/1303005003010000001.html">魅力缪斯清透散粉</a></div>
            //                         <div className="product-info">
            //                             <div className="product-dec">粉色</div>
            //                             <div className="product-buy">
            //                                 <span className="product-price">
            //                                 ￥<i data-surfingprice="8900">89</i>
            //                                 </span>×<span className="product-num">1</span>
            //                             </div>
            //                         </div>
            //                         <div className="product-edit clear none" data-shopcarid="813235277" data-suid="1303005003010000001">
            //                             <span className="del-btn float-right">
            //                                 <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                             </span>
            //                             <div className="maparea">
            //                                 <span className="reduce-btn font-disable">-</span>
            //                                 <span className="su-num">1</span>
            //                                 <span className="add-btn ">+</span>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="product-else"></div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="shopcar-empty none" id="shopcar-empty">
            //         <img src="https://static.biyao.com/mnew/img/null/shopcar_6b91960.png" width="50px" />
            //         <div className="empty-til">购物车还是空的，赶紧行动吧！</div>
            //         <a href="/">去逛逛</a>
            //     </div>
            //     </div>
            // </div>


            //购物车为空时显示
            <div className="container by_w" id="by_w">
	            <div className="main-title">
		            <div className="title-site"></div>
		            <div className="title-fix">
			            <a href="/"><Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/></a>
			            <p className="escp">购物车</p>
			            <span id="editAll" className="none">编辑</span>
		            </div>
	             </div>
	            <div id="panel-set" className="none"></div>
	            <div className="shopcar-empty" id="shopcar-empty">
		            <img src="https://static.biyao.com/mnew/img/null/shopcar_6b91960.png" width="50px" />
		            <div className="empty-til">购物车还是空的，赶紧行动吧！</div>
		            <a href="/">去逛逛</a>
	            </div>
            </div> 
        )
    }
}


export default Cart;