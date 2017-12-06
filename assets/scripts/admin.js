import 'jquery';
import 'babel-polyfill';
import showcase from './modules/showcase';
import request from './modules/request';
import catalog from './modules/catalog/index';
import countryAutocomplete from './modules/countryAutocomplete';
import extras from './modules/extras'

jQuery(document).ajaxSuccess(function(event, xhr, settings) {
     /*console.log("An individual AJAX call has completed successfully***********");
     console.log('event',event);
     console.log('xhr',xhr);
     console.log('settings',settings);
     console.log('settings.data',settings.data);*/
    const action = 'action=dslc-ajax-add-module';
    if(typeof settings.data != 'undefined' && settings.data.indexOf(action) !== -1) {
        if (settings.data.indexOf('dslc_module_id=Showcase_LC_Module') !== -1) {
            showcase.renderShowcase()
        }
        if (settings.data.indexOf('dslc_module_id=Catalog_LC_Module') !== -1) {
            catalog.renderCatalog()
        }
        if (settings.data.indexOf('dslc_module_id=Request_LC_Module') !== -1) {
            request.renderRequest()
        }
    }
});

jQuery(document).ready(function(){
    countryAutocomplete.Autocomplete();
    extras.AdminMenuStyle();
});