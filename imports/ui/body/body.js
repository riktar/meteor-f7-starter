/**
 * Body dell'app
 */
import { Template } from 'meteor/templating';


import '../viewsc/viewsc.js';
import './body.html';

Template.body.onCreated(function viewscOnCreated() {

});

Template.body.onRendered(function viewscOnRendered() {
    //setto la main view di framework7 quando il body è completamente renderizzato
    mainView = myApp.addView('.view-main', {
        material: true,
        domCache: true
    });

});

Template.body.helpers({});

Template.body.events({});
