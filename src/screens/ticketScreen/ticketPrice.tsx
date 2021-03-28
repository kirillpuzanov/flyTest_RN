import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextAbel, TextSF} from '../../components/myText';

export const TicketPrice: React.FC<TicketPriceType> = React.memo(({price}) => {
    return (
        <View style={styles.price}>
            <View>
                <TextSF style={styles.description}>Price</TextSF>
                <TextAbel style={styles.text}>{price} ₽</TextAbel>
            </View>
            <View style={styles.line}></View>
            <View style={{paddingRight: 10}}>
                <TextSF style={styles.description}>Boarding</TextSF>
                {/*19:20 захардкор. т.к. с сервера приходят везде 00:00*/}
                <TextAbel style={styles.text}>19:20</TextAbel>
            </View>
        </View>
    )
})
const styles = StyleSheet.create({
    price: {
        width: '100%',
        height: 80,
        borderRadius: 10,
        backgroundColor: '#1157A7',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 15
    },
    line: {
        width: 1,
        height: 50,
        backgroundColor: '#fff'
    },
    description: {
        color: '#fff',
        textAlign: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})
type TicketPriceType = {
    price: number
}
