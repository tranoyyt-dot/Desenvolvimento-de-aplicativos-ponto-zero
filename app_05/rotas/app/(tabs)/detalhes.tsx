import { Text, View, StyleSheet} from 'react-native';
import {Link} from 'expo-router';

export default function Detalhes(){
    return(
      <View style={styles.container}>
           <Text>Pagina de Detalhes</Text>
           <Link href="/login">Sair</Link>
      </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }
})