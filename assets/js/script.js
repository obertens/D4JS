const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        imagen: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA',
        habitaciones: 4,
        baños: 4,
        precio: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        imagen: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con vistas impresionantes.',
        ubicacion: '789 Mountain Road, Summit Peaks, CA',
        habitaciones: 2,
        baños: 1,
        precio: 1200,
        smoke: true,
        pets: true,
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        imagen: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse ofrece una terraza con vistas espectaculares.',
        ubicacion: '567 Skyline Avenue, Skyview City, CA',
        habitaciones: 3,
        baños: 3,
        precio: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa moderna con jardín amplio',
        imagen: 'https://plus.unsplash.com/premium_photo-1663089261911-65d0c8f4f911?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Hermosa casa moderna con un jardín amplio y áreas verdes.',
        ubicacion: '123 Greenfield Drive, Suburban Park, TX',
        habitaciones: 5,
        baños: 3,
        precio: 6500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Cabaña rústica en el bosque',
        imagen: 'https://images.unsplash.com/photo-1504643039591-52948e3ddb47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Cabaña acogedora ubicada en medio del bosque, ideal para escapadas tranquilas.',
        ubicacion: '789 Woodland Trail, Pine Forest, OR',
        habitaciones: 3,
        baños: 2,
        precio: 3200,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Dúplex en el centro de la ciudad',
        imagen: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Dúplex moderno en pleno centro con acceso rápido a servicios.',
        ubicacion: '567 Cityline Avenue, Downtown, NY',
        habitaciones: 3,
        baños: 2,
        precio: 4800,
        smoke: false,
        pets: true
    }
];

const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento está ubicado en el corazón de la ciudad.',
        ubicacion: '123 Main Street, Anytown, CA',
        habitaciones: 2,
        baños: 2,
        precio: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        imagen: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA',
        habitaciones: 3,
        baños: 3,
        precio: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        imagen: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio está en una zona tranquila.',
        ubicacion: '123 Main Street, Anytown, CA',
        habitaciones: 2,
        baños: 2,
        precio: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Loft moderno en el centro',
        imagen: 'https://images.unsplash.com/photo-1504624720567-64a41aa25d70?q=80&w=4928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Loft minimalista con vistas a la ciudad, ubicado cerca de todos los servicios.',
        ubicacion: '234 City Loft Street, Downtown, CA',
        habitaciones: 1,
        baños: 1,
        precio: 1800,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa campestre con huerto',
        imagen: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Casa rural ideal para familias que buscan tranquilidad y espacios verdes.',
        ubicacion: '789 Countryside Road, Farmville, TX',
        habitaciones: 4,
        baños: 3,
        precio: 2700,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento de estilo vintage en la playa',
        imagen: 'https://plus.unsplash.com/premium_photo-1693493439424-eb93e53b490a?q=80&w=1463&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Acogedor apartamento con decoración vintage, ubicado frente al mar.',
        ubicacion: '345 Seaside Avenue, Beach Town, FL',
        habitaciones: 2,
        baños: 2,
        precio: 2200,
        smoke: true,
        pets: true
    }
];

function renderizarPropiedades(tipo, limite = null) {
    let contenedor = document.getElementById(`propiedades-${tipo}`);
    let propiedades = tipo === 'venta' ? propiedadesVenta : propiedadesAlquiler;

    if (limite) {
        propiedades = propiedades.slice(0, limite);
    }

    propiedades.forEach(prop => {
        let card = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.imagen}" class="card-img-top" alt="${prop.nombre}">
          <div class="card-body">
            <h5 class="card-title">${prop.nombre}</h5>
            <p class="card-text">${prop.descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
            <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones | <i class="fas fa-bath"></i> ${prop.baños} Baños</p>
            <p class="card-price"><i class="fas fa-dollar-sign"></i> ${prop.precio}</p>
            <p class="${prop.smoke ? 'text-success' : 'text-danger'}">
              <i class="fas fa-smoking${prop.smoke ? '' : '-ban'}"></i> ${prop.smoke ? 'Permitido fumar' : 'No se permite fumar'}
            </p>
            <p class="${prop.pets ? 'text-success' : 'text-danger'}">
              <i class="fas fa-paw"></i> ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
            </p>
          </div>
        </div>
      </div>`;
        contenedor.innerHTML += card;
    });
}
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('propiedades-venta')) {
        if (document.body.classList.contains('index-page')) {
            renderizarPropiedades('venta', 3); 
        } else {
            renderizarPropiedades('venta'); 
        }
    }

    if (document.getElementById('propiedades-alquiler')) {
        if (document.body.classList.contains('index-page')) {
            renderizarPropiedades('alquiler', 3); 
        } else {
            renderizarPropiedades('alquiler');
        }
    }
});
