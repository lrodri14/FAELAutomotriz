const marcas = document.querySelector('#marca')
const modelo = document.querySelector('#modelo')
const previo = document.querySelector('.left')
const siguiente = document.querySelector('.right')
const titulo = document.querySelector('.contenido__vis__titulo')
const visMain = document.querySelector('.contenido__vis__main__img')
const nav = document.querySelectorAll('.contenido__vis__nav__item')
const info = document.querySelector('.contenido__vis__info')

const imagenes = {
    ferrari: {
        f8: {
            1: '../static/imgs/cotizaciones/f8-esquina.png',
            2: '../static/imgs/cotizaciones/f8-esquina-trasera.png',
            3: '../static/imgs/cotizaciones/f8-lado.png',
            4: '../static/imgs/cotizaciones/f8-frente.png',
            5: '../static/imgs/cotizaciones/f8-trasera.png',
            titulo: 'Ferrari F8 Tributo',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        }
    },
    lamborghini: {
        aventador: {
            1: '../static/imgs/cotizaciones/f8-esquina.png',
            2: '../static/imgs/cotizaciones/f8-esquina-trasera.png',
            3: '../static/imgs/cotizaciones/f8-lado.png',
            4: '../static/imgs/cotizaciones/f8-frente.png',
            5: '../static/imgs/cotizaciones/f8-trasera.png',
            titulo: 'Lamborghini Aventador SVJ',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        }
    },
}

let posicion = 1
let marcaActual
let mod
let vehiculo = imagenes["ferrari"]["f8"]

// Events

marcas.addEventListener('change', (event) => {
    marcaActual = event.target.value
    switch(marcaActual){
        case 'ferrari':
            mod = 'f8'
            vehiculo = imagenes[marcaActual][mod]
            break
        case 'lamborghini':
            mod = 'aventador'
            vehiculo = imagenes[marcaActual][mod]
            break
        case 'mclaren':
            mod = 'p1'
            vehiculo = imagenes[marcaActual][mod]
            break
        case 'bentley':
            mod = 'continental'
            vehiculo = imagenes[marcaActual][mod]
            break
        case 'rolls-royce':
            mod = 'continental'
            vehiculo = imagenes[marcaActual][mod]
            break
    }
    titulo.textContent = vehiculo.titulo
    info.textContent = vehiculo.info
    for (let i = 1; i < 6; i++){
        nav[i].firstElementChild.setAttribute('src', vehiculo[i])
    }
})

modelo.addEventListener('change', (event) => {
    const modeloActual = event.target.value
    vehiculo = [marcaActual][modeloActual]
})

previo.addEventListener('click', () => {
    if (posicion === 1) {
        posicion = 5
    }else{
        posicion -= 1
    }
    visMain.setAttribute('src', vehiculo[posicion])
})

siguiente.addEventListener('click', () => {
    if (posicion === 5) {
        posicion = 1
    }else{
        posicion += 1
    }
    visMain.setAttribute('src', vehiculo[posicion])
})

nav.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
        nav.forEach((item) => {item.classList.remove('contenido__vis__nav__item__img--selected')})
        elemento.classList.add('contenido__vis__nav__item__img--selected')
        const posicion = event.target.classList[0] === 'contenido__vis__nav__item__img' ? event.target.parentNode.classList[0] : event.target.classList[0]
        visMain.setAttribute('src', vehiculo[posicion])
    })
})