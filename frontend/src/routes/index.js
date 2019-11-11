//懒加载组件

const Login = () => import('../pages/login')

//后台管理框架
const Admin = () => import('../pages/admin/index')

//为了方便管理，我们将后台管理子页面相关路由统一放到routes/admin.js中去管理
//后台管理框架子页面，这些子页面会渲染到Admin框架中的el-main视窗中 
import AdminChildren from './admin';

export default [
    //这是登录页面的相关配置
    {
        path: '/login', //url的hash
        name: 'login', //路由名称，后面在路由跳转的时候，可以直接用名称跳转
        component: Login, //对应的页面组件
    },
    //其它页面配置可以添加在这里
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        children: [
            //“三个点”这种写法，可以很方便的将一个数组扩展到之前的数组里面。关于“三个点”的更多用法参考https://www.jianshu.com/p/86cbabeda999
            ...AdminChildren
        ]
    },
];