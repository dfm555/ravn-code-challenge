import InfiniteScroll from 'react-infinite-scroll-component'

import { useInfiniteRequest } from 'hooks/useInfiniteRequest'

import Layout from 'components/Layout'
import Text from 'components/Text'
import Loading from 'components/Loading'
import Error from 'components/Error'
import PersonCell from 'components/PersonCell'

const PATH = '/character'

const Index = () => {
  const { data, isError, size, setSize } = useInfiniteRequest(PATH)
  return (
    <Layout
      headerTitle={
        <Text
          text={'Characters of Rick and Morty'}
          color={'white'}
          align={'center'}
          size={'lg'}
        />
      }
    >
      {isError && <Error text={'Failed to Load Data'} />}
      {data && (
        <InfiniteScroll
          next={() => setSize(size + 1)}
          dataLength={data.length}
          hasMore={data.length <= data[0].info.pages}
          loader={<Loading text={'Loading'} />}
        >
          {data
            .flatMap(item => item.results)
            .map((character, index) => (
              <PersonCell
                key={index}
                id={character.id}
                name={character.name}
                species={character.species}
                homeWorld={character.location.name}
              />
            ))}
        </InfiniteScroll>
      )}
    </Layout>
  )
}

export default Index
