import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Text.module.css'

const Text = ({ className, type, level, align, color, weight, text, size }) => {
  const Heading = `h${level}`
  const classnames = classNames(className, styles.text, {
    [`${styles[`text--${color}`]}`]: color,
    [`${styles[`text--${align}`]}`]: align,
    [`${styles[`text--${weight}`]}`]: weight,
    [`${styles[`text--${size}`]}`]: size
  })
  return (
    <>
      {type === 'heading' ? (
        <div className={classnames}>
          <Heading>{text}</Heading>
        </div>
      ) : (
        <p className={classnames}>{text}</p>
      )}
    </>
  )
}

Text.defaultProps = {
  level: 1
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['heading', 'paragraph']),
  size: PropTypes.oneOf(['md', 'lg']),
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  align: PropTypes.oneOf(['right', 'center', 'left']),
  color: PropTypes.oneOf(['black', 'red', 'white']),
  weight: PropTypes.oneOf(['bold', 'normal'])
}

export default Text
