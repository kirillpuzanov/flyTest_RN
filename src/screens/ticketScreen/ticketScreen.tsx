import React from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import {TicketInfo} from './ticketInfo';
import {TicketPrice} from './ticketPrice';
import {Heart} from '../../components/Heart';
import {useSelector} from 'react-redux';
import {getTickets} from '../../store/flySelectors';
import Swiper from 'react-native-web-swiper';


export const TicketScreen: React.FC<TicketScreenType> = ({route}) => {
    // id через парамеиры навигации, чтобы не создавать отдельную переменную в redux state для selectedTicket
    const {id} = route.params.item
    // TS не даёт найти find .. выход - filter
    const selectedTicket = useSelector(getTickets).filter(el => el.id === id)[0]
    const {minPrice, favourites} = selectedTicket
    return (
        <View style={s.wrap}>
            <Image source={require('../../../assets/ticketScreen.jpg')} style={s.img}/>
            <View style={s.inner}>
                <TicketInfo ticket={selectedTicket}
                />
                <TicketPrice price={minPrice}/>
                <TicketSlider/>
                <Heart ticketId={id} favourites={favourites} styles={{zIndex: 100, top: 10, right: 10}}/>
            </View>
            <StatusBar barStyle={'light-content'} translucent backgroundColor="transparent"/>
        </View>
    )
}

type TicketScreenType = {
    route: any
}
const s = StyleSheet.create({
    wrap: {
        flex: 1,
        position: 'relative',
    },
    img: {
        position: 'absolute',
        height: '45%',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1
    },
    inner: {
        height: '62%',
        width: '100%',
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 2
    }
})


export const TicketSlider = () => {


    return (
        <View style={styles.container}>
            <Swiper
                from={1}
                minDistanceForAction={0.1}
                controlsEnabled={false}
                controlsProps={{}}
            >
                <Image style={styles.img}  source={require('../../../assets/1.jpg')}/>
                <Image style={styles.img}  source={require('../../../assets/4.jpg')}/>
                <Image style={styles.img}  source={require('../../../assets/3.jpg')}/>
                <Image style={styles.img}  source={require('../../../assets/2.jpg')}/>
            </Swiper>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:10,
        width:'100%'
    },
    img: {
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-around",
        width:'100%',
        borderRadius:8
    }

});
