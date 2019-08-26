/**
 * Created by zhouhangfeng on 2019/8/26.
 */
import React from 'react';
import ferrari from '../assets/images/ferrari.jpeg';
import '../assets/css/index.css';
import Header from './Header'
class News extends React.Component{
    constructor(props){
        super(props);//用于父子组件传值  建议大家都这样写 super调用父组件的实例this

    //    定义数据

        this.state={
            msg:'新闻',
            list:['1111111','2222222','333333333'],
            list2:[<h2 key='1'>我是一个h2</h2>,<h2 key="2">我是一个h2</h2>],
            list3:[
                {title:'新闻1111'},
                {title:'新闻2222'},
                {title:'新闻3333'},
                {title:'新闻4444'},
            ]
        }
    }
    render(){

        let listResult = this.state.list.map(function (value,key) {
            return <li key={key}>{value}</li>
        })

        return(
            <div className="news">
                <Header title="新闻头部"/>
                <h2>{this.state.msg}</h2>

                <img src={ferrari} alt=""/>
                <img src={require('../assets/images/ferrari.jpeg')} alt=""/>
                <img src="http://img3.imgtn.bdimg.com/it/u=2326788584,2231322671&fm=26&gp=0.jpg" alt=""/>

                <hr/>

                {this.state.list2}
                <hr/>
                <ul>
                    {listResult}
                </ul>
                <hr/>
                <ul>
                    {
                        this.state.list3.map(function (value,key) {
                            return (
                                <li key={key}>{value.title}</li>
                            )
                        })
                    }
                </ul>


            </div>
        )
    }
}
export default News;