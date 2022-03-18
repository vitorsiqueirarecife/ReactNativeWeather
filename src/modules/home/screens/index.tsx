import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import SafeArea from '../../../components/SafeArea';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Routes } from '../../../shared/routesType';
import { Card, Wait, Welcome } from '../components/Welcome/styles';

const Home = () => {

  const navigation = useNavigation<StackNavigationProp<Routes>>();
  
  useEffect(()=>{

    setTimeout(()=>{
      navigation.navigate('Weather')
    }, 2500)

  },[])

  return (
      <SafeArea>        
          <Card>
            <Welcome>Seja bem-vindo!</Welcome>
          </Card>  
          <Card>
            <Wait>Por favor, aguarde</Wait>
          </Card>  
          <Card>
            <ActivityIndicator size="large" color="#8c87d4" />
          </Card>
       </SafeArea>
  );
};

export default Home;