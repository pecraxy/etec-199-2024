<?php 
   function insert_order_product($conexao, $pedido) {
      $sql = "INSERT INTO pedidos_produtos (id_pedido, id_produto, qtd) 
            VALUES ($pedido->id_pedido, $pedido->id_produto, $pedido->qtd) 
            ON DUPLICATE KEY UPDATE qtd = qtd + $pedido->qtd;";
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar incluir pedido: " . mysqli_error($conexao));
      fecharConexao($conexao);
      return $res;
  }

?>