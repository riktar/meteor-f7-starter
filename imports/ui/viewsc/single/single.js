/**
 * Pagina della singola zona
 */
import { Template } from 'meteor/templating';


import './single.html';

Template.single.helpers({

});

Template.single.events({
    'click .return-back': function(e) {
        //torno alla pagina precedente
        mainView.router.back();
        e.stopPropagation();
    }
});