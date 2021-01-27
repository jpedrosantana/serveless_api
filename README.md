# Construindo API Serveless com NodeJS, MongoDB e Azure Functions

Projeto realizado no webnar [Construindo Sexy APIs usando arquitetura Serveless](https://www.youtube.com/watch?v=uCYC1lYpyxc&ab_channel=DigitalInnovationOne) com o orientador [Igor Halfeld](https://github.com/IgorHalfeld)  promovido pela [Digital Innovation One](https://digitalinnovation.one/)
  

### Foi necessária a instalação do  [Azure Functions Core Tools](https://docs.microsoft.com/pt-br/azure/azure-functions/functions-run-local?tabs=windows,csharp,bash) no VSCode
### Principais comandos:
**func init** - cria um novo projeto
**func new** - cria uma nova função
**func host start** - inicializa todas as funções criadas

### Após o comando *func host start* a saída será dessa forma:
-   **CreateProduct: [POST]**  [http://localhost:7071/api/products](http://localhost:7071/api/products)
-   **DeleteProduct: [DELETE]**  [http://localhost:7071/api/products/{id}](http://localhost:7071/api/products/%7Bid%7D)
-   **GetProductbyId: [GET]**  [http://localhost:7071/api/products/{id}](http://localhost:7071/api/products/%7Bid%7D)
-   **GetProducts: [GET]**  [http://localhost:7071/api/products](http://localhost:7071/api/products)
-   **UpdateProduct: [PUT]**  [http://localhost:7071/api/UpdateProduct/{id}](http://localhost:7071/api/UpdateProduct)
### e todos os comandos CRUD podem ser utilizados, por exemplo utilizando o [Postman](https://www.postman.com/).
