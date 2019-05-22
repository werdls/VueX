<template>
    <div>
       <!--search-bar area--> 
       <div class="search-bar">
           <van-row>
               <van-col span="3"><img :src="locationIcon" width="80%" class="location-icon"></van-col>
               <van-col span="16">
                   <input type="text" class="search-input" placeholder=" 搜索 ：新鲜水果、食品饮料" >
               </van-col>
               <van-col span="5">
                   <van-button size="mini">查找</van-button>
               </van-col>
           </van-row>
       </div>

       <!--swiper-area-->
       <div class="swiper-area">
           <van-swipe :autoplay="3000">
               <van-swipe-item v-for="(item,index) in bannerPicArray" :key="index">
                   <img v-lazy="item.imageUrl" class="area">
               </van-swipe-item>
           </van-swipe>

           <!--type bar-->
           <!-- <div class="type-bar" v-for="(item,index) in category" :key="index">
                <div >
                    <img src="item.imageUrl" width="80%">
                    <span>{{item.categoryName}}</span>
                </div>
            </div> -->
        <div class="type-bar">
            <div >
                <img src="../assets/images/category/category_1.png" width="80%">
                <span>新鲜水果</span>
            </div>
            <div >
                <img src="../assets/images/category/category_2.png" width="80%">
                <span>中外名酒</span>
            </div>
            <div >
                <img src="../assets/images/category/category_3.png" width="80%">
                <span>营养奶品</span>
            </div>
            <div >
                <img src="../assets/images/category/category_4.png" width="80%">
                <span>食品饮料</span>
            </div>
            <div >
                <img src="../assets/images/category/category_5.png" width="80%">
                <span>个人护理</span>
            </div>
        </div>
       </div>
       
      <!-- advertise -->
      <div>
        <img v-lazy="adBanner" width="100%">
      </div>
      <!--商品推荐区域-->
      <div class="recommend-area">
          <div class="recommend-title">
              商品推荐
          </div>
          <div class="recommend-body">
              <swiper :options="swiperOption">
                  <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
                      <div class="recommend-item">
                          <img :src="item.image" width="80%">
                          <div>{{item.goodsName}}</div>
                          <div>￥{{item.price}}</div>
                      </div>
                  </swiper-slide>
              </swiper>
          </div>
      </div>
     <!--floor one area-->
      
    <floor-Component :floorData="floor1" :floorTitle="floorName.floor1"></floor-Component>
    <floor-Component :floorData="floor2" :floorTitle="floorName.floor2"></floor-Component>
    <floor-Component :floorData="floor3" :floorTitle="floorName.floor3"></floor-Component>
     <!--Hot Area-->
    <div class="hot-area">
         <div class="hot-title">热卖商品</div>
         <div class="hot-goods">
           <van-list>
             <van-row gutter="20">
                <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
                  <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
             </van-col>
             </van-row>
             </van-list>
         </div>
         </div>
     </div>
     
</template>

