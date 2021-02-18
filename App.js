import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Login Into App  </Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => alert("Login Succesfully")}
        >
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userBtn}
        >
          <Text style={styles.btnTxt}
            onPress={() => alert("signUP Succesfully")} > SignUp</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"
        backgroundColor="red"
        barStyle="light-content" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    margin: 10
  },
  input: {
    width: '90%',
    padding: 12,
    marginBottom: 12,
    backgroundColor: 'white'
  },
  userBtn: {
    backgroundColor: "#FFD700",
    padding: 15,
    width: "45%"
  },
  btnTxt: {
    fontSize: 13,
    textAlign: 'center'
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  }
});
