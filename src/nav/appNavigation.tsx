import React, {useEffect} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {RootStackScreen} from './index';
import {useDispatch} from 'react-redux';
import {fetchData} from '../store/flySaga';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

export const AppNavigation = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchData())
    }, [])

    let [fontsLoaded] = useFonts({
        Abel_Regular: require('../../assets/fonts/Abel_Regular.ttf'),
        SF_PRO_TEXT: require('../../assets/fonts/SF_Pro_Text_Regular.ttf')
    });

    if (!fontsLoaded) return <AppLoading/>

    return (
        <NavigationContainer theme={{...DefaultTheme, dark: false}}>
            <RootStackScreen/>
        </NavigationContainer>)
}

