<?php
function delete_order($conexao, $id_produto) {
   
   $delete_associacoes = "DELETE FROM pedidos_produtos WHERE id_pedido = $id;";
   mysqli_query($conexao, $delete_associacoes) or die("Erro ao excluir associações de produtos do pedido: " . mysqli_error($conexao));

   
   $sql = "DELETE FROM pedidos WHERE id_pedido = $id;";
   $res = mysqli_query($conexao, $sql) or die("Erro ao tentar deletar pedido: " . mysqli_error($conexao));

   
   fecharConexao($conexao);
   return $res;
}
?>