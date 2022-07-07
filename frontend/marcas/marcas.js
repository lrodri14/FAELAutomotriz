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
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in faucibus sagittis nunc, vestibulum, aliquet viverra leo nunc. Justo, sit libero non in non, id. Massa, id cras nulla viverra. Dui dignissim commodo at elementum, platea rhoncus et.',
        imagen: '../static/imgs/marcas/horse.jpg',
        link: '../marcas/ferrari.html'
    },
    lamborghini : {
        titulo: 'Lamborghini',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in faucibus sagittis nunc, vestibulum, aliquet viverra leo nunc. Justo, sit libero non in non, id. Massa, id cras nulla viverra. Dui dignissim commodo at elementum, platea rhoncus et.',
        imagen: '../static/imgs/marcas/bull.jpg',
        link: '../marcas/lamborghini.html'
    },
    mclaren : {
        titulo: 'Mclaren',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in faucibus sagittis nunc, vestibulum, aliquet viverra leo nunc. Justo, sit libero non in non, id. Massa, id cras nulla viverra. Dui dignissim commodo at elementum, platea rhoncus et.',
        imagen: '../static/imgs/marcas/helmet.jpg',
        link: '../marcas/mclaren.html'
    },
    bentley : {
        titulo: 'Bentley',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in faucibus sagittis nunc, vestibulum, aliquet viverra leo nunc. Justo, sit libero non in non, id. Massa, id cras nulla viverra. Dui dignissim commodo at elementum, platea rhoncus et.',
        imagen: '../static/imgs/marcas/bentley.jpg',
        link: '../marcas/bentley.html'
    },
    rr : {
        titulo: 'Rolls Royce',
        mensaje: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in faucibus sagittis nunc, vestibulum, aliquet viverra leo nunc. Justo, sit libero non in non, id. Massa, id cras nulla viverra. Dui dignissim commodo at elementum, platea rhoncus et.',
        imagen: '../static/imgs/marcas/ecstacy.jpg',
        link: '../marcas/rolls-royce.html'
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