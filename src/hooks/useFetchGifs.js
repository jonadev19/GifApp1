import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifts'

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([])
  const [Loading, setLoading] = useState( true )

  const getImages = async() => {
    const imagen = await getGifs(category)
    setImages( imagen )
    setLoading( false )
  }
  
  useEffect(() => {
    getImages()
  },[])
  
  return {
    images,
    Loading
  }
}
