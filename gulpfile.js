const { src, dest, watch, series, parallel } = require('gulp');
// css y sass
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
// imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css( done ){

    src('src/scss/app.scss')
        .pipe( sourcemaps.init() )
        .pipe( sass() )
        .pipe( postcss([autoprefixer(), cssnano()]) )
        .pipe( sourcemaps.write('.'))
        .pipe( dest('build/css') )

    done();
}

function imagenes( ){
    return src('src/img/**/*')
        .pipe( imagemin( { optimizationLevel: 3 } ) )
        .pipe( dest('build/img'))
}

function versionWebp(){
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{jpg,png}')
        .pipe( webp(opciones) )
        .pipe( dest('build/img') )
}

function versionAvif(){
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{jpg,png}')
        .pipe( avif(opciones) )
        .pipe( dest('build/img') )
}


function dev(){
    watch('src/scss/**/*.scss', css)
    watch('src/img/**/*', imagenes);
    watch('src/img/**/*.{jpg,png}', versionWebp, versionAvif);
}

exports.imagenes = imagenes;
exports.css = css;
exports.dev = dev;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series(imagenes, versionWebp, versionAvif,  css, dev);
//series : se inicia una tarea hasta que finalice, luego la otra y asi...
//parallel : todas inician al mismo tiempo