import React, { Component } from 'react';
import '../assets/css/index.css';
import Header from './Header'

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
        }
    }

    //jsx
    render(){
        return (
            <div>
                <Header title='首页头部'/>
                <br/>
                <hr/>
                <h2>{this.state.msg}</h2>

            </div>
        )
    }
}

export default Home;