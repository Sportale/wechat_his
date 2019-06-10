var timestamp = Date.parse(new Date());
//返回当前时间毫秒数
timestamp = timestamp / 1000;
//获取当前时间
var n = timestamp * 1000;
var date = new Date(n);
//年
var Y = date.getFullYear();
//月
var M = (date.getMonth() + 1);
var Ms = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
//日
var D = date.getDate()
var Ds = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
//时
var h = date.getHours();
//分
var m = date.getMinutes();
//秒
var s = date.getSeconds();

//  pages/history/history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: "",
    add: "查看更多>",
    mos_list: "",
    reser: "倒叙查看",
    paixu: "../../images/daoxu.png",
    revers: false
  },
  rese: function() {
    var that = this;
    var data = that.data.mos_list,
      paixu = that.data.paixu,
      revers = that.data.revers;
    if (revers) {
      var revers = false,
        reser = "倒叙查看",
        paixu = "../../images/daoxu.png";
    } else {
      var revers = true,
        reser = "正叙查看",
        paixu = "../../images/zhengxu.png";
    };
    that.setData({
      revers: revers,
      reser: reser,
      paixu: paixu,
      mos_list: data.reverse()
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var time = "今天是" + Y + "年" + M + "月" + D + "日"
    var times = M + "/" + D;
    wx.request({
      url: 'https://v.juhe.cn/todayOnhistory/queryEvent.php',
      data: {
        key: "bd75b79fb23ca35fbe028c028525c0e0",
        date: times
      },
      method: "get",
      success: function(res) {
        that.setData({
          time: time,
          mos_list: res.data.result
        })
      }
    })
    that.setData({
      time: time
    })
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