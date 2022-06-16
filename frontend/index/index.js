// Declaracion de variables
const navbar = document.querySelector('.navegacion')
const nov = document.querySelector('.nov')
const contacto = document.querySelector('.contacto')
const faq = document.querySelector('.faq')
const controladores = document.querySelectorAll('.siguiente')
const preguntas = document.querySelectorAll('.faq__pregunta')

// Controlador de Scroll
controladores.forEach((controlador) => {
    controlador.addEventListener('click', (e) => {
        const blanco = controlador.children[1].textContent
        switch(blanco){
            case 'Novedades':
                nov.scrollIntoView()
                navbar.classList.add('navegacion--visible')
                break
            case 'Contactanos':
                contacto.scrollIntoView()
                break;
            case 'Preguntas Frecuentes':
                faq.scrollIntoView()
                break;
        }
    })
})

// Visibilidad de Respuestas
preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', (e) => {
        pregunta.classList.contains('visible') ? pregunta.classList.remove('visible') : pregunta.classList.add('visible')
    })
})