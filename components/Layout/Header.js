import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title, className }) => {
  return <header className={className}>{title}</header>
}

Header.propTypes = {
  title: PropTypes.element,
  className: PropTypes.string
}

export default Header
