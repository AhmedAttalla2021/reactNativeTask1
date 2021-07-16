import React, {useState} from 'react';
import type {Node} from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Login from './src/components/Login';

const App: () => Node = () => {
  const [text, setText] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSubmit = () => {
    Alert.alert('successful');
  };
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: 'black',
      }}>
      {
        //   style={{
        //     flex: 1,
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //   }}>
        //   <TextInput
        //     style={styles.inputText}
        //     placeholder="email"
        //     onChangeText={setText}
        //     keyboardType="email-address"
        //   />
        //   <TextInput
        //     style={styles.inputText}
        //     placeholder="password"
        //     onChangeText={setPassword}
        //     keyboardType="numeric"
        //     secureTextEntry={true}
        //   />
        //   <TouchableOpacity
        //     style={{backgroundColor: '#DDDDDD', padding: 10}}
        //     onPress={handleSubmit}>
        //     <Text>login</Text>
        //   </TouchableOpacity>
      }
      <Login />
    </View>
  );
};
export default App;
