var app=getApp()
const { envList } = require('../../envList.js')

Page({
    data: {
      showUploadTip: false,
      powerList: [{
        title: '店内折扣计算',
        tip: '根据不同店铺的不同折扣，给出最后的优惠结果',
        showItem: false,
        item: [{
          title: '进入',
          page: 'dnzk'
        }]
      }, {
        title: '店内满减优惠券计算',
        tip: '根据不同店铺中不同商品的满减优惠券参与情况，给出最后的优惠结果',
        showItem: false,
        item: [{
          title: '进入',
          page: 'dnmjyhq'
        }]
      },{
        title: '跨店满减津贴计算',
        tip: '根据不同店铺参与跨店满减的情况，给出最后的优惠结果',
        showItem: false,
        item: [{
          title: '进入',
          page: 'kdmjjt'
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
          type: 'dnmjyhq'
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
  