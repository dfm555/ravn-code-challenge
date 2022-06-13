import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'

import Layout from 'components/Layout'
import Text from 'components/Text'
import Nav from 'components/Nav'
import Content from 'components/Content'

import useMediaQuery from 'hooks/useMediaQuery'

const DEFAULT_TITLE = 'Characters of Rick and Morty'

const Home = () => {
  const router = useRouter()
  const characterId = router.query?.character
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const [showNav, setShowNav] = useState(true)
  const [headerTitle, setHeaderTitle] = useState(DEFAULT_TITLE)

  useEffect(() => {
    if (characterId) {
      setShowNav(false)
    } else {
      setShowNav(true)
      setHeaderTitle(DEFAULT_TITLE)
    }
  }, [characterId])

  useEffect(() => {
    if (isDesktop) {
      setHeaderTitle(DEFAULT_TITLE)
      setShowNav(true)
    } else {
      if (characterId) {
        setShowNav(false)
      }
    }
  }, [isDesktop, characterId])

  const setTitle = useCallback(
    title => {
      if (title && !isDesktop) {
        setHeaderTitle(title)
      }
    },
    [isDesktop]
  )

  return (
    <Layout
      hasArrowLeft={!!(!isDesktop && characterId)}
      headerTitle={
        <Text
          text={headerTitle}
          color={'white'}
          align={isDesktop ? 'left' : 'center'}
          size={'lg'}
        />
      }
    >
      <>
        {showNav && <Nav />}
        {characterId && <Content id={characterId} setTitle={setTitle} />}
      </>
    </Layout>
  )
}

export default Home
