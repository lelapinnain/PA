import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import ClubLogo from '../../Components/ClubLogo'

function Thankyou() {
  const navigation = useNavigation()
  const handleSubmit = () => {
    navigation.navigate('Events')
  }
  return (
    <View style={styles.container}>
      <ClubLogo />
      <Text style={styles.subtitle}>
        Congratulations on becoming a Wynn Private Access member We are
        delighted to welcome you to Private Access, the premier recognition
        program that rewards our most valued guests. On the following page
        you’ll enter our Member Portal, where you can learn more about the
        program, explore the benefits you now will enjoy, and communicate with
        the Private Access Team. Welcome to Private Access
      </Text>
      <Text style={styles.titleText}>
        We are delighted to welcome you to Private Access, the premier
        recognition program that rewards our most valued guests. On the
        following page you’ll enter our Member Portal, where you can learn more
        about the program, explore the benefits you now will enjoy, and
        communicate with the Private Access Team.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>WELCOME TO PRIVATE ACCESS</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003333',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 15,
    alignSelf: 'center',
    padding: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 15,
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: -70,
    padding: 15,
    fontWeight: 'bold',
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

export default Thankyou
