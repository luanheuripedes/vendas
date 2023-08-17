import React, { } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


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
  touchable:{
    backgroundColor: 'blue',
    padding: 16,
    borderRadius:4,
    margin:16,
  },
});



const App = () => {
  const handleOnClick = () =>{
console.log('Passou o click');
  };


  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleOnClick} style = {styles.touchable}>
        <View>
          <Text>Clicar</Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default App;
