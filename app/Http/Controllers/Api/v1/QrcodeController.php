<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use QrCode;

class QrcodeController extends Controller
{
    //
    public function __construct() {
        // $this->middleware('auth:api', ['except' => []]);
    }

    public function index(Request $request)
    {
        return QrCode::SMS('989dgdfg8989898', 'Your message is here');
        // phoneNumber('111-222-6666');
        // size(300)
                    // ->backgroundColor(255, 255, 255)
                    // ->color(52, 152, 219)
                    // ->style('dot')
                    // ->eye('circle')
                    // ->generate('codingdriver.com');
                    // ->email('nik.nevolin.02@mail.ru', 'Welcome to Coding driver!.');
                    // ->generate('codingdriver.com');

                    // ->merge('img/theme/vue.jpg', 0.5, true)
                    // ->generate('codingdriver.com');
    }
}
