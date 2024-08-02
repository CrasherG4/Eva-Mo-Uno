import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export const EjercicioUno = () => {
  const nums: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
  const numsPar: number[] = []
  const numsImpar: number[] = []

  const [mostrar, setMostrar] = useState<boolean>(false)

  nums.map((val: number) => {
    if (val % 2 == 0) {
      numsPar.push(val)
    }
    else {
      numsImpar.push(val)
    }
  });

  return (
    <View>
      <Text style={styles.espacioAbajo}>El arreglo es [{nums.join(', ')}]</Text>

      <Button title='Clasificar' onPress={() => setMostrar(!mostrar)}/>

      {mostrar && (
        <View style={styles.espacioArriba}>
          <Text>Números pares son: {numsPar.join(', ')}</Text>
          <Text>Números impares son: {numsImpar.join(', ')}</Text>
        </View>
      )}
    </View>
  )
}

// estilos
const styles = StyleSheet.create({
  espacioAbajo: {
    paddingBottom: 10
  },
  espacioArriba: {
    paddingTop: 10
  }
})