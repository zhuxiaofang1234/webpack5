/**
 Created by zxf on 2021/9/10
 */

import _ from 'lodash';
import './style.css';
import imagePic from './01.jpg'
import Data from './data.xml'

// Lodash, now imported by this script

function component() {
    var element = document.createElement('div');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //引入css
    element.classList.add('hello');

    //将图像添加到我们现有的div

    var myPic = new Image();
    myPic.src = imagePic;
    element.appendChild(myPic);

    console.log(Data)

    return element;
}

document.body.appendChild(component());


