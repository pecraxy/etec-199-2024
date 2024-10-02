<?php 
   
   function edit_order($conexao, $pedido, $id) {
      // Atualiza os dados do pedido na tabela Pedidos
      $sql = "UPDATE Pedidos SET id_cliente = $pedido->id_cliente, data = '$pedido->data' WHERE id_pedido = $id;";
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar atualizar pedido: " . mysqli_error($conexao));
      
  
      // Fecha a conexão
      fecharConexao($conexao);
      return $res;
  }
  

?>