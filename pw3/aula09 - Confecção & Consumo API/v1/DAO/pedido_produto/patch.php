<?php 
   
   function partial_edit_order($conexao, $dados){
      $sql = "UPDATE pedidos_produtos SET $dados->campo = '$dados->valor' WHERE id_pedido = $dados->id_pedido AND id_produto = $dados->id_produto";
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar incluir");
      fecharConexao($conexao);
      return $res;
   }
?>