import React,{Component} from 'react';

import { InputNumber,Dialog,Button } from 'element-react';

import 'element-theme-default';
import { Icon } from 'antd';

import './cart.scss';

class Cart extends Component{
    constructor(){
        super();
        this.state = {
            class_name:'none',
            class_change:'none',
            value: 1,
            dialogVisible: false,
            datalist:[]
        }
        this.choose = this.choose.bind(this);
        this.change = this.change.bind(this)

    }

    choose(){
        if(this.state.class_name == 'none'){
            this.setState({
                class_name:'block',
            })
        }else if(this.state.class_name == 'block'){
            this.setState({
                class_name:'none',
            })
        }
    }

    change(){
        if(this.state.class_change == 'none'){
            this.setState({
                class_change:'block'
            })
        }else if(this.state.class_change == 'block'){
            this.setState({
                class_change:'none'
            })
        }
    }

    onChange(value) {
        this.setState({
            value
        })
    }

    render(){
        let {datalist} = this.state;
        return (
            //购物车不为空时
            <>
            <div className="container by_w" id="by_w">
                <div className="main-title">
                    <div className="title-site"></div>
                    <div className="title-fix">
                        <a href="/"><Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/></a>
                        <p className="escp">购物车</p>
                        <span id="editAll" className="" onClick={this.change.bind(this)}>{this.state.class_change=='none'?'编辑':'完成'}</span>
                    </div>
                </div>
                <div id="panel-set" className="">
                    <div className="shop-panel">
                        <div className="shop-panel-store border-b-1 clear">
                            <div className="float-right" onClick={this.change.bind(this)}><span className="store-edit" data-edit="1">{this.state.class_change=='none'?'编辑':'完成'}</span></div>
                            <div className="float-left">
                                <b className="store-check" onClick={this.choose.bind(this)}>
                                    <span className={['nocheck ', this.state.class_name=='none'?'none':''].join('')}>
                                        <Icon className="icon" type="border" style={{ fontSize: '16px', color: '#ccc' }}/>
                                    </span>
                                    <span className={['checked ', this.state.class_name=='none'?'':'none'].join('')}>
                                        <Icon className="icon" type="check-circle" theme="filled" style={{ fontSize: '16px', color: '#7f4395' }}/>
                                    </span>
                                </b>
                                <img src="https://static.biyao.com/mnew/img/master/shopCar/store-logo_87d05ed.png" className="store-logo" />
                                <a className="store-name" href="/classify/supplierHome?supplierId=130300">FRC</a>
                                <span className="icon-arrow-right">
                                    <Icon className="icon" type="right" style={{ fontSize: '16px', color: '#333' }}/>
                                </span>
                            </div>
                        </div>
                        <div className="shop-panel-product-set">
                            <div className="shop-panel-product-item border-b-1 clear">
                                <div className="float-left icon-radio">
                                    <b className="su-check" onClick={this.choose.bind(this)}>
                                        <span className={['nocheck ', this.state.class_name=='none'?'none':''].join('')} data-shopcarid="813235277" data-specialproducttype="0">
                                            <Icon className="icon" type="border" style={{ fontSize: '16px', color: '#ccc' }}/>
                                        </span>
                                        <span className={['checked ', this.state.class_name=='none'?'':'none'].join('')} data-shopcarid="813235277" data-specialproducttype="0">
                                            <Icon className="icon" type="check-circle" theme="filled" style={{ fontSize: '16px', color: '#7f4395' }}/>
                                        </span>
                                    </b>
                                </div>
                                <div className="product-pic border-1">
                                    <a href="javascript:;" className="aLinkJump" data-href="/products/1303005003010000001.html">
                                        <img className="lazy" src="https://bfs.biyao.com/group1/M00/F6/98/rBACVF0IN5aALph_AACJL5soNkY303_400x400.jpg" />
                                    </a>
                                </div>
                                <div className="product-detail">
                                    <div className={['product-name ', this.state.class_change=='none'?'':'none'].join('')}><a href="/products/1303005003010000001.html">魅力缪斯清透散粉</a></div>
                                    <div className={['product-info ', this.state.class_change=='none'?'':'none'].join('')}>
                                        <div className="product-dec">粉色</div>
                                        <div className="product-buy">
                                            <span className="product-price">
                                            ￥<i data-surfingprice="8900">89</i>
                                            </span>×<span className="product-num">{this.state.value}</span>
                                        </div>
                                    </div>
                                    <div className={['product-edit ','clear ', this.state.class_change=='none'?'none':''].join('')} data-shopcarid="813235277" data-suid="1303005003010000001">
                                        <span className="del-btn float-right" onClick={ () => this.setState({ dialogVisible: true }) }>
                                            {/* <Icon className=" " icon="el-icon-delete" /> */}
                                            <i className="icon el-icon-delete" style={{ fontSize: '16px', color: '#fff' }}></i>
                                        </span>
                                        <div className="maparea">
                                        <InputNumber defaultValue={this.state.value} onChange={this.onChange.bind(this)} min="1" max="20"></InputNumber>
                                            {/* <span className="reduce-btn font-disable" onClick={this.count(min)}>-</span>
                                            <span className="su-num">{this.state.amount}</span>
                                            <span className="add-btn " onClick={this.count(add)}>+</span> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="product-else" className={['checked ', this.state.class_change=='none'?'':'none'].join('')}></div>
                            </div>
                        </div>
                    </div>
                    <div className="shopcar-empty none" id="shopcar-empty">
                        <img src="https://static.biyao.com/mnew/img/null/shopcar_6b91960.png" width="50px" />
                        <div className="empty-til">购物车还是空的，赶紧行动吧！</div>
                        <a href="/">去逛逛</a>
                    </div>
                </div>
            </div>
            <div className="set-bottom border-t-1 clear" id="set-bottom">
                <div className="settlement float-right" id="settlement">去结算</div>
                <div className="price-ele float-right">
                    <p style={{marginBottom: 0}}><span>合计：</span><span className="total-price" id="total-price">￥<i>498</i></span></p>
                    <p className="surfing-price" style={{marginBottom: 0}}></p>
                </div>
                <div className="float-left">
                    <div id="checkAll" onClick={this.choose.bind(this)}>
                        <span className={['nocheck ', this.state.class_name=='none'?'none':''].join('')}>
                            <Icon className="icon" type="border" style={{ fontSize: '16px', color: '#ccc' }}/>
                        </span>
                        <span className={['checked ', this.state.class_name=='none'?'':'none'].join('')}>
                            <Icon className="icon" type="check-circle" theme="filled" style={{ fontSize: '16px', color: '#7f4395' }}/>
                        </span>
                        <i>全选</i>
                    </div>
                </div>
            </div>
            {/* <Button type="text" onClick={ () => this.setState({ dialogVisible: true }) }>点击打开 Dialog</Button> */}
            <Dialog
                style={{top : '50%'}}
                size="tiny"
                visible={ this.state.dialogVisible }
                onCancel={ () => this.setState({ dialogVisible: false }) }
                lockScroll={ false }
            >
                <Dialog.Body >
                <span>确定要删除该商品吗？</span>
                </Dialog.Body>
                <Dialog.Footer className="dialog-footer">
                <Button onClick={ () => this.setState({ dialogVisible: false }) }>取消</Button>
                <Button type="primary" onClick={ () => this.setState({ dialogVisible: false }) }>确定</Button>
                </Dialog.Footer>
            </Dialog>
            </>

            //购物车为空时显示
            // <div className="container by_w" id="by_w">
	        //     <div className="main-title">
		    //         <div className="title-site"></div>
		    //         <div className="title-fix">
			//             <a href="/"><Icon className="icon" type="home" style={{ fontSize: '16px', color: '#333' }}/></a>
			//             <p className="escp">购物车</p>
			//             <span id="editAll" className="none">编辑</span>
		    //         </div>
	        //      </div>
	        //     <div id="panel-set" className="none"></div>
	        //     <div className="shopcar-empty" id="shopcar-empty">
		    //         <img src="https://static.biyao.com/mnew/img/null/shopcar_6b91960.png" width="50px" />
		    //         <div className="empty-til">购物车还是空的，赶紧行动吧！</div>
		    //         <a href="/">去逛逛</a>
	        //     </div>
            // </div> 
        )
    }
}


export default Cart;