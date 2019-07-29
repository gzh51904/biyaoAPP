import React,{Component} from 'react';

import { Button } from 'element-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'element-theme-default';

import './classify.scss'
import Slider from "react-slick";
// import { NONAME } from 'dns';

// export default class SimpleSlider extends Component {
//   class Classify extends Component{

//   render() {
//     const settings = {
//       // dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows:false,
//       accessibility:true,
//     };
//     return (
//       <div className="slider">
//         <Slider {...settings}>
//           <div className="one">
//             <a href="javascript:void(0);">
//               <img src="https://bfs.biyao.com/group1/M00/F6/98/rBACVF0IN5aALph_AACJL5soNkY303.jpg"/></a>
//           </div>
//           <div className="two">
//             <a href="javascript:void(0);">
//               <img src="https://bfs.biyao.com/group1/M00/F8/53/rBACW10IN5mAXOgPAABuAIUgEqM809.jpg"/></a>           
//           </div>
//           <div className="three">
//             <a href="javascript:void(0);">
//               <img src="https://bfs.biyao.com/group1/M00/F6/98/rBACVF0IN6CACME9AACq1XX7Db8275.jpg"/></a>
//           </div>
//           <div className="four">
//             <a href="javascript:void(0);">
//               <img src="https://bfs.biyao.com/group1/M00/F8/52/rBACYV0IN6OAM3isAABaG9_HI4M934.jpg"/></a>
//           </div>
//           <div className="five">
//             <a href="javascript:void(0);">
//               <img src="https://bfs.biyao.com/group1/M00/F6/B6/rBACVF0ITYqAT2OPAAFuEqPogaw225.jpg"/></a>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
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