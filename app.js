
   
import bodyParser from "body-parser";
import express from 'express';
import fs from 'fs'

const app = express();
const port = 5000;

//Template engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

//Index pagina, persoonsgegevens
app.get('/', (req, res) => {
  		res.render('index'
      )
	});

//Pagina's voor vakken
app.get('/enquete', (req, res) => {
    res.render('enquete')
});

app.get('/enquete-css', (req, res) => {
    res.render('enquete-css')
})

app.get('/enquete-pwa', (req, res) => {
  res.render('enquete-pwa')
})

app.get('/enquete-browser', (req, res) => {
  res.render('enquete-browser')
})

app.get('/resultaten', (req, res) => {
  res.render('resultaten')
})




//Ophalen persoonsgegevens
app.post('/enquete', (req, res) => {
  let persoonsGegevens = JSON.stringify(req.body)
  fs.writeFile('gegevensPersoon.json', persoonsGegevens, 'utf8', cb => {
    console.log('werk dan!')
  });
  res.render('enquete')
})

//Ophalen gegevens voor vakken

//wafs
app.post('/enquete-css', (req, res) => {
  let WAFS = JSON.stringify(req.body)
  fs.writeFile('gegevensWAFS.json', WAFS, 'utf8', cb => {
    console.log('werk dan!')
  });
  res.render('enquete-css')
})

//CSS to the Rescue
app.post('/enquete-pwa', (req, res) => {
  let CSS = JSON.stringify(req.body)
  fs.writeFile('gegevensCSS.json', CSS, 'utf8', cb => {
    console.log('werk dan!')
  });
  res.render('enquete-pwa')
})

//PWA
app.post('/enquete-browser', (req, res) => {
  let PWA = JSON.stringify(req.body)
  fs.writeFile('gegevensPWA.json', PWA, 'utf8', cb => {
    console.log('werk dan!')
  });
  res.render('enquete-browser')
})

//Browser Technologies
app.post('/resultaten', (req, res) => {
  let BT = JSON.stringify(req.body)
  fs.writeFile('gegevensBT.json', BT, 'utf8', cb => {
    console.log('werk dan!')
  });
  res.render('resultaten')
})




//Server

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
