//Creo l'array con le email valide
const emails = ["pippo.paperino@gmail.com","sium.sdrogo@gmail.com","grande.sommo@gmail.com","jack.sparrow@gmail.com"]
//creo la variabile per il messaggio da far apparire
let message = "";
//creo l'azione quando verrá premuto il tasto verifica
const verificaBtn = document.getElementById("verifica");
verificaBtn.addEventListener("click", function() {

    //contenitore dell'input email
    const emailUserCont = document.getElementById("insEmail");
    //email inserita dall'utente
    const emailUser = emailUserCont.value;
    //flag per il ciclo
    let found = false;
    //ciclo per verificare se l'emial sia valida o no
    for (let i = 0; i < emails.length && found != true; i++) {
        const currEmail = emails[i];
        if(emailUser === currEmail){
            found = true;
        }   
        
        console.log(currEmail, emailUser , found)
    }
    //se é valida restituisco il messaggio che sia valida
    if(found){
        message = `
            <p>L'email ${emailUser} é stata verifica e puó accedere</p>
            `
            console.log("L'email é stata verifica e puó accedere")
    }
    //altrimenti restituisco che non é valida
    else{
        message = `
            <p>L'email ${emailUser} é stata verifica e non puó accedere</p>
            `
            console.log("L'email é stata verifica e non puó accedere");
    }
    //restituisco il messaggio
    document.getElementById("message").innerHTML = message;
})

//bottone annulla per poter togliere l'email inserita e riscriverla da capo
const annullaBtn = document.getElementById("annulla");
annullaBtn.addEventListener("click", function(){

    //svuoto l'email inserita
    const emailUser = document.getElementById("insEmail");
    emailUser.value = "";
    //svuoto il messaggio 
    const message = "";
    document.getElementById("message").innerHTML = message; 
})
