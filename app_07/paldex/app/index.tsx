import { Text } from "@react-navigation/elements";
import { useEffect, useState } from "react";
import { ScrollView, View} from 'react-native';

export default function App() {
    interface Pokemon {
        nome: string;
        url: string;
    }
        const [pokemons, setPokemons] = useState([])
        useEffect( ()=> {
        buscarPals ()
    }, [])

    async function buscarPals() {
        const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=235")
        const data = await resposta.json();
        console.log(data)
        setPokemons(data.results);
    }

    return (
        <ScrollView style={{backgroundColor: 'gray'}}>
            {pokemons.map((pokemon) => (
                <View key={pokemon.name}>
                    <Text>{pokemon.name}</Text>
                </View>
            ))}
        </ScrollView>
    )
}