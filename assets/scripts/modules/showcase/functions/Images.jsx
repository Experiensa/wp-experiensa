export function getImageURL(data){
    if(data.hasOwnProperty('cover_image')){
        if(data.cover_image.feature_image !== false){
            return data.cover_image.feature_image
        }
    }
    return experiensa_vars.dist_url + 'assets/images/travel-no-image.jpg'
}