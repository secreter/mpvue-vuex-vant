<template>
    <div class="empty-card">
        <image class="empty" :src="image"/>
        <div class="text">{{text}}</div>
    </div>
</template>

<script>
  export default {
    props: {
      image: {
        type: String,
        default: '/static/img/no_orders.png'
      },
      text: {
        type: String,
        default: '暂无相关信息!'
      }
    }
  }
</script>

<style lang="less">
    .empty-card{
        width: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .empty{
            width: 400rpx;
            height: 300rpx;
        }
        .text{
            color: #aaa;
            font-size: 24rpx;
            text-align: center;
            padding-bottom: 30rpx;
        }
    }
</style>