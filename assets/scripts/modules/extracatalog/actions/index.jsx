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
          console.log('my response', response)
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