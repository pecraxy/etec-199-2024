<?php 
   require '../Service/ImpostoService.php';
   function criarResposta($status, $msg){
      $resp = new Resposta($status, $msg);
      return $resp;
   }
    
   function receberDados(){
      $dados = json_decode(file_get_contents('php://input'));
      if (!isset($dados->idUsuario)){
         $id = 0;
      } else{
         $id = $dados->idUsuario;
      }
      $nome = $dados->nome;
      $sobrenome = $dados->sobrenome;
      $idade = $dados->idade;
      $cpf = $dados->cpf;
      $renda_mensal = $dados->renda_mensal;
      $taxa = getTaxa($dados->renda_mensal);
      $imposto = calcImposto($dados->renda_mensal);
      $user = new Usuario($id, $nome, $sobrenome, $idade, $cpf, $renda_mensal, $taxa, $imposto);
      return $user;
   }
?>