var contactsList = []; 

class Contact {
  constructor(name, surname, mobilePhone, phoneNumber) {
    this.name = name;
    this.surname = surname;
    this.mobilePhone= mobilePhone;
    this.phoneNumber = phoneNumber; 
  }                                 
  modifyName (newName) {
    this.name = newName;
  }
  modifySurname(newSurname) {
    this.surname = newSurname;
  }
  modifyMobilePhone(newMobilePhone) {
    this.mobilePhone = newMobilePhone;
  }
  modifyPhoneNumber (newPhoneNumber) {
        this.phoneNumber = newPhoneNumber; 
  } 
}

function addContact(name, surname, mobilePhone, phoneNumber) {
  var newContact = new Contact(name, surname, mobilePhone, phoneNumber);
  contactsList.push(newContact);
  sortContact();
}

faker.locale = "fr" ;
for (let i = 0; i < 100; i++) {
  addContact(faker.name.lastName(), faker.name.firstName(), faker.phone.phoneNumber(), faker.phone.phoneNumber()); 
}

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
        return 0; 
    }
  })
} 

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
});

var app2 = new Vue({ 
el: '#app-2',
data: {
query: "",
list: contactsList,
name : "",
surname : "",
mobilePhone : "",
phoneNumber : ""
},
computed: { 
  ComputedList : function () {
    var debug = this
    return this.list.filter( function (contact) {
      if (debug.query === "")
        return true ; 
     else if (contact.name.toLowerCase().indexOf(debug.query.toLowerCase()) != -1 || contact.surname.toLowerCase().indexOf(debug.query.toLowerCase()) != -1)
        return true;
      else 
        return false;
    })
  }
},

methods : {
  modifyContact : function(index) {
   if (this.name !== "") 
    {this.list[index].modifyName(this.name)}; 
   if (this.surname !== "") 
    {this.list[index].modifySurname(this.surname)};
   if (this.mobilePhone !== "") 
    {this.list[index].modifyMobilePhone(this.mobilePhone)};
   if (this.phoneNumber !== "") 
    {this.list[index].modifyPhoneNumber(this.phoneNumber)};
   sortContact()
  }
}
})

