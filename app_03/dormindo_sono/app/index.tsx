import { View, StyleSheet, Image, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={estilo.conteiner}>
            <Image source={require("@/assets/header_logo.svg")} />
            <Text style={estilo.titulo}>Átomo</Text>
            <Text style={estilo.subtitulo}>O mundo que você não conhece.</Text>
            <View style={estilo.btnGroup}>
                <Text style={estilo.botao}>Escolha 1</Text>
                <Text style={estilo.botao}>Escolha 2</Text>
            </View>
        </View>
    )
}
const estilo = StyleSheet.create({
    conteiner: {
        flex: 1, // prioridade
        backgroundColor: 'rgb(27, 27, 29)', // cor de fundo
        justifyContent: "center", // alinhar no centro horiz
        alignItems: "center", // alinhar no centro vertical
    },
    titulo: {
        fontSize: 40,
        fontWeight: 700,
        color: 'white'
    },
    subtitulo: {
        fontSize: 25,
        fontWeight: 500,
        color: 'rgb(193,193,196)',
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