// pages/express/express.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chaxun: "查询快递",
    num: null,
    expinfo_list: null
  },
  changeNum: function(e) {
    this.setData({
      num: e.detail.value
    });
  },
  express: function() {
    var that=this;
    wx.request({
      url: 'http://www.kuaidi100.com/query',
      data: {
        type:"yuantong",
        postid: that.data.num
      },
      success: function(res) {
        console.log(res)
        // var data = res.data.data.forecast;
        // that.setData({
        //   expinfo_list: data
        // });
      }
    })
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