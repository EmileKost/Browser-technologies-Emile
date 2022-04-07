console.log('hello world');


//Session storage Persoonsgegevens
var voornaam = document.getElementById("voornaam");
var studentnummer = document.getElementById("studentnummer");


if(sessionStorage.getItem('naam-autosave')) {
    voornaam.value = sessionStorage.getItem('naam-autosave');
}

if(sessionStorage.getItem('studentnummer-autosave')) {
    studentnummer.value = sessionStorage.getItem('studentnummer-autosave');
}

voornaam.addEventListener("change", function() {
    sessionStorage.setItem('naam-autosave', voornaam.value);
})

studentnummer.addEventListener("change", function() {
    sessionStorage.setItem('studentnummer-autosave', studentnummer.value);
})


