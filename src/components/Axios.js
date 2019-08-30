/**
 * Created by zhouhangfeng on 2019/8/27.
 */
import React ,{Component} from 'react';
import axios from 'axios'
class Axios extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        };
    }
    getData = ()=> {
    //    axios
    //     console.log('123')
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'
        axios.get(api).then((res)=>{
            console.log(res.data.result);
            this.setState({
                list:res.data.result
            })
        }).catch((err)=>{
            console.error(err);
        })
    }
    componentDidMount(){
        this.getData()
    }
    render(){
        let {list} = this.state;
        return(
            <div>
                <h2>axios获取服务器数据</h2>
                <button onClick={this.getData}>获取服务器api接口数据</button>
                <hr/>
                <ul>
                    {
                        list.map((value,key)=>{
                            return(
                                <li key={key}>{value.title}</li>
                            )
                        })
                    }

                </ul>

            </div>
        )
    }
}
export default Axios