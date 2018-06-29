<template>
    <div class="tabflex">
          <router-link  class="tabflexdiv" tag="span" :to="{ name: 'list' }">
          商品
          </router-link>
        <router-link class="tabflexdiv" tag="span" :to="{ name: 'review' }">
          评价
          </router-link>
          <router-link  class="tabflexdiv" tag="span" :to="{ name: 'customer' }">
          商家
          </router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .tabflex{
     width: 100%;
     display: flex;
     height: 80px;
     line-height: 80px;
     border-bottom: 1px solid rgba(7, 17, 27, 0.1);
   }
   .tabflexdiv{
     flex: 1;
     font-size: 28px;
     color: rgb(77, 85, 93);
     text-align: center;
     display: inline-block;
   }
   .router-link-active{
     color: rgb(240, 20, 20);
   }
</style>
