import React, { } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  container: {
    color: 'blue',
    fontSize: 30,
  },
  flat: {
    backgroundColor: '#ddd',
  },
  input: {
    backgroundColor: '#ddd',
    margin: 16,
  },
  scroll: {
    backgroundColor: 'green',
    height: 100,
  },
});

const list: string[] = [
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
  'text1',
];


const App = () => {



  return (
    <SafeAreaView>
      <FlatList style={styles.flat}
        data={list}
        renderItem={({ item }) => <Text style={styles.container}>{item}</Text>} />

    </SafeAreaView>
  );
};

export default App;
