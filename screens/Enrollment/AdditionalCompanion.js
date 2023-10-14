import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import { saveAdditional } from '../../actions/profileAction'
import Logo from '../../Components/Logo'
import StepsComponent from '../../Components/Steps'

const AdditionalCompanion = () => {
  const [name, setName] = useState('')
  const [relationship, setRelationship] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const handleSubmit = () => {
    const formData = {
      name,
      relationship,
      email,
    }

    dispatch(saveAdditional(formData))
    navigation.navigate('Summary')
  }

  return (
    <ScrollView style={styles.container}>
      <Logo />
      {/* <Image source={require('../../assets/Logo.svg')} style={styles.logo} /> */}

      <StepsComponent step1={'step1'} step2={'step2'} step3='step3' />
      <Text style={styles.titleText}>Additional Companion</Text>
      <Text style={styles.subtitle}>
        Is there someone you would like to add to your Private Access
        membership? If not, you can skip this step.
      </Text>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder='Enter name'
          placeholderTextColor='#BFBFBF'
        />
        <Text style={styles.label}>Relationship</Text>
        <TextInput
          style={styles.input}
          value={relationship}
          onChangeText={setRelationship}
          placeholder='Enter relationship'
          placeholderTextColor='#BFBFBF'
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder='Enter email'
          placeholderTextColor='#BFBFBF'
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003333',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  subtitle: {
    flex: 1,
    alignItems: 'center',

    color: '#FFFFFF',
    padding: 30,
  },
  titleText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFFFF',
    fontSize: 25,
    alignSelf: 'center',
    paddingTop: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    padding: 16,
    marginTop: 32,
    backgroundColor: '#003333',
    borderRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFFFFF',
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#D9946D',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    color: '#FFFFFF',
  },
  button: {
    marginTop: 100,
    backgroundColor: '#D9946D',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export default AdditionalCompanion
