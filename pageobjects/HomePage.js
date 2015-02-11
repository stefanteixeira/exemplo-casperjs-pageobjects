function HomePage() {
	this.abrirPaginaLogin = function() {
		casper.then(function() {
		    this.click('a[title="Entrar"]');
		});
	};
}