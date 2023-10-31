//  // Função para detectar a rolagem e ativar a transição para a próxima seção
//  function scrollHandler() {
//     const sections = document.querySelectorAll('section'); // Seleciona todas as seções
//     let currentSection = 0;

//     // Encontra a seção atual
//     for (let i = 0; i < sections.length; i++) {
//         const section = sections[i];
//         const rect = section.getBoundingClientRect();

//         if (rect.top >= 0 && rect.top <= window.innerHeight) {
//             currentSection = i;
//             break;
//         }
//     }

//     // Calcula o índice da próxima seção
//     const nextSectionIndex = currentSection + 1;

//     // Verifica se há uma próxima seção e faz a transição
//     if (nextSectionIndex < sections.length) {
//         const nextSection = sections[nextSectionIndex];
//         window.scrollTo({
//             top: nextSection.offsetTop,
//             behavior: 'smooth'
//         });
//     }
// }

// // Adiciona um ouvinte de evento para a rolagem da página
// window.addEventListener('wheel', scrollHandler);


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
            //ativando linha
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate')
        }
        else {
            sec.classList.remove('show-animate')
        }
    });
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
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

const carousels = document.querySelectorAll('.carousel-container');
const buttons = document.querySelectorAll('.carousel-button');
const items = carousels[0].querySelectorAll('.carousel-item');
let currentIndex = 0;

function nextSlide(index) {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(index);
}

function prevSlide(index) {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel(index);
}

function updateCarousel(index) {
    const offset = -currentIndex * 300;
    carousels[index].style.transform = `translateX(${offset}px)`;
}

// ________________________________________________________________________________________________________________________________

