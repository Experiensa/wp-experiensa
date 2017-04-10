import 'jquery';
import showcase from './modules/showcase'
import catalog from './modules/catalog/index'

jQuery(document).ajaxSuccess(function(event, xhr, settings) {
    // console.log("An individual AJAX call has completed successfully***********");
    // console.log('event',event);
    // console.log('xhr',xhr);
    // console.log('settings',settings);
    // console.log('settings.data',settings.data);
    const action = 'action=dslc-ajax-add-module';
    if(settings.data.indexOf(action) !== -1) {
        if (settings.data.indexOf('dslc_module_id=Showcase_LC_Module') !== -1) {
            showcase.renderShowcase()
        }
        if (settings.data.indexOf('dslc_module_id=Catalog_LC_Module') !== -1) {
            catalog.renderCatalog()
        }
    }
})