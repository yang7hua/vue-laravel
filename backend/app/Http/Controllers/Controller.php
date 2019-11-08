<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function success($message = '成功', $data = [])
    {
        return response()->json([
            'status' => 200,
            'message' => $message ?? '成功',
            'data' => $data ?? []
        ]);
    }

    public function error($message = '失败', $status = 0)
    {
        return response()->json([
            'status' => $status,
            'message' => $message ?? '失败'
        ]);
    }
}
