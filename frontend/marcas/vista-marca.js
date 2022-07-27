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
            mensaje1: 'Es la nueva berlinetta biplaza con motor central-trasero, máximo exponente de este tipo de vehículo de la casa del Cavallino Rampante.',
            mensaje2: 'En términos de soluciones aerodinámicas, innovación y know-how de Ferrari, adquirida gracias a la participación en los campeonatos GT y Challenge, y la perfecciona para crear la berlinetta de serie con motor central-trasero con el más alto nivel de prestaciones accesibles para cualquier tipo de conductor. ',
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
            mensaje1: 'El Ferrari 488 Pista está dotado del motor V8 más potente de la historia de la marca de Maranello y es el deportivo serie especial con el nivel más elevado de transferencia tecnológica procedente del mundo de la competición. ',
            mensaje2: 'De hecho, su nombre se eligió específicamente para dejar constancia de la inigualable historia de Ferrari en este ámbito. Desde el punto de vista técnico, el 488 Pista condensa toda la experiencia acumulada por el 488 Challenge y el 488 GTE en los circuitos internacionales. ',
            specs: {
                aceleracion: '3.2s 0-100',
                top: '320KM/H',
                torque: '500nM'
            },
            precio: '$ 280,000'
        },
        portofino: {
            titulo: 'Portofino',
            video: '../../static/video/presentacion/ferrari/portofino.mp4',
            logo: '../../static/imgs/marcas/presentacion/ferrari/ferrari-logo.png',
            mensaje1: 'Para un vehículo tan versátil donde destaca su conducción a cielo abierto, se ha escogido un nombre evocativo, el de uno de los pueblos más bellos de Italia, conocido por su  turístico y convertido cada año en todo un sinónimo de elegancia, deportividad, y lujo discreto.',
            mensaje2: 'A esta maravillosa ciudad se ha dedicado también el color con el que se presenta el nuevo Ferrari: el rojo Portofino. Un Ferrari de uso diario y que apenas sin esfuerzo se transforma de un auténtico coupe “berlinetta” ',
            specs: {
                aceleracion: '3.0s 0-100',
                top: '280KM/H',
                torque: '600nM'
            },
            precio: '$ 180,000'
        }
    },
    lamborghini: {
        aventador: {
            titulo: 'Aventador',
            video: '../../static/video/presentacion/lamborghini/aventador.mp4',
            logo: '../../static/imgs/marcas/presentacion/lamborghini/lambo-logo.png',
            mensaje1: 'El Lamborghini Aventador es un automóvil superdeportivo biplaza de dos puertas de tijera, con motor central-trasero montado longitudinalmente y tracción en las cuatro ruedas.',
            mensaje2: 'Fue concebido para reemplazar al Murciélago, como el nuevo modelo tope de gama. Fue presentado en el Salón del Automóvil de Ginebra el 28 de febrero de 2011, cinco meses después de su presentación oficial en Sant\'Agata Bolognese, con código interno de desarrollo LB834',
            specs: {
                aceleracion: '2.5s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 470,000'
        },
        huracan: {
            titulo: 'Huracan',
            video: '../../static/video/presentacion/lamborghini/huracan.mp4',
            logo: '../../static/imgs/marcas/presentacion/lamborghini/lambo-logo.png',
            mensaje1: 'El Lamborghini Huracán es un automóvil deportivo de alto rendimiento, producido desde 2014 por la casa italiana Lamborghini, filial del Grupo Volkswagen. Es el sucesor del Lamborghini Gallardo.',
            mensaje2: 'La primera versión que se presenta es el LP 610-4 Coupé. Desde Italia confirmaron que las entregas de este automóvil comenzaron durante la primavera de 2014, mientras que su presentación oficial al público se llevó a cabo en la 84.ª edición del Salón del Automóvil de Ginebra en marzo de ese mismo año.',
            specs: {
                aceleracion: '2.3s 0-100',
                top: '320KM/H',
                torque: '700nM'
            },
            precio: '$ 280,000'
        },
        urus: {
            titulo: 'Urus',
            video: '../../static/video/presentacion/lamborghini/urus.mp4',
            logo: '../../static/imgs/marcas/presentacion/lamborghini/lambo-logo.png',
            mensaje1: 'El Lamborghini Urus es un SUV diseñado por Lamborghini. El coche fue presentado el 4 de diciembre de 2017 y se lanzó al mercado para el año modelo 2018. El nombre proviene del Urus, el antepasado del ganado doméstico moderno, también conocido como el Bos primigenius',
            mensaje2: 'El automóvil conceptual fue presentado en el salón del automóvil de Pekín el 23 de abril de 2012. El automóvil conceptual fue también mostrado en Pebble Beach en 2012.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '300KM/H',
                torque: '700nM'
            },
            precio: '$ 250,000'
        },
    },
    mclaren: {
        p1: {
            titulo: 'P1',
            video: '../../static/video/presentacion/mclaren/p1.mp4',
            logo: '../../static/imgs/marcas/presentacion/mclaren/mclaren-logo.png',
            mensaje1: 'El McLaren P1 es un automóvil superdeportivo híbrido eléctrico enchufable de edición limitada producido por el fabricante automotriz británico McLaren Automotive de 2013 a 2015. Tiene carrocería coupé biplaza de 2 puertas diédricas, motor central-trasero montado longitudinalmente y tracción trasera.',
            mensaje2: 'El coche de concepto debutó en el Salón de París de 20123​ y es el tan esperado sucesor del McLaren F1. Utiliza energía híbrida eléctrica y tecnología de la Fórmula 1.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 600,000'
        },
        720: {
            titulo: '720s',
            video: '../../static/video/presentacion/mclaren/720.mp4',
            logo: '../../static/imgs/marcas/presentacion/mclaren/mclaren-logo.png',
            mensaje1: 'El McLaren 720S es un automóvil superdeportivo biplaza, con motor central-trasero montado longitudinalmente y tracción trasera, desarrollado y producido por fabricante británico McLaren Automotive. Es el segundo automóvil completamente nuevo de la McLaren Super Series, reemplazando al 650S a partir de mayo de 2017.',
            mensaje2: 'Fue lanzado en el Salón del Automóvil de Ginebra el 7 de marzo de 2017 y está construido sobre un chasis de carbono modificado, que es más ligero y rígido en contraste con el 650S.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '320KM/H',
                torque: '700nM'
            },
            precio: '$ 550,000'
        },
        600: {
            titulo: '600LT',
            video: '../../static/video/presentacion/mclaren/600.mp4',
            logo: '../../static/imgs/marcas/presentacion/mclaren/mclaren-logo.png',
            mensaje1: 'El McLaren 600LT es un automóvil deportivo fabricado por McLaren Automotive a partir del 2018, el 600LT es la versión más deportiva y radical del 570S. El 600LT fue presentado en el \'Goodwood Festival of Speed 2018\', es el cuarto automóvil de la marca en llevar el nombre "Longtail" (LT).',
            mensaje2: 'Tiene un precio aproximado a las 185.000 libras (210.000 €) y a pesar de sus especificaciones es un vehículo matrículable. La producción del vehículo empezara a partir de octubre de 2018.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 230,000'
        },
    },
    bentley: {
        continental: {
            titulo: 'Continental',
            video: '../../static/video/presentacion/bentley/continental.mp4',
            logo: '../../static/imgs/marcas/presentacion/bentley/bentley-logo.png',
            mensaje1: 'El Bentley Continental GT es un automóvil deportivo de gran turismo del fabricante inglés Bentley. Es un 2+2 plazas con motor delantero longitudinal y tracción a las cuatro ruedas. Se ofrece con carrocerías coupé y descapotable de dos puertas ("Continental GTC"), puestos a la venta en mediados de 2003 y fines de 2006 respectivamente. ',
            mensaje2: 'Algunos de sus rivales son el Aston Martin DB9, el Ferrari 612 Scaglietti, el Mercedes-Benz Clase CL, el Jaguar XK y el Rolls-Royce Wraith.',
            specs: {
                aceleracion: '2.8s 0-100',
                top: '360KM/H',
                torque: '700nM'
            },
            precio: '$ 400,000'
        },
       bentayga: {
            titulo: 'Bentayga',
            video: '../../static/video/presentacion/bentley/bentayga.mp4',
            logo: '../../static/imgs/marcas/presentacion/bentley/bentley-logo.png',
            mensaje1: 'El Bentley Bentayga es un SUV del Segmento F del fabricante inglés Bentley. Con una configuración de cinco plazas con motor delantero longitudinal, y tracción en las cuatro ruedas.',
            mensaje2: 'Se presentó en el Salón del Automóvil de Ginebra, empezando los pedidos ese mismo año, y las entregas en el 2016, el modelo se empezó a ofertar como modelo 2017. Se ofrece con un motor bi-turbo de 12 cilindros dispuestos en w, con un desplazamiento de 6 litros. Ofreciendo una potencia de 600 hp, y un torque de 664 lb.ft @1350 rpm.',
            specs: {
                aceleracion: '3.5s 0-100',
                top: '250KM/H',
                torque: '700nM'
            },
            precio: '$ 300,000'
        },
       spur: {
            titulo: 'Flying Spur',
            video: '../../static/video/presentacion/bentley/spur.mp4',
            logo: '../../static/imgs/marcas/presentacion/bentley/bentley-logo.png',
            mensaje1: 'El Bentley Continental Flying Spur es un automóvil de lujo de la marca inglesa Bentley, fue introducido en el 2005. El Continental Flying Spur es la variante de 4 puertas del Bentley Continental GT. Tiene un motor W12 de 6,0 litros y 560 CV, y cuenta con tracción a las cuatro ruedas (utiliza combustible de 98 octanos).',
            mensaje2: 'El precio del Continental Flying Spur puede llegar a ser de más de 200.000€, ya que además de tener un motor muy potente, tiene accesorios de lujo que no ofrecen otros fabricantes.',
            specs: {
                aceleracion: '5.0s 0-100',
                top: '280KM/H',
                torque: '700nM'
            },
            precio: '$ 500,000'
        },
    },
    rr: {
        ghost: {
            titulo: 'Ghost',
            video: '../../static/video/presentacion/rr/ghost.mp4',
            logo: '../../static/imgs/marcas/presentacion/rolls-royce/rolls-royce-logo.png',
            mensaje1: 'El Rolls-Royce Ghost es un lleno-sized coche de lujo fabricado por Rolss-Royce Coches de Motor. El "Fantasma" nameplate, nombrado en honor del Fantasma de Plata, un automovilístico primero producido en 1906, estuvo anunciado en abril de 2009 en el espectáculo de Shanghái del Coche.',
            mensaje2: 'El modelo de producción era oficialmente descubierto en el 2009 Motor de Fráncfort Espectáculo. El Ghost extendió Wheelbase estuvo introducido en 2011.',
            specs: {
                aceleracion: '5.0s 0-100',
                top: '280KM/H',
                torque: '700nM'
            },
            precio: '$ 500,000'
        },
        wraith: {
            titulo: 'Wraith',
            video: '../../static/video/presentacion/rr/wraith.mp4',
            logo: '../../static/imgs/marcas/presentacion/rolls-royce/rolls-royce-logo.png',
            mensaje1: 'El Rolls-Royce Wraith fue construido por Rolls-Royce en su factoría de Derby desde 1938 hasta 1939 y suministrado a fabricantes de carrocerías independientes como chasis de funcionamiento.',
            mensaje2: 'El motor seis cilindros en línea, con válvulas superiores, 4.257 cc estaba basado en el 25/30 pero disponía de una culata de flujo transversal. La caja de cambios de cuatro-velocidades disponía de sincronizadores para la segunda, tercera y cuarta y conservaba el tradicional cambio en la mano derecha.',
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
            mensaje1: 'El Rolls-Royce Cullinan es el primer SUV de Rolls-Royce; en el podemos ver multiples guiños a modelos clásicos del fabricante anglosajón. Su nombre no es casual, aunque se aleja de los habituales significados espectrales.',
            mensaje2: 'Rolls-Royce quiere mantenerse en la cima de los vehículos SUV de lujo y para ello ha creado el Rolls-Royce Cullinan, un vehículo SUV de lujo que representa la cima de este tipo de vehículos.',
            specs: {
                aceleracion: '4.0s 0-100',
                top: '280/H',
                torque: '700nM'
            },
            precio: '$ 470,000'
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