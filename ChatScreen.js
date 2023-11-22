import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'; // Import View, StyleSheet, KeyboardAvoidingView, and Platform
import { GiftedChat } from 'react-native-gifted-chat';
import BannerButton from './BannerButton';

export default function ChatScreen({ navigation }) {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // Adjust this value as needed
    >
      <View style={styles.container}>
        <GiftedChat
          messages={messages}
          onSend={(newMessages) => onSend(newMessages)}
          user={{ _id: 1, name: 'User' }}
        />
      </View>

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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 70, // Adjust this value as needed
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
