GRANT CREATE, DELETE, INSERT, REFERENCES, SELECT, UPDATE ON * . * TO 'api'@'%';
FLUSH PRIVILEGES;

CREATE DATABASE SESI;
use SESI;


/* -- TABELAS GESTOR -- */

CREATE TABLE gestor_admins (
IDADMIN INT(4) PRIMARY KEY auto_increment,
NOME VARCHAR(50),
CPF CHAR(11),
EMAIL VARCHAR(50),
SENHA VARCHAR(100),
SEXO ENUM("M","F"),
CARGO VARCHAR(30)
);

CREATE TABLE gestores (
IDGESTOR INT (4) PRIMARY KEY auto_increment,
NOME VARCHAR(50),
CPF CHAR(11),
SENHA VARCHAR(100),
EMAIL VARCHAR(50),
SEXO ENUM("M","F"),
CARGO VARCHAR(30),

/* CHAVE ESTRANGEIRA*/
ID_ADMIN INT(4),
FOREIGN KEY (ID_ADMIN)
references GESTOR_ADMINS (IDADMIN)
);


/* -- TABELAS MEDICO -- */
CREATE TABLE medicos (
IDMEDICO INT(4) PRIMARY KEY auto_increment,
NOME VARCHAR(50),
CPF CHAR(11),
CRM CHAR(13),
SEXO ENUM("M","F"),
EMAIL VARCHAR(50),
SENHA VARCHAR(100),
ESPECIALIDADE VARCHAR(35),
CARGO VARCHAR (30),

/* CHAVE ESTRANGEIRA*/
ID_GESTOR_MED INT(4),
FOREIGN KEY (ID_GESTOR_MED) 
references GESTORES (IDGESTOR)

);

CREATE TABLE endereco_medicos (
IDEND_MED INT(4) PRIMARY KEY auto_increment,
CEP CHAR(8),
LOGRADOURO VARCHAR(100),
NUM_END_MED varchar(7),
BAIRRO VARCHAR(100),
COMPLEMENTO VARCHAR(50),
PT_REF VARCHAR(50),
CIDADE VARCHAR(60),
UF CHAR(2),
PAIS VARCHAR(30),
TIPO_END_MED ENUM ('RESIDENCIAL', 'COMERCIAL'),

/* CHAVE ESTRANGEIRA*/								
ID_END_MED INT(4),
FOREIGN KEY (ID_END_MED) 
references MEDICOS (IDMEDICO)
);

CREATE TABLE tel_medicos (
idtel_med INT(4) PRIMARY KEY auto_increment,
ddd CHAR(2),
num_tel_med VARCHAR(9),
tipo_tel_med ENUM('RESIDENCIAL', 'COMERCIAL','CELULAR'),

/* CHAVE ESTRANGEIRA*/
id_tel_med INT(4),
FOREIGN KEY (id_tel_med) 
references medicos (idmedico)
);
/* -- TABELAS MEDICO -- */


/* -- TABELAS ATLETA -- */
CREATE TABLE atletas (
idatleta INT(4) PRIMARY KEY auto_increment,
nome VARCHAR(100),
cpf CHAR(11),
email varchar(50),
senha VARCHAR(100),
d_nasc DATE,
sexo ENUM('F','M'),
categoria VARCHAR(30),
posicao VARCHAR(40),
cargo VARCHAR(30),
modalidade VARCHAR(30),
solicitacao ENUM("SOLICITADO","NÃO SOLICITADO"),
situacao enum("APROVADO","EM ANÁLISE","REPROVADO"),

/* CHAVE ESTRANGEIRA 1,N */
id_gestor_atl INT(4),
FOREIGN KEY (id_gestor_atl) 
references gestores (idgestor)
);

CREATE TABLE endereco_atletas (
idend_atl INT(4) PRIMARY KEY auto_increment,
cep CHAR(8),
logradouro VARCHAR(100),
num_end_atl varchar(7),
bairro VARCHAR(100),
complemento VARCHAR(50),
pt_ref VARCHAR(50),
cidade VARCHAR(60),
uf CHAR(2),
pais VARCHAR(30),
tipo_end_atl ENUM ('RESIDENCIAL', 'COMERCIAL'),

id_end_atl INT(4),
FOREIGN KEY (id_end_atl) 
references atletas (idatleta)
);

CREATE TABLE tel_atletas (
idtel_atl INT(4) PRIMARY KEY auto_increment,
ddd CHAR(2),
num_tel_atl VARCHAR(9),
tipo_tel_atl ENUM('RESIDENCIAL', 'COMERCIAL','CELULAR'),

id_tel_atl INT(4),
FOREIGN KEY (id_tel_atl) 
references atletas (idatleta)
);
/* -- TABELAS ATLETA -- */


/* -- TABELAS EXAME -- */
CREATE TABLE exames(
idexame INT(4) PRIMARY KEY auto_increment,
pdf longblob,
tipo VARCHAR(100),
descricao TEXT,
data_ex DATETIME,
situacao ENUM("CONCLUIDO","EM ANALISE","PENDENTE"),
observacao TEXT,

/* CHAVE ESTRANGEIRA*/
id_exame_atl INT(4),
FOREIGN KEY (id_exame_atl) 
references atletas (idatleta),

id_exame_med INT(4),
FOREIGN KEY (id_exame_med) 
references medicos (idmedico)
);
/* -- TABELAS EXAME -- */


/* TABELAS MEDICO CONVIDADO*/
CREATE TABLE medico_convs (
id_med_conv INT(4) PRIMARY KEY auto_increment,
nome VARCHAR(50),
cpf CHAR(11),
especialidade VARCHAR(30),
email VARCHAR(100),
senha VARCHAR(100),
crm CHAR(13),
sexo ENUM("M","F"),
cargo VARCHAR(30),

/* CHAVE ESTRANGEIRA*/
id_gest_conv INT(4),
FOREIGN KEY (id_gest_conv) 
references gestores (idgestor),

id_exame_conv INT(4),
FOREIGN KEY (id_exame_conv) 
references exames (idexame)
);

CREATE TABLE END_MED_CONVS (
id_end_med_conv INT(4) PRIMARY KEY auto_increment,
cep CHAR(8),
logradouro VARCHAR(100),
num_end_med_conv varchar(7),
bairro VARCHAR(100),
complemento VARCHAR(50),
pt_ref VARCHAR(50),
cidade VARCHAR(60),
uf CHAR(2),
pais VARCHAR(30),
tipo_end_med_conv ENUM ('RESIDENCIAL', 'COMERCIAL'),

/* CHAVE ESTRANGEIRA*/
id_end_conv INT(4),
FOREIGN KEY (id_end_conv) 
references medico_convs (id_med_conv)
);

CREATE TABLE tel_medico_convs (
idtel_med_conv INT(4) PRIMARY KEY auto_increment,
ddd CHAR(2),
num_tel_med_conv VARCHAR(9),
tipo_tel_med_conv ENUM('RESIDENCIAL', 'COMERCIAL','CELULAR'),

/* CHAVE ESTRANGEIRA*/
id_tel_conv INT(4),
FOREIGN KEY (id_tel_conv) 
references medico_convs (id_med_conv)
);

/* TABELAS RECUPERAR A SENHA */

CREATE TABLE recuperar_senha (
idrecsenha INT(4) PRIMARY KEY auto_increment,
CODIGO CHAR(6),
EMAIL VARCHAR(100)
);





