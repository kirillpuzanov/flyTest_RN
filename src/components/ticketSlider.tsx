import {Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-web-swiper';
import React from 'react';

export const TicketSlider = () => {

    return (
        <View style={styles.container}>
            <Swiper
                from={0}
                controlsEnabled={false}
            >
                <Image style={styles.img} source={require('../../assets/1.jpg')}/>
                <Image style={styles.img} source={require('../../assets/4.jpg')}/>
                <Image style={styles.img} source={require('../../assets/3.jpg')}/>
                <Image style={styles.img} source={require('../../assets/2.jpg')}/>
            </Swiper>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        width: '100%'
    },
    img: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        borderRadius: 8,
    }
})
