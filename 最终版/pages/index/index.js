// index.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    showUploadTip: false,
    powerList: [{
      title: '双十一优惠计算',
      tip: '省钱多少，一目了然',
      showItem: false,
      item: [{
        title: '进入',
        page: 'double11'
      }]
    }, 
    {
      title: '外卖分账',
      tip: '让你拼单不发愁',
      showItem: false,
      item: [{
        title: '进入',
        page: 'waimai'
      }]
    },
    {
      title: '科学计算器',
      tip: '实现简单的四则基本运算',
      showItem: false,
      item: [{
        title: '进入',
        page: 'scientificcalculator'
      }]
    },{
      title: '恩格尔系数计算',
      tip: '你的生活够高质量吗？',
      showItem: false,
      item: [{
        title: '进入',
        page: 'enger'
      }]
    },
    {
      title: '日期转换器',
      tip: '你知道距离未来有多少天吗？',
      showItem: false,
      item: [{
        title: '进入',
        page: 'date'
      }]
    },
    {
      title: '星座匹配',
      tip: '快来测测你的星座吧！',
      showItem: false,
      item: [{
        title: '进入',
        page: 'star'
      }]
    }
  ],
    
    envList,
    selectedEnv: envList[0],
    haveCreateCollection: false
  },

  onClickPowerInfo(e) {
    const index = e.currentTarget.dataset.index
    const powerList = this.data.powerList
    powerList[index].showItem = !powerList[index].showItem
    if (powerList[index].title === '数据库' && !this.data.haveCreateCollection) {
      this.onClickDatabase(powerList)
    } else {
      this.setData({
        powerList
      })
    }
  },

  onChangeShowEnvChoose() {
    wx.showActionSheet({
      itemList: this.data.envList.map(i => i.alias),
      success: (res) => {
        this.onChangeSelectedEnv(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },

  onChangeSelectedEnv(index) {
    if (this.data.selectedEnv.envId === this.data.envList[index].envId) {
      return
    }
    const powerList = this.data.powerList
    powerList.forEach(i => {
      i.showItem = false
    })
    this.setData({
      selectedEnv: this.data.envList[index],
      powerList,
      haveCreateCollection: false
    })
  },

  jumpPage(e) {
    wx.navigateTo({
      url: `/pages/${e.currentTarget.dataset.page}/index?envId=${this.data.selectedEnv.envId}`,
    })
  },

  onClickDatabase(powerList) {
    wx.showLoading({
      title: '',
    })
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.selectedEnv.envId
      },
      data: {
        type: 'scientificcalculator'
      }
    }).then((resp) => {
      if (resp.result.success) {
        this.setData({
          haveCreateCollection: true
        })
      }
      this.setData({
        powerList
      })
      wx.hideLoading()
    }).catch((e) => {
      console.log(e)
      this.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    })
  }
})
