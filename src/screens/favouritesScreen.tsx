import React from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import {OneTicket} from '../components/OneTicket';
import {useSelector} from 'react-redux';
import {getTickets} from '../store/flySelectors';
import {FavouritesNotFound} from '../components/FavouritesNotFound';


export const FavouritesScreen: React.FC<PropsType> = ({navigation}) => {

    const tickets = useSelector(getTickets)
    const favouritesTickets = tickets.filter(el => el.favourites)

    if (favouritesTickets.length === 0) {
        return <FavouritesNotFound/>
    }
    return (
        <View style={s.wrap}>
            <FlatList data={favouritesTickets}
                      keyExtractor={el => el.id}
                      renderItem={({item}) =>
                          <OneTicket item={item} navigation={navigation}/>}

            />
            <StatusBar barStyle={'dark-content'} translucent backgroundColor="transparent"/>
        </View>
    )
}


const s = StyleSheet.create({
    wrap: {
        flex: 1,
        paddingHorizontal: 20
    }
})
type PropsType = {
    navigation: StackNavigationProp<ParamListBase, 'Favourites'>
}


