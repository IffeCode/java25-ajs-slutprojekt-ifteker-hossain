Scrumboard Application

Denna scrumboard applikationen är uppdelad i två delar - en frontend del och en backend del.


För att starta applikationen lokalt på din dator behöver du starta två separata teminaler, där den första startar servern med npm run server och den andra startar client med npm run client. När båda två är igång så kan du nyttja applikationen i din browser genom att söka på http://localhost:5173/ 




Frontend - Frontend delen består av en client mapp där vi har vår models och modules mapp. I models mappen har vi en todo.ts som är lik models från vår backend då den ska anropa typerna från vårt API. I modules mappen har vi vår main.ts, api.ts render.ts samt animation.ts och style.css.

Backend - Backend delen består av en server mapp där vi har vår databas, models och routes. I databasen har vi våra SQL relaterade kod och statements. I models har vi våra variabler/types och toString. I routes har vi vår routes som avgör vilken endpoint som ska anropas beorende på request och status som anropas.