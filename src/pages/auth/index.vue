<template>
  <div v-if="isNeedAuth" class="container">
    <div class="header">
      <image class="img" src="/static/img/user/login.png"/>
      <!--<div class="title">-->
        <!--Sign In-->
      <!--</div>-->
    </div>
    <div class="body">
      <div class="tips">请完成微信授权以继续使用</div>
      <button
        type="primary"
        open-type="getUserInfo"
        @getuserinfo="getUserInfo"
        :loading="loading">授权微信用户信息</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      loading: false,
      isNeedAuth: false
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    }),
    ...mapGetters(['isAuthUserInfo'])
  },
  methods: {
    ...mapActions({
      getSessionToken: 'getSessionToken',
      getServerUserInfo: 'getUserInfo',
      putUserInfo: 'putUserInfo'
    }),
    getUserInfo (e) {
      this.loading = true
      this.putUserInfo(e.target.userInfo)
        .then(() => {
          this.loading = false
          wx.switchTab({
            url: '/pages/index/main'
          })
        })
        .catch(e => {
          console.error(e)
        })
    }
  },
  onLoad () {

  },
  onShow () {
    this.getSessionToken()
      .then((result) => {
        return this.getServerUserInfo(result.uid)
      })
      .then((res) => {
        if (this.isAuthUserInfo) {
          wx.switchTab({
            url: '/pages/index/main'
          })
        } else {
          this.isNeedAuth = true
          wx.setNavigationBarTitle({
            title: '登录'
          })
        }
      })
      .catch(e => {
        console.log(e)
      })
  }
}
</script>

<style lang="less">
  @import "../../theme";
  /*div,span,image{*/
    /*border: solid 1rpx ;*/
  /*}*/
  page{
    background: #fff;
  }
.container {
  background: #fff;
  .header{
    height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .title{
      text-align: center;
      color: #666;
      font-size: 60rpx;
      font-weight: bold;
    }
    .img{
      width: 500rpx;
      height: 406rpx;
    }
  }
  .body{
    margin: 0 8vw;
    .tips{
      text-align: center;
      margin: 20rpx;
      font-size: 24rpx;
      color: #2d8cf0;
    }
  }
}

</style>
