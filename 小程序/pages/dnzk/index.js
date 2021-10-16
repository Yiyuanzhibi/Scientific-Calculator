// pages/dnzk/index.js


Page({

    /**
     * 页面的初始数据
     */
    
    
      data: {
        focus:false,
           discount:0,
           pieces:0,
           price1:0,
           price2:0,
           price3:0,
           price4:0,
           price5:0,
      },
      
      binddiscountinput:function(e){
        this.setData({
            discount: e.detail.value
          })
    },
    bindpiecesinput:function(e){
        this.setData({
            pieces: e.detail.value
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
      var p1=this.data.price1
      var p2=this.data.price2
      var p3=this.data.price3
      var p4=this.data.price4
      var p5=this.data.price5
      var sum = p1*1+p2*1+p3*1+p4*1+p5*1
      var cut=sum-sum*this.data.discount
      var discountvalue=sum*this.data.discount
      var result1=0
      var result2=0
        switch(this.data.pieces)
{
case "1" :
  {
    if(p1!=0){
      result1=this.cut
      result2=this.discountvalue
    }
    else{
      result1="购买件数不足，不能获得优惠"
      result2=sum
    }
    console.log(result1)
    break
  }
  case "2":
    {
      if(p2!=0){
     result1=cut
     result2=discountvalue
      }
      else{
        result1="购买件数不足，不能获得优惠"
        result2=sum
      }
      break
    } 
    case "3":
    {
      if(p3!=0){
       result1=cut
       result2=discountvalue
      }
      else{
        result1="购买件数不足，不能获得优惠"
        result2=sum
      }
      break
    } 
    case "4":
    {
      if(p4!=0){
       result1=cut
       result2=discountvalue
      }
      else{
        result1="购买件数不足，不能获得优惠"
        result2=sum
      }
      break
    } 
    case "5":
    {
      if(p5!=0){
       result1=cut
       result2=discountvalue
      }
      else{
        result1="购买件数不足，不能获得优惠"
        result2=sum
      }
      break
    } 
    default:
      result1="购买件数不足，不能获得优惠"
      result2=sum
}
      

          
      this.setData({
          result1: result1,  
          result2: result2,
          sum: sum,
          cut: cut,
          discountvalue: discountvalue
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