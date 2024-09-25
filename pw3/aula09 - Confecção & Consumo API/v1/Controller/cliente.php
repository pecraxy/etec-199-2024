<?php
    require 'utils.php';
    require_once '../DAO/conexao.php';
    require_once '../DAO/cliente/get.php';
    require_once '../DAO/cliente/post.php';
    require_once '../DAO/cliente/put.php';
    require_once '../DAO/cliente/patch.php';
    require '../DAO/cliente/delete.php';
    require '../Model/Usuario.php';
    require '../Model/Resposta.php';

    $req = $_SERVER;
    $conexao = conectar();
    
    //echo $req["REQUEST_METHOD"];
     switch ($req["REQUEST_METHOD"]) {
         case 'GET':
            $clientes = json_encode(getAllCients($conexao));
            echo $clientes;
            break;
         case 'POST':
             $data = getRequestData();
             $resp = insert_client($conexao, $data);
             
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

            $resp = edit_client($conexao, $data, $id);

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
            $resp = partial_edit_client($conexao, $campo, $valor, $id);
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
            $resp = delete_client($conexao, $id);
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