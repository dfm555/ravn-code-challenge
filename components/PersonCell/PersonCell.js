import { useCallback } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import Text from 'components/Text'
import Icon from 'components/Icon'

import styles from './PersonCell.module.css'

const PersonCell = ({ id, name, species, homeWorld }) => {
  const router = useRouter()

  const updateURL = useCallback(
    id => {
      router.push(`/?character=${id}`, undefined, { shallow: true }).then()
    },
    [router]
  )

  return (
    <div className={styles.personCell} onClick={() => updateURL(id)}>
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
      <Icon name={'angleRight'} size={'sm'} />
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
