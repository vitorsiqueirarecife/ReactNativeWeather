import React, { useEffect } from 'react';
import {TouchableOpacity, SafeAreaView, View, Text} from 'react-native';
import {style} from './styles';
import useLocation from './Hooks/useLocation';

const App = () => {

  const { coordenates, error, loadPosition } = useLocation();	

  useEffect(()=>{
    loadPosition()
  },[])

  useEffect(()=>{
    console.log(coordenates)
  },[coordenates])

  return (
      <SafeAreaView style={style.wrapper}>
          <View style={style.card}>
            <Text style={style.title}>Localização atual</Text>
          </View>
          <View style={style.cardContent}>
            <Text style={style.content}>........</Text>
          </View>
          <View style={style.card}>
            <Text style={style.title}>Clima</Text>
          </View>
          <View style={style.cardContent}>
            <Text style={style.content}>........</Text>
          </View>            
          <TouchableOpacity style={style.button} >
            <Text style={style.title}>Atualizar</Text>
          </TouchableOpacity>                 
      </SafeAreaView>
  );
};

export default App;
