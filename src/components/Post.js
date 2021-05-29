import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Post = () => {
  return (
    <View style={styles.conteiner}>
      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://revistaaxxis.com.co/wp-content/uploads/2017/12/axxis-revista-peter-pichler-4.jpg',
        }}
      />
      {/* bed & bedroom */}

      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* descriptions */}

      <Text style={styles.descriptions} numberOfLines={2}>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci qui
        soluta error sunt placeat veritatis dignissimos beatae pariatur, omnis
        similique animi laboriosam laudantium hic deleniti eaque voluptate,
        maxime vero? Sit.
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.OldPrice}>$35 </Text>
        <Text style={styles.newPrice}> $30</Text>
        /nigth
      </Text>

      {/* total price */}
      <Text style={styles.totalPrice}>$239</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  conteiner: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  descriptions: {
    fontSize: 18,
    lineHeight: 20,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  OldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
});
