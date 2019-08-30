/**
 * Created by zhouhangfeng on 2019/8/28.
 */
import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Pcontent extends Component{
    constructor(props){
        super(props);
        this.state={
            list:{},
            domain:'http://a.itying.com/'
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id)
        let id = this.props.match.params.id;
        this.reqestData(id)
    }
    reqestData=(id)=>{
        let api = this.state.domain+'api/productcontent?id='+id;
        axios.get(api).then((res)=>{
            console.log(res.data.result);
            this.setState({
                list:res.data.result[0]
            })

        }).catch((err)=>{

        })
    }
     createMarkup=()=> {
        return {__html: this.state.list.content};
        }

    render(){
        return(
            <div className="pcontent">
                <Link to='/autohome'><div>返回</div></Link>
                {
                    <div>
                    <div>
                    {/*<img src="" alt=""/>*/}
                    <h2>{this.state.list.title}</h2>
                    <p>{this.state.list.price}/份</p>
                    <p>{this.state.list.description}</p>
                    </div>
                    <div>
                    <h3>商品详情</h3>
                    <div>
                        {this.state.list.img_url&&<img src={this.state.domain+this.state.list.img_url} alt=""/>}
                    <br/>
                        {/*<div dangerouslySetInnerHTML={{__html: this.state.list.content}}></div>*/}
                        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </div>
                    </div>
                    </div>
                }

                <footer>
                    <div>
                        <strong>数量：</strong>
                        <div>
                            <div>-</div>
                            <div>
                                <input type="text"/>
                            </div>
                            <div>+</div>
                        </div>
                        <button>加入购物车</button>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Pcontent;