import React, { } from 'react';
import { SafeAreaView, Text, Button, View, StyleSheet } from 'react-native';
import { useApp } from './useApp';


const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
  view1: {
    display: 'flex',
    backgroundColor: 'blue',
    padding: 24,
    flexDirection: 'row',
  },
  view2: {
    backgroundColor: 'pink',
  },
});


const App = () => {
  const { handleOnPress, value } = useApp();

  return (
    <SafeAreaView>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Text>Novo Teste</Text>
        </View>
        <View style={styles.view2}>
          <Text>Novo Teste</Text>
        </View>
      </View>
      <Text>{value}</Text>
      <Button title="BOTAO" onPress={handleOnPress} />
    </SafeAreaView>
  );
};

export default App;
