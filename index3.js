// //L'héritage permet à une classe (la sous-classe) de hériter des
// propriétés et des méthodes d'une autre classe (la super-classe).
//  Cela favorise la réutilisation du code et l'organisation hiérarchique
//   des classes.
class Vehicule {
    constructor(marque, model) {
        this.marque = marque;
        this.model = model;
    }

    afficherInfo() {
        console.log(`Marque: ${this.marque}, Modèle: ${this.model}`);
    }
}

class Voiture extends Vehicule {
    constructor(marque, model, type) {
        super(marque, model); // Appelle le constructeur de la classe parente
        this.type = type;
    }

    afficherInfo() {
        super.afficherInfo(); // Appelle la méthode de la classe parente
        console.log(`Type: ${this.type}`);
    }
}

const voiture = new Voiture('Toyota', 'Corolla', 'Berline');
voiture.afficherInfo(); // Affiche : Marque: Toyota, Modèle: Corolla, Type: Berline