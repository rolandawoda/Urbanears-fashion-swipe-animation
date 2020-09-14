import React from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';
import {Item} from './TitleScrollView';

const {width} = Dimensions.get("window");

const CIRCLE_RADIUS = width * 0.4

interface  BgCircleProps {
    data: Item[],
    scrollX: Animated.Value
}

const BgCircle = ({data, scrollX}: BgCircleProps) => {
    return (
        <View style={styles.container}>
            {
                data.map((el, i) => {
                    const scale = scrollX.interpolate({
                        inputRange: [width * (i-0.5), width * i, width * (i + 0.3 )],
                        outputRange: [0.3,1,0.3]
                    })

                    const opacity = scrollX.interpolate({
                        inputRange: [width * (i-0.5), width * i, width * (i + 0.3 )],
                        outputRange: [0,0.3,0]
                    })
                    return (
                    <Animated.View key={el.key} style={[styles.circle, {opacity, backgroundColor: el.color, transform: [{scale}]}]} />
                )})
            }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: 'center'
    },
    circle: {
        width: CIRCLE_RADIUS,
        height: CIRCLE_RADIUS,
        borderRadius: CIRCLE_RADIUS / 2,
        position: 'absolute',
        top: '15%'
    }
});

export default BgCircle;

