/**
 * Created by zhouhangfeng on 2019/8/27.
 */
import React, {Component} from 'react';
class Lifecycle extends Component{
    constructor(props){
        console.log('01构造函数');
        super(props);
        this.state={
            msg:"我是一个生命周期组件"
        }
    }
    componentWillMount(){
        console.log('02组件将要挂载')
    }
    componentDidMount(){
        //dom操作   请求数据
        console.log('04组件挂载完毕')
    }
    //true 才会执行更新数据
    shouldComponentUpdate(nexProps,nextState){
        console.log('01是否要更新数据');
        console.log(nexProps);
        console.log(nextState);
        return true
    }
    componentWillUpdate(){
        console.log('01组件将要更新')
    }
    componentDidUpdate(){
        console.log('04组件更新完毕')
    }
    componentWillReceiveProps(){
        console.log('父子组件传值，父组件里改变子组件的值')
    }
    componentWillUnmount(){
        console.log('组件销毁了')
    }
    setMsg = () =>{
        this.setState({
            msg:'我是改变后的msg'
        })
    }
    render(){
        console.log('03数据渲染render')
        return(
            <div>
                <h2>{this.state.msg}----{this.props.title}</h2>
                <button onClick={this.setMsg}>改变</button>

                <br/>
                <button onClick={this.props.setTitle}>改变父组件title的值</button>
            </div>
        )
    }
}
export default Lifecycle;
