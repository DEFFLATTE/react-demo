/**
 * Created by zhouhangfeng on 2019/8/26.
 */
import React, {Component} from 'react';
import '../assets/css/index.css';
import storage from '../model/storage'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state={
            list:[
                // {
                //     title:'录制ionic',
                //     checked:true
                // },
                // {
                //     title:'录制nodejs',
                //     checked:false
                // },
                // {
                //     title:'录制egg.js',
                //     checked:false
                // },
                // {
                //     title:'录制vue',
                //     checked:false
                // }
            ]
        }
    }
    componentDidMount(){

        let list = storage.get('todolist')
        if(list){
            this.setState({
                list
            })
        }
    }
    addData = (e)=> {
        if(e.keyCode==13){
            let title = this.refs.title.value;
            console.log(title);
            let tempList = this.state.list;
            tempList.push({
                title:title,
                checked:false
            })
            this.setState({
                list:tempList
            })
            this.refs.title.value = '';
        //   存储
            storage.set('todolist',tempList)
        }
    }
    checkboxChange =(key,value) => {
        this.state.list[key].checked = !this.state.list[key].checked;
        this.setState({
            list:this.state.list
        })
        storage.set('todolist',this.state.list)
    }
    removeData = (key) => {
        let templist = this.state.list;
        templist.splice(key,1);
        this.setState({
            list:templist
        })
        storage.set('todolist',templist)
    }
    render() {
        return (
            <div>
                <header className="title">
                    <input type="text" ref='title' onKeyUp={this.addData}/> TodoList
                </header>

                <h2>待办事项</h2>
                <hr/>
                <ul>
                    {this.state.list.map((value,key)=>{
                        if(!value.checked){
                            return (
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key,value)}/>
                                    {value.title}
                                    --<button onClick={this.removeData.bind(this,key)}>删除</button>
                                </li>
                            )
                        }

                    })}
                </ul>

                <h2>已完成事项</h2>
                <hr/>
                <ul>
                    {this.state.list.map((value,key)=>{
                        if(value.checked){
                            return (
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>
                                    {value.title}
                                    --<button onClick={this.removeData.bind(this,key)}>删除</button>
                                </li>
                            )
                        }

                    })}
                </ul>
            </div>
        )

    }
}
export default TodoList