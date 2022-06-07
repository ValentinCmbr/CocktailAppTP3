import {StatusBar} from 'expo-status-bar';
import {FlatList, Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Pressable} from 'react-native';
import {useEffect, useState} from "react";
export default function App() {

    const [icon, setIcon] = useState(null);

    const [cocktails, setCocktail] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const getCocktail = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e')
            .then(response => response.json())
            .then(data => {
                    setCocktail(data.drinks);
            })}

    useEffect(() => {
        (async () => {
            getCocktail()
        })();
        },
        []);

    const Item = ({title}) => (
            <View style={styles.item}>
                <Image style={styles.tinyLogo} source={{uri: title.strDrinkThumb}}/>
                <Text style={styles.title}>{title.strDrink}</Text>
            </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={cocktails} renderItem={renderItem}></FlatList>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eb7d34',
        color:'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 120,
        height: 120,
        borderRadius:4
    },
    title: {
        fontSize: 18,
        marginTop:15,
        textAlign:'center',
    },
    item: {
        backgroundColor: '#',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
});
