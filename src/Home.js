import React from 'react';
import { SafeAreaView, StyleSheet, Text, Image, Pressable } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={style.background}>
      <Text style={style.text}>Random Cat Facts!</Text>
      <Pressable onPress={() => navigation.navigate('Facts')}>
        <Image style={style.image} source={require('./assets/cat.png')} />
      </Pressable>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  background: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  text: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  image: {
    width: 160,
    height: 160,
  },
});

export default Home;
