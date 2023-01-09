import React, { useState, useEffect } from 'react';
import { FlatList, Text, SafeAreaView, StyleSheet, Button } from 'react-native';

const Facts = ({ navigation }) => {
  const [facts, setFacts] = useState([]);

  const getFacts = async () => {
    try {
      const response = await fetch('https://meowfacts.herokuapp.com/');
      const json = await response.json();
      setFacts(json.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFacts();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <FlatList
        contentContainerStyle={{ margin: 30 }}
        data={facts}
        keyExtractor={(id) => id}
        renderItem={({ item }) => (
          <Text style={style.item}>{item}</Text>
        )}
      />
      <Button
        style={style.button}
        title="New fact" onPress={getFacts}
        accessibilityLabel="Generate a new random cat fact" />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 'auto',
    marginBottom: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    color: '#000',
    fontSize: 20,
  },
});

export default Facts;
