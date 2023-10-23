//creo l'azione per il bottone gioca
const giocaBtn = document.getElementById("gioca");
giocaBtn.addEventListener("click", function() {

    const userElem = document.querySelector(".user");
    const computerElem = document.querySelector(".computer");
    let userClass = "";
    let computerClass = "" ;
    //creo le constanti per poter aggiungere le classi
    const win = "win";
    const lose = "lose";
    const tie = "tie";

    //creo la variabile per il messaggio del risultato
    let message = "";
    //Creo il dado per l'user
    const dadoUser = Math.floor(Math.random() * 6) + 1;
    //Creo il dado per il computer
    const dadoComputer = Math.floor(Math.random() * 6) + 1;
    //verifico chi dei due ha il punteggio maggiore
    //se vince l'user lui diventa verde e il computer rosso e compare il messaggio vittoria
    if(dadoUser > dadoComputer){
        //scrivo il messaggio per la vittoria dell'utente 
        message = `
            <h2>L'UTENTE HA VINTO E IL COMPUTER HA PERSO</h2>
        ` 
        userClass += `<div class=" ${win}">
        <p>Questo é il valore del tuo dado : ${dadoUser}</p></div>`
        computerClass += `<div class=" ${lose}">
        <p>Questo é il valore del dado del computer : ${dadoComputer}</p></div>`
    }else if(dadoUser < dadoComputer){
        //scrivo il messaggio per la vittoria del computer
        message = `
            <h2>L'UTENTE HA PERSO E IL COMPUTER HA VINTO</h2>
        ` 
        userClass += `<div class=" ${lose}">
        <p>Questo é il valore del tuo dado : ${dadoUser}</p></div>`
        computerClass += `<div class=" ${win}">
        <p>Questo é il valore del dado del computer : ${dadoComputer}</p></div>`
    }else if(dadoUser === dadoComputer){
        //scrivo il messaggio per il pareggio
        message = `
            <h2>L'UTENTE E IL COMPUTER HANNO PAREGGIATO</h2>
        ` 
        userClass += `<div class=" ${tie}">
        <p>Questo é il valore del tuo dado : ${dadoUser}</p></div>`
        computerClass += `<div class=" ${tie}">
        <p>Questo é il valore del dado del computer : ${dadoComputer}</p></div>`
    }

    //scrivo il valore finale nell'html
    userElem.innerHTML = userClass;
    computerElem.innerHTML = computerClass;
    //restituisco il messaggio
    document.getElementById("result").innerHTML = message;
})




//creo l'azione per il bottone ritenta
const ritentaBtn = document.getElementById("ritenta");
ritentaBtn.addEventListener("click", function() {
    //svuoto tutti i risultati
    const resultEmpty = "";
    document.getElementById("user").innerHTML = resultEmpty; 
    document.getElementById("computer").innerHTML = resultEmpty; 
    document.getElementById("result").innerHTML = resultEmpty; 
})