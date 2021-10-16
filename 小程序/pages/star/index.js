// pages/star/index.js
const app = getApp()

// pages/enger/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
         focus:false,
         month:0,
         date:0,
         
        
        
      
      
  },
  
  bindmonthinput:function(e){
      this.setData({
          month: e.detail.value
        })
  },
  binddateinput:function(e){
      this.setData({
          date: e.detail.value
        })
  },
  bindstar:function(){
      var m = this.data.month
      var d = this.data.date
      var star
      var ted
      if (m==1 && d<20) {star="摩羯座", ted="配对星座：金牛座，处女座"}
      else if (m==1 && d>=20) { star="水瓶座", ted="配对星座：双子座，天秤座"}
      else if (m==2 && d<19) { star="水瓶座", ted="配对星座：双子座，天秤座"}
      else if (m==2 && d>=19) { star="双鱼座", ted="配对星座：巨蟹座，天蝎座"}
      else if (m==3 && d<21) { star="双鱼座", ted="配对星座：巨蟹座，天蝎座"}
      else if (m==3 && d>=21) { star="白羊座", ted="配对星座：狮子座，射手座"}
      else if (m==4 && d<20) { star="白羊座", ted="配对星座：狮子座，射手座"}
      else if (m==4 && d>=20) { star="金牛座", ted="配对星座：处女座，摩羯座"}
      else if (m==5 && d<21) { star="金牛座", ted="配对星座：处女座，摩羯座"}
      else if (m==5 && d>=21) { star="双子座", ted="配对星座：天秤座，水瓶座"}
      else if (m==6 && d<22) { star="双子座", ted="配对星座：天秤座，水瓶座"}
      else if (m==6 && d>=22) { star="巨蟹座", ted="配对星座：天蝎座，双鱼座"}
      else if (m==7 && d<23) { star="巨蟹座", ted="配对星座：天蝎座，双鱼座"}
      else if (m==7 && d>=23) { star="狮子座", ted="配对星座：白羊座，射手座"}
      else if (m==8 && d<23) { star="狮子座", ted="配对星座：白羊座，射手座"}
      else if (m==8 && d>=23) { star="处女座", ted="配对星座：金牛座，摩羯座"}
      else if (m==9 && d<23) { star="处女座", ted="配对星座：金牛座，摩羯座"}
      else if (m==9 && d>=23) { star="天秤座", ted="配对星座：双子座，水瓶座"}
      else if (m==10 && d<24) { star="天秤座", ted="配对星座：双子座，水瓶座"}
      else if (m==10 && d>=24) { star="天蝎座", ted="配对星座：巨蟹座，双鱼座"}
      else if (m==11 && d<23) { star="天蝎座", ted="配对星座：巨蟹座，双鱼座"}
      else if (m==11 && d>=23) { star="射手座", ted="配对星座：白羊座，狮子座"}
      else if (m==12 && d<22) { star="射手座", ted="配对星座：白羊座，狮子座"}
      else if (m==12 && d>=22) { star="摩羯座", ted="配对星座：金牛座，处女座"}
      
      
      this.setData({
          star: star, 
          ted: ted, 
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