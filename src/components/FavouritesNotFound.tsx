import {Image, StyleSheet, View} from 'react-native';
import {TextSF} from './myText';
import React from 'react';

export const FavouritesNotFound = () => (
    <View style={styles.wrap}>
        <TextSF style={{marginTop: 40, fontSize: 28, fontStyle: 'italic'}}>В избранном пока нет данных...</TextSF>
        <Image style={styles.img} source={require('../../assets/no-results.png')}/>
    </View>

)
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        paddingHorizontal: 20,
    },
    img: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }
})
