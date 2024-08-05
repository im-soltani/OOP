//***********encapsulation************//
/*Définition : L'encapsulation est le principe de cacher les détails 
internes d'un objet et de n'exposer que ce qui est nécessaire. 
Cela se fait généralement en utilisant des méthodes publiques pour 
interagir avec les données internes, tout en gardant ces données privées.*/
//sans encaplsulation
class compteBancaire{
    constructor(nom,solde){
this.nom=nom,
this.solde=solde
    }
    deposer(montant){
        if (montant>0){
            this.solde +=montant
        }
    }
    afficherSolde(){
        console.log(`solde: ${this.solde}`)
    }
}
const compte=new compteBancaire("alice",1000)
compte.deposer(500)
compte.afficherSolde(); // Affiche : Solde: 1500
//acces direct au donner 
console.log(compte.solde)
compte.solde=-1000
compte.afficherSolde()
//avec encapsultation
class compteBancaire{
    constructor(nom,solde){
this._nom=nom,// Propriété "privée" (conventionnellement)
this._solde=solde// Propriété "privée" (conventionnellement)
    }
    deposer(montant){
        if (montant>0){
            this.solde +=montant
        }
    }
    afficherSolde(){
        console.log(`solde: ${this.solde}`)
    }
}

const compte=new compteBancaire("sana",2000)
compte.deposer(1000)
console.log(compte.afficherSolde())


//***********encapsulation************//
/*Définition : L'encapsulation est le principe de cacher les détails 
internes d'un objet et de n'exposer que ce qui est nécessaire. 
Cela se fait généralement en utilisant des méthodes publiques pour 
interagir avec les données internes, tout en gardant ces données privées.*/
//sans encaplsulation

//acces direct au donner 
/*console.log(compte.solde)
compte.solde=-1000
compte.afficherSolde()*/
//avec encapsultation
class compteBancaire{
    #nom
    #solde
    constructor(nom,solde){
this.#nom = nom,// Propriété "privée" (conventionnellement)
this.#solde = solde// Propriété "privée" (conventionnellement)
    }
    deposer(montant){
        if (montant>0){
            this.#solde +=montant
        }
    }
    afficherSolde(){
        console.log(`solde: ${this.#solde}`)
    }
}

const compte=new compteBancaire("sana",2000)
compte.deposer(1000)
compte.afficherSolde()
// Tentative d'accès direct aux propriétés privées (échoue)
console.log(compte.#solde)