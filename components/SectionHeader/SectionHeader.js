import PropTypes from 'prop-types'

import Text from 'components/Text'

import styles from './SectionHeader.module.css'

const SectionHeader = ({ text }) => {
  return (
    <div className={styles.sectionHeader}>
      <Text text={text} size={'lg'} weight={'bold'} color={'black'} />
    </div>
  )
}

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired
}

export default SectionHeader
