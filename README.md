# READ.ME Browser Technologies Emile Kost

Bij het vak Browser Technologies heb ik de enquete case gekozen. 

### Link naar live demo!

### Wireframe 
![Wireframe](https://user-images.githubusercontent.com/70690100/162283119-af53366e-e7f4-4807-8776-a708f1b3a21a.png)
### Core functionaliteit
De core functionaliteit van mijn website is het kunnen invullen van de enquete en hierbij alle data kunnen versturen naar de server zodat deze data gebruikt zou kunnen worden.

### Functional layer
<img width="548" alt="Schermafbeelding 2022-04-07 om 21 45 17" src="https://user-images.githubusercontent.com/70690100/162283991-ff6ca2fd-bac5-4b0c-92ae-3a7ec29db68b.png">
Bij de functional layer is het formulier nog geheel werkzaam. Ook ziet de gebruiker nog steeds dat alle velden moeten worden ingevuld. Dit komt omdat require in de meeste browsers is ondersteund. De submit button is wel meteen al zichtbaar, de gebruiker kan echter niet verder als als die de formulieren nog niet volledig heeft ingevuld. Ongeacht dat Javascript en CSS uitstaan wordt de data alsnog naar de server gestuurd en in een JSON bestand opgeslagen. Dit is gedaan doormiddel van Node js en Express.

### Usable layer
<img width="211" alt="Schermafbeelding 2022-04-07 om 21 51 00" src="https://user-images.githubusercontent.com/70690100/162284885-9ec6e07b-2191-4bc2-bb97-1647affbf35f.png">
Bij de usable layer is er wel beschikking tot de CSS. De CSS die gebruikt is wordt vrijwel in elke browser ondersteund. De gebruiker krijgt door middel van kleur en tekst feedback over het invullen van het formulier. Ook krijgt de gebruiker pas de submit button te zien wanneer het formulier volledig is ingevuld. De stijl van de formulieren is ook leesbaarder en groter gemaakt, zodat deze ook toegankelijk zijn op een kleiner device zoals een telefoon.

### Pleasurable layer
<img width="211" alt="Schermafbeelding 2022-04-07 om 21 54 40" src="https://user-images.githubusercontent.com/70690100/162285465-0e8c54ce-22dd-4345-847e-21fa41c5de93.png">
<img width="629" alt="Schermafbeelding 2022-04-07 om 21 55 10" src="https://user-images.githubusercontent.com/70690100/162285475-82e1fedd-6013-48ae-b6ff-095ef9f49d66.png">
Bij de pleasurable laag is er op de website zelf niet heel veel verandert. De gebruiker krijgt nog steeds feedback door alleen CSS. Nu javascript beschikbaar is zal de ingevulde data in de formulieren bij refreshen of bij het afsluiten blijven staan. Dit komt doordat er in de javascript data naar de sessionstorage wordt gestuurd zodat data niet verloren gaat bij het refreshen of afsluiten van de pagina. Dit is een grote verbetering in de interactie van de website omdat de gebruiker zo gemakkelijk de enquete in delen kan bekijken en zich geen zorgen hoeft te maken over het verliezen van data.

### Features, progressive enhancements

#### @support
Om de layout van de website aangenamer te maken wilde ik gebruik maken van flexbox. Om te kijken of dit ondersteund wordt door browsers heb ik in de css gebruik gemaakt van. @support
@supports(display: flex) 

#### Fallback fonts
<img width="582" alt="Schermafbeelding 2022-04-07 om 22 07 18" src="https://user-images.githubusercontent.com/70690100/162287324-d6bf7565-0d9e-4433-83a8-a4c76ac8d54f.png">
Mocht het custom font niet kunnen worden geladen of ondersteund, heb ik fallback fonts toegevoegd zodat de website altijd goed leesbaar is.

### Browsers
* Android telefoon Chrome browser
* Chrome browser
* Firefox browser
* Safari browser

### Testverslag
<img width="1254" alt="Schermafbeelding 2022-04-07 om 22 10 21" src="https://user-images.githubusercontent.com/70690100/162287774-7fd3179b-c19b-4ceb-8b3c-a02e2fe89a24.png">
#### Require
De require tag in de HTML wordt in alle geteste browsers ondersteund, zoals hier in FireFox.

#### @font-face
<img width="1212" alt="Schermafbeelding 2022-04-07 om 22 11 50" src="https://user-images.githubusercontent.com/70690100/162288012-db0d4978-8afb-4601-8dab-9c7ca5abef5a.png">
Om custom fonts op te halen heb ik @font-face gebruikt. Ook dit wordt door alle browsers ondersteund, zoals hier in Safari.

#### Display: flex
<img width="435" alt="Schermafbeelding 2022-04-07 om 22 14 13" src="https://user-images.githubusercontent.com/70690100/162288340-00d1234b-649b-4c30-8deb-de7eda867184.png">
Display flex wordt ook ondersteund door alle browsers.

#### Session storage
<img width="1275" alt="Schermafbeelding 2022-04-07 om 22 15 10" src="https://user-images.githubusercontent.com/70690100/162288532-32fa105b-7bf1-455e-8303-a4106694e0b2.png">
Om de gebruikes data veilig te stellen heb ik gebruik gemaakt van session storage. Dit zodat de data blijft staan mocht de gebruiker perongeluk refreshen. Deze functionaliteit wordt ook door alle browsers ondersteund.

#### Conclusie
Al de belangrijkste functionaliteiten die ik heb toegevoegd worden ondersteund op de geteste browsers. Dit zorgt voor een fijne interactie tussen de enquete en gebruiker.

### Wishlist
Ik ben om eerlijk te zijn iets te lang vastgelopen om de backend en had graag nog veel in de clientside met betrekking tot progressive enhancement willen toevoegen. Hier heb ik een wishlist dat ik nog had willen toevoegen.
* Progressbar
* Javascript form validation
* Animations
