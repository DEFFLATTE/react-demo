import React, { Component } from 'react';
import '../assets/css/index.scss';
import Header from './Header';
import Axios from './Axios';
import FetchJsonp from './FetchJsonp';
import {Link} from 'react-router-dom';
import { Button,Icon } from 'antd';

/*
* 绑定属性注意
*class--className
 * for --htmlFor
**/
class Home extends Component{
    //构造器
    constructor(props){
        //继承Component
        super(props);

    //    定义数据
        this.state={
            msg:'我是一个首页组件',
            num:123
        }
    }

    //jsx
    render(){
        return (
            <div>
                <Button type="primary">antd按钮</Button>
                <br/>
                <Icon type="apple" className="red"/>
                <br/>
                <button><Link to='/login'>跳转到登录页面</Link></button>
                <Header title={this.state.msg} num={this.state.num}/>
                <br/>
                <hr/>
                <h2>{this.state.msg}</h2>
                <br/>
                <Axios/>
                <FetchJsonp/>

            </div>

        )
    }
}

export default Home;