<script>
import axios from "axios"
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import floorComponent from '../components/floorComponent'
import goodsInfo from '../components/goodsInfoComponent'

    export default {
       data() {
           return {
             
              locationIcon: require("../assets/images/location.png"),
            //   category:[
            //       {
            //           imageUrl:require("../assets/images/category/category_1.png"),
            //           categoryName:"新鲜水果"
            //       },
            //       {
            //           imageUrl:require("../assets/images/category/category_2.png"),
            //           categoryName:"中外名酒"
            //       },
            //       {
            //           imageUrl:require("../assets/images/category/category_3.png"),
            //           categoryName:"营养奶品"
            //       },
            //       {
            //           imageUrl:require("../assets/images/category/category_4.png"),
            //           categoryName:"食品饮料"
            //       },
            //       {
            //           imageUrl:require("../assets/images/category/category_5.png"),
            //           categoryName:"个人护理"
            //       },
                  
            //   ],
              bannerPicArray:[
                  {imageUrl: require("../assets/images/slides/slide_1.jpg")},
                  {imageUrl: require("../assets/images/slides/slide_2.jpg")},
                  {imageUrl: require("../assets/images/slides/slide_3.jpg")},
                  {imageUrl: require("../assets/images/slides/banner1.jpg")},
                  {imageUrl: require("../assets/images/slides/banner2.jpg")},
                  {imageUrl: require("../assets/images/slides/banner3.jpg")},
                  {imageUrl: require("../assets/images/slides/banner4.jpg")},
                  {imageUrl: require("../assets/images/slides/banner5.jpg")},
                  {imageUrl: require("../assets/images/slides/banner6.jpg")},
                  {imageUrl: require("../assets/images/slides/banner7.jpg")}                 
              ],
              
              hotGoods:[],
              swiperOption:{
                  slidesPerView:3, //每个页面显示多少项
                  autoplay:true,
                  speed:400,
                  loop:true
              },
              adBanner:require("../assets/images/ad/ad.gif"),
              recommendGoods:[],
              floor1:[],
              floor2:[],
              floor3:[],
              floorName:{},
              floor1_0:{},
              floor1_1:{},
              floor1_2:{},
              floor1_3:{},
              myactive:0
           }
       },
       created(){
            axios({
                url: 'https://www.easy-mock.com/mock/5b236c8db541690d6ed33a5c/smileShopping/smileShopping_copy_1529048371387',
                method: 'get',
            })
            .then(response => {
                console.log(response);
                if(response.status == 200){
                   this.recommendGoods = response.data.data.recommend;  //推荐商品
                   this.floor1 = response.data.data.floor1 ;   //楼层1数据
                   this.floor2 = response.data.data.floor2 ;  
                   this.floor3 = response.data.data.floor3 ; 
                   this.floorName = response.data.data.floorName;           
                   this.floor1_0 =this.floor1[0];
                   this.floor1_1 =this.floor1[1];
                   this.floor1_2 =this.floor1[2];
                   this.floor1_3 =this.floor1[3];
                   this.hotGoods = response.data.data.hotGoods;
                   
                }
            })
            .catch((error) => {   
              
            })
         },
         components: {
            swiper,
            swiperSlide,
            goodsInfo,
            floorComponent
        },
    }
</script>

<style lang="less" scoped>
.search-bar{
    height: 1.533rem;
    line-height: 1.533rem;
    background-color: #e5017d;
    overflow: hidden;
    position:fixed;
    z-index: 100;
    opacity: 0.6;
}
.location-icon{
    padding-top: 0.2rem;
    padding-left: 0.3rem;
}
.search-input{
    width: 100%;
    height: 1.3rem;
    border-top:0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #fff !important;
    background-color: #e5017d;
    color: #fff;
}
input::-webkit-input-placeholder {
       /* placeholder颜色  */
       color: #fff;
       /* placeholder字体大小  */
       font-size: 14px;
       
       padding-left:0.3rem; 
    }

.swiper-area{
    clear: both;
    max-height: 9rem;
    overflow: hidden;
    padding-top: 1.52rem;
}
.area{
    width: 100%;
    height: 4.730rem;
}

.type-bar{
   display: flex;
   font-size: 14px;
   flex-direction: row;
   background-color: #fff;
   margin: 0 0.3rem 0.3rem 0.3rem;
   flex-wrap: nowrap;
   border-radius: 0.3rem;
}

.type-bar div{
    text-align: center;
    padding: 0.3rem;
    font-size: 12px;
    width: 48px;

}
.recommend-area{
    background-color: #fff;
    margin-top: .3rem;
    overflow-x: auto;
}
.recommend-title{
    font-size: 14px;
    color: #300fe9;
    padding: .2rem;
    border-bottom: 1px solid #eee;
}
.recommend-body{
    border-bottom: 1px solid #eee;
}
.recommend-item{
    width: 99%;
    font-size: 12px;
    text-align: center;
    border-right: 1px solid #eee;
}
.hot-area{
    width:97%;
}
.hot-title{
    font-size: 16px;
    color: #300fe9;
    padding: .2rem;
    text-align: center;
    border-bottom: 1px solid #eee;
}
</style>