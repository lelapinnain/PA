import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { fetchData } from '../actions/eventsAction'
import Card from '../Components/Card'

const EventsScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Card event={item} key={(item) => item.cta} navigation={navigation} />
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const { loading, data, error } = useSelector((state) => state.profile)

  return (
    <SafeAreaView style={styles.container}>
      {!loading && data && (
        <FlatList
          data={data['exclusive-experiences'].events}
          renderItem={renderItem}
          contentContainerStyle={styles.scroll}
        />
      )}
    </SafeAreaView>
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
  button: {
    backgroundColor: '#FFC107',
    padding: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
})

export default EventsScreen


PrivateAccess@ittest.com
