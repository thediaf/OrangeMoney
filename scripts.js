/*

Diafra Cheikhou Soumare 
     Mama Diouf

 */


var som;
var u, j;

/*clients est un array contenant la liste des clients chacun ayant son nom, 
    son numero de telephone, son code, un solde et un compteur de credit */
var clients=[]; 
    clients[0] = {
        nom : "Diafra Soumare",
        numTel : "778561710",
        code : "1234",
        solde : 300000,
        credit : 3000 
    };
    clients[1] = {
        nom : "Mamadou Sall",
        numTel : "784501920",
        code : "0000",
        solde : 100000,
        credit : 1000 
    };
    clients[2] = {
        nom : "Bechir Ba",
        numTel : "776927700",
        code : "4321",
        solde : 50000,
        credit : 400 
    };
    clients[3] = {
        nom : "Kevin Toovi",
        numTel : "774001710",
        code : "2341",
        solde : 10000,
        credit : 500 
    };
    clients[4] = {
        nom : "Mama Diouf",
        numTel : "774619226",
        code : "1212",
        solde : 9000,
        credit : 1000 
    };
    clients[5] = {
        nom : "Kenda Sall",
        numTel : "782134567",
        code : "9876",
        solde : 10000,
        credit : 100 
    };
    clients[6] = {
        nom : "Falilou Mbacke",
        numTel : "784567234",
        code : "5678",
        solde : 10000,
        credit : 10 
    };
    clients[7] = {
        nom : "Alioune Sene",
        numTel : "782134500",
        code : "9800",
        solde : 10000,
        credit : 1000 
    };
    clients[8] = {
        nom : "Djena Gueye",
        numTel : "782737392",
        code : "4576",
        solde : 1000,
        credit : 5000 
    };
    clients[9] = {
        nom : "Birahim Mehdi",
        numTel : "778563492",
        code : "1993",
        solde : 40000,
        credit : 3000 
    };

var taille = clients.length;


/* fonction permettant de demander au visiteur son numero de telephone 
    et de verifier s'il a un compte ou pas */
function verifUser()
{
    var num = window.prompt("Veillez composer votre numero de telephone");
    for (i = 0; i  < taille; i++) {
        if (num == clients[i].numTel){
            u = i;
            return true;
        }    
    }
}


/*Cette fonction sert à demander à l'utilisateur de donner le code de 
    son compte et de le verifier pourqu'il puisse y acceder */ 
function verifCode(message)  

{
    var vcode=window.prompt(message);  
        return (clients[u].code == vcode);
}


/* Celle-ci sert à vérifier si le montant demandé n'est pas superieur 
        au solde du compte */
function verifMont() 
{
    som=parseInt(window.prompt("Donnez le montant  : "));
    for (i = 0; i  < taille; i++){
        if (clients[u].solde >= som){
            clients[u].solde -= som;
            return true;
        }
        
        else{
            return false;
        }
    }
}


function verifCredit()
{
    crd = parseInt(window.prompt("Combien voulez-vous envoyer  : "));
    for (i = 0; i  < taille; i++){
       if (clients[u].credit >= crd){
         clients[u].credit -= crd;
         return true;
        }    
        else{
         return false;
        }
    }
}


/*Celle-ci demande à l'utilisateur s'il veut continuer ou pas quand il saisi un code incorrect
    ou quand le solde est inferieur au montant demandé  */
function suite(msg)
{
    var st=window.confirm(msg+"\n Voulez-vous retourner au menu principal");
    if (st == true){
        menu();
    }
    else{
        alert("Merci passez une excellente journée");
    }
}


//fonction permettant de demander au client de confirmer l'operation
function confirmation(msg)
{
    var conf = window.confirm(msg);
    return (conf == true);
}


// Fonction permettant aux clients de recharger leur credit  
function achatCredit()
{
    if (verifCode("Veuillez entrer votre code secret")){
        if (verifMont()){
            if (confirmation("Veuillez confirmer cet achat en cliquant sur 'OUI' "))
            {
                clients[u].credit += som;
                suite("Vous avez rechargé votre credit telephonique et vous avez "+clients[u].credit
                    +" F de credit \n");
            }
            else {
                suite("");
            }
        }
        else {
            suite("Vous n'avez pas ce montant dans votre compte");
        }
    }
    else{
        suite("Le code saisi est incorrect \n")
    }
}


// Fonction permettant au client de verifier le solde de son compte
function solde()
{
    if (verifCode("Pour recevoir le solde de votre solde, veuillez entrer votre code secret")){
        suite("Le solde de votre est "+clients[u].solde+" F\n");
    }
    else{
        suite("Le code saisi est incorrect\n");
    }
}


