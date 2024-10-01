<?php
function delete_product($conexao, $id)
   {
      $delete_product_pedido = "DELETE FROM pedidos_produtos WHERE id_pedido IN (SELECT id_pedido FROM pedidos WHERE id_produto = $id);";
      mysqli_query($conexao, $delete_product_pedido) or die("Erro ao excluir produtos dos pedidos: " . mysqli_error($conexao));

      $sql = "DELETE FROM produtos WHERE id = $id;";
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar deletar");
      fecharConexao($conexao);
      return $res;
   }
;
?>