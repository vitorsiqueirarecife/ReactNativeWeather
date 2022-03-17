
import { useState, useCallback } from 'react';
import { PERMISSIONS, request, check } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { Platform, Alert } from 'react-native';
import AlertAsync from "react-native-alert-async";

const useLocation = () => {
    const [error, setError] = useState(null); 
    const [coordenates, setCoordenates] = useState(null);   

    const givePermission = useCallback(async ()=> {

        const locationWhenInUse = Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.LOCATION_WHEN_IN_USE

        const isPermission = await check(locationWhenInUse)
        
        if(isPermission === 'blocked'){
            
            Alert.alert('Permissão de localização', 'Nosso aplicativo precisa acessar sua localização. Acesse as configurações do seu dispositivo para habilitá-las')
            
            return false;

        }else if(isPermission !== 'granted'){

            await AlertAsync('Permissão de localização', 'Nosso aplicativo precisa acessar sua localização.');
            
            const permission = await request(locationWhenInUse)
            .then(
                (status) => {               
                   
                    if (Platform.OS == 'android' && Platform.Version < 29) { 
                        if (status == 'granted') {
                            return true;
                        } else {
                            setError('Usuário não aceitou solicitação de uso do GPS');
                        }
                    }
    
                    if (status == 'granted') {
                        return true;
                    } else {
                        setError('Usuário não aceitou solicitação de uso do GPS');
                    }
                },
            ).catch((e)=>{
                console.log(e)
            })
   
            return permission;
        }

        return true;
        
    },[])

    const loadPosition = useCallback(async () => {
        const permission = await givePermission()
            
        if (permission) {   
            Geolocation.getCurrentPosition(       
                ({coords}) => {                            
                    setError('');
                    setCoordenates({  latitude: coords.latitude, longitude: coords.longitude });          
                     
                }, (e) => {                  
                    setError('Não foi possível obter sua localização');
                }                               
            )    
        }            
    },[])

  return { loadPosition, coordenates, error }
}

export default useLocation