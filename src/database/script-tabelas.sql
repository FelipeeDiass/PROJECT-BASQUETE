-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!
/* para workbench - local - desenvolvimento */
CREATE DATABASE bdbask;

USE bdbask;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;



create table jogador(
idjogador int primary key auto_increment,
nomejogador varchar (45),
img varchar (200)
);
insert into jogador values
(null,"Gianis","../assets/imgs/GiannisVotacao.gif");
insert into jogador values
(null,"Luka","../assets/imgs/LukaDoncicVotacao.gif");
insert into jogador values
(null,"Morant","../assets/imgs/JaMorant-votacao.gif");

select* from jogador;


create table votacao(
idvotacao int auto_increment,
fkjogador int,
foreign key (fkjogador) references jogador (idjogador),
fkusuario int,
foreign key(fkusuario) references usuario (id),
primary key(idvotacao,fkjogador,fkusuario));

drop table votacao;

select * from jogador ;
select * from jogador ;



insert into votacao(fk) values
(1,1)