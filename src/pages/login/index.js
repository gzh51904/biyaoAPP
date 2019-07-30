import React from "react";
// import ReactDom from "react";
import "./login.css"
import axios from "axios"
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            Xstatus1:false,
            Xstatus2:false,
            codeValue1:"",
            codeValue2:"",
            regNext:false
        };
        this.showX=this.showX.bind(this);
        this.hideX=this.hideX.bind(this);
        this.clear=this.clear.bind(this);
        this.updateState=this.updateState.bind(this);
        this.reg=this.reg.bind(this);
        this.close=this.close.bind(this);
    }
    // 输入框的X出现
    close(){
        this.props.history.goBack()
    }
    componentWillMount(){
        console.log(this.props.history)
    }
    showX(type){
        switch(type){
            case 1:
                setTimeout(()=>{
                    this.setState({
                        Xstatus1:true})
                })
                break;
            case 2:
                setTimeout(()=>{
                    this.setState({
                        Xstatus2:true})
                })
                break
        }  
        this.setState({regNext:false})
    }
    hideX(type){
       switch(type){
        case 1:
            setTimeout(()=>{
                this.setState({
                    Xstatus1:false})
            })
            break;
        case 2:
            setTimeout(()=>{
                this.setState({
                    Xstatus2:false})
            })
            break;
       }         
    }
    clear=(type)=>{
        if(type===2){
            this.setState({
                codeValue2:"",               
             })
            this.refs.myCode.focus();
            this.showX(2);       
        }if(type===1){
            console.log(type)
            this.setState({
                codeValue1:"",               
             })
            this.refs.myPhone.focus();
            this.showX(1);       
        }
    }
    updateState=(type,e)=>{
        if(type===1){
            this.setState({codeValue1:e.target.value}) 
        }if(type===2){
            this.setState({codeValue2:e.target.value})
        }

    }
    reg(){
        let reg =/^1[3456789]\d{9}$/
        if(!reg.test(this.refs.myPhone.value)){
            this.setState({regNext:true})
            return 
        }if(reg.test(this.refs.myPhone.value)){
            this.setState({regNext:false})
            axios.get('http://localhost:1111/login',{params:{phone:this.state.codeValue1*1}}).then(res=>{
                // res = JSON.parse(res);
               let data = {res}.res.data
                console.log(data)
                localStorage.setItem('Authorization',data.data)
               
            }).then(this.props.history.goBack())
        }


    }
    // /^1[3456789]\d{9}$/
    render(){
        return(
            <div id="popupContent" className="popuplogin-content">
                <div className="popuplogin-half-trasprant notouchmove"></div>
                <div className="popuplogin-verify-cellphone notouchmove ">
                    <div className="popuplogin-close" id="popupClose" onClick={this.close}></div>
                    <div className="popuplogin-main">
                        <div className="popuplogin-cellphone-title">验证手机号</div>
                        <p className="popuplogin-error-prompt none" id="errorTipsp" style={{display:this.state.regNext?"block":"none"}}>手机号码错误</p>
                        <label htmlFor="username" className="popuplogin-username">
                            <input value={this.state.codeValue1} onChange={this.updateState.bind(this,1)} type="tel" id="phoneInput" placeholder="请输入手机号" name="username" maxLength="11" onFocus={(e)=>this.showX(1,e)} onBlur={this.hideX.bind(this,1)} ref="myPhone"/>
                            <span className="clear-hidden none" id="clearPhoneBtn" style={{display:this.state.Xstatus1?"inline":"none"}} onClick={this.clear.bind(this,1)}></span>
                        </label>
                        <label htmlFor="message-code" className="popuplogin-message-code">
                            <input value={this.state.codeValue2} onChange={this.updateState.bind(this,2)} type="tel" id="codeInput"  maxLength="6" placeholder="请输入验证码" onFocus={this.showX.bind(this,2)} onBlur={this.hideX.bind(this,2)} ref="myCode"/>
                            <span className="clear-hidden-code  none" id="clearCodeBtn" style={{display:this.state.Xstatus2?"inline":"none"}} onClick={this.clear.bind(this,2)}></span>
                            <span className="message-icon" id="getCodeBtn">获取验证码</span>
                        </label>
                        <div className="popuplogin-tips">
                            <span></span><p>若输入的手机号未注册必要，系统会自动帮你注册</p><p></p></div>
                        <div className="popuplogin-next-btn" id="nextBtn" onClick={this.reg}>下一步</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;