/**
 * Created by zhouhangfeng on 2019/8/27.
 */
import React, {Component} from 'react';
import fetchJsonp from 'fetch-jsonp';
class FetchJsonp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }

    getData = () => {
        var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20';
        fetchJsonp(api).then((res)=>{
            return res.json()
        }).then((json)=>{
            console.log(json)
            this.setState({
                list:json.result
            })
        }).catch((err)=>{
            console.error(err)
        })
    }

    render(){
        let {list} = this.state;
        return (
            <div>
                <h2>fetch-jsonph获取服务器jsonp接口的数据</h2>
                <button onClick={this.getData}>获取服务器api接口数据</button>
                <hr/>
                <ul>
                    {
                        list.map((value, key) => {
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
export default FetchJsonp
