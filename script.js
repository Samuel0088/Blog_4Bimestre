// mostra o quanto a página já foi vista
window.addEventListener('scroll', function() {
    const progressBar = document.getElementById('progressBar');
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;

    const percentScrolled = (scrollPosition / totalHeight) * 100;
    progressBar.style.width = percentScrolled + '%';
});

// botao voltar para cima
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onscroll = function() {
    const botao = document.getElementById('botao_voltar_para_cima');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        botao.style.display = 'block'; // Mostra o botão
    } else {
        botao.style.display = 'none'; // Esconde o botão
    }
};
