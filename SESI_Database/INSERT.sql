use SESI;

insert into gestor_admins values (default,"rayane","54639920881","ray@gmail.com","ray1234",'F',"gestor admin");

/*------------------------- INSERT GESTOR -------------------------*/

insert into gestores values (default,"vinicius","53899079817","zile1234","vinicius@gmail.com",'M',"gestor","1");
insert into gestores values (default,"ws","25694874123","ws1234","ws@gmail.com",'M',"gestor","1");

/*------------------------- INSERT ATLETA  -------------------------*/

INSERT INTO atletas VALUES (DEFAULT, 'ISABEL FERREIRA', '25698745632',"ISA@GMAIL.COM", 'ISABEL123', '2000/05/20', 'F','VOLÊI','LÍBERO','ATLETA', 'VOLÊI PRAIA',"SOLICITADO",'PENDENTE', '1');
INSERT INTO endereco_atletas VALUES (DEFAULT, '06814090', 'SÃO BERNADO', 336, 'SÃO MARCOS',  'SERRALHERIA MM', 'EMBU DAS ARTES','São Paulo', 'SP', 'BRASIL','RESIDENCIAL', '1');
INSERT INTO tel_atletas VALUES (DEFAULT, '11', 934664070, 'CELULAR', '1');

INSERT INTO atletas VALUES (DEFAULT, 'PEDRO', '45687954622',"PEDRO@GMAIL.COM", 'PEDRO123', '2000/04/7', 'M','FUTEBOL','LATERAL','ATLETA','FUTEBOL DE CAMPO',"SOLICITADO",'APROVADO','2');
INSERT INTO endereco_atletas VALUES (DEFAULT, '04467598', 'RUA 25 DE JANIERO', 11, 'PARQUE PRIMAVERA', 'EM FRENTE A ARVORE', 'COLEGIO ISABEL VIEIRA FERREIRA', 'SAO PAULO', 'SP', 'BRASIL', 'COMERCIAL', '2');
INSERT INTO tel_atletas VALUES (DEFAULT, '11', 978456679, 'CELULAR', '2');

/*------------------------- INSERT MEDICO  -------------------------*/
INSERT INTO medicos VALUES (DEFAULT, 'FABIO', '78955623145',"123456987",'M','FABIO@GMAIL.COM','FABIO123','CARDIOLOGISTA','Médico',1);
INSERT INTO endereco_medicos VALUES (DEFAULT, '04467565', 'RUA 7 DE ABRIL', 30, 'JARDIM APURA',  'COLEGIO THIAGO ABERIONE','avenida carminha', 'SAO PAULO', 'SP', 'BRASIL','RESIDENCIAL' ,'1');
INSERT INTO tel_medicos VALUES (DEFAULT, '11', 951234788, 'CELULAR', '1');

INSERT INTO medicos VALUES (DEFAULT, 'REGINA', '45615987654',"987654321",'F','REGINA@GMAIL.COM','REGINA123','ORTOPEDISTA','Médico',2);
INSERT INTO endereco_medicos VALUES (DEFAULT, '23569874', 'PORIPORÁ', 305, 'SÃO FRANCISCO', 'avenida zile', 'PAPELARIA ENALDO', 'SAO PAULO', 'SP', 'BRASIL','COMERCIAL', '2');
INSERT INTO tel_medicos VALUES (DEFAULT, '11', 41492311, 'RESIDENCIAL', '2');

/*------------------------- INSERT EXAME -------------------------*/
insert into exames values (default,"", 'Exame de sangue','lorem', '2022/09/16', 'Pendente', 'lorem','1', '1');
insert into exames values (default, '','Exame cardiologico','lorem', '2022/05/13', 'Concluido','lorem', '2', '2');




/*------------------------- INSERT MEDICO CONVIDADO -------------------------*/

insert into medico_convs value(default,'Wesley','10283268584','Cardiologia','wesley12@Hotmail.com','ws123456',423843258,'m','Médico convidado','1','1');
insert into END_MED_CONVS value(default,'04470389','Travessa São Sebastião',1005,'Parque Primavera','Casa A','lado do Banco','Sâo Paulo','SP','Basil','Residencial','1');
insert into tel_medico_convs value(default,11,956923807,'Celular','1');

insert into medico_convs value(default,'Gabriel',81382590563,'Traumatologia','Gabriel1@gmail.com','gaab1234',455326132,'m','Médico convidado','2','2');
insert into END_MED_CONVS value(default,'04467270','Rua Adauto Lemos',36,'Vila missionaria','Casa B','lado do MC','Rio de Janeiro','Rj','Basil','Comercial','2');
insert into tel_medico_convs value(default,11,956389091,'Comercial','2');