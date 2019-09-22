
var contactsList = [] // création d'un tableau qui stocke les données pour tout nos contacts 


class Contact {
  constructor(name, surname, mobilePhone, phoneNumber) {
    this.name = name;
    this.surname = surname;
    this.mobilePhone= mobilePhone;
    this.phoneNumber = phoneNumber; 
  }                                 // création d'une classe qui reprend les caractéristiques attendues pour chaque contact 
    modifyName (newName) {
        this.name = newName;
    }
     modifySurname(newSurname) {
        this.surname = newSurname;
    }
     modifyMobilePhone(newMobilePhone) {
        this.mobilePhone = newMobilePhone;
    }
     modifierPhoneNumber (newPhoneNumber) {
        this.phoneNumber = newPhoneNumber; // application à l'intérieur de la classe de méthodes qui permettront de modifier les caractéristiques d'un contact
    } 

}

function addContact(name, surname, mobilePhone, phoneNumber) {
    var newContact = new Contact(name, surname, mobilePhone, phoneNumber);
    contactsList.push(newContact);
    sortContact();
    }

     /* fonction qui permet d'ajouter un contact, elle prend pour argument les caractéristiques dont on a besoin pour créer ce contact. 
Étapes de la fonction :  création d'un nouveau contact, ajout du nouveau contact dans le tableau (carnet de contacts), et nouveau tri du tableau suite à l'ajout 
du contact pour garder l'ordre alphabétique (fonction sortContat cf ligne 52) */

function searchContact(searchedString) {
 
 for (var i = 0; i < contactsList.length; i++) {
    var contact = contactsList[i]; 
        if ((searchedString === contact.name) || (searchedString === contact.surname) || (searchedString === contact.mobilePhone) 
            || (searchedString === contact.phoneNumber)) 
         {
            return contact; 
        }
    }  

} /* fonction qui permet de rechercher un contact à partir de n'importe laquelle de ses caractéristiques (nom, prénom, numéro de mobile ou numéro de fixe)
étapes de la fonction : c'est une boucle qui parcourt le tableau et compare la chaine de caractères entrée pour la recherche aux chaines de caractères stockées
dans le tableau. Intuitivement, je sens qu'il y a là matière à amélioration du code */

function removeContact(index) {
    contactsList.splice(index,1);
} // fonction qui permet de supprimer un contact en le retirant du tableau. Étape de la fonction : on supprime le contact en utilisant son indice dans le tableau

function sortContact() {
    contactsList.sort(function (contact1, contact2) {
        if (contact1.name < contact2.name) 
            return -1; 
        else if (contact1.name > contact2.name)
            return 1; 
        else {
            if (contact1.surname < contact2.surname)
                return -1; 
            else if (contact1.surname > contact2.surname)
                return 1; 
            else
                return 0 // gestion de l'erreur même si, en pratique, peu de chance que cela se produise 
            }
        })
} /* fonction qui permet de trier les contacts par ordre alphabétique d'abord des noms puis des prénoms en cas de doublon de noms. 
Je pensais que ce serait la plus simple à écrire, parce que la fonction sort trie "par défaut" en ordre alphabétique. Mais, je me suis vite apperçue
qu'il fallait ordonner le tri. Si je m'étais contentée de la fonction sort "brute" elle n'aurait pas su faire la différence entre les noms et les prénoms. 
j'ai trouvé cette méthode dans la documentation https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort ... */


addContact(faker.name.lastName(), faker.name.firstName(), faker.phone.phoneNumber(), faker.phone.phoneNumber())
addContact(faker.name.lastName(), faker.name.firstName(), faker.phone.phoneNumber(), faker.phone.phoneNumber())
addContact(faker.name.lastName(), faker.name.firstName(), faker.phone.phoneNumber(), faker.phone.phoneNumber())
addContact(faker.name.lastName(), faker.name.firstName(), faker.phone.phoneNumber(), faker.phone.phoneNumber())
addContact(faker.name.lastName(), faker.name.firstName(), faker.phone.phoneNumber(), faker.phone.phoneNumber())
addContact(faker.name.lastName(), faker.name.firstName(), faker.phone.phoneNumber(), faker.phone.phoneNumber())
addContact(faker.name.lastName(), faker.name.firstName(), faker.phone.phoneNumber(), faker.phone.phoneNumber())
// ajout de contacts en appelant les fonctions correspondantes dans la bibliothèque "faker" (cf script dans le head du code html)

// intégration du code dans la page Html via Vue JS 

var app = new Vue ({
  el: '#app',
  data: {contacts : contactsList }
}) // permet d'afficher la liste des contacts 


var app1 = new Vue({
  el: '#app-1',
   data: {
    name : "",
    surname : "",
    mobilePhone : "",
    phoneNumber : "",

  },
 methods: {
    newContact : function() {
        if ((this.name === "") || (this.surname === "") || (this.mobilePhone === "") || (this.phoneNumber === "")) {
        alert("Le formulaire n'est pas complété");
        }
        else {
            addContact(this.name, this.surname, this.mobilePhone, this.phoneNumber);
        }
    }
  }
})


