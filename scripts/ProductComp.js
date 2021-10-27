Vue.component('products', {
  data() {
    return {
      catalogUrl: '/catalogData.json',
      products: [],
      filtered: [],
      imgCatalog: 'img/unnamed.png',
    }
  },
  mounted() {
    this.$parent.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filtered.push(el);
        }
      });
  },
  methods: {
    filter(string) {
      let regexp = new RegExp(string, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    }
  },
  template: `<div class="products">
              <div v-if="!products.length" class="">Нет товаров :(</div>
              <product v-for="item of filtered" :key="item.id_product"  :product="item"></product>
            </div>`
});
Vue.component('product', {
  props: ['product', 'img'],
  template: `<div class="product-item">
              <div class="product-info">
                <h3>{{product.product_name}}</h3>
                <p>$ {{product.price}}</p>
                <button class="buy-btn" @click="$root.$refs.cart.add(product)">Добавить в корзину</button>
              </div>
              <img :src="product.img ? product.img : 'img/unnamed.png'" alt="product-img">
            </div>`
});