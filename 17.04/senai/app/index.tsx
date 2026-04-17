import { Text, View, StyleSheet, Image, Button } from 'react-native';
import {Link} from 'expo-router';

export default function index(){
    return(
      <View style={styles.container}>
          <Image source={require('@/assets/images/images.png')}/>
          <Text style={styles.subtitulo}>Bem-Vindo ao Puma!</Text>
          <Link style ={styles.titulo} href="/sobre">Sobre</Link>  
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: 500,
    color: 'black',
    textAlign: 'center'
  },
  titulo: {
    fontSize: 33,
    fontWeight: 500,
    color: 'black',
    textAlign: 'center'
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 20
  },
  botao: {
    fontSize: 17,
    backgroundColor: 'cyan',
    color: 'black',
    padding: 17,
    borderRadius: 30
  }
})