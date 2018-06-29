<template>
  <div class="wrap">
    <div class="sell-header-wrap">
      <div class="sell-mid">
          <div class="sell-mid-avator" :style="{backgroundImage: 'url(' + seller.avatar + ')' }">

          </div>
          <div class="sell-mid-txtwrap">
             <div class="sell-mid-top">
                <span class="sell-brand">
                </span>
                <span class="sell-brand-text">
                    {{seller.name}}
                </span>
             </div>
             <div class="sell-mid-mid">
                 {{seller.description}}/{{seller.deliveryTime}}分钟送达
             </div>
             <div class="sell-mid-btm" v-if="seller.supports">
               <span  :class="supportsclasss[seller.supports[0].type]">
               </span>
               <span class="sell-btm-text">
                   {{seller.supports[0].description}}
               </span>
             </div>
          </div>
      </div>
      <div class="sell-header" :style="{backgroundImage: 'url(' + seller.avatar + ')' }">

      </div>
      <div class="otips" @click="showmodal">
        <span class="optipsspan">{{supnum}}</span>
        <span class="icon-keyboard_arrow_right optipsspan" ></span>
      </div>
      <div class="sellbtm">
          <span class="sellbtmicon"></span>
          <span class="sellbtmtxt">{{seller.bulletin}}</span>
          <span class="icon-keyboard_arrow_right sellbtmtxticon" @click="showmodal"></span>
      </div>
    </div>
    <transition name="fade">
      <div class="modal" v-show="modalshow">
        <div class="modalblur"></div>
        <div id="wrap">
          <div id="main" class="clearfix" >
             <div class="modal-title">
                  {{seller.name}}
             </div>
             <star class="starclass" :score="seller.score" :starstyle="starstyle"></star>
             <div class="modal-txt-wrap">
               <div class="modal-txt-wrap-line">

               </div>
               <div class="modal-txt-cont">
                 优惠信息
               </div>
               <div class="modal-txt-wrap-line">

               </div>
             </div>
             <div class="modal-favourable">
               <div class="modal-favourable-txt" v-for="item in seller.supports">
                  <div :class="supportsclasssl[item.type]">

                  </div>
                  <div class="modal-favourable-txtin ">
                     {{item.description}}
                  </div>
               </div>
             </div>
             <div class="modal-txt-wrap">
               <div class="modal-txt-wrap-line">

               </div>
               <div class="modal-txt-cont">
                 商家公告
               </div>
               <div class="modal-txt-wrap-line">

               </div>
             </div>
             <div class="modal-about"  >
                {{seller.bulletin}}
             </div>
          </div>
        </div>
        <div id="footer">
             <div class="close-icon" >
                  <div class="icon-close"  @click="showmodal" ></div>
             </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import star from '@/components/star/star'
