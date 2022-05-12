## Encurtador de URL desenvolvido em Javascript com Typescrit e armazenamento dos dados no MongoDB

## Enviar URL para ser encurtada

Enviar via POST o tipo de dado JSON com o parâmetro originURL, conforme o exemplo:

```
{
    "originURL" : "www.google.com,br"
}
```

A API irá retornar a URL encurtada no campo shortURL.



### Para criar o banco de dados do MONGODB  e o MongoDB Express localmente utilizando Docker:

Dentro do diretório da aplicação:

```
docker stack deploy -c docker_stack.yaml mongo
```

Para visualizar os dados, acessar o MongoDB Express através do seguinte endereço através do navegador:
http://0.0.0.0:8081

Para remover a stack de containers Docker que foi criada anteriormente:

```
docker stack rm mongo
```

### Para iniciar o projeto:

```
npm install
npm run dev
```
