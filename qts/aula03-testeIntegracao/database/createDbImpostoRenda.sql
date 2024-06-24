CREATE DATABASE db_receita_federal;
USE db_receita_federal;

CREATE TABLE tbUsuario (
    idUsuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sobrenome VARCHAR(255) NOT NULL,
    idade INT,
    CPF VARCHAR(14) UNIQUE,
    renda_mensal DECIMAL(10, 2),
    taxa VARCHAR(3),
    imposto DECIMAL(5, 2)
);

INSERT INTO tbUsuario (nome, sobrenome, idade, CPF, renda_mensal, taxa, imposto) VALUES
('José', 'Pedro', 18, '123.456.789-10', 1000, '0%', 0),
('João', 'Pedro', 81, '123.456.789-11', 2000, '0%', 0),
('Marcelo', 'Pedro', 18, '123.456.789-12', 1500, '0%', 0),
('Pedro', 'José', 18, '123.456.789-13', 2100, '0%', 0),
('ésoJ', 'ordeP', 81, '123.456.789-14', 2000, '0%', 0)