import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { t } from 'react-native-tailwindcss';
import styled from 'styled-components';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

// modules
import Main from './src/main';
import { SubText } from './src/components/Text';
import { CirecleBtn } from './src/components/Button';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
      <CirecleBtn>
        <Text>tet</Text>
      </CirecleBtn>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop : '10%',
    width : "100%",
    height : "100%"
  },
});
