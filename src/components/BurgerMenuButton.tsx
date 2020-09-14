import React from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const {width, height} = Dimensions.get("window")
const BURGER_WIDTH = 25;
const BURGER_HEIGHT = 200;
const BURGER_BORDER_WIDTH = 2;
const BURGER_BORDER_COLOR = 'black';
const BURGER_BORDER_SPACING = 3.5;

const BurgerMenuButton = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.topBar}/>
                <View style={styles.middleBar}/>
                <View style={styles.bottomBar}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: BURGER_WIDTH,
        alignItems: 'flex-end'
    },
    topBar: {
        width: BURGER_WIDTH,
        borderWidth: BURGER_BORDER_WIDTH,
        borderColor: BURGER_BORDER_COLOR,
        marginBottom: BURGER_BORDER_SPACING
    },
    middleBar: {
        width: BURGER_WIDTH * 0.65,
        borderWidth: BURGER_BORDER_WIDTH,
        borderColor: BURGER_BORDER_COLOR,
        marginBottom: BURGER_BORDER_SPACING
    },
    bottomBar: {
        width: BURGER_WIDTH * 0.8,
        borderWidth: BURGER_BORDER_WIDTH, 
        borderColor: BURGER_BORDER_COLOR,
    }
})

export default BurgerMenuButton;