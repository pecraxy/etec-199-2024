<?php 
   
   function edit_product($conexao, $product, $id) {
      // Monta a consulta SQL
      $sql = "UPDATE Produtos SET 
                  Nome = '$product->nome', 
                  Descricao = '$product->descricao', 
                  qtd = $product->qtd, 
                  Marca = '$product->marca', 
                  Preco = $product->preco, 
                  Validade = '$product->validade' 
              WHERE ID = $id;";
      
      // Executa a consulta
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar atualizar: " . mysqli_error($conexao));
      
      // Fecha a conexão
      fecharConexao($conexao);
      return $res;
  }
  

?>