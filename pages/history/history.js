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
    mos_list: [{
        day: "6/11",
        date: "1294年06月11日",
        title: "英国哲学家炼金术士罗杰·培根逝世",
        e_id: "6736"
      },
      {
        day: "6/11",
        date: "1862年06月11日",
        title: "京师同文馆成立",
        e_id: "6737"
      },
      {
        day: "6/11",
        date: "1898年06月11日",
        title: "戊戌变法开始",
        e_id: "6738"
      },
      {
        day: "6/11",
        date: "1903年06月11日",
        title: "塞尔维亚国王和王后遇刺身亡",
        e_id: "6739"
      },
      {
        day: "6/11",
        date: "1907年06月11日",
        title: "刘师复谋刺李准",
        e_id: "6740"
      },
      {
        day: "6/11",
        date: "1911年06月11日",
        title: "陈独秀因散发《北京市民宣言》被捕",
        e_id: "6741"
      },
      {
        day: "6/11",
        date: "1915年06月11日",
        title: "中俄蒙签订《恰克图协约》",
        e_id: "6742"
      },
      {
        day: "6/11",
        date: "1919年06月11日",
        title: "徐世昌提出辞职",
        e_id: "6743"
      },
      {
        day: "6/11",
        date: "1924年06月11日",
        title: "日本政党政治开始",
        e_id: "6744"
      },
      {
        day: "6/11",
        date: "1930年06月11日",
        title: "中共政治局通过李立三的激进主义决议案",
        e_id: "6745"
      },
      {
        day: "6/11",
        date: "1937年06月11日",
        title: "“七君子”被控参与发动西安事变",
        e_id: "6746"
      },
      {
        day: "6/11",
        date: "1937年06月11日",
        title: "苏联名将图哈切夫斯基被杀害",
        e_id: "6747"
      },
      {
        day: "6/11",
        date: "1949年06月11日",
        title: "中共抽调大批干部派往南方",
        e_id: "6748"
      },
      {
        day: "6/11",
        date: "1950年06月11日",
        title: "野兽派画家亨利·马蒂斯获威尼斯奖",
        e_id: "6749"
      },
      {
        day: "6/11",
        date: "1963年06月11日",
        title: "中国民主同盟主席沈钧儒逝世",
        e_id: "6750"
      },
      {
        day: "6/11",
        date: "1963年06月11日",
        title: "摩洛哥民族英雄克里姆去世",
        e_id: "6751"
      },
      {
        day: "6/11",
        date: "1979年06月11日",
        title: "日本社会活动家中岛健藏逝世",
        e_id: "6752"
      },
      {
        day: "6/11",
        date: "1979年06月11日",
        title: "美国影星约翰·韦恩去世",
        e_id: "6753"
      },
      {
        day: "6/11",
        date: "1983年06月11日",
        title: "画家李苦禅逝世",
        e_id: "6754"
      },
      {
        day: "6/11",
        date: "1983年06月11日",
        title: "南非黑人团结大会举行",
        e_id: "6755"
      },
      {
        day: "6/11",
        date: "1985年06月11日",
        title: "中国农学家、教育家邹秉文逝世",
        e_id: "6756"
      },
      {
        day: "6/11",
        date: "1990年06月11日",
        title: "江泽民就台湾问题发表重要讲话",
        e_id: "6757"
      },
      {
        day: "6/11",
        date: "1990年06月11日",
        title: "全国统战工作会议在北京召开",
        e_id: "6758"
      },
      {
        day: "6/11",
        date: "2001年06月11日",
        title: "中宣部公布第二批百个爱国主义教育基地",
        e_id: "6759"
      },
      {
        day: "6/11",
        date: "2005年06月11日",
        title: "曾荫权当选香港特首",
        e_id: "6760"
      },
      {
        day: "6/11",
        date: "2006年06月11日",
        title: "航天技术和自动控制专家杨嘉墀逝世",
        e_id: "6761"
      },
      {
        day: "6/11",
        date: "2008年06月11日",
        title: "越南前总理武文杰逝世",
        e_id: "6762"
      },
      {
        day: "6/11",
        date: "2010年06月11日",
        title: "南非世界杯开幕",
        e_id: "6763"
      }
    ],
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