import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { colors } from './src/common/colors';
import Body from './src/components/Body';
import Header from './src/components/Header';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <Header title="Hike Calculator" />
      <Body />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.gray
  }
});

export default App;
