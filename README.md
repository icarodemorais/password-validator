# Password Validator

### Conteúdo

- Como Rodar
- Como Consumir
- Descrição da Solução
- Descrição do Projeto
- Assunções
- Conclusão

### Como Rodar

#### Rodando localmente através do node
**Requisitos: Node 12.18.0+ e NPM 6.14.4+**
1. Clone o repositório
	`$ git clone https://github.com/icarodemorais/password-validator.git`
2. Inicie uma sessão do terminal na pasta do repositório e execute o seguinte comando para baixar as dependências
	`$ npm install`
3. Após isso, execute o seguinte comando para startar o servidor
	`$ node index.js`

#### Rodando localmente com docker
**Requisitos: Docker Desktop ou Docker Deamon instalado**
1. Clone o repositório
	`$ git clone https://github.com/icarodemorais/password-validator.git`
2. Inicie uma sessão do terminal na pasta do repositório e execute o seguinte comando para buildar a imagem do docker
	`$ docker build --tag=password-validator:1.0 .`
3. Após isso, execute o seguinte comando para startar o servidor
	`$ docker run -d -p 8080:8080 password-validator:1.0`

#### Rodando imagem do dockerhub
**Requisitos: Docker Desktop ou Docker Deamon instalado**
1. Clone o repositório
	`$ docker run -d -p 8080:8080 icaromorais/password-validator:1.0`
	A imagem não será encontrada localmente e ele irá fazer o download dela com base no repositório [icaromorais/password-validator](https://hub.docker.com/repository/docker/icaromorais/password-validator) no dockerhub

#### Como consumir a api
