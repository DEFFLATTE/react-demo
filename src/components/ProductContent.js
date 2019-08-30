/**
 * Created by zhouhangfeng on 2019/8/27.
 */
//url模块来解析url地址
import React, {Component} from 'react';
import url from 'url';
class ProductContent extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        console.log(this.props.location.search);
        console.log(url.parse(this.props.location.search,true));
        //get传值
        console.log(url.parse(this.props.location.search,true).query.aid)
    }
    render(){
        return(
            <div>
                ProductContent
            </div>
        )
    }
}
export default ProductContent
