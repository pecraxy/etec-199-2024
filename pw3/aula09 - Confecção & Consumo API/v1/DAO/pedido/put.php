<?php 
   
   function edit_order($conexao, $pedido, $id) {
      // Atualiza os dados do pedido na tabela Pedidos
      $sql = "UPDATE Pedidos SET id_cliente = $pedido->id_cliente, data = '$pedido->data' WHERE id_pedido = $id;";
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar atualizar pedido: " . mysqli_error($conexao));
      
      // Se você precisar atualizar a tabela associativa (por exemplo, Pedido_Produtos)
      if (isset($pedido->produtos)) {
          foreach ($pedido->produtos as $produto) {
              // Aqui você deve definir a lógica para atualizar os produtos associados
              // Exemplo: se a tabela associativa for chamada "Pedido_Produtos"
              $sql_produto = "INSERT INTO Pedido_Produtos (id_pedido, id_produto) VALUES ($id, $produto->id) ON DUPLICATE KEY UPDATE id_produto = $produto->id;";
              mysqli_query($conexao, $sql_produto) or die("Erro ao tentar atualizar produtos associados: " . mysqli_error($conexao));
          }
      }
  
      // Fecha a conexão
      fecharConexao($conexao);
      return $res;
  }
  

?>