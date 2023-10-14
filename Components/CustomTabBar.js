import React from 'react'
import { View } from 'react-native'
import { BottomTabBar } from '@react-navigation/bottom-tabs'

const CustomTabBar = (props) => {
  const hiddenRoutes = ['Login', 'Enrollment'] // hidden routes
  const currentRoute = props.state.routes[props.state.index].name

  if (hiddenRoutes.includes(currentRoute)) {
    return <View style={{ height: 0 }} />
  }

  return <BottomTabBar {...props} />
}

export default CustomTabBar
