function saveImage (src) {
  wx.showLoading({
    title: '保存中'
  })
  wx.getImageInfo({
    src,
    success: function (ret) {
      let path = ret.path
      wx.saveImageToPhotosAlbum({
        filePath: path,
        success (result) {
          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 1500
          })
        },
        fail (e) {
          wx.showToast({
            title: '保存失败',
            icon: 'none',
            duration: 2000
          })
          console.error(e)
        },
        complete () {
          // wx.hideLoading()
        }
      })
    }
  })
}

function setClipboard (str) {
  wx.setClipboardData({
    data:str,
    success(){
      wx.showToast({
        title: '已复制到剪切板！',
        icon: 'none',
        duration: 1200
      })
    },
    fail(){
      wx.showToast({
        title: '复制失败！',
        icon: 'none',
        duration: 1200
      })
    }
  })
}
export default {
  saveImage,
  setClipboard
}