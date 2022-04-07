
//Alle inputs die je ophaalt, dit moet je per vak doen in verschillende javascript bestanden
let btNaam = document.getElementById('bt-naam');
let btDocenten = document.getElementById('bt-docenten');
let btStartDatum = document.getElementById('bt-begindatum');
let btEindDatum = document.getElementById('bt-einddatum');
let btCijfer = document.getElementById('bt-cijfer');
let btMoeilijkheidsgraad = document.getElementById('bt-moeilijkheidsgraad');
let btUitleg = document.getElementById('bt-uitleg');
let btReactie = document.getElementById('bt-reactie');

//Deze code herhaal je voor elk variable
if(sessionStorage.getItem('bt-naam')) {
    btNaam.value = sessionStorage.getItem('bt-naam');
}

btNaam.addEventListener("change", function() {
    sessionStorage.setItem('bt-naam', btNaam.value);
})
//hier eindigt het eerste variable

if(sessionStorage.getItem('bt-docenten')) {
    btDocenten.value = sessionStorage.getItem('bt-docenten');
}

btDocenten.addEventListener("change", function() {
    sessionStorage.setItem('bt-docenten', btDocenten.value);
})


if(sessionStorage.getItem('bt-startdatum')) {
    btStartDatum.value = sessionStorage.getItem('bt-startdatum');
}

btStartDatum.addEventListener("change", function() {
    sessionStorage.setItem('bt-startdatum', btStartDatum.value);
})


if(sessionStorage.getItem('bt-einddatum')) {
    btEindDatum.value = sessionStorage.getItem('bt-einddatum');
}

btEindDatum.addEventListener("change", function() {
    sessionStorage.setItem('bt-einddatum', btEindDatum.value);
})


if(sessionStorage.getItem('bt-cijfer')) {
    btCijfer.value = sessionStorage.getItem('bt-cijfer');
}

btCijfer.addEventListener("change", function() {
    sessionStorage.setItem('bt-cijfer', btCijfer.value);
})


if(sessionStorage.getItem('bt-moeilijkheidsgraad')) {
    btMoeilijkheidsgraad.value = sessionStorage.getItem('bt-moeilijkheidsgraad');
}

btMoeilijkheidsgraad.addEventListener("change", function() {
    sessionStorage.setItem('bt-moeilijkheidsgraad', btMoeilijkheidsgraad.value);
})

if(sessionStorage.getItem('bt-uitleg')) {
    btUitleg.value = sessionStorage.getItem('bt-uitleg');
}

btUitleg.addEventListener("change", function() {
    sessionStorage.setItem('bt-uitleg', btUitleg.value);
})

if(sessionStorage.getItem('bt-reactie')) {
    btReactie.value = sessionStorage.getItem('bt-reactie');
}

btReactie.addEventListener("change", function() {
    sessionStorage.setItem('bt-reactie', btReactie.value);
})