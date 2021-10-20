// pages/waimai/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        focus:false,
        zj:0,
        price1:0,
        price2:0,
        price3:0,
        price4:0,
        price5:0,
    },
    bindzjinput:function(e){
        this.setData({
            zj: e.detail.value
          })
    },
    bindp1input:function(e){
        this.setData({
            price1: e.detail.value
          })
    },
    bindp2input:function(e){
        this.setData({
            price2: e.detail.value
          })
    },
    bindp3input:function(e){
        this.setData({
            price3: e.detail.value
          })
    },
    bindp4input:function(e){
        this.setData({
            price4: e.detail.value
          })
    },
    bindp5input:function(e){
        this.setData({
            price5: e.detail.value
          })
    },
    bindresult:function(){
        var p1=this.data.price1*1
        var p2=this.data.price2*1
        var p3=this.data.price3*1
        var p4=this.data.price4*1
        var p5=this.data.price5*1
        var sum=p1+p2+p3+p4+p5
        var result1=this.data.zj*(p1/sum)
        var result2=this.data.zj*(p2/sum)
        var result3=this.data.zj*(p3/sum)
        var result4=this.data.zj*(p4/sum)
        var result5=this.data.zj*(p5/sum)
       
            
              
        this.setData({
            result1: result1,  
            result2: result2,
            result3: result3,
            result4: result4,
            result5: result5,
            
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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