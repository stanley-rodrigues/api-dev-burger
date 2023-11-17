# Api hamburgueria REST

Projeto criado para gestão de uma hamburgueria onde o usuário pode se cadastrar e fazer seu pedido.O administrador pode adicionar e remover produtos,categorias, produtos em oferta e modificar pedido. 

## Índice 
[Instalação](#Instalação)

[Tecnologias utilizadas](#Tecnologias-utilizadas)

[Usuário admin logado](#Usuário-admin-logado)

[Rota categorias](#Rota-categorias)

[Rota produtos](#Rota-produtos)

[Rota pedidos](#Rota-pedidos)

[Usuário cliente logado](#Usuário-cliente-logado)

[Rota pedidos cliente](#Rota-pedidos-cliente)

[Desenvolvedor](#desenvolvedor)


## Instalação
Faça a instalação das seguintes ferramentas: 

[Vscode](https://code.visualstudio.com/download)

[Node.js](https://nodejs.org/en/download)

[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

[Insomnia](https://insomnia.rest/download)

[Docker](https://www.docker.com/products/docker-desktop/)

[Postbird](https://github.com/Paxa/postbird/releases/tag/0.8.4)

[MongoDB Compass](https://www.mongodb.com/try/download/atlascli)


##

### Tecnologias utilizadas

O projeto foi utilizado:

- [x] JavaScript
- [x] Node
- [x] Express
- [x] PostgreSQL
- [x] mongoBD
- [x] MVC
- [x] Eslint 
- [x] Prettier
- [x] Yup
- [x] Multer
- [x] JWT
- [x] Bcript

  

  ##

Abra o vscode.
abra um terminal e faça um clone do projeto.
```
git clone https://github.com/stanley-rodrigues/api-dev-burger.git
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/terminal.png"/>
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/colar%20link%20api.png"/>

Após fazer o clone ainda com o terminal aberto digite o comando "cd api-dev-burger" e prescione enter. 
```
cd api-dev-burger
```
Você irá acessar a pasta do projeto.No terminal dê o comando "yarn install" para baixar as dependências do projeto. 
```
yarn install
```
Após baixar as dependências do projeto, você precisará subir os container com os bancos postgres e mongoDB com os comandos no terminal:

```
docker run --name codeburger-postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```
Depois o container do MongoDB
```
docker run --name mongo -p 27017:27017 -d -t mongo
```

Após os dois contaneires criados abra o docker e dê start em ambos.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/Captura%20de%20Tela%202023-11-16%20%C3%A0s%2021.11.00.png"/>

Retorne ao vscode e no terminal execute o comando:
```
yarn sequelize db:migrate
```
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/migrate.png"/>
Para criar as tabelas no banco que podem ser vista no postbird. Abra postbird nos campos Username e Password coloque "postgres" e clique em connect.
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/postgres.png"/>
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/postgresTables.png"/>

Retorne ao vscode e no terminal execute o comando:
```
yarn dev
```
E a aplicação estará rodando.

# Como usar

abra o insomnia crie uma rota POST e mande pelo body: name,email,password e admin sendo true(para criar um administrador) e false (para usuário cliente).Usando url
```
http://localhost:3001/users
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/user.png"/>

## Usuário admin logado

Crie uma rota POST e mande pelo body: email e password. Ao logar será gerado um token (guarde pois será utilizados nas demais rotas).Usando url.
```
http://localhost:3001/sessions
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/login.png"/>

### Rota categorias

Crie uma rota POST e mude o body de json para multipart, mandando name e file (foto que representa sua categoria a ser criada).Usando url
```
http://localhost:3001/categories
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/cria%20categoria.png"/>

Para visualizar todas as categorias, crie uma rota GET Usando url
```
http://localhost:3001/categories
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

Para editar alguma categoria, crie uma rota PUT Usando url e após a / adicione o id gerado na criação da categoria. Para buscar o id de uma categoria basta acessa a rota GET.Mude o body de json para multipart e mande name com o nome que você colocar com valor 
```
http://localhost:3001/categories/
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

### Rota produtos

Crie uma rota POST e mude o body de json para multipart, mandando name, price, category_id(id que é gerado a cada criação de uma categoria, escolha a que melhor representa seu produto) e file (foto que representa seu produto a ser criado).Usando url
```
http://localhost:3001/products
```

No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/produtos.png"/>

Para visualizar todas os produtos, crie uma rota GET Usando url
```
http://localhost:3001/products
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

Para editar algum produto, crie uma rota PUT Usando url e após a / adicione o id gerado na criação do produto. Para buscar o id de um produto basta acessa a rota GET.Mude o body de json para multipart e mande offer sendo true ou false(se desejar) name(se desejar) file(se desejar)
```
http://localhost:3001/products/
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/editproduto.png"/>

### Rota pedidos

Crie uma rota POST, mandando um array products com objeto contendo id e quantity. id é referente ao id do produto(para buscar o id de um produto basta acessa a rota GET) e quantity a quantidade desejada do item.Usando url
```
http://localhost:3001/orders
```

No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/criarpedido.png"/>

Para visualizar o pedido, crie uma rota GET Usando url
```
http://localhost:3001/orders
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

Para editar algum pedido, crie uma rota PUT Usando url e após a / adicione o id gerado na criação do pedido. Para buscar o id de um pedido basta acessa a rota GET.Mandado status e a mensagem desejada no body
```
http://localhost:3001/orders/
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/editorder.png"/>

## Usuário cliente logado

Na rota POST e mande pelo body: name,email,password e admin sendo false (para usuário cliente).Usando url
```
http://localhost:3001/users
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/user.png"/>

Na rota POST e mande pelo body: email e password. Ao logar será gerado um token (guarde pois será utilizados nas demais rotas).Usando url.
```
http://localhost:3001/sessions
```

<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/login.png"/>

### Rota pedidos cliente

Na POST, mandando um array products com objeto contendo id e quantity. id é referente ao id do produto(para buscar o id de um produto basta acessa a rota GET) e quantity a quantidade desejada do item.Usando url
```
http://localhost:3001/orders
```

No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.
<img src="https://github.com/stanley-rodrigues/picForReadme/blob/main/api%20Devburguer/criarpedido.png"/>

Para visualizar o pedido, crie uma rota GET Usando url
```
http://localhost:3001/orders
```
No campo Auth mude para bearer token e adicione o token gerado no login no campo de valor. E faça a requisição.



##  desenvolvedor

<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/stanley-rodrigues/" target="_blank">
        <img src="https://github.com/stanley-rodrigues/easy-shopping-pag-responsiva/blob/master/assets/eu.jpeg?raw=true" width="100px;" alt="Foto de Stanley Rodrigues"/><br>
        <sub>
          <b>Stanley Rodrigues</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
