import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EjercicioUno } from './src/EjercicioUno';
import { EjercicioDos } from './src/EjercicioDos';

export default function App() {
  return (
    <View style={styles.container}>
      <EjercicioUno/>
      {/* <EjercicioDos/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0a0df',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
