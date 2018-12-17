import React, { Component } from 'react'
// import { Icon } from 'antd-mobile'
// import CustomIcon from '../components/CustomIcon'

class Iconbox extends Component {
  // eslint-disable-next-line
  constructor(){
    super()
  }
  render () {
    return (
      <div style={styles['iconbox-wrapper']}>
        <i className={`iconfont icon-${this.props.type}`} style={{ fontSize: '40px', color: 'rgb(148, 148, 148)' }} />
        <div style={styles.skills}>{this.props.name}</div>
      </div>
    )
  }
}

const styles = {
  'iconbox-wrapper': {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  skills: {
    // margin: '10px',
    fontWeight: 'bold'
    // marginTop: '20px'
  },
  description: {
    width: '100%'
  }
}

export default Iconbox
