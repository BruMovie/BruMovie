var qcloud = require('../../vendor/wafer2-client-sdk/index')
// pages/demo/demo.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  login: function () {
    if (this.data.logged) return
    console.log('loging')
    util.showBusy('正在登录')
    var that = this

    // 调用登录接口
    qcloud.login({
      success(result) {
        if (result) {
          util.showSuccess('登录成功')
          that.setData({
            userInfo: result,
            logged: true
          })
          app.globalData.userInfo = result
        } else {
          // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
          qcloud.request({
            url: config.service.requestUrl,
            login: true,
            success(result) {
              util.showSuccess('登录成功')
              that.setData({
                userInfo: result.data.data,
                logged: true
              })
            },

            fail(error) {
              util.showModel('请求失败', error)
              console.log('request fail', error)
            }
          })
        }
      },

      fail(error) {
        util.showModel('登录失败', error)
        console.log('登录失败', error)
      }
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
    
  },

  click: function() {
    
    wx.request({
      // url: 'https://k3d2hspl.qcloud.la/weapp/province',
      // url: 'https://k3d2hspl.qcloud.la/weapp/city?provinceId=44',
      // url: 'https://k3d2hspl.qcloud.la/weapp/block?provinceId=44&cityId=1',
      // url: 'https://k3d2hspl.qcloud.la/weapp/cinema?provinceId=44&cityId=1&blockId=13',
      // url: 'https://k3d2hspl.qcloud.la/weapp/movie?cinemaId=0',
      // url: 'https://k3d2hspl.qcloud.la/weapp/movie',
      // url: 'https://k3d2hspl.qcloud.la/weapp/movie?movieId=0',
      // url: 'https://k3d2hspl.qcloud.la/weapp/screening?movieId=0&cinemaId=0',
      // url: 'https://k3d2hspl.qcloud.la/weapp/seat?movieId=0&cinemaId=0&screeningId=0',
      url: 'https://k3d2hspl.qcloud.la/weapp/item?cinemaId=0',

      success(result) {
        wx.cc = result.data
        console.log(result.data)
      }
    })
    
    
    // // 添加location的post请求
    // wx.request({
    //   url: 'https://k3d2hspl.qcloud.la/weapp/location',
    //   method: 'POST',
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     skey: wx.getStorageSync('weapp_session_' + 'F2C224D4-2BCE-4C64-AF9F-A6D872000D1A'),
    //     provinceId: 44,
    //     cityId: 1,
    //     blockId: 13,
    //     streetName: '小谷围街道',
    //     doorName: '中山大学东校区'
    //   },
    //   success(result) {
    //     wx.pc = result.data
    //     console.log(result.data.data)
    //   }
    // })
    

    // // 创建订单的post请求
    // wx.request({
    //   url: 'https://k3d2hspl.qcloud.la/weapp/order',
    //   method: 'POST',
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     skey: wx.getStorageSync('weapp_session_' + 'F2C224D4-2BCE-4C64-AF9F-A6D872000D1A'),
    //     price: 100,
    //     note: 'test',
    //     tickets: JSON.stringify([{ ticket_id: 0 }, { ticket_id: 1 }]),
    //     items: JSON.stringify([{ item_id: 0 }, { item_id: 1 }]),
    //   },
    //   success(result) {
    //     wx.pc = result.data
    //     console.log(result.data.data)
    //   }
    // })

   
    // //获取order的post请求
    // wx.request({
    //   url: 'https://k3d2hspl.qcloud.la/weapp/getOrder',
    //   method: 'POST',
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     skey: wx.getStorageSync('weapp_session_' + 'F2C224D4-2BCE-4C64-AF9F-A6D872000D1A')
    //   },
    //   success(result) {
    //     wx.pc = result.data
    //     console.log(result.data.data)
    //   }
    // })
    
   
    // //删除order的post请求
    // wx.request({
    //   url: 'https://k3d2hspl.qcloud.la/weapp/delOrder',
    //   method: 'POST',
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     skey: wx.getStorageSync('weapp_session_' + 'F2C224D4-2BCE-4C64-AF9F-A6D872000D1A'),
    //     order_id: 0
    //   },
    //   success(result) {
    //     wx.pc = result.data
    //     console.log(result.data.data)
    //   }
    // })
    

    // //锁定ticket
    // wx.request({
    //   url: 'https://k3d2hspl.qcloud.la/weapp/createTicket',
    //   method: 'POST',
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     skey: wx.getStorageSync('weapp_session_' + 'F2C224D4-2BCE-4C64-AF9F-A6D872000D1A'),
    //     cinemaId: 0,
    //     movieId: 0,
    //     screeningId: 0,
    //     roomId: 1,
    //     col: 0,
    //     row: 1,
    //     price: 100
    //   },
    //   success(result) {
    //     wx.pc = result.data
    //     console.log(result.data.data)
    //   }
    // })

    //取消锁定票
    wx.request({
      url: 'https://k3d2hspl.qcloud.la/weapp/cancelTicket',
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        skey: wx.getStorageSync('weapp_session_' + 'F2C224D4-2BCE-4C64-AF9F-A6D872000D1A'),
        ticketId: 0
      },
      success(result) {
        wx.pc = result.data
        console.log(result.data.data)
      }
    })

    // //获取一个订单中的票
    // wx.request({
    //   url: 'https://k3d2hspl.qcloud.la/weapp/ticket',
    //   method: 'POST',
    //   header: {
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     skey: wx.getStorageSync('weapp_session_' + 'F2C224D4-2BCE-4C64-AF9F-A6D872000D1A'),
    //     orderId: 11
    //   },
    //   success(result) {
    //     wx.pc = result.data
    //     console.log(result.data.data)
    //   }
    // })
  }
})