import { Text, View, StyleSheet} from 'react-native';
import {Link, useRouter} from 'expo-router';

export default function Detalhes(){
    const router = useRouter();
    return(
      <View style={styles.container}>
           <Text>Pagina de Login</Text>
           <link href="/login">Sair</link>
           <button title='Realizar logout'
              onProgress={() => router.replace("/login")}/>
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