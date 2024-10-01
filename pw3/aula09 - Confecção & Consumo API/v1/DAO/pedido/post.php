<?php 
   function insert_order($conexao, $pedido) {
      $sql = "INSERT INTO Pedidos (id_cliente, data) VALUES ($pedido->id_cliente, '$pedido->data');";
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar incluir pedido: " . mysqli_error($conexao));
      fecharConexao($conexao);
      return $res;
  }

?>