import React,{Component} from 'react';

import { Button } from 'element-react';

import 'element-theme-default';

class Home extends Component{
    constructor(){
        super();
        this.staet= {
            datalist:[]
        }
        this.goto = this.goto.bind(this);
    }

     //页面跳转
     goto(id){
        let {history} =this.props;
        let pathname = '/details/'+id;
        console.log('id:',id,pathname)
        history.push({
            pathname
        })
    }

    render() {
        return (
          <div>
            <h3>首页</h3>
            <Button type="primary" onClick={this.goto.bind(this)}>点击跳转商品详情</Button>
          </div>
        )
      }
}

export default Home;