import React from 'react'
import PropTypes from 'prop-types'

import Text from 'components/Text'

import styles from './Error.module.css'

const Error = ({ text }) => {
  return (
    <div className={styles.error}>
      <Text
        weight={'bold'}
        size={'lg'}
        text={text}
        color={'red'}
        align={'center'}
      />
    </div>
  )
}

Error.propTypes = {
  text: PropTypes.string.isRequired
}

export default Error
