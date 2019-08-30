/**
 * Created by zhouhangfeng on 2019/8/29.
 */
import Home from '../components/Home';
import News from '../components/News';
import Product from '../components/Product';
import Content from '../components/Content';
import ProductContent from '../components/ProductContent';
import AutoHome from '../components/Autoorder/Home';
import AutoDetail from '../components/Autoorder/Pcontent';
import Login from '../components/Login';
import User from '../components/User';
    import Main from '../components/user/Main';
    import Info from '../components/user/Info';
    import Edit from '../components/user/Edit'
import List from '../components/List';
import TodoList from '../components/TodoList';
import ReactForm from '../components/ReactForm';
import Lifecycle from '../components/Lifecycle';
import Shop from '../components/Shop';
let route = [
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/news",
        component:News
    },
    {
        path:"/product",
        component:Product
    },
    {
        path:"/content/:aid",
        component:Content
    },
    {
        path:"/productcontent",
        component:ProductContent
    },
    {
        path:"/autohome",
        component:AutoHome
    },
    {
        path:"/autodetail/:id",
        component:AutoDetail
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/user",
        component:User,
        routes:[
            {
                path:'/user/',
                component:Main,
                exact:true
            },
            {
                path:'/user/info',
                component:Info,
            },
            {
                path:'/user/edit',
                component:Edit
            }
        ]
    },
    {
        path:"/shop",
        component:Shop
    },
];
export default route;