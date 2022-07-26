const autos = document.querySelectorAll('.autos__auto')
const video = document.querySelector('video')
const modelo = document.querySelector('.modal__contenido__info__titulo__modelo')
const logo = document.querySelector('.modal__contenido__info__titulo__logo')
const mensaje_primario = document.querySelector('.mensaje__primario')
const mensaje_secundario = document.querySelector('.mensaje__secundario')
const aceleracion = document.querySelector('.aceleracion')
const max = document.querySelector('.top')
const torque = document.querySelector('.torque')
const precio = document.querySelector('.modal__contenido__info__precio')
const modal = document.querySelector('.modal')

const contenidoModal = {
    ferrari: {
        f8: {
            titulo: 'F8 Tributo',
            video: '../../static/video/presentacion/ferrari/f8.mp4',
            logo: '../../static/imgs/marcas/presentacion/ferrari/ferrari-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
        488: {
            titulo: '488 Pista',
            video: '../../static/video/presentacion/ferrari/488.mp4',
            logo: '../../static/imgs/marcas/presentacion/ferrari/ferrari-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
        portofino: {
            titulo: 'Portofino',
            video: '../../static/video/presentacion/ferrari/portofino.mp4',
            logo: '../../static/imgs/marcas/presentacion/ferrari/ferrari-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        }
    },
    lamborghini: {
        aventador: {
            titulo: 'Aventador',
            video: '../../static/video/presentacion/lamborghini/aventador.mp4',
            logo: '../../static/imgs/marcas/presentacion/lamborghini/lambo-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
        huracan: {
            titulo: 'Huracan',
            video: '../../static/video/presentacion/lamborghini/huracan.mp4',
            logo: '../../static/imgs/marcas/presentacion/lamborghini/lambo-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
        urus: {
            titulo: 'Urus',
            video: '../../static/video/presentacion/lamborghini/urus.mp4',
            logo: '../../static/imgs/marcas/presentacion/lamborghini/lambo-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
    },
    mclaren: {
        p1: {
            titulo: 'P1',
            video: '../../static/video/presentacion/mclaren/p1.mp4',
            logo: '../../static/imgs/marcas/presentacion/mclaren/mclaren-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
        720: {
            titulo: '720s',
            video: '../../static/video/presentacion/mclaren/720.mp4',
            logo: '../../static/imgs/marcas/presentacion/mclaren/mclaren-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
        600: {
            titulo: '600LT',
            video: '../../static/video/presentacion/mclaren/600.mp4',
            logo: '../../static/imgs/marcas/presentacion/mclaren/mclaren-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
    },
    bentley: {
        continental: {
            titulo: 'Continental',
            video: '../../static/video/presentacion/bentley/continental.mp4',
            logo: '../../static/imgs/marcas/presentacion/bentley/bentley-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
       bentayga: {
            titulo: 'Bentayga',
            video: '../../static/video/presentacion/bentley/bentayga.mp4',
            logo: '../../static/imgs/marcas/presentacion/bentley/bentley-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
       spur: {
            titulo: 'Flying Spur',
            video: '../../static/video/presentacion/bentley/spur.mp4',
            logo: '../../static/imgs/marcas/presentacion/bentley/bentley-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
    },
    rr: {
        ghost: {
            titulo: 'Ghost',
            video: '../../static/video/presentacion/rr/ghost.mp4',
            logo: '../../static/imgs/marcas/presentacion/rolls-royce/rolls-royce-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
        wraith: {
            titulo: 'Wraith',
            video: '../../static/video/presentacion/rr/wraith.mp4',
            logo: '../../static/imgs/marcas/presentacion/rolls-royce/rolls-royce-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
        cullinan: {
            titulo: 'Cullinan',
            video: '../../static/video/presentacion/rr/cullinan.mp4',
            logo: '../../static/imgs/marcas/presentacion/rolls-royce/rolls-royce-logo.png',
            mensaje1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            mensaje2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at commodi ea et exercitationem fugiat ipsa maiores minima nobis numquam odio quos, reiciendis rem sed tempora ut, velit vero vitae.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 320,000'
        },
    }
}

function detallarModal(auto, mod){
    const vehiculo = contenidoModal[auto][mod]
    video.setAttribute('src', vehiculo.video)
    modelo.textContent = vehiculo.titulo
    logo.setAttribute('src', vehiculo.logo)
    mensaje_primario.textContent = vehiculo.mensaje1
    mensaje_secundario.textContent = vehiculo.mensaje2
    aceleracion.textContent = vehiculo.specs.aceleracion
    max.textContent = vehiculo.specs.top
    torque.textContent = vehiculo.specs.torque
    precio.textContent = vehiculo.precio
}


autos.forEach((auto) => {
    auto.addEventListener('click', (event) => {
        const clases = event.target.parentNode.classList
        detallarModal(clases[1], clases[2])
        modal.classList.add('modal--activa')
    })
})

modal.addEventListener('click', (event) => {
    if (event.target.textContent === 'Regresar' || event.target === modal){
        modal.classList.remove('modal--activa')
    }
})