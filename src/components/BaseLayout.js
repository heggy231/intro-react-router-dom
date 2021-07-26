import React from 'react'
import Menu from './Menu';

const BaseLayout = (props) => {
  return (
    <>
      <Menu />
      <main>{props.children}</main>
      <footer>BaseLayout Footer</footer>
    </>
  )
}

export default BaseLayout;