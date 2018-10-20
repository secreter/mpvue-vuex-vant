<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  },
  onLaunch () {
    wx.getNetworkType({
      success (res) {
        if (res.networkType === 'none') {
          wx.showToast({
            icon: 'none',
            duration: 3000,
            title: '网络连接已断开，请重新连接网络！'
          })
        }
      }
    })
    wx.onNetworkStatusChange((res) => {
      if (res.isConnected) {
        this.init()
        wx.showToast({
          icon: 'none',
          duration: 2000,
          title: '网络已恢复！'
        })
      } else {
        wx.showToast({
          icon: 'none',
          duration: 3000,
          title: '网络连接已断开，请重新连接网络！'
        })
      }
    })
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
