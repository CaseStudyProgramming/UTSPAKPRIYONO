import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

// ... (other imports)

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WELCOME</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.RegisterW}>Register with</Text>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('./assets/facebook.png')}
          />
          <Image
            style={styles.logo}
            source={require('./assets/apple.png')}
          />
          <Image
            style={styles.logo}
            source={require('./assets/google.png')}
          />
        </View>

        <Text style={styles.labelor}>---- or ----</Text>


        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
        />



        <Text style={styles.label}>Password</Text>


        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.checkboxText}>I agree <Text style={{ fontWeight: 'bold' }}>Terms and Conditions</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="SIGN UP"
            onPress={() => {
            }}
          />
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    height: 150,
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    justifyContent: 'center', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white', 
  },
  formContainer: {
    width: 370,
    margin: 20,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    top:-70,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  RegisterW:{
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:20,
  },
  labelor:{
    textAlign: 'center',
    fontSize:16,
    marginTop:30,
  },
  input: {
    width: '90%',
    height: 40,
    borderRadius: 5,
    padding: 10,
    marginLeft:10,
    borderWidth: 1, 
    borderColor: '#ccc', 
  },
  buttonContainer: {
   
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#0e1216',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  logo: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop:15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default App;


