const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/clients"
);

const clientSeed = [
  {
    firstName: "George",
    lastName: "Wasp",
    address1: "1245 Main Street",
    address2: "",
    city: "Toronto",
    provice: "ON",
    postalCode: "M5H 4U3",  
    email: "gwasp@gmail.com",
    phone: "416 555-3333",
    language: ["English"], 
    password: "12345", 
    serviceProvier: true,
    category: ["Lawyer"],
    coverage: ["Toronto", "Mississauga"],
    description: "",   
  },
  {
    firstName: "Larysa",
    lastName: "Evanchuk",
    address1: "222 Center Street",
    address2: "Apt 3",
    city: "Mississauga",
    provice: "ON",
    postalCode: "L3L 3Y5",  
    email: "larysae@gmail.com",
    phone: "289 555-4444",
    language: ["English", "Ukrainian"], 
    password: "12345", 
    serviceProvier: true,
    servicesProvided: ["Baby Sitter", "House Cleaner"],
    servicesCoverage: ["Mississauga"],
    serviceNotes: "",
    miscNotes: "",
    age: "24",
    date: new Date(Date.now())     
  },
  {
    firstName: "Ahmed",
    lastName: "Said",
    address1: "2356 Jones Street",
    address2: "",
    city: "Mississauga",
    provice: "ON",
    postalCode: "L3W 2A5",  
    email: "asaid@gmail.com",
    phone: "905 555-4321",
    language: ["Arabic", "English"], 
    password: "12345", 
    serviceProvier: false,
    servicesProvided: [""],
    servicesCoverage: [""],
    serviceNotes: "",
    miscNotes: "",
    age: "",
    date: new Date(Date.now())     
  },
  {
    firstName: "Yuri",
    lastName: "Slobchuk",
    address1: "553 Ontario ST",
    address2: "",
    city: "Mississauga",
    provice: "ON",
    postalCode: "L4L 5N3",  
    email: "yurslob@gmail.com",
    phone: "905 555-9876",
    language: ["Ukrainian"], 
    password: "12345", 
    serviceProvier: false,
    servicesProvided: [""],
    servicesCoverage: [""],
    serviceNotes: "",
    miscNotes: "",
    age: "",
    date: new Date(Date.now())     
  },
  {
    firstName: "Abeer",
    lastName: "Ali",
    address1: "234 Lakeshore Road",
    address2: "",
    city: "Oakville",
    provice: "ON",
    postalCode: "L6J 5T5",  
    email: "aali@gmail.com",
    phone: "905 844-1212",
    language: ["English", "Arabic"], 
    password: "12345", 
    serviceProvier: true,
    servicesProvided: ["Doctor"],
    servicesCoverage: ["Oakville", "Mississauga", "Toronto"],
    serviceNotes: "",
    miscNotes: "",
    age: "45",
    date: new Date(Date.now())     
  },
  {
    firstName: "Ibarahim",
    lastName: "Ali",
    address1: "234 Lakeshore Road",
    address2: "",
    city: "Oakville",
    provice: "ON",
    postalCode: "L6J 5T5",  
    email: "tali@gmail.com",
    phone: "905 844-1212",
    language: ["English", "Arabic"], 
    password: "12345", 
    serviceProvier: false,
    servicesProvided: [""],
    servicesCoverage: [""],
    serviceNotes: "",
    miscNotes: "",
    age: "",
    date: new Date(Date.now())     
  },
  {
    firstName: "Nadia",
    lastName: "Rabinsky",
    address1: "987 Center Street",
    address2: "Apt 45",
    city: "Mississauga",
    provice: "ON",
    postalCode: "L5L 5Y6",  
    email: "nrabinsky@gmail.com",
    phone: "905 555-4356",
    language: ["Ukrainian"], 
    password: "12345", 
    serviceProvier: false,
    servicesProvided: [""],
    servicesCoverage: [""],
    serviceNotes: "",
    miscNotes: "",
    age: "",
    date: new Date(Date.now())     
  },
  {
    firstName: "Amal",
    lastName: "Mohammed",
    address1: "234 West Street",
    address2: "Apt 234",
    city: "Mississauga",
    provice: "ON",
    postalCode: "L5N 3C5",  
    email: "amohammed@gmail.com",
    phone: "289 555-0983",
    language: ["Arabic", "English", "Ukrainian"], 
    password: "12345", 
    serviceProvier: true,
    servicesProvided: ["Lawyer"],
    servicesCoverage: ["Oakville", "Toronto", "Mississauga"],
    serviceNotes: "",
    miscNotes: "",
    age: "46",
    date: new Date(Date.now())     
  },
  {
    firstName: "Bob",
    lastName: "Stoli",
    address1: "34 East Street",
    address2: "",
    city: "Mississauga",
    provice: "ON",
    postalCode: "L7N 4G4",  
    email: "bstoli@gmail.com",
    phone: "905 555-9045",
    language: ["Ukrainian", "English"], 
    password: "12345", 
    serviceProvier: false,
    servicesProvided: [""],
    servicesCoverage: [""],
    serviceNotes: "",
    miscNotes: "",
    age: "",
    date: new Date(Date.now())     
  },
  {
    firstName: "Miriam",
    lastName: "Ali",
    address1: "235 Best Street",
    address2: "",
    city: "Toronto",
    provice: "ON",
    postalCode: "M8C 3U8",  
    email: "mali@gmail.com",
    phone: "416 555-0867",
    language: ["Arabic"], 
    password: "12345", 
    serviceProvier: false,
    servicesProvided: [""],
    servicesCoverage: [""],
    serviceNotes: "",
    miscNotes: "",
    age: "",
    date: new Date(Date.now())     
  },

];
const dropdownSeed = [
  dropdown.category = ["Lawyer", "House Keeper", "Baby Sitter", "Doctor", "Contractor", "Plumber", "Electrician"],
  dropdonw,coverage = ["Oakville", "Toronto", "Mississauga", "Brampton", "Markham", "Etobicoke", "Vaughan", "Burlington", "Milton"]
];


db.Client
  .remove({})
  .then(() => db.Client.collection.insertMany(clientSeed))
  .then(data => {
  db.Dropdown
  .remove({})
  .then(() => db.Dropdown.collection.insertMany(dropdownSeed))})
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });