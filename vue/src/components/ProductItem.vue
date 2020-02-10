<template>
    <div>
        <b-card
            :title="product.name.toString()"
            :img-src="product.picture"
            :img-alt="product.name"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
                {{product.price}}
           
            </b-card-text>

            <b-button href="#" block variant="warning" @click="$emit('addToCart', product)">Añadir al carrito</b-button>
        </b-card>
</div>    
</template>

<script>
export default {
    props: {
        product:{
            type: Object,
            required: true,
           /* validator: value => {

            }*/
        }
    }
}
</script>