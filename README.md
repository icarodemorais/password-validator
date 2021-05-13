# Password Validator

### Conteúdo

- Como Rodar
- Como Consumir
- Descrição da Solução
- Descrição do Projeto
- Assunções
- Conclusão

### Como Rodar

### Rodando localmente através do node
**Requisitos: Node 12.18.0+ e NPM 6.14.4+**
1. Clone o repositório
	`$ git clone https://github.com/icarodemorais/password-validator.git`
2. Inicie uma sessão do terminal na pasta do repositório e execute o seguinte comando para baixar as dependências
	`$ npm install`
3. Após isso, execute o seguinte comando para startar o servidor
	`$ node index.js`

### Rodando localmente com docker
**Requisitos: Docker Desktop ou Docker Deamon instalado**
1. Clone o repositório
	`$ git clone https://github.com/icarodemorais/password-validator.git`
2. Inicie uma sessão do terminal na pasta do repositório e execute o seguinte comando para buildar a imagem do docker
	`$ docker build --tag=password-validator:1.0 .`
3. Após isso, execute o seguinte comando para startar o servidor
	`$ docker run -d -p 8080:8080 password-validator:1.0`

### Rodando imagem do dockerhub
**Requisitos: Docker Desktop ou Docker Deamon instalado**
1. Clone o repositório
	`$ docker run -d -p 8080:8080 icaromorais/password-validator:1.0`
	A imagem não será encontrada localmente e ele irá fazer o download dela com base no repositório [icaromorais/password-validator](https://hub.docker.com/repository/docker/icaromorais/password-validator) no dockerhub

### Como consumir a api
Com a aplicação rodando localmente, é possível fazer a seguinte requisição:

GET: `localhost:8080/password/validate/{senha a ser validada}`

- Caso a senha não seja informada, o status code 404 será retornado.

- Caso a validação seja feita com sucesso, o status code retornado será 200, e o response body, irá conter o booleano true, caso a senha estaja de acordo com os requerimentos, e false, caso contrário.

### Solução

A ideia por trás da forma como a validação é feita de fato, foi criar um código parâmetrizado que pudesse ser reutilizado como um plugin de validação, não só para uma senha, mas sim para qualquer tipo de necessidade, como por exemplo, os campos de um formulário.

Por conta disso, busquei criar uma forma de implementação onde a incrementação de novos tipos de validação no código existente, como por exemplo validar se o valor fornecido é um e-mail válido, possa ser feita de uma forma simples, rápida e que não impacte intregrações já existentes.

```javascript
const validator = passwordValidator.create({
        checkEmail: true,
    });
```
Além disso, a solução implementada segue uma estrutura onde, incrementações de features, não só validações, também pode ser realizada de forma a não impactar integrações já existentes, como por exemplo, retornar cada passo da validação que não foi cumprido.
```javascript
const detailedResponseExample = {
    isValid: false,
    failedSteps: ["has spaces", "doesn't have a number", "has duplicated characteres"]
};
```
Com base nisso, a implementação foi dada da forma onde o arquivo util/validators.js contém e expõe todos os tipos de validação disponíveis (tamanho mínimo, se tem espaço, etc) e o arquivo passwordValidator.js expõe a classe responsável pela implementação das validações de forma parametrizada.

Um ponto que é importante ser mencionado, é o fato do uso de RegEx somente em uma única validação (“Ao menos 1 letra minúscula”), dado o fato de que nesse cenário ela é a melhor opção, principalmente pela validação ser relativamente simples e a expressão necessária ser de fácil entendimento.

Pela minha experiência, regex é uma ótima solução, contanto que nunca precise ser alterada. Por conta disso, e com base na minha proposta de solução descrita acima, não faria sentido fazer as validações utilizando-a. Tendo isso em mente, uma possível incrementação no código seria disponibilizar uma option que recebe uma RegEx como parâmetro e o código é responsável somente por fazer a validação. É uma feature fácil de ser  implementada e que possibilita uma flexibilidade para quem consumir a solução.

```javascript
const validator = passwordValidator.create({
        regex: '/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/',
    });

```

### Projeto
