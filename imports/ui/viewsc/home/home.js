/**
 * Pagina Home, contiene la lista dei beacon
 */
import { Template } from 'meteor/templating';

import './home.html';

/**
 * TEMPLATE home HELPER
 */
Template.home.helpers({
});

/**
 * TEMPLATE zona EVENTS
 */
Template.home.events({
    'click .single-page': function (e) {
        //vado alla pagina con nome "single"
        mainView.router.load({pageName: 'single', force: true});
        e.stopPropagation();
    }
});