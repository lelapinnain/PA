import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Toast from 'react-native-toast-message'

const Card = (props) => {
  const handleButtonPress = () => {
    props.navigation.navigate('Details', { event: props.event })
  }
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: `You’ve expressed interest in ${props.event.card.title}`,
      text2: 'An ambassador will reach out to you with more information. 🥳',
    })
  }

  return (
    <View key={props.event.card.cta} style={styles.card}>
      <TouchableOpacity onPress={handleButtonPress}>
        <Image
          source={{ uri: props.event.card.cardImage.Url }}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{props.event.card.title}</Text>
        <Text style={styles.description}>{props.event.card.subTitle}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleButtonPress}>
            <Text style={styles.readmoreText}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={showToast}>
            <Text style={styles.buttonText}>Intersted</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scroll: {
    padding: 16,
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  button: {
    padding: 12,
    borderRadius: 20,
    width: '50%',
    backgroundColor: 'white',
    border: 'black',
  },
  buttonText: {
    color: '#000',
    alignSelf: 'center',
  },
  readMore: {
    width: '50%',
  },
  readmoreText: {
    color: 'black',
    paddingBottom: 15,
  },
})

export default Card
