<?php
    require 'utils.php';
    require_once '../DAO/conexao.php';
    require_once '../DAO/pedido_produto/get.php';
    require_once '../DAO/pedido_produto/delete.php';
    require_once '../DAO/pedido_produto/patch.php';
    require_once '../DAO/pedido_produto/post.php';
    require_once '../DAO/pedido_produto/put.php';
    require_once '../Model/Pedido_Produto.php';
    require '../Model/Resposta.php';

    $req = $_SERVER;
    $conexao = conectar();
    
    //echo $req["REQUEST_METHOD"];
     switch ($req["REQUEST_METHOD"]) {
         case 'GET':
            $produtos = json_encode(getAllOrder_Product($conexao));
            echo $produtos;
            break;
         case 'POST':
             $data = getRequestData();
             $resp = insert_order_product($conexao, $data);
             
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
            $data = getRequestData();
            $resp = edit_order_product($conexao, $data);

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
            $resp = partial_edit_order($conexao, $dados);
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
            $resp = delete_order_product($conexao, $dados);
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