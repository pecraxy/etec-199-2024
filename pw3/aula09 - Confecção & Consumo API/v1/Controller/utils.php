<?php
   function criarResposta($status, $msg)
   {
      $resp = new Resposta($status, $msg);

      return $resp;
   }

   function getRequestData()
   {
      $dados = json_decode(file_get_contents('php://input'));
      return $dados;
   }
   function receberDados()
   {
      $dados = json_decode(file_get_contents('php://input'));
      return $dados;
   }
?>