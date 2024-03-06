"use strict"

document.querySelector('.menu-btn').addEventListener("click",()=>{
	document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase',{delay:500});

ScrollReveal().reveal('.new-cards',{delay:500});

ScrollReveal().reveal('.cards-banner-one',{delay:500});

ScrollReveal().reveal('.cards-banner-two',{delay:500});

const newsItems = document.querySelectorAll('.liked')

newsItems.forEach(newsItem => {
    // Crea un botón para cada elemento de noticias
    const button = document.createElement('button');
    button.textContent = 'Me gusta';
    button.classList.add('btn', 'btn-primary');

    // Agrega el botón al elemento de noticias
    newsItem.appendChild(button);

    // Agrega el evento de clic al botón
    button.addEventListener('click', function () {
        if (this.classList.contains('liked')) {
            this.classList.remove('liked');
            this.innerText = 'Me gusta';
        } else {
            this.classList.add('liked');
            this.innerText = 'Quitar me gusta';
        }
    });
});


/*const button = document.querySelector('button');

button.addEventListener('click', function () {
	const id = this.getAttribute('data-id')
	if(this.classList.contains('liked')) {
		this.classList.remove('liked')
		this.innerText = 'Me gusta'
	} else {
		this.classList.add('liked')
		this.innerText = 'Quitar me gusta'
	}
})*/
