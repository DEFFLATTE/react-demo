/**
 * Created by zhouhangfeng on 2019/8/28.
 */
import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
/*
* http://a.itying.com/api/productlist
* http:/a.itying.com/api/productcontent?id=5acla220llf48140d0002955
* */
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            domain:'http://a.itying.com/'
        }
    }
    componentDidMount(){
        this.reqestData();
    }
    reqestData=()=>{
        let api = this.state.domain+'api/productlist';
        axios.get(api).then((res)=>{
            console.log(res.data.result);
            this.setState({
                list:res.data.result
            })
        }).catch((err)=>{

        })
    }

    render(){
        return(
            <div className="home">
                <div className="list">
                    {this.state.list.map((value,key)=>{
                        return(
                            <div className="item" key={key}>
                                <h3 className="item_cate">{value.title}</h3>
                                <ul className="item_list">
                                    {value.list.map((val,k)=>{
                                        return(
                                            <li key={k}>
                                                    <div className="inner">
                                                        <Link to={`/autodetail/${val._id}`}>
                                                        <img src={`${this.state.domain}${val.img_url}`} alt="图片显示"/>
                                                        {/*<img src={require('../../assets/images/ferrari.jpeg')} alt="图片显示"/>*/}
                                                        <p className="title">{val.title}</p>
                                                        <p className="price">${val.price}</p>
                                                        </Link>
                                                    </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
                {/*<ul>*/}
                    {/*{*/}
                        {/*this.state.list.map((value,key)=>{*/}
                            {/*return (*/}
                                {/*<li key={key}>*/}
                                    {/*<span>{value.title}</span>*/}
                                        {/*<ul>*/}
                                            {/*{ value.list.map((val,k)=>{*/}
                                                {/*return(*/}
                                                    {/*<li key={k}>{val.title}</li>*/}
                                                {/*)*/}
                                        {/*})*/}
                                            {/*}*/}
                                        {/*</ul>*/}


                                    {/*</li>*/}
                            {/*)*/}
                        {/*})*/}
                    {/*}*/}
                {/*</ul>*/}
            </div>
        )
    }
}
export default Home;