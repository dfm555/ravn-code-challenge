import PropTypes from 'prop-types'
import Text from 'components/Text'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

import styles from './DataCell.module.css'

const DataCell = ({ keyName, value }) => {
  return (
    <div className={styles.dataCel}>
      <Text
        text={capitalizeFirstLetter(keyName)}
        type={'heading'}
        level={2}
        weight={'bold'}
      />
      <Text
        text={capitalizeFirstLetter(value)}
        color={'black'}
        size={'lg'}
        weight={'bold'}
      />
    </div>
  )
}

DataCell.propTypes = {
  keyName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default DataCell
