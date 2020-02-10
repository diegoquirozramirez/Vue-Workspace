/*export async function fetchProducts ({state, commit, dispatch, rootState}){
    //state => que es el estado de este modulo
    //commit => commitear una accion a alguna mutacion
    //dispatch
    //rootSate esta en store y es el estado en el index.js 

}*/
export async function fetchProducts ({ commit }){
    const data = await fetch('/fixtures/products.json')
    const products = await data.json()

    commit('products/setProducts', products, { root: true })

}