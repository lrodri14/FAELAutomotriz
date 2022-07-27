// Declaracion de variables

const titulo = document.querySelector('.contenido__info__titulo')
const mensaje = document.querySelector('.contenido__info__mensaje')
const imagen = document.querySelector('.contenido__vis__img')
const marcas = document.querySelectorAll('.contenido__info__marcas__marca')
const link = document.querySelector('.contenido__info__vehiculos')
const vehiculos = document.querySelector('.contenido__info__vehiculos')

// Contenido

const contenido = {
    ferrari : {
        titulo: 'Ferrari',
        mensaje: 'Ferrari es una marca italiana de coches deportivos y superdeportivos, con sede en Maranello y fundada por Enzo Ferrari. En 1929 con la Scuderia Ferrari y en 1947 como fábrica de coches deportivos.',
        imagen: '../static/imgs/marcas/horse.jpg',
        link: '../marcas/ferrari/ferrari.html'
    },
    lamborghini : {
        titulo: 'Lamborghini',
        mensaje: 'Lamborghini, es una marca italiana de superdeportivos fundada en 1963 por Ferruccio Lamborghini, un fabricante de tractores fascinado por la tauromaquia y los automóviles deportivos.',
        imagen: '../static/imgs/marcas/bull.jpg',
        link: '../marcas/lamborghini/lamborghini.html'
    },
    mclaren : {
        titulo: 'Mclaren',
        mensaje: 'McLaren Automotive es un fabricante británico de superdeportivos, con sede en Woking, Gran Bretaña. Actualmente comercializa una gama de deportivos premium muy apreciada entre los fanáticos de las altas prestaciones.',
        imagen: '../static/imgs/marcas/helmet.jpg',
        link: '../marcas/mclaren/mclaren.html'
    },
    bentley : {
        titulo: 'Bentley',
        mensaje: 'Bentley Motors Limited es un fabricante de autos de lujo británico, y subsidiaria total de Volkswagen. Su actividad principal es ingeniería, fabricación y distribución de automóviles de lujo vendidos como Bentley.',
        imagen: '../static/imgs/marcas/bentley.jpg',
        link: '../marcas/bentley/bentley.html'
    },
    rr : {
        titulo: 'Rolls Royce',
        mensaje: 'Rolls-Royce Motor Cars es una empresa de automóviles de lujo británica, fundada por Henry Royce y Charles Stewart Rolls en 1904, pero que desde 1998 pertenece al Grupo BMW.',
        imagen: '../static/imgs/marcas/ecstacy.jpg',
        link: '../marcas/rolls-royce/rolls-royce.html'
    }
}

// Funciones

// Remover bordes de marcas

function removerBordes(){
    marcas.forEach((marca) => {
        marca.classList.length == 2 ? marca.classList.remove(marca.classList[1]) : null
    })
}

// Asingacion de Contenido

function asignarContenido(llave){
    const informacion = contenido[llave]
    titulo.textContent = informacion.titulo
    mensaje.textContent = informacion.mensaje
    imagen.setAttribute('src', informacion.imagen)
    imagen.classList.remove(imagen.classList[1])
    imagen.classList.add(informacion.claseImagen)
    vehiculos.classList.add('contenido__info__vehiculos--visible')
    link.setAttribute('href', informacion.link)
}


// Asignacion de disparadores

marcas.forEach((marca) => {

    marca.addEventListener('click', (event) => {
        removerBordes()
        const eleccion = marca.children[0].classList[1]
        switch(eleccion){
            case 'ferrari-logo':
                event.target.classList.add('ferrari-activo')
                asignarContenido('ferrari')
                break
            case 'lambo-logo':
                marca.classList.add('lambo-activo')
                asignarContenido('lamborghini')
                break
            case 'mclaren-logo':
                marca.classList.add('mclaren-activo')
                asignarContenido('mclaren')
                break
            case 'bentley-logo':
                marca.classList.add('bentley-activo')
                asignarContenido('bentley')
                break
            case 'rr-logo':
                marca.classList.add('rr-activo')
                asignarContenido('rr')
                break
        }
    })

})