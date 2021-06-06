import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Crono from './components/Crono';


export default function App() {
  return (
    <><View style={styles.container_texto}>
      <Text style={styles.texto}> Cronômetro </Text></View>
      <View style={styles.container}>
        <Crono />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    paddingTop: 90,  
    fontSize: 50
  }, 
  container_texto: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#add8e6',
  }
});