<?php 
    function getAllOrders($conexao) {
        $sql = "SELECT * FROM Pedidos";
        $res = mysqli_query($conexao, $sql) or die("Erro ao tentar consultar pedidos: " . mysqli_error($conexao));

        $pedidos = [];

        while ($registro = mysqli_fetch_array($res)) {
            $id_pedido = $registro['id_pedido'];
            $id_cliente = $registro['id_cliente'];
            $data = $registro['data']; 

            $novo_pedido = new Pedido($id_pedido, $id_cliente, $data);

            // Adiciona o objeto à lista de pedidos
            array_push($pedidos, $novo_pedido);
        }

        fecharConexao($conexao);
        return $pedidos;
    }

   
?>