<?php // router.php
$url = $_SERVER['REQUEST_URI'];
$url = strtok($url, '?');
switch ($url) {
    case '/':
        case '/index':
            case '/index.php':
                header('Location: /home');
                break;
    case '/home':
        require __DIR__ . '/src/view/home/index.html';
        break;
    case '/list':
        require __DIR__ . '/src/view/list/index.html';
        break;

    case '/result':
        require __DIR__ . '/src/view/result/index.html';
        break;
}
if (http_response_code() == 404){
    require __DIR__ . '/src/view/404.php';
}
?>