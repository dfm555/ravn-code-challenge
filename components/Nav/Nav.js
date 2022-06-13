import InfiniteScroll from 'react-infinite-scroll-component'

import { useInfiniteRequest } from 'hooks/useInfiniteRequest'

import Loading from 'components/Loading'
import Error from 'components/Error'
import PersonCell from 'components/PersonCell'

import styles from './Nav.module.css'

const PATH = '/character'

const Nav = () => {
  const { data, isError, size, setSize } = useInfiniteRequest(PATH)
  return (
    <div className={styles.nav}>
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
                homeWorld={character.origin.name}
              />
            ))}
        </InfiniteScroll>
      )}
    </div>
  )
}

export default Nav
