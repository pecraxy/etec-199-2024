<?php
    class Produto {
        public $id;
        public $nome;
        public $descricao;
        public $qtd;
        public $marca;
        public $preco;
        public $validade;
    
        public function __construct($id, $nome, $descricao, $qtd, $marca, $preco, $validade) {
            $this->id = $id;
            $this->nome = $nome;
            $this->descricao = $descricao;
            $this->qtd = $qtd;
            $this->marca = $marca;
            $this->preco = $preco;
            $this->validade = $validade;
        }
    }
?>