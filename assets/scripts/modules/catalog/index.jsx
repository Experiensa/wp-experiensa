import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
require('es6-symbol/implement')

import 'semantic-ui-css/semantic.css';

import reducers from './reducers';

import Catalog from './components/Catalog'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let catalog_app = document.getElementById('catalogApp');
if(catalog_app != null ) {
    let catalog_props = $('#catalogProps');
    let options = catalog_props.data('options')
    let filters = catalog_props.data('filters')
    // console.log('mis options son ',options)
    // console.log('mis filtros son ',filters)
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <Catalog options={options} filters={filters}/>
        </Provider>
        , catalog_app);
}