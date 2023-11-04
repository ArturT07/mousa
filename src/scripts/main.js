document.addEventListener("DOMContentLoaded", () => {
    

    const burger = document.querySelector('.header__open-menu');
    const cross = document.querySelector('.header__cross');
    const burger_menu = document.querySelector('.header__burger');
    const headerBurgerMenu = document.querySelectorAll('.header-burder-btn');

    headerBurgerMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            burger_menu.classList.add('animate-out');
            cross.classList.remove('menu__visible');
            cross.classList.add('menu__hidden');
            burger.classList.remove('menu__hidden');
            burger.classList.add('menu__visible');
            e.preventDefault(); // Предотвратить переход по ссылке
            const targetId = item.getAttribute('href').substring(1); // Получить идентификатор из атрибута href
            const targetElement = document.getElementById(targetId); // Найти элемент с соответствующим идентификатором
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth' // Добавление плавной прокрутки
                });

            }
        });
    });
    
    burger.addEventListener('click', function() {
        burger.classList.remove('menu__visible');
        burger.classList.add('menu__hidden');
    
        cross.classList.remove('menu__hidden');
        cross.classList.add('menu__visible');

        burger_menu.classList.remove('menu__hidden')
        burger_menu.classList.remove('animate-out')
        burger_menu.classList.add('animate-in')
        
    });
    cross.addEventListener('click', function() {
        cross.classList.remove('menu__visible');
        cross.classList.add('menu__hidden');
    
        burger.classList.remove('menu__hidden');
        burger.classList.add('menu__visible');

        burger_menu.classList.remove('animate-in')
        burger_menu.classList.add('animate-out')
    })

    const images = document.querySelectorAll('.foo-block-advent');

    images.forEach(img => {
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault(); // Запрет контекстного меню
        });

        img.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Предотвращение нажатия мыши
        });

        img.addEventListener('dragstart', (e) => {
            e.preventDefault(); // Предотвращение перетаскивания изображения
        });

        img.style.userSelect = 'none'; // Предотвращение выделения текста
    });


});
document.getElementById("showForm").addEventListener("click", function() {
    var formContainer = document.getElementById("formContainer");
    if (formContainer.style.display === "none" || formContainer.style.display === "") {
        formContainer.style.display = "block";
    } else {
        formContainer.style.display = "none";
    }
});

// Добавляем обработчик для кнопки закрытия формы
document.getElementById("closeForm").addEventListener("click", function() {
    var formContainer = document.getElementById("formContainer");
    formContainer.style.display = "none";
});
var element = document.getElementById('phone');
var maskOptions = {
    mask: '+380(00)000-00-00',
    lazy: false
}
var mask = new IMask(element, maskOptions);

var element2 = document.getElementById('email');
var maskOptions2 = {
    mask:function (value) {
        if(/^[a-z0-9_\.-]+$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@[a-z0-9-]+$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.$/.test(value))
            return true;
        if(/^[a-z0-9_\.-]+@[a-z0-9-]+\.[a-z]{1,4}\.[a-z]{1,4}$/.test(value))
            return true;
        return false;
    },
    lazy: false
}
var mask2 = new IMask(element2, maskOptions2);


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

const mainNavLinks = document.querySelectorAll('.main__nav-li');
const servicesList = document.getElementById('cards-hidden');

mainNavLinks.forEach((serviceLink) => {
    serviceLink.addEventListener('mouseover', () => {
        servicesList.style.display = 'block';
    });

    serviceLink.addEventListener('mouseout', () => {
        servicesList.style.display = 'none';
    });
});

// Весь ваш JavaScript код должен находиться здесь.
const container = document.querySelector(".advantages__main");
const blocks = document.querySelectorAll(".slide");
let currentBlockIndex = 0;
let isScrolling = false;

container.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    isScrolling = true;

    if (e.deltaY > 0 && currentBlockIndex < blocks.length - 1) {
        currentBlockIndex++;
    } else if (e.deltaY < 0 && currentBlockIndex > 0) {
        currentBlockIndex--;
    }

    blocks[currentBlockIndex].scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
        isScrolling = false;
    }, 50);
});

const containerScroll = document.getElementById('scrolling-container');

let preloader = document.getElementById('page-preloader')

document.addEventListener("DOMContentLoaded", function() {
    document.body.onload = function() {
        setTimeout(function() {
            if( !preloader.classList.contains('done') )
            {
                preloader.classList.add('done')
            }
        }, 1000)
    }
});


function showWords(element, blockId) {
    const wordBlock = document.getElementById(blockId);

    if (element.classList.contains("main__nav-li")) {
        wordBlock.style.display = "flex";
        wordBlock.style.flexDirection = "column";
    } else {
        wordBlock.style.display = "none";
    }
}

function hideWords(blockId) {
    const wordBlock = document.getElementById(blockId);
    wordBlock.style.display = "none";
}

function goToSlide(index) {
    const slider = document.querySelector('.advantages__main-grid');
    slider.style.transform = `translateX(-${index * 350}px`; // 300px - ширина одного слайда
}

