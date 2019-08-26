/**
 * Created by zhouhangfeng on 2019/8/26.
 */
import React,{Component} from 'react';
class ReactForm extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:"react表单",
            name:'',
            sex:'1',
            citys:[
                '北京','上海','深圳'
            ],
            city:'',
            hobby:[
                {
                    title:'睡觉',
                    checked:true
                },
                {
                    title:'吃饭',
                    checked:false
                },
                {
                    title:'敲代码',
                    checked:false
                },
            ],
            info:''
        }
    }
    handelName = (e)=> {
        this.setState({
            name:e.target.value
        })
    }
    handelSubmit = (e) => {
    //    阻止提交事件
        e.preventDefault();
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info)
    }
    handelSex = (e) => {
        this.setState({
            sex:e.target.value
        })
    }
    handleCity = (e) => {
        this.setState({
            city:e.target.value
        })
    }
    handleHobby = (key) => {
        var hobby = this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby
        })
}
    handleInfo = (e) => {
        this.setState({
            info:e.target.value
        })
    }
    render(){
        return(
            <div>
                <h2>
                    {this.state.msg}
                </h2>
                <form onSubmit={this.handelSubmit}>
                    用户名：<input type="text" value={this.state.name} onChange={this.handelName}/>
                    <br/>
                    <input type="radio" value='1' checked={this.state.sex=='1'} onChange={this.handelSex}/>男
                    <input type="radio" value='2' checked={this.state.sex=='2'} onChange={this.handelSex}/>女
                    <br/>
                    居住城市：
                    <select value={this.state.city} onChange={this.handleCity}>
                        {this.state.citys.map(function (value,key) {
                            return <option key={key}>{value}</option>
                        })}

                    </select>
                    <br/>
                    爱好：
                    {this.state.hobby.map( (value,key)=> {
                        return (
                            <span key={key}>
                                <input type="checkbox" checked={value.checked} onChange={this.handleHobby.bind(this,key)}/>{value.title}
                            </span>
                                )

                    })}
                    <br/>
                    <textarea value={this.state.info} onChange={this.handleInfo}></textarea>
                    <br/>
                    <input type="submit" defaultValue='提交'/>
                </form>
            </div>
        )
    }
}
export default ReactForm;
