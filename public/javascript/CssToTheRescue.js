let cssNaam = document.getElementById('css-naam');
let cssDocenten = document.getElementById('css-docenten');
let cssStartDatum = document.getElementById('css-begindatum');
let cssEindDatum = document.getElementById('css-einddatum');
let cssCijfer = document.getElementById('css-cijfer');
let cssMoeilijkheidsgraad = document.getElementById('css-moeilijkheidsgraad');
let cssUitleg = document.getElementById('css-uitleg');
let cssReactie = document.getElementById('css-reactie');

if(sessionStorage.getItem('css-naam')) {
    cssNaam.value = sessionStorage.getItem('css-naam');
}

cssNaam.addEventListener("change", function() {
    sessionStorage.setItem('css-naam', cssNaam.value);
})


if(sessionStorage.getItem('css-docenten')) {
    cssDocenten.value = sessionStorage.getItem('css-docenten');
}

cssDocenten.addEventListener("change", function() {
    sessionStorage.setItem('css-docenten', cssDocenten.value);
})


if(sessionStorage.getItem('css-startdatum')) {
    cssStartDatum.value = sessionStorage.getItem('css-startdatum');
}

cssStartDatum.addEventListener("change", function() {
    sessionStorage.setItem('css-startdatum', cssStartDatum.value);
})


if(sessionStorage.getItem('css-einddatum')) {
    cssEindDatum.value = sessionStorage.getItem('css-einddatum');
}

cssEindDatum.addEventListener("change", function() {
    sessionStorage.setItem('css-einddatum', cssEindDatum.value);
})


if(sessionStorage.getItem('css-cijfer')) {
    cssCijfer.value = sessionStorage.getItem('css-cijfer');
}

cssCijfer.addEventListener("change", function() {
    sessionStorage.setItem('css-cijfer', cssCijfer.value);
})


if(sessionStorage.getItem('css-moeilijkheidsgraad')) {
    cssMoeilijkheidsgraad.value = sessionStorage.getItem('css-moeilijkheidsgraad');
}

cssMoeilijkheidsgraad.addEventListener("change", function() {
    sessionStorage.setItem('css-moeilijkheidsgraad', cssMoeilijkheidsgraad.value);
})

if(sessionStorage.getItem('css-uitleg')) {
    cssUitleg.value = sessionStorage.getItem('css-uitleg');
}

cssUitleg.addEventListener("change", function() {
    sessionStorage.setItem('css-uitleg', cssUitleg.value);
})

if(sessionStorage.getItem('css-reactie')){
    cssReactie.value = sessionStorage.getItem('css-reactie');
}

cssReactie.addEventListener("change", function(){
    sessionStorage.setItem('css-reactie', cssReactie.value);
})