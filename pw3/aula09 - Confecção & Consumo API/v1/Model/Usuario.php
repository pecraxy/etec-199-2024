<?php 
    class Cliente{
        public $id;
        public $nome;
        public $endereco;
        public $cpf;
        public $telefone;
        public $email;
        public $dataNascimento;

        function __construct($id, $nome, $email, $endereco, $cpf, $telefone, $dataNascimento){
            $this->id = $id;
            $this->nome = $nome;
            $this->email = $email;
            $this->endereco = $endereco;
            $this->cpf = $cpf;
            $this->telefone = $telefone;
            $this->dataNascimento = $dataNascimento;
        }    
    }
?>
