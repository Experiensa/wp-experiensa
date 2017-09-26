import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
require('es6-symbol/implement');

import 'semantic-ui-css/semantic.css';
import reducers from './reducers';
import Catalog from './components/Catalog';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const renderCatalog = function() {
    let catalog_app = document.getElementById('catalogApp');
    if (catalog_app != null) {
        let options = JSON.parse(catalog_app.dataset.options)
        let filters = JSON.parse(catalog_app.dataset.filters)
        ReactDOM.render(
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Catalog options={options} filters={filters}/>
            </Provider>,
            catalog_app);
    }else{
        let lc_preview = document.getElementById('page-builder-frame')
        if(lc_preview != null){
            catalog_app = window.frames['page-builder-frame'].contentDocument.getElementById('catalogApp')
            if (catalog_app != null) {
                let options = JSON.parse(catalog_app.dataset.options)
                let filters = JSON.parse(catalog_app.dataset.filters)
                ReactDOM.render(
                    <Provider store={createStoreWithMiddleware(reducers)}>
                        <Catalog options={options} filters={filters}/>
                    </Provider>,
                    catalog_app);
            }
        }
    }
}
module.exports = {
    renderCatalog: renderCatalog
}