export function amountFollowers(array) {
    return  array.reduce((acum, obj)=>{
        console.log({acum, number: obj.number});
         acum += obj.number
        return acum
    },0);
}