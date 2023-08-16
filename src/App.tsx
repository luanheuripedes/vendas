import React, { useState } from 'react';
import { NativeSyntheticEvent, SafeAreaView, StyleSheet, TextInput, TextInputChangeEventData } from 'react-native';


const styles = StyleSheet.create({
  container: {
    color: 'blue',
  },
  input: {
    backgroundColor: '#ddd',
    margin: 16,
  },
});


const App = () => {

  const [value, setValue] = useState<string>('');

  const handleOnChangeInput = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(event.nativeEvent.text);
  };
  return (
    <SafeAreaView>
      <TextInput
        onChange={handleOnChangeInput} value={value} style={styles.input} />
    </SafeAreaView>
  );
};

export default App;
