
export function getVoyagePrice(data){
    let currency = "USD";
    if(data.currency!=null)
        currency = data.currency
    let price = "No Available"
    if(data.price != '')
        price = voyage.price
    if(price != 'No Available')
        price = currency+' '+price
    return price
}