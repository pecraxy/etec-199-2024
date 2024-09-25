<?php 
   
   function edit_client($conexao, $cliente, $id) {
      $sql = "UPDATE Clientes SET Nome = '$cliente->nome', Endereco = '$cliente->endereco', CPF = '$cliente->cpf', Telefone = '$cliente->telefone', Email = '$cliente->email', DataNascimento = '$cliente->dataNascimento' WHERE ID = $id;";
      $res = mysqli_query($conexao, $sql) or die("Erro ao tentar atualizar: " . mysqli_error($conexao));
      fecharConexao($conexao);
      return $res;
  }
  

?>