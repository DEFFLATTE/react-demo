/**
 * Created by zhouhangfeng on 2019/8/26.
 */
import React from 'react';
class List extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:''
        }
    }
    inputChange = () => {
        let val = this.refs.username;
        this.setState({
            username:val
        })
    }
    getInput = () => {
        alert(this.state.username.value)
    }
    inputKeyup = (e) => {
        console.log(e.keyCode)
        if(e.keyCode==13){
            alert(e.target.value);
        }
    }
    render(){
        return(
            <div>
            我是list组件

                <input ref="username" type="text" onChange={this.inputChange}/>
                <button onClick={this.getInput}>获取input的值</button>
                <br/>
                <br/>
                <br/>
                <h2>键盘事件</h2>
                <input type="text" onKeyUp={this.inputKeyup}/>
            </div>
        )
    }
}
export default List;