import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Toast from 'react-native-toast-message'

import CustomTabBar from './Components/CustomTabBar'
import EventsScreen from './screens/EventsScreen'
import EventDetailsScreen from './screens/EventDetailsScreen'
import store from './store/store'
import PersonalInfo from './screens/Enrollment/PersonalInfo'
import AboutYou from './screens/Enrollment/Aboutyou'
import AdditionalCompanion from './screens/Enrollment/AdditionalCompanion'
import Summary from './screens/Enrollment/Summary'
import LoginScreen from './screens/LoginScreen'
import Thankyou from './screens/Enrollment/Thankyou'
import TeamScreen from './screens/TeamScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const EnrollmentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='PersonalInfo'
        options={{ headerShown: false }}
        component={PersonalInfo}
        styles={styles.container}
      />
      <Stack.Screen
        name='Aboutyou'
        options={{ headerShown: false }}
        component={AboutYou}
        styles={styles.container}
      />
      <Stack.Screen
        name='AdditionalCompanion'
        options={{ headerShown: false }}
        component={AdditionalCompanion}
        styles={styles.container}
      />
      <Stack.Screen
        name='Summary'
        options={{ headerShown: false }}
        component={Summary}
        styles={styles.container}
      />
      <Stack.Screen
        name='ThankYou'
        options={{ headerShown: false }}
        component={Thankyou}
        styles={styles.container}
      />
    </Stack.Navigator>
  )
}
const EventsStack = () => {
  return (
    <Stack.Navigator initialRouteName='Stack'>
      <Stack.Screen
        name='EventsScreen'
        options={{ title: 'Events' }}
        component={EventsScreen}
        styles={styles.container}
      />
      <Stack.Screen
        name='Details'
        component={EventDetailsScreen}
        styles={styles.container}
      />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName

              if (route.name === 'Events') {
                iconName = 'home-outline'
              } else if (route.name === 'Login') {
                iconName = 'person-outline'
              } else if (route.name === 'Enrollment') {
                iconName = 'key-outline'
              } else if (route.name === 'Team') {
                iconName = 'people-outline'
              }

              return <Ionicons name={iconName} size={size} color={color} />
            },
          })}
        >
          <Tab.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name='Team'
            component={TeamScreen}
            options={{ title: 'Team' }}
          />
          <Tab.Screen
            name='Events'
            component={EventsStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name='Enrollment'
            component={EnrollmentStack}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <Toast
        style={{ zIndex: 1000, bottom: 0, right: 0, position: 'absolute' }}
        position='top'
      />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003333',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
