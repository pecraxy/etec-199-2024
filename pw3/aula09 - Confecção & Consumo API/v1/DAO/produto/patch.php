<?php 
   
   function partial_edit_client($conexao, $campo, $valor, $id){
        $sql = "UPDATE Clientes SET $campo = '$valor' WHERE id = $id";
        $res = mysqli_query($conexao, $sql) or die("Erro ao tentar incluir");
        fecharConexao($conexao);
        return $res;
   };

?>