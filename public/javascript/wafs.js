//Session storage WAFS
let wafsNaam = document.getElementById('wafs-naam');
let wafsDocenten = document.getElementById('wafs-docenten');
let wafsStartDatum = document.getElementById('wafs-startdatum');
let wafsEindDatum = document.getElementById('wafs-einddatum');
let wafsCijfer = document.getElementById('wafs-cijfer');
let wafsMoeilijkheidsgraad = document.getElementById('wafs-moeilijkheidsgraad');
let wafsUitleg = document.getElementById('wafs-uitleg');
let wafsReactie = document.getElementById('wafs-reactie');

if(sessionStorage.getItem('wafs-naam')) {
    wafsNaam.value = sessionStorage.getItem('wafs-naam');
}

wafsNaam.addEventListener("change", function() {
    sessionStorage.setItem('wafs-naam', wafsNaam.value);
})


if(sessionStorage.getItem('wafs-docenten')) {
    wafsDocenten.value = sessionStorage.getItem('wafs-docenten');
}

wafsDocenten.addEventListener("change", function() {
    sessionStorage.setItem('wafs-docenten', wafsDocenten.value);
})


if(sessionStorage.getItem('wafs-startdatum')) {
    wafsStartDatum.value = sessionStorage.getItem('wafs-startdatum');
}

wafsStartDatum.addEventListener("change", function() {
    sessionStorage.setItem('wafs-startdatum', wafsStartDatum.value);
})


if(sessionStorage.getItem('wafs-einddatum')) {
    wafsEindDatum.value = sessionStorage.getItem('wafs-einddatum');
}

wafsEindDatum.addEventListener("change", function() {
    sessionStorage.setItem('wafs-einddatum', wafsEindDatum.value);
})


if(sessionStorage.getItem('wafs-cijfer')) {
    wafsCijfer.value = sessionStorage.getItem('wafs-cijfer');
}

wafsCijfer.addEventListener("change", function() {
    sessionStorage.setItem('wafs-cijfer', wafsCijfer.value);
})


if(sessionStorage.getItem('wafs-moeilijkheidsgraad')) {
    wafsMoeilijkheidsgraad.value = sessionStorage.getItem('wafs-moeilijkheidsgraad');
}

wafsMoeilijkheidsgraad.addEventListener("change", function() {
    sessionStorage.setItem('wafs-moeilijkheidsgraad', wafsMoeilijkheidsgraad.value);
})

if(sessionStorage.getItem('wafs-uitleg')) {
    wafsUitleg.value = sessionStorage.getItem('wafs-uitleg');
}

wafsUitleg.addEventListener("change", function() {
    sessionStorage.setItem('wafs-uitleg', wafsUitleg.value);
})

if(sessionStorage.getItem('wafs-reactie')) {
    wafsReactie.value = sessionStorage.getItem('wafs-reactie');
}

wafsReactie.addEventListener('change', function() {
    sessionStorage.setItem('wafs-reactie', wafsReactie.value);
})
