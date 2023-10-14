import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const StepsComponent = ({ step1, step2, step3, step4 }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.stepContainer,
          step1 ? styles.activeStep : styles.inactiveStep,
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('PersonalInfo')}
          style={{ color: 'teal' }}
        >
          <Text
            style={[
              styles.stepText,
              step1 ? styles.activeStepText : styles.inactiveStepText,
            ]}
          >
            1
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.stepContainer,
          step2 ? styles.activeStep : styles.inactiveStep,
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Aboutyou')}
          style={{ color: 'teal' }}
        >
          <Text
            style={[
              styles.stepText,
              step2 ? styles.activeStepText : styles.inactiveStepText,
            ]}
          >
            2
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.stepContainer,
          step3 ? styles.activeStep : styles.inactiveStep,
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('AdditionalCompanion')}
          style={{ color: 'teal' }}
        >
          <Text
            style={[
              styles.stepText,
              step3 ? styles.activeStepText : styles.inactiveStepText,
            ]}
          >
            3
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={[
          styles.stepContainer,
          step4 ? styles.activeStep : styles.inactiveStep,
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('Summary')}
          style={{ color: 'teal' }}
        >
          <Text
            style={[
              styles.stepText,
              step4 ? styles.activeStepText : styles.inactiveStepText,
            ]}
          >
            4
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  stepContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  activeStep: {
    backgroundColor: '#CC9966',
  },
  inactiveStep: {
    backgroundColor: 'lightgray',
  },
  stepText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeStepText: {
    color: '#FFFFFF',
  },
  inactiveStepText: {
    color: '#000',
  },
})

export default StepsComponent
