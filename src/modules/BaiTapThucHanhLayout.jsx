import React, { Component } from 'react'
import Header from './header'
import Banner from './banner'
import Item from './item'
import Footer from './footer'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header/>
        <body>
            <Banner/>
            <Item/>
        </body>
        <Footer/>
      </div>
    )
  }
}
