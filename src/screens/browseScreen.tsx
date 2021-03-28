import React from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {OneTicket} from '../components/OneTicket';
import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import {getTickets} from '../store/flySelectors';


export const BrowseScreen: React.FC<BrowseScreenType> = ({navigation}) => {

    const tickets = (useSelector(getTickets))

    return (
        <View style={s.wrap}>
            <FlatList data={tickets}
                      renderItem={({item}) =>
                          <OneTicket item={item} navigation={navigation}/>}
                      keyExtractor={el => el.id}
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
type BrowseScreenType = {
    navigation: StackNavigationProp<ParamListBase, 'Browse'>
}
