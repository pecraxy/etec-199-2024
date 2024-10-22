<?php
    $req = $_SERVER;
    $so = "Windows";
    $so_interface = $req['HTTP_USER_AGENT'];
    $isWindows = strpos($so_interface, $so);
    if ($isWindows){
        

        header('location: http://localhost/aula10%20-%20proxy/desk_web/');
              
    } else{
        echo "redirecionando...";
        
        // echo "jarvis, abrir o tigrinho na calabret mobile";
    }
?>  