/**
 * Created by zhouhangfeng on 2019/8/29.
 */
import React, {Component} from 'react';
import '../assets/css/index.scss';
import {Route,Link} from 'react-router-dom'
class User extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    componentDidMount(){
        console.log(this.props.routes)
    }
    render(){
        return(
            <div className="user">
                <div className="content">
                    <div className="left">
                       <ul>
                           <li><Link to='/user/'>个人中心</Link> </li>
                           <li><Link to='/user/info'>用户信息</Link></li>
                           <li><Link to='/user/edit'>用户编辑</Link></li>
                       </ul>
                    </div>
                    <div className="right">
                        {
                            this.props.routes.map((route,key)=>{
                                    if(route.exact){
                                        return <Route key={key} exact path={route.path} component={route.component}></Route>
                                    }else{
                                        return <Route key={key} path={route.path} component={route.component}></Route>
                                    }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default User
