// pages/suan/suan.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenNum: 0, //屏幕显示的数
    currentNum: '', //当前输入的数
    storage: 0, //存储的数
    operator: '', //运算符
    off: false,
  },

  compute: function(e) {
    var btn_num = e.target.dataset.val;
    var obj = this;
    if (!isNaN(btn_num)) {
      if (obj.data.off == true) {
        obj.data.currentNum = ''
        obj.data.off = false;
      }
      obj.data.currentNum += btn_num
      obj.data.currentNum = Number(obj.data.currentNum);
      obj.data.currentNum = obj.data.currentNum.toString();
    } else {
      switch (btn_num) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '=':
          // 将当前屏幕上的数字和本次的操作符存储到变量

          if (obj.data.storage == 0) {
            obj.data.storage = obj.data.currentNum;
            obj.data.operator = btn_num;
          } else {
            if (obj.data.off != true) {
              if (obj.data.operator == '+') {
                obj.data.currentNum = Number(obj.data.storage) + Number(obj.data.currentNum)
              } else if (obj.data.operator == '-') {
                obj.data.currentNum = Number(obj.data.storage) - Number(obj.data.currentNum)
              } else if (obj.data.operator == '*') {
                obj.data.currentNum = Number(obj.data.storage) * Number(obj.data.currentNum)
              } else if (obj.data.operator == '/') {
                obj.data.currentNum = Number(obj.data.storage) / Number(obj.data.currentNum)
              }
            }
            obj.data.storage = obj.data.currentNum;
            obj.data.operator = btn_num;
          }

          obj.data.off = true;
          break;
        case 'clear':
          obj.data.storage = 0;
          obj.data.currentNum = '0';
          obj.data.operator = '';
          break;
        case 'back':
          obj.data.currentNum = obj.data.currentNum.slice(0, -1);
          if (obj.data.currentNum == '') {
            obj.data.currentNum = '0';
          }
          break;
        case '.':
          if (obj.data.currentNum.indexOf('.') == -1) { // 判断是否已包含“.”
            obj.data.currentNum += btn_num
          }
          break;
      }
    }
    obj.setData({
      screenNum: obj.data.currentNum
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