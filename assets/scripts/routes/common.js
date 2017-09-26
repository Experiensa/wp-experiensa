import showcase from '../modules/showcase';
import request from '../modules/request';
import catalog from '../modules/catalog/index';

export default {
    init() {
        // JavaScript to be fired on all pages
        showcase.renderShowcase();
        catalog.renderCatalog();
        request.renderRequest();
    },
    finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
    },
};