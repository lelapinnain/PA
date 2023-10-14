import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { savePersonalInfo } from '../../actions/profileAction'
import StepsComponent from '../../Components/Steps'
import Logo from '../../Components/Logo'

const PersonalInfo = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const dispatch = useDispatch()
  const navigation = useNavigation()
  useEffect(() => {}, [dispatch])

  const handleSubmit = () => {
    const formData = {
      name,
      email,
      address,
      phoneNumber,
    }
    dispatch(savePersonalInfo(formData))
    navigation.navigate('Aboutyou')
  }

  // if (loading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size='large' color='#FFC107' />
  //     </View>
  //   )
  // }

  return (
    <ScrollView style={styles.container}>
      <Logo />
      <StepsComponent step1={'step1'} />
      <Text style={styles.titleText}>Personal Information</Text>
      <Text style={styles.subtitle}>
        On the following pages we’re going to ask a few questions to get to know
        you better. We appreciate your time in providing this information to
        help serve you better.
      </Text>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder='Enter your name'
          placeholderTextColor='#BFBFBF'
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          placeholder='Enter your email'
          placeholderTextColor='#BFBFBF'
        />
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder='Enter your address'
          placeholderTextColor='#BFBFBF'
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType='phone-pad'
          placeholder='Enter your phone number'
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
    marginTop: 5,
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
    marginTop: 20,
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
export default PersonalInfo
