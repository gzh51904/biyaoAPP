import React,{Component} from 'react';

import { Button } from 'element-react';

import 'element-theme-default';

class Classify extends Component{
    constructor(){
        super();
        this.staet= {

        }
    }
    render() {
        return (
          <div>
            <h3>分类</h3>
            <Button type="primary">主要按钮</Button>
            
          </div>
        )
      }
}

export default Classify;