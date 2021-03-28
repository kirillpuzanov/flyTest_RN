import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {TextAbel, TextSF} from './myText';
import {AntDesign} from '@expo/vector-icons';
import {TicketDomainType} from '../store/flyReducer';
import moment from 'moment';
import {Heart} from './Heart';


export const OneTicket: React.FC<OneTicketType> = React.memo(({item, navigation: {navigate}}) => {

    const {
        id,
        minPrice,
        departurePoint,
        departurePointName,
        arrivalPointName,
        departureDate,
        carriers,
        favourites
    } = item

    const handleClickTicket = () => navigate('Ticket', {screen: 'Ticket', params: {item}})

    return (
        <TouchableOpacity style={s.oneTicket} onPress={handleClickTicket}>
            <View style={s.wrap}>
                <Image style={s.img} source={require('../../assets/fly.png')}/>
                <View style={s.inner}>
                    <View style={s.inner_row}>
                        <TextAbel style={{fontSize: 17}}>{departurePointName}</TextAbel>
                        <AntDesign name="arrowright" size={20} color="#C4C4C4"/>
                        <TextAbel style={{fontSize: 17}}>{arrivalPointName}</TextAbel>
                    </View>
                    <TextSF style={s.text}>
                        {departurePoint} - {moment(departureDate).format('DD MMMM, YYYY')} - {moment(departureDate).format('HH : mm')}
                    </TextSF>
                    <TextSF style={s.text}>{carriers}</TextSF>
                </View>
            </View>
            <View style={s.line}></View>
            <View style={s.price}>
                <TextSF>Price:</TextSF>
                <TextAbel style={{fontSize: 17, marginLeft: 10}}>{minPrice} ₽</TextAbel>
            </View>
            <Heart ticketId={id} favourites={favourites}/>
        </TouchableOpacity>
    )
})

const s = StyleSheet.create({
    oneTicket: {
        width: '100%',
        height: 135,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowOffset: {width: 2, height: 2},
        elevation: 3,
        position: 'relative'
    },
    img: {
        width: 60,
        height: 60
    },
    wrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inner: {},
    inner_row: {
        width: '65%',
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#c4c4c4',
        marginTop: 15
    },
    text: {
        marginLeft: 20,
    },
    price: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    heart: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
type OneTicketType = {
    item: TicketDomainType
    navigation: any
}


