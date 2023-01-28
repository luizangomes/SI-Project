/* Tela provisória que eu criei apenas para encher espaço na barra de navegação enquanto
não criamos todas as telas definitivas */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function PlaceholderScreen() {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => alert('Sério, cria uma tela logo.')}
      >Tela provisória e inútil.</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius:18,
  },
  footerContainer: {
    flex: 1/6,
    alignItems: 'center',
  },
});