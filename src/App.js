import React, { useEffect } from 'react';
import { TouchableOpacity, SafeAreaView, View, Text } from 'react-native';
import { style } from './styles';
import useLocation from './Hooks/useLocation';
import useWeather from './Hooks/useWeather'

const App = () => {

  const { loadPosition, coordenates} = useLocation();	
  const { getWeather, informations } = useWeather();
  
  useEffect(()=>{
    const run = async () => {
      await loadPosition()
    }
    run()
  },[])

  useEffect(()=>{
    const run = async () => {
       await getWeather(coordenates?.latitude, coordenates?.longitude)     
    }
    run()
  },[coordenates])

  return (
      <SafeAreaView style={style.wrapper}>
          <View style={style.card}>
            <Text style={style.title}>Location</Text>
          </View>
          <View style={style.cardContent}>
            <Text style={style.content}>{informations?.name} - {informations?.sys?.country}</Text>
          </View>
          <View style={style.card}>
            <Text style={style.title}>Weather</Text>
          </View>
          <View style={style.cardContent}>
            <Text style={style.content}>{informations?.main?.temp} graus celsius ({informations?.weather?.[0]?.description})</Text>
            <Text style={style.content}>Humidity: {informations?.main.humidity}</Text>
            <Text style={style.content}>Pressure: {informations?.main.pressure}</Text>  
          </View>            
          <TouchableOpacity style={style.button} >
            <Text style={style.title} onPress={()=> {
              getWeather(coordenates?.latitude, coordenates?.longitude)   
            }} >Atualizar</Text>
          </TouchableOpacity>                 
      </SafeAreaView>
  );
};

export default App;
