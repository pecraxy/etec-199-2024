<?php 
   
   function editar_usuario($conexao, $u, $id){
        $sql = "UPDATE `tbUsuario` SET `nome` = '" . $u->nome . "', `sobrenome` = '" . $u->sobrenome ."', `idade` = '"  .$u->idade . "', `CPF` = '". $u->cpf ."', `renda_mensal`='". $u->renda_mensal ."', `taxa` = '".$u->taxa."', `imposto` = '".$u->imposto."' WHERE idUsuario = ".$id.";";
        $res = mysqli_query($conexao, $sql) or die("Erro ao tentar incluir");
        fecharConexao($conexao);
        return $res;
   };

?>