// pages/whatff/whatff.js

Page({
  sortRule: true,
  data: {
    arr: [{
        id: '1',
        name: '一',
        age: '12'
      },
      {
        id: '5',
        name: '五',
        age: '24'
      },
      {
        id: '3',
        name: '三',
        age: '28'
      },
      {
        id: '4',
        name: '四',
        age: '18'
      },
      {
        id: '2',
        name: '二',
        age: '36'
      },
    ],
  },
  mySort: function(e) {
    //property 根据什么排序
    var property = e.currentTarget.dataset.property;
    var self = this;
    var arr = self.data.arr; 
    var sortRule = self.sortRule; // 正序倒序
    if (sortRule) {
      self.sortRule = false;
    } else {
      self.sortRule = true;
    };
    self.setData({
      arr: arr.sort(self.compare(property, sortRule))
    })
    console.log(arr)
  },
  compare: function(property, bol) {
    console.log(property, bol)
    return function(a, b) {
      var value1 = a[property];
      var value2 = b[property];
      if (bol) {
        return value1 - value2;
        console.log(value1 - value2)
      } else {
        return value2 - value1;
        console.log(value2 - value1)
      }
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