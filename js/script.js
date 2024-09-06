
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remover ícone de menu e fechar navbar quando clicar em links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animação do footer no scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
};

// ________________________________________________________________________________________________________________________________

function leiaMais(numero) {
    var pontos = document.getElementById("pontos" + numero);
    var maisTexto = document.getElementById("mais" + numero);
    var btnLeiaMais = document.getElementById("btnLeiaMais" + numero);

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        maisTexto.style.display = "none";
        btnLeiaMais.innerHTML = "Ler Mais";
    } else {
        pontos.style.display = "none";
        maisTexto.style.display = "inline";
        btnLeiaMais.innerHTML = "Ler Menos";
    }
}

// ________________________________________________________________________________________________________________________________

document.getElementById('downloadButton').addEventListener('click', function () {
    const button = this;
    button.classList.add('loading');

    setTimeout(() => {
        button.classList.remove('loading');
    }, 5000); 
});

// ________________________________________________________________________________________________________________________________