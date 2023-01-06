import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.background}>
      <Text style={style.text}>Random Cats Facts!</Text>
      <Image style={style.image} source={require('./assets/cat.png')} />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  background: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  image: {
    width: 160,
    height: 160,
  },
});

export default App;
