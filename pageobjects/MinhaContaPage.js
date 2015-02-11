function MinhaContaPage() {
	this.aguardarCarregamentoPagina = function() {
		casper.then(function() {
        	this.waitForSelector('a[title="Sair"]');
    	});
	};
}