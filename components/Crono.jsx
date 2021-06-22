import React, { useState } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import styles from '../assets/css/style'

const Crono = () => {

  const [temp, setTemp] = useState("00:00:00")

    let hh = 0, mm = 0, ss = 0
    let cron

    function start() {
      cron = setInterval(() => {
        timer()
      }, 1000)
    }

    function pause() {
      let tempo = clearInterval(cron)
      setTemp(tempo)
    }

    function parar() {
      clearInterval(cron)

      hh = 0, mm = 0, ss = 0

      const tempo = "00:00:00"
      setTemp(tempo)
    }

    function timer() {
      ss++

      if (ss == 60) {
        ss = 0
        mm++
      }
      if (mm == 60) {
        mm = 0
        hh++
      }

      let format = 
        (hh < 10 ? "0" + hh : hh) +
        ":" +
        (mm < 10 ? "0" + mm : mm) +
        ":" +
        (ss < 10 ? "0" + ss : ss)
      
        setTemp(format)
    }
  
  return (
    <>
      <Text style={styles.header}> {temp} </Text>
      <View style={styles.space_botoes}>
        <View style={styles.botoes}><Button color='#008000' title="Iniciar" onPress={start} /></View>
        <View style={styles.botoes}><Button color='#ffd700' title="Pausar" onPress={pause} /></View>
        <View style={styles.botoes}><Button color='#dc143c' title="Zerar" onPress={parar} /></View>
      </View>
    </>
  )
}
export default Crono;