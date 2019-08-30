/**
 * Created by zhouhangfeng on 2019/8/27.
 */
import React, {Component} from 'react';
class Content extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        console.log(this.props.match.params.aid)
    }
    render(){
        return(
            <div>
               content
            </div>
        )
    }
}
export default Content
