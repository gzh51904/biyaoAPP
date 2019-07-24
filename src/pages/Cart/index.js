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
            // <div class="container by_w" id="by_w">
            //     <div class="main-title">
            //         <div class="title-site"></div>
            //         <div class="title-fix">
            //             <a href="/"><Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/></a>
            //             <p class="escp">购物车</p>
            //             <span id="editAll" class="">编辑</span>
            //         </div>
            //     </div>
            //     <div id="panel-set" class="">
            //         <div class="shop-panel">
            //             <div class="shop-panel-store border-b-1 clear">
            //                 <div class="float-right"><span class="store-edit" data-edit="1">编辑</span></div>
            //                 <div class="float-left">
            //                     <b class="store-check">
            //                         <span class="nocheck none">
            //                             <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                         </span>
            //                         <span class="checked">
            //                             <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                         </span>
            //                     </b>
            //                     <img src="https://static.biyao.com/mnew/img/master/shopCar/store-logo_87d05ed.png" class="store-logo" />
            //                     <a class="store-name" href="/classify/supplierHome?supplierId=130300">FRC</a>
            //                     <span class="icon-arrow-right">
            //                         <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                     </span>
            //                 </div>
            //             </div>
            //             <div class="shop-panel-product-set">
            //                 <div class="shop-panel-product-item border-b-1 clear">
            //                     <div class="float-left icon-radio">
            //                         <b class="su-check">
            //                             <span class="nocheck none" data-shopcarid="813235277" data-specialproducttype="0">
            //                                 <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                             </span>
            //                             <span class="checked" data-shopcarid="813235277" data-specialproducttype="0">
            //                                 <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                             </span>
            //                         </b>
            //                     </div>
            //                     <div class="product-pic border-1">
            //                         <a href="javascript:;" class="aLinkJump" data-href="/products/1303005003010000001.html">
            //                             <img class="lazy" src="https://bfs.biyao.com/group1/M00/F6/98/rBACVF0IN5aALph_AACJL5soNkY303_400x400.jpg" />
            //                         </a>
            //                     </div>
            //                     <div class="product-detail">
            //                         <div class="product-name"><a href="/products/1303005003010000001.html">魅力缪斯清透散粉</a></div>
            //                         <div class="product-info">
            //                             <div class="product-dec">粉色</div>
            //                             <div class="product-buy">
            //                                 <span class="product-price">
            //                                 ￥<i data-surfingprice="8900">89</i>
            //                                 </span>×<span class="product-num">1</span>
            //                             </div>
            //                         </div>
            //                         <div class="product-edit clear none" data-shopcarid="813235277" data-suid="1303005003010000001">
            //                             <span class="del-btn float-right">
            //                                 <Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/>
            //                             </span>
            //                             <div class="maparea">
            //                                 <span class="reduce-btn font-disable">-</span>
            //                                 <span class="su-num">1</span>
            //                                 <span class="add-btn ">+</span>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div class="product-else"></div>
            //                 </div>
            //             </div>
            //         </div>
            //         <div class="shopcar-empty none" id="shopcar-empty">
            //         <img src="https://static.biyao.com/mnew/img/null/shopcar_6b91960.png" width="50px" />
            //         <div class="empty-til">购物车还是空的，赶紧行动吧！</div>
            //         <a href="/">去逛逛</a>
            //     </div>
            //     </div>
            // </div>


            //购物车为空时显示
            <div class="container by_w" id="by_w">
	            <div class="main-title">
		            <div class="title-site"></div>
		            <div class="title-fix">
			            <a href="/"><Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/></a>
			            <p class="escp">购物车</p>
			            <span id="editAll" class="none">编辑</span>
		            </div>
	             </div>
	            <div id="panel-set" class="none"></div>
	            <div class="shopcar-empty" id="shopcar-empty">
		            <img src="https://static.biyao.com/mnew/img/null/shopcar_6b91960.png" width="50px" />
		            <div class="empty-til">购物车还是空的，赶紧行动吧！</div>
		            <a href="/">去逛逛</a>
	            </div>
            </div> 
        )
    }
}


export default Cart;