import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Animated, Dimensions, Image, ListRenderItem } from 'react-native';

import TitleScrollView, { Item } from './src/components/TitleScrollView';
import BurgerMenuButton from './src/components/BurgerMenuButton';
import ItemDetail from './src/components/ItemDetail';
import Pagination from './src/components/Pagination';
import BgCircle from './src/components/BgCircle';
import data from './src/data/data';

const { width } = Dimensions.get('window');


export default function App() {
  const scrollX = useRef(new Animated.Value(0)).current

  const renderItem = ({ item, index }) => (
    <ItemDetail {...{ item }} scrollX={scrollX} index={index} />
  );
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TitleScrollView data={data} scrollX={scrollX} />
        <BurgerMenuButton />
      </View>
      <View style={styles.listContainer}>
        <BgCircle data={data} scrollX={scrollX} />
        <Animated.FlatList
          data={data}
          bounces={false}
          renderItem={renderItem}
          keyExtractor={item => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          snapToAlignment="center"
          decelerationRate={0}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: true
          })}
        />
      </View>
      <Image style={styles.logo} source={require('./src/assets/ue_black_logo.png')} />
      <Text style={styles.watermark}>HWATERY</Text>
      <Pagination data={data} scrollX={scrollX} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 50
  },
  header: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  listContainer: {
    flex: 1,
  },
  logo: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: 200,
    resizeMode: 'contain',
    transform: [
      { rotate: '-90deg' },
      { translateX: 100 },
      { translateY: -60 },
    ]
  },
  watermark: {
    position: "absolute",
    right: 0,
    top: 160,
    fontSize: 15,
    letterSpacing: 5,
    color: '#ccc',
    transform: [
      { rotate: '90deg' },
      { translateY: -25 }
    ]
  }
});
