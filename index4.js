// 2. Abstraction
// Définition : L'abstraction consiste à simplifier la complexité en se
//  concentrant sur l'essentiel. En OOP, cela implique de créer des classes
//   abstraites ou des interfaces qui définissent des comportements sans 
//   fournir des détails d'implémentation.
//JavaScript n'a pas de classes abstraites au sens strict, mais on peut simuler cette fonctionnalité.

class Animal {
    constructor(nom) {
        if (new.target === Animal) {
            throw new Error('Cannot instantiate abstract class Animal directly');
        }
        this.nom = nom;
    }

    // Méthode abstraite
    faireDuBruit() {
        throw new Error('Abstract method must be implemented');
    }
}

class Chien extends Animal {
    faireDuBruit() {
        console.log('Aboyer');
    }
}

class Chat extends Animal {
    faireDuBruit() {
        console.log('Miauler');
    }
}

// const animal = new Animal('Generic Animal'); // Erreur : Cannot instantiate abstract class Animal directly
const chien = new Chien('Rex');
const chat = new Chat('Whiskers');

chien.faireDuBruit(); // Affiche : Aboyer
chat.faireDuBruit(); // Affiche : Miauler

// La classe Animal est abstraite, avec une méthode faireDuBruit qui n'est pas implémentée.
// Les classes Chien et Chat doivent implémenter la méthode faireDuBruit pour définir le comportement spécifique.
// On utilise new.target pour éviter l'instanciation directe de la classe abstraite.