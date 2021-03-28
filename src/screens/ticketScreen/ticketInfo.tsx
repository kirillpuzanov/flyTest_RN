import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextAbel, TextSF} from '../../components/myText';
import {AntDesign} from '@expo/vector-icons';
import {TicketDomainType} from '../../store/flyReducer';
import moment from 'moment';

export const TicketInfo: React.FC<TicketInfoType> = React.memo(({ticket}) => {
    const {
        departurePoint,
        departurePointName,
        departureDate,
        arrivalPoint,
        arrivalPointName,
    } = ticket

    return (
        <View style={styles.ticketInfo}>
            <View style={{paddingLeft: 15}}>
                <TextSF>{moment(departureDate).format('DD MMMM, YYYY')}</TextSF>
                <TextAbel style={styles.place}>{departurePoint}</TextAbel>
                <TextSF>{departurePointName}</TextSF>
            </View>
            <View>
                <AntDesign name="right" size={22} color="#A7A7A7"/>
            </View>
            <View>
                <TextSF>{moment(departureDate).format('hh:mm')}</TextSF>
                <TextAbel style={styles.place}>{arrivalPoint}</TextAbel>
                <TextSF style={{paddingRight: 20}}>{arrivalPointName} City</TextSF>
            </View>
        </View>
    )
})
const styles = StyleSheet.create({
    ticketInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25
    },
    description: {
        fontSize: 30
    },
    place: {
        fontSize: 36,
        color: '#404040'
    }
})
type TicketInfoType = {
    ticket: TicketDomainType
}
