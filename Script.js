const imagemPrincipal = document.getElementById('imagem-principal');

const miniaturas = document.querySelectorAll('.miniatura')

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() {
        const novaImagem = this.getAttribute('data-imagem');
        imagemPrincipal.src = novaImagem
    });
});