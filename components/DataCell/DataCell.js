import PropTypes from 'prop-types'
import Text from 'components/Text'

import styles from './DataCell.module.css'

const DataCell = ({ keyName, value }) => {
  return (
    <div className={styles.DataCell}>
      <Text type={'heading'} level={2} text={keyName} weight={'bold'} />
      <Text text={value} color={'black'} size={'lg'} weight={'bold'} />
    </div>
  )
}

DataCell.propTypes = {
  keyName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default DataCell
