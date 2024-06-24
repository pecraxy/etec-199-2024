<?php
    require 'utils.php';
    require_once '../DAO/conexao.php';
    require_once '../DAO/usuarioGet.php';
    require_once '../DAO/usuarioPost.php';
    require_once '../DAO/usuarioPut.php';
    require_once '../DAO/usuarioPatch.php';
    require '../DAO/usuarioDelete.php';
    require '../Model/Usuario.php';
    require '../Model/Resposta.php';

    $req = $_SERVER;
    $conexao = conectar();
    
    switch ($req["REQUEST_METHOD"]) {
        case 'GET':
            $query = $req["QUERY_STRING"];
            $cpf = null;
            if (isset(explode('=', $query, 2)[1])){
                $cpf = explode('=', $query, 2)[1];
            }
            $usuarios = json_encode(pegar_usuario($conexao, $cpf));
            echo $usuarios;
            break;
        case 'POST':
            $u = receberDados();
            $resp = incluir_usuario($conexao, $u);
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
            $id = $dados->idUsuario;
            $u = receberDados();
            $resp = editar_usuario($conexao, $u, $id);

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
            $query = $dados->query;

            $resp = editar_usuario_parcialmente($conexao, $query);
            $resposta = new Resposta('','');
            if($resp){
                $resposta = criarResposta(204, 'Atualizado com sucesso');
            } else{
               $resposta = criarResposta('400', 'Não atualizado');
            }
             echo 'Fiz um PATCH';
             break;
         case 'DELETE':
            $dados = json_decode(file_get_contents('php://input'));
            $id = $dados->id;
            $resp = deletar_usuario($conexao, $id);
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