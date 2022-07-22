const saludo = document.querySelector('.header__saludo,.borde')

setTimeout(() => {
    saludo.classList.remove('borde');
}, 4000);


//seccion de trabajos
const desplegableApps = document.querySelector('#desplegableApps');
const headingApps = desplegableApps.firstElementChild;
const arrowImgApps = desplegableApps.firstElementChild.firstElementChild;
const desplegableStatics = document.querySelector('#desplegableStatics');
const headingStatics = desplegableStatics.firstElementChild;
const arrowImgStatics = desplegableStatics.firstElementChild.firstElementChild;
let ocultarApps = true;
let ocultarStatics = true;


headingApps.addEventListener('click' , () => {
    if (ocultarApps) {
        desplegableApps.classList.remove('ocultar');
        arrowImgApps.src = '/build/img/boxicons/bxs-down-arrow.svg';
        ocultarApps = !ocultarApps;
    } else {
        desplegableApps.classList.add('ocultar');
        arrowImgApps.src = '/build/img/boxicons/bxs-right-arrow.svg';
        ocultarApps = !ocultarApps;
    }
});

headingStatics.addEventListener('click' , () => {
    if (ocultarStatics) {
        desplegableStatics.classList.remove('ocultar');
        arrowImgStatics.src = '/build/img/boxicons/bxs-down-arrow.svg';
        ocultarStatics = !ocultarStatics;
    } else {
        desplegableStatics.classList.add('ocultar');
        arrowImgStatics.src = '/build/img/boxicons/bxs-right-arrow.svg';
        ocultarStatics = !ocultarStatics;
    }
});
