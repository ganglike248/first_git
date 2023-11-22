// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {/* 홈 화면 배너 */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.banner}>
          <View style={styles.bannerContent}>
            <Image source={require('./assets/home_button.png')} style={styles.bannerImage} />
            <Text style={styles.bannerText}>홈</Text>
          </View>
        </TouchableOpacity>
        {/* 채팅 시작 배너 */}
        <TouchableOpacity onPress={() => navigation.navigate('Chat')} style={styles.banner}>
          <View style={styles.bannerContent}>
            <Image source={require('./assets/chat_button.png')} style={styles.bannerImage} />
            <Text style={styles.bannerText}>채팅</Text>
          </View>
        </TouchableOpacity>

        {/* 달력 배너 */}
        <TouchableOpacity onPress={() => navigation.navigate('Calendar')} style={styles.banner}>
          <View style={styles.bannerContent}>
            <Image source={require('./assets/calendar_button.png')} style={styles.bannerImage} />
            <Text style={styles.bannerText}>달력</Text>
          </View>
        </TouchableOpacity>

        {/* 지도 배너 */}
        <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.banner}>
          <View style={styles.bannerContent}>
            <Image source={require('./assets/map_button.png')} style={styles.bannerImage} />
            <Text style={styles.bannerText}>지도</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  banner: {
    backgroundColor: 'lightblue',
    width: 80,
    padding: 10,
    borderRadius: 20,
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
