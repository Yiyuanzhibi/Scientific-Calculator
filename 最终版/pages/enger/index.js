// pages/enger/index.js

Page({

    /**
     * 页面的初始数据
     */
    data: {
           focus:false,
           food:0,
           all:0
          
    },
    bindfoodinput:function(e){
        this.setData({
            food: e.detail.value
          })
    },
    bindallinput:function(e){
        this.setData({
            all: e.detail.value
          })
    },
    bindenger:function(){
        var enger = this.data.food/this.data.all
        var x
        if (enger>0.59) {
            x="贫困";
          } else if (enger>0.5 && enger<=0.59) {
            x="温饱";
          } else if (enger>0.4 && enger<=0.5) {
            x="小康";
          } else if (enger>0.3 && enger<=0.4) {
            x="富裕";
          } else {
            x="最富裕";
          }
        this.setData({
            enger: enger,  
            x:x 
        })
    },
    
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
        
         
    },
    

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})