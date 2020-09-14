import React from 'react';
import {View, Text, StyleSheet, Animated, ImageRequireSource, Dimensions} from 'react-native';

const {width} = Dimensions.get("window")
const FONT_SIZE = 30

interface dataShape {
    type: string,
    imageUri: ImageRequireSource,
    heading: string,
    description: string,
    key: string,
    color: string
}

export type Item = dataShape

interface TitleScrollViewProps {
    data: Item[],
    scrollX: Animated.Value
}

const TitleScrollView = ({data, scrollX}: TitleScrollViewProps) => {
    const translateY = scrollX.interpolate({
        inputRange: [-width,0,width],
        outputRange: [FONT_SIZE,0,-FONT_SIZE]
    })
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.content, {transform: [{translateY}]}]}>
                {
                    data.map(el => (
                    <Text key={el.key} style={styles.title}>{el.type}</Text>
                    ))
                }
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: FONT_SIZE,
        overflow: "hidden"
    },
    content: {

    },
    title: {
        fontSize: FONT_SIZE,
        lineHeight: FONT_SIZE,
        letterSpacing: 3
    }
})

export default TitleScrollView