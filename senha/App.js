import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import ForgotPasswordScreen from './ForgotPasswordScreen'; // Certifique-se de que o caminho está correto

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f4f4" />
      <ForgotPasswordScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
});

export default App;
