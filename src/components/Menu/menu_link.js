import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../reducer/index'

class MenuLink extends Component {
    menuList = {
      home: { title: 'Home', url: '/', description: 'CONNECTING DOTS' },
      about: { title: 'About', url: '/about', description: 'WHO I AM'},
      study: { title: 'Study', url: '/study', description: 'WHAT I\'ve DONE' }
    }

    render() {
      return (
        <li 
          key={this.menuList[this.props.linkName].title}
          onClick={()=>{
            this.props.selectMenu(this.menuList[this.props.linkName].title)
            this.props.menuBtn? this.props.menuBtn() :''
          }}
          className="global-menu__link"
        >
          <Link to={this.menuList[this.props.linkName].url}>
            <span>{this.menuList[this.props.linkName].title}</span>
            <span>{this.menuList[this.props.linkName].description}</span>
          </Link>
        </li>
      )
    }   
    }

function mapStateToProps(state) {
  return {
    windowMenuState: state.windowMenuState,
    menuState: state.menuState }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleWindowMenu: bindActionCreators(actionCreators.toggleWindowMenu, dispatch),
    selectMenu: bindActionCreators(actionCreators.selectMenu, dispatch),
    navigateDirection: bindActionCreators(actionCreators.navigateDirection, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuLink)