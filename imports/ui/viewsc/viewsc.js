/**
 * Container generale delle pagine
 */
import './home/home.js';
import './single/single.js';
import './viewsc.html';

Template.viewsc.events({
    'click #menu-right a': function(e) {
        let page = e.target.dataset.page;

        //vado alla pagina con nome "single"
        mainView.router.load({pageName: page, force: true});
        myApp.closePanel();
        e.stopPropagation();
    }
});