<template>
    <div class="list-wrap" >
        <div class="scroll-wrap" ref="scrollwrap">
          <ul class="list-tab">
             <li class="list-tab-item" :class="{ 'list-tab-item-ac': activeindex== index}" v-for="(items,index) in goods" @click="selecttab(index,$event)">
               <div class="list-tab-item-cell" :class="{ 'list-tab-item-cell-ac': activeindex== index, 'list-tab-item-cell-border':activeindex-1== index}">
                   <span v-if="items.type!=-1" :class="supportsclasss[items.type]"></span>{{items.name}}
               </div>
             </li>
          </ul>
        </div>
        <div class="scroll-item" ref="scrollitem">
          <ul class="list-items" >
            <li class="list-items-wrap" ref="foodlist" v-for="items in goods" >
               <div class="list-items-wrap-tit">
                 {{items.name}}
               </div>
               <div class="list-items-wrap-cont" v-for="item in items.foods">
                 <div class="list-items-wrap-contin">
                   <img :src="item.image" alt="" class="imgclass">
                   <div class="items-txt-cont">
                     <p class="items-txt-head">
                       {{item.name}}
                     </p>
                     <p class="items-txt-head-desc" v-if="item.description">
                       {{item.description}}
                     </p>
                     <p class="items-txt-head-sell" >
                       月售{{item.sellCount}}份<span class="text-indent">好评率{{item.rating}}%</span>
                     </p>
                     <p class="items-price-cont">
                      <span class="items-price-con">¥</span>
                      <span class="items-price">{{item.price}}</span>
                      <span class="items-price-old" v-if="item.oldPrice">¥{{item.oldPrice}}</span>
                     </p>
                   </div>
                 </div>
               </div>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props:{
    goods:{

    }
  },
  data () {
    return {
        supportsclasss:['cut','decut','solo','invoice','safe'],
        activeindex:0,
        objlength:[],
        once:true
    }
  },
  mounted(){
    this.$nextTick(function() {
      this._initScroll();
    })
  },
  updated(){
    if(this.once){
      this.$nextTick(function() {
        this._getitemsHeight();
      })
    }
  },
  methods:{
    _initScroll(){
     this.scrolllistwrap = new BScroll(this.$refs.scrollwrap,{click: true});
     this.scrollitem = new BScroll(this.$refs.scrollitem,{click: true});
     this.scrollitem.on('scrollEnd', (obj) => {
       let  y=Math.abs(obj.y);
       this.objlength.forEach((x,index,arry) =>{
         let indexlist=index;
         if(x<= y&&arry[indexlist+1]>y){
           this.activeindex=index
           return false;
         }
       });
    });
   },
   selecttab(index,event){
     if (!event._constructed) {
          return;
     }
     this.activeindex=index;
     this.scrollitem.scrollToElement(document.querySelectorAll('.list-items-wrap')[index], 300);
   },
   _getitemsHeight(){
      this.once=false;
      this.objlength[0]=0;
      let pre=0
      this.$refs.foodlist.forEach((x) =>{
        pre=x.clientHeight+pre ;
        this.objlength.push(pre);
      });
  },
 },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-wrap{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom:464px;
  overflow: hidden;
  display: flex;
}
.list-tab{
  width: 160px;
  flex: 0 0 160px;
  box-sizing: border-box;
}
.scroll-wrap{
  width: 160px;
  height: 100%;
  background-color: #f3f5f7;
  overflow: hidden;
}
.scroll-item{
  flex: 1 ;
  height: 100%;
  overflow: hidden;
}
.list-tab-item{
  width: 112px;
  height: 108px;
  padding: 0 24px;
  display: table;
}
.list-tab-item-ac{
  background-color: #fff;
}
.list-tab-item-cell{
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 24px;
  color: #07111b;
  font-weight: 200;
  border-bottom: 1px solid #dbdee1;
}
.list-tab .list-tab-item:last-child .list-tab-item-cell{
 border-bottom: none !important;
}
.list-tab-item-cell-ac{
  border-bottom: 1px solid #fff;
}
.list-tab-item-cell-border{
  border-bottom: 1px solid #f3f5f7;
}
.cut{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./list/decrease_3@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./list/decrease_3@3x.png");
  }
}
.decut{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./list/discount_3@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./list/discount_3@3x.png");
  }
}
.solo{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./list/special_3@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./list/special_3@3x.png");
  }
}
.invoice{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./list/invoice_3@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./list/invoice_3@3x.png");
  }
}
.safe{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./list/guarantee_3@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./list/guarantee_3@3x.png");
  }
}
.list-items-wrap{
  width: 100%;
  display: flex;
  flex-wrap:wrap;
}
.list-items-wrap-tit{
  width: 100%;
  box-sizing: border-box;
  border-left: 4px solid #d9dde1;
  background-color: #f3f5f7;
  height: 52px;
  color: #93999f;
  line-height: 52px;
  text-indent:25px;
}
.list-items-wrap-cont{
  width: 100%;
  box-sizing: border-box;
  padding: 0 36px;
  min-height: 220px;
}
.list-items-wrap-contin{
  width: 100%;
  min-height: 220px;
  box-sizing: border-box;
  padding: 36px 0px;
  border-bottom: 1px solid #d9dde1;
  display: flex;
}
.list-items-wrap .list-items-wrap-cont:last-child .list-items-wrap-contin{
  border-bottom: none;
}
.imgclass{
  width: 114px;
  height: 114px;
  border-radius: 3px;
  flex: 0 0 114px;
}
.items-txt-cont{
  flex: 1;
  margin-left: 20px;
}
.items-txt-head{
  font-size: 28px;
  color: rgb(7, 17, 27);
  line-height: 28px;
  font-weight: 700;
}
.items-txt-head-desc{
  font-size: 20px;
  color: rgb(147, 153, 159);
  line-height: 1.1;
  margin-top: 16px;
}
.items-txt-head-sell{
  font-size: 20px;
  color: rgb(147, 153, 159);
  margin-top: 16px;
}
.text-indent{
  text-indent: 24px;
  display: inline-block;
}
.items-price-cont{
  margin-top: 16px;
}
.items-price-con{
  font-size: 20px;
  color: #f01414;
  font-weight: 700;
}
.items-price{
  font-size: 24px;
  color: #f01414;
  font-weight: 700;
}
.items-price-old{
  font-size: 20px;
  color: rgb(147, 153, 159);
  text-decoration: line-through;
}
</style>
