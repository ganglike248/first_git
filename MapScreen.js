// MapScreen.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import BannerButton from './BannerButton';

const MapScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('위치 권한을 허용해주세요.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{errorMsg}</Text>
      </View>
    );
  } else if (!location) {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>위치 정보를 불러오는 중...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0230,
          longitudeDelta: 0.0105,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title="현재 위치"
          description="여기에 있습니다."
        />
      </MapView>

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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
});

export default MapScreen;
