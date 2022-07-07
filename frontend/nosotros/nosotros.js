// Declaracion de variables
const seccion = document.querySelectorAll('.siguiente')
const historia = document.querySelector('.historia')
const vision = document.querySelector('.vision')
const mision = document.querySelector('.mision')
const clientes = document.querySelector('.clientes')


seccion.forEach((sec) => {
    sec.addEventListener('click', (event) => {
        const value = event.target.parentNode.children[1].textContent
        switch(value){
            case 'Historia':
                historia.scrollIntoView()
                break
            case 'Vision':
                vision.scrollIntoView()
                break
            case 'Mision':
                mision.scrollIntoView()
                break
            case 'Clientes':
                clientes.scrollIntoView()
                break
        }
    })
})