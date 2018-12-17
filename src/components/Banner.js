import React, { Component } from 'react'

import { Carousel, WingBlank } from 'antd-mobile'

export default class Banner extends Component {
    state = {
      data: ['1', '2', '3'],
      imgHeight: 176
    }
    componentDidMount () {
      // simulate img loading
      setTimeout(() => {
        this.setState({
          data: ['http://www.fengleaf.cn/static/media/office.972a44ad.webp', 'http://www.fengleaf.cn/static/media/brainstorming.8165f525.webp']
        })
      }, 100)
    }
    render () {
      return (
        <WingBlank>
          <Carousel
            autoplay
            infinite
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href='http://www.alipay.com'
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  src={val}
                  alt=''
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'))
                    this.setState({ imgHeight: 'auto' })
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      )
    }
}
