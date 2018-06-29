<template>
<div class="sellwraper">
  <headerl :seller='seller'></headerl>
  <tab></tab>
  <router-view :goods='goods' />
</div>
</template>

<script>
import headerl from '@/components/sell/header'
import tab from '@/components/sell/tab'
export default {
  name: 'sell',
  components: {
    headerl,
    tab
  },
  data () {
    return {
      seller:'',
      goods:'',
    }
  },
  created () {
     //生命周期
    this.$http.get('api/list').then(response => {
      this.seller=response.body.seller;
      this.goods=response.body.goods;
    }, response => {
      console.log(response);
    });
 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sellwraper{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
