// pages/123/123.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    didian: '查询天气',
    city:null,
    info_list: null
  },
  changeNum: function(e) {
    this.setData({
      city: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  TianQi: function() {
    var that=this;
    wx.request({
      url: 'https://www.apiopen.top/weatherApi',
      data: {
        city: that.data.city
      },
      success: function(res) {
        console.log(res)
        var data = res.data.data.forecast;
        that.setData({
          info_list: data
        });
      }
    })
  },
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})