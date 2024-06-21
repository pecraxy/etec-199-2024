<?php 
   
   function incluir_usuario($conexao, $u){
      $sql = "INSERT INTO `tbusuario` (`nome`, `sobrenome`, `idade`, `CPF`, `renda_mensal`, `taxa`, `imposto`) VALUES ('". $u->nome ."', '". $u->sobrenome ."', ". $u->idade .", '". $u->cpf ."', ". $u->renda_mensal .", '". $u->taxa ."', ". $u->imposto .");";
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar incluir");
      fecharConexao($conexao);
      return $res;
   };

?>