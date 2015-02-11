casper.test.begin('Teste CasperJS SEM PageObjects', function(test) {
    casper.start('http://www.lojaexemplodelivros.com.br/');

    casper.then(function() {
        this.click('a[title="Entrar"]');
    });

    casper.then(function() {
        this.waitForSelector('#email', function() {
        	test.assertTitle('..:: Login de Cliente ::..', 'Pagina de login carregada com sucesso');
        });
    });

    casper.then(function() {
        this.sendKeys('#email', 'stefanfk@gmail.com');
        this.sendKeys('#pass', 'teste123');
        this.click('button[title="Entrar"]');
    });

    casper.then(function() {
        this.waitForSelector('a[title="Sair"]', function() {
        	test.assertTitle('..:: Minha Conta ::..', 'Login efetuado com sucesso');
        });
    });

    casper.run(function() {
        test.done();
    });
});