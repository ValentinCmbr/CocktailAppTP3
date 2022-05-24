import { StatusBar } from 'expo-status-bar';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";

export default function App() {
  const [nom, setNom] = useState(null)
    const[image, setImage] = useState(null)
    const[Liste, setListe] = useState(Cocktails)
    const[Cocktails, setCocktails] = useState(null);

  const RequeteCocktail = () =>
      fetch(`www.thecocktaildb.com/api/json/v1/1/random.php`)
          .then(function (response){
            return response.json();
          }).then(function(response){
            setCocktails(response.drinks)
      })

    useEffect( () => {
        for(let i; i < 10; i++){
            RequeteCocktail();
        }
        })

    useEffect( () => {
        setListe[...Liste, Cocktails ];
    })

  return (
    <View style={styles.container}>
    <FlatList data={nom} renderItem={({item}) => <Text>{nom} </Text> }/>
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
});
