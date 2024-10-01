<?php

    class Pedido {
        public $id_pedido;
        public $id_cliente;
        public $data;

        public function __construct($id_pedido, $id_cliente, $data){
            $this->id_pedido = $id_pedido;
            $this->id_cliente = $id_cliente;
            $this->data = $data;
        }
    }

?>