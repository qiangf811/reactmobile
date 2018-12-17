import { TabBar } from 'antd-mobile'
import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import Banner from '../Banner'
import Sevice from '../Sevice'
export default class TabBarExample extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'blueTab',
      hidden: false
    }
  }

  renderContent (pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <span style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault()
            this.setState({
              hidden: !this.state.hidden
            })
          }}>
          Click to show/hide tab-bar</span>
      </div>
    )
  }

  icon (url) {
    return <div style={{
      width: '22px',
      height: '22px',
      background: `url(${url}) center center /  21px 21px no-repeat`
    }} />
  }

  render () {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor='#949494'
          tintColor='#33A3F4'
          barTintColor='white'
          tabBarPosition='bottom'
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={0}>
          <TabBar.Item
            title='主页'
            key='Life'
            icon={this.icon('https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg')}
            selectedIcon={this.icon('https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg')}
            selected={this.state.selectedTab === 'blueTab'}
            badge={1}
            onPress={() => { this.setState({ selectedTab: 'blueTab' }) }}
            data-seed='logId'>
            <Banner />
            <Sevice />
          </TabBar.Item>
          <TabBar.Item
            icon={this.icon('https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg')}
            selectedIcon={this.icon('https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg')}
            title='服务'
            key='Koubei'
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab'
              })
            }}
            data-seed='logId1'
          >
            {this.renderContent('Koubei')}
          </TabBar.Item>
          <TabBar.Item
            icon={this.icon('https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg')}
            selectedIcon={this.icon('https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg')}
            title='技术'
            key='Friend'
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab'
              })
            }}
          >
            {this.renderContent('Friend')}
          </TabBar.Item>
          <TabBar.Item
            icon={this.icon('https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg')}
            selectedIcon={this.icon('https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg')}
            title='设置'
            key='my'
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab'
              })
            }}
          >
            {this.renderContent('My')}
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
