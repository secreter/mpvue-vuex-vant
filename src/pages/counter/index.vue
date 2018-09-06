<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
    <van-button @click="getTask">请求</van-button>
    <van-badge title="标签名称" info="99" />
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
    ...mapActions({
      getTask: 'getTask' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
