<?php 
    class Usuario{
        public $id;
        public $nome;
        public $sobrenome;
        public $idade;
        public $cpf;
        public $renda_mensal;
        public $taxa;
        public $imposto;

        public function __construct($id, $nome, $sobrenome, $idade, $cpf, $renda_mensal, $taxa, $imposto) {
            $this->id = $id;
            $this->nome = $nome;
            $this->sobrenome = $sobrenome;
            $this->idade = $idade;
            $this->cpf = $cpf;
            $this->renda_mensal = $renda_mensal;
            $this->taxa = $taxa;
            $this->imposto = $imposto;
        }
    }
?>
