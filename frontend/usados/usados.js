const autos = document.querySelectorAll('.autos__auto')
const img = document.querySelector('.modal__contenido__img')
const modelo = document.querySelector('.modal__info__modelo')
const precio = document.querySelector('.modal__info__precio')
const modal = document.querySelector('.modal')
let interval = undefined

const contenidoModal = {
    bugatti: {
        modelo: 'Bugatti Chiron',
        precio: '$2,500,000',
        imgs: ['../static/imgs/usados/presentacion/bugatti/bugatti1.png',
                '../static/imgs/usados/presentacion/bugatti/bugatti2.png',
                '../static/imgs/usados/presentacion/bugatti/bugatti3.png',
                '../static/imgs/usados/presentacion/bugatti/bugatti4.png',
                '../static/imgs/usados/presentacion/bugatti/bugatti5.png'],
    },
    ferrari: {
        modelo: 'Ferrari F12 Berlinetta',
        precio: '$400,000',
        imgs: ['../static/imgs/usados/presentacion/ferrari/ferrari1.png',
                '../static/imgs/usados/presentacion/ferrari/ferrari2.png',
                '../static/imgs/usados/presentacion/ferrari/ferrari3.png',
                '../static/imgs/usados/presentacion/ferrari/ferrari4.png',
                '../static/imgs/usados/presentacion/ferrari/ferrari5.png'],
    },
    ford: {
        modelo: 'Ford Mustang Mach 1',
        precio: '$63,000',
        imgs: ['../static/imgs/usados/presentacion/ford/ford1.png',
                '../static/imgs/usados/presentacion/ford/ford2.png',
                '../static/imgs/usados/presentacion/ford/ford3.png',
                '../static/imgs/usados/presentacion/ford/ford4.png',
                '../static/imgs/usados/presentacion/ford/ford5.png'],
    },
}

function detallarModal(auto){
    const vehiculo = contenidoModal[auto]
    modelo.textContent = vehiculo.modelo
    precio.textContent = vehiculo.precio
    let posicion = 0
    img.setAttribute('src', vehiculo.imgs[posicion])
    interval = setInterval(() => {
        if (posicion === 4){
            posicion = 0
        }else{
            posicion += 1
        }
        img.setAttribute('src', vehiculo.imgs[posicion])
    }, 2000)
}


autos.forEach((auto) => {
    auto.addEventListener('click', (event) => {
        const clases = event.target.parentNode.classList
        detallarModal(clases[1])
        modal.classList.add('modal--activa')
    })
})

modal.addEventListener('click', (event) => {
    if (event.target.textContent === 'Regresar' || event.target === modal){
        clearInterval(interval)
        modal.classList.remove('modal--activa')
        img.setAttribute('src', '')
    }
})