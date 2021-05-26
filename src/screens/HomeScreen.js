import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = props => {
  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        {/* title  */}

        <Pressable
          style={styles.searchButton}
          onPress={() => console.warn('holi')}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={styles.searchTextBotton}>where are you going</Text>
        </Pressable>

        <Text style={styles.title}>Go Near</Text>

        {/* BUTTON */}

        <Pressable style={styles.button} onPress={() => console.warn('holi')}>
          <Text style={styles.textBotton}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  textBotton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    marginLeft: 25,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen').width - 10,

    borderRadius: 20,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    zIndex: 100,
  },
  searchTextBotton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
