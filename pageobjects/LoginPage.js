function LoginPage() {
    this.aguardarCarregamentoPagina = function() {
        casper.then(function() {
            this.waitForSelector('#email');
        });
    };

	this.login = function(email, senha) {
    	casper.then(function() {
        	this.sendKeys('#email', email);
        	this.sendKeys('#pass', senha);
        	this.click('button[title="Entrar"]');
    	});
	};
}
