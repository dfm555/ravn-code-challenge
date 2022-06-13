import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useRequest } from 'hooks/useRequest'
import removeObjectKeys from 'utils/removeObjectKeys'

import Error from 'components/Error'
import Loading from 'components/Loading'
import SectionHeader from 'components/SectionHeader'
import DataCell from 'components/DataCell'

import styles from './Content.module.css'

const PATH = '/character/'
const KEYS = ['gender', 'species', 'type', 'status']

const Content = ({ id, setTitle }) => {
  const { data, isError, isLoading } = useRequest(id ? `${PATH}${id}` : '')

  useEffect(() => {
    if (data) {
      setTitle(data?.name)
    }
  }, [data, setTitle])

  return (
    <div className={styles.content}>
      {isError && <Error text={'Failed to Load Data'} />}
      {isLoading && <Loading text={'Loading'} />}
      {data && (
        <>
          <SectionHeader text={'General Information'} />
          {Object.entries(removeObjectKeys(data, KEYS)).map(([key, value]) => (
            <DataCell key={key} keyName={key} value={value} />
          ))}
          <SectionHeader text={'More Information'} />
          <DataCell keyName={'origin'} value={data.origin?.name} />
          <DataCell keyName={'location'} value={data.location?.name} />
        </>
      )}
    </div>
  )
}

Content.propTypes = {
  setTitle: PropTypes.func.isRequired,
  id: PropTypes.string
}

export default Content
