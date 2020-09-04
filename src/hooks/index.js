import { useState, useEffect } from 'react'
import { useModalActions } from 'contexts/ModalContext'

export const useFetch = (fetchApi) => {
  const { setError } = useModalActions()
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await fetchApi()
        setResponse(res)
        setIsLoading(false)
      } catch (err) {
        setError(err)
      }
    }

    fetchData()
  }, [setError, fetchApi])

  return [response, isLoading]
}