// Fonction permettant de payer la facture du client 
function facture()
{
    if (verifCode("Pour payer votre facture, veuillez entrer votre code secret")){
        if (verifMont()){
            if (confirmation("Veuillez confirmer"))
            { 
                suite("Votre facture a été paiée votre solde est "+clients[u].solde+" F\n");
            }
            else
            {
                suite("");
            }
        }
        else{
            suite("Vous n'avez pas ce montant dans votre compte\n");
        }
    }
    else{
        suite("Le code saisi est incorrect\n");
    }
} 


function verifDestinateur()
{
    var nm=window.prompt("Entrez le numero de la personne qui doit recevoir l'argent : ");
        for (j = 0; j < taille; j++)
        {
            if (nm == clients[j].numTel){
                return verifDestinateur;   
            }
        }
        return false;
}


// Fonction permettant au client d'effectuer des transferts d'argent 
function transfertArgent()
{   
    if (verifCode(" Veuillez entrer votre code secret pour pouvoir faire le transfert : "))
    {    
        if (verifDestinateur())
        {
            if (verifMont())
            {   
                if (confirmation("Voulez-vous transfert "+som+" à "+clients[j].nom))
                {
                    clients[j].solde += som;
                    suite("Vous avez transferé"+som+" F à " +clients[j].nom +" et il reste "
                        +clients[u].solde+" F"+ " dans votre compte\n");
                }
                else{
                    suite("");
                }
            }
            else
            {
                suite("Vous n'avez pas ce montant dans votre compte\n");
            }

        }
        else
            {                                                                                                                       
                suite("Le propriété de ce numrero n'a pas de compte \n");
            }
    }
    else
    {
        suite("Le code saisi est incorrect\n");
    }
}




function transfertCredit()
{
    if (verifCode(" Veuillez entrer votre code secret pour pouvoir faire le transfert : "))
    {    
        if (verifDestinateur())
        { 
            if (verifCredit())
            {   
                if (confirmation("Voulez-vous transfert "+crd+" à "+clients[j].nom))
                {
                    clients[j].credit += crd;
                    suite("Vous avez transferé"+crd+" F à " +clients[j].nom +" et il reste "+clients[u].credit
                        +" F"+ " dans votre compte\n");
                }
                else{
                    suite("");
                }
            }
            else
            {
                suite("Vous n'avez pas ce montant dans votre compte\n");
            }

        }
        else
            {                                                                                                                       
                suite("Le propriété de ce numrero n'a pas de compte \n");
            }
    }
    else
    {
        suite("Le code saisi est incorrect\n");
    }
}


// Fonction permettant de changer le code secret du client
function changer()
{
    if (verifCode("veuillez entrer le code secret actuel")){
        var reponse = window.confirm("Voulez-vous changer votre code ");
        if (reponse==true)
        {
            var nvcode = window.prompt("Veuillez saisir votre nouveau code ");
            var rnvcode = window.prompt("Ressaisissez le code pour confirmer l'operation ");
            if (nvcode == rnvcode)
            {
                if (confirmation("Veuillez confirmer de vouloir changer de code secret"))
                {
                    clients[u].code = nvcode;
                    suite("Votre code a été changé \n");
                }
                else{
                    suite("");
                }
            }
            else{
                suite("Operation non effectuée veuillez reprendre");
            }
        } 
    }
}


// Celle-ci est la fonction contenante les services et leurs instructions
function orangeMoney(opt)
{
    switch (opt) {                
        
        case "1" :
            solde();
        break;
        
        case "2" :
            facture();
        break;     
        
        case "3" :
            transfertArgent();
        break;

        case "4":
            achatCredit();
        break;

        case "5":
             transfertCredit();
        break;
        
        case "6":
            changer();
        break;
        
        default: 
            alert(' Choisissez une option existante');
        break;  
    }
}


// Celle-ci est la fonction du menu principal
function menu()
{
        var choix=window.prompt("=========ORANGE MONEY==========\n"
                            +"\n"
                            +"BONJOUR "+ clients[u].nom +"\n"
                            +"\n"
                            +"1-Solde de mes comptes\n"
                            +"2-Paiement de facture\n"
                            +"3-Transfert d'argent\n"
                            +"4-Achat de credit \n"
                            +"5-Transfert credit \n"
                            +"6-Options\n"
                            +"Choisissez l'operation que vous voudriez effectuer : \n");
        orangeMoney(choix);
}
 

function service()
{
    if (verifUser()){
        menu();
    }
    else{
        suite("Ce numero n'a pas de compte");
    }
}
