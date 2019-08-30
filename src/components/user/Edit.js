/**
 * Created by zhouhangfeng on 2019/8/29.
 */
import React, {Component} from 'react';
class Edit extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'我是个人主页组件'
        };
    }
    render(){
        return(
            <div className="info">
                用户编辑
            </div>
        )
    }
}
export default Edit
/**
 * Created by zhouhangfeng on 2019/8/29.
 */
