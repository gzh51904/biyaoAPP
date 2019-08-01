import React,{Component} from 'react';

import {Icon,Affix,Carousel,message } from 'antd';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { InputNumber } from 'element-react';

import {connect} from 'react-redux';
import {addAction,changeQtyAction} from '../../store/cartActions';

import './details.scss'
import 'element-theme-default';


// const success = () => {
//     message.success('加入购物车成功');
//   };

class Details extends Component{
    constructor(){
        super();
        this.state= {
            show:"show",
            cut:'one',
            reveal:'show',
            value: 1,
            color:''
        }
        this.open = this.open.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
        this.chooseColor = this.chooseColor.bind(this)
        this.buy = this.buy.bind(this)
        this.success = this.success.bind(this)
        this.login = this.login.bind(this)

    }

    //监听滚动条高度
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);	
    }
         
    handleScroll(){
        // console.log('scrollY',window.scrollY)
        if(window.scrollY <= 748){
            this.setState({
                cut:'one',
            })
            // console.log("1",this)
        }else if(  window.scrollY> 748 && window.scrollY <=1230 ){
            this.setState({
                cut:'two',
            })
            // console.log('2',this)
        }else if(window.scrollY > 1230){
            this.setState({
                cut:'three',
            })
            // console.log('3',this)
        }
    }
    
    open(){
        if(this.state.show === 'show'){
            this.setState({
                show:'hide',
            })
        }else if(this.state.show === 'hide'){
            this.setState({
                show:'show',
            })
        }
    }
    
    buy(){
        if(this.state.reveal === 'show'){
            this.setState({
                reveal:'hide',
            })
        }else if(this.state.reveal === 'hide'){
            this.setState({
                reveal:'show',
            })
        }
    }
    onChange(value) {
        this.setState({
            value
        })
    }
    chooseColor = (e)=>{
        this.setState({
            color:e.target.innerHTML
            // console.log(this.state.color)

        })
        console.log(this.props,e.target,e.target.id,e.target.innerHTML)
        console.log(this.state.color)
    }

    success(e){
        message.success('加入购物车成功');
        console.log('this',this)
        console.log('e.target',e.target)
        // if(!current){
            
        // }
        // else{

        //     changeQty({id:123,qty:current.qty+1})
        // }

      };
    
    login(){
        this.props.history.push(this.props.history.location.pathname+"/login");
    }

    render(mountNode) {
        // let {add2cart,changeQty,goodslist} = this.props;

        //左右滑动切换图片
        const settings = {
            // dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            accessibility:true,
          };
          
        return (
            <>
            <div id='j'>
            <div className="editor-wrap" id="by_w">
                {/* 【商品】【评价】【详情】【推荐】 together */}
                <Affix offsetTop={this.state.top}>
                <ul className="tabs" style={this.state.reveal==='show'?{opacity: 1, transform: "scaleY(1)"}:{opacity: 0, transform: "scaleY(0)"}}>
                        <li className={['commodity ', this.state.cut==='one'?'active':''].join('')}>
                            <img className={['dingwei ', this.state.cut==='one'?'tabs1':''].join('')} src="https://static.biyao.com/mnew/img/product/dingwei_0dc5b9b.png" alt=""/>
                            商品
                        </li>
                        <li className={['evaluate ', this.state.cut==='two'?'active':''].join('')}>
                            <img className={['dingwei ', this.state.cut==='two'?'tabs1':''].join('')} src="https://static.biyao.com/mnew/img/product/dingwei_0dc5b9b.png" alt=""/>
                            评价
                        </li>
                        <li className={['details ', this.state.cut==='three'?'active':''].join('')}>
                            <img className={['dingwei ', this.state.cut==='three'?'tabs1':''].join('')} src="https://static.biyao.com/mnew/img/product/dingwei_0dc5b9b.png" alt=""/>
                            详情
                        </li>
                    </ul></Affix>
                <div className="gl-wrap" style={{paddingBottom: "0.4rem"}}>
                    {/* 1.商品部分  */}
                    <div id="commodity">
                        {/* <!-- 轮播区域 --> */}
                        <div className="gl-slider">
                            {/* <!-- 图片轮播 --> */}
                            <div className="gl-img-slider" style={{transformStyle: "preserve-3d", position: 'relative'}}>
                                <Slider {...settings}>
                                    <div >
                                        <a href="javascript:void(0);">
                                        <img src="https://bfs.biyao.com/group1/M00/F6/98/rBACVF0IN5aALph_AACJL5soNkY303.jpg" alt=""/></a>
                                    </div>
                                    <div >
                                        <a href="javascript:void(0);">
                                        <img src="https://bfs.biyao.com/group1/M00/F8/53/rBACW10IN5mAXOgPAABuAIUgEqM809.jpg" alt=""/></a>           
                                    </div>
                                    <div >
                                        <a href="javascript:void(0);">
                                        <img src="https://bfs.biyao.com/group1/M00/F6/98/rBACVF0IN6CACME9AACq1XX7Db8275.jpg" alt=""/></a>
                                    </div>
                                    <div >
                                        <a href="javascript:void(0);">
                                        <img src="https://bfs.biyao.com/group1/M00/F8/52/rBACYV0IN6OAM3isAABaG9_HI4M934.jpg" alt=""/></a>
                                    </div>
                                    <div >
                                        <a href="javascript:void(0);">
                                        <img src="https://bfs.biyao.com/group1/M00/F6/B6/rBACVF0ITYqAT2OPAAFuEqPogaw225.jpg" alt=""/></a>
                                    </div>
                                </Slider>
                                {/* <ol className="banner-item1">
                                    <li className=""><span>1</span>/5</li>
                                </ol> */}
                            </div>
                        </div>
                        {/* <!-- 编辑器基本数据 --> */}
                        <section className="gl-base-detial-wrap">
                            <div className="price-collec-info">
                                <div className="price base-price">￥<span>89</span></div>
                                <div className="al-pay-hb">
                                    <span></span> 支持花呗分期付款
                                </div>
                                <div id="collectSign" className="collect">
                                    <i className=""></i>
                                    <p className="collectText">收藏</p>
                                </div>
                            </div>
                            <div className="makers-info">
                                <div className="markers-text">GIVENCHY制造商直供</div>
                                <div className="generate-time" >生产周期: 7天 <span style={{paddingLeft:"3px"}} className="iconfont"> <Icon type="question-circle" /></span></div>
                            </div>
                            <h1 className="product-h1-title">魅力缪斯清透散粉</h1>
                            <h3 className="product-h3-desc">细腻粉质，轻如薄烟，妆感通透不油腻，定格高级雾面妆效。</h3>
                        </section>
                        {/* <!-- 服务协议 --> */}
                        <section className="gl-service-content gl-service-wrap">
                            <ul className="gl-service-list">
                                <li><span className="iconfont"><Icon type="check-circle" /></span>7天无忧退货</li>
                                <li><span className="iconfont"><Icon type="check-circle" /></span>先行赔付</li>
                                <li><span className="iconfont"><Icon type="check-circle" /></span>超时赔偿</li>
                                <li><span className="iconfont"><Icon type="check-circle" /></span>顺丰包邮</li>
                                <li className="gl-more iconfont"><Icon type="ellipsis" style={{fontWeight:"bolder"}}/></li>
                            </ul>
                        </section>
                        {/* <!-- 体验金选项 -->
                        <!-- 站内参团 --> */}
                        <section className="tg-inner-group swiper-container swiper-container-vertical swiper-container-ios">
                            {/* <div className="swiper-wrapper" style={{transitionDuration: "0ms", transform: 'translate3d(0px, -556px, 0px)'}}> */}
                                <Carousel autoplay dotPosition="left" className="swiper-wrapper" dots="false">
                                    <div>
                                        <div>
                                            <div className="group-list swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" style={{height: '69.5px'}}>
                                                <div className="group-info">
                                                    <div className="flex-center">
                                                        <img className="leader-img" src="https://bfs.biyao.com/group1/M00/08/B9/rBACYVkYCpaARz9RAAAkXs4t7-o819.jpg" alt=""/>
                                                        <div style={{width:'2.66rem'}}>
                                                            <p className="leader-name">龙九一</p>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign:'right'}}>
                                                        <p className="group-residue" des_time="75941501">还差<span className="rsd-num">1</span>人拼成<br/>
                                                            <span className="group-residue-time">剩余<span className="h_des">20:16:42</span></span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="join-group-btn in-group-buy eventLink" gid="22016403423604395"
                                                    chsuid="1302485012010000001" gprice="228.00" data-pclk="yqp_kt_details.event_ct_button">
                                                    新人参团
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="group-list swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                                                data-swiper-slide-index="5" style={{height: '69.5px'}}>
                                                <div className="group-info">
                                                    <div className="flex-center"><img className="leader-img" src="https://bfs.biyao.com/group1/M00/F5/87/rBACW10DkcaAHMHDAAAt1qdjx14684.png" alt=""/>
                                                        <div style={{width:'2.66rem}'}}>
                                                            <p className="leader-name">独当一面的珀西瓦尔4242</p>
                                                        </div>
                                                    </div>
                                                    <div style={{textAlign:'right'}}>
                                                        <p className="group-residue" des_time="31982501">还差<span className="rsd-num">1</span>人拼成<br/>
                                                            <span className="group-residue-time">剩余<span className="h_des">08:04:03</span></span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="join-group-btn in-group-buy eventLink" gid="22016399027492923"
                                                    chsuid="1301185148010000001" gprice="94.00" data-pclk="yqp_kt_details.event_ct_button">
                                                    新人参团</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="group-list swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" style={{height: "69.5px"}}>
                                            <div className="group-info">
                                                <div className="flex-center"><img className="leader-img" src="https://bfs.biyao.com/group1/M00/F5/87/rBACW10DkcaAHMHDAAAt1qdjx14684.png" alt=""/>
                                                    <div style={{width:'2.66rem'}}>
                                                        <p className="leader-name">139****9197</p>
                                                    </div>
                                                </div>
                                                <div style={{textAlign:'right'}}>
                                                    <p className="group-residue" des_time="71116501">还差<span className="rsd-num">1</span>人拼成<br/>
                                                        <span className="group-residue-time">剩余<span className="h_des">18:56:17</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="join-group-btn in-group-buy eventLink" gid="22016402940901120"
                                                chsuid="1301805027060200001" gprice="283.00" data-pclk="yqp_kt_details.event_ct_button">
                                                新人参团</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="group-list swiper-slide swiper-slide-duplicate-next" data-swiper-slide-index="1" style={{height: '69.5px'}}>
                                            <div className="group-info">
                                                <div className="flex-center"><img className="leader-img"
                                                        src="https://bfs.biyao.com/group1/M00/EA/DC/rBACW1z0QdmAMvEfAAdFP6IMebg365_150x150.jpg" alt=""/>
                                                    <div style={{width:'2.66rem'}}>
                                                        <p className="leader-name">王尼玛的尼玛粉</p>
                                                    </div>
                                                </div>
                                                <div style={{textAlign:'right'}}>
                                                    <p className="group-residue" des_time="76158501">还差<span className="rsd-num">1</span>人拼成<br/>
                                                        <span className="group-residue-time">剩余<span className="h_des">20:20:19</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="join-group-btn in-group-buy eventLink" gid="22016403444979051"
                                                chsuid="1302235011010100001" gprice="42.00" data-pclk="yqp_kt_details.event_ct_button">
                                                新人参团</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="group-list swiper-slide" data-swiper-slide-index="2" style={{height: "69.5px"}}>
                                            <div className="group-info">
                                                <div className="flex-center"><img className="leader-img"
                                                        src="https://bfs.biyao.com/group1/M00/F5/87/rBACW10DkcaAHMHDAAAt1qdjx14684.png" alt=""/>
                                                    <div style={{width:"2.66rem"}}>
                                                        <p className="leader-name">b***5</p>
                                                    </div>
                                                </div>
                                                <div style={{textAlign:'right'}}>
                                                    <p className="group-residue" des_time="55604501">还差<span className="rsd-num">1</span>人拼成<br/>
                                                        <span className="group-residue-time">剩余<span className="h_des">14:37:45</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="join-group-btn in-group-buy eventLink" gid="22016401389708170"
                                                chsuid="1302675014010100001" gprice="53.00" data-pclk="yqp_kt_details.event_ct_button">
                                                新人参团</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="group-list swiper-slide" data-swiper-slide-index="3" style={{height: '69.5px'}}>
                                            <div className="group-info">
                                                <div className="flex-center"><img className="leader-img"
                                                        src="https://bfs.biyao.com/group1/M00/0B/1B/rBACYVkYLXGAbLagAAAM1d6drzE470.jpg" alt=""/>
                                                    <div style={{width:'2.66rem'}}>
                                                        <p className="leader-name">b***7</p>
                                                    </div>
                                                </div>
                                                <div style={{textAlign:'right'}}>
                                                    <p className="group-residue" des_time="74941501">还差<span className="rsd-num">1</span>人拼成<br/>
                                                        <span className="group-residue-time">剩余<span className="h_des">20:00:02</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="join-group-btn in-group-buy eventLink" gid="22016403323549481"
                                                chsuid="1301315014060200001" gprice="161.00" data-pclk="yqp_kt_details.event_ct_button">
                                                新人参团</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="group-list swiper-slide" data-swiper-slide-index="4" style={{height: '69.5px'}}>
                                            <div className="group-info">
                                                <div className="flex-center"><img className="leader-img"
                                                        src="https://bfs.biyao.com/group1/M00/08/B9/rBACYVkYCpaARz9RAAAkXs4t7-o819.jpg" alt=""/>
                                                    <div style={{width:'2.66rem'}}>
                                                        <p className="leader-name">龙九一</p>
                                                    </div>
                                                </div>
                                                <div style={{textAlign:'right'}}>
                                                    <p className="group-residue" des_time="75941501">还差<span className="rsd-num">1</span>人拼成<br/>
                                                        <span className="group-residue-time">剩余<span className="h_des">20:16:42</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="join-group-btn in-group-buy eventLink" gid="22016403423604395"
                                                chsuid="1302485012010000001" gprice="228.00" data-pclk="yqp_kt_details.event_ct_button">
                                                新人参团</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="group-list swiper-slide swiper-slide-prev" data-swiper-slide-index="5"
                                            style={{height: '69.5px'}}>
                                            <div className="group-info">
                                                <div className="flex-center"><img className="leader-img"
                                                        src="https://bfs.biyao.com/group1/M00/F5/87/rBACW10DkcaAHMHDAAAt1qdjx14684.png" alt=""/>
                                                    <div style={{width:'2.66rem'}}>
                                                        <p className="leader-name">独当一面的珀西瓦尔4242</p>
                                                    </div>
                                                </div>
                                                <div style={{textAlign:'right'}}>
                                                    <p className="group-residue" des_time="31982501">还差<span className="rsd-num">1</span>人拼成<br/>
                                                        <span className="group-residue-time">剩余<span className="h_des">08:04:03</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="join-group-btn in-group-buy eventLink" gid="22016399027492923"
                                                chsuid="1301185148010000001" gprice="94.00" data-pclk="yqp_kt_details.event_ct_button">
                                                新人参团</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="group-list swiper-slide swiper-slide-duplicate swiper-slide-active"
                                            data-swiper-slide-index="0" style={{height: '69.5px'}}>
                                            <div className="group-info">
                                                <div className="flex-center"><img className="leader-img"
                                                        src="https://bfs.biyao.com/group1/M00/F5/87/rBACW10DkcaAHMHDAAAt1qdjx14684.png" alt=""/>
                                                    <div style={{width:'2.66rem'}}>
                                                        <p className="leader-name">139****9197</p>
                                                    </div>
                                                </div>
                                                <div style={{textAlign:'right'}}>
                                                    <p className="group-residue" des_time="71116501">还差<span className="rsd-num">1</span>人拼成<br/>
                                                        <span className="group-residue-time">剩余<span className="h_des">18:56:17</span></span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="join-group-btn in-group-buy eventLink" gid="22016402940901120"
                                                chsuid="1301805027060200001" gprice="283.00" data-pclk="yqp_kt_details.event_ct_button">
                                                新人参团</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="group-list swiper-slide swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="1" style={{height: '69.5px'}}>
                                        <div className="group-info">
                                            <div className="flex-center"><img className="leader-img"
                                                    src="https://bfs.biyao.com/group1/M00/EA/DC/rBACW1z0QdmAMvEfAAdFP6IMebg365_150x150.jpg" alt=""/>
                                                <div style={{width:'2.66rem'}}>
                                                    <p className="leader-name">王尼玛的尼玛粉</p>
                                                </div>
                                            </div>
                                            <div style={{textAlign:'right'}}>
                                                <p className="group-residue" des_time="76158501">还差<span className="rsd-num">1</span>人拼成<br/>
                                                    <span className="group-residue-time">剩余<span className="h_des">20:20:19</span></span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="join-group-btn in-group-buy eventLink" gid="22016403444979051"
                                            chsuid="1302235011010100001" gprice="42.00" data-pclk="yqp_kt_details.event_ct_button">
                                            新人参团</div>
                                        </div>
                                    </div>
                                </Carousel>
                            {/* </div> */}
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </section>
        
                        {/* <!-- 拼团玩法 --> */}
                        <div className="gl-rule-wrap">
                            <section>
                                <div className="gl-rule-title">
                                    <div className="gl-rule-title-l">拼团玩法</div>
                                    <div className="gl-rule-title-r">
                                        <b>详细规则</b>
                                        <span className="gl-more iconfont"><Icon type="right" /></span>
                                    </div>
                                </div>
                            </section>
                            <img src="https://static.biyao.com/mnew/img/master/togetherGroup/rule@2x_c6ce1c9.png" alt="" className="gl-rule-img"/>
                        </div>
                    </div>
                    {/* <!-- 2.评价evaluate -->
                    <!-- 评价 --> */}
                    <div id="evaluate">
                        <div className="gl-comment-box aLinkJump"
                            data-href="/comment/productcommentlist?productId=1303005003&amp;stp=">
                            <div className="gl-comment-header">
                                <div className="gl-comment-header-left">商品评价 (150)</div>
                                <div className="gl-comment-header-right"><span>好评度4.8分 </span><span className="iconfont"><Icon type="right" /></span>
                                </div>
                            </div>
                            <div className="gl-comment-box-content">
                                <div className="persion-head">
                                    <div className="head-img"> <img src="https://bfs.biyao.com/group1/M00/F8/DA/rBACYV0InaCACUhwAAAJekppMKo824.png" alt=""/>
                                    </div>
                                    <div className="head-right">
                                        <div className="head-nicknam-v">
                                            <span>有***8</span>
                                            <span><img src="https://static.biyao.com/mnew/img/master/base/icon_v1@2x_9244b4d.png" alt=""/></span>
                                        </div>
                                        <div className="head-presion-time escp-double">2019.06.26&nbsp;&nbsp;颜色:粉色</div>
                                    </div>
                                </div>
                                <div className="gl-comment-box-detail">
                                    <p>超级好用!粉质很细腻，粉粉的，但是上脸不会，聚焦效果特别好，毛孔啥的都隐形了！夏天用也很好的控油！太喜欢了！味道淡淡的香味～特别喜欢</p>
                                    <ul>
                                        <li> 
                                            <img src="https://bfs.biyao.com/group1/M00/FE/C6/rBACVF0TT4GAdoHTAAUB1X8Dh7U057.jpg" alt=""/>
                                        </li>
                                        <li> 
                                            <img src="https://bfs.biyao.com/group1/M00/00/81/rBACW10TT4uADF_qAAp_wIs1z_k566.jpg" alt=""/>
                                        </li>
                                        <li> 
                                            <img src="https://bfs.biyao.com/group1/M00/FE/C6/rBACVF0TT66AHcu2AAQwDYoLcy8884.jpg" alt=""/>
                                        </li>
                                        <li> 
                                            <img src="https://bfs.biyao.com/group1/M00/FE/C6/rBACVF0TT7yATmmGAAQKEww7Oc4916.jpg" alt=""/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- 商家展示区域 --> */}
                    <section className="gl-supplier-wrap">
                        <div className="supplier-info-wrap aLinkJump"
                            data-href="/classify/supplierHome?supplierId=130300&amp;stp=%7B%22rpvid%22%3A%223a4efe97-1564044701416-e33ae964eb%22%2C%22spm%22%3A%221.500017.products_supplier.0%22%7D">
                            <div className="supplier-info-left">
                                <img src="https://bfs.biyao.com/group1/M00/F1/1F/rBACYVz98xuAWLXbAAAOYh_iz6Q593.png" alt=""/>
                            </div>
                            <div className="supplier-info-center">
                                <h2>FRC</h2>
                                <p>商家质量:4.8&nbsp;&nbsp;&nbsp;&nbsp; 服务态度: 5.0</p>
                            </div>
                            <div className="supplier-info-right">
                                <span>全部商品 14</span>
                                <span className="iconfont"><Icon type="right"/></span>
                            </div>
                        </div>
                        <div className="sipplier-img-wrap tuijian commend-list" style={{transformStyle: "preserve-3d", position: 'relative'}}>
                            {/* <ul className="commend-list"> */}
                                <Slider {...settings} >
                                    <li data-href="/products/1303005013010000001.html?stp=%7B%22rpvid%22%3A%223a4efe97-1564044701416-e33ae964eb%22%2C%22spm%22%3A%221.500017.products_recommendClassify.0%22%7D&amp;jumpTog=1"
                                        className="aLinkJump"><a className="commend-list-a" href="javascript:;">
                                            <div className="recommend-pic">
                                                <img src="https://bfs.biyao.com/group1/M00/41/A5/rBACVF05Y3eAae40AACDdeXea9I963.jpg"/>
                                            </div>
                                            <p className="recommend-tit inaline commend-list-tit ">海盐净螨皂</p>
                                            <p className="item-labels"><span style={{background:"",color:'#FB4C81',borderColor:"#FB4C81"}}>一起拼</span></p>
                                            <p className="item-price"><i>￥</i><span className="item-only-int">59</span></p>
                                        </a>
                                    </li>
                                    <li data-href="/products/1303005005010000001.html?stp=%7B%22rpvid%22%3A%223a4efe97-1564044701416-e33ae964eb%22%2C%22spm%22%3A%221.500017.products_recommendgoods.0%22%7D&amp;jumpTog=1"
                                        className="aLinkJump"><a className="commend-list-a" href="javascript:;">
                                            <div className="recommend-pic"><img src="https://bfs.biyao.com/group1/M00/17/A2/rBACYV0lWWKACdlTAACNwTVhglU236.jpg" alt=""/>
                                            </div>
                                            <p className="recommend-tit inaline commend-list-tit ">柔情缪斯之吻口红</p>
                                            <p className="item-labels"><span style={{background:'',color:'#FB4C81',borderColor:"#FB4C81"}}>一起拼</span></p>
                                            <p className="item-price"><i>￥</i><span className="item-only-int">88</span></p>
                                        </a>
                                    </li>
                                    <li data-href="/products/1303005012010000001.html?stp=%7B%22rpvid%22%3A%223a4efe97-1564044701416-e33ae964eb%22%2C%22spm%22%3A%221.500017.products_recommendgoods.0%22%7D&amp;jumpTog=1"
                                        className="aLinkJump"><a className="commend-list-a" href="javascript:;">
                                            <div className="recommend-pic">
                                                <img src="https://bfs.biyao.com/group1/M00/38/2A/rBACVF0xJhuAUc9wAAB2O1IbHBA368.jpg" alt=""/>
                                            </div>
                                            <p className="recommend-tit inaline commend-list-tit ">珍爱缪斯无瑕粉底液</p>
                                            <p className="item-labels"><span style={{background:'',color:'#FB4C81',borderColor:'#FB4C81'}}>一起拼</span></p>
                                            <p className="item-price"><i>￥</i><span className="item-only-int">79</span></p>
                                        </a>
                                    </li>
                                    <li data-href="/products/1303005007010000001.html?stp=%7B%22rpvid%22%3A%223a4efe97-1564044701416-e33ae964eb%22%2C%22spm%22%3A%221.500017.products_recommendgoods.0%22%7D&amp;jumpTog=1"
                                        className="aLinkJump"><a className="commend-list-a" href="javascript:;">
                                            <div className="recommend-pic"><img
                                                    src="https://bfs.biyao.com/group1/M00/04/24/rBACVF0bN1-ASeVCAAAjHfa1mos702.jpg" alt=""/>
                                            </div>
                                            <p className="recommend-tit inaline commend-list-tit ">冰肌丝滑隔离乳</p>
                                            <p className="item-labels"><span
                                                    style={{background:'',color:'#FB4C81',borderColor:"#FB4C81"}}>一起拼</span></p>
                                            <p className="item-price"><i>￥</i><span className="item-only-int">69</span></p>
                                        </a>
                                    </li>
                                    <li data-href="/products/1303005002010000001.html?stp=%7B%22rpvid%22%3A%223a4efe97-1564044701416-e33ae964eb%22%2C%22spm%22%3A%221.500017.products_recommendgoods.0%22%7D&amp;jumpTog=1"
                                        className="aLinkJump"><a className="commend-list-a" href="javascript:;">
                                            <div className="recommend-pic"><img
                                                    src="https://bfs.biyao.com/group1/M00/F3/EF/rBACYV0Bs4SAL7sqAAB4kquPoHQ833.jpg" alt=""/>
                                            </div>
                                            <p className="recommend-tit inaline commend-list-tit ">水漾润妍舒缓亲肌膜</p>
                                            <p className="item-labels"><span style={{background:'',color:'#FB4C81',borderColor:"#FB4C81"}}>一起拼</span></p>
                                            <p className="item-price"><i>￥</i><span className="item-only-int">69</span></p>
                                        </a>
                                    </li>
                                    <li data-href="/products/1303005011010000001.html?stp=%7B%22rpvid%22%3A%223a4efe97-1564044701416-e33ae964eb%22%2C%22spm%22%3A%221.500017.products_recommendgoods.0%22%7D&amp;jumpTog=1"
                                        className="aLinkJump"><a className="commend-list-a" href="javascript:;">
                                            <div className="recommend-pic"><img src="https://bfs.biyao.com/group1/M00/37/94/rBACW10u37qAemYSAABudWM93q4737.jpg"/>
                                            </div>
                                            <p className="recommend-tit inaline commend-list-tit ">蚕丝手工皂</p>
                                            <p className="item-labels"><span style={{background:"",color:'#FB4C81',borderColor:"#FB4C81"}}>一起拼</span></p>
                                            <p className="item-price"><i>￥</i><span className="item-only-int">59</span></p>
                                        </a>
                                    </li>
                                    <li data-href="/products/1303005006010000001.html?stp=%7B%22rpvid%22%3A%223a4efe97-1564044701416-e33ae964eb%22%2C%22spm%22%3A%221.500017.products_recommendgoods.0%22%7D&amp;jumpTog=1"
                                        className="aLinkJump"><a className="commend-list-a" href="javascript:;">
                                            <div className="recommend-pic">
                                                <img src="https://bfs.biyao.com/group1/M00/00/74/rBACW10TP8qAK7vuAABOR1drRTE015.jpg" alt=""/>
                                            </div>
                                            <p className="recommend-tit inaline commend-list-tit ">流金润唇膏</p>
                                            <p className="item-labels"><span style={{background:"",color:'#FB4C81',borderColor:"#FB4C81"}}>一起拼</span></p>
                                            <p className="item-price"><i>￥</i><span className="item-only-int">98</span></p>
                                        </a>
                                    </li>
                                    <li data-href="/products/1303005004010000001.html?stp=%7B%22rpvid%22%3A%223a4efe97-1564044701416-e33ae964eb%22%2C%22spm%22%3A%221.500017.products_recommendgoods.0%22%7D&amp;jumpTog=1"
                                        className="aLinkJump"><a className="commend-list-a" href="javascript:;">
                                            <div className="recommend-pic">
                                                <img src="https://bfs.biyao.com/group1/M00/FA/3E/rBACVF0MejmAPHdOAABkrmDKuEc057.jpg" alt=""/>
                                            </div>
                                            <p className="recommend-tit inaline commend-list-tit ">摩登缪斯精华粉底液</p>
                                            <p className="item-labels"><span style={{background:"",color:'#FB4C81',borderColor:"#FB4C81"}}>一起拼</span></p>
                                            <p className="item-price"><i>￥</i><span className="item-only-int">109</span></p>
                                        </a>
                                    </li>
                                    <li data-href="/products/1303005001010000001.html?stp=%7B%22rpvid%22%3A%223a4efe97-1564044701416-e33ae964eb%22%2C%22spm%22%3A%221.500017.products_recommendgoods.0%22%7D&amp;jumpTog=1"
                                        className="aLinkJump"><a className="commend-list-a" href="javascript:;">
                                            <div className="recommend-pic">
                                                <img src="https://bfs.biyao.com/group1/M00/F3/7D/rBACYV0A1xaAL7qZAACbqGSdmy8410.jpg" alt=""/>
                                            </div>
                                            <p className="recommend-tit inaline commend-list-tit ">双雪赋活亮肌膜</p>
                                            <p className="item-labels"><span style={{background:"",color:'#FB4C81',borderColor:"#FB4C81"}}>一起拼</span></p>
                                            <p className="item-price"><i>￥</i><span className="item-only-int">88</span></p>
                                        </a>
                                    </li>
                                </Slider>
                            {/* </ul> */}
                        </div>
                    </section>
                    {/* <!--  3.详情details -->
                    <!-- 商品详情 --> */}
                    <div id="details" className="pro-detail-warp">
                        <div className="pro-detial-rule">
                            <div className="pro-detial-top">
                                <div className={['pro-detial-top-content ', this.state.show==='show'?'':'heightAuto'].join('')}>
                                    <div>
                                        <dl>
                                            <dt>品牌</dt>
                                            <dd>F.R.C</dd>
                                        </dl>
                                        <dl>
                                            <dt>产品名称</dt>
                                            <dd>魅力缪斯清透散粉</dd>
                                        </dl>
                                        <dl>
                                            <dt>包材材质</dt>
                                            <dd>塑壳</dd>
                                        </dl>
                                        <dl>
                                            <dt>颜色</dt>
                                            <dd>粉色/绿色</dd>
                                        </dl>
                                        <dl>
                                            <dt>规格</dt>
                                            <dd>10g</dd>
                                        </dl>
                                        <dl>
                                            <dt>适用肤质</dt>
                                            <dd>所有肤质</dd>
                                        </dl>
                                        <dl>
                                            <dt>使用季节</dt>
                                            <dd>一年四季</dd>
                                        </dl>
                                        <dl>
                                            <dt>特色成分</dt>
                                            <dd>向日葵籽油、白池花籽油、油橄榄果油、有机初榨大豆油</dd>
                                        </dl>
                                        <dl>
                                            <dt>注意事项</dt>
                                            <dd>外用产品，不可用于有外伤，炎症等皮肤；如不慎入眼，请用清水清洗。 </dd>
                                        </dl>
                                    </div>
                                </div>
                                <div className="pro-detial-top-more" onClick={this.open.bind(this)}>
                                    <span className="pro-top-more-text">{this.state.show==='show'?'展开全部':'收起'}</span>&nbsp;&nbsp;
                                    <span className="iconfont pro-top-more">{this.state.show==='show'?<Icon type="down" />:<Icon type="up" />}</span>
                                </div>
                            </div>
                        </div>
                        <div className="pro-detial">
                            <div className="txq_container">
                                <div className="txq_details" id="pro-detail-content">
                                    <p><img src="https://bfs.biyao.com/group1/M00/F6/CE/rBACVF0IXD6AAx6bAACPHppcGI4645.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F6/BA/rBACVF0IT8eAYvBsAADs2I0oHtc355.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/74/rBACYV0IT8eAVE3fAABCEn2Szac862.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/75/rBACW10IT8eABfUUAAEcbKusoIE386.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/74/rBACYV0IT8eAR7iDAABS5IcSpek806.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/75/rBACW10IT8iAQs8zAADwsVGklio150.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F6/BA/rBACVF0IT8iAY6-KAAD0dWPh7SI435.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F6/BA/rBACVF0IT8iARk0uAAGoYnmpMZo275.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/75/rBACW10IT8iALVVPAADwTR5snis815.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/74/rBACYV0IT8iAZE4_AAHI1xXjllM749.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F6/BA/rBACVF0IT8iALK_3AAEgnovmhpo487.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/75/rBACW10IT8iAA_tGAAByF0q8FTY791.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/74/rBACYV0IT8iANoJTAABEzi4PJT4399.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/75/rBACW10IT8mAZO7YAAE76eblnf4732.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F6/BA/rBACVF0IT8mAWjtHAAE9Enqmbgg975.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F6/BA/rBACVF0IT8mAAInEAABxjb4L5tY313.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/75/rBACW10IT8mAEtU1AABmaFC5_xs009.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/54/rBACW10IOJSAS-KKAAEuirNpjI4059.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/53/rBACYV0IOJSADO3-AAJbI7NzpoI373.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/53/rBACYV0IOJSARg1hAAHRTSVfYPY047.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F6/9A/rBACVF0IOJSAZ1qBAAHHoehu8aE300.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/55/rBACW10IOJ-ANYFGAAEK2KQaWYo530.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/55/rBACW10IOJ-ADM_1AADbgAZLYT8800.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/53/rBACYV0IOJ-AETAPAAFEKcdxB18306.jpg" alt=""/></p>
                                    <p><img src="https://bfs.biyao.com/group1/M00/F8/53/rBACYV0IOJ-AVo9oAAGzxxq7QGc424.jpg" alt=""/></p>
                                    <p><br/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gl-footer">
                    <div className="gl-other-wrap" onClick={this.login.bind(this)}>
                        <a className="customer-service">
                            <i className="gl-icon font-icon-server iconfont"><Icon type="message" /></i>
                            <span className="gl-service-text" id="liveServerBtn">客服</span>
                        </a>
                    </div>
                    <div className="choose-gl-btn">
                        <ul className="choose-bottom-btn-wrap">
                            <li className="buy-shopcar group-buy-now eventLink" 
                                data-pclk="yqp_kt_details.event_buy_directly"
                                onClick={this.buy.bind(this)} >
                                单独购买￥89</li>
                            <li className="buy-now group-buy open-group-buy eventLink" data-pclk="yqp_kt_details.event_ct_button">
                                新人参团￥53</li>
                            <li className="group-buy-gray none" style={{background: "#ccc"}}>参团</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- 体验金弹层 --> */}
                <div className="my-surfing-wrap none">
                    <div className="gl-bg-corver"></div>
                    <div className="my-surfing-content">
                        <div className="my-surfing-header">
                            <span className="float-left">体验金</span>
                            <span className="my-surfing-rule"></span>
                            <span className="surfing-closed"></span>
                        </div>
                        <div className="my-surfing-items"></div>
                    </div>
                </div>
                {/* <!-- 体验金规则 --> */}
                <div className="my-surfing-rule-wrap none">
                    <div className="bg-rule-corver"></div>
                    <div className="my-surfing-rule-content">
                        <div className="my-surfing-header">
                            <span className="float-left">体验金使用规则</span>
                            <span className="surfing-rule-closed"></span>
                        </div>
                        <div className="surfing-rule-item">
                            一、什么是体验金？<br/>
                            体验金是必要平台商家为回馈用户给予的店铺福利。<br/><br/>
                            二、如何获得体验金？<br/>
                            用户参与抽奖后，若未中奖将随机发放体验金。用户在指定店铺购物时可按体验金使用规则享受相应满减优惠。<br/><br/>
                            三、体验金使用规则：<br/>
                            1.用户购买时如满足体验金使用规则并勾选体验金选项，则可享受相应的满减；用户，如不选择勾选体验金选项，则为不使用体验金。<br/>
                            2. 购买时每个商家订单仅可使用一个体验金；<br/>
                            3.每种体验金每用户仅可同时拥有一个，使用及过期后可再次获得；<br/>
                            4. 体验金不可转让或兑换现金；<br/>
                            5. 使用体验金购买的商品发生退货退款时体验金部分不退款。<br/>
                            6.体验金除和APP下载权益金可以共用外，不可与其他优惠共同使用，包括且不限于新手特权金，特权金，助力，一起拼等优惠；<br/><br/>
                            您领取体验金即视为您认可并同意遵守本规则。体验金规则最终解释权归必要平台所有。<br/>
                        </div>
                    </div>
                </div>
                {/* <!-- 选择规格弹层 --> */}
                <div className={['my-popuse-wrap ', this.state.reveal==='show'?'none':''].join('')}>
                    {/* <!-- 通用背景蒙层 --> */}
                    <div className="gl-bg-corver" onClick={this.buy.bind(this)}></div>
                    <div className={['choose-size-wrap ', this.state.reveal==='show'?'':'choose-size-wrap-fadeIn'].join('')}>
                        {/* <!-- 选择度数弹框头部 --> */}
                        <div className="choose-size-top">
                            <img className="choose-size-top-img" src="https://bfs.biyao.com/group1/M00/F6/98/rBACVF0IN5aALph_AACJL5soNkY303_400x400.jpg" alt="" />
                            <div className="choose-size-title-price">
                                <div className="choose-price">
                                    <div className="choose-size-alonePrice-text">￥<span className="choose-size-alonePrice">89</span>
                                    </div>
                                    {/* <!--单独购买价  --> */}
                                    <div className="choose-size-groupPrice-text none">拼团价：￥<span className="choose-size-groupPrice">53</span>
                                    </div>
                                    {/* <!--拼团价  --> */}
                                    <div className="choose-size-price-text none">单买价：￥<span className="choose-size-price">89</span></div>
                                    {/* <!--单买价  --> */}
                                </div>
                                <div className="choose-size-duration-text">生产周期：<span className="choose-size-duration">7</span>天</div>
                                <div className="choose-size-choosed-style">
                                    <span className="choose-size-choosed-tit">已选择：</span>
                                    <div className="choose-size-choosed-text">
                                        <span className="type-des">{this.state.color}，</span><span className="type-num">{this.state.value}件</span>
                                    </div>
                                </div>
                            </div>
                            <div className="close-choose-size" onClick={this.buy.bind(this)}>
                                <Icon type="close-circle" className="icon"  style={{color:'#959595',fontWeight:'none'}}/>
                            </div>
                        </div>
                        <div className="gl-choose-lens-content-wrap">
                            {/* <!-- 选择规格主体 --> */}
                            <div className="choose-size-content">
                                <div className="choose-title-wrap">
                                    <span className="lens-text">颜色</span>
                                    <span className="lens-choosed">（已选：<i className="lens-choosed-s">{this.state.color}</i>）</span>
                                    <div className="Specs-list">
                                        <div className={['specs-detial-normalSpecs ', this.state.color=== '粉色'?'specs-detial-checked':''].join('')} id="113684" onClick={this.chooseColor.bind(this)}>粉色</div>
                                        <div className={['specs-detial-normalSpecs ', this.state.color=== '绿色'?'specs-detial-checked':''].join('')} id="113685" onClick={this.chooseColor.bind(this)}>绿色</div>
                                    </div>
                                </div>
                                {/* <!-- 选择数量 --> */}
                                <div className="choose-num-wrap">
                                    <div className="choose-num-test">购买数量</div>
                                    <InputNumber size="small" defaultValue={this.state.value} onChange={this.onChange.bind(this)} min="1" max="20" className="num"></InputNumber>
                                </div>
                                <div className="group-limit-num none">限购1件</div>
                            </div>
                        </div>
                        {/* <!-- 底部按钮 --> */}
                        <div className="choose-size-bottom">
                            <div className="no-store-btn none">原材料库存不足</div>
                            <ul className="choose-bottom-btn-wrap">
                                <li className="buy-shopcar-alone buy-alone" onClick={this.success.bind(this)}>加入购物车</li>
                                <li className="eventLink buy-now-choose buy-alone buy-go-alone" onClick={this.login.bind(this)}>立即购买</li>
                                <li className="no-store-btn none">原材料库存不足</li>
                                <li className="eventLink buy-now-choose buy-go-group none" style={{width: '7.5rem',height: '0.98rem'}}>
                                    <div className="buy-go-group-tip">
                                        支付<span className="ogPrice">89</span>元，拼成返<span className="rePrice">36</span>元
                                    </div>
                                    <div className="confrim-border-line"></div>
                                    <div className="buy-go-group-confrim">
                                        <p className="group-confrim-p01">确定</p>
                                        <p className="group-confrim-p02">(100%成团)</p>
                                    </div>
                                </li>
                                <li className="eventLink buy-now-choose buy-in-group none" data-pclk="yqp_feature_page.event_pay1_button">确定</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- 商家服务说明弹层 --> */}
                <div className="supplier-services-explain-wrap none">
                    {/* <!-- 通用背景蒙层 --> */}
                    <div className="gl-bg-corver-supplier"></div>
                    <div className="supplier-services-detial-wrap">
                        <div className="supplier-detial-top">服务说明</div>
                        <ul className="supplier-detial-content">
                            <li className="supplier-detial-item">
                                <div className="supplier-detial-icon">
                                    <i className="icon el-icon-circle-check"></i>
                                </div>
                                <div className="supplier-detial-right-con">
                                    <div className="supplier-detial-title">7天无忧退货</div>
                                    <div className="supplier-detial-text">根据国家七天无理由退货规范，为您办理退货退款，具体退货政策见商品详情页。</div>
                                </div>
                            </li>
                            <li className="supplier-detial-item">
                                <div className="supplier-detial-icon">
                                    <i className="icon el-icon-circle-check"></i>
                                </div>
                                <div className="supplier-detial-right-con">
                                    <div className="supplier-detial-title">先行赔付</div>
                                    <div className="supplier-detial-text">争议可申诉，申诉成功，立即退款。</div>
                                </div>
                            </li>
                            <li className="supplier-detial-item">
                                <div className="supplier-detial-icon">
                                    <i className="icon el-icon-circle-check"></i>
                                </div>
                                <div className="supplier-detial-right-con">
                                    <div className="supplier-detial-title">超时赔偿</div>
                                    <div className="supplier-detial-text">未按承诺时间发货，系统自动赔付（赔款金额为订单商品金额的30%，上限500元）。</div>
                                </div>
                            </li>
        
                            <li className="supplier-detial-item">
                                <div className="supplier-detial-icon">
                                    <i className="icon el-icon-circle-check"></i>
                                </div>
                                <div className="supplier-detial-right-con">
                                    <div className="supplier-detial-title">顺丰包邮</div>
                                    <div className="supplier-detial-text">运费由商家承担</div>
                                </div>
                            </li>
        
                        </ul>
        
                    </div>
                    <div className="policy-btn">确定</div>
                </div>
                {/* <!-- 评论 --> */}
                <div className="fxmy comment-recommend-popuse none" id="sppj">
                    <div className="comment-content-wrap">
                        <div className="main-title">
                            <div className="title-site"></div>
                            <div className="title-fix">
                                <p className="escp">商品评价(<span id="pjcount">150</span>)</p>
                                <span className="back-editor">
                                    <i className="icon el-icon-arrow-right"></i>
                                </span>
                            </div>
                        </div>
                        <div className="m_pjdl">
                            <div className="m_pftitle">
                                <span className="m_mycd">商品满意度</span>
                                <span className="m_m_r" id="Score"></span>
                                <span className="m_xxs">4.8</span>
                            </div>
                            <div className="comments" id="comments">
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- 尺码对照表 --> */}
                <div className="all-group-window none">
                    <div className="inner-group-mask"></div>
                    {/* <!-- 站内参团表 --> */}
                    <div className="all-group-list">
                        <div className="more-group-title">正在拼团<span className="groups-close-btn"></span></div>
                        <div className="group-lists" id="wrapper"></div>
                    </div>
                </div>
                <div className="group-light-box none">
                    <div className="group-lightbox-content">
                        <div className="group-lightbox-title"></div>
                        <div className="group-lightbox-desc">您是必要的老用户<br/>把参团机会留给新人吧～</div>
                    </div>
                    <div className="group-lightbox-button">
                        <span className="checked-tip-btn group-home">去首页逛逛</span>
                    </div>
                </div>
                <div className="group-light-box-mask none"></div>
                <div className="older-user-guide none">
                    <div className="ou-guide-mask"></div>
                    <img className="ou-guide-img" src="https://static.biyao.com/mnew/img/base/zwpic_5f672e7.png" alt=""/>
                    {/* <!--   src="https://static.biyao.com/m/img/master/togetherGroup/novice_guide@2x.png --> */}
                    <div className="guide-bottom-btn">立即开团￥<span></span></div>
                </div>
            </div>
            <div className="index-foot-xyword">
                <p className="xy-link-wrap">
                    <a href="http://static3.biyao.com/pc/www/html/xieyi.html">《用户服务协议》</a>
                     | <a href="http://static4.biyao.com/pc/www/html/yinsi.html"> 《隐私政策》</a>
                </p>
                <p className="word-wrap">
                    必要商城提示您，产品“由某制造商出品”仅为陈述制造商既往生产经历，并不意味着相应产品与特定品牌产品相同或近似。
                </p>
            </div>
            {/* <div class="dialog-house" style={this.state.tips==='in'?{opacity: 0, display: 'none'}:{opacity: 100, display: 'block'}}>加入购物车成功</div> */}
            </div>
            </>
        )
      }
}

// let mapStateToProps = (state,ownprops)=>{
//     return {
//         // goodslist:state.cart.goodslist
        
//     }
// }

// let mapDispatchToProps = (dispatch,ownprops)=>{
//     return {
//         add2cart(details){
//             dispatch(addAction(details))
//         },
//         // changeQty({id,qty}){
//         //     dispatch(changeQtyAction({id,qty}))
//         // }
//     }
// }

// Details = connect(mapStateToProps,mapDispatchToProps)(Details);


export default Details;