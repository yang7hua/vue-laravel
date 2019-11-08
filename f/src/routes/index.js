//懒加载组件

const Login = () => import('../pages/login')

const Admin = () => import('../pages/admin/index')

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
    }
];