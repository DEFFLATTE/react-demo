/**
 * Created by zhouhangfeng on 2019/8/26.
 */
import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'这是一个头部组件',
            title:'首页'
        }
    }
    render(){
        return(
            <div>
                {this.state.msg}--{this.props.title}
            </div>
        )
    }
}
export default Header
