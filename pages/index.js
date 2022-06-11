import Layout from 'components/Layout'
import Text from 'components/Text'
import Loading from 'components/Loading'
import Error from 'components/Error'

const Index = () => {
  return (
    <Layout
      headerTitle={
        <Text
          type={'heading'}
          level={2}
          text={'People of Star Wars'}
          color={'white'}
          align={'center'}
          size={'lg'}
        />
      }
    >
      <Loading text={'Loading'} />
      <Error text={'Failed to Load Data'} />
    </Layout>
  )
}

/*Index.propTypes = { data: PropTypes.object }

export async function getStaticProps() {
  const res = await fetch('https://swapi.dev/api/people/')
  const data = await res.json()
  return {
    props: {
      data
    },
    revalidate: 60
  }
}*/

export default Index
