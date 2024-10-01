<?php

    class Pedido_Produto{
        public $id_pedido;
        public $id_produto;
        public $qtd;
        public function __construct($id_pedido, $id_produto, $qtd){
            $this->id_pedido = $id_pedido;
            $this->id_produto = $id_produto;
            $this->qtd = $qtd;
        }
    }

?>