import PropTypes from 'prop-types'

import Icon from 'components/Icon'
import Text from 'components/Text'

import styles from './Loading.module.css'

const Loading = ({ text }) => {
  return (
    <div className={styles.loading}>
      <Icon name={'spinner'} />
      <Text
        className={styles.loading__text}
        text={text}
        size={'lg'}
        weight={'bold'}
      />
    </div>
  )
}

Loading.propTypes = {
  text: PropTypes.string.isRequired
}

export default Loading
