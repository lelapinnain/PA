import { useNavigation } from '@react-navigation/native'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import StepsComponent from '../../Components/Steps'
import Logo from '../../Components/Logo'
import { AboutYouSubmit } from '../../actions/profileAction'

const Summary = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const personalData = useSelector((state) => state.enrollment.personal)
  const aboutYouData = useSelector((state) => state.enrollment.about)
  const additionalData = useSelector((state) => state.enrollment.additional)
  const { loading, AuthToken, error } = useSelector((state) => state.Login)
  const { Images } = useSelector((state) => state.userImages)
  console.log(Images['uri'])

  console.log()
  const handleSubmit = async () => {
    const token = AuthToken['access_token']
    //await dispatch(AboutYouSubmit(aboutYouData, token))
    navigation.navigate('ThankYou')
  }

  return (
    <ScrollView style={styles.container}>
      <Logo />
      <StepsComponent step1={'1'} step2={'2'} step3={'3'} step4={'4'} />
      <Text style={styles.titleText}>Summary</Text>
      <Text style={styles.subtitle}>
        Please take a moment to ensure the below information is correct before
        you click “Submit.”
      </Text>
      <Text style={styles.headers}>Personal Information</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          editable={false}
          style={styles.input}
          value={personalData.name}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={personalData.email}
          editable={false}
        />
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={personalData.address}
          editable={false}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={personalData.phoneNumber}
          editable={false}
        />
      </View>
      <Text style={styles.headers}>About You</Text>
      <View style={styles.form}>
        <Text style={styles.label}>
          As a Private Access member, your opinions matter to our team. During
          your stay, which elements make you feel valued and appreciated?
        </Text>
        <TextInput
          editable={false}
          style={styles.Textinput}
          value={aboutYouData.question1}
        />
        <Text style={styles.label}>
          As we strive to anticipate your needs, please indicate the reasons you
          repeatedly choose Wynn and Encore Las Vegas.
        </Text>
        <TextInput
          style={styles.Textinput}
          value={aboutYouData.question2}
          editable={false}
        />
        <Text style={styles.label}>
          Because we take pride in providing personalized experiences, which
          elements of service or amenities make you feel special and recognized?
        </Text>
        <TextInput
          style={styles.Textinput}
          value={aboutYouData.question3}
          editable={false}
        />
        <Text style={styles.label}>
          Whether it happened at Wynn or another resort, please recall an
          experience that disappointed you in the past.
        </Text>
        <TextInput
          style={styles.Textinput}
          value={aboutYouData.question4}
          editable={false}
        />
        <Text style={styles.label}>
          Inspiring our guests is also key to our philosophy — with that in
          mind, what inspires you?
        </Text>
        <TextInput
          style={styles.Textinput}
          value={aboutYouData.question5}
          editable={false}
        />
        <Text style={styles.label}>
          Delighting our guests is integral to everything we do. In what ways
          can we go above and beyond for you, either prior to or during your
          stay?
        </Text>
        <TextInput
          style={styles.inpTextinputut}
          value={aboutYouData.question6}
          editable={false}
        />
      </View>
      {Images && (
        <View>
          <Text style={styles.headers}>Images</Text>
          <Image source={{ uri: Images['uri'] }} style={[styles.image]} />
        </View>
      )}
      <Text style={styles.headers}>Additional Companion</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          editable={false}
          style={styles.input}
          value={additionalData.name}
        />
        <Text style={styles.label}>Relationship</Text>
        <TextInput
          style={styles.input}
          value={additionalData.relationship}
          editable={false}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={additionalData.email}
          editable={false}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#D9946D',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    color: '#FFFFFF',
  },
  Textinput: {
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
  image: {
    width: 110,
    height: 110,

    marginLeft: 20,
  },
  headers: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 20,
    margin: 5,
    fontWeight: 'bold',
  },
})
export default Summary
