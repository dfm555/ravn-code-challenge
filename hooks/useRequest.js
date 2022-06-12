import useSWR from 'swr'

import { fetcher } from 'utils/common'

export const useRequest = path => {
  const { error, data, mutate } = useSWR(`${path}`, fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate
  }
}
