require('es6-promise').polyfill();
import axios from 'axios'
import _ from 'lodash'
const ld = _.noConflict();
//Action Types
export const REQUEST_CATALOG = 'REQUEST_CATALOG'
export const FILTER_CATALOG = 'FILTER_CATALOG'
export const FILTER_CATEGORY = 'FILTER_CATEGORY'
export const FILTER_COUNTRY = 'FILTER_COUNTRY'
export const FILTER_DESTINATION = 'FILTER_DESTINATION'
export const FILTER_THEME = 'FILTER_THEME'
export const FILTER_INCLUDE = 'FILTER_INCLUDE'
export const FILTER_EXCLUDE = 'FILTER_EXCLUDE'
export const FILTER_INPUT = 'FILTER_INPUT'

/**
 * Helper functions
 */
function add_filter(value, filters){
    if (filters.indexOf(value) === -1) {
        filters.push(value);
    }
    return filters
}
function delete_filter(value, filters){
    var index = filters.indexOf(value);
    if (index !== -1) {
        filters.splice(index, 1);
    }
    return filters
}
function getFilteredCatalog(catalog = [], filters = [], object_name){
    let auxList = []
    if(filters.length > 0) {
        for (var i in catalog) {
            let intersection = ld.intersection(catalog[i][object_name]['array'], filters)
            if (intersection.length > 0 && intersection.length == filters.length) {
                auxList.push(catalog[i])
            }
        }
        return auxList
    }
    return catalog
}
function filterByObject(catalog = [], filter = '', object_name){
    let auxList = []
    if(filter.length > 0) {
        filter = filter.toLocaleUpperCase()
        for(var i in catalog){
            let object_value = catalog[i][object_name].toUpperCase()
            if(object_value.indexOf(filter) > -1){
                auxList.push(catalog[i])
            }
        }
        return auxList
    }
    return catalog
}
function searchCatalog(catalog, filters){
    let auxCatalog = []
    if(catalog.length > 0){
        auxCatalog = getFilteredCatalog(catalog, filters.categories,'category')
        auxCatalog = getFilteredCatalog(auxCatalog, filters.countries,'country')
        auxCatalog = getFilteredCatalog(auxCatalog, filters.excludes,'exclude')
        auxCatalog = getFilteredCatalog(auxCatalog, filters.includes,'include')
        auxCatalog = getFilteredCatalog(auxCatalog, filters.destinations,'destination')
        auxCatalog = getFilteredCatalog(auxCatalog, filters.themes,'theme')
        auxCatalog = filterByObject(auxCatalog, filters.input, 'title')
    }
    return auxCatalog
}
function createCatalogObject(data,type=REQUEST_CATALOG){
  let response = {}
  switch (type){
      case REQUEST_CATALOG:
          response = {
              catalog: data.catalog,
              originalCatalog: data.catalog,
              themes: data.theme_filter,
              themes_active: [],
              destinations: data.destination_filter,
              destinations_active:[],
              countries: data.country_filter,
              countries_active:[],
              categories: data.category_filter,
              categories_active: [],
              includes: data.included_filter,
              includes_active: [],
              excludes: data.excluded_filter,
              excludes_active: [],
          }
  }
  return response
}
/*
 * Action Creations
 */
export function requestCatalog() {
  return(dispatch,getState)=>{
      let localApiCatalogURL = experiensa_vars.siteurl + '/wp-json/wp/v2/catalog'
      axios.get(localApiCatalogURL, {timeout: 30000})
      .then((response)=>{
          let catalogResponse = createCatalogObject(response.data)
          console.log('catalogo formateado', catalogResponse)
          dispatch(
              {
                  type: REQUEST_CATALOG,
                  payload: catalogResponse
              }
          )
      })
      .catch((error)=>{
          console.log('Error',error)
      })
  }
}

export function filterCatalog(filterType, value, active){
    console.log('recibi', filterType, value, active)
    return(dispatch,getState)=>{
        console.log('getState',getState())
        const original_state = getState().catalog
        let {catalog, originalCatalog, categories_active, countries_active, excludes_active, includes_active, destinations_active, themes_active, input_active, input_text} = original_state
        console.log('original', original_state)
        switch (filterType){
            case FILTER_CATEGORY:
                categories_active = active?add_filter(value,categories_active):delete_filter(value,categories_active)
                break
            case FILTER_COUNTRY:
                countries_active = active?add_filter(value,countries_active):delete_filter(value,countries_active)
                break
            case FILTER_EXCLUDE:
                excludes_active = active?add_filter(value,excludes_active):delete_filter(value,excludes_active)
                break
            case FILTER_INCLUDE:
                includes_active = active?add_filter(value,includes_active):delete_filter(value,includes_active)
                break
            case FILTER_DESTINATION:
                destinations_active = active?add_filter(value,destinations_active):delete_filter(value,destinations_active)
                break
            case FILTER_THEME: 
                themes_active = active?add_filter(value,themes_active):delete_filter(value,themes_active)
                break
            default:
                input_text = value
                break
            
        }
        let newCatalog
        if( categories_active.length < 1
            && countries_active.length < 1
            && excludes_active.length < 1
            && includes_active.length <1
            && destinations_active.length < 1
            && themes_active.length < 1
            && input_text.length < 1
        ){
            newCatalog =  originalCatalog
        }else{
            const myFilters = {
                categories: categories_active,
                countries: countries_active,
                excludes: excludes_active,
                includes: includes_active,
                destinations: destinations_active,
                themes: themes_active,
                input: input_text
            }
            newCatalog = searchCatalog(originalCatalog, myFilters)
            // console.log('voy a buscar con estos datos:', originalCatalog, myFilters)
        }
        const catalogResponse = {
            catalog: newCatalog,
            originalCatalog: originalCatalog,
            themes: original_state.themes,
            themes_active: themes_active,
            destinations: original_state.destinations,
            destinations_active:destinations_active,
            countries: original_state.countries,
            countries_active: countries_active,
            categories: original_state.categories,
            categories_active: categories_active,
            includes: original_state.includes,
            includes_active: includes_active,
            excludes: original_state.excludes,
            excludes_active: excludes_active,
        }
        dispatch(
            {
                type: FILTER_CATALOG,
                payload: catalogResponse
            }
        )
    }
    
}