import { useRouter } from 'next/router'

import { useRequest } from 'hooks/useRequest'

import Layout from 'components/Layout'
import Error from 'components/Error'
import Loading from 'components/Loading'
import Text from 'components/Text'
import SectionHeader from 'components/SectionHeader'

const PATH = '/character/'

const Character = () => {
  const router = useRouter()
  const { pid } = router.query
  const { data, isError, isLoading } = useRequest(pid ? `${PATH}${pid}` : '')
  return (
    <Layout
      hasArrowLeft
      headerTitle={
        <Text
          text={data ? data.name : ''}
          color={'white'}
          align={'center'}
          size={'lg'}
        />
      }
    >
      {isError && <Error text={'Failed to Load Data'} />}
      {isLoading && <Loading text={'Loading'} />}
      {data && <SectionHeader text={'General Information'} />}
    </Layout>
  )
}

export default Character
