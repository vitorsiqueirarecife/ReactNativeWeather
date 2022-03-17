
import { useCallback, useState } from 'react';
import axios from 'axios';

const useWeather = () => {

  const [informations, setInformations] = useState(); 

  const getWeather = useCallback(async (latitude, longitude)=> {     
      if(latitude && longitude){
          const res = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eefcc2ba252bc6313b1d97e6bc7980ea&units=metric`)  
   
          setInformations(res.data)    
      }
  },[])

  return { getWeather, informations }

}

export default useWeather