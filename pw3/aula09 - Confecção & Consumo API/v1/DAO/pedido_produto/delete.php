<?php
   function delete_order_product($conexao, $dados) {
      $sql = "DELETE FROM pedidos_produtos WHERE id_pedido = $dados->id_pedido AND id_produto = $dados->id_produto;";
      $res = mysqli_query($conexao, $sql) or die("Erro ao excluir associações de produtos do pedido: " . mysqli_error($conexao)); 
      fecharConexao($conexao);
      return $res;
   }
?>