const marcas = document.querySelector('#marca')
const modelo = document.querySelector('#modelo')
const previo = document.querySelector('.left')
const siguiente = document.querySelector('.right')
const titulo = document.querySelector('.contenido__vis__titulo')
const visMain = document.querySelector('.contenido__vis__main__img')
const nav = document.querySelectorAll('.contenido__vis__nav__item')
const info = document.querySelector('.contenido__vis__info')
const autos = document.querySelectorAll('.auto')

const modelos = {
    ferrari: [['F8 Tributo', 'f8'], ['488 Pista', '488'], ['Portofino', 'portofino']],
    lamborghini: [['Aventador SVJ', 'aventador'], ['Huracan Performante', 'huracan'], ['Urus', 'urus']],
    mclaren: [['P1', 'p1'], ['720s', '720'], ['600LT', '600']],
    bentley: [['Continental GT', 'continental'], ['Bentayga', 'bentayga'], ['Flying Spur', 'spur']],
    rr: [['Ghost', 'ghost'], ['Cullinan', 'cullinan'], ['Wraith', 'wraith']]
}

const imagenes = {
    ferrari: {
        'f8': {
            1: '../static/imgs/vehiculos/ferrari/f81.png',
            2: '../static/imgs/vehiculos/ferrari/f85.png',
            3: '../static/imgs/vehiculos/ferrari/f83.png',
            4: '../static/imgs/vehiculos/ferrari/f84.png',
            5: '../static/imgs/vehiculos/ferrari/f82.png',
            titulo: 'Ferrari F8 Tributo',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
        '488': {
            1: '../static/imgs/vehiculos/ferrari/4881.png',
            2: '../static/imgs/vehiculos/ferrari/4882.png',
            3: '../static/imgs/vehiculos/ferrari/4883.png',
            4: '../static/imgs/vehiculos/ferrari/4884.png',
            5: '../static/imgs/vehiculos/ferrari/4885.png',
            titulo: 'Ferrari 488 Pista',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
        'portofino': {
            1: '../static/imgs/vehiculos/ferrari/portofino1.png',
            2: '../static/imgs/vehiculos/ferrari/portofino2.png',
            3: '../static/imgs/vehiculos/ferrari/portofino3.png',
            4: '../static/imgs/vehiculos/ferrari/portofino4.png',
            5: '../static/imgs/vehiculos/ferrari/portofino5.png',
            titulo: 'Ferrari Portofino',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        }
    },
    lamborghini: {
        aventador: {
            1: '../static/imgs/vehiculos/lamborghini/aventador1.png',
            2: '../static/imgs/vehiculos/lamborghini/aventador2.png',
            3: '../static/imgs/vehiculos/lamborghini/aventador3.png',
            4: '../static/imgs/vehiculos/lamborghini/aventador4.png',
            5: '../static/imgs/vehiculos/lamborghini/aventador5.png',
            titulo: 'Lamborghini Aventador SVJ',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
        huracan: {
            1: '../static/imgs/vehiculos/lamborghini/huracan1.png',
            2: '../static/imgs/vehiculos/lamborghini/huracan2.png',
            3: '../static/imgs/vehiculos/lamborghini/huracan3.png',
            4: '../static/imgs/vehiculos/lamborghini/huracan4.png',
            5: '../static/imgs/vehiculos/lamborghini/huracan5.png',
            titulo: 'Lamborghini Huracan',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
        urus: {
            1: '../static/imgs/vehiculos/lamborghini/urus1.png',
            2: '../static/imgs/vehiculos/lamborghini/urus2.png',
            3: '../static/imgs/vehiculos/lamborghini/urus3.png',
            4: '../static/imgs/vehiculos/lamborghini/urus4.png',
            5: '../static/imgs/vehiculos/lamborghini/urus5.png',
            titulo: 'Lamborghini Urus',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        }
    },
    mclaren: {
        p1: {
            1: '../static/imgs/vehiculos/mclaren/p11.png',
            2: '../static/imgs/vehiculos/mclaren/p12.png',
            3: '../static/imgs/vehiculos/mclaren/p13.png',
            4: '../static/imgs/vehiculos/mclaren/p14.png',
            5: '../static/imgs/vehiculos/mclaren/p15.png',
            titulo: 'Mclaren P1',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
        720: {
            1: '../static/imgs/vehiculos/mclaren/7201.png',
            2: '../static/imgs/vehiculos/mclaren/7202.png',
            3: '../static/imgs/vehiculos/mclaren/7203.png',
            4: '../static/imgs/vehiculos/mclaren/7204.png',
            5: '../static/imgs/vehiculos/mclaren/7205.png',
            titulo: 'Mclaren 720s',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
        600: {
            1: '../static/imgs/vehiculos/mclaren/6001.png',
            2: '../static/imgs/vehiculos/mclaren/6002.png',
            3: '../static/imgs/vehiculos/mclaren/6003.png',
            4: '../static/imgs/vehiculos/mclaren/6004.png',
            5: '../static/imgs/vehiculos/mclaren/6005.png',
            titulo: 'Mclaren 600LT',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
    },
    bentley: {
        bentayga: {
            1: '../static/imgs/vehiculos/bentley/bentayga1.png',
            2: '../static/imgs/vehiculos/bentley/bentayga2.png',
            3: '../static/imgs/vehiculos/bentley/bentayga3.png',
            4: '../static/imgs/vehiculos/bentley/bentayga4.png',
            5: '../static/imgs/vehiculos/bentley/bentayga5.png',
            titulo: 'Bentley Bentayga',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
        continental: {
            1: '../static/imgs/vehiculos/bentley/continental1.png',
            2: '../static/imgs/vehiculos/bentley/continental2.png',
            3: '../static/imgs/vehiculos/bentley/continental3.png',
            4: '../static/imgs/vehiculos/bentley/continental4.png',
            5: '../static/imgs/vehiculos/bentley/continental5.png',
            titulo: 'Bentley Continental',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
        spur: {
            1: '../static/imgs/vehiculos/bentley/spur1.png',
            2: '../static/imgs/vehiculos/bentley/spur2.png',
            3: '../static/imgs/vehiculos/bentley/spur3.png',
            4: '../static/imgs/vehiculos/bentley/spur4.png',
            5: '../static/imgs/vehiculos/bentley/spur5.png',
            titulo: 'Bentley Flying Spur',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
    },
    rr: {
        ghost: {
            1: '../static/imgs/vehiculos/rolls-royce/ghost1.png',
            2: '../static/imgs/vehiculos/rolls-royce/ghost2.png',
            3: '../static/imgs/vehiculos/rolls-royce/ghost3.png',
            4: '../static/imgs/vehiculos/rolls-royce/ghost4.png',
            5: '../static/imgs/vehiculos/rolls-royce/ghost5.png',
            titulo: 'Rolls Royce Ghost',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
        cullinan: {
            1: '../static/imgs/vehiculos/rolls-royce/cullinan1.png',
            2: '../static/imgs/vehiculos/rolls-royce/cullinan2.png',
            3: '../static/imgs/vehiculos/rolls-royce/cullinan3.png',
            4: '../static/imgs/vehiculos/rolls-royce/cullinan4.png',
            5: '../static/imgs/vehiculos/rolls-royce/cullinan5.png',
            titulo: 'Rolls Royce Cullinan',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
        wraith: {
            1: '../static/imgs/vehiculos/rolls-royce/wraith1.png',
            2: '../static/imgs/vehiculos/rolls-royce/wraith2.png',
            3: '../static/imgs/vehiculos/rolls-royce/wraith3.png',
            4: '../static/imgs/vehiculos/rolls-royce/wraith4.png',
            5: '../static/imgs/vehiculos/rolls-royce/wraith5.png',
            titulo: 'Rolls Royce Wraith',
            info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam asperiores assumenda, corporis cum delectus dignissimos dolor doloremque eos fugiat hic ipsum necessitatibus nobis optio qui, quibusdam similique soluta veritatis vitae!'
        },
    },
}

let posicion = 1
let marcaActual = 'ferrari'
let mod = 'f8'
let vehiculo = imagenes[marcaActual][mod]

function actualizarCarousel(){
    visMain.setAttribute('src', vehiculo[1])
    for (let i = 1; i < 6; i++){
        nav[i-1].firstElementChild.setAttribute('src', vehiculo[i])
    }
}

function actualizarOpciones(marca){
    const modelo = modelos[marca]
    autos[0].textContent = modelo[0][0]
    autos[0].setAttribute('value', modelo[0][1])
    autos[1].textContent = modelo[1][0]
    autos[1].setAttribute('value', modelo[1][1])
    autos[2].textContent = modelo[2][0]
    autos[2].setAttribute('value', modelo[2][1])
}

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
        case 'rr':
            mod = 'ghost'
            vehiculo = imagenes[marcaActual][mod]
            break
    }
    titulo.textContent = vehiculo.titulo
    info.textContent = vehiculo.info
    actualizarOpciones(marcaActual)
    actualizarCarousel()
})

modelo.addEventListener('change', (event) => {
    mod = event.target.value
    vehiculo = imagenes[marcaActual][mod]
    actualizarCarousel()
    titulo.textContent = vehiculo.titulo
    info.textContent = vehiculo.info
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

actualizarCarousel()
