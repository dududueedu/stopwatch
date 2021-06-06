import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const Crono = () => {
  return (
    <>
      <Text style={styles.header}> 00:00:00 </Text>
      <View style={styles.space_botoes}>
        <View style={styles.botoes}><Button color='#008000' title="Iniciar" onPress={() => Alert.alert('Começou!')} /></View>
        <View style={styles.botoes}><Button color='#ffd700' title="Pausar" onPress={() => Alert.alert('Cronômetro pausado.')} /></View>
        <View style={styles.botoes}><Button color='#dc143c' title="Zerar" onPress={() => Alert.alert('Cronômetro parou!')} /></View>
      </View>
    </>
  )
}
export default Crono;

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    width: 150,
    height: 38
  },
  space_botoes: {
    marginTop: 40,
    height: 200,
    width: 190
  },
  botoes: {
    margin: 20
  }
});