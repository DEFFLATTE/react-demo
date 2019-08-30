/**
 * Created by zhouhangfeng on 2019/8/29.
 */
import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            loginFlag:false
        };
    }
    doLogin = (e)=>{
        e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    console.log(username,password);
    if(username=='admin'&&password=='123456'){
    //    登录成功
        this.setState({
            loginFlag:true
        })
    }else{
        alert('登录失败')
    }

    }
    render(){
        if(this.state.loginFlag){
            return <Redirect to={{pathname:"/"}}/>
        }
        return(
            <div>
                <form onSubmit={this.doLogin}>
                    <input type="text" ref="username"/>
                    <br/>
                    <input type="password" ref="password"/>
                    <br/>
                    <input type="submit" value="执行登录"/>
                </form>

            </div>
        )
    }

}
export default Login;
