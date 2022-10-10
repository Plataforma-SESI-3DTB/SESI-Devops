FROM mysql:8.0.30

ENV MYSQL_ROOT_PASSWORD passwd
ENV MYSQL_USER backend
ENV MYSQL_PASSWORD passwd

COPY BANCO_DE_DADOS_2.2.sql /docker-entrypoint-initdb.d/


WORKDIR /var/lib/mysql

# https://stackoverflow.com/questions/62999267/how-to-run-mysql-scripts-in-docker-image#62999651