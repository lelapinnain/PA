import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { fetchTeam } from '../actions/teamAction'
import TeamCard from '../Components/TeamCard'

const TeanScreen = ({ navigation }) => {
  const renderItem = ({ item }) => <TeamCard member={item} />
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('useeffect')
    dispatch(fetchTeam())
  }, [dispatch])

  const { loading, team } = useSelector((state) => state.team)
  //console.log(team['teamMembers'])

  return (
    <SafeAreaView style={styles.container}>
      {!loading && team && (
        <FlatList
          data={team['teamMembers']}
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

export default TeanScreen
