import React from 'react';
import { View, StyleSheet } from 'react-native';
import BannerButton from './BannerButton';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Your HomeScreen content here */}

      <View style={styles.buttonContainer}>
        {/* 홈 화면 배너 */}
        <BannerButton
          text="홈"
          iconSource={require('./assets/home_button.png')}
          onPress={() => navigation.navigate('Home')}
        />
        
        {/* 채팅 시작 배너 */}
        <BannerButton
          text="채팅"
          iconSource={require('./assets/chat_button.png')}
          onPress={() => navigation.navigate('Chat')}
        />

        {/* 달력 배너 */}
        <BannerButton
          text="달력"
          iconSource={require('./assets/calendar_button.png')}
          onPress={() => navigation.navigate('Calendar')}
        />

        {/* 지도 배너 */}
        <BannerButton
          text="지도"
          iconSource={require('./assets/map_button.png')}
          onPress={() => navigation.navigate('Map')}
        />
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
    bottom: -30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
