import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Login from '../Components/Login'
import Logo from '../Components/Logo'

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Login />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003333',
  },
})
export default LoginScreen
