import React from 'react'
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const Details = (props) => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: `You’ve expressed interest in ${props.event.card.title}`,
      text2: 'An ambassador will reach out to you with more information. 🥳',
    })
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: props.event.card.cardImage.Url }}
        resizeMode='cover'
        style={styles.image}
      ></ImageBackground>
      <ScrollView styles={styles.bodyContainer}>
        <Text style={styles.title}>{props.event.card.title}</Text>

        <Text style={styles.subtitle}>{props.event.card.subTitle}</Text>
        <Text style={styles.title}>About the event</Text>
        <Text style={styles.subtitle}>
          {props.event.eventDetails.description}
        </Text>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={showToast}>
        <Text style={styles.buttonText}>Like</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    padding: 100,
    marginBottom: 50,
  },
  bodyContainer: {
    paddingTop: 20,
  },

  text: {
    color: 'white',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  descriptionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },

  button: {
    margin: 5,
    backgroundColor: '#2196F3',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 100,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
})

export default Details
