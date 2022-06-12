import Link from 'next/link'
import PropTypes from 'prop-types'

import Icon from 'components/Icon'

const arrowLeftStyles = { position: 'absolute' }

const Header = ({ title, className, hasArrowLeft }) => {
  return (
    <header className={className}>
      {hasArrowLeft && (
        <div style={arrowLeftStyles}>
          <Link href="/">
            <a>
              <Icon name={'arrowLeft'} />
            </a>
          </Link>
        </div>
      )}
      {title}
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.element,
  className: PropTypes.string,
  hasArrowLeft: PropTypes.bool
}

export default Header
