import axios from 'axios'
import { useState, useEffect } from 'react'

function useBooksFetch(inputValue, lastBookIndex) {
  const [books, setBooks] = useState([])
  const [hasMore, setHasMore] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect( () => {
    if (inputValue.trim() !== '' && inputValue !== undefined && !inputValue.includes('&')) {
      async function fetchData() 
      {
        setBooks([])
        setIsLoading(true)
        let res;
        try{
          res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&maxResults=25&startIndex=0`)
          //console.log(res)
        } catch (err) {
          return []
        }
        setIsLoading(false)
        return res.data
      }
      fetchData().then((data) => {
        if (data.items){
          setHasMore(data.items.length === 25)
          setBooks(data.items)
        }
      })
    }
  }, [inputValue])

  useEffect(() => {
    if (inputValue.trim() !== '' && inputValue !== undefined && lastBookIndex !== 0 && !inputValue.includes('&')) {
      async function fetchData() 
      {
        setIsLoading(true)
        let res;
        try {
          res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}&maxResults=25&startIndex=${lastBookIndex}`)
        } catch (e) {
          return []
        }
        setIsLoading(false)
        return res.data
      }
      fetchData().then(data => {
        if (data.items){
          setHasMore(data.items.length === 25)
          setBooks(b => [...b, ...data.items].filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i))
        }
      })
    }
    // eslint-disable-next-line
  }, [lastBookIndex])

  return { books, isLoading, hasMore }
  }
  
export default useBooksFetch;
  