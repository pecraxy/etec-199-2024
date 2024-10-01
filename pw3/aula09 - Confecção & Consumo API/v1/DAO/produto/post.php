<?php 
   
   function insert_product($conexao, $produto) {
      // Monta a consulta SQL
      $sql = "INSERT INTO Produtos (Nome, Descricao, qtd, Marca, Preco, Validade) VALUES ('$produto->nome', '$produto->descricao', $produto->qtd, '$produto->marca', $produto->preco, '$produto->validade');";
      
      // Executa a consulta
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar incluir: " . mysqli_error($conexao));
      
      // Fecha a conexão
      fecharConexao($conexao);
      return $res;
  }
   

?>