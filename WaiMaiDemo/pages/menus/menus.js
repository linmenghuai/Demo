var util = require('../../common/data.js');
var businessInfo={};
var menus=[];
var types=[];
Page({
  data:{
    // text:"这是一个页面"
    menus:menus,
    businessInfo:businessInfo,
    types:types
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    menus=util.getItemsData();
    businessInfo=util.getStoreData();
    types=util.getTypes();
    this.setData({
        businessInfo:businessInfo,
        menus:menus,
        types:types
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})