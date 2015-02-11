function LoginPage() {
    this.aguardarCarregamentoPagina = function() {
        casper.then(function() {
            this.waitForSelector('#email');
        });
    };

	this.login = function(email, senha) {
    	casper.then(function() {
        	this.sendKeys('#email', 'stefanfk@gmail.com');
        	this.sendKeys('#pass', 'teste123');
        	this.click('button[title="Entrar"]');
    	});
	};
}