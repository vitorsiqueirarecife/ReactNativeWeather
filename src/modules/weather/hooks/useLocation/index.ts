
import { useState, useCallback } from 'react';
import { PERMISSIONS, request, check } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { Platform, Alert } from 'react-native';
import { Coordenates } from './types';
import AsyncAlert from '../../screens/utils/AsyncAlert';

const useLocation = () => {
    const [error, setError] = useState<string | null>(null); 
    const [loading, setLoading] = useState<boolean>(false); 
    const [coordenates, setCoordenates] = useState<Coordenates | null>(null);   

    const givePermission = useCallback(async ()=> {

        const locationPermission = Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION

        const isPermission = await check(locationPermission)
        
        if(isPermission === 'blocked'){
            
            Alert.alert('Permissão de localização', 'Nosso aplicativo precisa acessar sua localização. Acesse as configurações do seu dispositivo para habilitá-las')
            
            return false;

        }else if(isPermission !== 'granted'){

            await AsyncAlert('Permissão de localização', 'Nosso aplicativo precisa acessar sua localização.');
            
            const permission = await request(locationPermission)
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
            setLoading(true)
            Geolocation.getCurrentPosition(       
                ({coords}) => {                            
                    setError('');
                    setLoading(false)
                    setCoordenates({  latitude: coords.latitude, longitude: coords.longitude });          
                     
                }, () => {    
                    setLoading(false)              
                    setError('Não foi possível obter sua localização');
                }                               
            )    
        }            
    },[])

  return { loadPosition, coordenates, error, loading }
}

export default useLocation