import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {flyActions} from '../store/flyReducer';
import {useDispatch} from 'react-redux';

export const Heart: React.FC<HeartType> = React.memo(({favourites, ticketId, styles}) => {
    const dispatch = useDispatch()
    const handlerHeart = () => {
        dispatch(flyActions.toggleFavorite(ticketId))
    }
    return (
        <TouchableOpacity style={{...stylesHeart.heart, ...styles}} onPress={handlerHeart}>
            {favourites
                ? <FontAwesome name="heart" size={24} color='#F04393'/>
                : <FontAwesome name="heart-o" size={24} color='#c4c4c4'/>
            }
        </TouchableOpacity>
    )
})
type HeartType = {
    favourites: boolean
    ticketId: string
    styles?: any
}
const stylesHeart = StyleSheet.create({
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
