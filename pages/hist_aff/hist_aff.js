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

// pages/hist_aff/hist_aff.wxss 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mou: "1",
    setmou: true,
    day: "1",
    setday: true,
    time: "",
    mos_list: "",
    reser: "倒叙查看",
    paixu: "../../images/daoxu.png",
    revers: false
  },
  //倒叙
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
  //时间事件
  goodmou: function(e) {
    var that = this;
    if ((/^(0?[1-9]|1[0-2])$/.test(e.detail.value))) {
      that.setData({
        mou: e.detail.value,
        setmou: true
      })
    } else {
      that.setData({
        setmou: false
      })
    };
  },
  goodday: function(e) {
    var that = this;
    if ((/^((0?[1-9])|((1|2)[0-9])|30|31)$/.test(e.detail.value))) {
      that.setData({
        day: e.detail.value,
        setday: true
      })
    } else {
      that.setData({
        setday: false
      })
    };
  },
  clickButton: function() {
    var that = this;
    var time = "时间:" + that.data.mou + "月" + that.data.day + "日";
    var times = that.data.mou + "/" + that.data.day;
    var settime = Y + that.data.mou + that.data.day;
    let setsday = that.data.setday;
    let setsmou = that.data.setmou;
    if ((/(^(?:(?:1[6-9]|[2-9][0-9])[0-9]{2}([-/.]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:(?:1[6-9]|[2-9][0-9])(?:0[48]|[2468][048]|[13579][26])|(?:16|[2468][048]|[3579][26])00)([-/.]?)0?2\2(?:29))$)/.test(settime))) {
      console.log(setsday, setsmou)
      if (setsday == true) {
        if (setsmou == true) {
          wx.request({
            url: 'https://v.juhe.cn/todayOnhistory/queryEvent.php',
            data: {
              key: "bd75b79fb23ca35fbe028c028525c0e0",
              date: times
            },
            method: "get",
            success: function(res) {
              that.setData({
                setmou: false,
                setday: false,
                time: time,
                mos_list: res.data.result
              })
            }
          })
          that.setData({
            time: time
          })
        } else {
          console.log("233")
        };
      } else {
        console.log("fuck,you")
      };
    } else {
      console.log("no");
    };
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var time = "时间:" + M + "月" + D + "日";
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