// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chengzhen: '查询天气',
    city: null,
    weatinfo_list: null,
  },
  cityNum: function(e) {
    this.setData({
      city: e.detail.value
    });
  },
  Weathers: function() {
    var that = this;
    var r = that.data.city;
    console.log(r);
    if ((/^[\u4e00-\u9fa5]{2,4}$/.test(that.data.city))) {
      wx.request({
        url: 'https://www.apiopen.top/weatherApi?city=',
        data: {
          city: that.data.city
        },
        success: function(res) {
          var data = res.data.data.forecast;
          console.log(data);
          that.setData({
            weatinfo_list: data,
          });
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
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