
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';


const styles = StyleSheet.create({
  container: {
    color: 'blue',
    fontSize: 30,
    flexDirection: 'row',
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


const App = () => {



  return (
    <SafeAreaView>
      <ScrollView horizontal style={styles.scroll} >
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>
        <Text style={styles.container}>Testando</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
