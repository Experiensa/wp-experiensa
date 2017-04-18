import showcase from '../modules/showcase'
import catalog from '../modules/catalog/index'

export default {
    init() {
        // JavaScript to be fired on all pages
        console.log('this code run on all pages')
        showcase.renderShowcase()
    },
    finalize() {
        // JavaScript to be fired on all pages, after page specific JS is fired
    },
};