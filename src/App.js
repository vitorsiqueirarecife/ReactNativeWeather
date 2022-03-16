import React from 'react';
import {TouchableOpacity, SafeAreaView, View, Text} from 'react-native';
import {style} from './styles';

const App = () => {
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
