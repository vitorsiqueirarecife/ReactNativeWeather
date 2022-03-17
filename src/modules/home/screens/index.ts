import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { style } from './styles';

const Home = () => {

  return (
      <SafeAreaView style={style.wrapper}>
          <View style={style.card}>
            <Text style={style.title}>HOME</Text>
          </View>                       
      </SafeAreaView>
  );
};

export default Home;
