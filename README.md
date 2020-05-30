# DESAFIO

- Implementar a autenticação utilizando jwt
- Criptografar a senha do usuário ao cadastra-lo
- Criar uma rota onde o usuário poderá ver as tarefas dele (Não poderá passar o id do usuário pela url, deve-se recuperar o id pelo token)

# Referências
https://docs.nestjs.com/
https://github.com/typeorm/typeorm
https://github.com/nestjsx/crud/wiki

# DOCKER
docker-compose up db1 ou docker-compose up -d db1 para rodar em background
PORTA 5432
DB_HOST='localhost'
DB_USER='nest'
DB_PASS='nest'
DB_NAME='lista_tarefas_db1'


# PACKAGES PARA O DESAFIO
jsonwebtoken
bcryptjs