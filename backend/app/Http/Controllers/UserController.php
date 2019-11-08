<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

/**
 * @author Rango <yang7hua@aliyun.com>
 */
class UserController extends Controller
{
    public function login(Request $request)
    {
        $validator =
            Validator::make($request->all(), [
                'username' => 'required',
                'password' => 'required'
            ], [
                'username.required' => '用户名不能为空',
                'password.required' => '密码不能为空',
            ]);
        if ($validator->fails()) {
            return $this->error($validator->errors()->first()); //这里只返回第一条错误信息
        }

        //模拟登录成功
        return $this->success('登录成功');
    }
}
