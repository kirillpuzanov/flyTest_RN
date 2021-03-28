import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TicketScreen} from '../screens/ticketScreen/ticketScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FavouritesScreen} from '../screens/favouritesScreen';
import {BrowseScreen} from '../screens/browseScreen';


const RootStack = createStackNavigator();
const TicketStack = createStackNavigator();
const TicketsStack = createMaterialTopTabNavigator();


const TicketsStackScreen = () => (
    <TicketsStack.Navigator >
        <TicketsStack.Screen name='Favourites' component={FavouritesScreen}/>
        <TicketsStack.Screen name='Browse' component={BrowseScreen}/>
    </TicketsStack.Navigator>
)

const TicketStackScreen = () => (
    <TicketStack.Navigator headerMode="none">
        <TicketStack.Screen name={'Ticket'} component={TicketScreen}/>
    </TicketStack.Navigator>
)

export const RootStackScreen = () => (
    <RootStack.Navigator>
        <RootStack.Screen name="Flights" component={TicketsStackScreen} options={{
            headerTitleAlign: 'center', headerTitleStyle: {fontFamily: 'Abel_Regular', fontSize: 19},
            headerStyle: {elevation: 0}}}
        />

        <RootStack.Screen options={{headerShown: false}}
                          name="Ticket" component={TicketStackScreen}/>
    </RootStack.Navigator>
);
