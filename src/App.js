/*
 * */
import React, {Component}from 'react';
import logo from './assets/images/logo.svg';
// import './assets/css/App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './assets/css/index.scss';
import route from './model/router';
import { Layout, Menu, Icon,Breadcrumb  } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
    //render--模板    jsx语法
    constructor(props) {
        super(props);
        this.state = {
            flag: true,
            title: '我是app组件的title'
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
        <Layout>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text"><Link to="/">首页</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text"><Link to="/user">用户</Link></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span className="nav-text"><Link to="/shop">商户</Link></span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="upload" />
                        <span className="nav-text"><Link to="/news">新闻</Link></span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="upload" />
                        <span className="nav-text"><Link to="/product">商品</Link></span>
                    </Menu.Item>

                </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>



                                <br/>
                                <hr/>
                                <br/>
                                {/*严格匹配 exact*/}
                                {
                                    route.map((route,key)=>{
                                        if(route.exact){
                                            return <Route key={key} exact path={route.path} render={props=>(
                                                <route.component {...props} routes={route.routes}/>
                                            )}/>
                                        }else{
                                            return <Route key={key} path={route.path} render={props=>(
                                                <route.component {...props} routes={route.routes}/>
                                            )}/>
                                        }
                                    })
                                }


                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
            </div>
    </Router>
        );
    }

}
export default App;
