import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { t } from 'react-native-tailwindcss';
import styled from 'styled-components';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

// modules
import Main from './src/main';
import { SubText } from './src/components/Text';
import { CirecleButton } from './src/components/Button';

const SView = styled(View)`
  ${[t.mB4, t.bgGray500, t.rounded, t.m1,]}
`;

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
      <CirecleButton>
        <Text>tet</Text>
      </CirecleButton>
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
