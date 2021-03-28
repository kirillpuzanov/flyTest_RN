import {Image, StyleSheet, View} from 'react-native';
import {TextSF} from './myText';
import React from 'react';

export const FavouritesNotFound = () => (
    <View style={styles.wrap}>
        <TextSF style={{marginTop: 40, fontSize: 28, fontStyle: 'italic', paddingLeft: 10}}>
            Добавьте подходящие билеты в избранное,чтобы не пропустить акции и спец.предлжения...
        </TextSF>
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
    }
})
