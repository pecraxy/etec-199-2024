<?php 
   

   function getAllProducts($conexao){

    $sql = "SELECT * FROM Produtos";
    $res = mysqli_query($conexao, $sql) or die("Erro ao tentar consultar");

    $produtos = [];

    while ($registro = mysqli_fetch_array($res)) {
        $id = utf8_encode($registro['ID']);
        $nome = utf8_encode($registro['Nome']);
        $descricao = utf8_encode($registro['Descricao']);
        $qtd = utf8_encode($registro['qtd']);
        $marca = utf8_encode($registro['Marca']);
        $preco = utf8_encode($registro['Preco']);
        $validade = utf8_encode($registro['Validade']);
        $novo_produto = new Produto($id, $nome, $descricao, $qtd, $marca, $preco, $validade);
        
        array_push($produtos, $novo_produto);
    }

    fecharConexao($conexao);
    return $produtos;
   };

   
?>