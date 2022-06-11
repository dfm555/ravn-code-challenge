import Image from 'next/image'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './Icon.module.css'

const iconCollection = {
  angleRight: '/iconCollection/angle-right.svg',
  arrowLeft: '/iconCollection/arrow-left.svg',
  spinner: '/iconCollection/spinner.svg'
}

const Icon = ({ name }) => {
  return name ? (
    <div className={styles.icon}>
      <Image
        className={classNames(styles.icon, {
          [styles['spinner']]: name === 'spinner'
        })}
        src={iconCollection[name]}
        alt={`Icon-${name}`}
        layout="fill"
        priority
      />
    </div>
  ) : (
    <div className={classNames(styles.icon, styles.iconPlaceholder)} />
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(['angleRight', 'arrowLeft', 'spinner']).isRequired
}

export default Icon
