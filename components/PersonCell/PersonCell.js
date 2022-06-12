import PropTypes from 'prop-types'
import Link from 'next/link'

import Text from 'components/Text'
import Icon from 'components/Icon'

import styles from './PersonCell.module.css'

const PersonCell = ({ id, name, species, homeWorld }) => {
  return (
    <div className={styles.personCell}>
      <div className={styles.personCell__elements}>
        <Text
          type={'heading'}
          level={2}
          text={name}
          weight={'bold'}
          color={'black'}
        />
        <Text text={`${species} from ${homeWorld}`} />
      </div>
      <Link href={`/character/${id}`}>
        <a>
          <Icon name={'angleRight'} size={'sm'} />
        </a>
      </Link>
    </div>
  )
}

PersonCell.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  homeWorld: PropTypes.string.isRequired
}

export default PersonCell
