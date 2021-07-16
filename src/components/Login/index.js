import React, {useState} from 'react';
import {styles} from './styles';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';

export default function Login() {
  const [text, setText] = useState(null);
  const [number, setPassword] = useState(null);
  const handleSubmit = () => {
    Alert.alert('successful');
  };
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={require('../../assets/images/3.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            textAlign: 'center',
            fontWeight: 'bold',
            margin: 10,
          }}>
          sign up
        </Text>
        <Text
          style={{
            color: '#DDD',
            marginVertical: 30,
            fontSize: 16,
            textAlign: 'center',
          }}>
          Sign up with one of the following options
        </Text>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#DDDDDD',
              padding: 10,
              width: 100,
              borderRadius: 15,
            }}
            onPress={handleSubmit}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                borderRadius: 15,
                color: 'blue',
              }}>
              F
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#DDDDDD',
              padding: 10,
              width: 100,
              borderRadius: 15,
            }}
            onPress={handleSubmit}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                borderRadius: 15,
                color: 'red',
              }}>
              G
            </Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.emailAndPasswordInput}
          placeholder="email"
          onChangeText={setText}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.emailAndPasswordInput}
          placeholder="password"
          onChangeText={setPassword}
          keyboardType="numeric"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#DDDDDD',
            paddingVertical: 20,
            marginVertical: 45,
            borderRadius: 15,
          }}
          onPress={handleSubmit}>
          <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
            login
          </Text>
        </TouchableOpacity>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>
          already have an account?
        </Text>
      </ImageBackground>
    </View>
  );
}
