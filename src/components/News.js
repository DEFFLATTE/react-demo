/**
 * Created by zhouhangfeng on 2019/8/26.
 */
import React from 'react';
import ferrari from '../assets/images/ferrari.jpeg';
import '../assets/css/index.scss';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";
import { Calendar } from 'antd';
class News extends React.Component{
    constructor(props){
        super(props);//用于父子组件传值  建议大家都这样写 super调用父组件的实例this

    //    定义数据

        this.state={
            title:'新闻组件',
            msg:'我是新闻组件的msg',
            list:[
                {
                    aid:'1',
                    title:'我是新闻1111'
                },
                {
                    aid:'2',
                    title:'我是新闻2222'
                },
                {
                    aid:'3',
                    title:'我是新闻3333'
                },
                {
                    aid:'4',
                    title:'我是新闻4444'
                },

            ]
        }
    }
    onPanelChange=(value, mode) => {
    console.log(value, mode);
        }
    run = () => {
        alert('我是父组件的run方法')
        }
        getData = ()=> {
        alert(this.state.title+'getData')
        }
    getChildData = (result) => {
        this.setState({
            msg:result
        })
    }
    //父组件主动调用子组件的方法
    getFooter = () => {
        // alert(this.refs.footer.state.msg)
        this.refs.footer.run()
    }
    render(){
        return(
            <div className="news">
                我是新闻组件
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                           return (
                               <li key={key}>
                                   <Link to={`/content/${value.aid}`}>{value.title}</Link>
                               </li>
                           )
                        })
                    }


                </ul>
                <Calendar onPanelChange={this.onPanelChange.bind(this)} />
            </div>
        )
    }
}
export default News;