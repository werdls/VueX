<template>
    <div class="goods-info">
        <div class="goods-image">
            <img v-lazy="goodsImage" width="100%" />
        </div>
        <div class="goods-name">{{goodsName}}</div>
        <div class="goods-price">￥{{goodsPrice}}</div>
    </div>
</template>
 
<script>
    export default {

        name: 'goodsInfoComponent',

        props:['goodsImage','goodsName','goodsPrice']
    }
</script>
 
<style scoped>
    .goods-info{
        padding-left:8px;
    }
    .goods-name{
       padding: 0 8px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space:nowrap; 
       font-size: 14px;
       text-align: center;
    }
    .goods-price{
        font-size: 14px;
       text-align: center;
    }
</style>