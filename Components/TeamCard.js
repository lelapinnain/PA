import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

const TeamCard = (props) => {
  const handleButtonPress = () => {}

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={handleButtonPress}>
        <Image
          source={{ uri: props.member.profileImage.Url }}
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>{props.member.title}</Text>
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
    height: 350,
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

export default TeamCard
