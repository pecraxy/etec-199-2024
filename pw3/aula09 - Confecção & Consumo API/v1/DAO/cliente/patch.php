<?php 
   
   function editar_usuario_parcialmente($conexao, $campo, $valor, $id){
        $sql = "UPDATE tbl_usuarios SET $campo = '$valor' WHERE id = $id";
        $res = mysqli_query($conexao, $sql) or die("Erro ao tentar incluir");
        fecharConexao($conexao);
        return $res;
   };

?>