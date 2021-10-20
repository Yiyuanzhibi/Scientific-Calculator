// pages/dnmjyhq/index.js
Page({

  /**
   * 页面的初始数据
   */
  
  
    data: {
      focus:false,
         yhq:0,
         deep:0,
         price1:0,
         price2:0,
         price3:0,
         price4:0,
         price5:0,
    },
    bindyhqinput:function(e){
      this.setData({
          yhq: e.detail.value
        })
  },
  binddeepinput:function(e){
      this.setData({
          deep: e.detail.value
        })
  },
  bindpriceinput1:function(e){
    
    this.setData({
      price1: e.detail.value
    })
  },
  bindpriceinput2:function(e){
    
    this.setData({
      price2: e.detail.value
    })
  },
  bindpriceinput3:function(e){
    
    this.setData({
      price3: e.detail.value
    })
  },
  bindpriceinput4:function(e){
    
    this.setData({
      price4: e.detail.value
    })
  },
  bindpriceinput5:function(e){
    
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
    var sum = p1*1+p2*1+p3*1+p4*1+p5*1
    var deep = this.data.deep
    var yhq = this.data.yhq
    var jt = 0
    jt = Math.floor(sum/yhq)*deep
    console.log(jt)
    var cut1=jt*(p1/sum)
    var cut2=jt*(p2/sum)
    var cut3=jt*(p3/sum)
    var cut4=jt*(p4/sum)
    var cut5=jt*(p5/sum)
    var result1=0
    var result2=0
    var result3=0
    var result4=0
    var result5=0
    var result6=0
        if(sum>=this.data.yhq){
  result1=cut1
  result2=cut2
  result3=cut3
  result4=cut4
  result5=cut5
  result6=sum-jt
}
        else{
          result1="消费金额不足，无法获得优惠"
          result2="消费金额不足，无法获得优惠"
          result3="消费金额不足，无法获得优惠"
          result4="消费金额不足，无法获得优惠"
          result5="消费金额不足，无法获得优惠"
          result6=sum

        }
          
    this.setData({
        result1: result1,  
        result2: result2,
        result3: result3,
        result4: result4,
        result5: result5,
        result6: result6,
    })
},
    

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

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