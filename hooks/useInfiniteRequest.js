import useSWRInfinite from 'swr/infinite'

import { fetcher, getKey } from 'utils/common'

export const useInfiniteRequest = path => {
  const { data, error, size, setSize } = useSWRInfinite(getKey(path), fetcher)
  return {
    data,
    size,
    setSize,
    isLoading: !error && !data,
    isError: error
  }
}
