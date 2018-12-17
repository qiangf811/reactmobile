import React, { Component } from 'react'
import { Flex, WhiteSpace, WingBlank } from 'antd-mobile'
import Iconbox from './Iconbox'

export default class Service extends Component {
  render () {
    return (
      <WingBlank>
        <WhiteSpace size='xl' />
        <Flex>
          <Flex.Item><Iconbox type='weixin' name='微信开发' desc='最新微信小程序、微信公众号开发，域名、服务器、功能开发到发布全程包揽！' /></Flex.Item>
          <Flex.Item><Iconbox type='yunliankeji-' name='NativeApp' desc='Flutter/ReactNative/Weex跨平台开发高性能原生应用App，安卓、苹果一套代码搞定！' /></Flex.Item>
          <Flex.Item><Iconbox type='iconset0284' name='WebApp' desc='使用HTML5编写的移动Web应用，一个webapp几乎可以不加修改的运行在PC/Android/iOS！' /></Flex.Item>
        </Flex>
        <WhiteSpace size='xl' />
        <Flex>
          <Flex.Item><Iconbox type='HTML' name='企业官网' desc='采用React/Vue打造高性能企业官网定制，首屏渲染速度深度优化，极致体验！' /></Flex.Item>
          <Flex.Item> <Iconbox type='dashbord' name='后台管理' desc='采用ElementUI/AntDesign高性能开发管理后台系统，使用echarts/antv打造高精度数据可视化！' /></Flex.Item>
          <Flex.Item><Iconbox type='desktop' name='桌面应用' desc='采用NW/Electron跨平台开发桌面应用，MacOS、Window一套代码搞定！' /></Flex.Item>
        </Flex>
        <WhiteSpace size='xl' />
      </WingBlank>
    )
  }
}
