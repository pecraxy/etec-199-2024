<?php
function delete_client($conexao, $id)
{
   $delete_pedidos_produtos_sql = "DELETE FROM pedidos_produtos WHERE id_pedido IN (SELECT id_pedido FROM pedidos WHERE id_cliente = $id);";
   mysqli_query($conexao, $delete_pedidos_produtos_sql) or die("Erro ao excluir produtos dos pedidos: " . mysqli_error($conexao));

   // Exclui os pedidos
   $delete_pedidos_sql = "DELETE FROM pedidos WHERE id_cliente = $id;";
   mysqli_query($conexao, $delete_pedidos_sql) or die("Erro ao excluir pedidos: " . mysqli_error($conexao));
   $sql = "DELETE FROM clientes WHERE id = $id;";
   $res = mysqli_query($conexao, $sql) or die("Erro ao tentar deletar");
   fecharConexao($conexao);
   return $res;
}
;
?>