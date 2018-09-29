var app;

function requestNet(par) {
  if (!app)
    app = getApp();
  wx.getStorage({
    key: 'openId',
    success: function(res) {
      var openId = "";
      if (res.data && res.data.openId)
        openId = res.data.openId;
      startReq(par, openId);
    },
    fail: function() {
      startReq(par, "");
    }
  });
}
