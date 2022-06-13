import { API_URL } from './constants'

export const fetcher = async url => {
  const request = await fetch(`${API_URL}${url}`)
  return await request.json()
}

// eslint-disable-next-line react/display-name
export const getKey = path => (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData?.results) return null
  return `${path}?page=${pageIndex}`
}

