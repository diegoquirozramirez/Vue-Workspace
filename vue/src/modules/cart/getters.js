export function totalCosto (state){
    return state.cart.reduce((sum, product) => {
        var total = (parseFloat(product.price)* product.qty)+ sum;
        return myRound(total,2)
    }, 0)
}


function myRound(num, dec) {
    var exp = Math.pow(10, dec || 2); // 2 decimales por defecto
    return (parseInt(num * exp, 10) / exp);
  }