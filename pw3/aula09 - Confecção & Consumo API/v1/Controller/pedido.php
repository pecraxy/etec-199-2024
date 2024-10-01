<?php
    require 'utils.php';
    require_once '../DAO/conexao.php';
    require_once '../DAO/pedido/get.php';
    require_once '../DAO/pedido/delete.php';
    require_once '../DAO/pedido/patch.php';
    require_once '../DAO/pedido/post.php';
    require_once '../DAO/pedido/put.php';
    require_once '../Model/Pedido.php';
    require '../Model/Resposta.php';

    $req = $_SERVER;
    $conexao = conectar();
    
    //echo $req["REQUEST_METHOD"];
     switch ($req["REQUEST_METHOD"]) {
         case 'GET':
            $produtos = json_encode(getAllOrders($conexao));
            echo $produtos;
            break;
         case 'POST':
             $data = getRequestData();
             $resp = insert_order($conexao, $data);
             
             $in = new Resposta('', '');
                if($resp){
                   $in = criarResposta('200', 'Incluso com sucesso');
                } else {
                  $in = criarResposta('400', 'não incluso');
                }
             
             echo json_encode($in);
             break;
         case 'PUT':
            $dados = json_decode(file_get_contents('php://input'));
            $id = $dados->id;
            $data = getRequestData();
            $resp = edit_order($conexao, $data, $id);

            $in = new Resposta('', '');
                if($resp){
                   $in = criarResposta('204', 'Atualizado com sucesso');
                } else {
                  $in = criarResposta('400', 'Não atualizado');
                }

            echo json_encode($in);
             break;
         case 'PATCH':
            $dados = json_decode(file_get_contents('php://input'));
            $campo = $dados->campo;
            $valor = $dados->valor;
            $id = $dados->id;
            $resp = partial_edit_order($conexao, $campo, $valor, $id);
            $resposta = new Resposta('','');
            if($resp){
                $resposta = criarResposta(204, 'Atualizado com sucesso');
            } else{
               $resposta = criarResposta('400', 'Não atualizado');
            }
            echo json_encode($resposta);
            break;
         case 'DELETE':
            $dados = json_decode(file_get_contents('php://input'));
            $id = $dados->id;
           // echo $id;
            $resp = delete_order($conexao, $id);
            $resposta = new Resposta('', '');
            if($resp){
                $resposta = criarResposta('204', 'Excluido com suceso');
            } else {
                $resposta = criarResposta('400', 'Não excluido');
            }
             echo json_encode($resposta);
             break;          
         default:
             # code...
             break;
     }

?>