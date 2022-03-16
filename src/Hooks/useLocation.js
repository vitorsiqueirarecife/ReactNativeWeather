
import { useState, useCallback } from 'react';
import { requestMultiple, PERMISSIONS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { Platform } from 'react-native';

const useLocation = () => {
  const [error, setError] = useState(null); 
  const [coordenates, setCoordenates] = useState(null);   

  const isPermission = useCallback(()=> {

    if(Platform.OS == 'android'){

        const fineLocation = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        const backgroundLocation = PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION

        const permission = requestMultiple([fineLocation, backgroundLocation]).then(
            (status) => {
                const statusFine = status[fineLocation]; 
                const statusBack = status[backgroundLocation]; 

                if (Platform.Version < 29) { 
                    if (statusFine == 'granted') {
                        return true;
                    } else {
                        setError('Usuário não aceitou solicitação de uso do GPS');
                    }
                }

                if (statusFine == 'granted' && statusBack == 'granted') {
                    return true;
                } else {
                    setError('Usuário não aceitou solicitação de uso do GPS');
                }
            },
        );
        
        if(permission !== true){
            return false;
        }

    }

    return true;

  },[])

  const loadPosition = useCallback(() => {

        const permission = isPermission()       

        if (permission) {           
            Geolocation.getCurrentPosition(       
                ({coords}) => {           
                    setCoordenates({  latitude: coords.latitude, longitude: coords.longitude });
                }, () => {
                    setError('Não foi possível obter sua localização');
                }                               
            )
        }
        
  },[])

  return { loadPosition, coordenates, error }
}

export default useLocation