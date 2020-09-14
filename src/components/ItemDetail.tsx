import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Animated} from 'react-native';

import {Item} from './TitleScrollView';

const {width, height} = Dimensions.get("screen")

const IMAGE_CONTAINER_WIDTH = width;
const IMAGE_CONTAINER_HEIGHT = height * 0.55;
const IMAGE_WIDTH = width * 0.75

interface ItemDetailProps {
    item: Item,
    scrollX: Animated.Value,
    index: number
}

const ItemDetail = ({item, scrollX, index}: ItemDetailProps) => {
    const scale = scrollX.interpolate({
        inputRange: [(index -1) * width, index * width, (index + 1) * width],
        outputRange: [0.1, 1.1, 0.1]
    })

    const translateTitleX = scrollX.interpolate({
        inputRange: [(index -1) * width, index * width, (index + 1) * width],
        outputRange: [width * 2, 0, -width * 2]
    })

    const translateDescX = scrollX.interpolate({
        inputRange: [(index -1) * width , index * width, (index + 1) * width],
        outputRange: [width * 0.7, 0, -width * 0.7]
    })

    const opacity = scrollX.interpolate({
        inputRange: [(index -1) * width, index * width, (index + 1) * width],
        outputRange: [0, 1, 0]
    })
    return (
        <View style={[styles.container]}>
            <View>
                <View style={styles.imageContainer}>
                    <Animated.Image 
                        style={[styles.image,{
                            transform: [
                                {scale}
                            ]
                        }]}
                        source={item.imageUri}
                    />
                </View>
            </View>
            <View style={styles.statements}>
                <Animated.Text style={[styles.heading, {opacity,transform: [{translateX: translateTitleX}]}]}>{item.heading}</Animated.Text>
                <Animated.Text style={[styles.description,{opacity, transform: [{translateX: translateDescX}]}]} numberOfLines={2}>{item.description}</Animated.Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: IMAGE_CONTAINER_WIDTH,
    },
    image: {
        width: IMAGE_WIDTH,
        height: IMAGE_CONTAINER_HEIGHT,
        resizeMode: "contain"
    },
    imageContainer: {
        width: IMAGE_CONTAINER_WIDTH,
        height: IMAGE_CONTAINER_HEIGHT,
        overflow: "hidden",
        alignItems: "center"
    },
    statements: {
        paddingLeft: width * 0.30,
        paddingRight: 15
    },
    heading: {
        fontSize: 23,
        letterSpacing: 5,
        marginBottom: 10,
    },
    description: {
        color: '#ccc',
    }
})

export default ItemDetail;