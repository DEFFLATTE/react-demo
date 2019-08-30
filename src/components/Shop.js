/**
 * Created by zhouhangfeng on 2019/8/29.
 */
import React, {Component} from 'react';
import '../assets/css/index.scss';
import ShopAdd from './shop/ShopAdd';
import ShopList from './shop/ShopList';
import {Route,Link} from 'react-router-dom'
class Shop extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <div className="user">
                <div className="content">
                    <div className="left">
                        <ul>
                            <li><Link to='/shop/'>商户列表</Link> </li>
                            <li><Link to='/shop/add'>新增商户</Link></li>
                        </ul>
                    </div>
                    <div className="right">
                        <Route exact path={`${this.props.match.url}/`} component={ShopList}></Route>
                        <Route  path={`${this.props.match.url}/add`} component={ShopAdd}></Route>

                    </div>
                </div>
            </div>
        )
    }
}
export default Shop
