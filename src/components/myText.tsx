import React from 'react';
import {Text, StyleSheet} from 'react-native';


export const TextAbel = React.memo((props: { [key: string]: any }) => (
    <Text style={{...styles.base, ...props.style}}>{props.children}</Text>
))

const styles = StyleSheet.create({base: {fontFamily: 'Abel_Regular'}})


export const TextSF = React.memo((props: { [key: string]: any }) => (
    <Text style={{...s.base, ...props.style}}>{props.children}</Text>
))

const s = StyleSheet.create({
    base: {
        fontFamily: 'SF_PRO_TEXT',
        fontSize: 13,
        color: '#878787'
    }
})
