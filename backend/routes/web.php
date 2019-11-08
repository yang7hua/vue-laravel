<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//访问来源url

use Illuminate\Http\Request;

$origin = @$_SERVER['HTTP_ORIGIN'];
if ($origin) {
    //解析url地址
    $url = parse_url($origin);
    //允许跨域的host
    $allowHosts = ['localhost', '127.0.0.1'];
    if (in_array($url['host'], $allowHosts) or strpos($url['host'], '192.168.') !== false) {
        header('Access-Control-Allow-Origin:' . $origin);
    }
    //允许跨域访问时带上Cookie
    header('Access-Control-Allow-Credentials:true');
    //允许GET、POST、OPTIONS请求
    header('Access-Control-Allow-Methods:GET, POST, OPTIONS');
    /**
     * Origin: 允许该域名访问该资源
     * X-Requested-With: 允许AJAX请求
     */
    header('Access-Control-Allow-Headers:Origin, X-Requested-With, Content-Type, Accept, X-XSRF-TOKEN');
}

Route::get('/', function () {
    return view('welcome');
});

//接收一个post请求，并路由到控制器UserController的login方法上
Route::post('/user/login', 'UserController@login');
