<?php 
   
   function partial_edit_order($conexao, $campo, $valor, $id){
      $sql = "UPDATE Pedidos SET $campo = '$valor' WHERE id_pedido = $id";
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar incluir");
      fecharConexao($conexao);
      return $res;
   }
?>