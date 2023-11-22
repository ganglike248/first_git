// BannerButton.js
import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const BannerButton = ({ text, iconSource, onPress }) => {
  return (
    <View style={[styles.container, styles.banner]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.bannerContent}>
          <Image source={iconSource} style={styles.bannerImage} />
          <Text style={styles.bannerText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  banner: {
    backgroundColor: 'lightblue',
    width: '25%',
    padding: 10,
    marginVertical: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
  bannerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
  bannerImage: {
    width: 30,
    height: 30,
  },
});

export default BannerButton;
