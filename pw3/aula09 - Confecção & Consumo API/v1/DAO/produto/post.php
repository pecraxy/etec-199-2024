<?php 
   
   function insert_client($conexao, $cliente) {
      // Monta a consulta SQL
      $sql = "INSERT INTO Clientes (Nome, Endereco, CPF, Telefone, Email, DataNascimento) VALUES ('$cliente->nome', '$cliente->endereco', '$cliente->cpf', '$cliente->telefone', '$cliente->email', '$cliente->dataNascimento');";
      
      // Executa a consulta
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar incluir: " . mysqli_error($conexao));
      
      // Fecha a conexão
      fecharConexao($conexao);
      return $res;
  }  

?>