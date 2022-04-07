let pwaNaam = document.getElementById('pwa-naam');
let pwaDocenten = document.getElementById('pwa-docenten');
let pwaStartDatum = document.getElementById('pwa-begindatum');
let pwaEindDatum = document.getElementById('pwa-einddatum');
let pwaCijfer = document.getElementById('pwa-cijfer');
let pwaMoeilijkheidsgraad = document.getElementById('pwa-moeilijkheidsgraad');
let pwaUitleg = document.getElementById('pwa-uitleg');
let pwaReactie = document.getElementById('pwa-reactie');

if(sessionStorage.getItem('pwa-naam')) {
    pwaNaam.value = sessionStorage.getItem('pwa-naam');
}

pwaNaam.addEventListener("change", function() {
    sessionStorage.setItem('pwa-naam', pwaNaam.value);
})


if(sessionStorage.getItem('pwa-docenten')) {
    pwaDocenten.value = sessionStorage.getItem('pwa-docenten');
}

pwaDocenten.addEventListener("change", function() {
    sessionStorage.setItem('pwa-docenten', pwaDocenten.value);
})


if(sessionStorage.getItem('pwa-startdatum')) {
    pwaStartDatum.value = sessionStorage.getItem('pwa-startdatum');
}

pwaStartDatum.addEventListener("change", function() {
    sessionStorage.setItem('pwa-startdatum', pwaStartDatum.value);
})


if(sessionStorage.getItem('pwa-einddatum')) {
    pwaEindDatum.value = sessionStorage.getItem('pwa-einddatum');
}

pwaEindDatum.addEventListener("change", function() {
    sessionStorage.setItem('pwa-einddatum', pwaEindDatum.value);
})


if(sessionStorage.getItem('pwa-cijfer')) {
    pwaCijfer.value = sessionStorage.getItem('pwa-cijfer');
}

pwaCijfer.addEventListener("change", function() {
    sessionStorage.setItem('pwa-cijfer', pwaCijfer.value);
})


if(sessionStorage.getItem('pwa-moeilijkheidsgraad')) {
    pwaMoeilijkheidsgraad.value = sessionStorage.getItem('pwa-moeilijkheidsgraad');
}

pwaMoeilijkheidsgraad.addEventListener("change", function() {
    sessionStorage.setItem('pwa-moeilijkheidsgraad', pwaMoeilijkheidsgraad.value);
})

if(sessionStorage.getItem('pwa-uitleg')) {
    pwaUitleg.value = sessionStorage.getItem('pwa-uitleg');
}

pwaUitleg.addEventListener("change", function() {
    sessionStorage.setItem('pwa-uitleg', pwaUitleg.value);
})

if(sessionStorage.getItem('pwa-reactie')) {
    pwaReactie.value = sessionStorage.getItem('pwa-reactie');
}

pwaReactie.addEventListener("change", function() {
    sessionStorage.setItem('pwa-reactie', pwaReactie.value);
})
