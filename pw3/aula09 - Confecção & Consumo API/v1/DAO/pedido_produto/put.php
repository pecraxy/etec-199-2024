<?php 
   
    function edit_order_product($conexao, $pedido) {
       $sql = "SELECT * FROM pedidos_produtos WHERE id_pedido = $pedido->id_produto_passado AND id_produto = $pedido->id_produto";
       $res = mysqli_query($conexao, $sql) or die("Erro ao tentar consultar pedidos: " . mysqli_error($conexao));
       $pedido_produtos = [];

        while ($registro = mysqli_fetch_array($res)) {
            $id_pedido = $registro['id_pedido'];
            $id_produto = $registro['id_produto'];
            $qtd = $registro['qtd']; 

            $novo_pedido_produto = new Pedido_Produto($id_pedido, $id_produto, $qtd);

            // Adiciona o objeto à lista de pedidos
            array_push($pedido_produtos, $novo_pedido_produto);
        }

        if (count($pedido_produtos) <= 0){
            $sql = "UPDATE pedidos_produtos SET id_produto = $pedido->id_produto_passado, qtd = $pedido->qtd  WHERE id_pedido = $pedido->id_pedido AND id_produto = $pedido->id_produto;";
            $res = mysqli_query($conexao, $sql) or die("Erro ao atualizar pedidos_produto: " . mysqli_error($conexao));
            return $res; 
        }
  }
?>