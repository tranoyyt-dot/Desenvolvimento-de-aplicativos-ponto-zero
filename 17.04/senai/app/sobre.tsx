import { StyleSheet, Text, View, Image, _View } from 'react-native';
import { Link } from 'expo-router';

export default function index(){
    return(
        <View style={style.texto}>
            <Text>
                A PUMA nasceu da separação da fábrica de calçados
                "Gebrüder Dassler", após uma grave desavença entre os irmãos Rudolf e Adolf Dassler.
                Enquanto Rudolf fundou a PUMA, Adolf fundou a Adidas
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    texto: {
        fontSize: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})