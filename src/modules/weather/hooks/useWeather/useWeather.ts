
import { useCallback, useState } from 'react';
import axios from 'axios';
import { Informations } from './types';

const useWeather = () => {

  const [informations, setInformations] = useState<Informations>(); 
  const [loading, setLoading] = useState<boolean>(false); 

  const getWeather = useCallback(async (latitude, longitude)=> {    
      if(latitude && longitude){

          setLoading(true)
          
          const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eefcc2ba252bc6313b1d97e6bc7980ea&units=metric`)           

          setLoading(false)
          
          setInformations({
            city: res?.data?.name,
            country: res.data?.sys?.country,
            temperature: res.data?.main?.temp,
            description: res.data?.weather?.[0]?.description,
            humidity: res.data?.main?.humidity,
            pressure: res.data?.main?.pressure
        })    
      }
  },[])

  return { getWeather, informations, loading }

}

export default useWeather