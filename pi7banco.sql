create database cadastro
default character set utf8
default collate utf8_general_ci;
use cadastro;


create table usuários (
id int not null auto_increment,
nome varchar(30) not null,
sobrenome varchar(60),
nascimento DATE not null,
cpf varchar (11) not null,
tel varchar (11),
email varchar(40),
cep varchar (8) not null,
idproduto int,
idpagamento int,
idendereço int,
primary key(id)
);
describe usuários;


create table produtos(
idproduto int not null auto_increment,
nome varchar(30) not null,
descrição varchar (100),
preço decimal(5,2)not null,
estoque varchar(10)not null,
primary key (idproduto)
);
describe produtos;


CREATE TABLE endereco (
  idendereço int not null auto_increment,
  cep varchar(9) NOT NULL,
  nome varchar(120) NOT NULL,
  bairro int DEFAULT NULL,
  cidade int NOT NULL,
  estado int NOT NULL,
  pais int DEFAULT NULL,
  PRIMARY KEY (idendereço)
);
describe endereco;


create table cartao (
  idcartao int not null auto_increment,
  codigoCartao varchar(20) DEFAULT NULL,
  nomeCard varchar(30) DEFAULT NULL,
  vencimento varchar (4),
  cartão enum('crédito','débito'),
  descricaoPagamento char(10) DEFAULT NULL,
  PRIMARY KEY (idcartao)
  );
  describe cartao;
  

alter table usuários add foreign key (idproduto) references produtos(idproduto);
alter table usuários add foreign key (idpagamento) references cartao(idcartao);
alter table usuários add foreign key (idendereço) references endereco(idendereço);















