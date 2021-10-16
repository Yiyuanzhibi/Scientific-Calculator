// pages/date/index.js
var app=getApp()
const { envList } = require('../../envList.js')

Page({
    data: {
      showUploadTip: false,
      powerList: [{
        title: '保质期',
        tip: '计算商品的保质期天数',
        showItem: false,
        item: [{
          title: '进入',
          page: 'bzq'
        }]
      }, {
        title: '倒数日',
        tip: '距离___还有多少天？',
        showItem: false,
        item: [{
          title: '进入',
          page: 'dsr'
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
          type: 'dsr'
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
  