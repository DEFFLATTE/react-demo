/**
 * Created by zhouhangfeng on 2019/8/26.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'这是一个头部组件',
            title:'首页'
        }
    }
    getNews = () => {
        // alert(this.props.news.state.msg)
        this.props.news.getData();
    }
    render(){
        return(
            <div>
                <h2>{this.state.msg}--{this.props.title}</h2>
                <button onClick={this.props.run}>调用父组件的run方法</button>
                <br/>
                {/*<button onClick={this.props.news.getData}>获取整个news组件的getData</button>*/}
                <br/>
                {/*<button onClick={this.getNews}>获取整个news组件实例</button>*/}
                <br/>
                {/*<button onClick={this.props.news.getChildData.bind(this,'dajiba')}>子组件给父组件传值</button>*/}
            </div>
        )
    }
}
Header.defaultProps={
    title:'标题'
}
Header.propTypes={
    title:PropTypes.string,
    num:PropTypes.number
}
export default Header
