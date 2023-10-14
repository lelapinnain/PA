import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import { saveAboutYou } from '../../actions/profileAction'
import ImageUpload from '../../Components/ImageUpload'
import Logo from '../../Components/Logo'
import StepsComponent from '../../Components/Steps'

const AboutYou = () => {
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')
  const [question5, setQuestion5] = useState('')
  const [question6, setQuestion6] = useState('')

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const handleSubmit = () => {
    const formData = {
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
    }

    dispatch(saveAboutYou(formData))
    navigation.navigate('AdditionalCompanion')
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo />
        <StepsComponent step1={'step1'} step2={'step2'} />
        <Text style={styles.titleText}>About you</Text>
        <Text style={styles.subtitle}>
          Please take a moment to answer the following questions, which will
          assist us in both improving our service and curating a personalized
          experience for you each time you visit Wynn Resorts.
        </Text>
        <View style={styles.form}>
          <Text style={styles.label}>
            As a Private Access member, your opinions matter to our team. During
            your stay, which elements make you feel valued and appreciated?
          </Text>
          <TextInput
            style={styles.input}
            value={question1}
            onChangeText={setQuestion1}
            placeholder='Enter your answer'
            placeholderTextColor='#BFBFBF'
          />
          <Text style={styles.label}>
            As we strive to anticipate your needs, please indicate the reasons
            you repeatedly choose Wynn and Encore Las Vegas.
          </Text>
          <TextInput
            style={styles.input}
            value={question2}
            onChangeText={setQuestion2}
            placeholder='Enter your answer'
            placeholderTextColor='#BFBFBF'
          />
          <Text style={styles.label}>
            Because we take pride in providing personalized experiences, which
            elements of service or amenities make you feel special and
            recognized?
          </Text>
          <TextInput
            style={styles.input}
            value={question3}
            onChangeText={setQuestion3}
            placeholder='Enter your answer'
            placeholderTextColor='#BFBFBF'
          />
          <Text style={styles.label}>
            Whether it happened at Wynn or another resort, please recall an
            experience that disappointed you in the past.
          </Text>
          <TextInput
            style={styles.input}
            value={question4}
            onChangeText={setQuestion4}
            placeholder='Enter your answer'
            placeholderTextColor='#BFBFBF'
          />
          <Text style={styles.label}>
            Inspiring our guests is also key to our philosophy — with that in
            mind, what inspires you?
          </Text>
          <TextInput
            style={styles.input}
            value={question5}
            onChangeText={setQuestion5}
            placeholder='Enter your answer'
            placeholderTextColor='#BFBFBF'
          />
          <Text style={styles.label}>
            Delighting our guests is integral to everything we do. In what ways
            can we go above and beyond for you, either prior to or during your
            stay?
          </Text>
          <TextInput
            style={styles.input}
            value={question6}
            onChangeText={setQuestion6}
            placeholder='Enter your answer'
            placeholderTextColor='#BFBFBF'
          />
          <ImageUpload />

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
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
    height: 120,
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
export default AboutYou
