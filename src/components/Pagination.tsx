import React from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import {Item} from './TitleScrollView';

const {width} = Dimensions.get('window');

const CIRCLE_RADIUS = 15
const CIRCLE_SPACING = 20
const OUTTER_RADIUS = CIRCLE_RADIUS + CIRCLE_SPACING * 2

interface PaginationProps {
    data: Item[],
    scrollX: Animated.Value
}

const Pagination = ({data, scrollX}:PaginationProps) => {
    const translateX = scrollX.interpolate({
        inputRange: [-width, 0,width],
        outputRange: [-OUTTER_RADIUS,0, OUTTER_RADIUS]
    })
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Animated.View style={[styles.indicator, {transform: [{translateX}]}]} />
                {
                    data.map(el => (
                        <View key={el.key} style={[styles.circle, {backgroundColor: el.color}]} />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    circle: {
        width: CIRCLE_RADIUS,
        height: CIRCLE_RADIUS,
        borderRadius: CIRCLE_RADIUS / 2,
        marginHorizontal: CIRCLE_SPACING
    },
    indicator: {
        position: "absolute",
        left: 0,
        top: -(OUTTER_RADIUS - CIRCLE_RADIUS) / 2, 
        width: OUTTER_RADIUS,
        height: OUTTER_RADIUS,
        borderRadius: OUTTER_RADIUS / 2,
        borderWidth: 1.5,
        borderColor: '#eee'


    }
})

export default Pagination