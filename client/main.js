import { Template } from 'meteor/templating';
import './main.html';
import { nom_eleves } from '../collections/nom_eleves.js';

/*Template.body.helpers({

  nom_eleves: [

    { nom: 'Tiphanie' },

    { nom: 'Abdellatif' },

    { nom: 'Tan-mba' },

  ],

});*/

Template.body.helpers({

  nom_eleves() {

    return nom_eleves.find({});

  },


});


Template.body.events({

  'click #sub'(event, template) {

    // Prevent default browser form submit

    event.preventDefault();
 

    // Get value from form element

    const target = template.find("#chp1");

    const text = target.value;
 

    // Insert a task into the collection

    nom_eleves.insert({

      nom: text,

      createdAt: new Date(), // current time

    }); 

    // Clear form

    target.text.value = '';

  },

});

Template.body.helpers({

  nom_eleves() {
    // Show newest tasks at the top

    return nom_eleves.find({}, { sort: { createdAt: -1 } });
  },

});

 