<?php 
    function getAllOrder_Product($conexao) {
        $sql = "SELECT * FROM pedidos_produtos";
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

        fecharConexao($conexao);
        return $pedido_produtos;
    }

   
?>