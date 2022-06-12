import Head from 'next/head'
import PropTypes from 'prop-types'

import Header from './Header'

import style from './Layout.module.css'

const Layout = ({ headerTitle, hasArrowLeft, children }) => {
  return (
    <>
      <Head>
        <title>ravn-code-challenge</title>
      </Head>
      <div className={style.layout}>
        <Header
          className={style.layout__header}
          title={headerTitle}
          hasArrowLeft={hasArrowLeft}
        />
        <main className={style.layout__content}>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  headerTitle: PropTypes.element,
  children: PropTypes.node.isRequired,
  hasArrowLeft: PropTypes.bool
}

export default Layout
