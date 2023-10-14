import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { LoginMethod } from '../actions/AuthAction'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const { loading, AuthToken, error } = useSelector((state) => state.Login)

  useEffect(() => {
    if (AuthToken != 0 && error == false) {
      navigation.navigate('Enrollment')
    }
  }, [dispatch, loading, AuthToken, error])
  const handlePortal = () => {
    navigation.navigate('Events')
  }
  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMsg('Username and password are required')
      return
    }

    setErrorMsg('')
    const data = { userName: email, Password: password }
    await dispatch(LoginMethod(data))
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size='large' color='#D9946D' />
      ) : (
        <View>
          <Text style={styles.title}>Welcome</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType='email-address'
              placeholder='Enter your email'
              placeholderTextColor='#BFBFBF'
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder='Enter your password'
              placeholderTextColor='#BFBFBF'
            />

            <TouchableOpacity onPress={handlePortal}>
              <Text style={styles.resetPassword}>Reset Password</Text>
            </TouchableOpacity>
            {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : <></>}
            {error ? (
              <Text style={styles.error}>Incorrect username or password</Text>
            ) : (
              <></>
            )}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003333',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 32,
  },
  error: {
    fontSize: 24,
    textAlign: 'center',
    color: 'red',
    marginBottom: 32,
  },
  form: {
    backgroundColor: '#003333',
    borderRadius: 8,
    padding: 16,
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
  resetPassword: {
    color: '#FFFFFF',
    textAlign: 'right',
    marginBottom: 16,
  },
})

export default Login
