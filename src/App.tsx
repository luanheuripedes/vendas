import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// styled components
const TextNew = styled.Text`
  font-size:  24px;
  color: blue;
`;

const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
});

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.container}>Testando</Text>
      <TextNew>Novo Teste</TextNew>
    </SafeAreaView>
  );
};

export default App;
