phantom.page.injectJs('./pageobjects/HomePage.js');
phantom.page.injectJs('./pageobjects/LoginPage.js');
phantom.page.injectJs('./pageobjects/MinhaContaPage.js');

var homePage = new HomePage();
var loginPage = new LoginPage();
var minhaContaPage = new MinhaContaPage();

casper.test.begin('Teste CasperJS COM PageObjects', function(test) {
    casper.start('http://www.lojaexemplodelivros.com.br/');

    homePage.abrirPaginaLogin();
    loginPage.aguardarCarregamentoPagina();

    casper.then(function verificarTituloPaginaLogin() {
    	test.assertTitle('..:: Login de Cliente ::..', 'Pagina de login carregada com sucesso');
    });

    loginPage.login('stefanfk@gmail.com', 'teste123');
    minhaContaPage.aguardarCarregamentoPagina();

    casper.then(function verificarTituloPaginaMinhaConta() {
       	test.assertTitle('..:: Minha Conta ::..', 'Login efetuado com sucesso');
    });

    casper.run(function() {
        test.done();
    });
});