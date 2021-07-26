import React from 'react'

const BaseLayout = (props) => {
  return (
    <>
      <header>BaseLayout Header</header>
      <main>{props.children}</main>
      <footer>BaseLayout Footer</footer>
    </>
  )
}

export default BaseLayout;