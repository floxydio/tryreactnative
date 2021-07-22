import React, {useState, Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
    global: {
      marginLeft: 10,
      marginRight: 10,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 0.5,
      paddingLeft: 20,
    },
    input2: {
      width: '100%',
      height: 40,
      borderWidth: 0.5,
      marginTop: 20,
      marginBottom: 40,
      paddingLeft: 20,
    },
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.global}>
      <Text style={styles.text}>Login Area</Text>
      <SafeAreaView>
        <TextInput style={styles.input} value="Input Your Email..." />
        <TextInput
          keyboardType="visible-password"
          style={styles.input2}
          value="Input Your Password..."
        />
      </SafeAreaView>
      <Button title="Login" color="red" />
    </View>
  );
}
