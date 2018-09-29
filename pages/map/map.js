// pages/map/map.js
// var requetNet = require('./request.js');

Page({
  data: {
    companyMessage: [],
    latitude: 0,
    longitude: 0,
    markers: [{
      latitude: 0,
      longitude: 0,
      width: 17,
      height: 35
    }],
    form_info: []
  },
  
  toMap: function () {
    var companyMessage = this.data.companyMessage;
    wx.openLocation({
      latitude: Number(companyMessage.addressLatitude),
      longitude: Number(companyMessage.addressLongitude),
      name: companyMessage.addressInfo,
      scale: 15
    });
  }
})