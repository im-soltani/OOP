// Le polymorphisme permet à une méthode 
// d’avoir différentes implémentations selon le contexte. 
// Cela signifie que le même nom de méthode peut être utilisé dans 
// différentes classes avec des comportements différents.class Animal {
    class Animal {
        faireDuBruit() {
            console.log('Bruit générique');
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
    
    const animaux = [new Chien(), new Chat()];
    
    animaux.forEach(animal => {
        animal.faireDuBruit(); // Affiche : Aboyer puis Miauler
    });