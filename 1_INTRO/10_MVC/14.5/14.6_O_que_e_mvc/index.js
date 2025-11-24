/*

    O que é MVC?
        Um acronimo de Model, View, Controller
        é um padrão de arquitetura de software que pode deixar nossas
        aplicações mais organizadas
        a aplicação é dividida em camadas, cada uma com suas responsabilidades
        teremos uma nova estrutura de arquivos e pastas
        e a aplicação obedece um novo fluxo, que se repete para todas as açoes
        aplicações em MVC tendem a ter um manutenção/evolução mais fácil.

    A camada Modelo(Model)
        É uma camada onde vamos interagir com o banco de dados
        normalmente interage com os arquivos do controller
        responsável pelo CRUD da aplicação, criar, remover, editar e deletar
        é comum que cada tabela seja um Model, assim como fazemos com o
        setup do sequelize
        Os models são quem controlam a arquitetura do sistema, é entender a regra
        de negocios analisando eles.

    Camada de visualização(view)
        É onde apresentamos os dados que estão no banco de dados
        geralmente a view interage com o controller, que é o meio de campo
        e também na view temos a interação com o usuário, como formulários para 
        inserir dados no sistema
        é correto não haver lógica de negocios na view, ou o minimo possível.
        normalmente a exibição é feita através do HTML.

    Camada de controle(Controller)
        É onde temos a interação entre Model e View
        podemos definir qual view será impressa, processar dados que foram enviados para
        o banco de dados ou para a view
        Os controllers terão um código parecido com os das rotas, que estamos criando até
        então no curso.
*/

