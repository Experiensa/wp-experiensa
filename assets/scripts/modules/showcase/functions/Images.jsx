import imageUrl from '../../../../images/travel-no-image.jpg'
const travelNoImage = experiensa_vars.dist_url + imageUrl

export function getImageURL(data){
    if(data.hasOwnProperty('cover_image')){
        if(data.cover_image.feature_image !== false){
            return data.cover_image.feature_image
        }
    }
    return travelNoImage
}
export function getImageUrlList(data){
    return data.map((info)=>{
        return getImageURL(info)
    })
}