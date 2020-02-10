<template >
  <div id="app">
    <shop-lay-out>
      <template slot="product-list">
        <product-list></product-list>
      </template>

      <template slot="cart">
        <cart></cart>
      </template>
    </shop-lay-out>

  </div>
</template>

<script>

import ProductList from '@/components/ProductList'
import ShopLayOut from '@/components/ShopLayOut'
import Cart from '@/components/Cart'

export default {
  name: 'app',
  components: {
    ProductList,
    ShopLayOut,
    Cart
  }
}
</script>

