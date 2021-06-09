import React from 'react';
import {  Text, View, Button, Alert } from 'react-native';
import styles from '../assets/css/style'

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