export default {
  components:{
    star
  },
  name: 'headerl',
  props:{
    seller:{
      default:{
        avatar:require('./header/avator.png')
      }
    }
  },
  data () {
    return {
      modalshow:false,
      supportsclasss:['cut','decut','solo','invoice','safe'],
      supportsclasssl:['cutl','decutl','solol','invoicel','safel'],
      starstyle:{
        wrapstyle:'margin-right:20px;',
        starstyle:'',
        starsize:48
      }
    }
  },
  mounted () {
 },
 methods:{
   showmodal: function(){
     this.modalshow=!this.modalshow
   }
 },
 computed: {
   supnum (){
     if(this.seller.supports){
      let num= this.seller.supports.length+0>99 ?  '99+' : this.seller.supports.length
      return num
    }
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sell-header-wrap{
  width: 750px;
  height: 268px;
  overflow: hidden;
  position: relative;
}
.sell-header{
  width: 750px;
  height: 268px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top:0;
  z-index: -10;
  background-color: rgba(0, 0, 0, 0.2);
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  filter: blur(10px);
}
.sell-mid{
  width: 750px;
  height: 128px;
  margin: 0 auto;
  margin-top: 48px;
  display: flex;
}
.sell-mid-avator{
  width: 128px;
  height: 128px;
  margin-left: 48px;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
}
.sell-mid-txtwrap{
  width: 440px;
  height: 128px;
  margin-left: 32px;
}
.sell-mid-top{
  height: 36px;
  line-height: 36px;
  font-size: 32px;
  width: 440px;
  margin-top: 4px;
  font-weight: bold;
  text-align: left;
  color: rgb(255, 255, 255);
  display: flex;
}
.sell-brand{
  width: 60px;
  height: 36px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/brand@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/brand@3x.png");
  }
}
.sell-brand-text{
  width: 380px;
  height: 36px;
  display: inline-block;
  text-indent:12px;
  line-height: 36px;
  font-weight: bold;
  text-align: left;
  color: rgb(255, 255, 255);
  font-size: 32px;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}
.sell-mid-mid{
  height: 24px;
  line-height: 24px;
  font-size:24px;
  width: 440px;
  margin-top: 16px;
  font-weight: 200;
  text-align: left;
  color: rgb(255, 255, 255);
}
.sell-mid-btm{
  height: 24px;
  line-height: 24px;
  font-size:24px;
  width: 440px;
  margin-top: 20px;
  font-weight: 200;
  text-align: left;
  color: rgb(255, 255, 255);
  display: flex;
}
.sell-btm-text{
  width: 380px;
  height: 24px;;
  display: inline-block;
  text-indent:8px;
  line-height: 24px;
  font-weight: 200;
  text-align: left;
  color: rgb(255, 255, 255);
  font-size: 20px;
  white-space:nowrap;
  text-overflow:ellipsis;
  overflow:hidden;
}
.cut{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/decrease_1@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/decrease_1@3x.png");
  }
}
.decut{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/discount_1@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/discount_1@3x.png");
  }
}
.solo{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/special_1@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/special_1@3x.png");
  }
}
.invoice{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/invoice_1@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/invoice_1@3x.png");
  }
}
.safe{
  width: 24px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/guarantee_1@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/guarantee_1@3x.png");
  }
}
.cutl{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/decrease_2@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/decrease_2@3x.png");
  }
}
.decutl{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/discount_2@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/discount_2@3x.png");
  }
}
.solol{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/special_2@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/special_2@3x.png");
  }
}
.invoicel{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/invoice_2@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/invoice_2@3x.png");
  }
}
.safel{
  width: 32px;
  height: 32px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/guarantee_2@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/guarantee_2@3x.png");
  }
}
.otips{
  position: absolute;
  padding: 14px 16px;
  border-radius: 14px;
  height:20px;
  font-size: 0px;
  background-color: rgba(0, 0, 0, 0.2);
  top: 125px;
  right: 25px;
  display: flex;
  align-items: center;
  z-index: 10;
}
.optipsspan{
  color: rgb(255, 255, 255);
  font-weight: 200;
  line-height: 20px;
  font-size: 20px;
  vertical-align: sub;
}
.sellbtm{
  width: 702px;
  height: 56px;
  padding: 0 24px;
  margin-top: 36px;
  background-color: rgba(7, 17, 27, 0.2);
  display: flex;
  align-items: center;
}
.sellbtmicon{
  width: 44px;
  height: 24px;
  display: inline-block;
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  background-image: url("./header/bulletin@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3) {
      background-image: url("./header/bulletin@3x.png");
  }
}
.sellbtmtxt{
  padding-left:8px;
  width: 640px;
  height: 56px;
  line-height: 56px;
  text-align: left;
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 200;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.sellbtmtxticon{
  line-height: 56px;
  font-size: 20px;
  color: rgb(255, 255, 255);
  font-weight: 200;
}
.modal{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 15;
}
.modalblur{
  position: fixed;
  width: 100%;
  height: 100%;
  filter: blur(10px);
  background-color:rgba(7,17,27,0.8);
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}
#wrap{
  width: 100%;
  height: auto;
  min-height: 100%;
  position: relative;
  z-index: 30;
}
#main{
  padding-bottom: 128px;
  width: 100%;
  height: 100%;
}
#footer {
  position: relative;
  margin-top: -128px;/* footer高度的负值 */
  height: 128px;
  clear:both;
  z-index: 100;
}
.clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix {display: inline-block;}
.modal-title{
  padding-top:128px;
  width: 100%;
  height: 32px;
  margin-top: 128px;
  font-size: 32px;
  line-height: 32px;
  font-weight: 700;
  text-align: center;
  color: rgb(255, 255, 255);
  margin: 0 auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.starclass{
  margin-top: 32px;
}
.modal-txt-wrap{
  width:610px;
  height: 28px;
  margin: 0 auto;
  margin-top:56px;
  display: flex;
  align-items: flex-start ;
  justify-content:space-between;
}
.modal-txt-wrap-line{
  width: 224px;
  height: 13px;
  border-bottom: 1px solid rgba(255,255,255,0.2)
}
.modal-txt-cont{
  font-size: 28px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  line-height: 28px;
}
.modal-favourable{
  width: 610px;
  margin: 0 auto;
  margin-top: 48px;
}
.modal-favourable-txt{
  display: flex;
  height: 32px;
  align-items: center;
  padding: 0 24px;
  width: 562px;
  margin: 0 auto;
  margin-top: 24px;
}
.modal-favourable-txt:first-child{
  margin-top: 0px !important;
}
.modal-favourable-txtin{
  width: 518px;
  margin-left: 12px;
  height: 32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 24px;
  font-weight: 200;
  color: rgb(255, 255, 255);
  line-height: 32px;
}
.modal-about{
  padding: 0 24px;
  padding-bottom: 64px;
  width: 562px;
  margin: 0 auto;
  margin-top: 48px;
  font-size: 24px;
  font-weight: 200;
  color: rgb(255, 255, 255);
  line-height: 48px;
}
.close-icon{
  display: block;
  font-size: 64px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  height: 64px;
  line-height: 64px;
  color: rgba(255,255,255,0.5);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
