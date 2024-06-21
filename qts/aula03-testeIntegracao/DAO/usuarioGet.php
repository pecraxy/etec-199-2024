<?php 

    function pegar_usuario($conexao){
        $sql = "SELECT * FROM tbUsuario";
        $res = mysqli_query($conexao, $sql) or die("Erro ao tentar consultar");
        $usuarios = [];
        while ($registro = mysqli_fetch_array($res)) {
            $id = utf8_encode($registro['idUsuario']);
            $nome = utf8_encode($registro['nome']);
            $sobrenome = utf8_encode($registro['sobrenome']);
            $idade = utf8_encode($registro['idade']);
            $cpf = utf8_encode($registro['CPF']);
            $renda_mensal = utf8_encode($registro['renda_mensal']);
            $taxa = utf8_encode($registro['taxa']);
            $imposto = utf8_encode($registro['imposto']);
            
            $novo_usuario = new Usuario($id, $nome, $sobrenome, $idade, $cpf, $renda_mensal, $taxa, $imposto);
            array_push($usuarios, $novo_usuario);
        };
        return $usuarios;
    }
?>